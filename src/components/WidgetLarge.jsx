import styled from "styled-components"

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

const WidgetLargeTable = styled.table``;

const WidgetLargeTr = styled.tr``;

const WidgetLargeTh = styled.th``;

const WidgetLargeTd = styled.td``;

const WidgetLargeImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;

const WidgetLargeName = styled.span``;

const WidgetLargeDate = styled.td``;

const WidgetLargeAmount = styled.td``;

const WidgetLargeStatus = styled.td``;

const WidgetLarge = () => {

    

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
                <WidgetLargeStatus>$122</WidgetLargeStatus>
            </WidgetLargeTr>
        </WidgetLargeTable>
    </WidgetLargeContainer>
  )
}

export default WidgetLarge