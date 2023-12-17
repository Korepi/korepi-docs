---
title: Errores Frecuentes del mod
icon: info
category:
  - Errores
tag:
  - Inicio
author: Schvis
order: 1
---

## <span style='color:white;'>Lista de errores frecuentes</span>

## <span style='color:white;'>Por qué mi Korepi desaparece?</span>

Deshabilita el anti-virus y crea una carpeta nueva, pon korepi dentro y añadelo a exclusiones dentro del anti-virus:

![](/assets/images/docs/202312/virus.png)

Abre Korepi depuès de haber completado este paso.

## <span style='color:white;'>Status: No active subscribtion(s) found, Invalid license key</span>

Necesitas [conseguir una nueva key](../guide/getkey.md) en `⁠★⋅micah-bot-verify⋅★`, si no puedes conseguir una key o si no te funciona la key tendras que esperar hasta que se caduque.

`Los Sponsors pueden usar F:Reset Key para conseguir una nueva.`

## <span style='color:white;'>[DLL injection]  Process crashed, exit code 0xc000005</span>

Abre el cmd como administrador y escribe lo siguiente:

`sfc /scannow`

Si se encontraron errores, reinicia el ordenador y comprueba si funciona.

Si al reiniciar no funciona o si no se encontró errores, prueba lo siguiente:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

Después de completar ese paso, reinicia el ordenador y comprueba si funciona, si no funciona tendras que reisntalar windows.

## <span style='color:white;'>ImGUI: DirectX11 backend initialized successfully.</span>

Este error ocurre por los temas instalados, borra tu carpeta de `themes`.

## <span style='color:white;'>El sistema no detecto MSVCP140.dll</span>

Actualiza o Instala [Microsoft Visual Studio C++](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022).

Actualiza o Instala [DirectX](https://www.microsoft.com/en-us/download/details.aspx?id=35).

## <span style='color:white;'>El Archivo está corrupto! ¡Este programa ha sido manipulado!</span>

![](/assets/images/docs/202312/virus2.png)

En este caso deberas instalar `Malware Bytes` o `Dr.Web` y hacer un escaneo completo, si se encuentra un virus, borralo, y reinicia el ordenador, si no funciono, deberas reinstalar windows.

## <span style='color:white;'>Timeout was reached</span>

![](/assets/images/docs/202312/error1.png)

Reinicia tu router.

Asegúrate de que ninguna aplicación te esté bloqueando la conexión como el antivirus.

## <span style='color:white;'>DLL Injection failed</span>

Reinstala el mod.

## <span style='color:white;'>Windows cannot access the specified device, path, or file</span>

![](/assets/images/docs/202312/error2.png)

Prueba [esto](https://www.minitool.com/es/respaldar-datos/windows-no-tiene-acceso-al-dispositivo-especificado.html) primero.

Haz un escaneo de virus.

Si no funciona abre `cmd` como administrado y escribe `sfc /scannow`.

Si se encontraron errores, reinicia el ordenador y comprueba si funciona.

Si al reiniciar no funciona o si no se encontró errores, prueba lo siguiente:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

Después de completar ese paso, reinicia el ordenador y comprueba si funciona, si no funciona tendras que reisntalar windows.

## <span style='color:white;'>Signature checksum failed</span>

![](/assets/images/docs/202312/checksum.png)

Los servidores están caídos, espera a que vuelvan.

## <span style='color:white;'>Failed to create game process with Error 5</span>

![](/assets/images/docs/202312/error3.png)

Borra `cfg.ini`.

## <span style='color:white;'>SSL connect error</span>

![](/assets/images/docs/202312/error4.png)

Reinicia tu router y ordenador.

Usa un VPN si sigue sin funcionar.

## <span style='color:white;'>Failed to detect game version</span>

Actualiza tu mod siguiendo [estos](../start/download.md) pasos.

## <span style='color:white;'>File ok</span>

Borra tu `cfg.json`, algo esta mal con el archivo.

## <span style='color:white;'>UserAssembly.dll isn't initialized, waiting for 2 sec.</span>

Si el mod crashea después de esta linea sigue los siguientes pasos.

Deshabilita todos los anti-virus que tengas.

Si no funciona usa `sfc /scannow` en tu `cmd` como administrador.

Si se encontraron errores y Windows no lo puede solucionar, una `DISM.exe /Online /Cleanup-Image /RestoreHealth` en el `cmd`.

Después de eso reiniciar tu ordenador y comprueba si funciona.

Si no funciona, tendras que reinstalar windows.
