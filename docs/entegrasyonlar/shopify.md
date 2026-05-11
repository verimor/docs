---
prev:
  text: 'Entegrasyonlara Genel Bakış'
  link: '/entegrasyonlar/'
next:
  text: 'Opencart'
  link: '/entegrasyonlar/opencart'
---

# Shopify 

Shopify Bulut Santral entegrasyonu, sipariş/kargo bilgisini otomatik sesli
robot (IVR/TTS) ile iletir; kapıda ödeme siparişlerini otomatik arayarak onaylar
ve sonuçları doğrudan Shopify sistemine aktarır.

**Entegrasyon Türü:** E-Ticaret Platformu
**Verimor Hizmetleri:** Bulut Santral, SMS

---

## Özellikler

**Sipariş/Kargo Durumu IVR**
Müşteriler aradığında sesli robot, sipariş numarasıyla eşleşen bilgiyi
otomatik olarak okur. Farklı numaradan aramada müşteriden kayıtlı numarasını
tuşlaması istenir.

**Kapıda Ödeme Onayı**
Kapıda ödeme siparişleri için IVR robotu müşteriyi arar ve onay alır;
sonuç Shopify sistemine otomatik aktarılır.

**Müşteri Tanıma Popup**
Sizi arayan müşterilerin bilgileri çağrı merkezi ekranında otomatik açılır.
Müşteriyi ismiyle karşılayabilir, geçmiş sipariş ve görüşmelere hızlı
erişim sağlayabilirsiniz.
## Kurulum Adımları

### 1. Verimor API Bilgilerinizi Hazırlayın

- OİM > **SMS Ayarları** > **API** bölümünden kullanıcı adı ve API şifrenizi alın
- Onaylı bir SMS başlığınız olduğundan emin olun

### 2. Shopify Flow veya Webhook Kullanımı

Shopify'da SMS bildirimleri için iki yöntem kullanılabilir:

**Yöntem A — Shopify Flow (Kodsuz)**

1. Shopify Admin > **Flow** uygulamasını açın
2. Yeni bir otomasyon oluşturun
3. Tetikleyici olarak "Sipariş oluşturuldu", "Kargo oluşturuldu" vb. seçin
4. Aksiyon olarak **HTTP isteği gönder**'i seçin
5. Aşağıdaki ayarları girin:

```
URL: https://sms.verimor.com.tr/v2/send.json
Yöntem: POST
İçerik Tipi: application/json
```

Gövde:
```json
{
  "username": "kullanici@ornek.com",
  "password": "api_sifreniz",
  "source_addr": "MAGANIZADI",
  "messages": [
    {
      "dest": "{{order.phone}}",
      "msg": "Merhaba {{order.customer.first_name}}, #{{order.order_number}} numaralı siparişiniz alındı. Teşekkürler!"
    }
  ]
}
```

**Yöntem B — Özel Uygulama / Webhook**

Shopify webhook'larını dinleyen bir sunucu yazarak Verimor API'ye istek atabilirsiniz:

```javascript
// Sipariş oluşturuldu webhook'u geldiğinde
app.post('/webhooks/orders/create', async (req, res) => {
  const order = req.body
  if (!order.phone) return res.sendStatus(200)

  await fetch('https://sms.verimor.com.tr/v2/send.json', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: process.env.VERIMOR_USER,
      password: process.env.VERIMOR_PASS,
      source_addr: 'MAGANIZADI',
      messages: [{
        dest: order.phone.replace(/\D/g, ''),
        msg: `Siparişiniz alındı! Sipariş No: ${order.order_number}`
      }]
    })
  })
  res.sendStatus(200)
})
```

## Önerilen Bildirim Senaryoları

| Olay | Mesaj Örneği |
|------|-------------|
| Sipariş alındı | "Siparişiniz alındı! No: #1234. Teşekkürler." |
| Ödeme onaylandı | "Ödemeniz onaylandı. Siparişiniz hazırlanıyor." |
| Kargoya verildi | "Siparişiniz kargoya verildi. Takip: ABC123" |
| Teslim edildi | "Siparişiniz teslim edildi. İyi kullanımlar!" |

## Numara Formatı

Shopify'dan gelen telefon numaraları farklı formatlarda olabilir. Verimor `905XXXXXXXXX` formatını bekler:

```javascript
function formatPhone(phone) {
  const digits = phone.replace(/\D/g, '')
  if (digits.startsWith('0')) return '9' + digits
  if (digits.startsWith('5')) return '90' + digits
  return digits
}
```

## İlgili Sayfalar

- [SMS API Gönderme →](/sms/gonderme)
- [Hata Kodları →](/sms/hata-kodlari)
