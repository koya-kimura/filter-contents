/* ************************** */
/*    ファイルのインポート     */
/* ************************** */
/* ------------------- */
/*  テスト用のフィルタ  */
/* ------------------- */
// import F_GRAYSCAL from "./assets/frag/test/grayscale.frag"    // グレイスケール
// import F_NEGATIVE from "./assets/frag/test/negative.frag"     // ネガ
// import P_GRAYSCALE from "./assets/prev/test/grayscale.png"    // グレイスケール
// import P_NEGATIVE from "./assets/prev/test/negative.png"      // ネガ

/* ------------------- */
/*    頂点シェーダー    */
/* ------------------- */
import V_normal from "./assets/vert/main.vert"           // 未加工のキャプチャ

/* ------------------- */
/* フラグメントシェーダ */
/* ------------------- */
import F_normal from "./assets/frag/main.frag"            // 未加工のキャプチャ
import F_GREENAILEN from "./assets/frag/greenAilen.frag"  // グリーンエイリアン
import F_filter_02 from "./assets/frag/filter_02.frag"    // 
import F_filter_03 from "./assets/frag/filter_03.frag"    // 
import F_filter_04 from "./assets/frag/filter_04.frag"    // 
import F_filter_05 from "./assets/frag/filter_05.frag"    // 
import F_filter_06 from "./assets/frag/filter_06.frag"    // 
import F_filter_07 from "./assets/frag/filter_07.frag"    // 

/* ------------------- */
/*    プレビュー画像    */
/* ------------------- */
import P_normal from "./assets/prev/normal.png"           // 未加工のキャプチャ
import P_GREENAILEN from "./assets/prev/greenAilen.png"   // グリーンエイリアン
import P_filter_02 from "./assets/prev/filter_02.png"    // 
import P_filter_03 from "./assets/prev/filter_03.png"    // 
import P_filter_04 from "./assets/prev/filter_04.png"    // 
import P_filter_05 from "./assets/prev/filter_05.png"    // 
import P_filter_06 from "./assets/prev/filter_06.png"    // 
import P_filter_07 from "./assets/prev/filter_07.png"    // 

/* ************************** */
/*       ファイルリスト        */
/* ************************** */
export let fileList = [
  /* テンプレート */
  // {
  //   vert: V_フィルタ名,
  //   frag: F_フィルタ名,
  //   name: "フィルタ名(いずれ表示する用)",
  //   designer: "開発者(任意)"
  // },

  /* グレイスケール(テスト用)  */
  // {
  //   vert: V_normal,
  //   frag: F_GRAYSCAL,
  //   prev: P_GRAYSCALE,
  //   name: "グレイスケール",
  //   designer: "Sakamoto"
  // },
  /* ネガティブ(テスト用) */
  // {
  //   vert: V_normal,
  //   frag: F_NEGATIVE,
  //   prev: P_NEGATIVE,
  //   name: "ネガフィルム",
  //   designer: "Sakamoto"
  // },

  /* 未加工のキャプチャ */
  {
    vert: V_normal,
    frag: F_normal,
    prev: P_normal,
    name: "ノーマル",
    designer: "Sakamoto"
  },

  /* グリーンエイリアン */
  {
    vert: V_normal,
    frag: F_GREENAILEN,
    prev: P_GREENAILEN,
    name: "グリーンエイリアン",
    designer: "t"
  },

  /* filter_02 */
  {
    vert: V_normal,
    frag: F_filter_02,
    prev: P_filter_02,
    name: "filter_02",
    designer: "d"
  },

  /* filter_03 */
  {
    vert: V_normal,
    frag: F_filter_03,
    prev: P_filter_03,
    name: "filter_03",
    designer: "d"
  },

  /* filter_04 */
  {
    vert: V_normal,
    frag: F_filter_04,
    prev: P_filter_04,
    name: "filter_04",
    designer: "d"
  },

  /* filter_05 */
  {
    vert: V_normal,
    frag: F_filter_05,
    prev: P_filter_05,
    name: "filter_05",
    designer: "d"
  },

  /* filter_06 */
  {
    vert: V_normal,
    frag: F_filter_06,
    prev: P_filter_06,
    name: "filter_06",
    designer: "d"
  },

  /* filter_07 */
  {
    vert: V_normal,
    frag: F_filter_07,
    prev: P_filter_07,
    name: "filter_07",
    designer: "d"
  },
]