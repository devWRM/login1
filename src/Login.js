import React from 'react';

function Login() {

    return(
        <div>
            <h3>Login page</h3>
            <label>Username</label><sp> </sp>
            <input type="text" className="username" placeholder="Name"></input>

            <br /><br />

            <label>Email</label><sp> </sp>
            <input type="email" className="email" placeholder="email@email.com"></input>

            <br /><br />

            <label>Password</label><sp> </sp>
            <input type="password" className="email" placeholder="Password"></input>
            
        </div>
    )
}

export default Login;