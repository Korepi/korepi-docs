---
title: Как использовать собственные скины
icon: magic-wand-sparkles
category:
  - Руководство
tag:
  - Начало
  - Скины
author: "Schvis"
order: 4
---

::: Информация: Если в Korepi отображается `echo off` в cmd, вы можете просто нажать `Numpad 0`, чтобы удалить его. Также вы можете отредактировать файл `d3dx.ini`, найти строку `hunting=` и установить значение `0` :::
---

## Как использовать собственные скины в Korepi

![](/assets/images/docs/202312/example.png)
Чтобы использовать собственные скины в Korepi, вам нужно скачать: `3DMigoto (GIMI)`.

## <span style='color:blue;'>Метод 1</span>
### Шаг 1: Скачайте `GIMI`

Скачайте `GIMI` с [официальной страницы Github](https://github.com/SilentNightSound/GI-Model-Importer/releases/tag/v7.0) и получите файл с именем: `3dmigoto-GIMI-for-playing-mods.zip`.

![](/assets/images/docs/202312/3dm-1.png)

### Шаг 2: Извлеките `GIMI` в папку

После загрузки `GIMI` извлеките его в любую папку на ваш выбор. Внутри этой папки вы найдете файл `d3d11.dll`. Скопируйте путь и добавьте `/d3d11.dll` в конец, например: `"путь/d3d11.dll"`

### Шаг 3: Добавьте `GIMI` в Korepi

Для этого добавьте следующие строки в файл `cfg.ini`, который находится в папке Korepi.

![](/assets/images/docs/202312/3dm-2.png)

В `DllPath` вставьте путь, скопированный на предыдущем шаге.

![](/assets/images/docs/202312/3dm-3.png)

### Шаг 4: Откройте Korepi

Если вы следовали указаниям, Korepi будет запускаться с `GIMI` каждый раз.

## <span style='color:blue;'>Метод 2</span>
### Шаг 1: Скачайте `GIMI`

Скачайте `GIMI` с [официальной страницы Github](https://github.com/SilentNightSound/GI-Model-Importer/releases/tag/v7.0) и получите файл с именем: `3dmigoto-GIMI-for-playing-mods.zip`.

![](/assets/images/docs/202312/3dm-1.png)

### Шаг 2: Извлеките `GIMI` в папку

После загрузки `GIMI` извлеките его в любую папку по вашему выбору. Внутри этой папки вы найдете файл `3DMigoto Loader.exe`. Сначала запустите этот файл.

### Шаг 4: Откройте Korepi

После запуска `GIMI` откройте Korepi; `GIMI` будет загружен с Korepi. После этого вам нужно будет повторять эти шаги каждый раз, когда вы хотите запустить Korepi с `GIMI`.
