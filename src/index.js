// ReactおよびReactDOMをインポート
import React from 'react';
import ReactDOM from 'react-dom/client';

// Appコンポーネントを'./App'からインポート
import App from './App';

// ルート要素を特定のDOM要素に関連付ける
const root = ReactDOM.createRoot(document.getElementById('root'));

// 本番用コード
// root.render(
//   // React.StrictModeコンポーネントでアプリケーションをラップする
//   <React.StrictMode>
//     {/* Appコンポーネントを描画 */}
//     <App />
//   </React.StrictMode>
// );

// 実験用コード
root.render(
  < App />
);
