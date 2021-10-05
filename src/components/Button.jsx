import React from "react";

class Button extends React.Component {
    state = { count: 0, mostrar: 0 };
    handleClick = () =>
        this.setState({
            count: this.state.count + 1,
            mostrar: false,
        });
    handleClicksustrack = () =>
        !this.state.count
            ? this.state.count !== 0
            : this.setState({
                  count: this.state.count - 1,
              });
    render() {
        const { count } = this.state;

        return (
            <>
                <h1>Manzanas: {count}</h1>
                <button type='button' onClick={this.handleClick}>
                    sumar
                </button>

                <button type='button' onClick={this.handleClicksustrack}>
                    Restar
                </button>
            </>
        );
    }
}

export default Button;
