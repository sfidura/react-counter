import React, {Component} from "react";

class ButtonsPanel extends Component {
    updateCounter = (update) => {
        this.props.updateCounter(update);
    }

    render() {
        return(
            <div className="buttonsPanel">
                <button onClick={() => this.updateCounter(true)}>
                    Zwiększ o 1
                </button>
                <button onClick={() => this.updateCounter(false)}>
                    Resetuj Licznik
                </button>
            </div>
        )
    }
}
export default ButtonsPanel;