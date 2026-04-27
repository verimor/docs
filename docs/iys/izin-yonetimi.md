---
prev:
  text: 'İYS Nedir?'
  link: '/iys/nedir'
next:
  text: 'Ticari SMS Gönderimi'
  link: '/iys/ticari-sms'
---

# İzin Yönetimi

İYS kapsamında müşteri izinlerini Verimor API üzerinden yönetebilirsiniz.

## İzin Gönderme

Topladığınız onayları İYS'ye bildirmek için `/v2/iys_consents.json` endpoint'ini kullanın.

```
POST https://sms.verimor.com.tr/v2/iys_consents.json
```

```json
{
  "username": "kullanici@ornek.com",
  "password": "api_sifreniz",
  "iys_brand_code": "MARKA_KODUNUZ",
  "consents": [
    {
      "phone": "905001234567",
      "status": "ONAY",
      "type": "MESAJ",
      "source": "HS_WEB",
      "consent_date": "2024-01-15 10:30:00",
      "recipient_type": "BIREYSEL"
    }
  ]
}
```

### İzin Parametreleri

| Parametre | Değerler | Açıklama |
|-----------|----------|----------|
| `status` | `ONAY` / `RET` | İzin durumu |
| `type` | `MESAJ` / `ARAMA` / `EPOSTA` | İleti türü |
| `source` | `HS_WEB`, `HS_CAGRI`, `HS_BAYI`, `HS_MAGAZA`, `HS_ETICARET`, `HS_ETKINLIK`, `HS_2015` | İzin kaynağı |
| `recipient_type` | `BIREYSEL` / `TACIR` | Alıcı tipi |
| `consent_date` | `YYYY-MM-DD HH:MM:SS` | İzin tarihi (1 Mayıs 2015'ten önce olamaz) |

## İzin Kampanya Sorgulama

İYS'ye gönderilen izinlerin işlenme durumunu sorgulayın.

```
GET https://sms.verimor.com.tr/v2/iys/campaigns
```

```bash
curl "https://sms.verimor.com.tr/v2/iys/campaigns?username=kullanici@ornek.com&password=api_sifreniz"
```

## Kampanya Detayı

```
GET https://sms.verimor.com.tr/v2/iys/campaigns/{id}/consents
```

```bash
curl "https://sms.verimor.com.tr/v2/iys/campaigns/123/consents?username=kullanici@ornek.com&password=api_sifreniz"
```

## İYS Hata Kodları

| Kod | Açıklama | Çözüm |
|-----|----------|-------|
| `MISSING_IYS_BRAND_CODE` | Marka kodu tanımlanmamış | OİM'den başlığa marka kodu ekleyin |
| `AHS_AUTHORIZATION_ERROR` | İYS yetkilendirme hatası | İYS'den Verimor'a AHS izni verin |
| `NO_AHS_BRAND_ERROR` | VKN'ye kayıtlı marka yok | İYS'de marka kaydı yapın |
| `INVALID_IYS_RECIPIENT_TYPE` | Geçersiz alıcı tipi | `BIREYSEL` veya `TACIR` kullanın |
| `INVALID_CONSENT_DATE` | Geçersiz onay tarihi | 1 Mayıs 2015'ten önce olamaz |
| `NOT_ALLOWED_BY_IYS` | İYS izni yok | Alıcının onayı bulunmuyor |
