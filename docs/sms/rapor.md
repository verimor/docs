# Rapor Sorgulama

::: tip Push Yöntemi
Rapor sorgulama dakikada 20 istekle sınırlıdır. Yüksek hacimli gönderimlerde Push (webhook) yöntemini kullanmanız önerilir.
:::

## Kampanya ID ile Sorgulama

```
GET https://sms.verimor.com.tr/v2/status
```

| Parametre | Zorunlu | Açıklama |
|-----------|---------|----------|
| `username` | Evet | API kullanıcı adı |
| `password` | Evet | API şifresi |
| `id` | Evet | Gönderim sırasında dönen `campaign_id` |
| `dest` | Hayır | Belirli bir numaranın durumunu filtreler |
| `greater_than` | Hayır | Verilen `message_id`'den büyük mesajları getirir (büyük kampanyalarda sayfalama için) |

```bash
curl "https://sms.verimor.com.tr/v2/status?username=kullanici@ornek.com&password=api_sifreniz&id=98765432"
```

## Custom ID ile Sorgulama

```
GET https://sms.verimor.com.tr/v2/status?custom_id={custom_id}
```

Gönderimde verdiğiniz `custom_id` ile aynı şekilde sorgulanabilir.

---

## Mesaj Durum Değerleri

| Durum | Web Arayüzü | Açıklama |
|-------|-------------|----------|
| `SENDING` | Gönderiliyor | Mesaj iletim sürecinde |
| `WAITING` | Bekliyor | Gönderildi, operatörden teyit bekleniyor |
| `DELIVERED` | İletildi | Alıcıya başarıyla iletildi |
| `SENT` | İletildi | İletildi; operatör raporlamayı desteklemediğinden teyit yok (genelde uluslararası) |
| `NOT_DELIVERED` | İletilemedi | İletim başarısız (genellikle pasif/kapalı numara) |
| `EXPIRED` | Zaman Aşımı | Geçerlilik süresi doldu, iletilemedi |
| `REJECTED` | Reddedildi | Operatör içerik kontrolü sonucu reddetti |
| `DOUBLE_SEND_ERROR` | Mükerrer | Aynı içerik aynı gün aynı başlıkla aynı numaraya gönderilmiş |
| `BLACKLISTED_DESTINATION_ADDRESS` | Karalistede | Alıcı kara listenizde |
| `NOT_ALLOWED_BY_IYS` | İYS izni yok | İYS sistemi izin vermedi |
| `INVALID_DESTINATION_ADDRESS` | Hatalı Numara | Numara hiçbir operatöre kayıtlı değil |
| `MISSING_TARIFF` | Tarife Yok | Alıcı operatörü tarifelerimizde bulunmuyor (uluslararası) |
| `ROUTE_NOT_AVAILABLE` | Geçersiz Şebeke | Hesabınız bu alıcıya mesaj gönderemiyor |
| `NETWORK_NOTCOVERED` | Geçersiz Şebeke | Hesabınız bu alıcıya mesaj gönderemiyor (uluslararası) |
| `SEND_ERROR` | Gönderim Hatası | Gönderilirken hata oluştu |
| `INTERNATIONAL_DENIED` | Uluslararası Kapalı | OİM'de uluslararası gönderim kapalı |

---

## Gelen SMS Raporu

Hesabınıza gelen SMS'leri sorgulamak için:

```
GET https://sms.verimor.com.tr/v2/inbound_messages
```

```bash
curl "https://sms.verimor.com.tr/v2/inbound_messages?username=kullanici@ornek.com&password=api_sifreniz"
```
