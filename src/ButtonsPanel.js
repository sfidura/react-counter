import React, {Component} from "react";

class ButtonsPanel extends Component {
    updateCounter = (update) => {
        this.props.updateCounter(update);
    }

    updateCounterStep = (step) => {
        this.props.updateCounterStep(step);
    }

    render() {

        let step = this.props.counterStep;

        return(
            <div className="buttonsPanel">
                <button onClick={() => this.updateCounter((-1) * step)}>
                    Zmniejsz o {this.props.counterStep}
                </button>
                <button onClick={() => this.updateCounter(0)}>
                    Resetuj Licznik
                </button>
                <button onClick={() => this.updateCounter(step)}>
                    Zwiększ o {this.props.counterStep}
                </button>
                <hr />
                    <input type="number" id="step" min="1" required value={this.props.counterStep} onChange={(evt) => this.updateCounterStep(evt)} />
                    {/* <button onClick={() => this.counterStep()}>
                        Ustal krok
                    </button> */}
            </div>
        )
    }
}
export default ButtonsPanel;