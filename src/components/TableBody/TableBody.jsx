import React from 'react';

const TableBody = ({ bill, isLoading, refetch, setBill }) => {
    const { _id, email, fullName, payableAmount, Phone } = bill;
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