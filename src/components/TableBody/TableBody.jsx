import React from 'react';

const TableBody = () => {
    return (
        <>
            <tr>
                <th>_id || "Generating Id"</th>
                <td>fullName</td>
                <td>email</td>
                <td>phone</td>
                <td>paidAmount</td>
                <td>
                    <label
                        htmlFor="update-modal"
                        className="btn btn-sm btn-info text-white font-bold mr-2"
                    >
                        Edit
                    </label>
                    <label
                        className="btn btn-sm btn-error text-white font-bold"
                    >
                        Delete
                    </label>
                </td>
            </tr>
        </>
    );
};

export default TableBody;