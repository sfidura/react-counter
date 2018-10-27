import React, { Component } from "react";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
import './Counter.css';

// Przykład komponentu funkcyjnego
// const Counter = () => {
// let counterName = "Licznik bleble";

//     return(
//         <div className="counter">Licznik {counterName} {Date.now()}</div>
//     )
// }



class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: 0,
        }
    }

    incrementOrResetCounter = (increment) => {
        if (increment) {
            this.setState((prevState) => {
                return ({
                    counterValue: prevState.counterValue + 1,
                })
            });
        } else {
            this.setState(() => {
                return ({
                    counterValue: 0,
                })
            });
        }
    }

    render() {
        return (
            <div className="counter">
                <Display currentValue={this.state.counterValue} />
                <ButtonsPanel updateCounter={this.incrementOrResetCounter} />
            </div>
        )
    }

    // incrementCounter = () => {
    //     this.setState( (prevState) => {
    //         return({
    //             counterValue: prevState.counterValue + 1,
    //         })
    //     });
    // }

    // render(){
    //     return(
    //         <div className="counter">
    //         Licznik:
    //         <span className="value">
    //         {this.state.counterValue}
    //         </span>
    //         <hr />
    //         <button onClick={this.incrementCounter}>
    //             Zwiększ o 1
    //         </button>
    //         </div>
    //     )
    // }

    // render(){
    //     let counterName = "Komponent klasowy";
    //     return(
    //         <div className="counter">Licznik {this.props.initValue}</div>
    //     )
    // }
}

export default Counter;