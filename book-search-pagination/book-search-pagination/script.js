const REST_API_KEY = "DB62959AE64B80A7A0E5E762CAF7C728";
    const BOOK_URL = "https://dapi.kakao.com/v3/search/book";

    // TODO 1: 페이지네이션 상태 변수 선언
    let currentPage = 1;
    let totalPages = 1;
    let currentQuery = "";

    const $bookList = document.getElementById("book-list");
    const $pagination = document.getElementById("pagination");
    const $searchForm = document.getElementById("search-form");
    const $searchInput = document.getElementById("search-input");

    // TODO 2: 검색 함수 수정
    async function searchBooks(page = 1) {
      const query = $searchInput.value.trim();
      if (query === "") {
        alert("검색어를 입력해주세요!");
        $searchInput.focus();
        return;
      }

      if (page === 1) currentQuery = query;

      try {
        const response = await fetch(`${BOOK_URL}?query=${encodeURIComponent(currentQuery)}&page=${page}&size=10`, {
          headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`,
          },
        });

        if (!response.ok) throw new Error(`HTTP 오류: ${response.status}`);

        const data = await response.json();

        if (data.documents.length === 0) {
          $bookList.innerHTML = "<li>검색 결과가 없습니다.</li>";
          $pagination.style.display = "none";
          return;
        }

        renderBooks(data.documents);

        currentPage = page;
        totalPages = Math.ceil(data.meta.pageable_count / 10);
        renderPagination();
        window.scrollTo({ top: 0, behavior: "smooth" });

      } catch (error) {
        console.error("검색 실패:", error);
        $bookList.innerHTML = "<li>검색 중 오류가 발생했습니다.</li>";
        $pagination.style.display = "none";
      }
    }

    $searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      searchBooks(1);
    });

    function renderBooks(books) {
      $bookList.innerHTML = "";
      books.forEach((book) => {
        const bookItem = document.createElement("li");
        bookItem.innerHTML = `
          <h3>${book.title}</h3>
          <img src="${book.thumbnail}" alt="" />
          <p>저자: ${book.authors.join(", ")}</p>
        `;
        $bookList.appendChild(bookItem);
      });
    }

    // TODO 3: 페이지네이션 렌더링
    function renderPagination() {
      $pagination.innerHTML = "";

      if (totalPages < 2) {
        $pagination.style.display = "none";
        return;
      }

      $pagination.style.display = "block";

      // 이전 버튼
      if (currentPage > 1) {
        const prevBtn = document.createElement("button");
        prevBtn.textContent = "이전";
        prevBtn.addEventListener("click", () => searchBooks(currentPage - 1));
        $pagination.appendChild(prevBtn);
      }

      // 페이지 번호 버튼 (최대 5개)
      const pageGroup = Math.floor((currentPage - 1) / 5);
      const startPage = pageGroup * 5 + 1;
      const endPage = Math.min(startPage + 4, totalPages);

      for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.textContent = i;
        if (i === currentPage) pageBtn.classList.add("active");
        pageBtn.addEventListener("click", () => searchBooks(i));
        $pagination.appendChild(pageBtn);
      }

      // 다음 버튼
      if (currentPage < totalPages) {
        const nextBtn = document.createElement("button");
        nextBtn.textContent = "다음";
        nextBtn.addEventListener("click", () => searchBooks(currentPage + 1));
        $pagination.appendChild(nextBtn);
      }
    }