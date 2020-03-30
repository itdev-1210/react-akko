import React from "react";
import { render } from "react-dom";
import matchSorter from 'match-sorter';
import { makeData } from "./utils";
// Import React Table
import ReactTable from "react-table";
import './index.scss';

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }
    render() {
        const { data } = this.state;
        return (
            <div className="container">
                <ReactTable
                    data={data}
                    showFilters={true}
                    filterable
                    filterAll
                    defaultFilterMethod={(filter, row) =>
                        String(row[filter.id]) === filter.value}
                    columns={[
                        {
                            Header: "First Name",
                            id: "firstName",
                            accessor: d => d.firstName,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["firstName"] }),
                            filterAll: true
                        },
                        {
                            Header: "Last Name",
                            id: "lastName",
                            accessor: d => d.lastName,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, { keys: ["lastName"] }),
                            filterAll: true
                        },
                        {
                            Header: "Age",
                            accessor: "age"
                        },
                        {
                            Header: "Over 21",
                            accessor: "age",
                            id: "over",
                            Cell: ({ value }) => (value >= 21 ? "Yes" : "No"),
                            filterMethod: (filter, row) => {
                                if (filter.value === "all") {
                                    return true;
                                }
                                if (filter.value === "true") {
                                    return row[filter.id] >= 21;
                                }
                                return row[filter.id] < 21;
                            },
                            Filter: ({ filter, onChange }) =>
                                <select
                                    onChange={event => onChange(event.target.value)}
                                    style={{ width: "100%" }}
                                    value={filter ? filter.value : "all"}
                                >
                                    <option value="all">Show All</option>
                                    <option value="true">Can Drink</option>
                                    <option value="false">Can't Drink</option>
                                </select>
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
                <br />
            </div>
        );
    }
}

export default Index;      