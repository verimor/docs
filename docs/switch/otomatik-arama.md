---
prev:
  text: 'Click-to-Call'
  link: '/switch/click-to-call'
next:
  text: 'Numara Maskeleme'
  link: '/switch/numara-maskeleme'
---

# Otomatik Arama (IVR Kampanyaları)

Otomatik arama, önceden belirlediğiniz bir listeyi arayarak kayıtlı ses dosyasını dinleten ve tuşlama yanıtlarını işleyen toplu dış arama sistemidir.

## Kullanım Alanları

- **Borç / ödeme hatırlatma** — "1'e basın ödeme yapın, 2'ye basın erteyin"
- **Randevu hatırlatma** — "1'e basın onaylayın, 2'ye basın iptal edin"
- **Anket** — Müşteri memnuniyet araştırması
- **Duyuru** — Toplu sesli bildirim
- **Onay alma** — Sözleşme veya teklif onayı

## Kampanya Oluşturma

**OİM Üzerinden:**

1. OİM > **Bulut Santralim** > **IVR Kampanyaları**'na gidin
2. **Yeni Kampanya** oluşturun
3. Ses dosyasını yükleyin veya seçin
4. Numara listesini yükleyin
5. Çalışma saatlerini belirleyin
6. Kampanyayı başlatın

**API Üzerinden:**

```bash
curl -X POST "https://api.bulutsantralim.com/ivr_campaigns.json?key=API_ANAHTARINIZ" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Ödeme Hatırlatma - Ocak",
    "call_type": "ivr",
    "cli": "908505320000",
    "ring_timeout": 30,
    "time_range_begin": "09:00",
    "time_range_end": "18:00",
    "active_days": [1, 2, 3, 4, 5],
    "welcome_announcement_id": 42,
    "digit_target_1": "queue:tahsilat",
    "digit_target_2": "hangup",
    "phone_list": [
      { "phone": "905001234567" },
      { "phone": "905007654321" }
    ]
  }'
```

## Tuşlama Hedefleri

`digit_target_1` … `digit_target_9`, `digit_target_star`, `digit_target_square` parametreleriyle her tuşa farklı eylem atanır:

| Hedef Değeri | Eylem |
|--------------|-------|
| `queue:KUYRUK_ADI` | Çağrıyı kuyruğa aktar |
| `extension:1001` | Belirtilen dahiliye bağla |
| `hangup` | Çağrıyı kapat |
| `ivr:SENARYO` | Başka bir IVR senaryosuna yönlendir |

## Ses Dosyası Hazırlama

Kampanya için bir ses dosyası yüklemeniz gerekir. Önerilen format:

- **Format:** WAV veya MP3
- **Örnekleme:** 8000 Hz, 16-bit, mono
- **Süre:** Mesajı kısa tutun (15–30 saniye)

Ses dosyalarını OİM > **Bulut Santralim** > **Ses Dosyaları** bölümünden yükleyin.

## İlgili Sayfalar

- [IVR Kampanyaları API →](/switch/ivr-kampanya)
- [Ses Kayıtları →](/switch/ses-kayitlari)
