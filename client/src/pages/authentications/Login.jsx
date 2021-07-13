import { useState, useContext, useRef } from "react"
import { Link, useHistory } from "react-router-dom"

function Login() {
    const email = useRef();
	const password = useRef();
	const history = useHistory();

    const handleLogin = e => {
        e.preventDefault();
    }

    return (
        <div className="login-section">
            <div className="login-area">
				<div className="container">
					<div className="login-form">
						<h2>Login</h2>
						<form onSubmit={handleLogin}>
							<div className="form-group">
								<input type="email" className="form-control" placeholder="Email" ref={email} />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" placeholder="Password" ref={password} />
							</div>
							<button type="submit">Login</button>
						</form>
                        <div className="important-text">
                            <p>Don't have an account? <Link to={"/registration"}>Register now!</Link></p>
                        </div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default Login;