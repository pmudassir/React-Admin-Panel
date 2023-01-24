import { Publish } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components"
import Chart from "../components/Chart";
import { productData } from "../dummyData";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../requestMethods";

const ProductContainer = styled.div`
    flex: 4;
    padding: 20px;
`;

const ProductTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ProductTitle = styled.h1``;

const ProductAddButton = styled.button`
    width: 80px;
    border: none;
    cursor: pointer;
    background-color: teal;
    color: white;
    padding: 5px;
    font-size: 16px;
    border-radius: 5px;
`;

const ProductTop = styled.div`
    display: flex;
`;

const ProductTopLeft = styled.div`
    flex: 1;
`;

const ProductTopRight = styled.div`
    flex: 1;
    padding: 20px;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductInfoTop = styled.div`
    display: flex;
    align-items: center;
`;

const ProductInfoImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
`;

const ProductName = styled.span`
    font-weight: 600;
`;

const ProductInfoBottom = styled.div`
    margin-top: 10px;
`;

const ProductInfoItem = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
`;

const ProductInfoKey = styled.span``;

const ProductInfoValue = styled.span`
    font-weight: 300; 
`;

const ProductBottom = styled.div`
    flex: 1;
    padding: 20px;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductForm = styled.form`
    display: flex;
    justify-content: space-between;
`;
const ProductFormLeft = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductFormLeftLabel = styled.label`
    margin-bottom: 10px;
    color: gray;
`;

const ProductFormLeftInput = styled.input`
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid gray;
    padding: 5px;
`;

const ProductFormLeftSelect = styled.select`
    margin-bottom: 10px;
`;

const ProductFormLeftOption = styled.option``;

const ProductFormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductUpload = styled.div`
    display: flex;
    align-items: center;
`;

const ProductUploadImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-right: 20px;
    object-fit: cover;
`;

const ProductButton = styled.button`
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: darkblue;
    color: white;
    cursor: pointer;
    font-weight: 600;
`;

const Product = () => {
    const location = useLocation()
    const productId = location.pathname.split("/")[2]
    const [productStats, setProductStats] = useState([])
    const product = useSelector((state) => state.product.products.find((product) => product._id === productId))
    //inside the products array we tries to find the id each product and matches with the productId

    const MONTHS = useMemo(
        () => [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],[]
      )

      useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get("orders/income?pid="+ productId)
                const list = res.data.sort((a,b) => {
                    return a._id - b._id
                })
                list && list.map((item) => 
                setProductStats((prev) => [
                    ...prev,
                    { name: MONTHS[item._id - 1], Sales: item.total }
                ])
                )
            } catch (error) {}
        }
        getStats()
      }, [MONTHS, productId])

    return (
        <ProductContainer>
            <ProductTitleContainer>
                <ProductTitle>Product</ProductTitle>
                <Link to="/newProduct">
                    <ProductAddButton>Create</ProductAddButton>
                </Link>
            </ProductTitleContainer>
            <ProductTop>
                <ProductTopLeft>
                    <Chart data={productStats} title="Sales Performance" dataKey="Sales" />
                </ProductTopLeft>
                <ProductTopRight>
                    <ProductInfoTop>
                        <ProductInfoImg src={product.img} />
                        <ProductName>{product.title}</ProductName>
                    </ProductInfoTop>
                    <ProductInfoBottom>
                        <ProductInfoItem>
                            <ProductInfoKey>id:</ProductInfoKey>
                            <ProductInfoValue>{product._id}</ProductInfoValue>
                        </ProductInfoItem>
                        <ProductInfoItem>
                            <ProductInfoKey>sales:</ProductInfoKey>
                            <ProductInfoValue>5123</ProductInfoValue>
                        </ProductInfoItem>
                        <ProductInfoItem>
                            <ProductInfoKey>In stock:</ProductInfoKey>
                            <ProductInfoValue>{product.inStock}</ProductInfoValue>
                        </ProductInfoItem>
                    </ProductInfoBottom>
                </ProductTopRight>
            </ProductTop>
            <ProductBottom>
                <ProductForm>
                    <ProductFormLeft>
                        <ProductFormLeftLabel>Product Name</ProductFormLeftLabel>
                        <ProductFormLeftInput placeholder={product.title} type="text" />
                        <ProductFormLeftLabel>Product Desc</ProductFormLeftLabel>
                        <ProductFormLeftInput placeholder={product.desc} type="text" />
                        <ProductFormLeftLabel>Product Price</ProductFormLeftLabel>
                        <ProductFormLeftInput placeholder={product.price} type="text" />
                        <ProductFormLeftLabel>In Stock</ProductFormLeftLabel>
                        <ProductFormLeftSelect name="inStock" id="inStock">
                            <ProductFormLeftOption value="true">Yes</ProductFormLeftOption>
                            <ProductFormLeftOption value="false">No</ProductFormLeftOption>
                        </ProductFormLeftSelect> 
                    </ProductFormLeft>
                    <ProductFormRight>
                        <ProductUpload>
                            <ProductUploadImage src={product.img} />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </ProductUpload>
                        <ProductButton>Update</ProductButton>
                    </ProductFormRight>
                </ProductForm>
            </ProductBottom>
        </ProductContainer>
    )
}

export default Product