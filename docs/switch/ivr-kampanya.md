# Otomatik Arama (IVR Kampanyaları)

Anket, borç hatırlatma, duyuru veya onay alma gibi amaçlarla toplu dış arama kampanyaları oluşturun.

## Kampanya Oluşturma

```
POST https://api.bulutsantralim.com/ivr_campaigns.json
Content-Type: application/json
```

### Parametreler

| Parametre | Zorunlu | Açıklama |
|-----------|---------|----------|
| `name` | Evet | Kampanya adı |
| `call_type` | Evet | `queue` (kuyruğa aktar) veya `ivr` (tuşlama menüsü) |
| `phone_list` | Evet | Aranacak numaralar dizisi: `[{"phone": "905001234567"}]` |
| `cli` | Evet | Arayan numara (karşı tarafın göreceği) |
| `welcome_announcement_id` | Hayır | Dinletilecek ses dosyası ID'si |
| `queue_number` | Hayır | `call_type=queue` ise hedef kuyruk |
| `thread_multiplier` | Hayır | Müsait temsilci sayısının kaç katı kadar çağrı açılacağı |
| `max_thread_count` | Hayır | Eşzamanlı maksimum çağrı sayısı |
| `ring_timeout` | Hayır | Çaldırma süresi (25–60 sn) |
| `call_retries` | Hayır | Cevap vermeyenler için tekrar arama sayısı |
| `date_range_begin` | Hayır | Kampanya başlangıç tarihi (`YYYY-MM-DD`) |
| `date_range_end` | Hayır | Kampanya bitiş tarihi (`YYYY-MM-DD`) |
| `time_range_begin` | Hayır | Günlük çalışma saati başlangıcı (`SS:DD`) |
| `time_range_end` | Hayır | Günlük çalışma saati bitişi (`SS:DD`) |
| `active_days` | Hayır | Çalışma günleri (1=Pzt … 7=Paz): `[1,2,3,4,5]` |
| `webhook_url` | Hayır | Tuşlamaların bildirileceği URL |
| `digit_target_1` … `digit_target_9` | Hayır | Tuşa basıldığında yönlendirilecek hedef |
| `digit_target_star` | Hayır | `*` tuşu hedefi |
| `digit_target_square` | Hayır | `#` tuşu hedefi |
| `timeout_target` | Hayır | Süre dolduğunda yönlendirilecek hedef |
| `digit_retries` | Hayır | Geçersiz tuşlamada tekrar sayısı |
| `digit_timeout` | Hayır | Tuşlama bekleme süresi (1–10 sn, varsayılan 4) |
| `recording_enabled` | Hayır | `true` → arama başlar başlamaz kayıt alınır |
| `is_commercial` | Hayır | Ticari ileti ise `true` |
| `iys_recipient_type` | Hayır | `BIREYSEL` / `TACIR` (ticari gönderimde zorunlu) |

### Örnek

```json
{
  "name": "Borç Hatırlatma - Ocak",
  "call_type": "ivr",
  "cli": "908505320000",
  "ring_timeout": 30,
  "call_retries": 2,
  "time_range_begin": "09:00",
  "time_range_end": "18:00",
  "active_days": [1, 2, 3, 4, 5],
  "welcome_announcement_id": 42,
  "digit_target_1": "queue:destek",
  "digit_target_2": "hangup",
  "phone_list": [
    { "phone": "905001234567" },
    { "phone": "905007654321" }
  ]
}
```

---

## Kampanya Başlatma / Durdurma

```
PATCH https://api.bulutsantralim.com/ivr_campaigns/{id}.json
```

```json
{ "status": "start" }
```

`status` değerleri: `start`, `pause`, `stop`

---

## Kampanya Silme

```
DELETE https://api.bulutsantralim.com/ivr_campaigns/{id}.json
```

```bash
curl -X DELETE "https://api.bulutsantralim.com/ivr_campaigns/123.json?key=API_ANAHTARINIZ"
```
