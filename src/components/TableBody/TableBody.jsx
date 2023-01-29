import React, { useEffect } from 'react';

const TableBody = ({ bill, isLoading, refetch, setBill }) => {
    const { _id, email, fullName, payableAmount, Phone } = bill;

    useEffect(() => {
        setBill(bill)
    })
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
                        onClick={setBill(bill)}
                        className="btn btn-xs btn-info text-white font-bold mr-2"
                    >
                        Edit
                    </label>
                    <label
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