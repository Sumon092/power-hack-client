import axios from 'axios';
import React from 'react';
import { toast } from 'react-hot-toast';
import ModalsForm from './ModalsForm'

const UpdateModal = ({ refetch, bill, setBill }) => {
    const { _id } = bill || {};

    const handleAddAndUpdateBill = (data) => {
        let updateInfo = {
            fullName: data.fullName,
            Phone: data.phone,
            email: data.email,
            payableAmount: data.payableAmount
        };

        axios.put(`https://power-hack-server-drab.vercel.app/api/update-billing/${_id}`, updateInfo, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-type": "application/json",
            },
        })
            .then(res => {
                refetch();
                setBill(null);
                console.log(res.data);
                toast.success("Bill updated successfully")
            })
            .catch(error => {
                console.error(error);
            });

    };

    return (
        <div >
            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-2xl font-folder text-center my-4 uppercase font-semibold">
                        update a Bill
                    </h3>
                    <ModalsForm handleAddAndUpdateBill={handleAddAndUpdateBill} />
                    <label
                        htmlFor="update-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;