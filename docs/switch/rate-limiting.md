# Rate Limiting (İstek Limitleri)

Bulut Santralim API'sindeki tüm endpoint'ler, aynı domain/IP üzerinden gelen istekler için istek limitlerine (rate limiting) tabidir. Sınır aşıldığında API `429 (Too Many Requests)` HTTP durum kodu döner.

::: info Varsayılan Limit
Aşağıdaki tabloda özel bir limiti belirtilmeyen **tüm diğer endpoint'ler** (`mute`, `transfer`, `hangup`, `answer`, `dnd`, `report_event`, `announcements`, `caller_ids`, `update_outbound_caller_id`, `voicemail_*`, `phonebook`, `blocked_numbers`, `advisory_webhook`, `fax_*`/`fdrs`, `webphone_iframe`, `crm_integrations`, `queues`, `queue/manage_users`, `queue/user_list` vb.) genel varsayılan limite tabidir: **saniyede 2 istek (yaklaşık dakikada 120), burst 10**.
:::

## Endpoint Bazlı Özel Limitler

| Endpoint | Limit | Burst | Not |
|----------|-------|-------|-----|
| `/originate` (çağrı başlatma) | saniyede 3 istek (yaklaşık dakikada 180) | 100 | Bkz. [Çağrı Yönetimi](/switch/cagri-yonetimi) |
| `/agent_statuses` ve `/user_statuses` | dakikada **toplam** 2 istek | – | İki endpoint **aynı limit havuzunu paylaşır** — biri isteği tüketirse diğeri de o dakika için sınıra takılır. Bkz. [Çağrı Yönetimi](/switch/cagri-yonetimi), [Kuyruklar](/switch/kuyruklar) |
| `/recording_url` | dakikada 5 istek | – | Bkz. [Ses Kayıtları](/switch/ses-kayitlari) |
| `/queues/pending` | dakikada 10 istek | – | Kuyruk listesi (`/queues`) ve dahili yönetimi endpoint'leri (`queue/manage_users`, `queue/user_list`) bu sınıra dahil değildir, varsayılan limite tabidir. Bkz. [Kuyruklar](/switch/kuyruklar) |
| `/cdrs`, `/cdrs/{id}` | dakikada 6 istek | – | Bkz. [CDR](/switch/cdr) |
| `/ivr_campaigns` | saniyede 2 istek (yaklaşık dakikada 120) | 50 | Bkz. [IVR Kampanyaları](/switch/ivr-kampanya) |
| Diğer tüm endpoint'ler | saniyede 2 istek (yaklaşık dakikada 120) | 10 | Varsayılan limit |

::: warning 429 Hatası Alırsanız
İsteklerinizi belirtilen limitin üzerinde sıklıkta göndermeyin. Sınıra ulaşıldığında bir süre bekleyip (exponential backoff) tekrar deneyin. Yüksek hacimli entegrasyonlarda toplu işlemleri kuyruğa alıp limit dahilinde kademeli göndermeniz önerilir.
:::
