import React, {Component} from "react"
import {Table, Button} from "reactstrap"

class App extends Component {
    
    state = {
        isLoading:false,
        invoices: 
            [
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

      } 
    render() { 
        const isLoading = this.state.isLoading;
        const invoices= this.state.invoices;
        

            if (isLoading)
            return <div>Loading...</div>;

        return (
           <div className="conatainer border border-secondary rounded center">
            <div className="row">
            <div className="col-12">
             <h1>Pending Invoices- The Test Company</h1>
            </div>
            </div>
            <div Classname="row">
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
                    {this.state.invoices.length === 0 ? <td colSpan="9">All caught up!</td>: invoices}
                    </tbody>
                </Table>
                </div>
            </div>
           </div>
        );
    }
}
 
export default App;