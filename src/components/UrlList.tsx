import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import { sampleData } from "../utils/constants";
import { Status } from "../utils/enum";
import { formatDate } from "../utils/helpers";
import { DOMAIN } from "../config/env";

export default function UrlList() {
  return (
    <div className="mx-auto flex flex-col items-center py-10 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full sm:w-5/6 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:justify-between lg:items-center">
        <div className="w-full lg:w-4/6">
          <h2 className="font-bold text-2xl">Shortened URLs</h2>
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
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
                <path
                  d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
                <path
                  d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-dark dark:text-white bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
              placeholder="Search for link"
            />
          </div>
        </div>
      </div>

      <div className="w-full sm:w-5/6 my-8">
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

        {/* Each item */}
        {sampleData.map((url) => (
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
                  to={`${DOMAIN}/${url.shortCode}`}
                  className="text-primary break-all text-sm"
                >
                  {`${DOMAIN}/${url.shortCode}`}
                </Link>
                <button className="cursor-pointer">
                  <i className="fa-solid fa-copy"></i>
                </button>
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
              <QRCode size={32} value={`${DOMAIN}/${url.shortCode}`} />
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
        ))}
      </div>

      {/* <div className="overflow-x-auto w-full sm:w-5/6 my-8">
        <table className="min-w-full rounded-xl">
          <thead>
            <tr className="bg-gray-50 dark:bg-dark">
              <th
                scope="col"
                className="p-5 whitespace-nowrap text-left text-sm leading-6 font-semibold capitalize rounded-tl-xl"
              >
                Short Link
              </th>
              <th
                scope="col"
                className="p-5 whitespace-nowrap text-left text-sm leading-6 font-semibold capitalize"
              >
                Original Link
              </th>
              <th
                scope="col"
                className="p-5 whitespace-nowrap text-left text-sm leading-6 font-semibold capitalize"
              >
                QR Code
              </th>
              <th
                scope="col"
                className="p-5 whitespace-nowrap text-left text-sm leading-6 font-semibold capitalize"
              >
                Status
              </th>
              <th
                scope="col"
                className="p-5 whitespace-nowrap text-left text-sm leading-6 font-semibold capitalize"
              >
                Date
              </th>
              <th
                scope="col"
                className="p-5 whitespace-nowrap text-left text-sm leading-6 font-semibold capitalize rounded-tr-xl"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300 dark:border dark:border-gray-700">
            {sampleData.map((url) => (
              <tr
                key={url.id}
                className="bg-white dark:bg-hero transition-all duration-500"
              >
                <td className="p-5 text-sm leading-6 font-medium flex items-center space-x-4">
                  <Link to={`${DOMAIN}/${url.shortCode}`}>
                    {`${DOMAIN}/${url.shortCode}`}
                  </Link>

                  <button className="cursor-pointer">
                    <i className="fa-solid fa-copy"></i>
                  </button>
                </td>
                <td className="p-5 text-sm leading-6 font-medium">
                  <Link to={url.originalUrl}>{url.originalUrl}</Link>
                </td>
                <td className="p-5 text-sm leading-6 font-medium">
                  <QRCode size={32} value={`${DOMAIN}/${url.shortCode}`} />
                </td>
                <td className="p-5 text-sm leading-6 font-medium">
                  {url.status === Status.ACTIVE ? (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  ) : (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Inactive
                    </span>
                  )}
                </td>
                <td className="p-5 text-sm leading-6 font-medium">
                  {formatDate(url.createdAt)}
                </td>
                <td className="p-5">
                  <Link
                    to={`/url/${url.shortCode}`}
                    className="flex items-center space-x-2 whitespace-nowrap"
                  >
                    <i className="fa-solid fa-eye"></i>
                    <span>View Stats</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
}
