import React from 'react'
import HomeIndexs from './component/HomeIndexs'



const Home = () => {
  const data = {
    value:'90',
    onFresh:()=>{
      return (
        <div>123</div>
      )
    }
  }
  return (
    < div >
      <HomeIndexs  value = {data} />
    </div>
  )
}

export default Home