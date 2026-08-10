# Bakiye Sorgulama

Hesabınızdaki kalan SMS kredisini sorgulamak için kullanılır.

::: info İstek Limiti
Bu endpoint genel havuza tabidir: dakikada 20 istek, burst 10 (bkz. [Rate Limiting](/sms/rate-limiting)).
:::

## Endpoint

```
GET https://sms.verimor.com.tr/v2/balance
```

## Örnek İstek

```bash
curl "https://sms.verimor.com.tr/v2/balance?username=kullanici@ornek.com&password=api_sifreniz"
```

## Yanıt

```json
{
  "balance": 1500,
  "bonus": 0
}
```

| Alan | Açıklama |
|------|----------|
| `balance` | Kullanılabilir SMS kredisi |
| `bonus` | Bonus SMS kredisi |
