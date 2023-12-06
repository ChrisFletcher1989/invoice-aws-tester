import React, {Component, useState} from "react"
import {Table, Button} from "reactstrap"

function App() {
    const [isLoading, setIsLoading]=useState(false)
        let invoices= [
                {
                    "id": "100",
                    "Vendor": "Hankook",
                    "Amount": "$1800",
                    "Invoice": "12345",
                    "Date": "18-01-2019"
                },
                {
                    "id": "100",
                    "Vendor": "Hankook",
                    "Amount": "$1800",
                    "Invoice": "12345",
                    "Date": "18-01-2019"
                },
                {
                    "id": "100",
                    "Vendor": "Hankook",
                    "Amount": "$1800",
                    "Invoice": "12345",
                    "Date": "18-01-2019"
                }
            ]
        let allInvoices=invoices.map((invoice) =>
        <tr key={invoice.id}>
            <td>{invoice.Vendor}</td>
            <td>{invoice.Amount}</td>
            <td>{invoice.Invoice}</td>
            <td>{invoice.Date}</td>
         </tr>
        )
            if (isLoading)
            return <div>Loading...</div>;

        return (
           <div className="conatainer border border-secondary rounded center">
            <div className="row">
            <div className="col-12">
             <h1>Pending Invoices- The Test Company</h1>
            </div>
            </div>
            <div className="row">
                <div className=".col-xs-12 center text-center">
                <Table responsive striped bordered hover>
                    <thead>
                        <th>Vendor</th>
                        <th>Amount</th>
                        <th>Invoice #</th>
                        <th>Date</th>
                        <th colSpan="4">Actions</th>
                        <th> Image</th>
                    </thead>
                    <tbody>
                    {invoices.length === 0 ? <td colSpan="9">All caught up!</td>: allInvoices}
                    </tbody>
                </Table>
                </div>
            </div>
           </div>
        );
    }

 
export default App;