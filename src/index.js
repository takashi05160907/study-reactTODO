"use strict";

{
  //　インプット内容を未完了エリアに追加する関数
  const onClickAdd = () => {
    // inputされたテキストを取得し、input欄を削除する
    const inputText = document.getElementById("addText").value;
    document.getElementById("addText").value = "";

    createIncompleteList(inputText);
  };

  //未完了リストからの要素を削除する関数
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };

  // 未完了のリストを作成する関数
  const createIncompleteList = (text) => {
    // todoを未完了エリアに追加する
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-raw";
    const p = document.createElement("p");
    p.innerText = text;
    // 完了ボタンを生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
      // 完了ボタンの動作-未完了エリアのTODOを削除し、完了エリアに移動させる
      // 未完了エリアのTODOを削除
      const deleteTarget = completeButton.closest(".list-raw").parentNode;
      deleteFromIncompleteList(deleteTarget);
      //完了エリアに移動させる
      //完了エリアに描画する要素を作成
      const addTarget = completeButton.parentNode.parentNode;
      const text = addTarget.firstElementChild.firstElementChild.innerText;
      addTarget.firstElementChild.textContent = null;
      const p = document.createElement("p");
      p.innerText = text;
      // 戻るボタンを生成
      const backButton = document.createElement("button");
      backButton.innerText = "戻る";
      backButton.addEventListener("click", () => {
        // 完了エリアのTODOを削除
        const deleteTarget = backButton.closest(".list-raw").parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);
        // 未完了エリアにTODOを移動する
        const text = backButton.parentNode.firstElementChild.innerText;
        createIncompleteList(text);
      });
      // 作成した要素を整形
      addTarget.firstElementChild.appendChild(p);
      addTarget.firstElementChild.appendChild(backButton);
      console.log(addTarget);
      document.getElementById("complete-list").appendChild(addTarget);
    });
    //削除ボタンを生成
    const deleteButtom = document.createElement("button");
    deleteButtom.innerText = "削除";
    deleteButtom.addEventListener("click", () => {
      // 削除ボタンの動作
      const deleteTarget = completeButton.closest(".list-raw").parentNode;
      deleteFromIncompleteList(deleteTarget);
    });
    // HTMLを生計
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButtom);
    li.appendChild(div);
    // 未完了のTODOリストに追加
    document.getElementById("incomplete-list").appendChild(li);
  };
  // 追加ボタンをクリックしたとき、[未完了のTODOタスクを追加する]が動作
  document
    .getElementById("addButton")
    .addEventListener("click", () => onClickAdd());
}
