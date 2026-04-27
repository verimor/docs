# Kimlik Doğrulama

Kimlik doğrulama yöntemi isteğin türüne göre değişir.

## POST İstekleri

`/v2/send.json` gibi POST endpoint'lerinde `username` ve `password` bilgileri istek gövdesinde (JSON) gönderilir.

```json
{
  "username": "kullanici@ornek.com",
  "password": "api_sifreniz",
  "source_addr": "BASLIK",
  "messages": [...]
}
```

## GET İstekleri

`/v2/balance`, `/v2/status` gibi GET endpoint'lerinde kimlik bilgileri URL query string olarak gönderilir.

```bash
curl "https://sms.verimor.com.tr/v2/balance?username=kullanici@ornek.com&password=api_sifreniz"
```

## API Şifrenizi Almak

API şifrenizi **Verimor Online İşlem Merkezi (OİM)** > **SMS Ayarları** > **API** bölümünden oluşturabilirsiniz.

::: warning Güvenlik
- API şifresini kaynak koduna gömmeyin; ortam değişkeni veya secret vault kullanın.
- Tüm istekler HTTPS üzerinden yapılmalıdır.
- SSL doğrulama hatası alırsanız [lets-encrypt-r3.crt](https://github.com/verimor/SMS-API/blob/master/lets-encrypt-r3.crt) kök sertifikasını sisteminize kurmanız gerekebilir.
:::
