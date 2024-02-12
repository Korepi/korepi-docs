---
title: 일반적인 프로그램 오류
icon: info
category:
  - 트러블슈팅
tag:
  - 시작
author: Schvis
order: 2
---

## 일반적인 오류 목록

### 왜 Korepi가 사라지나요?

바이러스 백신을 비활성화하세요, 새로운 폴더를 만들고 제외 리스트에 추가합니다.

![](/assets/images/docs/202312/virus.png)

제외한 폴더에 Korepi를 압축 해제하고 다시 실행합니다.

---

`⁠★⋅micah-bot-verify⋅★`에서 [새로운 키](../guide/getkey.md)를 획득해야 합니다. 키를 얻을 수 없거나 키가 작동하지 않으면 키가 만료될 때까지 기다려야 합니다.

`스폰서는 F:Reset Key를 사용할 수 있습니다.`

### [DLL injection]  Process crashed, exit code 0xc000005

`cmd`를 관리자 권한으로 실행하고 아래 명령을 입력합니다:

`sfc /scannow`

오류가 발견되면 컴퓨터를 재시작하고 확인합니다.
재시작해도 효과가 없거나 오류가 발견되지 않으면 아래 명령을 입력합니다.

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

확인이 끝나면 컴퓨터를 재시작하고 확인합니다.

그래도 안되면 윈도우를 재설치하세요.

---
### ImGUI: DirectX11 backend initialized successfully.

테마가 설치된 후 오류가 발생했다면, `themes` 폴더를 비우세요.

---
### The system did not detect MSVCP140.dll

[Microsoft Visual Studio C++](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022)를 업데이트하세요.

[DirectX](https://www.microsoft.com/en-us/download/details.aspx?id=35)를 업데이트하세요.

---
### File corrupted! This program has been manipulated and maybe it's infected.

![](/assets/images/docs/202312/virus2.png)

In this case, you can try using `Malware Bytes` or `Dr.Web` to do a full scan, if any virus is found, remove them, restart and try again. If it doesn't work, reinstall Windows is the easiest way to solve this issue.

---
### Timeout was reached

![](/assets/images/docs/202312/error1.png)

Reboot your router.

An antivirus may be blocking the connection, make sure that is not in the Task Manager.

Use a VPN and try again.

Turn off all applications that affect the firewall. If nothing works, then you might have some problems with the network.

---
### DLL Injection failed

Uninstall colorpicker folder and download colorpicker again.

---
### Windows cannot access the specified device, path, or file

![](/assets/images/docs/202312/error2.png)

At first go to [HERE](https://support.microsoft.com/en-us/topic/-windows-cannot-access-the-specified-device-path-or-file-error-when-you-try-to-install-update-or-start-a-program-or-file-46361133-47ed-6967-c13e-e75d3cc29657) and follow the steps on that post.

Also after going to the solutions on the post, download an antivirus like `Dr.Web` or `Malware bytes` and run a full system check!

If it doesn't help open cmd as administrator and write `sfc /scannow`

After that, if errors were found, restart the computer and check.

If after restarting it didn't help or no errors were found, write this command:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

After completing the checks, restart the computer and check again.

If it doesn't work, reinstall Windows.

---
### Signature checksum failed

![](/assets/images/docs/202312/checksum.png)

Servers are down or shut down, wait for servers to come back online.

---
### Failed to create game process with Error 5

![](/assets/images/docs/202312/error3.png)

Delete `cfg.ini`.

---
### SSL connect error

![](/assets/images/docs/202312/error4.png)

Restart your PC, restart your router.

Try using a VPN if it doesn't work.

---
### Failed to detect game version

Update your program, follow the steps [here](../start/download.md)

---
### File ok

Delete your cfg.json, something might be wrong with the file.

---
### UserAssembly.dll isn't initialized, waiting for 2 sec.

If your program crashes after this line try the following steps:

Turn off all anti-viruses in PC.

If its doesn't help use `sfc /scannow` command in cmd as administrator.

If errors are found after checking and Windows is unable to resolve them, use the `DISM.exe /Online /Cleanup-Image /RestoreHealth` command. 

After checking restart your computer and try to run colorpicker again.

If the error repeats you can make factory reset of Windows.

### Current data does not exist or server error.

![](/assets/images/docs/202312/error.png)

Unpause your license and try again.

