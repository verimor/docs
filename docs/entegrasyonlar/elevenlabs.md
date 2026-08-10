---
prev:
  text: 'HeyCalli'
  link: '/entegrasyonlar/heycalli'
next:
  text: 'SMS Nedir?'
  link: '/sms/nedir'
---

**ElevenLabs ile Yapay Zeka Çağrı**  
**Entegrasyonu (Verimor Rehberi)**

**Verimor SIP Bilgilerinizi Öğrenme**  
ElevenLabs tarafında kurulum yapabilmek için öncelikle Verimor SIP kullanıcı adı ve şifrenizi  
öğrenmeniz gerekmektedir.

1. Verimor Online İşlem Merkezi'ne giriş yapın.  
2. Sol menüden Destek sekmesine tıklayın ve açılan sayfada üst menüden CİHAZ KURULUM SİHİRBAZI butonuna tıklayın.  
3. Kurulum seçeneklerinde sırasıyla: Bilgisayar \> Diğer \> Ana Sistem seçeneklerini işaretleyin.  
4. Numaranızı seçiniz alanından ElevenLabs'a bağlamak istediğiniz numarayı (Örn: 90850XXXXXXX) seçip Devam butonuna tıklayın.  
5. Alt kısımda açılan ekranda, ElevenLabs'a girmeniz gereken Kullanıcı adı (username), Şifre (password) ve Sunucu IP/Domain bilgileriniz görüntülenecektir. Bu bilgileri not alın.

![][image1]

**Inbound için:**

1. Öncelikle bize hangi numaranızın Elevenlabs için kullanılacağını bildirmeniz gerekmektedir.  
2. Verimor Online İşlem Merkezine giriş yapın  
3. Soldaki menülerden Ses Hizmeti \> Gelen Çağrı Yönetimi sayfasına girin  
4. Trunk Listesi bölümüne 194.49.126.30 IP adresini ekleyin  
5. Yönlendir bölümünden yeni eklediğiniz IP adresinin olduğu Trunkı seçin  
6. Bu adımlardan sonra bize hangi numaradan arama almak istediğinizi bildirmeniz gerekmektedir.

![][image2]

**Bize kullanacağınız sabit numaranızı bildirdikten sonra ElevenLabs tarafında yapmanız gerekenler:**

* ElevenLabs’e Üyelik Oluşturun 

ElevenLabs platformuna ( https://elevenlabs.io/ ) Gmail hesabınız ile hızlıca giriş yapabilirsiniz.  
 

* SIP Trunk Tanımlayın

ElevenLabs platformunda sol üstten **Agents Platforma** geçiş yapın.  
**Phone Numbers**’a tıklayın.  
Açılan sayfada sağ üstteki **Import Number** butonuna tıklayın.

![][image3]

Import Number’a tıkladığınızda çıkan seçeneklerden **From SIP Trunk** seçeneğini seçin.  
![][image4]

Açılan sayfada sırayla Label Ve Phone number kısımlarını doldurun.  
Label kısmını istediğiniz gibi yazabilirsiniz.  
Phone number kısmını başında 90 olacak şekilde yazmanız gerekmektedir.  
![][image5]

**Inbound Configuration** kısmında Media Encryption seçeneğini Disabled olarak değiştirin.  
![][image6]

**Allowed Source IP Addresses** kısmında 194.49.126.30/32 tanımını yapın  
![][image7]  
**Inbound için** kalan diğer kısmı doldurmanıza gerek yoktur.

![][image8]

**Outbound için:**

Address kısmına;  
[**sip.verimor.com.tr**](http://sip.verimor.com.tr)

Transport type kısmını **UDP** olarak seçiyoruz

Media Encryption kısmını Disable olarak seçiyoruz.

Enable Codecs **PMCA ve PCMU** seçili kalacak şekilde tanımlıyoruz.  
![][image9]

Autentication kısmına Verimor Online İşlem Merkezinden aldığınız **Kullanıcı adı ve Şifrenizi** tanımlayın ve **Import** yazısına tıklayın.

![][image10]

**Kurulumunuz Tamamlandı**\!  
Sisteminiz artık tamamen hazır\! Değişikliklerin devreye girmesi için birkaç dakika bekledikten  
sonra Verimor numaranızı arayarak ilk testi gerçekleştirebilirsiniz.

Gelen aramalarda ElevenLabs agentın cevap verebilmesi için ElevenLabs içerisinde numaranıza girip Agent tanımlamayı unutmamalısınız.

Çağrınız doğrudan ElevenLabs altyapısına yönlendirilecek ve yapay zeka asistanınız sizinle  
doğal bir dille konuşmaya başlayacaktır. Giden arama (outbound) izniniz onaylandıktan  
sonra da yapay zeka üzerinden otomatik aramalarınızı başlatabilirsiniz.  


[image1]: /ElevenLabs1.jpg

[image2]: /ElevenLabs2.jpg

[image3]: /ElevenLabs3.jpg

[image4]: /ElevenLabs4.jpg

[image5]: /ElevenLabs5.jpg

[image6]: /ElevenLabs6.jpg

[image7]: /ElevenLabs7.jpg

[image8]: /ElevenLabs8.jpg

[image9]: /ElevenLabs9.jpg

[image10]: /ElevenLabs10.jpg
