import React from 'react'
import classnames from 'classnames'

const KEYPAD = [
    [ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p" ],
    [ "a", "s", "d", "f", "g", "h", "j", "k", "l" ],
    [ "enter", "z", "x", "c", "v", "b", "n", "m", "backspace" ],
]

const Keyboard = (props) => {
    const { handleClick } = props

    return (
        <div className="keyboard">
            {KEYPAD.map((line, i) => {
                return (
                    <div key={i} className="line">
                        {line.map((value) => {
                            return (
                                <div 
                                    key={value}
                                    className={classnames("key", {"wide": value === "enter" || value === "backspace"})}
                                    onClick={handleClick}
                                >
                                    {value}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Keyboard