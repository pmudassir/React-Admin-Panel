import styled from "styled-components"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductListContainer = styled.div`
    flex: 4;
    padding: 20px;
`;

const DeleteOutlineStyle = {
    color: "red",
    cursor: "pointer"
};


const ProductList = () => {

    const [data, setData] = useState(productRows)
    
    const handleClick = (id) =>{
        setData(data.filter((item) =>item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <img src={params.row.img} alt="" style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginRight: "10px"
                        }} />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
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
    <ProductListContainer>
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
    </ProductListContainer>
  )
}

export default ProductList