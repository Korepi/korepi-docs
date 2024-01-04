---
title: كيفية استخدام السكنات المخصصة
icon: magic-wand-sparkles
category:
  - Guide
tag:
  - Start
  - Skins
author: Schvis
order: 4
---

::: info  ادا اضهر GIMI  `echo off` على cmd يمكنك فقط الضغط `Numpad 0` لإزالته، يمكنك أيضًا التعديل على `d3dx.ini` والبحث عن `hunting=` وتعيين ل `0`. 
:::
---

## كيفية استخدام السكنات المخصصة في Korepi

![](/assets/images/docs/202312/example.png)
من أجل استخدام السكنات المخصصة، سنحتاج إلى تنزيل: 

`3DMigoto(GIMI)`.
## <span style='color:blue;'>طريقة 1</span>
### الخطوة 1: التنزيل `GIMI`

حمل `GIMI` من الموقع الرسمي [Github](https://github.com/SilentNightSound/GI-Model-Importer/releases/tag/v7.0) و قم بتحميل الملف المسمى: `3dmigoto-GIMI-for-playing-mods.zip`.

![](/assets/images/docs/202312/3dm-1.png)

### الخطوة 2: قم باستخراج "GIMI" إلى مجلد

بعد تحميل `GIMI` سنحتاج إلى استخراجه في أي مجلد من اختيارك، داخل هذا المجلد ستجد `d3d11.dll`، سنقوم بنسخ المسار وإضافة `/d3d11.dll` في النهاية، على سبيل المثال :

`"path/d3d11.dll"`

### الخطوة 3: أضف "GIMI" إلى Korepi

للقيام بذلك، سنحتاج إلى إضافة الأسطر التالية في `cfg.ini` داخل مجلد korepi.

![](/assets/images/docs/202312/3dm-2.png)

في `DllPath` سنقوم بلصق المسار الذي نسخناه في الخطوة السابقة.

![](/assets/images/docs/202312/3dm-3.png)

### الخطوة 4: افتح Korepi

لو اتبعت الخطوات صح Korepi سيفتح مع `GIMI` كل مرة.

## <span style='color:blue;'>الطريقة 2</span>
### Step 1: تحميل `GIMI`

حمل `GIMI` من الموقع الرسمي [Github](https://github.com/SilentNightSound/GI-Model-Importer/releases/tag/v7.0) و قم بتحميل الملف المسمى: `3dmigoto-GIMI-for-playing-mods.zip`.

![](/assets/images/docs/202312/3dm-1.png)

### الخطوة 2: قم باستخراج "GIMI" إلى مجلد

بعد تنزيل `GIMI`, سنحتاج إلى استخراجه في أي مجلد من اختيارك، ستجد داخل هذا المجلد `3DMigoto Loader.exe`, سوف نقوم بتشغيل هذا الملف أولا.

### الخطوة 4: افتح Korepi

بعد تشغيل `GIMI`، سنقوم بتشغيل Korepi، وسيتم تحميل `GIMI` مع Korepi بعد ذلك، وسوف تحتاج إلى تكرار هذه الخطوات في كل مرة تريد فيها تشغيل Korepi مع `GIMI`.



