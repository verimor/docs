# Hata Kodları

## HTTP Durum Kodları

| Kod | Açıklama |
|-----|----------|
| `200` | Başarılı |
| `400` | Geçersiz istek parametresi |
| `401` | Kimlik doğrulama hatası |
| `403` | Yetkisiz erişim |
| `413` | Paket boyutu 10 MB limitini aştı |
| `422` | İşlenemeyen varlık |
| `429` | Rate limit aşıldı (dakikada 240 istek) |
| `500` | Sunucu hatası |

---

## Gönderim Sırasında Dönen Hata Kodları

| API Kodu | Açıklama |
|----------|----------|
| `INVALID_SOURCE_ADDRESS` | Başlık kabul edilmedi |
| `MISSING_MESSAGE` | Mesaj içeriği verilmemiş |
| `MESSAGE_TOO_LONG` | Mesaj çok uzun |
| `INVALID_PERIOD` | Geçerlilik süresi geçersiz (1 dk – 48 saat arasında olmalı) |
| `INVALID_DELIVERY_TIME` | `send_at` geçersiz veya geçmiş tarih |
| `INVALID_DATACODING` | `datacoding` parametresi hatalı |
| `MISSING_DESTINATION_ADDRESS` | Alıcı numarası verilmemiş |
| `INVALID_DESTINATION_ADDRESS` | Numara formatı geçersiz (905121234567 formatında olmalı) |
| `INVALID_UTF8` | Encoding UTF-8 olmalı |
| `MUKERRER_RAPORLAMA` | 24 saat içinde aynı SMS zaten gönderilmiş |
| `INSUFFICIENT_CREDITS` | Yetersiz bakiye |
| `FORBIDDEN_MESSAGE` | Mesaj yasak kelime içeriyor |
| `INVALID_JSON` | Geçersiz JSON |
| `MESSAGE_COUNT_LIMIT_EXCEEDED` | Tek istekte 50.000 adetten fazla mesaj kabul edilmez |
| `NUMERIC_SOURCE_ADDRESS_NOT_ALLOWED` | Alfanümerik olmayan başlıklar API üzerinden kullanılamaz |
| `MISSING_IYS_BRAND_CODE` | Ticari gönderimde başlığın marka kodu tanımlı olmalı |
| `AHS_AUTHORIZATION_ERROR` | İYS yetkilendirme hatası |
| `NO_AHS_BRAND_ERROR` | VKN'ye ait İYS'de kayıtlı marka bulunamadı |
| `INVALID_IYS_RECIPIENT_TYPE` | `iys_recipient_type` `BIREYSEL` veya `TACIR` olmalı |
| `INVALID_CONSENT_DATE` | `consent_date` geçersiz |
| `MISSING_CONSENT` | Eksik izin durumu |
| `MISSING_CONSENT_DATE` | Bireysel gönderimde `consent_date` zorunlu |
| `INVALID_RECIPIENT` | Geçersiz gönderim tipi |

---

## Mesaj Durum Hata Kodları (GSM Error)

İletilemeyen mesajlar için operatörden alınan teknik hata kodları:

| No | Kod | Açıklama |
|----|-----|----------|
| 1 | `EC_UNKNOWN_SUBSCRIBER` | Numara operatör veritabanında kayıtlı değil |
| 6 | `EC_ABSENT_SUBSCRIBER_SM` | Telefon kapalı veya sinyal yok |
| 11 | `EC_TELESERVICE_NOT_PROVISIONED` | Mobil hizmet operatör tarafından durdurulmuş |
| 13 | `EC_CALL_BARRED` | Abone DND (Rahatsız Etme) modunda |
| 27 | `EC_ABSENT_SUBSCRIBER` | Telefon kapatılmış |
| 31 | `EC_SUBSCRIBER_BUSY_FOR_MT_SMS` | Operatör aşırı trafik nedeniyle meşgul |
| 32 | `EC_SM_DELIVERY_FAILURE` | Operatör mesajı abonesine iletemiyor |
| 34 | `EC_SYSTEM_FAILURE` | Operatör sistem hatası |
| 256 | `EC_SM_DF_MEMORYCAPACITYEXCEEDED` | Telefon belleği dolu |
| 502 | `EC_NO_RESPONSE` | Mesaj gönderildi; iletim raporu dönmedi |
| 2048 | `EC_TIME_OUT` | Geçerlilik süresi içinde iletilemedi |
| 2049 | `EC_IMSI_BLACKLISTED` | SIM kart operatörün kara listesinde |
| 2050 | `EC_DEST_ADDRESS_BLACKLISTED` | Numara kara listede |
| 4100 | `EC_MESSAGE_CANCELED` | Geçerlilik süresi içinde iletilemedi |
| 4103 | `EC_DESTINATION_FLOODING` | Alıcı çok fazla mesaj aldı |
| 4104 | `EC_DESTINATION_TXT_FLOODING` | Aynı içerik çok defa gönderilmiş |
