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
      { text: 'Entegrasyonlar', link: '/entegrasyonlar/' },
      { text: 'Rehber', link: '/rehber/baslangic' },
    ],

    sidebar: {
      '/rehber/': [
        {
          text: 'Rehber',
          items: [
            { text: 'Başlangıç', link: '/rehber/baslangic' },
            { text: 'Hızlı Başlangıç', link: '/rehber/hizli-baslangic' },
          ],
        },
      ],

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
    },
  },
})
