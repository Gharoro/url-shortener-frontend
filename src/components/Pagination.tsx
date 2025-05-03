import { PaginationData } from "../utils/interface";

interface PaginationProps {
  pagination: PaginationData;
  setPage: (page: number) => void;
}

export const Pagination = ({ pagination, setPage }: PaginationProps) => {
  const { currentPage, totalPages, hasNextPage, hasPreviousPage } = pagination;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="my-8 flex justify-center space-x-4" aria-label="Pagination">
      <button
        disabled={!hasPreviousPage}
        onClick={() => hasPreviousPage && setPage(currentPage - 1)}
        className="cursor-pointer rounded-lg border border-primary px-2 py-2 text-primary disabled:opacity-50"
      >
        <span className="sr-only">Previous</span>
        <i className="fa-solid fa-chevron-left w-5 h-5 font-semibold"></i>
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setPage(pageNumber)}
          className={`cursor-pointer rounded-lg border border-primary px-4 py-2 ${
            pageNumber === currentPage
              ? "bg-primary text-white"
              : "text-primary"
          }`}
        >
          {pageNumber}
        </button>
      ))}

      <button
        disabled={!hasNextPage}
        onClick={() => hasNextPage && setPage(currentPage + 1)}
        className="cursor-pointer rounded-lg border border-primary px-2 py-2 text-primary disabled:opacity-50"
      >
        <span className="sr-only">Next</span>
        <i className="fa-solid fa-chevron-right w-5 h-5 font-semibold"></i>
      </button>
    </nav>
  );
};
