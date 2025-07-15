const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const resultList = document.getElementById("resultList");

const API_KEY = "f71cfdce172cdd34bcdfb3297f14838d";

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (!query) return alert("검색어를 입력해주세요.");

  fetch(`https://dapi.kakao.com/v3/search/book?query=${encodeURIComponent(query)}&size=10`, {
    method: "GET",
    headers: {
      Authorization: `KakaoAK ${API_KEY}`
    }
  })
    .then((res) => res.json())
    .then((data) => {
      resultList.innerHTML = "";
      data.documents.forEach((book) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${book.title}</strong> - ${book.authors.join(", ")}`;
        resultList.appendChild(li);
      });
    })
    .catch((err) => {
      console.error(err);
      alert("검색 중 오류가 발생했습니다.");
    });
});
