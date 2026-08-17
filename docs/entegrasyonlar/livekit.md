---
prev:
  text: 'ElevenLabs'
  link: '/entegrasyonlar/elevenlabs'
next:
  text: 'SMS Nedir?'
  link: '/sms/nedir'
---

**LiveKit ile Yapay Zeka Çağrı**  
**Entegrasyonu (Verimor Rehberi)**

**Verimor SIP Bilgilerinizi Öğrenme**  
LiveKit tarafında kurulum yapabilmek için öncelikle Verimor SIP kullanıcı adı ve şifrenizi  
öğrenmeniz gerekmektedir.

1. Verimor Online İşlem Merkezi'ne giriş yapın.  
2. Sol menüden Destek sekmesine tıklayın ve açılan sayfada üst menüden CİHAZ KURULUM SİHİRBAZI butonuna tıklayın.  
3. Kurulum seçeneklerinde sırasıyla: Bilgisayar \> Diğer \> Ana Sistem seçeneklerini işaretleyin.  
4. Numaranızı seçiniz alanından LiveKit'e bağlamak istediğiniz numarayı (Örn: 90850XXXXXXX) seçip Devam butonuna tıklayın.  
5. Alt kısımda açılan ekranda, LiveKit'e girmeniz gereken Kullanıcı adı (username), Şifre (password) ve Sunucu IP/Domain bilgileriniz görüntülenecektir. Bu bilgileri not alın.

![][image1]

**Inbound için:**

1. LiveKit hesabınıza girin,  
2. Telephony \> SIP Trunks seçeneklerine girin,  
3. Açılan sayfada SIP URI kısmını bizimle paylaşın.  
   ![][image2]  
4. SIP URI kısmında biz işlem yaptıktan sonra Online İşlem Merkezine giriş yapın,  
5. Ses Hizmeti \> Gelen Çağrı Yönetimi sayfasına girin,  
6. Tanımladığımız Trunk'ı **Yönlendir** kısmından seçin ve sayfayı kaydedin.  
   ![][image3]  
7. LiveKit tarafında Telephony \> SIP Trunks kısmında Create new trunk butonuna tıklayın.  
   ![][image4]  
8. Sırayla başlıkları doldurun ve Create butonuna basın.

   Trunk Name: Verimor Inbound

   Trunk direction: Inbound

   Numbers: 90XXXXXXXXXX (sabit numaranız)

   Allowed addresses: 194.49.126.26

   ![][image5]

**Outbound için**

LiveKit'te **SIP Trunks** sayfasından tekrar Create new trunk butonuna basın.  
Başlıkları doldurun ve Create butonuna basın.

Trunk name: Verimor Outbound

Trunk direction: Outbound

Address: [sip.verimor.com.tr](http://sip.verimor.com.tr)

Transport: UDP

Numbers: 90XXXXXXXXXX (sabit numaranız)

**Optional settings**

Media encryption: Disabled

Username: 90XXXXXXXXXX (Cihaz kurulum sihirbazından aldığınız kullanıcı adı)

Password: XXXXXXX (Cihaz kurulum sihirbazından aldığınız şifre)

![][image6]

**Kurulumunuz Tamamlandı\!**  
Sisteminiz artık tamamen hazır\! Değişikliklerin devreye girmesi için birkaç dakika bekledikten  
sonra Verimor numaranızı arayarak ilk testi gerçekleştirebilirsiniz.

Gelen aramalarda LiveKit agentın cevap verebilmesi için LiveKit içerisinde **Dispatch rules** kısmına girip Agent tanımlamayı unutmamalısınız.  
Çağrınız doğrudan LiveKit altyapısına yönlendirilecek ve yapay zeka asistanınız sizinle  
doğal bir dille konuşmaya başlayacaktır.

Giden arama (outbound) tanımlarınızı yaptıktan sonra da yapay zeka üzerinden otomatik aramalarınızı başlatabilirsiniz.

![][image7]

[image1]: /LiveKit1.jpg

[image2]: /LiveKit2.jpg

[image3]: /LiveKit3.jpg

[image4]: /LiveKit4.jpg

[image5]: /LiveKit5.jpg

[image6]: /LiveKit6.jpg

[image7]: /LiveKit7.jpg
