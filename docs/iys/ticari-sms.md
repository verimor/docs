---
prev:
  text: 'İzin Yönetimi'
  link: '/iys/izin-yonetimi'
---

# Ticari SMS Gönderimi

İYS uyumlu ticari SMS göndermek için API isteğine birkaç ek parametre eklemeniz yeterlidir.

## Gereksinimler

Ticari SMS göndermeden önce:

1. Markanızı [iys.org.tr](https://iys.org.tr) üzerinden İYS'ye kaydedin
2. Verimor OİM > **SMS Ayarları** > **Başlıklar** bölümünde başlığa **İYS Marka Kodu** ekleyin
3. Gönderim listenizdeki numaraların İYS onayı bulunduğundan emin olun

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
