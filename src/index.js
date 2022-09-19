import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const deleteList = (targetList, deleteTarget) => {
  document.getElementById(targetList).removeChild(deleteTarget);
};

const createIncompleteList = (text) => {
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.className = "completeButton";
  completeButton.addEventListener("click", () => {
    deleteList("incomplete-list", completeButton.parentNode.parentNode);

    const addTarget = completeButton.parentNode.parentNode;
    const text = addTarget.firstElementChild.firstElementChild.innerText;
    addTarget.firstElementChild.textContent = null;

    const p = document.createElement("p");
    p.innerText = text;

    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      deleteList("complete-list", backbutton.parentNode.parentNode);
      const backTarget = backbutton.parentNode.parentNode;
      const text = backTarget.firstElementChild.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.firstElementChild.appendChild(p);
    addTarget.firstElementChild.appendChild(backbutton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteList("incomplete-list", deleteButton.parentNode.parentNode);
  });

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
