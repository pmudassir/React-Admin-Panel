import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material";
import { Link } from "react-router-dom";
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

const UserShowBottom = styled.div`
    margin-top: 20px;
`;

const UserShowTitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: rgb(175, 170, 170);
`;

const UserShowInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
    color: #444;
`;

const UiStyle = {
    fontSize: "16px",
}

const UserShowInfoTitle = styled.span`
    margin-left: 10px;
`;

const UserUpdate = styled.div`
    flex: 2;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const UserUpdateTitle = styled.div`
    font-size: 24px;
    font-weight: 600;
`;

const UserUpdateForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const UserUpdateLeft = styled.div``;

const UserUpdateItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

const UserUpdateLabel = styled.label`
    margin-bottom: 5px;
    font-size: 14px;
`;

const UserUpdateInput = styled.input`
   border: none;
   width: 250px;
   height: 30px;
   border-bottom: 1px solid gray; 
`;

const UserUpdateRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const UserUpdateImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`;

const UserUpdateUpload = styled.div`
    display: flex;
    align-items: center;
`;

const UserUpdateIcon = {
    cursor: "pointer"
}

const UserUpdateButton = styled.button`
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
    padding: 5px;
`;

const User = () => {
    return (
        <UserContainerMain>
            <UserTitleContainer>
                <UserTitle>Edit User</UserTitle>
                <Link to="/newUser">
                    <UserAddButton>Create</UserAddButton>
                </Link>
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
                        <UserShowTitle>Contact Details</UserShowTitle>
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
                <UserUpdate>
                    <UserUpdateTitle>Edit</UserUpdateTitle>
                    <UserUpdateForm>
                        <UserUpdateLeft>
                            <UserUpdateItem>
                                 <UserUpdateLabel>Username</UserUpdateLabel>
                                 <UserUpdateInput type="text" placeholder="annabeck99"/>
                            </UserUpdateItem>
                            <UserUpdateItem>
                                 <UserUpdateLabel>Full Name</UserUpdateLabel>
                                 <UserUpdateInput type="text" placeholder="Anna Becker"/>
                            </UserUpdateItem>
                            <UserUpdateItem>
                                 <UserUpdateLabel>Email</UserUpdateLabel>
                                 <UserUpdateInput type="email" placeholder="annabeck99@gmail.com"/>
                            </UserUpdateItem>
                            <UserUpdateItem>
                                 <UserUpdateLabel>Phone</UserUpdateLabel>
                                 <UserUpdateInput type="text" placeholder="+1 233 246 69"/>
                            </UserUpdateItem>
                            <UserUpdateItem>
                                 <UserUpdateLabel>Address</UserUpdateLabel>
                                 <UserUpdateInput type="text" placeholder="New York | USA"/>
                            </UserUpdateItem>
                        </UserUpdateLeft>
                        <UserUpdateRight>
                            <UserUpdateUpload>
                                <UserUpdateImage src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                                <label htmlFor="file"><Publish sx={UserUpdateIcon}/></label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </UserUpdateUpload>
                            <UserUpdateButton>Update</UserUpdateButton>
                        </UserUpdateRight>
                    </UserUpdateForm>
                </UserUpdate>
            </UserContainer>
        </UserContainerMain>
    )
}

export default User