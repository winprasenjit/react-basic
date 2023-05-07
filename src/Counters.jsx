import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    state = {
        counterList: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    };

    onIncrement = (counter) => {
        const counterList = this.state.counterList.map((item) => {
            if (item.id === counter.id) {
                ++item.value;
            }
            return item;
        });

        this.setState({ counterList });
        this.getTotalCount();
    };

    onDecrement = (counter) => {
        const counterList = this.state.counterList.map((item) => {
            if (item.id === counter.id && item.value > 0) {
                --item.value;
            }
            return item;
        });

        this.setState({ counterList });
        this.getTotalCount();
    };

    reset = () => {
        const counterList = this.state.counterList.map((item) => {
            item.value = 0;
            return item;
        });

        this.setState({ counterList });
        this.getTotalCount();
    };

    getTotalCount = () => {
        const totalCount = this.state.counterList.reduce((acc, list) => {
            acc += list.value;
            return acc;
        }, 0);

        this.props.setCounterCount(totalCount);
    };

    render() {
        return (
            <div>
                {this.state.counterList.map((item) => (
                    <Counter
                        key={item.id}
                        item={item}
                        onIncrement={this.onIncrement}
                        onDecrement={this.onDecrement}
                    />
                ))}
                <button
                    type='button'
                    className='btn btn-warning mt-2'
                    onClick={this.reset}
                >
                    Reset
                </button>
            </div>
        );
    }
}

export default Counters;
