"use strict";

{
  const onClickAdd = () => {
    //   テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("addText").value;
    document.getElementById("addText").value = "";

    // liタグ生成
    const li = document.createElement("li");

    //div生成
    const div = document.createElement("div");
    div.className = "list-raw";

    // p生成
    const p = document.createElement("p");
    p.innerText = inputText;

    // buttonタグの生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
      // 要素の削除
      deleteFromCompleteList(completeButton.closest(".list-raw").parentNode);
      // 完了リストに追加する要素
      const getnodeElement = completeButton.parentNode;
      const addTarget = getnodeElement.parentNode;

      const text = getnodeElement.firstElementChild.innerText;
      getnodeElement.textContent = null;

      // liタグ生成
      const li = document.createElement("li");
      // p生成
      const p = document.createElement("p");
      //buttonタグの生成
      const backButton = document.createElement("button");
      backButton.innerText = "戻す";

      p.innerText = text;
      getnodeElement.appendChild(p);
      getnodeElement.appendChild(backButton);
      li.appendChild(getnodeElement);

      document.getElementById("complete-list").appendChild(li);
    });
    // 削除ボタンを
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
      //押された削除ボタンの親要素のliを未完了リストから削除
      deleteFromCompleteList(deleteButton.closest(".list-raw").parentNode);
    });

    //divタグの子要素に各要素を設定
    div.appendChild(p);

    li.appendChild(div);

    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    //未完了のリストに追加する
    document.getElementById("incomplete-list").appendChild(li);

    // 未完了リストからボタンを押したリストを削除する
    const deleteFromCompleteList = (target) => {
      const movecomplete = completeButton.closest(".list-raw").parentNode;
      document.getElementById("incomplete-list").removeChild(target);
    };
  };

  document
    .getElementById("addButton")
    .addEventListener("click", () => onClickAdd());
}
