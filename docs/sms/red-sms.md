# Red SMS (Kısa Numara ile Ret / İptal)

Red SMS, müşterilerin ticari SMS aboneliğini sonlandırmak veya ret 
bildirimi iletmek için belirli bir kısa numaraya mesaj göndermesine 
dayanan yasal uyumluluk çözümüdür.

## Neden Gerekli?

Ticari elektronik ileti mevzuatı (6563 sayılı Kanun ve ilgili yönetmelikler) 
gereğince, ticari SMS gönderen her işletmenin alıcılara abonelikten çıkış 
veya ret imkânı sunması zorunludur. Red SMS bu yükümlülüğü karşılar.

## Nasıl Çalışır?

1. Müşteri, gelen SMS'deki kısa numaraya "RED", "İPTAL" veya belirlenen 
   anahtar kelimeyi yazar
2. Mesaj Verimor sistemine ulaşır
3. İlgili numara otomatik olarak ret listesine eklenir
4. O numaraya bir daha ticari SMS gönderilmez

## Yasal Dayanak

- **6563 Sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun**
- **Ticari İletişim ve Ticari Elektronik İletiler Hakkında Yönetmelik**

Bu düzenlemeler kapsamında ret taleplerinin yerine getirilmesi ve 
kayıt altına alınması zorunludur.

## Dikkat Edilmesi Gerekenler

- Her ticari SMS'in sonunda ret talimatı yer almalıdır  
  (Örnek: *"Almak istemiyorsanız STOP yazıp 4XXX'e gönderin"*)
- Ret talepleri İYS kaydıyla da entegre edilmelidir. Bkz. [İYS](/iys/)
- Ret listesindeki numaralara gönderim yapılması yasal yaptırım doğurur

## Sıkça Sorulan Sorular

**Red SMS ile İYS arasındaki fark nedir?**  
Red SMS müşterinin size doğrudan ret bildirdiği kanaldır. İYS ise BTK 
altyapısında tutulan merkezi izin/ret veri tabanıdır. İkisi birbirini 
tamamlar; biri diğerinin yerine geçmez.

**Ret listesini görebilir miyim?**  
Evet. OİM panelinde tüm ret kayıtları listelenir ve dışa aktarılabilir.

**Hangi anahtar kelimeler kullanılabilir?**  
Sistem yapılandırmasına göre belirlenir. Yaygın kullanılanlar: RED, 
STOP, İPTAL, ÇIKIŞ.
