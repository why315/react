import React from 'react'
import './index.scss'

const Login = () => {
  return (
    <div className='login'>
      <label htmlFor="" name="username">
        用户名:
        <input type="text" />
      </label>
      <label htmlFor="" name="password">
        密码:
        <input type='password' />
        
      </label>
      <button onClick={(value) => {
        console.log(value)
      }} type="submit">登录</button>
    </div>
  )
}

export default Login