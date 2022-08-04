import React from 'react'

const Modal = (props) => {
    const { isCorrectAnswer, turn, inputArray, handleClose, handleShareResult, handleRestart } = props

    const formattedDate = () => {
        var today = new Date()
        today.setHours(today.getHours() + 9)
        return today.toISOString().replace('T', ' ').substring(0, 19)
    }
    const resultText = `Wordle ${formattedDate()} ${turn}/6`
    const colorBoxs = inputArray.filter(element => element !== undefined).map((input, i) => {
        return input.map((letter) => {
            let imoji
            switch (letter.color) {
                case '#787c7e':
                    imoji = '⬛'
                    break
                case '#6aaa64':
                    imoji = '🟩'
                    break
                case '#c9b458':
                    imoji = '🟨'
                    break
                default: break
            }
            return imoji
        })
    })

    return (
        <div className='modal'>
            <div>
                <button className='close' onClick={handleClose}>X</button>
                <h1>{isCorrectAnswer ? '🎉Congrats!🎉' : 'It\'s okay, let\'s try again🤞'}</h1>
                <span>{resultText}</span>
                <div className='result'>
                    {colorBoxs.map((line, i) => <span key={i}>{line}</span>)}
                </div>
                <button onClick={() => handleShareResult(resultText, colorBoxs)}>SHARE RESULT</button>
                <button onClick={handleRestart}>RESTART GAME</button>
            </div>
        </div>
    )
}

export default Modal
