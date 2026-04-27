# Kara Liste

SMS almak istemeyen numaraları yönetmek için kullanılır.

## Karaliste Sorgulama

```
GET https://sms.verimor.com.tr/v2/blacklists
```

```bash
curl "https://sms.verimor.com.tr/v2/blacklists?username=kullanici@ornek.com&password=api_sifreniz"
```

```json
[
  { "phone": "905001234567", "created_at": "2024-01-10 12:00:00" }
]
```

---

## Karalisteye Numara Ekleme

```
POST https://sms.verimor.com.tr/v2/blacklists
Content-Type: application/json
```

```json
{
  "username": "kullanici@ornek.com",
  "password": "api_sifreniz",
  "phone": "905001234567"
}
```

---

## Karalisteden Numara Silme

```
DELETE https://sms.verimor.com.tr/v2/blacklists/{phones}
```

`{phones}` yerine virgülle ayrılmış numaralar verilebilir.

```bash
curl -X DELETE "https://sms.verimor.com.tr/v2/blacklists/905001234567?username=kullanici@ornek.com&password=api_sifreniz"
```
