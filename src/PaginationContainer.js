import { useState } from "react";
const PAGE_SIZE = 10;
export default PaginationContainer = (data) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalProducts = data;
  const noOfPage = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const PaginationUI = (
    <div className="pagination-container">
      <button
        disabled={currentPage === 0}
        className="page-num"
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        Prev
      </button>
      {[...Array(noOfPage).keys()].map((num) => (
        <span
          className={"page-num " + (currentPage === num ? "active" : "")}
          key={num}
          onClick={() => setCurrentPage(num)}
        >
          {num + 1}
        </span>
      ))}
      <button
        className="page-num"
        disabled={currentPage === noOfPage - 1}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
  return { PaginationUI, start, end };
};
