const memoForm = document.getElementById("memo-form");
const titleInput = document.getElementById("title-input");
const contentInput = document.getElementById("content-input");
const memoList = document.getElementById("memo-list");


let memoData = []; 
const MEMO_KEY = "memo"; 

function loadMemoStorage() {
  const storedData = localStorage.getItem(MEMO_KEY);
  if (storedData) {
    memoData = JSON.parse(storedData);
    renderMemo();
  }
}

function renderMemo() {
  memoList.innerHTML = ""; // 초기화

  if (memoData.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "작성된 메모가 없습니다.";
    memoList.appendChild(empty);
    return;
  }

  memoData.forEach((memo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${memo.title}</strong>: ${memo.content}
      <button data-index="${index}">삭제</button>`;
    memoList.appendChild(li);
  });

  const deleteButtons = memoList.querySelectorAll("button");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      deleteMemo(index);
    });
  });
}

function saveMemoStorage() {
  localStorage.setItem(MEMO_KEY, JSON.stringify(memoData));
}


memoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (title === "") {
    alert("제목을 입력해주세요.");
    return;
  }

  memoData.unshift({ title, content });
  saveMemoStorage(); 
  renderMemo(); 
  memoForm.reset();
});
function deleteMemo(index) {
  memoData.splice(index, 1); 
  saveMemoStorage();
  renderMemo();
}

loadMemoStorage();
