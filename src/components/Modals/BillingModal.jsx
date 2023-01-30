import axios from 'axios';
import React from 'react';
import { toast } from 'react-hot-toast';
import ModalsForm from './ModalsForm'

const BillingModal = ({ refetch }) => {
    const handleAddAndUpdateBill = (data) => {
        let billInfo = {
            fullName: data.fullName,
            Phone: data.phone,
            email: data.email,
            payableAmount: data.payableAmount
        };

        axios.post("https://power-hack-server-drab.vercel.app/api/add-billing", billInfo, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((result) => {
                if (result.data.status === 200) {
                    console.log(result.data.message);
                    toast.success(result.data.message);
                    refetch();
                } else {
                    toast.error(result.data.message);
                    refetch();
                }
            });
    };
    return (
        <div >
            <input type="checkbox" id="add-billing-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-2xl font-folder text-center my-4 uppercase font-semibold">
                        Add New Bill
                    </h3>
                    <ModalsForm handleAddAndUpdateBill={handleAddAndUpdateBill} />
                    <label
                        htmlFor="add-billing-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                </div>
            </div>
        </div>
    );
};

export default BillingModal;