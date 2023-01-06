import styled from "styled-components"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserListContainer = styled.div`
    flex: 4;
`;

const DeleteOutlineStyle = {
    color: "red",
    cursor: "pointer"
}

const UserList = () => {

    const [data, setData] = useState(userRows)
    const handleClick = (id) =>{
        setData(data.filter((item) =>item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <img src={params.row.avatar} alt="" style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginRight: "10px"
                        }} />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button style={{
                                border: "none",
                                borderRadius: "10px",
                                padding: "5px 10px",
                                backgroundColor: "#3bb077",
                                color: "white",
                                cursor: "pointer",
                                marginRight: "20px"
                            }}>Edit</button>
                        </Link>
                        <DeleteOutline sx={DeleteOutlineStyle} onClick={()=> handleClick(params.row.id)}/>
                    </>
                )
            }
        }
    ];



    return (
        <UserListContainer>
            <div style={{ height: 527, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[8]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </UserListContainer>
    )
}

export default UserList