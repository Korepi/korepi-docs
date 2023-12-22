---
title: Как использовать собственные скины
icon: magic-wand-sparkles
category:
  - Руководство
tag:
  - Начало
  - Скины
author: Schvis
order: 4
---

::: info Если в Korepi отображается `echo off` в cmd, вы можете просто нажать `Numpad 0`, чтобы удалить его, также вы можете отредактировать `d3dx.ini` и найти `hunting=` и установить `0`.
:::
---

## Как использовать собственные скины в Korepi

![](/assets/images/docs/202312/example.png)
Чтобы использовать собственные скины в Korepi, нам нужно скачать:

`3DMigoto (GIMI)`.

## <span style='color:blue;'>Метод 1</span>
### Шаг 1: Загрузите `GIMI`

Скачайте `GIMI` на официальной странице [Github](https://github.com/SilentNightSound/GI-Model-Importer/releases/tag/v7.0) и скачайте файл с именем: `3dmigoto-GIMI-for-playing-mods.zip`.

![](/assets/images/docs/202312/3dm-1.png)

### Шаг 2: Извлеките `GIMI` в папку

После скачивания `GIMI` нам нужно извлечь его в любую папку по вашему выбору. Внутри этой папки вы найдете файл `d3d11.dll`. Скопируйте путь и добавьте `/d3d11.dll` в конец, например:

`"путь/d3d11.dll"`

### Шаг 3: Добавьте `GIMI` в Korepi

Для этого мы должны добавить следующие строки в файл `cfg.ini`, который находится в папке Korepi.

![](/assets/images/docs/202312/3dm-2.png)

В `DllPath` мы вставим путь, который мы скопировали на последнем шаге.

![](/assets/images/docs/202312/3dm-3.png)

### Шаг 4: Откройте Korepi

Если вы следовали указаниям, Korepi должен запускаться с `GIMI` каждый раз.

## <span style='color:blue;'>Метод 2</span>
### Шаг 1: Загрузите `GIMI`

Скачайте `GIMI` на официальной странице [Github](https://github.com/SilentNightSound/GI-Model-Importer/releases/tag/v7.0) и скачайте файл с именем: `3dmigoto-GIMI-for-playing-mods.zip`.

![](/assets/images/docs/202312/3dm-1.png)

### Шаг 2: Извлеките `GIMI` в папку

После скачивания `GIMI` нам нужно извлечь его в любую папку по вашему выбору. Внутри этой папки вы найдете файл `3DMigoto Loader.exe`. Сначала мы запустим этот файл.

### Шаг 4: Откройте Korepi

После запуска `GIMI` мы запускаем Korepi, `GIMI` будет загружен с Korepi. После этого вам нужно будет повторить эти шаги каждый раз, когда вы хотите запустить Korepi с `GIMI`.
