import axios from 'axios';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const TableBody = ({ bill, isLoading, refetch, setBill }) => {
    const { _id, email, fullName, payableAmount, Phone } = bill;
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
                const url = `/delete-bill/${_id}`;
                const res = await axios.delete(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        "Content-type": "application/json",
                    },
                });

                console.log(res.data);
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
                <th>{_id || "Generating Id"}</th>
                <td>{fullName}</td>
                <td>{email}</td>
                <td>{Phone}</td>
                <td>{payableAmount}</td>
                <td>
                    <label
                        htmlFor="update-modal"
                        onClick={() => setBill(bill)}
                        className="btn btn-xs btn-info text-white font-bold mr-2"
                    >
                        Edit
                    </label>
                    <label
                        onClick={() => handleDeleteBill(_id)}
                        className="btn btn-xs btn-error text-white font-bold"
                    >
                        Delete
                    </label>
                </td>
            </tr>
        </>
    );
};

export default TableBody;