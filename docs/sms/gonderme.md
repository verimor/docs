# SMS Gönderme

İki farklı yöntemle SMS gönderilebilir: JSON (POST) veya Plain (GET).

## POST — JSON Yöntemi (Önerilen)

```
POST https://sms.verimor.com.tr/v2/send.json
Content-Type: application/json
```

### İstek Parametreleri

| Parametre | Tip | Zorunlu | Açıklama |
|-----------|-----|---------|----------|
| `username` | string | Evet | API kullanıcı adı |
| `password` | string | Evet | API şifresi |
| `source_addr` | string | Hayır | Gönderici başlığı. Boş bırakılırsa sistemdeki ilk başlık kullanılır |
| `messages` | array | Evet | Mesaj listesi (max 50.000) |
| `send_at` | string | Hayır | İleri tarihli gönderim — ISO 8601: `2025-06-01 09:00:00` |
| `valid_for` | string | Hayır | Mesaj geçerlilik süresi `SS:DD` formatında (varsayılan: `24:00`, min: `00:01`, max: `48:00`) |
| `datacoding` | integer | Hayır | `0` = GSM Basic, `1` = GSM Türkçe (Ş ş Ğ ğ ç ı İ), `2` = Unicode (emoji, özel karakterler) |
| `is_commercial` | boolean | Hayır | Ticari ileti ise `true` |
| `iys_recipient_type` | string | Hayır | `BIREYSEL` veya `TACIR` (ticari gönderimde zorunlu) |
| `custom_id` | string | Hayır | Kampanyaya özel ID (rapor sorgularken kullanılabilir) |

### messages[] Nesnesi

| Alan | Tip | Zorunlu | Açıklama |
|------|-----|---------|----------|
| `dest` | string | Evet | Alıcı numaralar, virgülle ayrılmış: `905001234567,905007654321` |
| `msg` | string | Evet | Mesaj içeriği. Yeni satır için `\n` kullanın |
| `id` | string | Hayır | Mesaj bazında özel ID |
| `iys_recipient_type` | string | Hayır | Mesaj bazında İYS tipi (kampanya genelini ezer) |

### Örnek — Tekli Gönderim

```json
{
  "username": "kullanici@ornek.com",
  "password": "api_sifreniz",
  "source_addr": "VERIMOR",
  "messages": [
    {
      "dest": "905001234567",
      "msg": "Siparişiniz kargoya verildi. Takip no: 123456"
    }
  ]
}
```

### Örnek — Toplu, Farklı Mesajlar

```json
{
  "username": "kullanici@ornek.com",
  "password": "api_sifreniz",
  "source_addr": "VERIMOR",
  "datacoding": 1,
  "messages": [
    { "dest": "905001234567", "msg": "Sayın Ahmet Bey, bakiyeniz: 150 TL" },
    { "dest": "905007654321", "msg": "Sayın Ayşe Hanım, bakiyeniz: 320 TL" }
  ]
}
```

### Örnek — Zamanlanmış Gönderim

```json
{
  "username": "kullanici@ornek.com",
  "password": "api_sifreniz",
  "source_addr": "VERIMOR",
  "send_at": "2025-12-31 23:59:00",
  "messages": [
    { "dest": "905001234567", "msg": "Mutlu Yıllar!" }
  ]
}
```

### Yanıt

```json
{
  "campaign_id": 98765432,
  "custom_id": null,
  "status": "0"
}
```

`campaign_id` değerini rapor sorgulamak için saklayın.

---

## GET — Plain Yöntemi

Tek bir mesajı birden fazla numaraya göndermek için kullanılır.

```
GET https://sms.verimor.com.tr/v2/send
```

| Parametre | Açıklama |
|-----------|----------|
| `username` | API kullanıcı adı |
| `password` | API şifresi |
| `dest` | Alıcı numaralar (virgülle ayrılmış) |
| `msg` | Mesaj metni (URL encode edilmiş) |
| `source_addr` | Gönderici başlığı |
| `datacoding` | `0`, `1` veya `2` |
| `send_at` | Zamanlanmış gönderim: `2025-06-01 09:00:00` |
| `valid_for` | Geçerlilik süresi |
| `is_commercial` | `true` / `false` |
| `iys_recipient_type` | `BIREYSEL` / `TACIR` |

```bash
curl "https://sms.verimor.com.tr/v2/send?username=kullanici@ornek.com&password=api_sifreniz&dest=905001234567,905007654321&msg=Merhaba&source_addr=VERIMOR"
```

---

## SMS Boy Karakter Limitleri

| Boy | GSM Basic (`datacoding=0`) | GSM Türkçe (`datacoding=1`) | Unicode (`datacoding=2`) |
|-----|---------------------------|------------------------------|--------------------------|
| 1 | 0 – 160 | 0 – 155 | 0 – 70 |
| 2 | 161 – 306 | 156 – 298 | 71 – 134 |
| 3 | 307 – 459 | 299 – 447 | 135 – 201 |
| 4 | 460 – 612 | 448 – 596 | 202 – 268 |
| 5 | 613 – 765 | 597 – 745 | 269 – 335 |

::: info Türkçe Karakter Notu
Sadece **Ş ş Ğ ğ ç ı İ** harfleri `datacoding=1` gerektirir. Ö ö Ü ü Ç harflerini `datacoding=0` ile gönderebilirsiniz.

`datacoding=0` veya `1`'de şu karakterler **2 karakter** sayılır: `^ { } \ [ ] ~ | €`
:::

---

## İptal Etme

İleri tarihli bir gönderimi iptal etmek için:

```
POST https://sms.verimor.com.tr/v2/cancel/{campaign_id}
```

```bash
curl -X POST "https://sms.verimor.com.tr/v2/cancel/98765432?username=kullanici@ornek.com&password=api_sifreniz"
```
