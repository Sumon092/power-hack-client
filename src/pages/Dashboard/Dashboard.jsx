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
  const [size, setSize] = useState(10);
  const [bill, setBill] = useState(null);

  const { data, isLoading, refetch } = useQuery(["bills", page, size], () =>
    axios.get(`/billing-list?page=${page}&size=${size}`)
      .then((res) => res.data)
  );


  const { data: bills } = useQuery("allBill", () =>
    axios.get(`/all-bill`).then((res) =>
      res.data)
  );

  useEffect(() => {
    const totalPaid = bills?.reduce(
      (acc, item) => acc + parseInt(item.payableAmount),
      0
    );
    setTotal(totalPaid);
    refetch();
  }, [bills, setTotal, refetch]);

  if (isLoading) <p>Loading...</p>

  return (
    <>
      <div className="mb-2 py-2 px-5 overflow-x-auto bg-base-100">
        <div className=" flex gap-x-3 min-w-max  justify-between items-center">
          <form className="flex gap-3">
            <label className="font-bold text-xl">Billings</label>
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded border  focus:bg-transparent text-base outline-none py-1 px-3 input-primary"
            />
          </form>
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
            {
              data?.map(bill => <TableBody
                bill={bill}
                key={bill._id}
                isLoading={isLoading}
                refetch={refetch}
                setBill={setBill}
              />)
            }

          </tbody>
        </table>
      </div>
      <div className="text-end mr-28 my-4 pagination">
      </div>
    </>
  );
};

export default Dashboard;
