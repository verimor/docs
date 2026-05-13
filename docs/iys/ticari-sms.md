---
prev:
  text: 'İzin Yönetimi'
  link: '/iys/izin-yonetimi'
---

# Ticari Elektronik İleti Nedir?

Ticari elektronik ileti; bir işletmenin müşterilerine veya potansiyel 
müşterilerine SMS, e-posta veya sesli arama yoluyla gönderdiği reklam, 
tanıtım, kampanya, kutlama ve benzeri ticari amaçlı mesajları kapsar.

## Hangi Mesajlar Ticari İleti Sayılır?

Aşağıdaki içeriklere sahip mesajlar ticari elektronik ileti 
kapsamında değerlendirilir ve İYS izni zorunludur:

- İndirim, kampanya ve promosyon duyuruları
- Yeni ürün veya hizmet tanıtımları
- Marka veya firma reklamları
- Özel gün ve kutlama mesajları (firma adına gönderilen)
- Üyelik ve sadakat programı bildirimleri
- Müşteri geri kazanım mesajları

## Hangi Mesajlar Ticari İleti Sayılmaz?

İzin gerektirmeyen mesaj hürleri şunlardır:

| Mesaj Türü | Örnek |
|---|---|
| İşlem bildirimi | Sipariş onayı, ödeme makbuzu |
| Güvenlik mesajı | OTP, iki faktörlü doğrulama kodu |
| Teslimat bildirimi | Kargo takip numarası, teslimat güncelleme |
| Hizmet kesintisi bildirimi | Bakım, arıza, acil durum |
| Yasal bildirim | Fatura, sözleşme hatırlatması |

Bu mesajlar hizmet bildirimi niteliği taşıdığından ticari ileti 
kapsamı dışında kalır ve İYS izni aranmaz.

## İzin Nasıl Alınır?

Ticari ileti gönderebilmek için alıcının açık onayı gereklidir. 
İzin şu yollarla alınabilir:

- **Yazılı onay:** Üyelik formu, sözleşme veya fiziksel başvuruda imzalı onay
- **Elektronik onay:** Web sitesi kayıt formu, uygulama içi onay kutusu
- **SMS ile onay:** Alıcının belirli bir kısa numaraya onay mesajı göndermesi

İzin alındıktan sonra bu veri İYS sistemine yüklenmeli ve kayıt 
altına alınmalıdır.

## Cezai Yaptırımlar

İzinsiz ticari elektronik ileti göndermek, 6563 sayılı Kanun 
kapsamında idari para cezasına yol açar. Aynı ihlalde birden 
fazla alıcıya gönderim yapılması halinde ceza katlanarak uygulanır.

BTK, şikayetleri doğrudan İYS sistemi üzerinden takip eder. 
İzin kaydı olmayan gönderimler tespit edildiğinde firmaya 
tebligat yapılır.

## Sıkça Sorulan Sorular

**Müşteriye "iyi bayramlar" mesajı göndersem İYS izni gerekir mi?**  
Mesaj firma adına ve ticari niyetle gönderiliyorsa ticari 
ileti sayılır ve İYS izni zorunludur.

**Mevcut müşterilerime izin almadan mesaj atabilir miyim?**  
Hayır. Alışveriş yapmış olmak otomatik olarak ticari ileti 
iznine dönü�omez. Açık onay ayrıca alınmalıdır.

**İzin süresi dolabilir mi?**  
Verilen izin geri çekilmediği sürece geçerliliğini korur. 
Ancak alıcı istediği zaman reddedebilir.
## API İsteği

```json
{
  "username": "kullanici@ornek.com",
  "password": "api_sifreniz",
  "source_addr": "FIRMAADI",
  "is_commercial": true,
  "iys_recipient_type": "BIREYSEL",
  "messages": [
    {
      "dest": "905001234567",
      "msg": "Yaz kampanyamız başladı! Tüm ürünlerde %%30 indirim. İptal: IPTAL yaz, 4607'ye gönder."
    }
  ]
}
```

## Vazgeçme (Opt-out) Bildirimi

Ticari mesajlarınıza yasal olarak **vazgeçme yöntemi** eklemeniz zorunludur:

```
"Almak istemiyorsanız IPTAL yazıp 4607'ye gönderin."
```

Müşteri bu kodu gönderdiğinde ilgili numarayı kara listeye ekleyin:

```bash
curl -X POST https://sms.verimor.com.tr/v2/blacklists \
  -H "Content-Type: application/json" \
  -d '{"username": "kullanici@ornek.com", "password": "api_sifreniz", "phone": "905001234567"}'
```

## İlgili Sayfalar

- [İYS Nedir? →](/iys/nedir)
- [İzin Yönetimi →](/iys/izin-yonetimi)
- [Kara Liste →](/sms/kara-liste)
