import React, { Component } from 'react';

class Icons extends Component {
    static defaultProps = {
        opt: [
            "far fa-angry",
            "fas fa-angry",
            "fas fa-baby",
            "fas fa-baby-carriage",
            "fas fa-battery-empty",
            "fas fa-battery-full"
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            icons: []
        };
        this.addIcon = this.addIcon.bind(this);
    }
    addIcon() {
        let randIdx = Math.floor(Math.random() * this.props.opt.length);
        let newIcon = this.props.opt[randIdx];
        this.setState({ icons: [...this.state.icons, newIcon] });
    }
    render() {
        return (
            <div>
                <p>List of Icons: {this.state.icons.map(i => <i className={i}></i>)}</p>
                <button onClick={this.addIcon}>Add Icon</button>
            </div>
        )
    }
}

export default Icons;
