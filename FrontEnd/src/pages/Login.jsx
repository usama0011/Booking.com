import React, { useContext, useState } from "react";
import "../styles/LoginForm.css";
import { useForm } from 'react-hook-form'
import NavBar from "../components/NavBar";
import NavBarItem from "../components/NavBarItem";
import { AuthContext } from "../Context/AuthContext";
const Login = () => {
    const [logincrudentiasl, setLoginCrudentials] = useState({
        email: undefined,
        password: undefined
    })
    const { isFething, isError, user, dispatch } = useContext(AuthContext)
    const { handleSubmit, register, setError } = useForm()
    const handleChage = (e) => {
        e.preventDefault()
        setLoginCrudentials((prev) => {
            return {
                ...prev, [e.target.name]: e.target.value,
            }
        })
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" })
        try {
            //     const res = await axios.post("/auth/login", logincrudentiasl);
            //     dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: error })
        }
    }

    return (
        <>
            <NavBarItem />
            <NavBar />
            {isFething ? "Loading Please Wait ..." : <div className="login-form">
                <form >
                    <label htmlFor="inputEmail">E-mail</label>
                    <input onChange={handleChage}
                        type="email"
                        id="inputEmail"
                        name="email"
                    />
                    {isError && <p className="error">{setError.email.message}</p>}

                    <label htmlFor="inputPassword">Password</label>
                    <input onChange={handleChage}
                        type="password"
                        id="inputPassword"
                        name="password"
                    />
                    {isError && <p className="error">{setError.password.message}</p>}

                    <button onClick={handleLogin} type="submit">Login</button>
                </form>
            </div>}
        </>
    );
};

export default Login;