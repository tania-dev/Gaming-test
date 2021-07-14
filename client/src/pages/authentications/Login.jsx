import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Link, useHistory } from "react-router-dom"
import { makeLogin } from "../../redux/actions";

function Login() {
    const email = useRef();
	const password = useRef();
	const dispatch = useDispatch()
	const history = useHistory();
    const login = useSelector(state => state.login);

	useEffect(() => {
        if(login && Object.keys(login).length > 0 && login.isAuthenticated) {
            history.push('/');
        }
    }, [login, history])

    const handleLogin = e => {
        e.preventDefault();
		const user = {
            email: email.current.value,
            password: password.current.value
        }
        dispatch(makeLogin(user));
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