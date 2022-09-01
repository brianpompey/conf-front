import React from "react";
import { Table } from "flowbite-react";


const ConferenceTable = () => {
    
    return (
        <Table>
            <Table.Head>
                <Table.HeadCell>
                Product name
                </Table.HeadCell>
                <Table.HeadCell>
                Color
                </Table.HeadCell>
                <Table.HeadCell>
                Category
                </Table.HeadCell>
                <Table.HeadCell>
                Price
                </Table.HeadCell>
                <Table.HeadCell>
                <span className="sr-only">
                    Edit
                </span>
                </Table.HeadCell>
            </Table.Head>
        </Table>
        
    )
    
}

export default ConferenceTable;