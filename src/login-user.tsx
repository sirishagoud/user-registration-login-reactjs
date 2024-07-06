import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface loggedUserProps {
    mail: string,
    passoword: string
}
const LoginUser: FC<loggedUserProps> = () => {
    const [loggedUserData, setLoggedUserData] = useState({
        mail: '',
        password: ''
    });

    const handleLoggedInUserInput = (event: any) => {
        const {name, value} = event.target;
        setLoggedUserData({...loggedUserData, [name]: value})
       
    }

    const submitLoggedData = (event: any) => {
        event.preventDefault();
        console.log(loggedUserData)
        setLoggedUserData({
            mail: "",
            password: ""
        });
    }

    return (
        <form onSubmit={submitLoggedData}>
            Login User
            <br />
            <input type="text" name="mail" placeholder="Enter your mail" value={loggedUserData.mail} onChange={handleLoggedInUserInput}/>
            <br />
            <input  type="password" name="password" placeholder="Enter your password" value={loggedUserData.password} onChange={handleLoggedInUserInput}/>
            <br />
            <button type="submit">Login</button>
            <br />
            <p>Not a user? <Link to='/'>Create account</Link></p>
        </form>
    )
}

export default LoginUser;