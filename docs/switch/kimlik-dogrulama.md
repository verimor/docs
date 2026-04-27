# Kimlik Doğrulama

Tüm Bulut Santralim API isteklerinde kimlik doğrulama `key` query parametresi ile yapılır.

## Kullanım

Her isteğe `?key=API_ANAHTARINIZ` ekleyin:

```bash
curl "https://api.bulutsantralim.com/queues?key=API_ANAHTARINIZ"
```

POST isteklerinde de aynı şekilde query string olarak gönderilir:

```bash
curl -X POST "https://api.bulutsantralim.com/originate?key=API_ANAHTARINIZ" \
  -H "Content-Type: application/json" \
  -d '{"extension": "1001", "destination": "905001234567"}'
```

## API Anahtarını Almak

**Verimor OİM** > **Bulut Santralim** > **Santral Ayarlarım** menüsüne gidin.

::: warning
API anahtarını kaynak koda gömmeyin; ortam değişkeni kullanın.

```bash
export BULUTSANTRAL_KEY="buraya_anahtarinizi_yazin"
curl "https://api.bulutsantralim.com/queues?key=$BULUTSANTRAL_KEY"
```
:::
