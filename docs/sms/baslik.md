# Başlık Yönetimi

SMS başlıklarınızı API üzerinden yönetebilirsiniz: onaylı başlıklarınızı **listeleyebilir**, yeni bir başlık **talebi oluşturabilir** ve mevcut taleplerinizin **durumunu sorgulayabilirsiniz**.

## Onaylı Başlıkları Listeleme

SMS gönderiminde kullanabileceğiniz onaylı alfanümerik başlıklarınızı listeler.

### Endpoint

```
GET https://sms.verimor.com.tr/v2/headers
```

### Örnek İstek

```bash
curl "https://sms.verimor.com.tr/v2/headers?username=kullanici@ornek.com&password=api_sifreniz"
```

### Yanıt

```json
[
  { "header": "VERIMOR" },
  { "header": "BILGI" },
  { "header": "KAMPANYA" }
]
```

::: info
BTK kararı gereği API üzerinden yapılan kampanya gönderimlerinde **alfanümerik olmayan başlıklar kullanılamaz**.
:::

---

## Yeni Başlık Talebi Oluşturma

Daha önce yalnızca Verimor OİM üzerinden yapılabilen başlık başvurusu artık API üzerinden de yapılabilir. Talep oluşturulduğunda başlık **Onay Bekliyor** durumunda açılır; onay/ret işlemi Verimor tarafından gerçekleştirilir ve başlık BTK onayından sonra aktif olur.

### Endpoint

```
POST https://sms.verimor.com.tr/v2/header_requests
```

Belge yüklemek için istek `multipart/form-data` formatında gönderilmelidir.

::: warning Belge yüklerken dikkat
Belge **JSON gövdesiyle gönderilemez.** İstek `multipart/form-data` olmalı ve `proof`
alanı gerçek bir **dosya** olarak gönderilmelidir (örn. curl'de `-F "proof=@dosya"`).

`Content-Type: application/json` ile gönderip `proof` alanına bir dosya yolu/metni
yazarsanız belge **yüklenmez** ve istek `INVALID_PROOF_FILE` hatasıyla reddedilir —
çünkü sunucu sizin makinenizdeki yerel dosya yolunu okuyamaz, dosyanın içeriğini
almalıdır.

**Yanlış (dosya yüklenmez):**
```bash
curl -X POST 'https://sms.verimor.com.tr/v2/header_requests' \
  -H 'Content-Type: application/json' \
  -d '{"username":"...","password":"...","name":"BASLIGIM","relation":"ticari-unvan","proof":"/home/kullanici/belge.png"}'
```

**Doğru (multipart, dosya yüklenir):** aşağıdaki **Örnek İstek** bölümüne bakın.
:::

### Parametreler

| Parametre | Zorunlu | Açıklama |
|-----------|---------|----------|
| `username` | Evet | API kullanıcı adınız |
| `password` | Evet | API şifreniz |
| `name` | Evet | Başlık metni. 1–11 karakter; yalnızca `A-Z a-z 0-9`, boşluk ve `* - .` karakterleri. Yasaklı kelime içeremez. |
| `relation` | Evet | Başlık sahiplik ilişkisi (aşağıdaki tabloya bakın) |
| `sub_relation` | Koşullu | `relation=temsilcilik-unvani` seçildiğinde **zorunludur** |
| `note` | Hayır | Talebe ilişkin açıklama |
| `proof` | Hayır | Kanıt/yetki belgesi dosyası. İzinli uzantılar: `zip rar xls xlsx pdf doc docx jpg jpeg png gif tif tiff`. En fazla **7 MB**. |
| `iys_code` | Hayır | İYS kodu |
| `iys_brand_code` | Hayır | İYS marka kodu |
| `ahs_tin` | Hayır | AHS / VKN bilgisi |

#### `relation` Değerleri ve İstenen Belge

Seçtiğiniz sahiplik ilişkisine göre `proof` alanında yüklemeniz gereken belge değişir:

| Değer | Anlamı | İstenen Belge (`proof`) |
|-------|--------|-------------------------|
| `abone-no` | Abone numarası | Belge gerekmez. Verimor'daki telefon numaralarınızdan birini başlık olarak kullanmanızı sağlar. |
| `ad-soyad` | Ad soyad | Belge gerekmez. (Verimor ayrıca **Yerleşim Yeri Belgesi** talep edebilir — aşağıdaki nota bakın.) |
| `ticari-unvan` | Ticari unvan | İmzalı ve kaşeli **Ticaret Sicil Gazetesi** örneği veya **Ticaret Sicil Kaydı**. |
| `mesleki-unvan` | Mesleki unvan | **Diploma** veya ilgili **meslek odası kayıt belgesi**. (Verimor ayrıca **Yerleşim Yeri Belgesi** talep edebilir.) |
| `kamu-kurum-unvani` | Kamu kurum unvanı | İlgili **Kamu Kurum ve Kuruluşundan alınmış resmi belge**. |
| `sivil-toplum-unvani` | Sivil toplum kuruluşu unvanı | İlgili **Sivil Toplum Kuruluşundan alınmış belge**. |
| `marka-adi` | Marka adı | **TPE'den (Türk Patent) marka tescil belgesi**. Markanın tescil süreci tamamlanmış ve Verimor abonesine ait olmalıdır. |
| `temsilcilik-unvani` | Bayilik / Temsilcilik unvanı | İlgili firma veya kuruluştan **izin alındığını ispatlayan belge**. Ayrıca `sub_relation` **zorunludur**. |

::: info Ek belge talep edilebilecek durumlar
`ad-soyad` ve `mesleki-unvan` ilişkilerinde (veya temsilcilikte alt ilişki bunlardan biriyse), abonelik kayıtlarınıza göre Verimor sizden ek olarak **Yerleşim Yeri Belgesi** ve/veya güncel **abonelik sözleşmesi** isteyebilir. Bu durumda talebiniz **"Yeni Sözleşme/Yerleşim Belgesi Bekleniyor"** (durum `4`) konumuna geçer ve ilgili belgeleri Verimor OİM üzerinden tamamlamanız gerekir. Yerleşim yeri belgenizi [e-Devlet Kapısı](https://www.turkiye.gov.tr) üzerinden **VERİMOR TELEKOMÜNİKASYON A.Ş.**'ye ibraz edilmek üzere hazırlamalısınız.
:::

::: tip `sub_relation` (Alt İlişki)
`relation=temsilcilik-unvani` seçtiğinizde, temsil ettiğiniz tarafın ilişki tipini `sub_relation` ile belirtmeniz gerekir. Geçerli değerler `abone-no` ve `temsilcilik-unvani` **hariç** diğer tüm `relation` değerleridir (ör. `ticari-unvan`, `marka-adi`). Yüklenecek belge, alt ilişkinin gerektirdiği belgedir.
:::

### Örnek İstek

```bash
curl -X POST "https://sms.verimor.com.tr/v2/header_requests" \
  -F "username=kullanici@ornek.com" \
  -F "password=api_sifreniz" \
  -F "name=FIRMAADI" \
  -F "relation=ticari-unvan" \
  -F "note=Pazarlama gönderimleri için" \
  -F "proof=@/yol/ticaret-sicil.pdf"
```

::: info Yanıt formatı
`/v2/header_requests` uç noktalarının tüm yanıtları standart bir JSON zarfı içinde döner:

```json
{
  "status": true,            // boolean: başarı=true, hata=false
  "error": null,             // hata kodu (string) veya null
  "errorMessage": null,      // okunabilir Türkçe hata mesajı veya null
  "data": { }                // başarıda kaynak (obje/dizi), hatada null
}
```

HTTP durum kodları korunur: POST başarı **201**, GET başarı **200**, doğrulama hatası **400**, bulunamadı **404**.
:::

### Yanıt (Başarılı)

`201 Created` — oluşturulan talep `data` alanında döner:

```json
{
  "status": true,
  "error": null,
  "errorMessage": null,
  "data": {
    "id": 1234,
    "name": "FIRMAADI",
    "status": 0,
    "status_text": "Onay Bekliyor",
    "relation": "ticari-unvan",
    "sub_relation": null,
    "review_note": null,
    "created_at": "2026-06-08T10:15:00+03:00"
  }
}
```

### Yanıt (Başarısız)

`400 Bad Request` — `error` alanında hata kodu, `errorMessage` alanında okunabilir Türkçe açıklama döner; `data` ise `null` olur:

```json
{
  "status": false,
  "error": "INVALID_HEADER_NAME",
  "errorMessage": "Başlık geçersiz. 1-11 karakter olmalı; yalnızca harf, rakam, boşluk ve * - . karakterleri kullanılabilir, yasaklı kelime içeremez.",
  "data": null
}
```

Olası `error` kodları ve dönen `errorMessage` değerleri:

| Hata Kodu (`error`) | `errorMessage` |
|-----------|----------------|
| `INVALID_HEADER_NAME` | Başlık geçersiz. 1-11 karakter olmalı; yalnızca harf, rakam, boşluk ve * - . karakterleri kullanılabilir, yasaklı kelime içeremez. |
| `MISSING_RELATION` | Sahiplik ilişkisi (relation) zorunludur. |
| `INVALID_RELATION` | Geçersiz sahiplik ilişkisi (relation). |
| `MISSING_SUB_RELATION` | Temsilcilik unvanı için alt ilişki (sub_relation) zorunludur. |
| `INVALID_PROOF_FILE` | Belge dosyası geçersiz. İzin verilen uzantılardan biri olmalı ve 7 MB'ı aşmamalı. |
| `DUPLICATE_HEADER` (HTTP **409**) | Bu isimde bir başlık talebiniz zaten mevcut. |

#### Mükerrer Başlık Kontrolü

Aynı hesapta aynı isimli (büyük/küçük harf duyarsız) ve **reddedilmemiş/iptal edilmemiş** (status `2`/`3` hariç) bir başlık zaten varsa, yeni talep oluşturulmaz ve HTTP **409 Conflict** ile uyarı döner:

```json
{
  "status": false,
  "error": "DUPLICATE_HEADER",
  "errorMessage": "Bu isimde bir başlık talebiniz zaten mevcut.",
  "data": null
}
```

Reddedilmiş (status `2`) veya iptal edilmiş (status `3`) bir başlıkla aynı isim için yeniden başvuru yapabilirsiniz.

---

## Başlık Talebi Durumu Sorgulama

Oluşturduğunuz başlık taleplerinin güncel durumunu sorgulayabilirsiniz. Yalnızca kendi hesabınıza ait talepler döner.

### Tüm Talepleri Listeleme

```
GET https://sms.verimor.com.tr/v2/header_requests
```

```bash
curl "https://sms.verimor.com.tr/v2/header_requests?username=kullanici@ornek.com&password=api_sifreniz"
```

`200 OK` — `data` alanı talep objelerinden oluşan bir **dizidir**:

```json
{
  "status": true,
  "error": null,
  "errorMessage": null,
  "data": [
    {
      "id": 1234,
      "name": "FIRMAADI",
      "status": 0,
      "status_text": "Onay Bekliyor",
      "relation": "ticari-unvan",
      "sub_relation": null,
      "review_note": null,
      "created_at": "2026-06-08T10:15:00+03:00"
    }
  ]
}
```

### Tek Bir Talebi Sorgulama

```
GET https://sms.verimor.com.tr/v2/header_requests/:id
```

```bash
curl "https://sms.verimor.com.tr/v2/header_requests/1234?username=kullanici@ornek.com&password=api_sifreniz"
```

`200 OK` — `data` alanı tek bir talep **objesidir**:

```json
{
  "status": true,
  "error": null,
  "errorMessage": null,
  "data": {
    "id": 1234,
    "name": "FIRMAADI",
    "status": 0,
    "status_text": "Onay Bekliyor",
    "relation": "ticari-unvan",
    "sub_relation": null,
    "review_note": null,
    "created_at": "2026-06-08T10:15:00+03:00"
  }
}
```

Talep bulunamazsa (veya size ait değilse) `404 Not Found` — `error` ve `errorMessage` dolu, `data` ise `null` olur:

```json
{
  "status": false,
  "error": "HEADER_NOT_FOUND",
  "errorMessage": "Başlık talebi bulunamadı.",
  "data": null
}
```

#### Durum (`status`) Değerleri

| Kod | `status_text` | Anlamı |
|-----|---------------|--------|
| `0` | Onay Bekliyor | Talep alındı, inceleniyor |
| `1` | Onaylandı | Başlık onaylandı ve kullanıma hazır |
| `2` | Kabul Edilmedi | Talep reddedildi (`review_note` açıklamayı içerebilir) |
| `4` | Yeni Sözleşme/Yerleşim Belgesi Bekleniyor | Ek belge gerekiyor |
| `5` | KEP Onayı Bekliyor | KEP onayı bekleniyor |

::: tip
Başlık talebi oluşturulduğunda durum daima `0` (Onay Bekliyor) olur. Onay/ret ve ek belge talebi Verimor tarafından yürütülür; güncel durumu yukarıdaki sorgu ile takip edebilirsiniz.
:::
