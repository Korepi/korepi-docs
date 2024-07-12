---
title: วิธีใช้สกินแบบกำหนดเอง
icon: magic-wand-sparkles
category:
  - Guide
tag:
  - Start
  - Skins
author: Schvis , ShikiYuri 
order: 4
---

::: info หาก GIMI แสดง 'echo off' บน cmd, คุณสามารถกด `Numpad 0` เพื่อลบออกได้, และคุณยังสามารถปิดได้โดยการแก้ไข `d3dx.ini`และค้นหา `hunting=` และตั้งค่าเป็น `0`
:::
---

## วิธีใช้สกินแบบกำหนดเองใน Korepi

![](/assets/images/docs/202312/example.png)
ในการที่จะใช้สกินแบบกำหนดเอง เราจะต้องดาวน์โหลด:

`3DMigoto(GIMI)`.
## <span style='color:blue;'>วิธีที่ 1</span>
### ขั้นตอนที่ 1: ดาวน์โหลด `GIMI`

ดาวน์โหลด `GIMI` ใน [Github](https://github.com/SilentNightSound/GI-Model-Importer/releases/tag/v7.0) และดาวน์โหลดไฟล์ที่ชื่อ: `3dmigoto-GIMI-for-playing-mods.zip`

![](/assets/images/docs/202312/3dm-1.png)

### ขั้นตอนที่ 2: แตกไฟล์ `GIMI` ลงในโฟลเดอร์

หลังจากดาวน์โหลด `GIMI` เราจะต้องแยกมันลงในโฟลเดอร์ที่คุณเลือก ภายในโฟลเดอร์นั้นคุณจะพบ `d3d11.dll` เราจะคัดลอกpathและเพิ่ม `/d3d11.dll` ที่ส่วนท้าย สำหรับตัวอย่าง:

`"path/d3d11.dll"`

### ขั้นตอนที่ 3: เพิ่ม `GIMI` ลงใน Korepi

ในการดำเนินการนี้ เราจะต้องเพิ่มบรรทัดถัดไปใน `cfg.ini` ภายในโฟลเดอร์ korepi

![](/assets/images/docs/202312/3dm-2.png)

ใน `DllPath` เราจะวางpathที่เราคัดลอกไว้ในขั้นตอนสุดท้าย

![](/assets/images/docs/202312/3dm-3.png)

### ขั้นตอนที่ 4: เปิด Korepi

หากคุณทำตามขั้นตอนถูกต้อง Korepi ควรเปิดด้วย `GIMI` ทุกครั้ง

## <span style='color:blue;'>วิธีที่ 2</span>
### ขั้นตอนที่ 1: ดาวน์โหลด `GIMI`

ดาวน์โหลด `GIMI` ใน [Github](https://github.com/SilentNightSound/GI-Model-Importer/releases/tag/v7.0) และดาวน์โหลดไฟล์ที่ชื่อ: `3dmigoto-GIMI-for-playing-mods.zip`

![](/assets/images/docs/202312/3dm-1.png)

### ขั้นตอนที่ 2: แตกไฟล์ `GIMI` ลงในโฟลเดอร์

หลังจากดาวน์โหลด `GIMI` แล้วแตกไฟล์ลงในโฟลเดอร์ที่คุณเลือก ภายในโฟลเดอร์นั้นคุณจะพบ `3DMigoto Loader.exe` เราจะRunไฟล์นี้ก่อน

### ขั้นตอนที่ 4: เปิด Korepi

หลังจากRun `GIMI` แล้วเราจะRun `Korepi` ต่อ หลังจากนั้น `GIMI` จะถูกโหลดด้วย Korepi และคุณจะต้องทำซ้ำขั้นตอนเหล่านี้ทุกครั้งที่คุณต้องการเปิดใช้งาน Korepi ด้วย `GIMI`



