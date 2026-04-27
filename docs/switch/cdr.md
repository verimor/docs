# Çağrı Detay Kayıtları (CDR)

## CDR Listesi

```
GET https://api.bulutsantralim.com/cdrs
```

| Parametre | Açıklama |
|-----------|----------|
| `key` | API anahtarı |
| `start_stamp_from` | Başlangıç tarihi (ISO: `2025-01-01T00:00:00`) |
| `start_stamp_to` | Bitiş tarihi (ISO: `2025-01-31T23:59:59`) |
| `direction` | Çağrı yönü (`inbound` / `outbound`) |
| `caller_id_number` | Arayan numara filtresi |
| `destination_number` | Aranan numara filtresi |
| `missed` | `true` → sadece cevapsız çağrılar |
| `recording_present` | `true` / `false` / `deleted` |
| `queue` | Kuyruk adı filtresi |
| `page` | Sayfa numarası (varsayılan: 1) |
| `limit` | Sayfa başına kayıt sayısı |

```bash
curl "https://api.bulutsantralim.com/cdrs?key=API_ANAHTARINIZ&start_stamp_from=2025-01-01T00:00:00&start_stamp_to=2025-01-31T23:59:59&direction=inbound"
```

---

## Tekil CDR Kaydı

```
GET https://api.bulutsantralim.com/cdrs/{id}
```

```bash
curl "https://api.bulutsantralim.com/cdrs/CAGRI_UUID?key=API_ANAHTARINIZ"
```
