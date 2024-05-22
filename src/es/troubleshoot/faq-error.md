---
title: Errores Frecuentes del mod
icon: info
category:
  - Errores
tag:
  - Inicio
author: Schvis
order: 2
---

## Lista de errores frecuentes

### Por qué mi Korepi desaparece?

Deshabilita el anti-virus y crea una carpeta nueva, pon korepi dentro y añádelo a exclusiones dentro del anti-virus:

![](/assets/images/docs/202312/virus.png)

Abre Korepi después de haber completado este paso.

---
### Status: No active subscription(s) found, Invalid license key

Necesitas [conseguir una nueva key](../guide/getkey.md) en `⁠★⋅micah-bot-verify⋅★`, si no puedes conseguir una key o si no te funciona la key tendrás que esperar hasta que se caduque.

`Los Sponsors pueden usar F:Reset Key para conseguir una nueva.`

---
### [DLL injection]  Process crashed, exit code 0xc000005

Abre el cmd como administrador y escribe lo siguiente:

`sfc /scannow`

Si se encontraron errores, reinicia el ordenador y comprueba si funciona.

Si al reiniciar no funciona o si no se encontró errores, prueba lo siguiente:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

Después de completar ese paso, reinicia el ordenador y comprueba si funciona, si no funciona tendrás que reinstalar windows.

---
### ImGUI: DirectX11 backend initialized successfully.

Este error ocurre por los temas instalados, borra tu carpeta de `themes`.

---
### El sistema no detecto MSVCP140.dll

Actualiza o Instala [Microsoft Visual Studio C++](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022).

Actualiza o Instala [DirectX](https://www.microsoft.com/en-us/download/details.aspx?id=35).

---
### El Archivo está corrupto! ¡Este programa ha sido manipulado!

![](/assets/images/docs/202312/virus2.png)

En este caso deberás instalar `Malware Bytes` o `Dr.Web` y hacer un escaneo completo, si se encuentra un virus, bórrelo, y reinicia el ordenador, si no funciono, deberás reinstalar windows.

---
### Timeout was reached

![](/assets/images/docs/202312/error1.png)

Reinicia tu router.

Asegúrate de que ninguna aplicación te esté bloqueando la conexión como el antivirus.

---
### DLL Injection failed

Reinstala el mod.

---
### Windows cannot access the specified device, path, or file

![](/assets/images/docs/202312/error2.png)

Prueba [esto](https://www.minitool.com/es/respaldar-datos/windows-no-tiene-acceso-al-dispositivo-especificado.html) primero.

Haz un escaneo de virus.

Si no funciona abre `cmd` como administrado y escribe `sfc /scannow`.

Si se encontraron errores, reinicia el ordenador y comprueba si funciona.

Si al reiniciar no funciona o si no se encontró errores, prueba lo siguiente:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

Después de completar ese paso, reinicia el ordenador y comprueba si funciona, si no funciona tendrás que reinstalar windows.

---
### Signature checksum failed

![](/assets/images/docs/202312/checksum.png)

Los servidores están caídos, espera a que vuelvan.

---
### Failed to create game process with Error 5

![](/assets/images/docs/202312/error3.png)

Borra `cfg.ini`.

---
### SSL connect error

![](/assets/images/docs/202312/error4.png)

Reinicia tu router y ordenador.

Usa un VPN si sigue sin funcionar.

---
### Failed to detect game version

Actualiza tu mod siguiendo [estos](../start/download.md) pasos.

---
### File ok

1. A veces tienes que abrirlo unas cuantas veces para que funcione.

2. Borra tu `cfg.json`, algo esta mal con el archivo.

3. Si eso no lo resuelve sigue [esto](https://discord.com/channels/1069057220802781265/1213319789964038184/1242491428441952256).
---
### UserAssembly.dll isn't initialized, waiting for 2 sec.

Si el mod crashea después de esta linea sigue los siguientes pasos.

Deshabilita todos los anti-virus que tengas.

Si no funciona usa `sfc /scannow` en tu `cmd` como administrador.

Si se encontraron errores y Windows no lo puede solucionar, una `DISM.exe /Online /Cleanup-Image /RestoreHealth` en el `cmd`.

Después de eso reiniciar tu ordenador y comprueba si funciona.

Si no funciona, tendrás que reinstalar windows.

### Current data does not exist or server error.

![](/assets/images/docs/202312/error.png)

Quita la pausa de tu licencia e inténtalo de nuevo.

### Cannot verify current timestamp.

![](/assets/images/docs/202402/timestamp.png)

Caso 1:
- Si estas usando una VPN, desactivado e inténtalo de nuevo.
- Si no estas utilizando VPN, prueba a utilizar un VPN.

Caso 2:
- Comprueba que tienes el tiempo del ordenador puesto en sincronización automática.

::: info Si eres de Iran puede que tengas que usar una VPN para que funcione.
:::