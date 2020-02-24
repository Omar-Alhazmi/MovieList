import React from 'react'

export default class NavBar extends React.Component {
    render() {
        
        const NoMatch = ({location}) => {location.pathname}

        return (
                	<Router>
                        
				<div className="app">
					<nav className="main-nav">
						<Link to="/">Home</Link>
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
					</nav>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/login" exact component={Login} />
						<Route path="/register" exact component={Register} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>     
        )
    }
}
