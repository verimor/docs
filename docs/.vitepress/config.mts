import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Verimor Dökümanlar',
  description: 'Verimor SMS, Bulut Santralim ve Entegrasyon Kılavuzları',
  lang: 'tr-TR',

  themeConfig: {
    logo: {
      light: '/logo-black.svg',
      dark: '/logo-white.svg',
    },
    siteTitle: false,

    nav: [
      { text: 'Ana Sayfa', link: '/' },
      {
        text: 'SMS',
        items: [
          { text: 'SMS Nedir?', link: '/sms/nedir' },
          { text: 'SMS API', link: '/sms/giris' },
          { text: 'İYS', link: '/iys/nedir' },
        ],
      },
      {
        text: 'Bulut Santralim',
        items: [
          { text: 'Bulut Santralim Nedir?', link: '/switch/nedir' },
          { text: 'Bulut Santralim API', link: '/switch/giris' },
        ],
      },
      { text: 'OİM', link: '/oim/' },
      { text: 'Entegrasyonlar', link: '/entegrasyonlar/' },
    ],

    sidebar: {
      '/sms/': [
        {
          text: 'SMS Hizmetleri',
          items: [
            { text: 'SMS Nedir?', link: '/sms/nedir' },
            { text: 'Toplu SMS', link: '/sms/toplu-sms' },
            { text: 'OTP / Tek Kullanımlık Şifre', link: '/sms/otp' },
          ],
        },
        {
          text: 'SMS API',
          items: [
            { text: 'API\'ye Giriş', link: '/sms/giris' },
            { text: 'Kimlik Doğrulama', link: '/sms/kimlik-dogrulama' },
            { text: 'SMS Gönderme', link: '/sms/gonderme' },
            { text: 'Rapor Sorgulama', link: '/sms/rapor' },
            { text: 'Bakiye Sorgulama', link: '/sms/bakiye' },
            { text: 'Başlık Yönetimi', link: '/sms/baslik' },
            { text: 'Kara Liste', link: '/sms/kara-liste' },
            { text: 'Hata Kodları', link: '/sms/hata-kodlari' },
          ],
        },
      ],

      '/iys/': [
        {
          text: 'İleti Yönetim Sistemi',
          items: [
            { text: 'İYS Nedir?', link: '/iys/nedir' },
            { text: 'İzin Yönetimi', link: '/iys/izin-yonetimi' },
            { text: 'Ticari SMS Gönderimi', link: '/iys/ticari-sms' },
          ],
        },
      ],

      '/switch/': [
        {
          text: 'Bulut Santralim',
          items: [
            { text: 'Bulut Santralim Nedir?', link: '/switch/nedir' },
            { text: 'Click-to-Call', link: '/switch/click-to-call' },
            { text: 'Otomatik Arama (IVR)', link: '/switch/otomatik-arama' },
            { text: 'Numara Maskeleme', link: '/switch/numara-maskeleme' },
          ],
        },
        {
          text: 'Bulut Santralim API',
          items: [
            { text: 'API\'ye Giriş', link: '/switch/giris' },
            { text: 'Kimlik Doğrulama', link: '/switch/kimlik-dogrulama' },
            { text: 'Çağrı Yönetimi', link: '/switch/cagri-yonetimi' },
            { text: 'Çağrı Detay Kayıtları', link: '/switch/cdr' },
            { text: 'Kuyruklar', link: '/switch/kuyruklar' },
            { text: 'IVR Kampanyaları', link: '/switch/ivr-kampanya' },
            { text: 'Ses Kayıtları', link: '/switch/ses-kayitlari' },
            { text: 'Faks', link: '/switch/faks' },
          ],
        },
      ],

      '/oim/': [
        {
          text: 'Online İşlem Merkezi',
          items: [
            { text: 'OİM Nedir?', link: '/oim/' },
          ],
        },
        {
          text: 'Sesli Hizmetler',
          items: [
            { text: 'Tarifem', link: '/oim/sesli-hizmetler/tarife' },
            { text: 'Arama Kayıtlarım', link: '/oim/sesli-hizmetler/arama-kayitlari' },
            { text: 'Aktif Çağrılarım', link: '/oim/sesli-hizmetler/aktif-cagrilar' },
            { text: 'Gelen Çağrı Yönetimi', link: '/oim/sesli-hizmetler/gelen-cagri-yonetimi' },
            { text: 'Akıllı Yönlendirme', link: '/oim/sesli-hizmetler/akilli-yonlendirme' },
            { text: 'Telesekreter', link: '/oim/sesli-hizmetler/telesekreter' },
            { text: 'Ses Ayarlarım', link: '/oim/sesli-hizmetler/ses-ayarlari' },
          ],
        },
        {
          text: 'SMS',
          items: [
            { text: 'SMS Gönder', link: '/oim/sms/sms-gonder' },
            { text: "Excel'den SMS Gönder", link: '/oim/sms/excel-sms' },
            { text: 'Hazır Mesajlar', link: '/oim/sms/hazir-mesajlar' },
            { text: 'Başlıklarım', link: '/oim/sms/basliklarim' },
            { text: 'Kara Listem', link: '/oim/sms/kara-listem' },
            { text: 'Gelen SMS', link: '/oim/sms/gelen-sms' },
            { text: 'Gönderim Takibi', link: '/oim/sms/gonderi-takibi' },
            { text: 'SMS Ayarlarım', link: '/oim/sms/sms-ayarlari' },
            { text: 'İYS İzinleri', link: '/oim/sms/iys-izinleri' },
          ],
        },
        {
          text: 'Bulut Santralim',
          items: [
            { text: 'Durum Paneli', link: '/oim/bulut-santralim/durum-paneli' },
            { text: 'Ses Dosyalarım', link: '/oim/bulut-santralim/ses-dosyalarim' },
            { text: 'Dahililerim', link: '/oim/bulut-santralim/dahililerim' },
            { text: 'Çalma Gruplarım', link: '/oim/bulut-santralim/calma-gruplari' },
            { text: 'Kuyruklarım', link: '/oim/bulut-santralim/kuyruklarim' },
            { text: 'IVR / Sesli Karşılama', link: '/oim/bulut-santralim/ivr-menu' },
            { text: 'Gelen Arama Yönetimi', link: '/oim/bulut-santralim/gelen-arama' },
            { text: 'Giden Arama Yönetimi', link: '/oim/bulut-santralim/giden-arama' },
            { text: 'Otomatik Arama', link: '/oim/bulut-santralim/otomatik-arama' },
            { text: 'Santral Ayarlarım', link: '/oim/bulut-santralim/santral-ayarlari' },
          ],
        },
        {
          text: 'Raporlar',
          items: [
            { text: 'Meşguliyet Panosu', link: '/oim/raporlar/mesgul-pano' },
            { text: 'Arama ve Ses Kayıtları', link: '/oim/raporlar/arama-kayitlari' },
            { text: 'Kuyruk İstatistikleri', link: '/oim/raporlar/kuyruk-istatistik' },
            { text: 'MT / Dahili İstatistikleri', link: '/oim/raporlar/mt-istatistik' },
          ],
        },
        {
          text: 'Rehber',
          items: [
            { text: 'Kişilerim', link: '/oim/rehber/kisilerim' },
            { text: 'Gruplarım', link: '/oim/rehber/gruplar' },
          ],
        },
        {
          text: 'Hesap Yönetimi',
          items: [
            { text: 'Abonelik Bilgilerim', link: '/oim/hesap/abonelik' },
            { text: 'Personel Hesapları', link: '/oim/hesap/personel' },
          ],
        },
        {
          text: 'Finansal İşlemler',
          items: [
            { text: 'Faturalarım', link: '/oim/finans/faturalar' },
            { text: 'Ödeme Yöntemleri', link: '/oim/finans/odeme' },
          ],
        },
      ],

      '/entegrasyonlar/': [
        {
          text: 'Entegrasyonlar',
          items: [
            { text: 'Genel Bakış', link: '/entegrasyonlar/' },
          ],
        },
        {
          text: 'E-Ticaret',
          items: [
            { text: 'Shopify', link: '/entegrasyonlar/shopify' },
            { text: 'Opencart', link: '/entegrasyonlar/opencart' },
            { text: 'İdeasoft', link: '/entegrasyonlar/ideasoft' },
            { text: 'İkas', link: '/entegrasyonlar/ikas' },
            { text: 'Ticimax', link: '/entegrasyonlar/ticimax' },
            { text: 'T-Soft', link: '/entegrasyonlar/tsoft' },
            { text: 'WooCommerce', link: '/entegrasyonlar/woocommerce' },
          ],
        },
        {
          text: 'CRM / ERP',
          items: [
            { text: 'Zoho CRM', link: '/entegrasyonlar/zoho' },
            { text: 'DinamikCRM', link: '/entegrasyonlar/dinamik-crm' },
            { text: 'Teamgram', link: '/entegrasyonlar/teamgram' },
            { text: 'KivaCRM', link: '/entegrasyonlar/kiva-crm' },
            { text: 'Workcube', link: '/entegrasyonlar/workcube' },
            { text: 'Mi4Biz', link: '/entegrasyonlar/mi4biz' },
          ],
        },
        {
          text: 'Yazılım',
          items: [
            { text: 'WHMCS', link: '/entegrasyonlar/whmcs' },
            { text: 'Qpien', link: '/entegrasyonlar/qpien' },
            { text: 'BizimHesap', link: '/entegrasyonlar/bizimhesap' },
          ],
        },
        {
          text: 'Yapay Zeka & İletişim',
          items: [
            { text: 'AloTech', link: '/entegrasyonlar/alotech' },
            { text: 'Fonify', link: '/entegrasyonlar/fonify' },
            { text: 'HeyCalli', link: '/entegrasyonlar/heycalli' },
          ],
        },
      ],
    },

    footer: {
      message: 'Verimor Telekomunikasyon',
      copyright: 'Copyright © 2024 Verimor',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Ara',
            buttonAriaLabel: 'Ara',
          },
          modal: {
            displayDetails: 'Detayları göster',
            resetButtonTitle: 'Aramayı temizle',
            backButtonTitle: 'Geri dön',
            noResultsText: 'Sonuç bulunamadı:',
            footer: {
              selectText: 'seç',
              selectKeyAriaLabel: 'enter',
              navigateText: 'gezin',
              navigateUpKeyAriaLabel: 'yukarı ok',
              navigateDownKeyAriaLabel: 'aşağı ok',
              closeText: 'kapat',
              closeKeyAriaLabel: 'esc',
            },
          },
        },
      },
    },

    outlineTitle: 'Bu sayfada',
    darkModeSwitchLabel: 'Tema',
    darkModeSwitchAria: 'Temayı değiştir',
    lightModeSwitchTitle: 'Açık temaya geç',
    darkModeSwitchTitle: 'Koyu temaya geç',
    sidebarMenuLabel: 'Menü',
    returnToTopLabel: 'Yukarı çık',

    docFooter: {
      prev: 'Önceki',
      next: 'Sonraki',
    },
  },
})
