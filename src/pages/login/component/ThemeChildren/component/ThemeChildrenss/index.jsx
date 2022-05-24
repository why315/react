import React from 'react'
import { ThemeContent } from '../../../..'


const ThemeChildrenss = () => {
  const { value, name, age } = React.useContext(ThemeContent)
  return (
    <div>
      {value}--
      {
        name
      }--
      {
        age
      }
    </div>
  )

}

export default ThemeChildrenss