---
title: How to use custom skins
icon: circle-info
category:
  - Guide
tag:
  - Start
  - Skins
author: Schvis
order: 4
---

## Note:

### If GIMI shows `echo off` on the cmd, you can just press `Numpad 0` to remove it,

### you can also edit `d3dx.ini` and search for `hunting=` and set to `0`. 

## How to use custom Skins in Korepi

![](/assets/images/doc/example.png)
In order to use custom skins in we will need to download: 

`3DMigoto(GIMI)`.
## Method 
### Step 1: Download `GIMI`

Download `GIMI` in their oficial [Github](https://github.com/SilentNightSound/GI-Model-Importer/releases/tag/v7.0) and download the file named: `3dmigoto-GIMI-for-playing-mods.zip`.

![](/assets/images/doc/3dm-1.png)

### Step 2: Extract `GIMI` into a folder

After downloading `GIMI`, we will need to extract it into any folder of your choice, inside that folder you will find `d3d11.dll`, we will copy the path and add `/d3d11.dll` to the end, for example:

`"path/d3d11.dll"`

### Step 3: Add `GIMI` to Korepi

To do this we will need to add the next lines in `cfg.ini` inside korepi folder.

![](/assets/images/doc/3dm-2.png)

On `DllPath` we will paste the path we copied in the last step.

![](/assets/images/doc/3dm-3.png)

### Step 4: Open Korepi

If you followed the steps right, Korepi should launch with `GIMI` every time.

## Method 2
### Step 1: Download `GIMI`

Download `GIMI` in their oficial [Github](https://github.com/SilentNightSound/GI-Model-Importer/releases/tag/v7.0) and download the file named: `3dmigoto-GIMI-for-playing-mods.zip`.

![](/assets/images/doc/3dm-1.png)

### Step 2: Extract `GIMI` into a folder

After downloading `GIMI`, we will need to extract it into any folder of your choice, inside that folder you will find `3DMigoto Loader.exe`, we will run this file first.

### Step 4: Open Korepi

After running `GIMI`, we will run Korepi, `GIMI` will be loaded with Korepi after this, you will need to repeat these steps every time you want to launch Korepi with `GIMI`.



