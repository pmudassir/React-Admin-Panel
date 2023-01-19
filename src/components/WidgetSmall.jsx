import { Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import styled from "styled-components"
import { userRequest } from "../requestMethods";

const WidgetSmallContainer = styled.div`
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
    margin-right: 20px;
`;

const WidgetSmallTitle = styled.span`
    font-size: 22px;
    font-weight: 600;
`;

const WidgetSmallList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const WidgetSmallListItems = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
`;

const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;

const WidgetSmallUser = styled.div`
    display: flex;
    flex-direction:column;
`;

const WidgetSmallUserName = styled.span`
    font-weight: 600;
`;

const WidgetSmallButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
`;

const WidgetSmallIcon = {
    fontSize: "16px",
    marginRight: "5px"
}

const WidgetSmall = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get("users/?new=true")
                setUsers(res.data)
            } catch (error) { }
        }
        getUsers()
    }, [])
    return (
        <WidgetSmallContainer>
            <WidgetSmallTitle>New Join Members</WidgetSmallTitle>
            <WidgetSmallList>
                {users && users.map((user) => (
                    <WidgetSmallListItems key={user._id}>
                        <Image src={user.img || "https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-18.jpg"} />
                        <WidgetSmallUser>
                            <WidgetSmallUserName>{user.username}</WidgetSmallUserName>
                        </WidgetSmallUser>
                        <WidgetSmallButton>
                            <Visibility sx={WidgetSmallIcon} />
                            Display
                        </WidgetSmallButton>
                    </WidgetSmallListItems>
                ))}
            </WidgetSmallList>
        </WidgetSmallContainer>
    )
}

export default WidgetSmall