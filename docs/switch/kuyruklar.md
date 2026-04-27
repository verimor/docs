# Kuyruklar

## Kuyruk Listesi

Santraldeki tüm kuyrukları listeler.

```
GET https://api.bulutsantralim.com/queues
```

```bash
curl "https://api.bulutsantralim.com/queues?key=API_ANAHTARINIZ"
```

---

## Kuyrukta Bekleyenler

```
GET https://api.bulutsantralim.com/queues/pending
```

```bash
curl "https://api.bulutsantralim.com/queues/pending?key=API_ANAHTARINIZ"
```

---

## Kuyruğa Dahili Ekleme / Çıkarma

```
GET https://api.bulutsantralim.com/queue/manage_users
```

| Parametre | Açıklama |
|-----------|----------|
| `queue` | Kuyruk adı |
| `extension` | Dahili numara |
| `action` | `add` / `remove` / `replace` |

```bash
curl "https://api.bulutsantralim.com/queue/manage_users?key=API_ANAHTARINIZ&queue=destek&extension=1003&action=add"
```

---

## Kuyruktaki Dahili Listesi

```
GET https://api.bulutsantralim.com/queue/user_list
```

```bash
curl "https://api.bulutsantralim.com/queue/user_list?key=API_ANAHTARINIZ&queue=destek"
```

---

## MT Durumları

Müşteri Temsilcilerinin durumunu ve kuyruk üyeliklerini listeler.

```
GET https://api.bulutsantralim.com/agent_statuses
```

```bash
curl "https://api.bulutsantralim.com/agent_statuses?key=API_ANAHTARINIZ"
```
