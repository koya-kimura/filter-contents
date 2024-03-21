/* ************************** */
/*    ファイルのインポート     */
/* ************************** */

/* ------------------- */
/*    頂点シェーダー    */
/* ------------------- */
import V_NORMAL from "./assets/main.vert"           // 無処理

/* ------------------- */
/* フラグメントシェーダ */
/* ------------------- */
import F_NORMAL from "./assets/main.frag"           // 無処理
import F_GRAYSCAL from "./assets/grayscale.frag"    // グレイスケール
import F_NEGATIVE from "./assets/negative.frag"     // ネガ
import F_GREEN from "./assets/filter_01.frag"     // 


/* ************************** */
/*       ファイルリスト        */
/* ************************** */
export let fileList = [
  {
    vert: V_NORMAL,
    frag: F_NORMAL,
    remarks: "ノーマル",
    designer: "Sakamoto"
  },
  {
    vert: V_NORMAL,
    frag: F_GRAYSCAL,
    remarks: "グレイスケール",
    designer: "Sakamoto"
  },
  {
    vert: V_NORMAL,
    frag: F_NEGATIVE,
    remarks: "ネガフィルム",
    designer: "Sakamoto"
  },
  {
    vert: V_NORMAL,
    frag: F_GREEN,
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