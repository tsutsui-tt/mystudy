'use strict';
// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// const link = document.createElement('a');
// const img = document.createElement('img');


// link.href = "#";
// img.src = "";

// link.appendChild(img)
// li.appendChild(link)
// ul.appendChild(li)



// lesson3
// document.addEventListener("DOMContentLoaded", function () {
//   const arrays = [
//     { to: "a1", text: "a1" },
//     { to: "a2", text: "a2" }
//   ];

//   const ul = document.getElementsByClassName("aaa")[0];
//   // const arrayLength = array.length;

//   const fragment = document.createDocumentFragment();

//   for (let i = 0; i < arrays.length; i++) {
//     const array = arrays[i];
//     const li = document.createElement("li");
//     const link = document.createElement("a");
//     const img = document.createElement("img");

//     link.textContent = array.text;
//     link.href = array.to;
//     img.src = "img/bookmark.png";
//     img.alt = "ブックマーク";

//     link.appendChild(img);
//     li.appendChild(link);
//     ul.appendChild(li);
//   }
// });


// lesson4
/* <ul>
 <li><a href="/bookmark.html"><img src="1.png" alt="画像1">ブックマーク</a></li>
 <li><a href="/message.html"><img src="2.png" alt="画像2">メッセージ</a></li>
</ul> */

// const arrays = [
//   { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
//   { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" }
// ]

// const ul = document.querySelector('ul');
// const fragment = document.createDocumentFragment();
// for (let i = 0; i < arrays.length; i++) {
//   const array = arrays[i];
//   const li = document.createElement('li');
//   const link = document.createElement('a');
//   const img = document.createElement('img');

//   link.textContent = array.text;
//   link.href = array.to;
//   img.src = array.img;
//   img.alt = array.alt;

//   link.appendChild(img);
//   li.appendChild(link);
//   ul.appendChild(li);
// }


// lesson5
{/* <ul>
 <li><a href="/bookmark.html"><img src="1.png" alt="画像1">ブックマーク</a></li>
 <li><a href="/message.html"><img src="2.png" alt="画像2">メッセージ</a></li>
</ul> */}
// const data = [
//   { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
//   { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" },
// ];

// const loading = document.querySelector('.loading');

//     // サーバーからデータを取得する処理を関数化
//     const fetchData = new Promise((resolve, reject) => {
//       // 3秒後にデータを返す（サーバーからの応答を模倣）
//       setTimeout(() => {
//         reject("エラー");
//       }, 3000);
//     });


// window.addEventListener('load', () => {
//   // ローディング画像を表示中のまま処理を開始
//   fetchData
//     .then((arrays) => {
//       // データ取得が完了したらローディング画像を非表示にする
//       loading.classList.add('hide');
//       setTimeout(() => {
//         loading.style.animation = 'none'; // アニメーションを停止
//       }, 1000); // 1000ms = 1秒

//       // データをHTMLとして出力
//       const ul = document.querySelector('ul');
//       const fragment = document.createDocumentFragment();
//       arrays.forEach((array) => {
//         const li = document.createElement('li');
//         const link = document.createElement('a');
//         const img = document.createElement('img');

//         link.textContent = array.text;
//         link.href = array.to;
//         img.src = array.img;
//         img.alt = array.alt;

//         link.prepend(img);
//         li.appendChild(link);
//         fragment.appendChild(li);
//       });
//       ul.appendChild(fragment);
//     })
//     .catch((error) => {
//       console.error("データの取得に失敗しました:", error);
//     });
// });



const data = [
  { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
  { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" },
];

const loading = document.querySelector('.loading');

// データを取得する非同期関数
const fetchData = () =>
  new Promise((resolve) => setTimeout(() => resolve(data), 3000));

// ロード時の処理
window.addEventListener('load', async () => {
  try {
    // データを取得する
    const arrays = await fetchData();

    // データ取得が完了したらローディング画像を非表示にする
    loading.classList.add('hide');
    setTimeout(() => {
      loading.style.animation = 'none'; // アニメーションを停止
    }, 1000); // 1000ms = 1秒

    // データをHTMLとして出力
    const ul = document.querySelector('ul');
    const fragment = document.createDocumentFragment();
    arrays.forEach((array) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      const img = document.createElement('img');

      link.textContent = array.text;
      link.href = array.to;
      img.src = array.img;
      img.alt = array.alt;

      link.prepend(img);
      li.appendChild(link);
      fragment.appendChild(li);
    });
    ul.appendChild(fragment);
  } catch (error) {
    console.error("データの取得に失敗しました:", error);
  }
});