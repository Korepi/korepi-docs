---
title: Các Câu Hỏi Thường Gặp
icon: info
category:
  - Các Câu Hỏi Thường Gặp
tag:
  - Bắt Đầu
author: Schvis
order: 1
---

## Các Câu Hỏi Thường Gặp

### Korepi có miễn phí không?

Chính xác, Korepi có thể sử dụng miễn phí. Để có thể sử dụng, bạn cần thực hiện [Điểm Danh](../start/sign-in.md) trong 7 ngày. Bạn có thể bỏ qua quá trình điểm danh này thông qua [Tài Trợ](../start/sponsor.md). Sau đó bạn có thể tiến hành lấy key để sử dụng Korepi liên tục.

---
### Mật khẩu giải nén file .rar/.zip là gì?

...

Mật khẩu là `1234`, vui lòng đọc kỹ bài đăng ở kênh tải Korepi.

---
### Tại sao các thiết đặt trong Korepi của tôi không được lưu lại?

Lưu ý rằng bạn cần giải nén file `.rar/.zip` vào một thư mục cụ thể trước khi khởi động Korepi để có thể lưu lại các thiết đặt.

Nếu như bạn vẫn không thể lưu các thiết đặt Korepi sau khi làm theo bước ở trên, vui lòng liên hệ những người hỗ trợ ở server discord để được trợ giúp.

---
### Tôi có thể kiếm chủ đề (themes) ở đâu?

Bạn có thể kiếm chủ đề (themes) cho Korepi ở kênh `community share` trên server Discord hoặc bạn có thể tự tạo chủ đề riêng của mình trong phần cài đặt của Korepi.

![](/assets/images/docs/202312/theme-settings.png)

Mở mục `Tuỳ Chỉnh Chủ Đề` để bắt đầu tạo chủ đề riêng của bạn.

---
### Tại sao chuỗi điểm danh của tôi bị reset?

Có vẻ như bạn đã bỏ lỡ lượt điểm danh của một ngày nào đó. Lượt điểm danh được làm mới mỗi ngày. Nếu như bạn bỏ lỡ 1 ngày thì chuỗi điểm danh sẽ bị reset hoàn toàn.
Most likely you surpassed the reset time, it resets daily, if you skip 1 day it will reset entirely

::: info Thời gian làm mới lượt điểm danh vào GMT/UTC+8 00:00 mỗi ngày. Vui lòng tự chuyển đổi sang múi giờ địa phương.
:::
---

### Tôi có thể sử dụng Korepi khi game có bản cập nhật mới không?

Không, bạn cần chờ phiên bản Korepi mới được ra mắt để có thể sử dụng tiếp.

::: info Phiên bản Korepi cũ sẽ không thể hoạt động trên phiên bản game mới. Phiên bản Korepi mới sẽ được ra mắt sau khoảng 1-2 tuần.
:::
---

### Tại sao menu Korepi không xuất hiện trong game?

Vui lòng đảm bảo bạn đã tắt mọi chương trình hỗ trợ overlay (MSI Afterburner, GeForce Experience, etc.) trước khi chạy Korepi.

---
### Tôi có thể trở thành <span style='color:yellow;'>Nhà Tài Trợ</span> bằng cách nào và chi phí là bao nhiêu?

Bạn có thể trở thành [Nhà Tài Trợ](../start/sponsor.md) từ những đường link được cung cấp trong kênh `#sponsorship` trên server Discord.

Để có thể nhận được vai trò Nhà Tài Trợ (Sponsor role), bạn cần ủng hộ ít nhất 5 USD. Các khoản ủng hộ bé hơn 5 USD sẽ không được tính.

---
### Tại sao game bị crashed khi đang load?

Nếu như bạn gặp lỗi như sau:

`atidxx64.dll caused an Access Violation (0xc0000005) in module atidxx64.dll at 0033:43d1356c.`

Vui lòng cập nhật drivers và thử lại.

Nếu bạn không gặp lỗi trên, hãy thử tăng giá trị "InitializationDelayMS" trong file `cfg.ini`.

