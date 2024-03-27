# フィルタ開発に関するガイド
本プロジェクトでフィルタを実装するには，シェーダファイルとプレビューの画像ファイルが必要です。

## 1. シェーダファイルの作成
本プロジェクトのフィルタは、[p5.js](https://p5js.org/) という描画ライブラリを利用して、カメラからキャプチャした画像に対してシェーダ処理をしています。

フィルタの開発は、Issues にある「 [Filterの開発環境について](https://github.com/koya-kimura/filter-contents/issues/12) 」をご参照ください。

## 2. プレビュー画像の作成
Figma か何かリンクをはる？

## 3. プロジェクトへの導入
シェーダファイルとプレビュー画像は ```filter-contents\src\CaptureContainer\CameraCapture\assets``` ディレクトリにある ```vert``` 、```frag```、```prev``` フォルダに保管されています。

|フォルダ|命名規則|
|---|---|
|```vert```|頂点シェーダ|
|```frag```|フラグメントシェーダ|
|```prev```|プレビュー画像|

作成したファイルをそれぞれ適切なフォルダへ移動させてください。なお、フィルタの開発にて ```main.vert``` を利用されている場合は、フラグメントシェーダとプレビュー画像のみ各フォルダに移動させてください。

## 4. フィルタリストの編集
アプリでは ```src\CaptureContainer\CameraCapture\fileList.js``` にてフィルタのインポートをしています。次の手順に従って、```fileList.js``` を編集してください。

### (1) インポートの追加
```fileList.js``` の冒頭でファイルのパスをアプリへインポートしています。「3. プロジェクトへの導入」で移動したファイルについて、次のコードに従って ```import``` 文で追記してください。

#### i. 頂点シェーダー ```.vert```
```main.vert``` を利用される場合は、追記しないでください。
```js
import V_フィルタ名 from "./assets/vert/フィルタ名.vert"
```

#### ii. フラグメントシェーダ ```.frag```
```js
import F_フィルタ名 from "./assets/frag/フィルタ名.frag"
```

#### iii. プレビュー画像 ```.png```
```js
import P_フィルタ名 from "./assets/prev/フィルタ名.png"
```

### (2) フィルタリストの追加
```fileList.js``` にある ```fileList``` 配列でアプリのフィルタを管理しています。
```fileList``` の要素は、次のような [オブジェクト](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/Basics) で実装されています。

|キー|値|内容|
|---|---|---|
|```name```     |```"フィルタ名"```|フィルタの名称|
|```vert```     |```V_フィルタ名```|頂点シェーダーのファイルパス|
|```frag```     |```F_フィルタ名```|フラグメントシェーダのファイルパス|
|```prev```     |```P_フィルタ名```|プレビュー画像のファイルパス|
|```developer```|```"開発者名"```  |(任意) 開発者の名前|

- ```name``` と ```developer``` キーは文字列で記述してください
- ```vert``` と ```frag```、```prev``` キーは 「(1) インポートの追加」 と一致させてください
- ```main.vert``` を利用する場合、```vert``` キーの値は ```V_main``` にしてください
- ```developer``` キーの記載は任意です

開発したフィルタは ```fileList``` 配列の末尾要素として、次のように追記してください。

```js : 例
/* ************************** */
/*       ファイルリスト        */
/* ************************** */
export const fileList = [
  /* ---------- */
  /*    省略    */
  /* ---------- */

  /* BlackHole */
  {
    name: "BlackHole",
    vert: V_main,
    frag: F_BlackHole,
    prev: P_BlackHole,
    developer: "d"
  },

  /* フィルタ名 */
  {
    name: "フィルタ名",
    vert: V_フィルタ名_もしくは_「V_main」,
    frag: F_フィルタ名,
    prev: P_フィルタ名,
    developer: "開発者名(任意)"
  },
];
```

## 5. ローカルでの動作確認
必ずローカルでの動作を確認してください。ターミナルで次のコマンドを実行すると、ローカルホストでアプリが起動します。
```sh
filter-contents$ npm start
```

なお、次の方法ではアプリが正常に起動しません。
- ```index.html``` をブラウザアプリで開く
- VSCode の拡張機能 Live Server でローカルホストを立ち上げる

アプリの起動後、ページ下部にある矢印アイコンをクリックして、開発したフィルタを選択してください。そして、次の点について全て問題がないかを確認してください。

- プレビュー画像が表示されている
- [フィルタの開発環境](https://github.com/koya-kimura/filter-contents/issues/12) と同様の動作をしている
- 長時間の動作にも問題が発生しない

確認後、ターミナルで ```Ctrl + C``` あるいは ```cmd + C``` を入力して、アプリを停止させてください。

## 6. アプリの更新
完成していませんが，参考にしてください
- https://qiita.com/skm_bnn/private/5ede253d469bad566c4b#github-pages-へのデプロイ

# ファイル構成
本プロジェクトのファイル構成を次に示します。
```
filter-contents
L README.md                     # 本ドキュメント
L README_SRC                    # 本ドキュメントの画像
L package.json                  # 触らない
L package-lock.json             # 触らない
L docs                          # ビルドファイル
L node_modules                  # 触らない(いずれリポジトリからは消すこと)
L public                        # 静的なソースファイルの保管フォルダ
  L index.html                  # Web ページ
  L Favicon.svg                 # ファビコン
L src                           # React アプリに関連するファイルの保管フォルダ
  L index.js                    # React アプリのエントリポイント
  L App.js                      # メインコンポーネント (Webアプリ全体)
  L App.css                     # ページ全体で共通するデザイン
  L image                       # ページを装飾している画像ファイルの保管フォルダ
    L *.png                     # 可変長なアスペクト比の画像
    L *.svg                     # 固定長なアスペクト比の画像
    L test                      # [没] 開発中に使ったファイルの保管フォルダ
  L FilterSelectContainer       # Web アプリ下部に関するファイルの保管フォルダ
    L FilterSelectContainer.js  # アプリ下部のコンポーネント
    L FilterSelectContainer.css # アプリ下部のデザイン  
    L CaptureContainer          # Web アプリ上部に関するファイルの保管フォルダ
  L CaptureContainer.js         # アプリ上部のコンポーネント
    L CaptureContainer.css      # アプリ上部のデザイン
    L CameraCapture             # カメラのキャプチャ部分
      L CameraCapture.js        # カメラキャプチャの関数コンポーネント(p5.js)
      L filterList.js           # フィルタのインポートを管理するファイル
      L _CameraCapture_class.js # [没] カメラキャプチャのクラスコンポーネント(p5.js)
      L assets                  # フィルタに関するファイルの保管場所
        L vert                  # 頂点シェーダーファイルの保管場所
          L main.vert           # フリップ処理のみ実装
        L frag                  # フラグメントシェーダファイルの保管場所
          L Normal.frag         # 無加工のフィルタ
          L *.frag              # フラグメント処理を加えたフィルタ
          L test                # [没] 開発中に使ったファイルの保管フォルダ
        L prev                  # プレビュー画像の保管場所
          L Normal.png          # 無加工のプレビュー画像
          L *.png               # フィルタ効果を示すプレビュー画像
          L test                # [没] 開発中に使ったファイルの保管フォルダ
```




