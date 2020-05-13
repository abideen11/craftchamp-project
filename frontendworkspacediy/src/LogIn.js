import React from 'react';

export default class LogIn extends React.Component {
    render() {
        return(
            <div className="main-log">
                <h2>Log In</h2>
                <form>
                    <label>Usernmae or Email Address</label>{" "}
                    <input name="username" placeholder="Username or Email" type="username"></input>
                    <br />
                    <label>Password</label>{" "}
                    <input name="username" placeholder="Password" type="password"></input>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}