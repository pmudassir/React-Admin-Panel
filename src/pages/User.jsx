import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from "@mui/icons-material";
import styled from "styled-components"

const UserContainerMain = styled.div`
    flex: 4;
    padding: 20px;
`;

const UserTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const UserTitle = styled.h1``;

const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

const UserShow = styled.div`
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    flex: 1;
    padding: 20px;
    margin-right: 20px;
`;

const UserShowTop = styled.div`
    display: flex;
    align-items: center;
`;

const UserShowImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;

const UserShowTopTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

const UserShowUsername = styled.span`
    font-weight: 600;
`;

const UserShowUserTitle = styled.span`
    font-weight: 300;
`;

const UserShowBottom = styled.div``;

const UserShowTitle = styled.span``;

const UserShowInfo = styled.div``;

const UserShowInfoTitle = styled.span``;

const UserUpdate = styled.div`
    flex: 2;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const UserAddButton = styled.button`
    width: 80px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    background-color: teal;
    color: white;
    cursor: pointer;
    font-size: 16px;
`;

const UiStyle = {
    fontSize: "20px",
}

const User = () => {
    return (
        <UserContainerMain>
            <UserTitleContainer>
                <UserTitle>Edit User</UserTitle>
                <UserAddButton>Create</UserAddButton>
            </UserTitleContainer>
            <UserContainer>
                <UserShow>
                    <UserShowTop>
                        <UserShowImage src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <UserShowTopTitle>
                            <UserShowUsername>Anna Becker</UserShowUsername>
                            <UserShowUserTitle>Software Engineer</UserShowUserTitle>
                        </UserShowTopTitle>
                    </UserShowTop>
                    <UserShowBottom>
                        <UserShowTitle>Account Details</UserShowTitle>
                        <UserShowInfo>
                            <PermIdentity sx={UiStyle}/>
                            <UserShowInfoTitle>annabeck99</UserShowInfoTitle>
                        </UserShowInfo>
                        <UserShowInfo>
                            <CalendarToday sx={UiStyle}/>
                            <UserShowInfoTitle>10.12.1999</UserShowInfoTitle>
                        </UserShowInfo>
                        <UserShowInfo>
                            <PhoneAndroid sx={UiStyle}/>
                            <UserShowInfoTitle>+1 233 246 69</UserShowInfoTitle>
                        </UserShowInfo>
                        <UserShowInfo>
                            <MailOutline sx={UiStyle}/>
                            <UserShowInfoTitle>annabeck99@gmail.com</UserShowInfoTitle>
                        </UserShowInfo>
                        <UserShowInfo>
                            <LocationSearching sx={UiStyle}/>
                            <UserShowInfoTitle>New York | USA</UserShowInfoTitle>
                        </UserShowInfo>
                    </UserShowBottom>
                </UserShow>
                <UserUpdate></UserUpdate>
            </UserContainer>
        </UserContainerMain>
    )
}

export default User