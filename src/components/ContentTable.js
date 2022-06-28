import React from "react";
import styles from "./ContentTable.module.css";
import { FaSort } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";
import TableIcons from "./TableIcons";




const ContentTable = () => {
  const sortingOrder = ["asc", "desc"];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "school", headerName: "School/Tuition", width: 223,
  renderCell:(params)=>{
    return (<div>
      School Name
      <TableIcons/></div>)
  } },
    { field: "country", headerName: "Country", width: 130 },
    {
      field: "email",
      headerName: "Email",
      width: 155,
    },
    {
      field: "phone",
      headerName: "Phone Number",
  
      width: 160,
    },
    { field: "teachers", headerName: "Teachers", width: 125 },
    { field: "address", headerName: "Address", width: 155 },
    { field: "postal", headerName: "Postal Code", width: 125 },
  ];

  const rows = [
    {
      id: 1,
      school: "Tuition (Tuition Centre)",
      country: "Singapore",
      email: "test@gmail.com",
      phone: 34632235,
      teachers:2,
      address:'5B Trenggau Str..',
      postal:543214
    },
    {
      id: 2,
      school: "Bedok Secondary School",
      country: "China",
      email: "test@gmail.com",
      phone: 34632235,
      teachers:2,
      address:'5B Trenggau Str..',
      postal:543214
    },
    {
      id: 3,
      school: "Bedok Secondary School",
      country: "China",
      email: "test@gmail.com",
      phone: 34632235,
      teachers:2,
      address:'5B Trenggau Str..',
      postal:543214
    },
    {
      id: 4,
      school: "Bedok Secondary School",
      country: "China",
      email: "test@gmail.com",
      phone: 34632235,
      teachers:2,
      address:'5B Trenggau Str..',
      postal:543214
    },
    {
      id: 5,
      school: "Bedok Secondary School",
      country: "China",
      email: "test@gmail.com",
      phone: 34632235,
      teachers:2,
      address:'5B Trenggau Str..',
      postal:543214
    },
    {
      id: 6,
      school: "Bedok Secondary School",
      country: "China",
      email: "test@gmail.com",
      phone: 34632235,
      teachers:2,
      address:'5B Trenggau Str..',
      postal:543214
    },
    {
      id: 7,
      school: "Bedok Secondary School",
      country: "China",
      email: "test@gmail.com",
      phone: 34632235,
      teachers:2,
      address:'5B Trenggau Str..',
      postal:543214
    },
    {
      id: 8,
      school: "Bedok Secondary School",
      country: "China",
      email: "test@gmail.com",
      phone: 34632235,
      teachers:2,
      address:'5B Trenggau Str..',
      postal:543214
    },
    {
      id: 9,
      school: "Bedok Secondary School",
      country: "China",
      email: "test@gmail.com",
      phone: 34632235,
      teachers:2,
      address:'5B Trenggau Str..',
      postal:543214
    },
  ];

  return (
    <div className={styles.container}>
      <DataGrid
      sx={{'.MuiDataGrid-columnHeaders':{
        backgroundColor:'var(--unnamed-color-706fa7)',
        font: 'var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) 23px/13px var(--unnamed-font-family-nunito)',
        letterSpacing:'var(--unnamed-character-spacing-0-01)',
        color: 'var(--unnamed-color-ffffff)',
      },
      '.MuiDataGrid-columnSeparator': {
        visibility: 'hidden',
    },
    '.MuiButtonBase-root svg path':{
      backgroundColor:'var(--unnamed-color-ffffff)'
    }
   }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableColumnFilter
        sortingOrder={sortingOrder}
        disableColumnMenu
        components={{
          ColumnSortedDescendingIcon: FaSort,
          ColumnSortedAscendingIcon: FaSort,
        }}
      />
    </div>
  );
};

export default ContentTable;
