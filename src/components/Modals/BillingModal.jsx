import React from 'react';
import ModalsForm from './ModalsForm'

const BillingModal = () => {
    return (
        <div >
            <input type="checkbox" id="add-billing-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-2xl font-folder text-center my-4 uppercase font-semibold">
                        Add New Bill
                    </h3>
                    <ModalsForm />
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