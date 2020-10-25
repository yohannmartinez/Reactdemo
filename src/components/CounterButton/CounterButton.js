import React from "react"

class CounterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <button onClick={()=>{this.props.AddCounter()}}>Augmenter</button>
                <button onClick={()=>{this.props.RemoveCounter()}}>Diminuer</button>
            </div>
        )
    }
}

export default CounterButton