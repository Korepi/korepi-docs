---
title: Список Частых Ошибок Инжектора
icon: info
category:
  - Устранение Неполадок
tag:
  - Начало
author: 
  name: "QweRez"
  url: "https://github.com/qwerezon/"
order: 2
---

## Список Частых Ошибок

## Почему мой Korepi исчезает?

Убедитесь, что ваш антивирус отключен, создайте новую папку и добавьте ее в исключения.

![](/assets/images/docs/202312/virus.png)

Распакуйте Korepi внутри исключенной папки и запустите снова.

---
## Статус: No active subscription(s) found, Invalid license key

Вам нужно [получить новый ключ](../guide/getkey.md) от `⁠★⋅micah-bot-verify⋅★`, если вы не можете получить ключ или ключ не работает, вам придется ждать истечения срока действия ключа.

### `Спонсоры могут использовать F:Reset Key вместо этого`

---
## [DLL injection]  Process crashed, exit code 0xc000005

Откройте `cmd` от имени администратора и введите следующую команду:

`sfc /scannow`

После этого, если были найдены ошибки, перезагрузите компьютер и проверьте.
Если после перезагрузки это не помогло или ошибок не было найдено, введите эту команду:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

После завершения проверок перезагрузите компьютер и проверьте.

Если это не помогло, переустановите Windows.

---
## ImGUI: DirectX11 backend initialized successfully.

Ошибка возникает из-за установленных тем, очистите папку `themes`.

---
## Система не обнаружила MSVCP140.dll

Обновите [Microsoft Visual Studio C++](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022)

Обновите [DirectX](https://www.microsoft.com/en-us/download/details.aspx?id=35)

---
## Файл поврежден! Эта программа была изменена и, возможно, заражена.

![](/assets/images/docs/202312/virus2.png)

В этом случае вы можете попробовать использовать `Malware Bytes` или `Dr.Web` для полного сканирования; если вирус найден, удалите его, перезагрузите и попробуйте снова. Если это не помогает, переустановка Windows - самый простой способ решения этой проблемы.

---
## Timeout was reached

![](/assets/images/docs/202312/error1.png)

Перезагрузите ваш маршрутизатор.

Антивирус может блокировать соединение, убедитесь, что его нет в диспетчере задач.

Используйте VPN и попробуйте снова.

Отключите все приложения, влияющие на брандмауэр. Если ничего не помогает, возможно, у вас проблемы с сетью.

---
## DLL Injection failed

Удалите папку colorpicker и снова загрузите colorpicker.

---
## Windows cannot access the specified device, path, or file

![](/assets/images/docs/202312/error2.png)

Сначала перейдите [СЮДА](https://support.microsoft.com/en-us/topic/-windows-cannot-access-the-specified-device-path-or-file-error-when-you-try-to-install-update-or-start-a-program-or-file-46361133-47ed-6967-c13e-e75d3cc29657) и следуйте шагам в этом сообщении.

Также, после применения решений из сообщения, скачайте антивирус, такой как `Dr.Web` или `Malware Bytes`, и запустите полную проверку системы!

Если это не поможет, откройте cmd от имени администратора и введите `sfc /scannow`

После этого, если были найдены ошибки, перезагрузите компьютер и проверьте.

Если после перезагрузки это не помогло или ошибок не было найдено, введите эту команду:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

После завершения проверок перезагрузите компьютер и проверьте снова.

Если это не помогает, переустановите Windows.

---
## Signature checksum failed

![](/assets/images/docs/202312/checksum.png)

Серверы выключены, подождите, пока серверы не включатся.

---
## Failed to create game process with Error 5

![](/assets/images/docs/202312/error3.png)

Удалите `cfg.ini`.

---
## SSL connect error

![](/assets/images/docs/202312/error4.png)

Перезагрузите компьютер, перезапустите маршрутизатор.

Попробуйте использовать VPN, если это не помогает.

---
## Failed to detect game version

Обновите ваш инжектор, следуйте шагам [здесь](../start/download.md)

---
## File ok

Удалите ваш `cfg.json`, возможно, файл поврежден.

---
## UserAssembly.dll isn't initialized, waiting for 2 sec.

Если ваш инжектор выходит из строя после этой строки, выполните следующие действия:

Выключите все антивирусные программы на компьютере.

Если это не помогает, используйте команду `sfc /scannow` в командной строке от имени администратора.

Если после проверки найдены ошибки и Windows не может их устранить, используйте команду `DISM.exe /Online /Cleanup-Image /RestoreHealth`.

После проверки перезагрузите компьютер и попробуйте запустить инжектор снова.

Если ошибка повторяется, вы можете выполнить сброс до заводских настроек Windows.
