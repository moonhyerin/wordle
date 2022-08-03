import React, { useState } from "react"

const useWordle = (answer) => {
    const [userInput, setUserInput] = useState('')
    const [turn, setTurn] = useState(0)
    const [inputArray, setInputArray] = useState([undefined, undefined, undefined, undefined, undefined, undefined])
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)

    const addNewWord = (coloredInput) => {
        if (userInput === answer) {
            setIsCorrectAnswer(true)
        }

        setTurn((prevTurn) => {
            return prevTurn + 1
        })

        setInputArray((prevInputArray) => {
            let newArray = [...prevInputArray]
            newArray[turn] = coloredInput

            return newArray
        })

        setUserInput('')
    }

    const changeColor = () => {
        let answerArray = answer.split('')
        let coloredArray = userInput.split('').map((letter) => {
            return { key: letter, color: '#787c7e' }
        })

        coloredArray.forEach((letter, i) => {
            if (answerArray[i] === letter.key) {
                coloredArray[i].color = '#6aaa64'
                answerArray[i] = null
            }
        })

        coloredArray.forEach((letter, i) => {
            if (answerArray.includes(letter.key) && letter.color !== '#6aaa64') {
                coloredArray[i].color = 'yellow'
                answerArray[answer.indexOf(letter.key)] = null
            }
        })

        return coloredArray
    }

    const handleClick = (e) => {
        const text = e.target.innerText;

        if (text === 'enter') {
            if (userInput.length !== 5) {
                return
            }

            if (turn > 5) {
                return
            }

            if (inputArray.includes(userInput)) {
                return
            }

            const formattedInput = changeColor()
            addNewWord(formattedInput)
        }

        if (text === 'backspace') {
            setUserInput((prevValue) => {
                return prevValue.slice(0, -1)
            })

            return
        }
 
        if (text !== 'enter' && text !== 'backspace') {
            if (userInput.length < 5) {
                setUserInput((prev) => `${prev}${text}`)
            }
        }
    }

    return { 
        userInput,
        turn,
        inputArray,
        isCorrectAnswer,
        handleClick
    }
    
}

export default useWordle