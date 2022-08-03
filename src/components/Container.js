import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keyboard from './Keyboard'

const Container = (props) => {
    const { answer } = props
    const { userInput, turn, inputArray, isCorrectAnswer, handleClick } = useWordle(answer)

    useEffect(() => {
    }, [inputArray, turn, isCorrectAnswer])

    return (
      <div>
        <Grid
          input={userInput}
          inputArray={inputArray}
          turn={turn}
        />
        <Keyboard handleClick={handleClick}/>
      </div>
    )
}

export default Container