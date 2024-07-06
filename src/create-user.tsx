import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface userProps {
    userName: string;
    mail: string;
    password: string;
}

const CreateUser: FC<userProps> = () => {

    const [userFormData, setUserFormData] = useState({
        userName: "",
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
        setUserFormData({
            userName: "",
            mail: "",
            password: ""
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            Register User
            <br />
            <input type="text" name="userName" placeholder="Enter your name" value={userFormData.userName} onChange={handleUserInput} />
            <br />
            <input type="text" name="mail" placeholder="Enter your mail" value={userFormData.mail} onChange={handleUserInput}/>
            <br />
            <input type="password" name="password" placeholder="Enter your password" value={userFormData.password} onChange={handleUserInput}/>
            <br />
            <button type="submit">Register</button>
            <br />
            <p>Aleady a user? <Link to='/login'>Login</Link> </p>
        </form>
    )
}

export default CreateUser;