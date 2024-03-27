import React from "react"

const LoginSignup = () => {
    return (
        <>
          <div className="Container">
            <div className="header">
                <div className="text">SignUp</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="text" />
                </div>
                <div className="input">
                    <input type="email" />
                </div>
                <div className="input">
                    <input type="password" />
                </div>
            </div>

            <div className="submit_container"></div>
          </div>
        </>
    )
}
export default LoginSignup;