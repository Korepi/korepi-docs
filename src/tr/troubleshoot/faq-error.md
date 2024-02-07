---
title: Common Injector Errors
icon: info
category:
  - Troubleshoot
tag:
  - Start
author: Schvis
order: 2
---

## List of common errors

### Why my korepi disappears?

Make sure you got your anti-virus disabled, create a new folder and add it to exclusions.

![](/assets/images/docs/202312/virus.png)

Extract korepi inside the excluded folder and run again.

---
### Status: No active subscription(s) found, Invalid license key

You need to [get a new key](../guide/getkey.md) from `⁠★⋅micah-bot-verify⋅★`, if you can't get a key or if the key doesn't work, you have to wait till key expiration.

`Sponsors can use F:Reset Key instead`

### [DLL injection]  Process crashed, exit code 0xc000005

Open `cmd` as administrator and write the following command:

`sfc /scannow`

After that, if errors were found, restart the computer and check.
If after restarting it did not help or no errors were found, write this command:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

After completing the checks, restart the computer and check.

If it doesn't work, reinstall Windows.

---
### ImGUI: DirectX11 backend initialized successfully.

Error occurs because of themes installed, clear the `themes` folder.

---
### The system did not detect MSVCP140.dll

Update [Microsoft Visual Studio C++](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022)

Update [DirectX](https://www.microsoft.com/en-us/download/details.aspx?id=35)

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

Update your injector, follow the steps [here](../start/download.md)

---
### File ok

Delete your cfg.json, something might be wrong with the file.

---
### UserAssembly.dll isn't initialized, waiting for 2 sec.

If your injector crashes after this line try the following steps:

Turn off all anti-viruses in PC.

If its doesn't help use `sfc /scannow` command in cmd as administrator.

If errors are found after checking and Windows is unable to resolve them, use the `DISM.exe /Online /Cleanup-Image /RestoreHealth` command. 

After checking restart your computer and try to run colorpicker again.

If the error repeats you can make factory reset of Windows.

### Current data does not exist or server error.

![](/assets/images/docs/202312/error.png)

Unpause your license and try again.