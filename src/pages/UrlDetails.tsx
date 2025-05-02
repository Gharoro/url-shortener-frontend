import QRCode from "react-qr-code";
import { Link, useParams } from "react-router-dom";
import { DOMAIN } from "../config/env";
import { Status } from "../utils/enum";
import { formatDate } from "../utils/helpers";
import { sampleData } from "../utils/constants";

export default function UrlDetails() {
  const { code } = useParams();
  const url = sampleData.find((data) => data.shortCode === code);

  return (
    <div className="mx-auto flex flex-col items-center py-10 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full sm:w-5/6">
        <Link
          to="/"
          className="rounded-lg bg-white border border-primary px-3 py-2 text-sm font-semibold text-primary space-x-2"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back to Home</span>
        </Link>

        <h1 className="font-bold text-2xl my-8">URL Statistics</h1>

        <div className="p-4 border border-gray-600 rounded-md my-8 space-y-2">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:space-x-4 space-x-0 space-y-4 lg:space-y-0">
            <h2 className="text-2xl">{`${DOMAIN}/${url?.shortCode}`}</h2>
            <h6 className="text-gray-400 block lg:hidden">
              Original URL: {url?.originalUrl}{" "}
            </h6>

            <div className="flex items-center space-x-2">
              <button className="cursor-pointer bg-gray-300 dark:bg-dark px-4 py-3 rounded-md">
                <i className="fa-solid fa-copy text-base"></i>
              </button>
              <QRCode size={44} value={`${DOMAIN}/${url?.shortCode}`} />
            </div>
          </div>
          <h6 className="text-gray-400 hidden lg:block">
            Original URL: {url?.originalUrl}{" "}
          </h6>
        </div>

        <div className="flex flex-col lg:flex-row space-x-0 space-y-4 lg:space-y-0 lg:space-x-2 lg:items-center shadow-md">
          <div className="bg-dark w-full p-5 rounded-md space-y-2">
            <h6 className="text-gray-400">Total Clicks</h6>
            <p className="text-2xl text-white">{url?.visitCount}</p>
          </div>
          <div className="bg-dark w-full p-5 rounded-md space-y-2">
            <h6 className="text-gray-400">Total Searches</h6>
            <p className="text-2xl text-white">{url?.searchCount}</p>
          </div>
          <div className="bg-dark w-full p-5 rounded-md space-y-2">
            <h6 className="text-gray-400">Status</h6>
            <p className="text-2xl">
              {url?.status === Status.ACTIVE ? (
                <span className="px-3 py-1.5 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              ) : (
                <span className="px-3 py-1.5 inline-flex text-xs font-semibold rounded-full bg-red-100 text-red-800">
                  Inactive
                </span>
              )}
            </p>
          </div>
          <div className="bg-dark w-full p-5 rounded-md space-y-2">
            <h6 className="text-gray-400">Date Created</h6>
            <p className="text-2xl text-white">
              {formatDate(url?.createdAt ?? "")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
