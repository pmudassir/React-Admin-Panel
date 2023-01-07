import styled from "styled-components"

const NewUserContainer = styled.div`
    flex: 4;
    padding: 20px;
`;

const NewUserTitle = styled.h1``;

const NewUserForm = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const NewUserItem = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;
`;

const NewUserLabel = styled.label`
    font-size: 14px;
    margin-bottom: 10px;
    color: rgb(151, 150, 150);
    font-weight: 600;
`;

const NewUserInput = styled.input`
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px; 
`;

const NewUserGender = styled.div``;

const NewUserLabelDiff = styled.label`
    margin: 10px;
    font-size: 18px;
    color: #555;
`;

const NewUserInputDiff = styled.input`
    margin-top: 15px;
`;

const NewUserSelect = styled.select`
    height: 40px;
    border-radius: 5px;
`;

const NewUserOption = styled.option``;

const NewUserButton = styled.button`
    background-color: darkblue;
    color: white;
    width: 200px;
    border: none;
    cursor: pointer;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
`;

const NewUser = () => {
    return (
        <NewUserContainer>
            <NewUserTitle>New User</NewUserTitle>
            <NewUserForm>
                <NewUserItem>
                    <NewUserLabel>Username</NewUserLabel>
                    <NewUserInput placeholder="john" input="text" />
                </NewUserItem>
                <NewUserItem>
                    <NewUserLabel>Full Name</NewUserLabel>
                    <NewUserInput placeholder="John Smith" input="text" />
                </NewUserItem>
                <NewUserItem>
                    <NewUserLabel>Email</NewUserLabel>
                    <NewUserInput placeholder="john@gmail.com" input="email" />
                </NewUserItem>
                <NewUserItem>
                    <NewUserLabel>Password</NewUserLabel>
                    <NewUserInput placeholder="password" input="password" />
                </NewUserItem>
                <NewUserItem>
                    <NewUserLabel>Phone</NewUserLabel>
                    <NewUserInput placeholder="+1 234 567 89" input="text " />
                </NewUserItem>
                <NewUserItem>
                    <NewUserLabel>Address</NewUserLabel>
                    <NewUserInput placeholder="New York | USA" input="text" />
                </NewUserItem>
                <NewUserItem>
                    <NewUserLabel>Gender</NewUserLabel>
                    <NewUserGender>
                        <NewUserInputDiff input="text" type="radio" name="gender" id="male" value="male" />
                        <NewUserLabelDiff for="male">Male</NewUserLabelDiff>
                        <NewUserInputDiff input="text" type="radio" name="gender" id="female" value="female" />
                        <NewUserLabelDiff for="female">Female</NewUserLabelDiff>
                        <NewUserInputDiff input="text" type="radio" name="gender" id="other" value="other" />
                        <NewUserLabelDiff for="other">Other</NewUserLabelDiff>
                    </NewUserGender>
                </NewUserItem>
                <NewUserItem>
                    <NewUserLabel>Active</NewUserLabel>
                    <NewUserSelect name="active" id="active">
                        <NewUserOption value="yes">Yes</NewUserOption>
                        <NewUserOption value="no">No</NewUserOption>
                    </NewUserSelect>
                </NewUserItem>
            </NewUserForm>
            <NewUserButton>Create</NewUserButton>
        </NewUserContainer>
    )
}

export default NewUser