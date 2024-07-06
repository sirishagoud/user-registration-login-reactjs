import { FC, useState } from "react";

interface userProps {
    mail: string;
    password: string;
}

const CreateUser: FC<userProps> = () => {

    const [userFormData, setUserFormData] = useState({
        mail: "",
        password: ""
    });

    const handleUserInput = (event: any) => {
        const {name, value } = event.target;
        setUserFormData({...userFormData, [name]: value})
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        //API call
        console.log(userFormData)
    }

    return (
        <form onSubmit={handleSubmit}>
            Register User
            <br />
            <input type="text" name="mail" value={userFormData.mail} onChange={handleUserInput}/>
            <br />
            <input type="password" name="password" value={userFormData.password} onChange={handleUserInput}/>
            <br />
            <button type="submit">Register</button>
        </form>
    )
}

export default CreateUser;