"use strict";

{
  const onClickAdd = () => {
    //   テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("addText").value;
    document.getElementById("addText").value = "";

    //div生成
    const div = document.createElement("div");
    console.log(div);
  };

  document
    .getElementById("addButton")
    .addEventListener("click", () => onClickAdd());
}
