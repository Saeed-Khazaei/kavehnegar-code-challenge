import type { NextPage } from "next";
import Link from "next/link";
import Status from "../../components/Status";
import Wrapper from "../../components/Wrapper";

const fakeData = [
  {
    id: 1,
    received: new Date(),
    title: "فاکتور رسمی",
    message: "متن تیکت درخواست شده",
    status: "pending",
    user: "علی صالحی",
    support: "",
    supportMessage: "",
  },
  {
    id: 2,
    received: new Date(),
    title: "فاکتور رسمی",
    message: "متن تیکت درخواست شده",
    status: "answered",
    user: "علی صالحی",
    support: "علی دایی",
    supportMessage: "",
  },
];

const Tickets: NextPage = () => {
  const data = new Date();
  console.log("new Date", data.toLocaleDateString("fa-IR"));

  return (
    <Wrapper title="لیست تیکت‌ها">
      <div className="overflow-x-auto relative bg-white p-2 rounded-lg ">
        <table className="w-full  text-sm text-right text-gray-500 dark:text-gray-400 border-separate border-spacing-y-2.5	">
          <thead className="text-md font-bold text-gray-700 ">
            <tr className="bg-gray-100 dark:bg-gray-700 dark:text-gray-400 ">
              <th
                scope="col"
                className="py-3 px-6 rtl:rounded-r-lg ltr:rounded-l-lg whitespace-nowrap "
              >
                تاریخ
              </th>
              <th scope="col" className="py-3 px-6 whitespace-nowrap">
                موضوع تیکت
              </th>
              <th
                scope="col"
                className="py-3 px-6 whitespace-nowrap text-center"
              >
                تاریخ به روز رسانی
              </th>
              <th
                scope="col"
                className="py-3 px-6  rtl:rounded-l-lg ltr:rounded-r-lg whitespace-nowrap"
              >
                وضعیت تیکت
              </th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((row) => (
              <tr
                key={row.id}
                className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg group rounded-lg"
              >
                <td className="rtl:first:rounded-r-lg ltr:first:rounded-l-lg py-4 px-6 whitespace-nowrap ">
                  {row.received.toLocaleDateString("fa-IR")}
                </td>
                <td className="py-4 px-6 whitespace-nowrap">{row.title}</td>
                <td className="py-4 px-6 whitespace-nowrap text-center">
                  3 روز پیش
                </td>
                <td className="rtl:last:rounded-l-lg ltr:last:rounded-r-lg py-4 px-6 whitespace-nowrap">
                  <div className="flex flex-row justify-between	">
                    <div className="flex flex-row items-center gap-2">
                      <Status status={row.status} />
                    </div>
                    <div className="flex flex-row justify-between md:invisible group-hover:visible	mr-5">
                      <div className="flex flex-row items-center gap">
                        <Link href="/tickets/1">
                          <a className="text-sky-500">مشاهده جزئیات</a>
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
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Tickets;
