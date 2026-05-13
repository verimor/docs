---
prev:
  text: 'BizimHesap'
  link: '/entegrasyonlar/bizimhesap'
next:
  text: 'Qpien'
  link: '/entegrasyonlar/qpien'
---

# WHMCS 

WHMCS – Verimor SMS entegrasyonu sayesinde sipariş onayları, fatura
hatırlatmaları, domain yenilemeleri ve ticket bildirimleri otomatik olarak
SMS ile gönderilir.

**Entegrasyon Türü:** Hosting / Yazılım Yönetim Paneli
**Verimor Hizmetleri:** SMS, OTP

---

## Özellikler

**Toplu ve Kişisel SMS Gönderimi**
Müşterilerinize toplu kampanya SMS'leri gönderebilir veya tekil bildirimler
yapabilirsiniz. Panel üzerinden müşteri kartındaki "SMS Gönder" kutucuğu
ile anında mesaj atabilirsiniz.

**25 Hazır SMS Şablonu**
WHMCS içerisinde sık kullanılan tüm işlemler için otomatik SMS tetikleyicileri
bulunur. Şablonlar özelleştirilebilir.

**Sipariş ve Hizmet Bildirimleri**
Yeni sipariş, sipariş onayı, hizmet aktivasyonu, durdurma ve yeniden başlatma
gibi tüm aksiyonlar SMS ile bildirilir.

**Domain İşlemleri Otomatik SMS**
Domain kayıt, yenileme, hata durumları ve süresi dolmak üzere olan domainler
için hem müşteriye hem yöneticiye SMS gönderilir.

**Fatura Süreçlerine Tam Entegrasyon**
Yeni fatura oluşturulduğunda, ödeme yapıldığında veya gecikme yaşandığında
otomatik SMS gider. 1., 2. ve 3. zaman aşımı hatırlatma SMS'leri desteklenir.

**Destek Bildirimleri ve Ticket Yönetimi**
Yeni ticket açıldığında veya cevaplandığında SMS bildirimi yapılır.

**Güvenlik ve Doğrulama**
OTP (tek kullanımlık şifre) sayesinde müşteri girişlerinde telefon doğrulaması
yapılabilir. Yeni üyeliklerde SMS doğrulaması otomatik olarak tetiklenir.

**Kolay Kurulum**
Verimor OİM üzerinden API erişimini açın ve eklentiyi WHMCS modüllerine ekleyin.
Kurulum tamamlandıktan sonra tüm SMS süreçleri tamamen otomatik çalışır.

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
- [Hızlı Başlangıç (PHP) →](/sms/giris)
