import React, {Component, useState} from "react"
import {Table, Button} from "reactstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faImage, faMoneyCheckAlt, faSearchDollar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

function App() {
    const [isLoading, setIsLoading]=useState(false)
    const [remove, setRemove]=useState([])
    const [invoices, setInvoices] = useState([
        {
          id: "100",
          Vendor: "Hankook",
          Amount: "$1800",
          Invoice: "12345",
          Date: "18-01-2019",
        },
        {
          id: "200",
          Vendor: "Hankook",
          Amount: "$1800",
          Invoice: "12345",
          Date: "18-01-2019",
        },
        {
          id: "300",
          Vendor: "Hankook",
          Amount: "$1800",
          Invoice: "12345",
          Date: "18-01-2019",
        },
      ]);
    
      const removeInvoice = (id) => {
        const updatedInvoices = invoices.filter((i) => i.id !== id);
        setRemove((prevRemove) => [...prevRemove, id]);
        setInvoices(updatedInvoices);
      };
              
        let allInvoices=invoices.map((invoice) =>
        <tr key={invoice.id}>
            <td>{invoice.Vendor}</td>
            <td>{invoice.Amount}</td>
            <td>{invoice.Invoice}</td>
            <td>{invoice.Date}</td>
            <td><Button className="btn btn-lg btn-success" onClick={()=> removeInvoice(invoice.id)}> <FontAwesomeIcon icon={faThumbsUp} />OK </Button></td>
            <td><Button className="btn btn-lg btn-danger" onClick={()=> removeInvoice(invoice.id)}> <FontAwesomeIcon icon={faThumbsDown} />Reject </Button></td>
            <td><Button className="btn btn-lg btn-info" onClick={()=> removeInvoice(invoice.id)}> <FontAwesomeIcon icon={faMoneyCheckAlt}/> 50% </Button></td>
            <td><Button className="btn btn-lg btn-warning" onClick={()=> removeInvoice(invoice.id)}><FontAwesomeIcon icon={faSearchDollar} /> ?? </Button></td>
            <td><Button className="btn btn-lg btn-warning" onClick={()=> removeInvoice(invoice.id)}><FontAwesomeIcon icon={faImage} /> Image </Button></td>

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
                    <tr>
                        <th scope="row">Vendor</th>
                        <th scope="row">Amount</th>
                        <th scope="row">Invoice #</th>
                        <th scope="row">Date</th>
                        <th colSpan="4">Actions</th>
                        <th scope="row"> Image</th>
                    </tr>
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