import React from 'react'
import Grid from './Grid'
import Keyboard from './Keyboard'

type PropsType = {
    answer: string;
}

const Wordle = (props: PropsType) => {
    const { answer } = props

    return (
      <div>
        <Grid />
        <Keyboard />
      </div>
    )
}

export default Wordle