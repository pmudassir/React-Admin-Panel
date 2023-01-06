import styled from "styled-components"
import "./WidgetLarge.css"

const WidgetLargeContainer = styled.div`
    flex: 2;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
`;

const WidgetLargeTitle = styled.h3`
    font-size: 22px;
    font-weight: 600;
`;

const WidgetLargeTable = styled.table`
    width: 100%;
    border-spacing: 20px;
`;

const WidgetLargeTr = styled.tr``;

const WidgetLargeTh = styled.th`
    text-align: left;
`;

const WidgetLargeTd = styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
`;

const WidgetLargeImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

const WidgetLargeName = styled.span`
    
`;

const WidgetLargeDate = styled.td`
    font-weight: 300;
`;

const WidgetLargeAmount = styled.td`
    font-weight: 300; 
`;

const WidgetLargeStatus = styled.td``;

const WidgetLarge = () => {

    const Button = ({type}) =>{
        return  <button className={"WidgetButton " + type}> {type} </button>
    }

  return (
    <WidgetLargeContainer>
        <WidgetLargeTitle>Latest Transactions</WidgetLargeTitle>
        <WidgetLargeTable>
            <WidgetLargeTr>
                <WidgetLargeTh>Customer</WidgetLargeTh>
                <WidgetLargeTh>Date</WidgetLargeTh>
                <WidgetLargeTh>Amount</WidgetLargeTh>
                <WidgetLargeTh>Status</WidgetLargeTh>
            </WidgetLargeTr>
            <WidgetLargeTr>
                <WidgetLargeTd>
                    <WidgetLargeImage src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    <WidgetLargeName>Susan Carole</WidgetLargeName>
                </WidgetLargeTd>
                <WidgetLargeDate>6 Jan 2023</WidgetLargeDate>
                <WidgetLargeAmount>$122</WidgetLargeAmount>
                <WidgetLargeStatus>
                    <Button type="Approved"/>
                </WidgetLargeStatus>
            </WidgetLargeTr>
            <WidgetLargeTr>
                <WidgetLargeTd>
                    <WidgetLargeImage src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    <WidgetLargeName>Susan Carole</WidgetLargeName>
                </WidgetLargeTd>
                <WidgetLargeDate>6 Jan 2023</WidgetLargeDate>
                <WidgetLargeAmount>$122</WidgetLargeAmount>
                <WidgetLargeStatus>
                    <Button type="Declined"/>
                </WidgetLargeStatus>
            </WidgetLargeTr>
            <WidgetLargeTr>
                <WidgetLargeTd>
                    <WidgetLargeImage src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    <WidgetLargeName>Susan Carole</WidgetLargeName>
                </WidgetLargeTd>
                <WidgetLargeDate>6 Jan 2023</WidgetLargeDate>
                <WidgetLargeAmount>$122</WidgetLargeAmount>
                <WidgetLargeStatus>
                    <Button type="Pending"/>
                </WidgetLargeStatus>
            </WidgetLargeTr>
            <WidgetLargeTr>
                <WidgetLargeTd>
                    <WidgetLargeImage src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    <WidgetLargeName>Susan Carole</WidgetLargeName>
                </WidgetLargeTd>
                <WidgetLargeDate>6 Jan 2023</WidgetLargeDate>
                <WidgetLargeAmount>$122</WidgetLargeAmount>
                <WidgetLargeStatus>
                    <Button type="Approved"/>
                </WidgetLargeStatus>
            </WidgetLargeTr>
        </WidgetLargeTable>
    </WidgetLargeContainer>
  )
}

export default WidgetLarge