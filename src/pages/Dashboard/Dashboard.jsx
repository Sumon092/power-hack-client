import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { RequireContext } from "../../App";
import BillingModal from "../../components/Modals/BillingModal";
import UpdateModal from "../../components/Modals/UpdateModal";
import TableBody from "../../components/TableBody/TableBody";

const Dashboard = () => {
  const { setTotal } = useContext(RequireContext);
  const [page, setPage] = useState(0);
  const [size] = useState(10);
  const [bill, setBill] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [query, setQuery] = useState('')

  const { data, isLoading, refetch: refetch2 } = useQuery(["bills", page, size], () =>
    axios.get(`https://power-hack-server-drab.vercel.app/api/billing-list?page=${page}&size=${size}`)
      .then((res) => res.data)
  );

  const { data: bills, refetch } = useQuery("allBill", () =>
    axios.get(`https://power-hack-server-drab.vercel.app/api/all-bill`).then((res) =>
      res.data)
  );

  useEffect(() => {

    const totalPaid = bills?.reduce(
      (acc, item) => acc + parseInt(item?.payableAmount),
      0
    );
    setTotal(totalPaid);
    refetch();
  }, [bills, setTotal, refetch, isLoading]);

  useEffect(() => {
    fetch(`https://power-hack-server-drab.vercel.app/api/billing-list`)
      .then((res) => res.json())
      .then((item) => {
        // console.log(item);
        const count = parseInt(item?.length)
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
        refetch2();
      });
  }, [refetch2]);

  if (data === undefined && isLoading) {
    <p>Loading...</p>
  }

  return (
    <>
      <div className="mb-2 py-2 px-5 overflow-x-auto bg-base-100 h-20 flex justify-between items-center">
        <div className=" flex gap-x-3 min-w-max  justify-between items-center">
          <form className="flex gap-3">
            <label className="font-bold text-xl">Billings</label>
            <input
              type="text"
              name='search'
              placeholder="Search"
              className="w-full rounded border  focus:bg-transparent text-base outline-none py-1 px-3 input-primary"
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>

        </div>
        <div>
          <label
            htmlFor="add-billing-modal"
            className="btn btn-sm btn-primary text-white font-bold mt-2"
          >
            Add New Bill
          </label>
          <UpdateModal refetch={refetch} bill={bill} setBill={setBill} />
          <BillingModal refetch={refetch} />
        </div>
      </div>
      <div className="overflow-x-auto px-12">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Billing ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Paid Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {Array.isArray(data) && !data === isLoading &&
              data?.slice(0).reverse().filter((bill) => bill?.email?.toLowerCase().includes(query) || bill?.fullName?.toLowerCase().includes(query) || bill?.Phone?.toLowerCase().includes(query)).map(bill => (
                <TableBody
                  bill={bill}
                  key={bill._id}
                  isLoading={isLoading}
                  refetch={refetch}
                  setBill={setBill}
                />
              ))}

          </tbody>
        </table>
      </div>
      <div className="text-center pagination">
        {pageCount > 0 &&
          [...Array(pageCount).keys()].map((num, index) => (
            <button
              key={index}
              onClick={() => setPage(num)}
              className="btn btn-md btn-accent font-bold mr-1 mt-5 mb-2"
            >
              {num + 1}
            </button>
          ))

        }

      </div>
    </>
  );
};

export default Dashboard;
