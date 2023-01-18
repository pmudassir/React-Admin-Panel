import React from 'react'
import { Language, NotificationsNone, Settings } from '@mui/icons-material';
import styled from 'styled-components'
import { Outlet } from 'react-router';

const TopBar = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999; 
`;

const TopBarWrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TopLeft = styled.div``;

const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
`;

const TopRight = styled.div`
    display: flex;
    align-items: center;
`;

const TopbarIconContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
`;

const TopbarIconBadge = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    color: white;
    position: absolute;
    top: -5px;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
`;

const TopAvatarImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer; 
`;

const Topbar = () => {
    return (
        <>

            <TopBar>
                <TopBarWrapper>
                    <TopLeft>
                        <Logo>admin</Logo>
                    </TopLeft>
                    <TopRight>
                        <TopbarIconContainer>
                            <NotificationsNone />
                            <TopbarIconBadge>2</TopbarIconBadge>
                        </TopbarIconContainer>
                        <TopbarIconContainer>
                            <Language />
                            <TopbarIconBadge>2</TopbarIconBadge>
                        </TopbarIconContainer>
                        <TopbarIconContainer>
                            <Settings />
                        </TopbarIconContainer>
                        <TopAvatarImage src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    </TopRight>
                </TopBarWrapper>
            </TopBar>
            <Outlet />
        </>
    )
}

export default Topbar