---
title: Yaygın İnjektör Hataları
icon: info
category:
  - SorunlarHakkında
tag:
  - Başlangıç
author: Schvis
order: 2
---

## Yaygın hataların listesi

### Korepi'm neden kayboluyor?

Anti-virüsünüzü devre dışı bıraktığınızdan emin olun, yeni bir klasör oluşturun ve hariç tutulanlara ekleyin.

![](/assets/images/docs/202312/virus.png)

Korepi'yi hariç tutulan klasörün içine çıkarın ve tekrar çalıştırın.

---
### Durum: No active subscription(s) found, Geçersiz lisans anahtarı

[get a new key](../guide/getkey.md) Butonuna Tıklayarak Yeni Anahtar Alabilirsiniz `⁠★⋅micah-bot-verify⋅★`, Eğer Bir anahtar alamazsanız veya anahtar çalışmazsa, anahtarın süresi dolana kadar beklemeniz gerekir.

`F:Reset Key instead Sponsorlar kullanabilir`

### [DLL injection]  Process crashed Hatası, exit code 0xc000005

`cmd` yi yönetici olarak açın ve aşağıdaki komutu yazın:

`sfc /scannow`

Bundan sonra, hatalar bulunursa, bilgisayarı yeniden başlatın ve kontrol edin.
Yeniden başlattıktan sonra yardımcı olmadıysa veya hiçbir hata bulunmadıysa, bu komutu yazın:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

Kontrolleri tamamladıktan sonra bilgisayarı yeniden başlatın ve kontrol edin.

Çalışmazsa, Windows'u yeniden yükleyin.

---
### ImGUI: DirectX11 backend başarıyla başlatıldı.

Yüklü temalar nedeniyle hata oluşuyor, `themes` klasörünü temizleyin.

---
### Sistem şunları tespit etmedi MSVCP140.dll

Güncelleyin [Microsoft Visual Studio C++](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022)

Güncelleyin [DirectX](https://www.microsoft.com/en-us/download/details.aspx?id=35)

---
### Dosya bozulmuş! Bu program manipüle edilmiş ve belki de virüs bulaşmıştır.

![](/assets/images/docs/202312/virus2.png)

Bu durumda, tam bir tarama yapmak için `Malware Bytes` veya `Dr.Web` kullanmayı deneyebilirsiniz, herhangi bir virüs bulunursa, bunları kaldırın, yeniden başlatın ve tekrar deneyin. Eğer işe yaramazsa, Windows'u yeniden yüklemek bu sorunu çözmenin en kolay yoludur.

---
### Zaman aşımına uğradı

![](/assets/images/docs/202312/error1.png)

Modeminizi yeniden başlatın.

Bir antivirüs bağlantısı engelliyor olabilir, bunun Görev Yöneticisi'nde olmadığından emin olun.

Bir VPN kullanın ve tekrar deneyin.

Güvenlik duvarını etkileyen tüm uygulamaları kapatın. Hiçbir şey işe yaramazsa, ağ ile ilgili bazı sorunlarınız olabilir.

---
### DLL Enjöktörü başarısız oldu

calculator klasörünü kaldırın ve calculator'u tekrar indirin.

---
### Windows belirtilen aygıta, yola veya dosyaya erişemiyor

![](/assets/images/docs/202312/error2.png)

İlk önce şu adrese gidin [BURAYA](https://support.microsoft.com/en-us/topic/-windows-cannot-access-the-specified-device-path-or-file-error-when-you-try-to-install-update-or-start-a-program-or-file-46361133-47ed-6967-c13e-e75d3cc29657) ve o gönderideki adımları takip edin.

Ayrıca, yazıdaki çözümlere gittikten sonra, `Dr.Web` veya `Malware bytes` gibi bir antivirüs indirin ve tam bir sistem kontrolü yapın!

Eğer yardımcı olmazsa cmd'yi yönetici olarak açın ve `sfc /scannow` yazın

Bundan sonra, hatalar bulunursa, bilgisayarı yeniden başlatın ve kontrol edin.

Yeniden başlattıktan sonra yardımcı olmadıysa veya herhangi bir hata bulunmadıysa, bu komutu yazın:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

Kontrolleri tamamladıktan sonra bilgisayarı yeniden başlatın ve tekrar kontrol edin.

Çalışmazsa, Windows'u yeniden yükleyin.

---
### İmza sağlaması başarısız oldu

![](/assets/images/docs/202312/checksum.png)

Sunucular çöktü veya kapatıldı, sunucuların tekrar çevrimiçi olmasını bekleyin.

---
### Error 5 ile oyun süreci oluşturulamadı

![](/assets/images/docs/202312/error3.png)

Kaldırın `cfg.ini`.

---
### SSL bağlantı hatası

![](/assets/images/docs/202312/error4.png)

Bilgisayarınızı yeniden başlatın, yöneticinizi yeniden başlatın.

Çalışmazsa VPN kullanmayı deneyin.

---
### Oyun sürümü algılanamadı

Enjektörünüzü güncelleyin, aşağıdaki adımları izleyin [BURA](../start/download.md)

---
### Dosya tamam

cfg.json dosyanızı silin, dosyada bir sorun olabilir.

---
### UserAssembly.dll isn't initialized, waiting for 2 sec.

Bu satırdan sonra enjektörünüz çökerse aşağıdaki adımları deneyin:

PC'deki tüm anti-virüsleri kapatın.

Eğer yardımcı olmazsa cmd'de yönetici olarak `sfc /scannow` komutunu kullanın.

Kontrolden sonra hatalar bulunursa ve Windows bunları çözemezse, `DISM.exe /Online /Cleanup-Image /RestoreHealth` komutunu kullanın.  

Kontrol ettikten sonra bilgisayarınızı yeniden başlatın ve calculator'u tekrar çalıştırmayı deneyin.

Hata tekrar ederse Windows'u fabrika ayarlarına sıfırlayabilirsiniz.

### Current data does not exist or server error.

![](/assets/images/docs/202312/error.png)

Unpause your license and try again.

### Cannot verify current timestamp.

![](/assets/images/docs/202402/timestamp.png)

Case 1:
- You might get this error while using a VPN, please disable it and try again.

Case 2:
- Check that your PC time is set to automatic sync.

::: info If you are from Iran you might need to use a VPN instead.
:::

### Unable to open file to write public key:

- This error might happen if you got your game installed in other drive other than your main drive `C:/` , to solve it you can reinstall the game to the main drive and run Korepi again.