import React, {Fragment} from 'react';



export default class LoginPage extends React.Component {
    state = {
    }

    componentDidMount() {
    }

    render() {
        return (                        
            <Fragment>
                <div className="login">
                    <h2>Login</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        const form = e.target.elements
                        const email = form.email.value
                        const password = form.password.value

                        if(email === '' || password === '') {
                            alert('Please fill out the form')
                            return;
                        }

                        e.target.reset()
                        // handleSubmit(email, password)
                    }}>
                        <p>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email"/>
                        </p>

                        <p>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password"/>
                        </p>

                        <p>
                        <input type="submit" value="Login"/>
                        </p>
                    </form>
                </div>
            </Fragment> 
        )
    }
}