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
import V_main from "./assets/vert/main.vert"           // 未加工のキャプチャ

/* ------------------- */
/* フラグメントシェーダ */
/* ------------------- */
import F_normal from "./assets/frag/Normal.frag"            // 未加工のキャプチャ
import F_GREENAILEN from "./assets/frag/GreenAlien.frag"  // グリーンエイリアン
import F_BlueStairs from "./assets/frag/BlueStairs.frag"    // 
import F_VortexTexture from "./assets/frag/VortexTexture.frag"    // 
import F_MosaicGlitch from "./assets/frag/MosaicGlitch.frag"    // 
import F_Submerge from "./assets/frag/Submerge.frag"    // 
import F_Pretense from "./assets/frag/Pretense.frag"    // 
import F_BlackHole from "./assets/frag/BlackHole.frag"    // 

/* ------------------- */
/*    プレビュー画像    */
/* ------------------- */
import P_normal from "./assets/prev/Normal.png"           // 未加工のキャプチャ
import P_GREENAILEN from "./assets/prev/GreenAlien.png"   // グリーンエイリアン
import P_BlueStairs from "./assets/prev/BlueStairs.png"    // 
import P_VortexTexture from "./assets/prev/VortexTexture.png"    // 
import P_MosaicGlitch from "./assets/prev/MosaicGlitch.png"    // 
import P_Submerge from "./assets/prev/Submerge.png"    // 
import P_Pretense from "./assets/prev/Pretense.png"    // 
import P_BlackHole from "./assets/prev/BlackHole.png"    // 

/* ************************** */
/*       ファイルリスト        */
/* ************************** */
export const fileList = [
  /* テンプレート */
  // {
  //   name: "フィルタ名",
  //   vert: V_フィルタ名,
  //   frag: F_フィルタ名,
  //   prev: P_フィルタ名,
  //   developer: "開発者(任意)"
  // },

  /* グレイスケール(テスト用)  */
  // {
  //   name: "グレイスケール",
  //   vert: V_main,
  //   frag: F_GRAYSCAL,
  //   prev: P_GRAYSCALE,
  //   developer: "s"
  // },
  /* ネガティブ(テスト用) */
  // {
  //   name: "ネガフィルム",
  //   vert: V_main,
  //   frag: F_NEGATIVE,
  //   prev: P_NEGATIVE,
  //   developer: "s"
  // },

  /* グリーンエイリアン */
  {
    name: "GreenAlien",
    vert: V_main,
    frag: F_GREENAILEN,
    prev: P_GREENAILEN,
    developer: "t"
  },

  /* BlueStairs */
  {
    name: "BlueStairs",
    vert: V_main,
    frag: F_BlueStairs,
    prev: P_BlueStairs,
    developer: "d"
  },

  /* VortexTexture */
  {
    name: "VortexTexture",
    vert: V_main,
    frag: F_VortexTexture,
    prev: P_VortexTexture,
    developer: "d"
  },

  /* MosaicGlitch */
  {
    name: "MosaicGlitch",
    vert: V_main,
    frag: F_MosaicGlitch,
    prev: P_MosaicGlitch,
    developer: "d"
  },

  /* Submerge */
  {
    name: "Submerge",
    vert: V_main,
    frag: F_Submerge,
    prev: P_Submerge,
    developer: "d"
  },

  /* Pretense */
  {
    name: "Pretense",
    vert: V_main,
    frag: F_Pretense,
    prev: P_Pretense,
    developer: "d"
  },

  /* BlackHole */
  {
    name: "BlackHole",
    vert: V_main,
    frag: F_BlackHole,
    prev: P_BlackHole,
    developer: "d"
  },

  /* 未加工のキャプチャ */
  {
    name: "Normal",
    vert: V_main,
    frag: F_normal,
    prev: P_normal,
    developer: "s"
  },
];
