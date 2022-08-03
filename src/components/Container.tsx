import React from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keyboard from './Keyboard'

type PropsType = {
    answer: string;
}
const Container = (props: PropsType) => {
    const { answer } = props
    const { userInput, handleClick } = useWordle(answer)

    return (
      <div>
        <Grid />
        <Keyboard handleClick={handleClick}/>
      </div>
    )
}

export default Container