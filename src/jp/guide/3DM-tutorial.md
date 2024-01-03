---
title: カスタムスキンの使用方法
icon: magic-wand-sparkles
category:
  - ガイド
tag:
  - Start
  - スキン
author: Schvis
order: 4
---

::: info もしGIMIがコマンドで `echo off` と表示したら、 `Numpad 0`を押せば削除できる。また、`d3dx.ini` を編集して `hunting=` を検索し、`0`に設定することもできる。
:::
---

## Korepiでカスタムスキンを使用する方法

![](/assets/images/docs/202312/example.png)
カスタム スキンを使用するには、以下をダウンロードする必要があります。 

`3DMigoto(GIMI)`.
## <span style='color:blue;'>方法 1</span>
### ステップ 1:  `GIMI`をダウンロード

 `GIMI`公式 [Github](https://github.com/SilentNightSound/GI-Model-Importer/releases/tag/v7.0) で次の名前のファイルをダウンロードします: `3dmigoto-GIMI-for-playing-mods.zip`。

![](/assets/images/docs/202312/3dm-1.png)

### ステップ2：`GIMI`をフォルダに展開する

`GIMI`をダウンロードしたら、それをお好きなフォルダに解凍し、そのフォルダの中に `d3d11.dll`があるので、そのパスをコピーし、最後に`/d3d11.dll` を追加します。例：

`"path/d3d11.dll"`

### ステップ3：Korepiに`GIMI`を追加する

そのためには、korepiフォルダ内の`cfg.ini`に次の行を追加する必要があります。

![](/assets/images/docs/202312/3dm-2.png)

`DllPath` には、最後のステップでコピーしたパスを貼り付ける。

![](/assets/images/docs/202312/3dm-3.png)

### ステップ 4: Korepiを開く

正しい手順を踏んでいれば、コレピは毎回`GIMI` 起動するはずだ。

## <span style='color:blue;'>方法 2</span>
### ステップ 1:  `GIMI`をダウンロード

`GIMI`公式 [Github](https://github.com/SilentNightSound/GI-Model-Importer/releases/tag/v7.0) で次の名前のファイルをダウンロードします: `3dmigoto-GIMI-for-playing-mods.zip`

![](/assets/images/docs/202312/3dm-1.png)

### ステップ2：`GIMI`をフォルダに展開する

`GIMI`をダウンロードしたら、お好きなフォルダに解凍してください。そのフォルダの中に`3DMigoto Loader.exe`がありますので、まずこのファイルを実行してください。

### ステップ 4: Korepiを開く

`GIMI`を起動した後、Korepiを起動します。この後、`GIMI`はKorepiと共にロードされますので、`GIMI`と共にKorepiを起動したい場合は、毎回この手順を繰り返す必要があります。


