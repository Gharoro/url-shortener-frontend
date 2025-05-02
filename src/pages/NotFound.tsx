import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto flex flex-col items-center py-10 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full sm:w-2/3 text-center space-y-20">
        <div className="space-y-6">
          <h1 className="text-3xl font-extrabold">404 Not Found</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            We can't seem to find the page you are looking for
          </p>
        </div>

        <Link
          to="/"
          className="bg-primary my-12 text-white text-base font-semibold p-4 rounded-md w-full lg:w-1/6 cursor-pointer"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
