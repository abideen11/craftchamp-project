import React from 'react';

export default class Register extends React.Component {
    render() {
        return(
            <div className="main-rgs">
                <h2>Register</h2>
                <form>
                    <label>Username or Email Address</label>{" "}
                    <input name="username" placeholder="Username or Email" type="username"></input>
                    <br />
                    <label>Password</label>{" "}
                    <input name="password" placeholder="Password" type="password"></input>
                    <br />
                    <label>Confirm Password</label>{" "}
                    <input name="confirmPassword" placeholder="Confirm Password" type="password"></input>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}