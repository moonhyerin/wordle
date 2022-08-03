import React from 'react'
import Row from './Row'

const Grid = (props) => {
    const { input, inputArray, turn } = props;
    console.log(input)

    return (
        <div>
            {inputArray.map((value, i) => {
                if (turn === i) {
                    return <Row key={i} currentInput={input} />
                }
                return <Row key={i} inputArray={value} />
            })}
        </div>
    )
}

export default Grid