import React, { Component } from 'react';

class Counter extends Component {
    render() {
        const { item, onIncrement, onDecrement } = this.props;

        return (
            <div>
                <span className='badge bg-info text-dark me-2'>
                    {item.value}
                </span>
                <button
                    type='button'
                    className='btn btn-success mb-2 me-2'
                    onClick={(event) => onIncrement(item)}
                >
                    +
                </button>
                <button
                    type='button'
                    className='btn btn-danger mb-2'
                    onClick={(event) => onDecrement(item)}
                >
                    -
                </button>
            </div>
        );
    }
}

export default Counter;
