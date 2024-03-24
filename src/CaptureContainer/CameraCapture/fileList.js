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
import F_GREENAILEN from "./assets/frag/filter_01.frag"  // グリーンエイリアン
import F_F2 from "./assets/frag/filter_02.frag"  // 
import F_F3 from "./assets/frag/filter_03.frag"  // 
import F_F4 from "./assets/frag/filter_04.frag"  // 
import F_F5 from "./assets/frag/filter_05.frag"  // 
import F_F6 from "./assets/frag/filter_06.frag"  // 
import F_F7 from "./assets/frag/filter_07.frag"  // 

/* ------------------- */
/*    プレビュー画像    */
/* ------------------- */
import P_NORMAL from "./assets/prev/normal.png"           // 無処理
import P_GRAYSCALE from "./assets/prev/grayscale.png"    // グレイスケール
import P_NEGATIVE from "./assets/prev/negative.png"     // ネガ
import P_GREENAILEN from "./assets/prev/green.png"        // グリーンエイリアン

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
  // {
  //   vert: V_NORMAL,
  //   frag: F_GRAYSCAL,
  //   prev: P_GRAYSCALE,
  //   remarks: "グレイスケール",
  //   designer: "Sakamoto"
  // },
  // {
  //   vert: V_NORMAL,
  //   frag: F_NEGATIVE,
  //   prev: P_NEGATIVE,
  //   remarks: "ネガフィルム",
  //   designer: "Sakamoto"
  // },
  {
    vert: V_NORMAL,
    frag: F_GREENAILEN,
    prev: P_GREENAILEN,
    remarks: "グリーンエイリアン",
    designer: "t"
  },
  {
    vert: V_NORMAL,
    frag: F_F2,
    prev: P_GREENAILEN,
    remarks: "f2",
    designer: "d"
  },
  {
    vert: V_NORMAL,
    frag: F_F3,
    prev: P_GREENAILEN,
    remarks: "f3",
    designer: "d"
  },
  {
    vert: V_NORMAL,
    frag: F_F4,
    prev: P_GREENAILEN,
    remarks: "f4",
    designer: "d"
  },
  {
    vert: V_NORMAL,
    frag: F_F5,
    prev: P_GREENAILEN,
    remarks: "f5",
    designer: "d"
  },
  {
    vert: V_NORMAL,
    frag: F_F6,
    prev: P_GREENAILEN,
    remarks: "f6",
    designer: "d"
  },
  {
    vert: V_NORMAL,
    frag: F_F7,
    prev: P_GREENAILEN,
    remarks: "f7",
    designer: "d"
  },
  // {
  //   vert: V_任意の文字列,
  //   frag: F_任意の文字列,
  //   remarks: "なにかコメントがあれば(どういったフィルタかの説明など)",
  //   designer: "開発者"
  // },
]