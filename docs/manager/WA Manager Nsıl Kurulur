# WA Manager Kurulum Rehberi

WA Manager kurulumu üç aşamadan oluşur: Meta (Facebook Business) 
tarafında hazırlık, WA Manager panelinde aktivasyon ve Bulut Santral 
tarafında yapılandırma.

---

## Başlamadan Önce

Kuruluma geçmeden önce aşağıdaki gereksinimlerin karşılandığından 
emin olun:

| Gereksinim | Nereden Kontrol Edilir |
|---|---|
| İşletme portfolyosu oluşturulmuş | [business.facebook.com](https://business.facebook.com) |
| İşletme doğrulanmış | İşletme Bilgileri sayfası |
| Mesajlaşma limiti 2000 | WhatsApp Yöneticisi → Hesap Araçları |

---

## Aşama 1 — Meta (Facebook Business) Tarafı

### 1. Numarayı WhatsApp Business Uygulamasından Ayır

Kurulumu yapılacak numara bir WhatsApp Business mobil uygulamasında 
aktif kullanılıyorsa önce uygulamadan hesabı silmeniz gerekir.

> ⚠️ **Önemli:** Uygulamadan çıkış yapmak (logout) veya uygulamayı 
> silmek yeterli değildir. Uygulama içinden **Hesabı Sil** seçeneğini 
> kullanmanız gerekir.

### 2. Yeni Uygulama Oluştur

1. [business.facebook.com](https://business.facebook.com) adresine gidin
2. **Uygulama Ekle** seçeneğine tıklayın
3. Yeni uygulama kodu oluşturun:
   - **App name:** `sip_trunk`
   - **Amaç:** Connect with customers through WhatsApp

### 3. WhatsApp Hesabı Ekle

Henüz ekli değilse ilgili WhatsApp hesabını işletme portfolyosuna ekleyin.

### 4. Sistem Kullanıcısı Oluştur

1. Sistem Kullanıcısı bölümüne gidin
2. Yeni kullanıcı ekleyin:
   - **System user name:** `sip_trunk`
   - **System user role:** Admin

### 5. Sistem Kullanıcısına Varlık Ata

Oluşturulan `sip_trunk` kullanıcısına aşağıdaki iki varlığı atayın:

| Varlık | Yetki |
|---|---|
| `sip_trunk` uygulaması | Tam kontrol |
| WhatsApp Hesabı | Telefon numarası görüntüleme ve yönetme |

### 6. Token Oluştur ve Verimor'a İlet

1. **Jeton Oluştur** seçeneğine tıklayın
2. Ayarlar:
   - Uygulama: `sip_trunk`
   - Süre: **Asla**
   - İzinler: **Hepsi**
3. Oluşturulan token'ı Verimor'a bildirin

### 7. Telefon Numarası Bilgilerini Verimor'a İlet

**WhatsApp Yöneticisi → WhatsApp Hesapları → Telefon Numaraları** 
sayfasından aşağıdaki iki bilgiyi Verimor'a gönderin:

- Telefon numarası kodu (Phone ID)
- Telefon numarası

---

## Aşama 2 — WA Manager Paneli

1. **Müşteri oluştur** — Meta'dan iletilen Phone ID, token ve numarayı girin
2. **"WhatsApp Numara API Aç"** işlemini gerçekleştirin
3. **"WhatsApp SIP Aktifle"** işlemini gerçekleştirin

---

## Aşama 3 — Bulut Santral Tarafı

1. **SIP Trunk ekle:**
   - Sunucu adresi: `sip.wamanager.com.tr`
   - Kullanıcı adı: Müşterinin WhatsApp numarası
2. **Gelen Arama Yönetimi** bölümünden ilgili numara için senaryo ekleyin

---

## Sorun Çözümleri

### WA Manager'da Çift SIP Sunucu Tanımı

**Belirti:** Müşteri Yönetimi → Tanım Detay sorgusunda aynı adres 
için 2 ayrı SIP sunucu tanımı görünüyor.

**Neden Olur:** İki farklı API key üzerinden tanımlama yapılmıştır.

**Çözüm 1 (Tercih edilen):**  
Fazladan tanımı oluşturan API key ile sisteme giriş yapın ve 
o tanımı silin.

**Çözüm 2:**  
Numarayı tamamen silip yeniden oluşturun.

---

## Kurulum Akışı Özeti
