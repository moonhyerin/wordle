import React, { useState } from "react"
import { toast } from "react-toastify"
import data from '../data/data.json';

const useWordle = (answer) => {
    const [userInput, setUserInput] = useState('')
    const [turn, setTurn] = useState(0)
    const [inputArray, setInputArray] = useState([undefined, undefined, undefined, undefined, undefined, undefined])
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)
    const [usedKeys, setUsedKeys] = useState({})

    const resetStates = () => {
        setUserInput('')
        setTurn(0)
        setInputArray([undefined, undefined, undefined, undefined, undefined, undefined])
        setIsCorrectAnswer(false)
        setUsedKeys({})
    }

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
        
        setUsedKeys((prevKeys) => {
            let coloredKeys = {...prevKeys}

            coloredInput.forEach((input) => {
                const currentColor = coloredKeys[input.key]

                if (input.color === '#6aaa64') {
                    coloredKeys[input.key] = '#6aaa64'
                    return
                }

                if (input.color === '#c9b458' && currentColor !== '#6aaa64') {
                    coloredKeys[input.key] = '#c9b458'
                    return
                }

                if (input.color === '#787c7e' && currentColor !== '#c9b458' && currentColor !== '#6aaa64') {
                    coloredKeys[input.key] = '#787c7e'
                    return
                }
            })

            return coloredKeys
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
                coloredArray[i].color = '#c9b458'
                answerArray[answer.indexOf(letter.key)] = null
            }
        })

        return coloredArray
    }

    const handleClick = (e) => {
        const text = e.target.innerText;

        if (text === 'enter') {
            if (userInput.length !== 5) {
                toast.error('글자 수가 충분하지 않습니다.', { 
                    autoClose: 2000,
                    position: toast.POSITION.TOP_RIGHT,
                    hideProgressBar: true,
                    theme: 'dark',
                })
                return
            }

            if (turn > 5) {
                return
            }

            if (!data.includes(userInput)) {
                toast.error('단어를 찾을 수 없습니다.', { 
                    autoClose: 2000,
                    position: toast.POSITION.TOP_RIGHT,
                    hideProgressBar: true,
                    theme: 'dark',
                })
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

    const handleCopyClipBoard = async (result) => {
        try {
            await navigator.clipboard.writeText(result)
            return true
        } catch (err) {
            console.error(err)
        } finally {
            toast.success('클립보드에 복사되었습니다.', {
                autoClose: 2000,
                position: toast.POSITION.TOP_RIGHT,
                hideProgressBar: true,
                theme: 'dark',
            })
        }
    }

    return { 
        userInput,
        turn,
        inputArray,
        isCorrectAnswer,
        usedKeys,
        resetStates,
        handleClick,
        handleCopyClipBoard
    }
    
}

export default useWordle