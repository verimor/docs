# Çağrı Yönetimi

::: info İstek Limiti
Bu sayfadaki endpoint'ler için özel istek limitleri aşağıda belirtilmiştir. Belirtilmeyenler genel varsayılan limite tabidir. Detaylar için [Rate Limiting](/switch/rate-limiting) sayfasına bakın.
:::

## Çağrı Başlatma (Click-to-Call)

Santraldeki bir dahiliden dış numaraya arama başlatır. Dahilinin telefonu çalar, açtığında hedef numara aranır.

::: info İstek Limiti
Bu endpoint saniyede 3 istek (yaklaşık dakikada 180) limitine tabidir, burst değeri 100'dür. Aşıldığında 429 (Too Many Requests) döner.
:::

### GET

```
GET https://api.bulutsantralim.com/originate
```

| Parametre | Zorunlu | Açıklama |
|-----------|---------|----------|
| `key` | Evet | API anahtarı |
| `extension` | Evet | Aramayı başlatacak dahili numara |
| `destination` | Evet | Aranacak numara (`905001234567` veya uluslararası `+44...`) |
| `caller_id` | Hayır | Karşı tarafın göreceği numara (`908505320000` formatı) |
| `manual_answer` | Hayır | `true` → dahili telefonu açana kadar bekler |
| `timeout` | Hayır | Çaldırma süresi (10–60 sn, varsayılan 30) |
| `announcement_to_caller` | Hayır | Arayan tarafa cevaplanma anında dinletilecek ses dosyası ID |
| `announcement_to_callee` | Hayır | Aranan tarafa cevaplanma anında dinletilecek ses dosyası ID |

```bash
curl "https://api.bulutsantralim.com/originate?key=API_ANAHTARINIZ&extension=1001&destination=905001234567&caller_id=908505320000"
```

### POST

```
POST https://api.bulutsantralim.com/originate
```

```json
{
  "extension": "1001",
  "destination": "905001234567",
  "caller_id": "908505320000",
  "manual_answer": false,
  "timeout": 30
}
```

---

## Çağrıyı Sonlandırma

```
GET https://api.bulutsantralim.com/hangup/{call_uuid}
```

```bash
curl "https://api.bulutsantralim.com/hangup/CAGRI_UUID?key=API_ANAHTARINIZ"
```

---

## Çağrıyı Cevaplama

```
GET https://api.bulutsantralim.com/answer/{call_uuid}
```

```bash
curl "https://api.bulutsantralim.com/answer/CAGRI_UUID?key=API_ANAHTARINIZ"
```

---

## Çağrı Aktarma

Devam eden bir çağrıyı başka bir dahiliye aktarır.

```
POST https://api.bulutsantralim.com/transfer?id={call_uuid}&user_number={extension}
```

| Parametre | Açıklama |
|-----------|----------|
| `id` | Aktarılacak çağrının UUID'si |
| `user_number` | Hedef dahili numara |

```bash
curl -X POST "https://api.bulutsantralim.com/transfer?key=API_ANAHTARINIZ&id=CAGRI_UUID&user_number=1002"
```

---

## Sessize Alma / Açma

```
GET https://api.bulutsantralim.com/mute/{call_uuid}
```

```bash
curl "https://api.bulutsantralim.com/mute/CAGRI_UUID?key=API_ANAHTARINIZ"
```

---

## Dahili Durumlarını Listeleme

```
GET https://api.bulutsantralim.com/user_statuses
```

```bash
curl "https://api.bulutsantralim.com/user_statuses?key=API_ANAHTARINIZ"
```

::: info İstek Limiti
`user_statuses` ve `agent_statuses` (bkz. [Kuyruklar → MT Durumları](/switch/kuyruklar)) aynı istek limiti havuzunu paylaşır: aynı domain/IP için ikisi birlikte dakikada **toplam 2 istek** hakkına sahiptir. Örneğin bu dakika içinde `user_statuses`'a 2 istek gönderildiyse, aynı dakika içinde `agent_statuses`'a yapılacak istekler de sınıra takılır ve 429 (Too Many Requests) döner.
:::

---

## Dış Numara (Arayan No) Değiştirme

Bir dahilinin giden aramalarda görünen numarasını değiştirir.

```
GET https://api.bulutsantralim.com/update_outbound_caller_id
```

```bash
curl "https://api.bulutsantralim.com/update_outbound_caller_id?key=API_ANAHTARINIZ&extension=1001&caller_id=908505320001"
```
