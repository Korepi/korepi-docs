---
title: 常见错误列表
icon: info
category:
  - Guide
tag:
  - Start
author: Micah
order: 2
---
## 常见错误列表

### 1.为什么我的Korepi消失了？

确保您的防病毒软件已停用，创建一个新文件夹并将其添加到排除列表中。

![](/assets/images/docs/202312/virus.png)

在排除列表中解压Korepi并重新运行。

---
### 2.状态：未发现活跃订阅，无效的许可密钥

您需要从“⁠🔐｜verification”处[获取一个新密钥](../guide/key-use.md)，如果无法获取密钥或密钥无效，您必须等待密钥到期。

`赞助商可以使用 F:Reset Key 代替`

---
### 3.[DLL注入] 进程崩溃，退出码为0xc000005

以管理员身份打开命令提示符并输入以下命令：

`sfc /scannow`

之后，如果发现错误，请重新启动计算机并检查。
如果重新启动后问题仍未解决或者未发现错误，请输入以下命令：

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

检查完成后，重新启动计算机并检查。

如果这样无法解决问题，请重新安装Windows。

---
### 4.ImGUI：DirectX11后端初始化成功。

错误是因为主题，清空主题文件夹。

---
### 5.系统未检测到MSVCP140.dll

更新[Microsoft Visual Studio C++](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022)

更新[DirectX](https://www.microsoft.com/en-us/download/details.aspx?id=35)

---
### 6.文件损坏！该程序已被篡改，可能已被感染。

![](/assets/images/docs/202312/virus2.png)

在这种情况下，您可以尝试使用`Malware Bytes`或`Dr.Web`进行全面扫描，如果发现任何病毒，请将其删除，然后重新启动并重试。如果这样也无效，则重新安装Windows是解决此问题的最简单方法。

---
### 7.超时

![](/assets/images/docs/202312/error1.png)

重新启动路由器。
关闭所有影响防火墙的应用程序。如果这些方法都无效，可能是您的网络出现了一些问题。
某个防病毒软件可能正在阻止连接，请确保它不在任务管理器中运行。

---
### 8.DLL注入失败

卸载颜色选择器文件夹，然后重新下载颜色选择器。

---
### 9.Windows无法访问指定的设备、路径或文件

![](/assets/images/docs/202312/error2.png)

首先转到[此处](https://support.microsoft.com/en-us/topic/-windows-cannot-access-the-specified-device-path-or-file-error-when-you-try-to-install-update-or-start-a-program-or-file-46361133-47ed-6967-c13e-e75d3cc29657)，并按照帖子中的步骤操作。

在尝试上述解决方案后，下载一个防病毒软件并进行全系统检查！

如果这无法解决问题，请以管理员身份打开命令提示符，并输入`sfc /scannow`

之后，如果发现错误，请重新启动计算机并检查。

如果重新启动后问题仍未解决或者未发现错误，请输入以下命令：

`DISM.exe /Online /Cleanup-Image /RestoreHealth`

检查完成后，重新启动计算机并检查。

如果这样无法解决问题，请重新安装Windows。

---
### 10.签名校验和失败

![](/assets/images/docs/202312/checksum.png)

服务器宕机或已关闭，请等待服务器重新上线。

---
### 11.无法创建游戏进程，出现错误5

![](/assets/images/docs/202312/error3.png)

删除`cfg.ini`。

---
### 12.SSL连接错误

![](/assets/images/docs/202312/error4.png)

重新启动您的计算机，重新启动您的路由器。

如果没有用，尝试使用VPN。

---
### 13.当前数据不存在或服务器错误

![](/assets/images/docs/202312/error.png)

解除暂停您的卡蜜再试一次

---
### 14.无法验证当前时间戳

![](/assets/images/docs/202402/timestamp.png)

情况一:
- 您可能在使用VPN时得到此错误，请关掉再试一遍

情况二:
- 确定您的计算机时间是设定为自动同步

---
### 15.为什么我的korpei打开后闪退

情况一：
- korepi的文件夹名称有中文或者其他符号，请改为英文路径。<span style="color:red;">例如：D:\korepi</span>
- ⚪神路径文件夹名称有中文或者其他符号，请改为英文路径。<span style="color:red;">例如：D:\G⚪nshin Impact\G⚪nshin Impact Game\G⚪nshinImpact.exe</span>

情况二：
- 电脑hosts文件缺失，如果C:\Windows\System32\drivers\etc中没有hosts文件，KP就无法运行，因此它是KP运行的必要条件。hosts文件路径：<span style="color:red;">C:\Windows\System32\drivers\etc</span>。
- [hosts下载](https://discord.com/channels/1069057220802781265/1158263313369677824/1221410399765659658) 如果无法通过链接进入，请在频道中频道和身分组哪里点击领取Chinese Ping身份，然后在点击上面的hosts下载。

---
### 16.Unable to open file to write public key:

- This error might happen if you got your game installed in other drive other than your main drive `C:/` , to solve it you can reinstall the game to the main drive and run Korepi again.

---
### 17.Failed to get response from https://md5c...

- This error might happen if your conection is not stable or your conection to the website its blocked, please copy the link and check if you can access it. If you can't access the website, using a VPN might help.

---
### 18.Received code is not 200 from https://md5c...

- This Error will appear if your key is paused, please head to `🔐｜verification` and click on `Unpause Key` and type `Yes` on the pop-up.
