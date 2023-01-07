import { Publish } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components"
import Chart from "../components/Chart";
import { productData } from "../dummyData";

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
                    <Chart data={productData} title="Sales Performance" dataKey="Sales" />
                </ProductTopLeft>
                <ProductTopRight>
                    <ProductInfoTop>
                        <ProductInfoImg src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361" />
                        <ProductName>Apple Airpods</ProductName>
                    </ProductInfoTop>
                    <ProductInfoBottom>
                        <ProductInfoItem>
                            <ProductInfoKey>id:</ProductInfoKey>
                            <ProductInfoValue>123</ProductInfoValue>
                        </ProductInfoItem>
                        <ProductInfoItem>
                            <ProductInfoKey>sales:</ProductInfoKey>
                            <ProductInfoValue>5123</ProductInfoValue>
                        </ProductInfoItem>
                        <ProductInfoItem>
                            <ProductInfoKey>active:</ProductInfoKey>
                            <ProductInfoValue>yes</ProductInfoValue>
                        </ProductInfoItem>
                        <ProductInfoItem>
                            <ProductInfoKey>In stock:</ProductInfoKey>
                            <ProductInfoValue>no</ProductInfoValue>
                        </ProductInfoItem>
                    </ProductInfoBottom>
                </ProductTopRight>
            </ProductTop>
            <ProductBottom>
                <ProductForm>
                    <ProductFormLeft>
                        <ProductFormLeftLabel>Product Name</ProductFormLeftLabel>
                        <ProductFormLeftInput placeholder="Apple Airpods" type="text"/>
                        <ProductFormLeftLabel>In Stock</ProductFormLeftLabel>
                        <ProductFormLeftSelect name="inStock" id="inStock">
                            <ProductFormLeftOption value="yes">Yes</ProductFormLeftOption>
                            <ProductFormLeftOption value="no">No</ProductFormLeftOption>
                        </ProductFormLeftSelect>
                        <ProductFormLeftLabel>Active</ProductFormLeftLabel>
                        <ProductFormLeftSelect name="active" id="active">
                            <ProductFormLeftOption value="yes">Yes</ProductFormLeftOption>
                            <ProductFormLeftOption value="no">No</ProductFormLeftOption>
                        </ProductFormLeftSelect>
                    </ProductFormLeft>
                    <ProductFormRight>
                        <ProductUpload>
                            <ProductUploadImage src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361"/>
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display: "none"}}/>
                        </ProductUpload>
                        <ProductButton>Update</ProductButton>
                    </ProductFormRight>
                </ProductForm>
            </ProductBottom>
        </ProductContainer>
    )
}

export default Product