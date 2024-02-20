---
title: FAQ
icon: info
category:
  - FAQ
tag:
  - Start
author: Schvis
order: 1
---

## FAQリスト

### Korepiは無料ですか？

Yes, Korepi has a free version which you can use easily following this [guide](../guide/free.md).

---
### .rar/.zipのパスワードは何ですか？

...

 `1234`, 次回はダウンロードの投稿をお読みください。

---
### 設定が保存されないのはなぜですか?

入手した `.rar/.zip` ファイルを別のフォルダに解凍する必要があることに注意してください。

この手順を行ってもコンフィグが保存されない場合は、サーバーのヘルパーにお問い合わせください。

---
### ### テーマはどこにありますか？

korepiのテーマはコミュニティ共有で見つけることができますし、korepiの設定で自分で作ることもできます。

![](/assets/images/docs/202312/theme-settings.png)

チェック `Theme Customization` を入れて独自のテーマを作成しましょう。

---
### サインイン連続記録がリセットされたのはなぜですか?

リセット時間が超過した可能性があります。毎日リセットされます。1日でもサインインを忘れると完全にリセットされます。

::: info リセット時間は毎日 JST 09:00 です。
:::
---

### 新しいアップデートが来たときにkorepiを使用できますか?

いいえ、Korepi の新しいバージョンがリリースされるまで待つ必要があります。

::: info 古いインジェクターは機能しません。Korepi のアップデートには約 1 ～ 2 週間かかります。
:::
---

### ゲーム内にメニューが表示されないのはなぜですか?
korepi を起動する前に、すべてのオーバーレイ (MSI Afterburner、GeForce Experience など) が有効になっていることを確認してください。

---
###  <span style='color:yellow;'>スポンサー</span> はどこで入手できますか？

サーバー内にあるリンクから[スポンサー](../start/sponsor.md) を入手できます。 `#sponsorship`

スポンサーの役割を獲得するには、少なくとも 5 ドルを寄付する必要があります。5 ドル未満の寄付は無視されます。

---
### ロード画面でゲームがクラッシュするのはなぜですか?

次のようなエラーが発生した場合:

`atidxx64.dll caused an Access Violation (0xc0000005) in module atidxx64.dll at 0033:43d1356c.`

ドライバーを更新して再試行してください。

このエラーが発生しない場合は、 の起動時の遅延をさらに設定してみてください`cfg.ini`.
