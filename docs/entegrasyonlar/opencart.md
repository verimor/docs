---
prev:
  text: 'Shopify'
  link: '/entegrasyonlar/shopify'
next:
  text: 'İdeasoft'
  link: '/entegrasyonlar/ideasoft'
---

# Opencart 

Opencart Bulut Santral entegrasyonu, müşterilerin sipariş ve kargo bilgilerini
hızlı ve kolay bir şekilde öğrenmesini sağlar.

**Entegrasyon Türü:** E-Ticaret Platformu
**Verimor Hizmetleri:** Bulut Santral, SMS

---

## Özellikler

**Sipariş/Kargo IVR**
Sipariş kaydıyla eşleşen telefon numarasından arayan müşteriler, otomatik
sesli robot (IVR/TTS) ile anında bilgilendirilir. Farklı numaradan aramada
müşteriden kayıtlı numarasını tuşlaması istenir.

**Kapıda Ödeme Onayı**
Kapıda ödeme siparişleri için sistem otomatik aramalarla onay alır ve veriler
doğrudan Opencart sistemine aktarılır.

**Müşteri Popup**
Sizi arayan müşterilerin bilgileri çağrı merkezi ekranında otomatik açılır.

**Öne Çıkan Özellikler**
- Sipariş ve kargo durumlarını anında otomatik sesli yanıt ile iletme
- Kapıda ödeme için IVR üzerinden otomatik onay
- Farklı numaralardan aramalarda kolay doğrulama
- Müşteri bilgilerine çağrı merkezi ekranından hızlı erişim
## Kurulum

### 1. Modül Kurulumu

1. Opencart Admin Paneli > **Extensions** > **Extension Installer**'a gidin
2. Verimor SMS modülünü yükleyin (`.ocmod.zip` dosyası)
3. **Extensions** > **Modifications** > **Refresh** yapın
4. **Extensions** > **Extensions** > Filtreden "SMS" seçin
5. Verimor modülünü **Install** edin

### 2. Modül Ayarları

**Extensions** > **Extensions** > Verimor SMS > **Edit**:

| Alan | Değer |
|------|-------|
| Kullanıcı Adı | OİM'deki API kullanıcı adınız |
| Şifre | OİM'deki API şifreniz |
| Gönderici Başlık | Onaylı alfanümerik başlığınız |
| Durum | Aktif |

### 3. Bildirim Tetikleyicileri

Hangi sipariş durumlarında SMS gönderileceğini seçin:

- ☑ Sipariş alındı
- ☑ Ödeme onaylandı
- ☑ Kargoya verildi
- ☑ Teslim edildi
- ☐ İptal edildi

## Manuel Entegrasyon

Modül kullanmak istemiyorsanız Opencart'ın olay sistemini kullanabilirsiniz:

```php
// catalog/model/checkout/order.php veya event sistemi üzerinden
function sendOrderSms($order_id, $status) {
    $order = $this->model_checkout_order->getOrder($order_id);
    if (empty($order['telephone'])) return;

    $phone = preg_replace('/\D/', '', $order['telephone']);
    if (strlen($phone) === 10) $phone = '90' . $phone;

    $payload = [
        'username'    => 'kullanici@ornek.com',
        'password'    => 'api_sifreniz',
        'source_addr' => 'MAGANIZADI',
        'messages'    => [[
            'dest' => $phone,
            'msg'  => "Siparişiniz #{$order_id} alındı. Teşekkürler!"
        ]]
    ];

    $ch = curl_init('https://sms.verimor.com.tr/v2/send.json');
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => json_encode($payload),
        CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
        CURLOPT_RETURNTRANSFER => true,
    ]);
    curl_exec($ch);
    curl_close($ch);
}
```

## İlgili Sayfalar

- [SMS API Gönderme →](/sms/gonderme)
- [Hızlı Başlangıç (PHP) →](/sms/giris)
