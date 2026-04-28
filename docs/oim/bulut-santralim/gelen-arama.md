---
prev:
  text: 'Sesli Karşılama Menüsü (IVR)'
  link: '/oim/bulut-santralim/ivr-menu'
next:
  text: 'Giden Arama Yönetimi'
  link: '/oim/bulut-santralim/giden-arama'
---

# Gelen Arama Yönetimi

Santrale gelen numaraları (DID) yönetin ve yönlendirme kurallarını belirleyin.

## Tanımlı Numaralar (DID)

| Numara | Açıklama | Yönlendirme | Mesai Dışı |
|--------|----------|-------------|-----------|
| 0850 532 0000 | Ana Hat | IVR → Ana Menü | Telesekreter |
| 0212 555 00 11 | Satış Hattı | Satış Kuyruğu | Sesli Mesaj |
| 0212 555 00 12 | Destek Hattı | Destek Kuyruğu | Sesli Mesaj |

## Zaman Tabanlı Yönlendirme

Her DID için mesai içi ve mesai dışı farklı yönlendirme tanımlayın:

1. Numaranın yanındaki **Düzenle** butonuna tıklayın
2. **Mesai Saatleri** sekmesinde çalışma günleri ve saatlerini belirleyin
3. **Mesai İçi Yönlendirme** ve **Mesai Dışı Yönlendirme** hedeflerini seçin
4. **Özel Tatil Günleri** ekleyebilirsiniz
5. **Kaydet**'e tıklayın
