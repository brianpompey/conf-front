import React from "react";
// import { useTable } from "react-table";

const ConferenceTable = () => {
    
    return (
        <div>
            <h2>Table</h2>
            <table width={'100%'}>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Minimum Donation</th>
                    <th>Keynote</th>
                    <th>Category</th>
                    <th>Workshop Example</th>
                    <th>Talk Example</th>
                </tr>
            </table>

        </div>
        
    )
    
}

export default ConferenceTable;