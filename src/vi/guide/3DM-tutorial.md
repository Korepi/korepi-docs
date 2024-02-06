---
title: Hướng Dẫn Sử Dụng Trang Phục Tuỳ Chỉnh
icon: magic-wand-sparkles
category:
  - Hướng Dẫn
tag:
  - Bắt Đầu
  - Trang Phục
author: Schvis
order: 4
---

::: info Nếu GIMI hiển thị `echo off` trong cmd, bạn có thể nhấn `Phím 0` ở bàn phím số để xoá nó đi. Bạn cũng có thể mở file `d3dx.ini` rồi tìm `hunting=` và đặt giá trị bằng `0`.
:::
---

## Hướng Dẫn Sử Dụng Trang Phục Tuỳ Chỉnh Trong Korepi

![](/assets/images/docs/202312/example.png)
Để có thể sử dụng trang phục tuỳ chỉnh bạn cần tải:

`3DMigoto(GIMI)`.
## <span style='color:blue;'>Cách 1</span>
### Bước 1: Tải `GIMI`

Tải `GIMI` từ [Github chính thức](https://github.com/SilentNightSound/GI-Model-Importer/releases/tag/v7.0). Hãy tải file có tên như sau: `3dmigoto-GIMI-for-playing-mods.zip`.

![](/assets/images/docs/202312/3dm-1.png)

### Bước 2: Giải nén `GIMI`

Sau khi tải `GIMI`, bạn cần giải nén nó vào bất kỳ thư mục nào tuỳ thích. Bên trong thư mục đó bạn sẽ thấy file có tên `d3d11.dll`. Hãy copy đường dẫn tới thư mục và thêm `/d3d11.dll` vào cuối đường dẫn. Ví dụ:

`"path/d3d11.dll"`

### Bước 3: Thêm `GIMI` Vào Korepi

Để làm được điều này bạn cần thêm những dòng sau vào file `cfg.ini` nằm bên trong thư mục chứa Korepi:

![](/assets/images/docs/202312/3dm-2.png)

Tại `DllPath` hãy dán đường dẫn mà bạn đã copy ở bước trước đó.

![](/assets/images/docs/202312/3dm-3.png)

### Bước 4: Mở Korepi

Nếu như bạn thực hiện đúng mọi bước như hướng dẫn, Korepi sẽ khởi động cùng `GIMI`.

## <span style='color:blue;'>Cách 2</span>
### Bước 1: Tải `GIMI`

Tải `GIMI` từ [Github chính thức](https://github.com/SilentNightSound/GI-Model-Importer/releases/tag/v7.0). Hãy tải file có tên như sau: `3dmigoto-GIMI-for-playing-mods.zip`.

![](/assets/images/docs/202312/3dm-1.png)

### Bước 2: Giải Nén `GIMI`

Sau khi tải `GIMI`, bạn cần giải nén nó vào bất kỳ thư mục nào tuỳ thích. Bên trong thư mục đó bạn sẽ thấy file có tên `3DMigoto Loader.exe`, hãy mở file này lên.

### Bước 3: Mở Korepi

Sau khi mở `GIMI`, tiếp tục mở Korepi lên. Lúc này `GIMI` sẽ được load cùng Korepi. Bạn cần thực hiện tất cả những bước trên mỗi lần bạn muốn khởi động Korepi cùng với `GIMI`.



