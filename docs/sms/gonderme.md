# SMS Gönderme

İki farklı yöntemle SMS gönderilebilir: JSON (POST) veya Plain (GET).

::: info İstek Limiti
`send` endpoint'i (POST ve GET) dakikada 240 istekle sınırlıdır, burst değeri 80'dir. Bu limit `iys_consents` ile paylaşımlıdır — bkz. [Rate Limiting](/sms/rate-limiting). Sınır aşıldığında 429 (Too Many Requests) döner.
:::

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
| `add_ret` | boolean | Hayır | `true` ise gönderici başlığına ait ret bildirimi (`Ret: ...`) her mesajın sonuna otomatik eklenir. Bkz. [Ret Bildirimi](#ret-bildirimi) |

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

## Ret Bildirimi

Ticari iletilerde, alıcıların gönderimi reddedebilmesi için mesaja bir **ret bildirimi** eklenmesi yasal bir zorunluluktur (6563 sayılı kanun). İsteğe `add_ret: true` eklerseniz, gönderici başlığınıza ait ret bildirimini her mesajın sonuna biz otomatik ekleriz — böylece e-imzalı panel girişine gerek kalmadan API üzerinden de ret bildirimini gönderebilirsiniz.

Ret bildirimi, başlığınızın durumuna göre iki biçimde olabilir:

- **Link:** `Ret: www.ret.tc/XXXX` (İYS modülü olan hesaplarda `www.iys.tc/XXXX`)
- **Anahtar kelime:** `Ret: ORNEK ret yaz 4609'a gonder` (hesabınızda tanımlı bir SMS anahtar kelimesi varsa)

Hangi başlığa hangi metnin ekleneceğini panelde **Başlıklarım** sayfasından görebilirsiniz.

```json
{
  "username": "kullanici@ornek.com",
  "password": "api_sifreniz",
  "source_addr": "VERIMOR",
  "is_commercial": true,
  "iys_recipient_type": "BIREYSEL",
  "add_ret": true,
  "messages": [
    { "dest": "905001234567", "msg": "Size özel %20 indirim fırsatını kaçırmayın!" }
  ]
}
```

Mesaj boyu hesaplanırken eklenen ret bildiriminin uzunluğu da dikkate alınır.

::: info
`add_ret` yalnızca bu JSON (POST) yönteminde geçerlidir. Dilerseniz ret bildirimini parametre kullanmadan mesaj metninize kendiniz de ekleyebilirsiniz.
:::

---

## GET — Plain Yöntemi

Tek bir mesajı hızlıca göndermek için kullanılır.

::: warning Birden fazla numaraya gönderim yapacaksanız
GET yöntemi URL uzunluğu sınırına tabidir (bkz. [GET Yönteminin Limitleri](#get-yonteminin-limitleri)). Birden fazla numaraya gönderim için [POST — JSON yöntemini](#post-json-yontemi-onerilen) öneririz.
:::

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

### GET Yönteminin Limitleri

GET yöntemiyle istek başına **tek bir mesaj metni** gönderilebilir (`msg` parametresi bir adettir); aynı metin `dest` parametresindeki birden fazla numaraya iletilir.

Gönderilebilecek numara adedini belirleyen sınır, URL'nin toplam uzunluğudur: URL'nin `/v2/send?...` ile başlayan kısmı (path + query string) en fazla **8.177 karakter** olabilir. Bu sınır aşılırsa sunucu `414 Request-URI Too Large` hatası döner.

Pratikte bu, kısa bir mesaj metniyle istek başına yaklaşık **600 numaraya** karşılık gelir (`905XXXXXXXXX` formatında bir numara + virgül = 13 karakter). Mesaj metni uzadıkça — özellikle URL encode edilen Türkçe karakterler 3'er karakter yer kapladığı için — gönderilebilecek numara sayısı azalır.

::: tip Toplu gönderim için POST kullanın
Çok sayıda numaraya veya numara başına farklı metinlerle gönderim yapacaksanız [POST — JSON yöntemini](#post-json-yontemi-onerilen) kullanın; istek başına 50.000 mesaja kadar destekler ve URL uzunluğu sınırından etkilenmez.
:::

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

::: info İstek Limiti
`cancel` endpoint'i `send`'in aksine genel havuza tabidir: dakikada 20 istek, burst 10 (bkz. [Rate Limiting](/sms/rate-limiting)). Sınır aşıldığında 429 (Too Many Requests) döner.
:::
