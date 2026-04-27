---
prev:
  text: 'Bulut Santralim Nedir?'
  link: '/switch/nedir'
next:
  text: 'Otomatik Arama (IVR)'
  link: '/switch/otomatik-arama'
---

# Click-to-Call

Click-to-Call (Tıkla-Ara), kullanıcının CRM veya web uygulamanızda bir numaraya tıkladığında otomatik olarak arama başlatan özelliktir. Temsilci önce kendi telefonundan çağrı alır, açtığında müşteri otomatik aranır.

## Nasıl Çalışır?

1. Temsilci CRM'de müşteri kaydını açar ve **"Ara"** düğmesine basar
2. Sisteminiz Verimor API'ye istek gönderir
3. Temsilcinin dahilisi çalar — temsilci açar
4. Müşteri numarası otomatik aranır
5. İkisi bağlanır

Bu akış sayesinde temsilci manuel numara tuşlamak zorunda kalmaz; yanlış arama ve zaman kaybı önlenir.

## API ile Click-to-Call

```bash
curl "https://api.bulutsantralim.com/originate?key=API_ANAHTARINIZ&extension=1001&destination=905001234567"
```

Ya da JSON ile POST:

```bash
curl -X POST "https://api.bulutsantralim.com/originate?key=API_ANAHTARINIZ" \
  -H "Content-Type: application/json" \
  -d '{
    "extension": "1001",
    "destination": "905001234567",
    "caller_id": "908505320000",
    "timeout": 30
  }'
```

| Parametre | Açıklama |
|-----------|----------|
| `extension` | Temsilcinin dahili numarası |
| `destination` | Aranacak dış numara |
| `caller_id` | Müşterinin göreceği numara (opsiyonel) |
| `manual_answer` | `true` → Temsilci telefonu açana kadar müşteri aranmaz |
| `timeout` | Çaldırma süresi (10–60 sn) |

## CRM Entegrasyon Örneği

Bir müşteri kaydındaki telefon numarasına tıklandığında JavaScript'ten API çağrısı yapın:

```javascript
async function clickToCall(extension, destination) {
  const res = await fetch('/api/originate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ extension, destination })
  })
  return res.json()
}
```

Sunucu tarafında API anahtarını güvenli tutarak Verimor'a isteği iletebilirsiniz.

## Gelen Çağrıda Pop-up

Müşteri sizi aradığında, arayan numarayı CRM'de aratıp ilgili kaydı otomatik açmak için Bulut Santralim webhook'larını kullanabilirsiniz. Webhook ayarları için OİM > **Bulut Santralim** > **Santral Ayarlarım** bölümüne bakın.

## İlgili Sayfalar

- [Çağrı Yönetimi API →](/switch/cagri-yonetimi)
- [CDR Sorgulama →](/switch/cdr)
