import React from 'react'
import { Triangle } from 'react-loader-spinner'

const Loading = () => {
  return (<center>
  
<div className=' bg-primary  h-50 w-50'>

  <Triangle
  
  height="100vh"
  width="100vh"
  color="black"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
  
  
/></div>
</center>
  )
}

export default Loading
