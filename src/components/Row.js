import React from 'react'

const Row = (props) => {
    const { currentInput, inputArray } = props

    if (inputArray) {
        return (
            <div className="row past">
                {inputArray.map((letter, i) => (
                    <div key={i} className={letter.color} style={{background: letter.color}}>{letter.key}</div>
                ))}
            </div>
        )
    }

    if (currentInput) {
        let letters = currentInput.split("")

        return (
            <div className="row current">
                {letters.map((letter, i) => (
                    <div key={i} className="fill">{letter}</div>
                ))}
                {[...Array(5 - letters.length)].map((a, i) => (
                    <div key={i}></div>
                ))}
            </div>
        )
    }

    return (
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Row