import React from 'react'
import { ThemeContent } from '../..'


const ThemeChildren = () => {
  return (
    <ThemeContent.Consumer>
      {
        (theme)=>{
          return (
            <button style={{backgroundColor:theme.background ,color:"#fff"}}>点击</button>
          )
        }
      }
    </ThemeContent.Consumer>
  )
}

export default ThemeChildren