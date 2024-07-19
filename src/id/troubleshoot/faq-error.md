---
title: Masalah Yang Sering Terjadi
icon: server
category:
  - Solusi
tag:
  - Mulai
author: Schvis, Chloe, NatsumeAoii
order: 2
---

## Daftar Masalah yang Sering Terjadi

### Kenapa Korepi Saya Menghilang?

Pastikan Anda telah menonaktifkan anti-virus, buat folder baru dan tambahkan folder tersebut ke daftar Pengecualian.

![Anti-Virus](/assets/images/docs/202312/virus.png)

Ekstrak Korepi di dalam folder yang sudah dikecualikan dan jalankan kembali.

---
### Status: No active subscription(s) found, Invalid license key

Anda harus [mengambil Key baru](../guide/getkey.md) di `⁠★⋅micah-bot-verify⋅★`. Jika Anda tidak dapat mengambil Key atau Key tidak berfungsi, maka Anda harus menunggu hingga masa berlaku Key berakhir.

`Sponsors dapat menggunakan F:Reset Key sebagai alternatif`

---
### [DLL injection]  Process crashed, exit code 0xc000005

Buka `cmd` sebagai administrator dan ketik perintah berikut:

`sfc /scannow`

Jika ditemukan masalah, restart komputer dan periksa kembali.
Jika masalah tidak ditemukan atau restart tidak membantu, ketik perintah ini:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

Setelah selesai, restart komputer dan periksa lagi.

Jika masih tidak berhasil, pertimbangkan untuk menginstal ulang Windows.

---
### ImGUI: DirectX11 backend initialized successfully.

Masalah ini terjadi karena tema. Bersihkan folder `themes`.

---
### The system did not detect MSVCP140.dll

Perbarui [Microsoft Visual Studio C++](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022)

Perbarui [DirectX](https://www.microsoft.com/en-us/download/details.aspx?id=35)

---
### File corrupted! This program has been manipulated and maybe it's infected.

![](/assets/images/docs/202312/virus2.png)

Gunakan `Malware Bytes` atau `Dr.Web` untuk melakukan scan penuh. Jika ditemukan virus, bersihkan, restart komputer, dan coba lagi. Jika tidak berhasil, menginstal ulang Windows mungkin adalah solusi terbaik.

---
### Timeout was reached

![](/assets/images/docs/202312/error1.png)

Restart router Anda.
Tutup semua aplikasi yang mempengaruhi firewall. Jika masih bermasalah, Anda mungkin memiliki masalah dengan koneksi internet.
Anti-virus mungkin memblokir jaringan, pastikan untuk menonaktifkannya dari Task Manager.

---
### DLL Injection failed

Hapus folder colorpicker dan unduh ulang colorpicker.

---
### Windows cannot access the specified device, path, or file

![](/assets/images/docs/202312/error2.png)

Pertama pergi ke [SINI](https://support.microsoft.com/en-us/topic/-windows-cannot-access-the-specified-device-path-or-file-error-when-you-try-to-install-update-or-start-a-program-or-file-46361133-47ed-6967-c13e-e75d3cc29657) dan ikuti langkah-langkah pada website tersebut.

Lalu setelah pergi ke website, unduh anti-virus seperti `Dr.Web` atau `Malware bytes` dan jalankan pemeriksaan penuh sistem!
Jika tidak berhasil, buka cmd sebagai administrator dan ketik `sfc /scannow`

Setelah itu, jika masalah ditemukan, ulang nyalakan komputer dan periksa.

Jika tidak ada masalah atau restart tidak membantu, ketik:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

Setelah selesai melakukan pemeriksaan, ulang nyalakan komputer dan periksa.

Jika tidak berhasil, pasang ulang windows.

---
### Signature checksum failed

![](/assets/images/docs/202312/checksum.png)

Server sedang tidak aktif atau ditutup, tunggu hingga server aktif kembali.

---
### Failed to create game process with Error 5

![](/assets/images/docs/202312/error3.png)

Hapus `cfg.ini`.

---
### SSL connect error

![](/assets/images/docs/202312/error4.png)

Ulang nyalakan komputer, ulang nyalakan router.

Jika tidak berhasil, coba menggunakan VPN.

---
### Failed to detect game version

Perbarui aplikasimu, ikuti langkah-langkah [di sini](../start/download.md)

---
### File ok

1. Terkadang kamu harus membuka launcher beberapa kali agar bisa digunakan.

2. Hapus cfg.sjon kamu, mungkin ada yang salah dengan filenya.

3. Jika itu masih tidak memperbaiki masalahnya ikuti [ini](https://discord.com/channels/1069057220802781265/1213319789964038184/1242491428441952256).

---
### UserAssembly.dll isn't initialized, waiting for 2 sec.

Jika aplikasi kamu crash setelah baris ini, coba ikuti langkah berikut:

Matikan semua antivirus di komputermu.

Jika itu tidak membantu, coba gunakan perintah `sfc /scannow` di Command Prompt sebagai administrator.

JIka ditemukan masalah setelah mengecek dan Windows tidak bisa memperbaikinya, gunakan perintah `DISM.exe /Online /Cleanup-Image /RestoreHealth`.

Setelah mengecek, restart komputer kamu dan coba jalankan colorpicker lagi.

Jika masalah terus berlanjut, kamu bisa coba reset atau install ulang Windows.

---
### Current data does not exist or server error.

![](/assets/images/docs/202312/error.png)

Unpause lisensi kamu dan coba lagi.

---
### Cannot verify current timestamp.

![](/assets/images/docs/202402/timestamp.png)

Kasus 1:
- Kamu bisa mendapatkan error ini ketika menggunakan VPN, tolong matikan dan coba lagi.

Kasus 2:
- Cek waktu jam PC kamu sudah diatur sinkron otomatis.
---

### Unable to open file to write public key:

- This error might happen if you got your game installed in other drive other than your main drive `C:/` , to solve it you can reinstall the game to the main drive and run Korepi again.

---
### Failed to get response from https://md5c...

- This error might happen if your conection is not stable or your conection to the website its blocked, please copy the link and check if you can access it. If you can't access the website, using a VPN might help.

---
### Received code is not 200 from https://md5c...

- This Error will appear if your key is paused, please head to `★⋅micah-bot-verify⋅★` and click on `Unpause Key` and type `Yes` on the pop-up.