import axios from 'axios';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";

const TableBody = ({ bill, isLoading, refetch, setBill }) => {
    const _id = bill?._id;
    const handleDeleteBill = async (_id) => {
        try {
            const confirm = await Swal.fire({
                title: "Are you sure?",
                text: "You can't revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#08ca5f",
                cancelButtonColor: "#f50c0c",
                confirmButtonText: "Yes, I will delete it!",
            });

            if (confirm.isConfirmed) {
                const url = `http://localhost:8000/api/delete-bill/${_id}`;
                const res = await axios.delete(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        "Content-type": "application/json",
                    },
                });

                // console.log(res.data);
                refetch();
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <tr>
                <th>{bill?._id || "Generating Id"}</th>
                <td>{bill?.fullName}</td>
                <td>{bill?.email}</td>
                <td>{bill?.Phone}</td>
                <td>{bill?.payableAmount}</td>
                <td className='flex'>
                    <label
                        htmlFor="update-modal"
                        onClick={() => setBill(bill)}
                        className="text-info font-bold mr-2 text-xl"
                    >
                        {<FaPencilAlt />}
                    </label>
                    <label
                        onClick={() => handleDeleteBill(_id)}
                        className=" text-red-600 text-xl font-bold mx-5"
                    >
                        {<FaRegTrashAlt />}
                    </label>
                </td>
            </tr>
        </>
    );
};

export default TableBody;