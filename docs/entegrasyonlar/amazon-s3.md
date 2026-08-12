---
prev:
  text: 'AloTech'
  link: '/entegrasyonlar/alotech'
next:
  text: 'Fonify'
  link: '/entegrasyonlar/fonify'
---

# Amazon S3 Entegrasyonu

Amazon S3 entegrasyonu ile ses kayıtlarınızı kendi AWS S3 bucket'ınıza otomatik
olarak yedekleyebilirsiniz. Kimlik bilgileriniz ve verileriniz tamamen kendi AWS
hesabınızda kalır; Verimor sadece yedekleme bağlantısını kurar.

**Entegrasyon Türü:** Depolama / Yedekleme
**Verimor Hizmetleri:** Bulut Santral (Görüşme Kaydı Modülü)

---

## Özellikler

**Otomatik Ses Kaydı Yedekleme**
Görüşme Kaydı Modülü ile alınan ses kayıtları, belirttiğiniz AWS S3 bucket'ına
otomatik olarak yedeklenir.

**Kendi AWS Hesabınıza Tam Kontrol**
Bucket, bölge (region) ve kimlik bilgileri size aittir; verileriniz kendi AWS
hesabınızda saklanır.

**Bağlantı Testi**
Girdiğiniz bilgilerin doğruluğunu "Bağlantıyı Test Et" ile anında
doğrulayabilirsiniz.

**Entegrasyonu Kapatma / Yeniden Açma**
Yedeklemeyi istediğiniz zaman durdurabilir, dilediğinizde tekrar
etkinleştirebilirsiniz.

## Kurulum Gereksinimleri

- Aktif Bulut Santral hesabı ve **Görüşme Kaydı Modülü**
- Kendi AWS hesabınızda bir S3 bucket'ı
- Bucket'a erişimi olan bir AWS IAM kullanıcısı (Access Key ID / Secret Access Key)

::: warning
Güvenlik açısından tüm AWS hesabına erişimi olan kök (root) kullanıcı bilgilerini
kullanmayın. Sadece ilgili bucket'a erişim izni olan ayrı bir **IAM kullanıcısı**
oluşturup onun kimlik bilgilerini girin.
:::

::: info
Aynı anda yalnızca bir yedekleme yöntemi aktif olabilir. FTP veya Google Drive
yedekleme zaten etkinse, Amazon S3 entegrasyonunu açmadan önce mevcut yöntemi
kapatmanız gerekir.
:::

## Genel Kurulum Adımları

1. Verimor OİM > **Entegrasyonlar** sayfasından Amazon S3 entegrasyonunu seçin
2. Aşağıdaki bilgileri girin:
   - **Bucket Adı** — kayıtların yükleneceği S3 bucket'ının adı
   - **Bölge (Region)** — bucket'ın oluşturulduğu AWS bölgesi (ör. `eu-central-1`)
   - **Access Key ID** — IAM kullanıcınıza ait erişim anahtarı
   - **Secret Access Key** — IAM kullanıcınıza ait gizli erişim anahtarı
3. **Ayarları Kaydet** butonuna tıklayın
4. **Bağlantıyı Test Et** ile bilgilerin doğru girildiğini onaylayın

Ses kayıtlarınız bu andan itibaren otomatik olarak bucket'ınıza yedeklenir.

## Destek

Kurulum veya entegrasyon konusunda yardım için:
- **Verimor Destek:** 0850 532 0000
- **E-posta:** destek@verimor.com.tr

## İlgili Sayfalar

- [Arama Kayıtlarım →](/oim/sesli-hizmetler/arama-kayitlari)
