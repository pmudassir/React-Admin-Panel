import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useEffect, useState } from "react";
import styled from "styled-components"
import { userRequest } from "../requestMethods";

const Featured = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const FeaturedItem = styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const FeaturedTitle = styled.span`
    font-size: 20px;
`;

const FeaturedMoneyContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`;

const FeaturedMoney = styled.span`
    font-size: 30px;
    font-weight: 600;
`;

const FeaturedMoneyRate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`;

const ArrowDown = {
    fontSize: "14px",
    marginLeft: "5px",
    color: "red"
}

const ArrowUp = {
    fontSize: "14px",
    marginLeft: "5px",
    color: "green"
}

const FeaturedSub = styled.span`
    font-size: 15px;
    color: gray;
`;

const FeaturedInfo = () => {
    const [income, setIncome] = useState([])
    const [perc, setPerc] = useState(0)

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get("orders/income")
                setIncome(res.data)
                setPerc((res.data[1].total * 100) / res.data[0].total - 100)
            } catch (error) { }
        };
        getIncome()
    }, [])
    
    return (
        <Featured>
            <FeaturedItem>
                <FeaturedTitle>Revenue</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$ {income[1]?.total}</FeaturedMoney>
                    <FeaturedMoneyRate>
                        %{Math.floor(perc)}{" "}
                        {perc >= 0 ? (
                            <ArrowUpward sx={ArrowUp} />
                        ) : (
                            <ArrowDownward sx={ArrowDown} />
                        )}
                    </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compared to last Month</FeaturedSub>
            </FeaturedItem>
            <FeaturedItem>
                <FeaturedTitle>Sales</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$4,415</FeaturedMoney>
                    <FeaturedMoneyRate>
                        -1.5 <ArrowDownward sx={ArrowDown} />
                    </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compared to last Month</FeaturedSub>
            </FeaturedItem>
            <FeaturedItem>
                <FeaturedTitle>Cost</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$2,22 5</FeaturedMoney>
                    <FeaturedMoneyRate>
                        +2.5 <ArrowUpward sx={ArrowUp} />
                    </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compared to last Month</FeaturedSub>
            </FeaturedItem>
        </Featured>
    )
}

export default FeaturedInfo