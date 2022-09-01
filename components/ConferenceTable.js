import React from "react";
import { Table } from "flowbite-react";


const ConferenceTable = () => {
    
    return (
        <Table hoverable={true}>
            <Table.Head>
                <Table.HeadCell>
                Name
                </Table.HeadCell>
                <Table.HeadCell>
                Date
                </Table.HeadCell>
                <Table.HeadCell>
                Time
                </Table.HeadCell>
                <Table.HeadCell>
                Minimum Donation
                </Table.HeadCell>
                <Table.HeadCell>
                Keynote
                </Table.HeadCell>
                <Table.HeadCell>
                Category
                </Table.HeadCell>
                <Table.HeadCell>
                Workshop Example
                </Table.HeadCell>
                <Table.HeadCell>
                Talk Examples
                </Table.HeadCell>
            </Table.Head>
        </Table>
        
    )
    
}

export default ConferenceTable;