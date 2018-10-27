import React, {Component} from "react";


class Display extends Component{
    render(){
        return(
            <div className="display">
                Licznik:
                <span className="value">
                    {this.props.currentValue}
                </span>
            </div>
        )
    }
}
export default Display;