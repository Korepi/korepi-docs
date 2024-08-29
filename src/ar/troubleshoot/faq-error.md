---
title: أخطاء الحاقن الشائعة
icon: info
category:
  - Troubleshoot
tag:
  - Start
author: Schvis
order: 2
---

## قائمة الأخطاء الشائعة

### لماذا يختفي korepi الخاص بي؟

تأكد من تعطيل برنامج مكافحة الفيروسات لديك، وقم بإنشاء مجلد جديد وإضافته إلى الاستثناءات.

![](/assets/images/docs/202312/virus.png)

قم باستخراج korepi داخل المجلد المستبعد وتشغيله مرة أخرى.

---
### Status: No active subscription(s) found, Invalid license key

أنت بحاجه إلى [الحصول على مفتاح جديد](../guide/getkey.md) من `⁠🔐｜verification`, إذا لم تتمكن من الحصول على المفتاح أو إذا كان المفتاح لا يعمل، عليك الانتظار حتى انتهاء صلاحية المفتاح.

`يمكن للداعمين استخدام مفتاح F:Reset بدلاً من ذلك`

### [DLL injection]  Process crashed, exit code 0xc000005

افتح `cmd` كمسؤول واكتب الأمر التالي:

`sfc /scannow`

بعد ذلك، إذا تم العثور على أخطاء، أعد تشغيل الكمبيوتر وتحقق.
إذا لم يساعد ذلك بعد إعادة التشغيل أو لم يتم العثور على أي أخطاء، فاكتب هذا الأمر:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

بعد الانتهاء من الاختبارات، أعد تشغيل الكمبيوتر وتحقق.

إذا لم ينجح الأمر، فأعد تثبيت ويندوز.

---
### ImGUI: DirectX11 backend initialized successfully.

حدث خطأ بسبب تثبيت السمات، قم بمسح مجلد "themes".

---
### The system did not detect MSVCP140.dll

قم بتحديث [Microsoft Visual Studio C++](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022)

قم بتحديث [DirectX](https://www.microsoft.com/en-us/download/details.aspx?id=35)

---
### File corrupted! This program has been manipulated and maybe it's infected.

![](/assets/images/docs/202312/virus2.png)

في هذه الحالة، يمكنك تجربة استخدام "Malware Bytes" أو "Dr.Web" لإجراء فحص كامل، وفي حالة العثور على أي فيروس، قم بإزالته وإعادة التشغيل والمحاولة مرة أخرى. إذا لم ينجح الأمر، فإن إعادة تثبيت Windows هي أسهل طريقة لحل هذه المشكلة.

---
### Timeout was reached

![](/assets/images/docs/202312/error1.png)

أعد تشغيل جهاز الراوتر الخاص بك.

قد يكون برنامج مكافحة الفيروسات يمنع الاتصال، تأكد من عدم وجوده في Task Manager.

استخدم VPN وحاول مرة أخرى.

قم بإيقاف تشغيل كافة التطبيقات التي تؤثر على جدار الحماية. إذا لم ينجح أي شيء، فقد يكون لديك بعض المشاكل في الشبكة.

---
### DLL Injection failed

قم بإلغاء تثبيت مجلد colorpicker وقم بتنزيل colorpicker مرة أخرى.

---
### Windows cannot access the specified device, path, or file

![](/assets/images/docs/202312/error2.png)

في البداية اذهب الى [هنا](https://support.microsoft.com/en-us/topic/-windows-cannot-access-the-specified-device-path-or-file-error-when-you-try-to-install-update-or-start-a-program-or-file-46361133-47ed-6967-c13e-e75d3cc29657) واتبع الخطوات الموجودة في هذا المنشور.

وأيضًا بعد الانتقال إلى الحلول الموجودة في المنشور، قم بتنزيل برنامج مكافحة فيروسات مثل "Dr.Web" أو "Malware bytes" وقم بإجراء فحص كامل للنظام!

إذا لم يساعد ذلك، فافتح cmd كمسؤول واكتب `sfc /scannow`

بعد ذلك، إذا تم العثور على أخطاء، أعد تشغيل الكمبيوتر وتحقق.

إذا لم يساعد ذلك بعد إعادة التشغيل أو لم يتم العثور على أي أخطاء، فاكتب هذا الأمر:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

بعد الانتهاء من عمليات التحقق، أعد تشغيل الكمبيوتر وتحقق مرة أخرى.

إذا لم ينجح الأمر، فأعد تثبيت Windows.

---
### Signature checksum failed

![](/assets/images/docs/202312/checksum.png)

الخوادم معطلة أو متوقفة عن العمل، انتظر حتى تعود الخوادم للعمل.

---
### Failed to create game process with Error 5

![](/assets/images/docs/202312/error3.png)

احدف `cfg.ini`.

---
### SSL connect error

![](/assets/images/docs/202312/error4.png)

أعد تشغيل جهاز الكمبيوتر الخاص بك، أعد تشغيل جهاز الراوتر الخاص بك.

حاول استخدام VPN إذا لم يعمل.

---
### Failed to detect game version

قم بتحديث program الخاص بك، اتبع الخطوات [هنا](../start/download.md)

---
### File ok

احذف ملف cfg.json، فقد يكون هناك خطأ ما في الملف.

---
### UserAssembly.dll isn't initialized, waiting for 2 sec.

إذا تعطل program الخاص بك بعد هذا الخط، فجرب الخطوات التالية:

قم بإيقاف تشغيل كافة برامج مكافحة الفيروسات في جهاز الكمبيوتر.

إذا لم يكن الأمر مفيدًا، فاستخدم الأمر `sfc /scannow` في cmd كمسؤول.

إذا تم العثور على أخطاء بعد التحقق ولم يتمكن Windows من حلها، فاستخدم امر `DISM.exe /Online /Cleanup-Image /RestoreHealth`. 

بعد التحقق، قم بإعادة تشغيل جهاز الكمبيوتر الخاص بك وحاول تشغيل Colorpicker مرة أخرى.

إذا تكرر الخطأ، يمكنك إجراء إعادة ضبط المصنع لنظام التشغيل Windows.

---
### Current data does not exist or server error.

![](/assets/images/docs/202312/error.png)

Unpause your license and try again.

---
### Cannot verify current timestamp.

![](/assets/images/docs/202402/timestamp.png)

Case 1:
- You might get this error while using a VPN, please disable it and try again.

Case 2:
- Check that your PC time is set to automatic sync.

::: info If you are from Iran you might need to use a VPN instead.
:::

---
### Unable to open file to write public key:

- This error might happen if you got your game installed in other drive other than your main drive `C:/` , to solve it you can reinstall the game to the main drive and run Korepi again.

---
### Failed to get response from https://md5c...

- This error might happen if your conection is not stable or your conection to the website its blocked, please copy the link and check if you can access it. If you can't access the website, using a VPN might help.

---
### Received code is not 200 from https://md5c...

- This Error will appear if your key is paused, please head to `🔐｜verification` and click on `Unpause Key` and type `Yes` on the pop-up.