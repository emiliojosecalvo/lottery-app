import React, { Component } from 'react';
import LotteryBall from './LotteryBall';
import './Lottery.css'

class Lottery extends Component {

    constructor(props) {
        super(props);
        this.state = { nums: Array.from({ length: this.props.numBalls }) }
        this.genLotto = this.genLotto.bind(this);
    }
    genLotto() {
        this.setState(curState => ({
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }));
    }
    render() {
        return (
            <div className='Lottery'>
                <div>
                    <h1>{this.props.title}</h1>
                    {this.state.nums.map(x => <LotteryBall num={x} />)}
                </div>
                <button className='Lottery-button' onClick={this.genLotto}> Generate </button>
            </div>
        )
    }
}

export default Lottery;