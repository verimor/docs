# Rate Limiting (İstek Limitleri)

SMS API'sindeki tüm endpoint'ler, aynı hesap/IP üzerinden gelen istekler için istek limitlerine (rate limiting) tabidir. Sınır aşıldığında API `429 (Too Many Requests)` HTTP durum kodu döner.

::: info Gönderim Havuzu (Paylaşımlı)
`/v2/send` (SMS gönderme — JSON veya Plain) ve `/v2/iys_consents.json` (İYS izin bildirimi) endpoint'leri **aynı istek limiti havuzunu paylaşır**: aynı hesap/IP için ikisi birlikte dakikada **toplam 240 istek** hakkına sahiptir, burst değeri 80'dir. Örneğin bu dakika içinde `send`'e 240 istek gönderildiyse, aynı dakika içinde `iys_consents`'a yapılacak istekler de sınıra takılır.
:::

::: info Genel Havuz (Paylaşımlı)
Gönderim havuzu dışındaki **tüm diğer** SMS API endpoint'leri (`/v2/balance`, `/v2/cancel`, `/v2/headers`, `/v2/header_requests`, `/v2/blacklists`, `/v2/status`, `/v2/iys/campaigns`, `/v2/inbound_messages` vb.) de **aynı istek limiti havuzunu paylaşır**: dakikada **toplam 20 istek**, burst değeri 10'dur. Örneğin `status` sorgularken bu havuzun limitini tüketirseniz, aynı dakika içinde `balance` veya `inbound_messages` istekleri de sınıra takılır.
:::

## Endpoint Bazlı Özet

| Endpoint | Havuz | Limit (paylaşımlı) | Burst |
|----------|-------|---------------------|-------|
| `/v2/send` (POST/GET) | Gönderim Havuzu | dakikada 240 istek | 80 |
| `/v2/iys_consents.json` | Gönderim Havuzu | dakikada 240 istek | 80 |
| `/v2/status` | Genel Havuz | dakikada 20 istek | 10 |
| `/v2/iys/campaigns`, `/v2/iys/campaigns/{id}/consents` | Genel Havuz | dakikada 20 istek | 10 |
| `/v2/inbound_messages` | Genel Havuz | dakikada 20 istek | 10 |
| `/v2/balance` | Genel Havuz | dakikada 20 istek | 10 |
| `/v2/cancel/{campaign_id}` | Genel Havuz | dakikada 20 istek | 10 |
| `/v2/headers`, `/v2/header_requests`(`/:id`) | Genel Havuz | dakikada 20 istek | 10 |
| `/v2/blacklists` | Genel Havuz | dakikada 20 istek | 10 |

::: tip Push (Webhook) Bildirimleri
Rapor, gelen SMS ve İYS push bildirimleri Verimor'dan **sizin sunucunuza** yapılan isteklerdir; yukarıdaki limitler SMS API'ye (Verimor'a) attığınız isteklere uygulanır, push bildirimlerini kapsamaz.
:::

::: warning 429 Hatası Alırsanız
İsteklerinizi belirtilen limitin üzerinde sıklıkta göndermeyin. Sınıra ulaşıldığında bir süre bekleyip (exponential backoff) tekrar deneyin. Yüksek hacimli gönderimlerde iletim raporu için Push yöntemini, tekli gönderimlerde saniyede bir isteği aşmayacak şekilde kendi tarafınızda kuyruklama yapmanızı öneririz.
:::
