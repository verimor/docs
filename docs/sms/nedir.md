---
next:
  text: 'Toplu SMS'
  link: '/sms/toplu-sms'
---

# SMS Nedir?

SMS (Short Message Service), cep telefonu şebekeleri üzerinden kısa metin mesajı gönderme hizmetidir. Verimor SMS hizmeti ile müşterilerinize, çalışanlarınıza veya belirlediğiniz herhangi bir kitleye anında ulaşabilirsiniz.

## Ne İşe Yarar?

SMS; e-posta veya uygulama bildirimine kıyasla çok daha yüksek açılma oranına sahiptir (%98). Teknik altyapı gerektirmez, internet bağlantısı olmayan cihazlara da iletilir.

**Yaygın kullanım alanları:**

- **Sipariş ve kargo bildirimleri** — "Siparişiniz kargoya verildi"
- **Randevu hatırlatmaları** — Klinik, salon, restoran rezervasyonları
- **OTP / 2FA doğrulama** — Güvenli giriş ve işlem onayı
- **Kampanya ve promosyonlar** — Toplu pazarlama mesajları
- **Ödeme ve borç hatırlatmaları** — Fatura, taksit bildirimleri
- **Acil durum duyuruları** — Anlık bildirimler

## Verimor ile SMS Göndermenin Yolları

### 1. Online İşlem Merkezi (OİM) — Panel

Teknik bilgi gerektirmez. Tarayıcı üzerinden giriş yaparak mesaj gönderebilir, rehber yükleyebilir ve raporları inceleyebilirsiniz.

[OİM'e giriş yap →](https://oim.verimor.com.tr)

### 2. SMS API

Kendi yazılımınız, web siteniz veya uygulamanız üzerinden otomatik SMS gönderimi için kullanılır. Python, PHP, Node.js veya herhangi bir programlama dili ile kolayca entegre edilir.

[SMS API Dokümantasyonu →](/sms/giris)

### 3. Hazır Entegrasyonlar

Shopify, Opencart, Zoho, WHMCS gibi kullandığınız platforma eklenti kurarak panele bile girmeden SMS gönderebilirsiniz.

[Entegrasyonlara bakın →](/entegrasyonlar/)

## SMS Başlığı (Gönderici Adı)

Mesajlarınızda "VERIMOR", "FIRMAADI" gibi alfanümerik bir gönderici adı görüntülemek için onaylı bir başlık tanımlanması gerekir. Başlık BTK onayına tabidir.

OİM üzerinden başlık başvurusu yapabilirsiniz.

## Karakter Limitleri

| Tür | 1 Boy | 2 Boy | 3 Boy |
|-----|-------|-------|-------|
| Türkçesiz (Latin) | 160 karakter | 306 | 459 |
| Türkçeli (Ş ş Ğ ğ ç ı İ) | 155 karakter | 298 | 447 |
| Unicode (emoji, özel) | 70 karakter | 134 | 201 |

::: tip
Mesajınız 1 boy sınırını aşarsa birden fazla SMS olarak iletilir; her boy ayrı kredi tüketir.
:::

## Sonraki Adımlar

- [Toplu SMS →](/sms/toplu-sms)
- [OTP / Tek Kullanımlık Şifre →](/sms/otp)
- [SMS API →](/sms/giris)
