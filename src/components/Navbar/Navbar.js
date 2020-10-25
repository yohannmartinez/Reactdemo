import React from "react"
import {Link} from "react-router-dom"
import "./Navbar.scss"

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
        console.log("ce composant à été initialisé",this.props)
    }

    render() {
        console.log("composant rechargé")
        return (
            <div className="navbar">
                <span className="navbar__title">Navbar {this.props.count}</span>

                <div className="navbar__linksContainer">
                <Link to="/" className="navbar__links" >home</Link>
                <Link to="/aboutus" className="navbar__links" >about us</Link>
                    <Link to="/documentation" className="navbar__links">documentation</Link>
                </div>
            </div>
        )
    }
}

export default Navbar