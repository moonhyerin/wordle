import React, { useState } from "react"

const useWordle = (answer) => {
    const [userInput, setUserInput] = useState('')
    const [turn, setTurn] = useState(0)
    const [inputArray, setInputArray] = useState([])
    const [correctAnswer, setIsCorrectAnswer] = useState(false)

    const addNewWord = () => {
        if (userInput === answer) {
            setIsCorrectAnswer(true)
        }

        setTurn((prevTurn) => {
            return prevTurn + 1
        })

        setInputArray((prevInputArray) => {
            let newArray = [...prevInputArray]
            newArray[turn] = userInput

            return newArray
        })

        setUserInput('')
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

            addNewWord()
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

    return { userInput, handleClick }
    
}

export default useWordle