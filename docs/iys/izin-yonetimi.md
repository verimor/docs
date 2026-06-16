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
  "source_addr": "BASLIGINIZ",
  "consents": [
    {
      "recipient": "905001234567",
      "status": "ONAY",
      "type": "MESAJ",
      "source": "HS_WEB",
      "consent_date": "2024-01-15 10:30:00",
      "recipient_type": "BIREYSEL"
    }
  ]
}
```

`source_addr` boş bırakılırsa hesabınızdaki İYS kodları tanımlı ilk başlık kullanılır.

### İzin Parametreleri

| Parametre | Değerler | Açıklama |
|-----------|----------|----------|
| `recipient` | string | Alıcı telefon numarası (type=EPOSTA ise e-posta adresi) |
| `status` | `ONAY` / `RET` | İzin durumu |
| `type` | `MESAJ` / `ARAMA` / `EPOSTA` | İleti türü |
| `source` | Aşağıdaki tabloya bakın | İzin kaynağı |
| `recipient_type` | `BIREYSEL` / `TACIR` | Alıcı tipi |
| `consent_date` | `YYYY-MM-DD HH:MM:SS` | İzin tarihi (1 Mayıs 2015'ten önce olamaz, `BIREYSEL` için zorunlu) |

**İzin Kaynağı (`source`) Değerleri**

| Değer | Açıklama |
|-------|----------|
| `HS_WEB` | Web Sitesi |
| `HS_FIZIKSEL_ORTAM` | Fiziksel Ortam |
| `HS_ISLAK_IMZA` | Islak İmza |
| `HS_CAGRI_MERKEZI` | Çağrı Merkezi |
| `HS_SOSYAL_MEDYA` | Sosyal Medya |
| `HS_EPOSTA` | E-posta Yoluyla |
| `HS_MESAJ` | Mesaj Yoluyla |
| `HS_MOBIL` | Mobil Uygulama |
| `HS_EORTAM` | Elektronik Ortam |
| `HS_ETKINLIK` | Etkinlik |
| `HS_ATM` | ATM |
| `HS_KARAR` | HS Kararıyla (yalnızca `RET` ile kullanılır) |

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

## İYS Günlük Vatandaş Raporu

Vatandaşlar her gün E-Devlet, İYS web/mobil veya çağrı merkezi üzerinden izin değişikliği yapabilir. Bu değişiklikler gün sonunda toplu bir kampanya olarak oluşturulur ve Verimor, OİM'de tanımladığınız URL'ye bildirim gönderir.

**OİM'de URL tanımlamak için:** SMS Ayarlarım → İYS Push URL

```json
POST https://sizin.adresiniz.com.tr/iys_push
Content-Type: application/json

{
  "iys_campaign_id": 1234,
  "report_date": "2025-06-01",
  "source_addr": "BASLIGINIZ"
}
```

| Alan | Açıklama |
|------|----------|
| `iys_campaign_id` | Oluşturulan kampanyanın ID'si |
| `report_date` | Değişikliklerin ait olduğu tarih |
| `source_addr` | İlgili başlık |

Bildirimi aldıktan sonra `iys_campaign_id` ile [Kampanya Detayı](#kampanya-detayı) endpoint'ini sorgulaarak değişen izinlerin listesini alabilirsiniz.

---

## İYS Hata Kodları

| Kod | Açıklama | Çözüm |
|-----|----------|-------|
| `MISSING_IYS_BRAND_CODE` | Marka kodu tanımlanmamış | OİM'den başlığa marka kodu ekleyin |
| `AHS_AUTHORIZATION_ERROR` | İYS yetkilendirme hatası | İYS'den Verimor'a AHS izni verin |
| `NO_AHS_BRAND_ERROR` | VKN'ye kayıtlı marka yok | İYS'de marka kaydı yapın |
| `INVALID_IYS_RECIPIENT_TYPE` | Geçersiz alıcı tipi | `BIREYSEL` veya `TACIR` kullanın |
| `INVALID_CONSENT_DATE` | Geçersiz onay tarihi | 1 Mayıs 2015'ten önce olamaz |
| `NOT_ALLOWED_BY_IYS` | İYS izni yok | Alıcının onayı bulunmuyor |
