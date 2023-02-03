"use strict";

{
  const onClickAdd = () => {
    //   テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("addText").value;
    document.getElementById("addText").value = "";

    // liタグ生成
    const li = document.createElement("li");
    console.log(li);

    //div生成
    const div = document.createElement("div");
    div.className = "list-raw";
    console.log(div);

    // p生成
    const p = document.createElement("p");
    p.innerText = inputText;
    console.log(p);

    //divタグの子要素に各要素を設定
    div.appendChild(p);
    console.log(div);

    li.appendChild(div);
    console.log(li);

    //未完了のリストに追加する
    document.getElementById("incomplete-list").appendChild(li);
  };

  document
    .getElementById("addButton")
    .addEventListener("click", () => onClickAdd());
}
