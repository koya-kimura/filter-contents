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
import F_normal from "./assets/frag/Normal.frag"            // 未加工のキャプチャ
import F_GREENAILEN from "./assets/frag/GreenAlien.frag"  // グリーンエイリアン
import F_filter_02 from "./assets/frag/BlueStairs.frag"    // 
import F_filter_03 from "./assets/frag/VortexTexture.frag"    // 
import F_filter_04 from "./assets/frag/MosaicGlitch.frag"    // 
import F_filter_05 from "./assets/frag/Submerge.frag"    // 
import F_filter_06 from "./assets/frag/Pretense.frag"    // 
import F_filter_07 from "./assets/frag/BlackHole.frag"    // 

/* ------------------- */
/*    プレビュー画像    */
/* ------------------- */
import P_normal from "./assets/prev/Normal.png"           // 未加工のキャプチャ
import P_GREENAILEN from "./assets/prev/GreenAlien.png"   // グリーンエイリアン
import P_filter_02 from "./assets/prev/BlueStairs.png"    // 
import P_filter_03 from "./assets/prev/VortexTexture.png"    // 
import P_filter_04 from "./assets/prev/MosaicGlitch.png"    // 
import P_filter_05 from "./assets/prev/Submerge.png"    // 
import P_filter_06 from "./assets/prev/Pretense.png"    // 
import P_filter_07 from "./assets/prev/BlackHole.png"    // 

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
    name: "GreenAlien",
    designer: "t"
  },

  /* BlueStairs */
  {
    vert: V_normal,
    frag: F_filter_02,
    prev: P_filter_02,
    name: "BlueStairs",
    designer: "d"
  },

  /* VortexTexture */
  {
    vert: V_normal,
    frag: F_filter_03,
    prev: P_filter_03,
    name: "VortexTexture",
    designer: "d"
  },

  /* MosaicGlitch */
  {
    vert: V_normal,
    frag: F_filter_04,
    prev: P_filter_04,
    name: "MosaicGlitch",
    designer: "d"
  },

  /* Submerge */
  {
    vert: V_normal,
    frag: F_filter_05,
    prev: P_filter_05,
    name: "Submerge",
    designer: "d"
  },

  /* Pretense */
  {
    vert: V_normal,
    frag: F_filter_06,
    prev: P_filter_06,
    name: "Pretense",
    designer: "d"
  },

  /* BlackHole */
  {
    vert: V_normal,
    frag: F_filter_07,
    prev: P_filter_07,
    name: "BlackHole",
    designer: "d"
  },
]