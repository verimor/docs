# Başlık Yönetimi

SMS gönderiminde kullanabileceğiniz onaylı alfanümerik başlıklarınızı listeler.

## Endpoint

```
GET https://sms.verimor.com.tr/v2/headers
```

## Örnek İstek

```bash
curl "https://sms.verimor.com.tr/v2/headers?username=kullanici@ornek.com&password=api_sifreniz"
```

## Yanıt

```json
[
  { "header": "VERIMOR" },
  { "header": "BILGI" },
  { "header": "KAMPANYA" }
]
```

::: info
BTK kararı gereği API üzerinden yapılan kampanya gönderimlerinde **alfanümerik olmayan başlıklar kullanılamaz**.

Yeni başlık tanımlamak için Verimor OİM üzerinden başvuru yapın. Başlıklar BTK onayından sonra aktif olur.
:::
