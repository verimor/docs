---
prev:
  text: 'Otomatik Arama (IVR)'
  link: '/switch/otomatik-arama'
next:
  text: "Bulut Santralim API'ye Giriş"
  link: '/switch/giris'
---

# Numara Maskeleme

Numara maskeleme, iki tarafın birbirinin gerçek telefon numarasını görmeden güvenli biçimde görüşmesini sağlar. Her iki taraf da yalnızca Verimor'un ara numarasını görür.

## Kullanım Alanları

- **Pazaryerleri** — Alıcı ve satıcı birbirinin numarasını görmez
- **Kurye / kargo** — Şoför ve müşteri anonimliği
- **Freelance platformları** — İşveren ve çalışan gizliliği
- **Sağlık** — Doktor-hasta iletişiminde kişisel numara gizleme
- **Emlak** — Portföy numarası üzerinden iletişim

## Nasıl Çalışır?

```
Arayan A → [Verimor Ara Numarası] → Aranan B
```

1. A tarafı maskeleme numarasını arar
2. Santral B tarafını otomatik arar
3. İkisi bağlanır — kimse diğerinin gerçek numarasını görmez
4. Görüşme tamamlandığında bağlantı kesilir

## API ile Numara Maskeleme

Maskeleme özelliği `/originate` endpoint'i üzerinden tetiklenebilir. Detaylı yapılandırma için Verimor hesap yöneticinizle iletişime geçin.

```bash
curl "https://api.bulutsantralim.com/originate?key=API_ANAHTARINIZ&extension=MASKELEME_NUMARASI&destination=905001234567"
```

## Özellikler

- Çağrı süresi ve zaman damgası CDR'da kayıtlı kalır
- Ses kaydı (isteğe bağlı) desteklenir
- Webhook ile çağrı olayları anlık bildirilebilir

## İlgili Sayfalar

- [Çağrı Yönetimi API →](/switch/cagri-yonetimi)
- [CDR →](/switch/cdr)
