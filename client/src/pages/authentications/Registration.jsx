import { useState, useContext, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { makeRegistration } from "../../redux/actions";

function Registration() {
    const name = useRef();
    const email = useRef();
	const password = useRef();
    const dispatch = useDispatch()
	const history = useHistory();
    const registration = useSelector(state => state.registration);

    useEffect(() => {
        if(registration && Object.keys(registration).length > 0 && registration.isAuthenticated) {
            history.push('/');
        }
    }, [registration])

    const handleRegistration = e => {
        e.preventDefault();
        const user = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value
        }
        dispatch(makeRegistration(user));
    }

    return (
        <div className="login-section">
            <div className="login-area ptb-50">
				<div className="container">
					<div className="login-form">
						<h2>Registration</h2>
						<form onSubmit={handleRegistration}>
                            <div className="form-group">
								<input type="text" className="form-control" placeholder="Name" ref={name} />
							</div>
							<div className="form-group">
								<input type="email" className="form-control" placeholder="Email" ref={email} />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" placeholder="Password" ref={password} />
							</div>
							<button type="submit">Register</button>
						</form>
                        <div className="important-text">
                            <p>Have an account? <Link to={"/login"}>Login!</Link></p>
                        </div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default Registration;