import { useEffect, useMemo, useState } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import debounce from "lodash.debounce";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Status } from "../utils/enum";
import { formatDate, getErrorMessage } from "../utils/helpers";
import { DOMAIN } from "../config/env";
import { useFetchUrls } from "../hooks/useFetchUrl";
import { Pagination } from "./Pagination";
import { showSuccess } from "../api/responses";

export default function UrlList() {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  const { data, isSuccess, isLoading, isError, error } = useFetchUrls({
    page,
    search: debouncedSearch,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const debouncedUpdateSearch = useMemo(
    () =>
      debounce((value: string) => {
        if (value.length >= 3 || value.length === 0) {
          setDebouncedSearch(value);
        }
      }, 500),
    []
  );

  useEffect(() => {
    debouncedUpdateSearch(search);
    return () => debouncedUpdateSearch.cancel();
  }, [search, debouncedUpdateSearch]);

  return (
    <div className="mx-auto flex flex-col items-center py-10 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full sm:w-5/6 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:justify-between lg:items-center">
        <div className="w-full lg:w-4/6">
          <h2 className="font-bold text-2xl">Shortened URLs</h2>
          <p className="text-gray-400">
            Showing {data?.urls.length} of {data?.pagination?.totalCount} urls
          </p>
        </div>
        <div className="w-full lg:w-2/6">
          <div className="relative text-gray-500 focus-within">
            <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none ">
              <svg
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z"
                  stroke="#9CA3AF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z"
                  stroke="black"
                  strokeOpacity="0.2"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z"
                  stroke="black"
                  strokeOpacity="0.2"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-dark dark:text-white bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
              placeholder="Search for link, enter at least 3 characters"
            />
          </div>
        </div>
      </div>

      <div className="w-full sm:w-5/6 my-8">
        {isError && (
          <div className="bg-red-200 px-6 py-4 my-4 rounded-md text-lg flex items-center w-full sm:w-5/6">
            <svg
              viewBox="0 0 24 24"
              className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
            >
              <path
                fill="currentColor"
                d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
              ></path>
            </svg>
            <span className="text-red-800">{getErrorMessage(error)}</span>
          </div>
        )}

        <div className="hidden lg:grid grid-cols-6 gap-4 font-semibold px-4 bg-gray-50 dark:bg-dark rounded-tl-2xl rounded-tr-2xl">
          <span className="p-5 text-left text-sm leading-6 font-semibold capitalize">
            Short Link
          </span>
          <span className="p-5 text-left text-sm leading-6 font-semibold capitalize">
            Original Link
          </span>
          <span className="p-5 text-left text-sm leading-6 font-semibold capitalize">
            QR Code
          </span>
          <span className="p-5 text-left text-sm leading-6 font-semibold capitalize">
            Status
          </span>
          <span className="p-5 text-left text-sm leading-6 font-semibold capitalize">
            Date
          </span>
          <span className="p-5 text-left text-sm leading-6 font-semibold capitalize">
            Action
          </span>
        </div>

        {isLoading && <Skeleton count={5} />}

        {/* Each item */}
        {!isLoading &&
          isSuccess &&
          data?.urls &&
          data?.urls.map((url) => {
            const shortUrl = `${DOMAIN}/${url.shortCode}`;
            return (
              <div
                key={url.id}
                className="grid grid-cols-1 lg:grid-cols-6 gap-y-4 lg:gap-4 items-start lg:items-center px-4 py-5 bg-white dark:bg-hero border-b border-gray-200 dark:border-gray-700"
              >
                <div className="px-0 lg:px-5">
                  <span className="block lg:hidden text-xs text-gray-500 mb-1">
                    Short Link
                  </span>
                  <div className="flex items-center gap-2">
                    <Link
                      to={shortUrl}
                      className="text-primary break-all text-sm"
                    >
                      {shortUrl}
                    </Link>
                    <CopyToClipboard
                      text={shortUrl}
                      onCopy={() => showSuccess("Short URL copied")}
                    >
                      <button className="cursor-pointer">
                        <i className="fa-solid fa-copy"></i>
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>

                <div className="px-0 lg:px-5">
                  <span className="block lg:hidden text-xs text-gray-500 mb-1">
                    Original Link
                  </span>
                  <Link
                    to={url.originalUrl}
                    className="text-primary break-words text-sm"
                  >
                    {url.originalUrl}
                  </Link>
                </div>

                <div className="px-0 lg:px-5">
                  <span className="block lg:hidden text-xs text-gray-500 mb-1">
                    QR Code
                  </span>
                  <QRCode size={32} value={shortUrl} />
                </div>

                <div className="px-0 lg:px-5">
                  <span className="block lg:hidden text-xs text-gray-500 mb-1">
                    Status
                  </span>
                  {url.status === Status.ACTIVE ? (
                    <span className="px-2 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  ) : (
                    <span className="px-2 inline-flex text-xs font-semibold rounded-full bg-red-100 text-red-800">
                      Inactive
                    </span>
                  )}
                </div>

                <div className="px-0 lg:px-5">
                  <span className="block lg:hidden text-xs text-gray-500 mb-1">
                    Date
                  </span>
                  <span className="text-sm">{formatDate(url.createdAt)}</span>
                </div>

                <div className="px-0 lg:px-5">
                  <span className="block lg:hidden text-xs text-gray-500 mb-1">
                    Action
                  </span>
                  <Link
                    to={`/url/${url.shortCode}`}
                    className="flex items-center gap-2 text-primary text-sm"
                  >
                    <i className="fa-solid fa-eye"></i>
                    <span>View Stats</span>
                  </Link>
                </div>
              </div>
            );
          })}

        {data?.pagination && data?.pagination?.totalCount > 0 && (
          <Pagination pagination={data?.pagination} setPage={setPage} />
        )}
      </div>
    </div>
  );
}
