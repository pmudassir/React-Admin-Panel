import styled from "styled-components"

const AddProductContainer = styled.div`
    flex: 4;
    padding: 20px;
`;

const AddProductTitle = styled.h1``;

const AddProductForm = styled.form`
    margin-top: 10px;
`;

const AddProductItem = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

const AddProductLabel = styled.label`
    margin-bottom: 10px;
    color: gray;
    font-weight: 600;
`;

const AddProductInput = styled.input`
    padding: 10px;
`;

const AddProductSelect = styled.select`
    padding: 10px;
`;

const AddProductOption = styled.option``;

const AddProductButton = styled.button`
    background-color: darkblue;
    color: white;
    width: 100px;
    border: none;
    cursor: pointer;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
`;

const AddProduct = () => {
    return (
        <AddProductContainer>
            <AddProductTitle>Add Product</AddProductTitle>
            <AddProductForm>
                <AddProductItem>
                    <AddProductLabel>Image</AddProductLabel>
                    <AddProductInput type="file" id="file" />
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Title</AddProductLabel>
                    <AddProductInput placeholder="Apple Airpods" input="text" />
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Description</AddProductLabel>
                    <AddProductInput placeholder="description" input="text" />
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Price</AddProductLabel>
                    <AddProductInput placeholder="100" input="text" />
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Category</AddProductLabel>
                    <AddProductInput placeholder="jeans, skirt" input="text" />
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Stock</AddProductLabel>
                    <AddProductSelect>
                        <AddProductOption value="true">Yes</AddProductOption>
                        <AddProductOption value="false">No</AddProductOption>
                    </AddProductSelect>
                </AddProductItem>
            </AddProductForm>
            <AddProductButton>Create</AddProductButton>
        </AddProductContainer>
    )
}

export default AddProduct