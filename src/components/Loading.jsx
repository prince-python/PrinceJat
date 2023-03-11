import React from 'react'
import  { Triangle} from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='container-fluid align-content-center'  >
      <Triangle
  height="100vh"
  width="100vh"
  color="black"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
  
/>
    </div>
  )
}

export default Loading
