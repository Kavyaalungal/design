import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Invoice.css';

const Invoice = () => {
    const navigate = useNavigate();

    const navigateToEditInvoice = () => {
        navigate('/edit');
    };

    const navigateToPendingInvoice = () => {
        navigate('/pending');
    };

    return (
        <div className="containers">
            <button className="btn1" onClick={navigateToEditInvoice}>Edit Invoice</button>
            <button className="btn1" onClick={navigateToPendingInvoice}>Pending Invoice</button>
        </div>
    );
};

export default Invoice;
