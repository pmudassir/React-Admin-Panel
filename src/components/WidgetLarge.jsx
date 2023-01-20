import { useEffect, useState } from "react";
import styled from "styled-components"
import { userRequest } from "../requestMethods";
import "./WidgetLarge.css"
import { format } from 'timeago.js'

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

const WidgetLargeName = styled.span``;

const WidgetLargeDate = styled.td`
    font-weight: 300;
`;

const WidgetLargeAmount = styled.td`
    font-weight: 300; 
`;

const WidgetLargeStatus = styled.td``;

const WidgetLarge = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get("users/?new=true")
                setOrders(res.data)
            } catch (error) { }
        }
        getOrders()
    }, [])

    const Button = ({ type }) => {
        return <button className={"WidgetButton " + type}> {type} </button>
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
                {orders && orders.map((order) => (
                    <WidgetLargeTr>
                        <WidgetLargeTd>
                            <WidgetLargeName>{order.userId}</WidgetLargeName>
                        </WidgetLargeTd>
                        <WidgetLargeDate>{format(order.createdAt)}</WidgetLargeDate>
                        {/* makes the time more readable using this format from timeago.js library */}
                        <WidgetLargeAmount>$ {order.amount}</WidgetLargeAmount>
                        <WidgetLargeStatus>
                            <Button type={order.status} />
                        </WidgetLargeStatus>
                    </WidgetLargeTr>
                ))}
            </WidgetLargeTable>
        </WidgetLargeContainer>
    )
}

export default WidgetLarge