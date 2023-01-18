import styled from "styled-components"
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetLarge from "../components/WidgetLarge";
import WidgetSmall from "../components/WidgetSmall";
import { userData } from "../dummyData";

const HomeContainer = styled.div`
    flex: 4;
    padding: 20px;
`;

const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active Users" />
      <HomeWidgets>
        <WidgetSmall />
        <WidgetLarge />
      </HomeWidgets>
    </HomeContainer>
  )
}

export default Home