---
title: Özel görünümler nasıl kullanılır?
icon: magic-wand-sparkles
category:
  - Kılavuzlar
tag:
  - Başlangıç
  - Görünümler
author: Schvis
order: 4
---

::: info Eğer GIMI cmd üzerinde `echo off` gösteriyorsa, bunu kaldırmak için sadece `Numpad 0`a basabilirsiniz, ayrıca `d3dx.ini` dosyasını düzenleyebilir ve `hunting=` araması yapabilir ve `0` olarak ayarlayabilirsiniz.
:::
---

## Korepi'de Özel Görünümler Nasıl Kullanılır

![](/assets/images/docs/202312/example.png)
Özel görünümleri kullanmak için indirmemiz gerekecek:

`3DMigoto(GIMI)`.
## <span style='color:blue;'>1. Yöntem</span>
### Adım 1: `GIMI` indir

Resmi [Github](https://github.com/SilentNightSound/GI-Model-Importer/releases/tag/v7.0) adresinden `GIMI` dosyasını indirin ve `3dmigoto-GIMI-for-playing-mods.zip` adlı dosyayı indirin.

![](/assets/images/docs/202312/3dm-1.png)

### Adım 2: `GIMI`yi bir klasöre çıkarın

`GIMI` yi indirdikten sonra, istediğiniz herhangi bir klasöre çıkarmamız gerekecek, bu klasörün içinde `d3d11.dll` bulacaksınız, yolu kopyalayacağız ve sonuna `/d3d11.dll` ekleyeceğiz, örneğin:

`"path/d3d11.dll"`

### Adım 3: Korepi'ye `GIMI` ekleyin

Bunu yapmak için korepi klasörü içindeki `cfg.ini` dosyasına aşağıdaki satırları eklememiz gerekecektir.

![](/assets/images/docs/202312/3dm-2.png)

`DllPath` üzerine son adımda kopyaladığımız yolu yapıştıracağız.

![](/assets/images/docs/202312/3dm-3.png)

### Adım 4: Korepi'yi açın

Eğer adımları doğru takip ettiyseniz, Korepi her seferinde `GIMI` ile başlamalıdır.

## <span style='color:blue;'>2. Yöntem</span>
### Adım 1: `GIMI` indir

Resmi [Github](https://github.com/SilentNightSound/GI-Model-Importer/releases/tag/v7.0) adresinden `GIMI` dosyasını indirin ve `3dmigoto-GIMI-for-playing-mods.zip` adlı dosyayı indirin.

![](/assets/images/docs/202312/3dm-1.png)

### Adım 2: `GIMI`yi bir klasöre çıkarın

`GIMI` yi indirdikten sonra, istediğiniz herhangi bir klasöre çıkarmamız gerekecek, bu klasörün içinde `3DMigoto Loader.exe` bulacaksınız, önce bu dosyayı çalıştıracağız.

### Adım 4: Korepi'yi açın

`GIMI` yi çalıştırdıktan sonra Korepi'yi çalıştıracağız, `GIMI` bundan sonra Korepi ile birlikte yüklenecektir, Korepi'yi `GIMI` ile her başlatmak istediğinizde bu adımları tekrarlamanız gerekecektir.



