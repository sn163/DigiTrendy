type SearchBarProps = {
  value?: string;
  setValue: (arg: string) => void;
};

export default function SearchBar({ value, setValue }: SearchBarProps) {
  return (
    <form className="ml-auto max-w-md">
      <label
        htmlFor="search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          id="search"
          type="text"
          placeholder="Search Articles..."
          className="block w-full rounded-3xl border border-gray-400 bg-white p-2 pe-44 ps-4 text-center text-sm text-gray-900"
          value={value}
          onChange={(event) => {
            event.preventDefault();
            setValue(event.target.value);
          }}
        />
      </div>
    </form>
  );
}
