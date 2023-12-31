---
title: Masalah Yang Sering Terjadi.
icon: server
category:
  - Solusi
tag:
  - Mulai
author: Schvis, Chloe
order: 2
---

## Daftar Masalah yang Sering Terjadi

### Kenapa Korepi Saya Menghilang?

Pastikan Anda telah non-aktifkan anti-virus, buat folder baru dan tambahkan folder pada Pengecualian.

![](/assets/images/docs/202312/virus.png)

Ekstrak Korepi di dalam folder yang sudah dikecualikan dan jalankan lagi.

---
### Status: No active subscription(s) found, Invalid license key

Anda harus [Ambil Key baru](../guide/getkey.md) di `⁠★⋅micah-bot-verify⋅★`, jika Anda tidak dapat mengambil Key atau Key tidak berfungsi, maka Anda harus menunggu hingga masa berlaku Key berakhir.

`Sponsors dapat menggunakan F:Reset Key sebagai alternatif`

---
### [DLL injection]  Process crashed, exit code 0xc000005

buka `cmd` sebagai administrator dan ketik perintah berikut:

`sfc /scannow`

Setelah itu, Jika ditemukan masalah, ulang nyalakan komputer dan periksa.
Jika setelah ulang nyalakan tidak membantu atau masalah tidak ditemukan, ketiklah perintah ini:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

Setelah selesai memeriksanya, ulang nyalakan komputer dan periksa.

Jika tidak berhasil, pasang ulang windows.

---
### ImGUI: DirectX11 backend initialized successfully.

Masalah terjadi dikarenakan tema, Bersihkan folder `themes`.

---
### The system did not detect MSVCP140.dll

Perbarui [Microsoft Visual Studio C++](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022)

Perbarui [DirectX](https://www.microsoft.com/en-us/download/details.aspx?id=35)

---
### File corrupted! This program has been manipulated and maybe it's infected.

![](/assets/images/docs/202312/virus2.png)

Dalam kasus ini, Anda dapat mencoba menggunakan `Malware Bytes` atau `Dr.Web` untuk melakukan pemeriksaan penuh, Jika virus ditemukan, hilangkan virus tersebut, Ulang buka komputer dan coba lagi. Jika tidak berhasil, ulang pasang windows adalah cara termudah untuk mengatasinya.

---
### Timeout was reached

![](/assets/images/docs/202312/error1.png)

Ulang nyalakan router Anda.
Tutup semua aplikasi yang memperngaruhi firewall. Jika keduanya tidak berhasil, maka Anda memiliki masalah dengan jaringan internet.
Anti-virus berkemungkinan memblokir jaringan, pastikan tidak aktif pada menu Task Manager.

---
### DLL Injection failed

Hapus folder colorpicker dan unduh colorpicker lagi.

---
### Windows cannot access the specified device, path, or file

![](/assets/images/docs/202312/error2.png)

Pertama pergi ke [SINI](https://support.microsoft.com/en-us/topic/-windows-cannot-access-the-specified-device-path-or-file-error-when-you-try-to-install-update-or-start-a-program-or-file-46361133-47ed-6967-c13e-e75d3cc29657) dan ikuti langkah-langkah pada website tersebut.

Lalu setelah pergi ke website, unduh anti-virus seperti `Dr.Web` atau `Malware bytes` dan jalankan pemeriksaan penuh sistem!
Jika tidak berhasil, buka cmd sebagai administrator dan ketik `sfc /scannow`

Setelah itu, jika masalah ditemukan, ulang nyalakan komputer dan periksa.

Jika setelah ulang nyalakan tidak membantu atau masalah tidak ditemukan, ketik perintah ini:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

Setelah selesai melakukan pemeriksaan, ulang nyalakan komputer dan periksa.

Jika tidak berhasil, pasang ulang windows.

---
### Signature checksum failed

![](/assets/images/docs/202312/checksum.png)

Server sedang tidak aktif atau ditutup, tunggu server untuk kembali aktif.

---
### Failed to create game process with Error 5

![](/assets/images/docs/202312/error3.png)

Hapus `cfg.ini`.

---
### SSL connect error

![](/assets/images/docs/202312/error4.png)

Ulang nyalakan komputer, ulang nyalakan router.

Jika tidak berhasil, coba menggunakan VPN.

