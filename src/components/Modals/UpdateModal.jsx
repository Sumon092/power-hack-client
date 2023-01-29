import React from 'react';
import ModalsForm from './ModalsForm'

const updateModal = () => {
    return (
        <div >
            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-2xl font-folder text-center my-4 uppercase font-semibold">
                        update a Bill
                    </h3>
                    <ModalsForm />
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

export default updateModal;