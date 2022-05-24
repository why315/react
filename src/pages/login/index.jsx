import React from 'react'
import ThemeChildren from './component/ThemeChildren'
import './index.scss'



export const ThemeContent = React.createContext('obj')

const Login = () => {
  const back = {
    dark: {
      background: "#000"
    }
  }
  return (
    <ThemeContent.Provider  value={back.dark} >
      <ThemeChildren />
    </ThemeContent.Provider>
  )
}

export default Login