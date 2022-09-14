import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center gap bg-white p-5 rounded-lg">
          <Link href="/tickets">
            <a className="text-sky-500">مشاهده لیست تیکت‌ها</a>
          </Link>
          <svg
            className="w-5 h-5 fill-sky-500"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="flex flex-row items-center gap bg-white p-5 rounded-lg">
          <Link href="/tickets/create">
            <a className="text-sky-500">ایجاد تیکت جدید</a>
          </Link>
          <svg
            className="w-5 h-5 fill-sky-500"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </main>
  );
};

export default Home;
