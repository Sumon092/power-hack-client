
const Dashboard = () => {

  return (
    <>
      <div className="mb-4 py-2 px-8 overflow-x-auto bg-base-100">
        <div className=" flex gap-x-3 min-w-max  justify-between items-center">
          <form className="flex gap-2">
            <label className="text-xl">Billing</label>
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded border  focus:bg-transparent text-base outline-none py-1 px-3"
            />
          </form>
          <div>
            <label
              htmlFor="bill-modal"
              className="btn btn-sm btn-secondary text-white font-bold mt-2"
            >
              Add New Bill
            </label>
          </div>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
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

          </tbody>
        </table>
      </div>
      <div className="text-end mr-28 my-4 pagination">
      </div>
    </>
  );
};

export default Dashboard;
