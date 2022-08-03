import React, { useState } from "react"

const useWordle = (answer) => {
    const [userInput, setUserInput] = useState('')

    const handleClick = (e) => {
        const text = e.target.innerText;
        if (userInput.length < 5) {
            setUserInput((prev) => `${prev}${text}`)
        }
    }

    return { userInput, handleClick }
    
}

export default useWordle