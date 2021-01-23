import React from 'react'
import styled from 'styled-components'
import './spinner.css'

const Loader = styled.div<SpinnerI>`
  width: ${(props) => props.size ? props.size : '60'}px;
  height: ${(props) => props.size ? props.size : '60'}px;
  display: inline-block;
  position: relative;

  div {
    width: ${(props) => props.size ? props.size : '60'}px;
    height: ${(props) => props.size ? props.size : '60'}px;
    box-sizing: border-box;
    display: block;
    position: absolute;
    border-radius: 50%;
    animation: app-spinner 1.2s cubic-bezier(.5, 0, .5, 1) infinite;
    border: ${(props) => props.width ? props.width : '8'}px solid rgb(190, 151, 232);
    border-top-color: #fff;
  }

  div {
    border-color: ${(props) => props.color ? props.color : 'blue'} transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -.45s;
  }

  div:nth-child(2) {
    animation-delay: -.3s;
  }

  div:nth-child(3) {
    animation-delay: -.15s;
  }

  @keyframes app-spinner {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn);
    }
  }
`

interface SpinnerI {
  color?: string
  size?: number
  width?: number
}


const Spinner: React.FC<SpinnerI> = (props): React.ReactElement => {
  return (
    <Loader {...props} >
      <div/>
      <div/>
      <div/>
      <div/>
    </Loader>
  )
}

export default Spinner