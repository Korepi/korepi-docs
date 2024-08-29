---
title: Các Lỗi Thường Gặp
icon: info
category:
  - Khắc Phục Lỗi
tag:
  - Bắt Đầu
author: Schvis
order: 2
---

## Danh sách các lỗi thường gặp

### Tại sao Korepi đột nhiên biến mất?

Hãy đảm bảo rằng bạn đã tắt trình diệt virus, sau đó tạo một folder mới và thêm nó vào danh sách loại trừ của trình diệt virus.

![](/assets/images/docs/202312/virus.png)

Giải nén Korepi vào thư mục được loại trừ đó và chạy lại.

---
### Status: No active subscription(s) found, Invalid license key

Bạn cần [lấy key mới](../guide/getkey.md) từ `⁠🔐｜verification`, nếu như bạn không thể lấy key mới hoặc key không hoạt động, bạn cần chờ cho tới khi key hiện tại hết hạn.

`Nhà Tài Trợ có thể sử dụng F:Reset Key`

### [DLL injection] Process crashed, exit code 0xc000005

Mở `cmd` dưới quyền quản trị viên (run as admin) và chạy dòng lệnh sau:

`sfc /scannow`

Nếu như có lỗi nào được tìm thấy, khởi động lại máy tính và thử lại.
Nếu như việc khởi động lại máy không giúp ích được gì hoặc không có lỗi nào được tìm thấy, chạy dòng lệnh sau:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

Sau khi hoàn tất kiểm tra, khởi động lại máy và thử lại.

Nếu vẫn không được, bạn nên cài lại Windows.

---
### ImGUI: DirectX11 backend initialized successfully.

Lỗi này xuất hiện do chủ đề (theme) được cài. Hãy xoá thư mục `themes`.

---
### The system did not detect MSVCP140.dll

Cập nhật [Microsoft Visual Studio C++](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022)

Cập nhật [DirectX](https://www.microsoft.com/en-us/download/details.aspx?id=35)

---
### File corrupted! This program has been manipulated and maybe it's infected.

![](/assets/images/docs/202312/virus2.png)

Trong trường hợp này, bạn có thể sử dụng `Malware Bytes` hoặc `Dr.Web` để quét toàn bộ máy. Nếu phát hiện ra virus nào, hãy loại bỏ chúng và khởi động lại máy và thử lại. Nếu vẫn không được, hãy cài lại Windows.

---
### Timeout was reached

![](/assets/images/docs/202312/error1.png)

Khởi động lại router.

Chương trình diệt virus có thể đang chặn kết nối. Hãy kiểm tra lại thiết lập tường lửa của trình diệt virus.

Sử dụng VPN và thử lại.

Tắt toàn bộ ứng dụng có tác động tới tường lửa. Nếu như vẫn không được, có vẻ đường truyền mạng của bạn đang có vấn đề.

---
### DLL Injection failed

Xoá toàn bộ file bên trong thư mục colorpicker và tải lại.

---
### Windows cannot access the specified device, path, or file

![](/assets/images/docs/202312/error2.png)

Mở [TRANG NÀY](https://support.microsoft.com/en-us/topic/-windows-cannot-access-the-specified-device-path-or-file-error-when-you-try-to-install-update-or-start-a-program-or-file-46361133-47ed-6967-c13e-e75d3cc29657) và làm theo hướng dẫn bên trong.

Tiếp đến, tải trình duyệt virus như `Dr.Web` hoặc `Malware bytes` và thực hiện quét toàn bộ máy!

Nếu vẫn không được, hãy mở cmd dưới quyền quản trị viên (run as admin) và chạy lệnh `sfc /scannow`

Sau đó, nếu như có lỗi nào được tìm thấy, khởi động lại máy và thử lại.

Nếu như việc khởi động lại máy không giúp ích được gì hoặc không có lỗi nào được tìm thấy, chạy dòng lệnh sau:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

Sau khi hoàn tất kiểm tra, khởi động lại máy và thử lại.

Nếu vẫn không được, bạn nên cài lại Windows.

---
### Signature checksum failed

![](/assets/images/docs/202312/checksum.png)

Server Korepi đang bị tắt hoặc bảo trì, vui lòng chờ cho tới khi server được bật trở lại.

---
### Failed to create game process with Error 5

![](/assets/images/docs/202312/error3.png)

Xoá file `cfg.ini`.

---
### SSL connect error

![](/assets/images/docs/202312/error4.png)

Khởi động lại máy tính và router.

Nếu vẫn không được, hãy thử dùng VPN.

---
### Failed to detect game version

Cập nhật Korepi theo hướng dẫn [TẠI ĐÂY](../start/download.md)

---
### File ok

Xoá file cfg.json.

---
### UserAssembly.dll isn't initialized, waiting for 2 sec.

Nếu như Korepi crash sau khi xuất hiện dòng này, hãy thử các bước sau:

Tắt toàn bộ trình diệt virus trong máy.

Nếu vẫn lỗi, chạy lệnh `sfc /scannow` trên cmd với quyền quản trị viên (run as admin).

Nếu như có lỗi được phát hiện nhưng Windows không thể sửa chúng, chạy lệnh `DISM.exe /Online /Cleanup-Image /RestoreHealth`. 

Sau đó khởi động lại máy và thử chạy colorpicker lần nữa.

Nếu như lỗi vẫn tiếp diễn, bạn nên cài lại Windows.

---
### Current data does not exist or server error.

![](/assets/images/docs/202312/error.png)

Hãy ngưng tạm dừng key (unpause) rồi thử lại.

---
### Cannot verify current timestamp.

![](/assets/images/docs/202402/timestamp.png)

Trường hợp 1:
- Bạn có thể gặp phải lỗi này khi đang sử dụng VPN. Hãy thử tắt VPN rồi bật Korepi lên lại.

Trường hợp 2:
- Kiểm tra cài đặt thời gian trên máy của bạn và đảm bảo rằng đồng bộ tự động đã được bật.

::: info Đối với người dùng tại Iran, bạn cần bật VPN để có thể sử dụng Korepi.
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
