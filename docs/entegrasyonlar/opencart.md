---
prev:
  text: 'Shopify'
  link: '/entegrasyonlar/shopify'
next:
  text: 'İdeasoft'
  link: '/entegrasyonlar/ideasoft'
---

# Opencart Entegrasyonu

Opencart mağazanıza Verimor SMS modülünü kurarak sipariş bildirimlerini otomatik gönderin.

## Kurulum

### 1. Modül Kurulumu

1. Opencart Admin Paneli > **Extensions** > **Extension Installer**'a gidin
2. Verimor SMS modülünü yükleyin (`.ocmod.zip` dosyası)
3. **Extensions** > **Modifications** > **Refresh** yapın
4. **Extensions** > **Extensions** > Filtreden "SMS" seçin
5. Verimor modülünü **Install** edin

### 2. Modül Ayarları

**Extensions** > **Extensions** > Verimor SMS > **Edit**:

| Alan | Değer |
|------|-------|
| Kullanıcı Adı | OİM'deki API kullanıcı adınız |
| Şifre | OİM'deki API şifreniz |
| Gönderici Başlık | Onaylı alfanümerik başlığınız |
| Durum | Aktif |

### 3. Bildirim Tetikleyicileri

Hangi sipariş durumlarında SMS gönderileceğini seçin:

- ☑ Sipariş alındı
- ☑ Ödeme onaylandı
- ☑ Kargoya verildi
- ☑ Teslim edildi
- ☐ İptal edildi

## Manuel Entegrasyon

Modül kullanmak istemiyorsanız Opencart'ın olay sistemini kullanabilirsiniz:

```php
// catalog/model/checkout/order.php veya event sistemi üzerinden
function sendOrderSms($order_id, $status) {
    $order = $this->model_checkout_order->getOrder($order_id);
    if (empty($order['telephone'])) return;

    $phone = preg_replace('/\D/', '', $order['telephone']);
    if (strlen($phone) === 10) $phone = '90' . $phone;

    $payload = [
        'username'    => 'kullanici@ornek.com',
        'password'    => 'api_sifreniz',
        'source_addr' => 'MAGANIZADI',
        'messages'    => [[
            'dest' => $phone,
            'msg'  => "Siparişiniz #{$order_id} alındı. Teşekkürler!"
        ]]
    ];

    $ch = curl_init('https://sms.verimor.com.tr/v2/send.json');
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => json_encode($payload),
        CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
        CURLOPT_RETURNTRANSFER => true,
    ]);
    curl_exec($ch);
    curl_close($ch);
}
```

## İlgili Sayfalar

- [SMS API Gönderme →](/sms/gonderme)
- [Hızlı Başlangıç (PHP) →](/rehber/hizli-baslangic)
