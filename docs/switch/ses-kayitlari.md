# Ses Kayıtları

## Geçici URL Oluşturma

Ses kaydına erişmek için 1 saatlik geçici URL oluşturur.

::: info
Dakikada en fazla 5 istek yapılabilir.
:::

```
POST https://api.bulutsantralim.com/recording_url?call_uuid={uuid}
```

| Parametre | Açıklama |
|-----------|----------|
| `call_uuid` | Ses kaydına ait çağrı UUID'si (CDR'dan alınır) |

```bash
curl -X POST "https://api.bulutsantralim.com/recording_url?key=API_ANAHTARINIZ&call_uuid=CAGRI_UUID"
```

### Yanıt

```json
{
  "url": "https://...",
  "expires_at": "2025-01-15T11:30:00Z"
}
```

---

## Telesekreter Ses Kaydı

```
POST https://api.bulutsantralim.com/voicemail_recording_url
```

```bash
curl -X POST "https://api.bulutsantralim.com/voicemail_recording_url?key=API_ANAHTARINIZ&call_uuid=CAGRI_UUID"
```

---

## Telesekreter Mesajları Listesi

```
GET https://api.bulutsantralim.com/voicemail_messages
```

```bash
curl "https://api.bulutsantralim.com/voicemail_messages?key=API_ANAHTARINIZ"
```

---

## Ses Dosyaları (Anons)

Santralinizdeki kayıtlı ses dosyalarını yönetin. IVR kampanyalarında `welcome_announcement_id` olarak kullanılır.

### Listeleme

```bash
curl "https://api.bulutsantralim.com/announcements?key=API_ANAHTARINIZ"
```

### Yükleme

```
POST https://api.bulutsantralim.com/announcements
```

```json
{
  "name": "hosgeldiniz",
  "content": "BASE64_ENCODED_AUDIO"
}
```

### Güncelleme

```
PATCH https://api.bulutsantralim.com/announcements/{id}
```

### Silme

```
DELETE https://api.bulutsantralim.com/announcements/{id}
```
