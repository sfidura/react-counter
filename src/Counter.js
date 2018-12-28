import React, {
    Component
} from "react";
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
            counterName: "BFC",
            counterStep: 1,
        }
    }

    incrementOrResetCounter = (myValue) => {
        if (myValue > 0) {
            this.incrementCounter();
        } else if (myValue < 0) {
            if (this.state.counterValue > 0){
                this.decrementCounter();
            } else{
                console.log("ERROR: wartość nie może być ujemna.");
            }
        } else {
            this.resetCounter();
        }
    }

    incrementCounter = () => {
        this.setState((prevState) => {
            return ({
                counterValue: prevState.counterValue + prevState.counterStep,
            })
        });
    }

    decrementCounter = () => {
        this.setState((prevState) => {
            return ({
                counterValue: prevState.counterValue - prevState.counterStep,
            })
        });
    }

    resetCounter = () => {
        this.setState(() => {
            return ({
                counterValue: 0,
            })
        });
    }

    updateCounterStep = (value) => {
        this.setState((value) => {
            return ({
                counterStep: value,
            })
        })
    }

    render() {
        return ( <div className = "counter" >
            <Display currentValue = {this.state.counterValue} counterName = {this.state.counterName} /> 
            <ButtonsPanel updateCounter = {this.incrementOrResetCounter} counterStep = {this.state.counterStep} updateCounterStep = {this.updateCounterStep} /> </div>
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