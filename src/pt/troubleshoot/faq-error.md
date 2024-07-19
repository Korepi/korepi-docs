---
title: Erros Frequentes do mod
icon: info
category:
  - Erros
tag:
  - Inicio
author: Ryuzeen
order: 2
---

## Lista de erros comuns

### Por que o meu Korepi desaparece?

Desative o antivírus e crie uma nova pasta, coloque o Korepi dentro e adicione-o às exclusões do antivírus:

![](/assets/images/docs/202312/virus.png)

Abra o Korepi depois de concluir este passo.

---
### Status: No active subscription(s) found, Invalid license key

Você precisa [conseguir uma nova key](../guide/getkey.md) no `⁠★⋅micah-bot-verify⋅★`, se não conseguir obter uma chave ou se a chave não funcionar, terá que esperar até que ela expire.

`Os Patrocinadores podem usar F:Reset Key para conseguir uma nova.`

---
### [DLL injection]  Process crashed, exit code 0xc000005

Abra o prompt de comando como administrador e digite o seguinte:

`sfc /scannow`

Se forem encontrados erros, reinicie o computador e veja se o problema persiste.

Se não resolver após reiniciar ou se nenhum erro for encontrado, tente o seguinte:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

Após concluir este passo, reinicie o computador e verifique se o problema persiste. Se ainda não funcionar, você precisará reinstalar o Windows.

---
### ImGUI: DirectX11 backend initialized successfully.

Esse erro ocorre devido aos temas instalados. Apague a pasta `themes`.

---
### O sistema não detecta o arquivo MSVCP140.dll

Atualize ou instale o [Microsoft Visual Studio C++](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022).

Atualize ou instale o [DirectX](https://www.microsoft.com/en-us/download/details.aspx?id=35).

---
### O arquivo está corrompido! Este programa foi manipulado!

![](/assets/images/docs/202312/virus2.png)

Nesse caso, você deve instalar o `Malware Bytes` ou `Dr.Web` e fazer uma verificação completa. Se for encontrado um vírus, exclua-o e reinicie o computador. Se não resolver, será necessário reinstalar o Windows.

---
### Timeout was reached

![](/assets/images/docs/202312/error1.png)

Reinicie seu roteador.

Certifique-se de que nenhuma aplicação esteja bloqueando a conexão, como o antivírus.

---
### DLL Injection failed

Reinstale o mod.

---
### Windows cannot access the specified device, path, or file

![](/assets/images/docs/202312/error2.png)

Tente [isso](https://www.minitool.com/es/respaldar-datos/windows-no-tiene-acceso-al-dispositivo-especificado.html) primero.

Faça uma verificação de vírus.

Se não funcionar, abra o `cmd` como administrador e digite `sfc /scannow`.

Se foram encontrados erros, reinicie o computador e verifique se funciona.

Se, ao reiniciar, não funcionar ou se não foram encontrados erros, tente o seguinte:

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

Após concluir essa etapa, reinicie o computador e verifique se funciona. Se não funcionar, será necessário reinstalar o Windows.

---
### Signature checksum failed

![](/assets/images/docs/202312/checksum.png)

Os servidores estão fora do ar, aguarde até que voltem.

---
### Failed to create game process with Error 5

![](/assets/images/docs/202312/error3.png)

Apague `cfg.ini`.

---
### SSL connect error

![](/assets/images/docs/202312/error4.png)

Reinicie seu roteador e computador.

Use uma VPN se ainda não funcionar.

---
### Failed to detect game version

Atualize seu mod seguindo [estos](../start/download.md) passos.

---
### File ok

Apague seu  `cfg.json`, algo está errado com o arquivo.

---
### UserAssembly.dll isn't initialized, waiting for 2 sec.

Se o mod travar após esta linha, siga as etapas a seguir.

Desative todos os antivírus que você possui.

Se não funcionar, use `sfc /scannow` no seu `cmd` como administrador.

Se foram encontrados erros e o Windows não puder corrigi-los, use `DISM.exe /Online /Cleanup-Image /RestoreHealth` no `cmd`.

Depois disso, reinicie seu computador e verifique se funciona.

Se não funcionar, será necessário reinstalar o Windows.

---
### Dados atuais não existem ou erro de servidor.

![](/assets/images/docs/202312/error.png)

Despausa sua licença e tente novamente.

---
### Não é possível verificar o carimbo de data/hora atual.

![](/assets/images/docs/202402/timestamp.png)

Caso 1:
- Você pode receber este erro ao usar uma VPN, por favor desative-a e tente novamente.

Caso 2:
- Verifique se o horário do seu PC está configurado para sincronização automática.

::: info Se você é do Irã, talvez precise usar uma VPN em vez disso.
:::

---
### Unable to open file to write public key:

- This error might happen if you got your game installed in other drive other than your main drive `C:/` , to solve it you can reinstall the game to the main drive and run Korepi again.

---
### Failed to get response from https://md5c...

- This error might happen if your conection is not stable or your conection to the website its blocked, please copy the link and check if you can access it. If you can't access the website, using a VPN might help.

---
### Received code is not 200 from https://md5c...

- This Error will appear if your key is paused, please head to `★⋅micah-bot-verify⋅★` and click on `Unpause Key` and type `Yes` on the pop-up.