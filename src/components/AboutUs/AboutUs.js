import React from "react"
import Navbar from '../Navbar/Navbar'
import CounterButton from "../CounterButton/CounterButton"

class AboutUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            LandingCounter: 5
        }
        this.AddCounter = this.AddCounter.bind(this)
        this.RemoveCounter = this.RemoveCounter.bind(this)
    }

    AddCounter() {
        this.setState({LandingCounter : this.state.LandingCounter + 1})
    }

    RemoveCounter() {
        if(this.state.LandingCounter === 0) {
            this.setState({LandingCounter : 0})
        } else {
            this.setState({LandingCounter : this.state.LandingCounter - 1})

        }
    }

    render() {
        return(
            <div>
                <Navbar count={this.state.LandingCounter}/>
                Landing
                <CounterButton AddCounter={this.AddCounter} RemoveCounter={this.RemoveCounter}/>

            </div>
        )
    }
}

export default AboutUs