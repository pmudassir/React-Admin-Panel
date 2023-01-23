import styled from "styled-components"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProduct, getProducts } from "../redux/apiCalls";

const ProductListContainer = styled.div`
    flex: 4;
    padding: 20px;
`;

const DeleteOutlineStyle = {
    color: "red",
    cursor: "pointer"
};


const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products)

    useEffect(() => {
        getProducts(dispatch)
    },[dispatch])

    const handleClick = (id) => {
        deleteProduct(id, dispatch)
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
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
                        {params.row.title}
                    </div>
                )
            }
        },
        { field: 'inStock', headerName: 'Stock', width: 200 },
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
                        <Link to={"/product/" + params.row._id}>
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
                        <DeleteOutline sx={DeleteOutlineStyle} onClick={() => handleClick(params.row._id)} />
                    </>
                )
            }
        }
    ];

    return (
        <ProductListContainer>
            <div style={{ height: 527, width: '100%' }}>
                <DataGrid
                    rows={products}
                    columns={columns}
                    getRowId={(row) => row._id}
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