import { LineStyle, Timeline, TrendingUp } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const SideBar = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: rgb(251, 251, 255);
    position: sticky; 
    top: 50px;
`;

const SidebarWrapper = styled.div`
    padding: 20px;
    color: #555;
`;

const SidebarMenu = styled.div`
    margin-bottom: 10px;
`;

const SidebarTitle = styled.h3`
    font-size: 13px;
    color: rgb(197,194,194);
`;

const SidebarList = styled.ul`
    list-style: none;
    padding: 5px;
`;

const SidebarListItem = styled.li`
    padding: 5px; 
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    &:hover, &:active{
        background-color: rgb(240, 240, 255);
    }    
`;

const SidebarIcon = styled.div.attrs(props => ({
    className: props.className,
}))`
&.SideBarIcon{
        font-size: 20px !important;
        margin-right: 5px;
    }
`;


const Sidebar = () => {
    return (
        <SideBar>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarTitle>Dashboard</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>
                            <SidebarIcon>
                                <LineStyle sx={{fontSize: "20px",marginRight: "5px",}}/>
                            </SidebarIcon>
                            Home
                        </SidebarListItem>
                        <SidebarListItem>
                            <SidebarIcon>
                                <Timeline />
                            </SidebarIcon>
                            Analytics
                        </SidebarListItem>
                        <SidebarListItem>
                            <SidebarIcon>
                                <TrendingUp />
                            </SidebarIcon>
                            Sales
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
            </SidebarWrapper>
        </SideBar>
    )
}

export default Sidebar