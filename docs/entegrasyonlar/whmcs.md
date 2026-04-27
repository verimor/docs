---
prev:
  text: 'BizimHesap'
  link: '/entegrasyonlar/bizimhesap'
next:
  text: 'Qpien'
  link: '/entegrasyonlar/qpien'
---

# WHMCS Entegrasyonu

WHMCS müşteri yönetim paneline Verimor SMS entegrasyonu ekleyerek fatura, ödeme ve bilet bildirimlerini otomatik gönderin.

## Kurulum

### 1. Modül Dosyalarını Yükleyin

WHMCS kök dizininde aşağıdaki klasör yapısını oluşturun:

```
/modules/notifications/verimorsms/
    verimorsms.php
```

### 2. Modül Kodu

```php
<?php

class verimorsms extends \WHMCS\Module\Notification\AbstractNotification
{
    public function getName()
    {
        return 'Verimor SMS';
    }

    public function getSettings()
    {
        return [
            'username'    => ['FriendlyName' => 'Kullanıcı Adı', 'Type' => 'text'],
            'password'    => ['FriendlyName' => 'API Şifresi',   'Type' => 'password'],
            'source_addr' => ['FriendlyName' => 'Gönderici Başlık', 'Type' => 'text'],
        ];
    }

    public function send(\WHMCS\Module\Notification\DescriptorInterface $notification, $moduleSettings, $notificationSettings)
    {
        $to = $notification->getRecipients()[0] ?? null;
        if (!$to) return;

        $payload = [
            'username'    => $moduleSettings['username'],
            'password'    => $moduleSettings['password'],
            'source_addr' => $moduleSettings['source_addr'],
            'messages'    => [[
                'dest' => preg_replace('/\D/', '', $to->mobile ?? $to->phone ?? ''),
                'msg'  => $notification->getMessage(),
            ]],
        ];

        $ch = curl_init('https://sms.verimor.com.tr/v2/send.json');
        curl_setopt_array($ch, [
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => json_encode($payload),
            CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_SSL_VERIFYPEER => true,
        ]);
        curl_exec($ch);
        curl_close($ch);
    }
}
```

### 3. WHMCS'de Aktifleştirme

1. WHMCS Admin > **Setup** > **Notification Rules**
2. **Add New Rule** > Provider olarak **Verimor SMS** seçin
3. Kullanıcı adı, şifre ve başlık bilgilerini girin
4. Tetikleyicileri belirleyin (Fatura oluşturuldu, Ödeme alındı vb.)
5. Kaydedin

## Yaygın Bildirim Senaryoları

| Olay | Mesaj Örneği |
|------|-------------|
| Yeni fatura | "Faturanız oluşturuldu. Vade: 15.01.2025. Ödeme: panel.domain.com" |
| Ödeme alındı | "Ödemeniz alındı. Teşekkürler!" |
| Destek bileti açıldı | "#1234 numaralı biletiniz alındı. En kısa sürede yanıtlanacak." |
| Alan adı yenileme | "Domain.com alan adınız 7 gün sonra sona eriyor." |
| Servis askıya alındı | "Hizmetiniz askıya alındı. Ödeme için: panel.domain.com" |

## İlgili Sayfalar

- [SMS API Gönderme →](/sms/gonderme)
- [Hızlı Başlangıç (PHP) →](/rehber/hizli-baslangic)
