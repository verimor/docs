---
prev:
  text: 'Workcube'
  link: '/entegrasyonlar/workcube'
next:
  text: 'DinamikCRM'
  link: '/entegrasyonlar/dinamik-crm'
---

# Zoho CRM Entegrasyonu

Zoho CRM'e Verimor SMS entegrasyonu ekleyerek müşteri iletişimini otomatikleştirin.

## Kurulum — Zoho Flow ile

**Zoho Flow**, kodlama gerektirmeden SMS otomasyonu kurmanın en hızlı yöntemidir.

1. [flow.zoho.com](https://flow.zoho.com) adresine gidin
2. **New Flow** oluşturun
3. Tetikleyici olarak Zoho CRM olayı seçin (örn. "Lead Created", "Deal Stage Changed")
4. Aksiyon olarak **Webhook** ekleyin:

```
URL: https://sms.verimor.com.tr/v2/send.json
Metod: POST
Content-Type: application/json
```

Gövde:
```json
{
  "username": "kullanici@ornek.com",
  "password": "api_sifreniz",
  "source_addr": "FIRMAADI",
  "messages": [
    {
      "dest": "{{lead.Mobile}}",
      "msg": "Merhaba {{lead.First_Name}}, talebiniz alındı. En kısa sürede dönüş yapacağız."
    }
  ]
}
```

## Kurulum — Zoho Deluge (Özel Fonksiyon) ile

Zoho CRM içinde Deluge scripti ile daha gelişmiş senaryolar oluşturabilirsiniz:

1. Zoho CRM > **Settings** > **Automation** > **Functions**
2. **New Function** oluşturun
3. Aşağıdaki Deluge kodunu yapıştırın:

```javascript
void sendSms(String phone, String message)
{
    payload = Map();
    payload.put("username", "kullanici@ornek.com");
    payload.put("password", "api_sifreniz");
    payload.put("source_addr", "FIRMAADI");

    msg = Map();
    msg.put("dest", phone);
    msg.put("msg", message);

    messages = List();
    messages.add(msg);
    payload.put("messages", messages);

    response = invokeurl
    [
        url: "https://sms.verimor.com.tr/v2/send.json"
        type: POST
        parameters: payload.toString()
        headers: {"Content-Type": "application/json"}
    ];
}
```

4. Workflow kurallarında bu fonksiyonu tetikleyin

## Yaygın Kullanım Senaryoları

| Olay | Mesaj |
|------|-------|
| Yeni lead oluşturuldu | "Talebiniz alındı, ekibimiz 24 saat içinde arayacak." |
| Teklif gönderildi | "Teklifiniz hazır, e-postanızı kontrol edin." |
| Anlaşma kapandı | "Tebrikler! Sözleşmeniz onaylandı." |
| Görev hatırlatma | "Yarın saat 10:00'da toplantınız var." |

## İlgili Sayfalar

- [SMS API Gönderme →](/sms/gonderme)
- [Bulut Santralim API →](/switch/giris)
