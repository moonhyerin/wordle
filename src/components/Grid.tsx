import React from 'react'

const Grid = () => {
    const instantGuess = [null, null, null, null, null, null]

    return (
        <div>
            {instantGuess.map((guess: any, i: number) => {
                return (
                    <div key={i} className="row">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Grid
