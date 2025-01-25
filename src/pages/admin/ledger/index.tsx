import React, { ReactElement } from "react";
import BikeDataTable from "../../../components/tables";
import { ExpanderComponentProps } from "react-data-table-component";
import ExpandedLedgerComponent from "./components/ExpandedLedger";

type DataRow = {
  title: string;
  director: string;
  year: string;
};

const LedgerPage: React.FC = () => {
  const columns = [
    {
      name: "Title",
      selector: (row: DataRow) => row.title,
    },
    {
      name: "Director",
      selector: (row: DataRow) => row.director,
    },
    {
      name: "Year",
      selector: (row: DataRow) => row.year,
    },
  ];

  const data: DataRow[] = [
    { title: "The Bicycle Thief", director: "Vittorio De Sica", year: "1948" },
    { title: "Breaking Away", director: "Peter Yates", year: "1979" },
    { title: "Premium Rush", director: "David Koepp", year: "2012" },
    {
      title: "The Flying Scotsman",
      director: "Douglas Mackinnon",
      year: "2006",
    },
    { title: "BMX Bandits", director: "Brian Trenchard-Smith", year: "1983" },
  ];

  // Define ExpandedLedger as a function that returns a ReactElement
  const ExpandedLedger = ({
    data,
  }: ExpanderComponentProps<DataRow>): ReactElement => {
    return <ExpandedLedgerComponent data={data} />;
  };

  return (
    <div className="py-10 px-4 md:px-10 dark:bg-slate-800 min-h-screen">
      <BikeDataTable
        columns={columns}
        data={data}
        expandedComponent={ExpandedLedger}
      />
    </div>
  );
};

export default LedgerPage;
