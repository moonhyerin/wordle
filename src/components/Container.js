import React, { useEffect, useState } from 'react'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import useWordle from '../hooks/useWordle'

import Grid from './Grid'
import Keyboard from './Keyboard'
import Modal from './Modal'

const Container = (props) => {
    const { answer, handleRestart } = props
    const { userInput, turn, inputArray, isCorrectAnswer, usedKeys, resetStates, handleClick, handleCopyClipBoard } = useWordle(answer)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
      if (isCorrectAnswer || turn > 5) {
        setShowModal(true)
      }
    }, [inputArray, turn, isCorrectAnswer])

    const onCloseModal = () => {
      setShowModal(false)
    }

    const onClickShareResult = (resultText, colorBoxs) => {
      let colorBoxToText = ''
      for (var i=0; i<colorBoxs.length; i++) {
        colorBoxToText += '\n' + colorBoxs[i].join('')
      }
      const result = resultText + '\n' + colorBoxToText
      
      handleCopyClipBoard(result)
    }

    const onClickRestart = () => {
      setShowModal(false)
      resetStates()
      handleRestart()
    }

    return (
      <div>
        <Grid
          input={userInput}
          inputArray={inputArray}
          turn={turn}
        />
        <Keyboard handleClick={handleClick} usedKeys={usedKeys} />
        {showModal && 
          <Modal
            isCorrectAnswer={isCorrectAnswer}
            turn={turn}
            inputArray={inputArray}
            handleClose={onCloseModal}
            handleShareResult={onClickShareResult}
            handleRestart={onClickRestart}
          />
        }
        <ToastContainer/>
      </div>
    )
}

export default Container