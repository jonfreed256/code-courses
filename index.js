import React, {Component} from "react"
import ReactDom from "react-dom"

class App extends Component {
    render() {
        return (
            <div>
                Hello React World!
            </div>
        )
    }
}

const root = document.querySelector("#App")
ReactDom.render(<App />, root)