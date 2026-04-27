# Başlangıç

## Ücretsiz Hesap Oluşturun

**Kredi kartı gerekmez** — Kaydolun, **1.000 ücretsiz SMS kredisi** ile API'yi test edin.

[verimor.com.tr](https://verimor.com.tr) adresinden hesap açın.

---

## Hangi API'ye İhtiyacınız Var?

| İhtiyaç | API |
|---------|-----|
| SMS göndermek (OTP, kampanya, bildirim) | [SMS API](/sms/giris) |
| Tıklamayla arama, çağrı merkezi entegrasyonu | [Bulut Santralim API](/switch/giris) |
| Otomatik dış arama / IVR kampanyası | [Bulut Santralim API](/switch/ivr-kampanya) |
| Hazır platform entegrasyonu (Shopify, Zoho…) | [Entegrasyonlar](/entegrasyonlar/) |

---

## SMS API Başlangıcı

### 1. Kimlik Bilgilerinizi Alın

**Verimor OİM** > **SMS Ayarları** > **API** bölümünden kullanıcı adı ve API şifresini alın.

### 2. Onaylı Başlık Ekleyin

OİM'den alfanümerik bir başlık (örn. `FIRMAADI`) başvurusu yapın. BTK onayından sonra aktif olur.

### 3. İlk SMS'inizi Gönderin

```bash
curl -X POST https://sms.verimor.com.tr/v2/send.json \
  -H "Content-Type: application/json" \
  -d '{
    "username": "KULLANICI_ADINIZ",
    "password": "API_SIFRENIZ",
    "source_addr": "BASLIGINIZ",
    "messages": [{ "dest": "905001234567", "msg": "Merhaba!" }]
  }'
```

---

## Bulut Santralim API Başlangıcı

### 1. API Anahtarınızı Alın

**Verimor OİM** > **Bulut Santralim** > **Santral Ayarlarım** menüsünden `key` değerini alın.

### 2. İlk Çağrıyı Başlatın

```bash
curl "https://api.bulutsantralim.com/originate?key=API_ANAHTARINIZ&extension=1001&destination=905001234567"
```

---

## Sonraki Adımlar

- [Hızlı Başlangıç](/rehber/hizli-baslangic) — Python, PHP, Node.js örnekleri
- [SMS API Referansı](/sms/giris) — Tüm endpoint detayları
- [Bulut Santralim Referansı](/switch/giris) — Santral API detayları
- [Entegrasyonlar](/entegrasyonlar/) — Hazır platform entegrasyonları
