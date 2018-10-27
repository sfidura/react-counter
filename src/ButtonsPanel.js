import React, {Component} from "react";

class ButtonsPanel extends Component {
    updateCounter = (update) => {
        this.props.updateCounter(update);
    }

    render() {
        return(
            <div className="buttonsPanel">
                <button onClick={() => this.updateCounter(-1)}>
                    Zmniejsz o 1
                </button>
                <button onClick={() => this.updateCounter(0)}>
                    Resetuj Licznik
                </button>
                <button onClick={() => this.updateCounter(1)}>
                    Zwiększ o 1
                </button>
            </div>
        )
    }
}
export default ButtonsPanel;