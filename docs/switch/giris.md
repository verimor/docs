# Bulut Santralim API Giriş

Verimor Bulut Santralim API'si, işletmelerin mevcut yazılımlarını (CRM, ERP vb.) Bulut Santral hizmetleriyle entegre etmelerini sağlayan güçlü bir HTTP arayüzüdür.

## Temel Bilgiler

| Özellik | Değer |
|---------|-------|
| Base URL | `https://api.bulutsantralim.com` |
| Protokol | HTTPS |
| Kimlik Doğrulama | API anahtarı (`key` query parametresi) |
| Format | JSON / Form |

## Özellikler

### Çağrı Yönetimi
- **Click-to-Call** — Yazılımınızdan tek tıkla dış arama başlatın
- **Çağrı Kontrolü** — Aktif çağrıları sonlandırma, sessize alma, bekletme, aktarma
- **Gelen Çağrı Pop-up** — Arayan bilgisini anında kendi uygulamanızda görüntüleyin

### Veri ve Kayıt
- **CDR (Çağrı Detay Kayıtları)** — Tüm arama geçmişine anlık erişim
- **Ses Kayıtları** — Görüşme kayıtlarını listeleyin ve indirin
- **Google Drive Entegrasyonu** — Ses kayıtlarını bulut depolama alanınıza aktarın

### Otomasyon
- **Otomatik Arama / IVR Kampanyaları** — Anket, borç hatırlatma, duyuru için toplu dış arama
- **Sesli Mesaj (TTS)** — Metin → ses dönüştürme ile dinamik anons oluşturma
- **Speech-to-Text** — Müşteri sesli komutlarını yazıya çevirme

### Gelişmiş
- **Numara Maskeleme** — Tarafların birbirinin numarasını görmeden görüşmesi
- **Kuyruk Yönetimi** — Dahili ve kuyruk konfigürasyonu API üzerinden
- **Faks** — Faks gönderim ve alım işlemleri

## Hızlı Başlangıç

```bash
# Çağrı başlatma (Click-to-Call)
curl "https://api.bulutsantralim.com/originate?key=API_ANAHTARINIZ&extension=1001&destination=905001234567"
```

## API Anahtarı

API anahtarınızı (key): **Verimor OİM** > **Bulut Santralim** > **Santral Ayarlarım** menüsünden alabilirsiniz.

## Sonraki Adımlar

- [Kimlik Doğrulama](./kimlik-dogrulama)
- [Çağrı Yönetimi](./cagri-yonetimi) — Başlatma, aktarma, sonlandırma
- [CDR](./cdr) — Çağrı detay kayıtları
- [IVR Kampanya](./ivr-kampanya) — Otomatik arama kampanyaları
