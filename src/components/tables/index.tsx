import DataTable from "react-data-table-component";
import { useGetCurrentTheme } from "../../hooks/useGetCurrentTheme";

// Define the type for a data row
type DataRow = {
  title: string;
  director: string;
  year: string;
};

// Define the type for the columns
type Column = {
  name: string;
  selector: (row: DataRow) => string | number;
  sortable?: boolean;
  cell?: (row: DataRow) => JSX.Element;
};

// Define the type for the expanded component
type ExpandedComponent = (data: { data: DataRow }) => JSX.Element;

// Define the props for the BikeDataTable component
interface BikeDataTableProps {
  columns: Column[];
  data: DataRow[];
  expandedComponent: ExpandedComponent;
}

function BikeDataTable({
  columns,
  data,
  expandedComponent,
}: BikeDataTableProps) {
  const theme = useGetCurrentTheme();
  return (
    <DataTable
      highlightOnHover
      className="rounded-md"
      columns={columns}
      data={data}
      expandableRows
      expandableRowsComponent={expandedComponent}
      theme={theme === "dark" ? "dark" : "light"}
    />
  );
}

export default BikeDataTable;
