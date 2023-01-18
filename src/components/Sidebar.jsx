import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@mui/icons-material';
import React from 'react'
import { Link, Outlet } from 'react-router-dom';
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

const SidebarIcon = styled.div`

`;

//styling material ui icons
const MaterialUiStyles = {
    marginRight: "5px",
    fontSize: "20px"
}

const Sidebar = () => {
    return (
        <>

            <SideBar>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarTitle>Dashboard</SidebarTitle>
                        <SidebarList>
                            <Link to="/" className='link'>
                                <SidebarListItem>
                                    <SidebarIcon>
                                        <LineStyle sx={MaterialUiStyles} />
                                    </SidebarIcon>
                                    Home
                                </SidebarListItem>
                            </Link>
                            <SidebarListItem>
                                <SidebarIcon>
                                    <Timeline sx={MaterialUiStyles} />
                                </SidebarIcon>
                                Analytics
                            </SidebarListItem>
                            <SidebarListItem>
                                <SidebarIcon>
                                    <TrendingUp sx={MaterialUiStyles} />
                                </SidebarIcon>
                                Sales
                            </SidebarListItem>
                        </SidebarList>
                        <SidebarTitle>Quick Menu</SidebarTitle>
                        <SidebarList>
                            <Link to="/users" className='link'>
                                <SidebarListItem>
                                    <SidebarIcon>
                                        <PermIdentity sx={MaterialUiStyles} />
                                    </SidebarIcon>
                                    Users
                                </SidebarListItem>
                            </Link>
                            <Link to="/products" className='link'>
                                <SidebarListItem>
                                    <SidebarIcon>
                                        <Storefront sx={MaterialUiStyles} />
                                    </SidebarIcon>
                                    Products
                                </SidebarListItem>
                            </Link>
                            <SidebarListItem>
                                <SidebarIcon>
                                    <AttachMoney sx={MaterialUiStyles} />
                                </SidebarIcon>
                                Transactions
                            </SidebarListItem>
                            <SidebarListItem>
                                <SidebarIcon>
                                    <BarChart sx={MaterialUiStyles} />
                                </SidebarIcon>
                                Reports
                            </SidebarListItem>
                        </SidebarList>
                        <SidebarTitle>Notifications</SidebarTitle>
                        <SidebarList>
                            <SidebarListItem>
                                <SidebarIcon>
                                    <MailOutline sx={MaterialUiStyles} />
                                </SidebarIcon>
                                Mail
                            </SidebarListItem>
                            <SidebarListItem>
                                <SidebarIcon>
                                    <DynamicFeed sx={MaterialUiStyles} />
                                </SidebarIcon>
                                Feedback
                            </SidebarListItem>
                            <SidebarListItem>
                                <SidebarIcon>
                                    <ChatBubbleOutline sx={MaterialUiStyles} />
                                </SidebarIcon>
                                Messages
                            </SidebarListItem>
                        </SidebarList>
                        <SidebarTitle>Staff</SidebarTitle>
                        <SidebarList>
                            <SidebarListItem>
                                <SidebarIcon>
                                    <WorkOutline sx={MaterialUiStyles} />
                                </SidebarIcon>
                                Manage
                            </SidebarListItem>
                            <SidebarListItem>
                                <SidebarIcon>
                                    <Timeline sx={MaterialUiStyles} />
                                </SidebarIcon>
                                Analytics
                            </SidebarListItem>
                            <SidebarListItem>
                                <SidebarIcon>
                                    <Report sx={MaterialUiStyles} />
                                </SidebarIcon>
                                Reports
                            </SidebarListItem>
                        </SidebarList>
                    </SidebarMenu>
                </SidebarWrapper>
            </SideBar>
            <Outlet />
        </>
    )
}

export default Sidebar