import React from 'react'
import { Triangle } from 'react-loader-spinner'

const Loading = () => {
  return (<center>
  
<div className=' bg-transparent align-item-center   h-25 w-25'>

  <Triangle
  height="100vh"
  width="100vh"
  color="white"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
  
  
/></div>
</center>
  )
}

export default Loading
