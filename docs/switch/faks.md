# Faks

## Faks Gönderme

```
POST https://api.bulutsantralim.com/fax_orders
```

```bash
curl -X POST "https://api.bulutsantralim.com/fax_orders?key=API_ANAHTARINIZ" \
  -H "Content-Type: application/json" \
  -d '{
    "destination": "908505320000",
    "document_url": "https://ornek.com/belge.pdf"
  }'
```

---

## Faks Listesi

Gönderilmiş tüm faksları listeler.

```
GET https://api.bulutsantralim.com/fdrs
```

```bash
curl "https://api.bulutsantralim.com/fdrs?key=API_ANAHTARINIZ"
```

---

## Bekleyen Faks Gönderimler

Henüz tamamlanmamış faks gönderimlerini listeler.

```
GET https://api.bulutsantralim.com/fax_orders
```

```bash
curl "https://api.bulutsantralim.com/fax_orders?key=API_ANAHTARINIZ"
```

---

## Faks Belgesi İndirme

```
GET https://api.bulutsantralim.com/fax_document/{id}
```

```bash
curl "https://api.bulutsantralim.com/fax_document/123?key=API_ANAHTARINIZ" -o belge.pdf
```

---

## Belge URL İsteme

```
POST https://api.bulutsantralim.com/fax_document_url
```

```bash
curl -X POST "https://api.bulutsantralim.com/fax_document_url?key=API_ANAHTARINIZ" \
  -d "id=123"
```
