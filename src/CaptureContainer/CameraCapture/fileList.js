/* ************************** */
/*    ファイルのインポート     */
/* ************************** */

/* ------------------- */
/*    頂点シェーダー    */
/* ------------------- */
import V_NORMAL from "./assets/vert/main.vert"           // 無処理

/* ------------------- */
/* フラグメントシェーダ */
/* ------------------- */
import F_NORMAL from "./assets/frag/main.frag"           // 無処理
import F_GRAYSCAL from "./assets/frag/grayscale.frag"    // グレイスケール
import F_NEGATIVE from "./assets/frag/negative.frag"     // ネガ
import F_GREEN from "./assets/frag/filter_01.frag"        // グリーンエイリアン

/* ------------------- */
/*    プレビュー画像    */
/* ------------------- */
import P_NORMAL from "./assets/prev/normal.png"           // 無処理
import P_GRAYSCALE from "./assets/prev/grayscale.png"    // グレイスケール
import P_NEGATIVE from "./assets/prev/negative.png"     // ネガ
import P_GREEN from "./assets/prev/green.png"        // グリーンエイリアン

/* ************************** */
/*       ファイルリスト        */
/* ************************** */
export let fileList = [
  {
    vert: V_NORMAL,
    frag: F_NORMAL,
    prev: P_NORMAL,
    remarks: "ノーマル",
    designer: "Sakamoto"
  },
  {
    vert: V_NORMAL,
    frag: F_GRAYSCAL,
    prev: P_GRAYSCALE,
    remarks: "グレイスケール",
    designer: "Sakamoto"
  },
  {
    vert: V_NORMAL,
    frag: F_NEGATIVE,
    prev: P_NEGATIVE,
    remarks: "ネガフィルム",
    designer: "Sakamoto"
  },
  {
    vert: V_NORMAL,
    frag: F_GREEN,
    prev: P_GREEN,
    remarks: "エイリアングリーン",
    designer: "Takoyaki"
  },
  // {
  //   vert: V_任意の文字列,
  //   frag: F_任意の文字列,
  //   remarks: "なにかコメントがあれば(どういったフィルタかの説明など)",
  //   designer: "開発者"
  // },
]