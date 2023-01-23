import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components"
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetLarge from "../components/WidgetLarge";
import WidgetSmall from "../components/WidgetSmall";
import { userRequest } from "../requestMethods";

const HomeContainer = styled.div`
    flex: 4;
    padding: 20px;
`;

const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;
`;

const Home = () => {
  const [userStats, setUserStats] = useState([])

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
        const res = await userRequest.get("/users/stats")
        res.data && res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active Users": item.total }
          ])
        )
      } catch (error) { }
    };
    getStats()
  }, [MONTHS]);

  return (
    <HomeContainer>
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="Active Users" />
      <HomeWidgets>
        <WidgetSmall />
        <WidgetLarge />
      </HomeWidgets>
    </HomeContainer>
  )
}

export default Home