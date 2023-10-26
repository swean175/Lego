import React from "react"
import { useNavigate } from "react-router-dom"

export default function Loguj(){
    const [loginFormData, setLoginFormData] = React.useState({ log: "", pass: "" })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>Zaloguj się</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Hasło"
                    value={loginFormData.password}
                />
                <button>Zaloguj</button>
            </form>
        </div>
    )

}