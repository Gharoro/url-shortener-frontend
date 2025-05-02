export default function Hero() {
  return (
    <div className="mx-auto flex flex-col items-center py-10 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full sm:w-2/3 text-center space-y-6">
        <h1 className="text-3xl font-extrabold leading-snug">
          Transform Your Long URLs into Short Links
        </h1>
        <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Simplify your links with our powerful URL shortener. Track clicks,
          view search count, QR Code and manage your links effectively.
        </p>

        <div className="shadow-lg p-6 dark:border dark:border-dark rounded-md flex flex-col lg:flex-row lg:items-center lg:space-x-2 space-x-0 space-y-4 lg:space-y-0">
          <input
            className="p-4 rounded-md dark:bg-input-gray w-full lg:w-5/6 shadow-sm outline:none focus:outline-none"
            placeholder="Paste your long URL here"
            name="url"
          />
          <button className="bg-primary text-white text-base font-semibold p-4 rounded-md w-full lg:w-1/6 cursor-pointer">
            Shorten URL
          </button>
        </div>
      </div>
    </div>
  );
}
