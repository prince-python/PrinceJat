import React from 'react'
import  { Triangle} from 'react-loader-spinner'

const Loading = () => {
  return (
    <center><div className='container-fluid align-content-center'  data-aos-easing="ease-in-back"
    data-aos-delay="100"
    data-aos-offset="100" >
      <Triangle
  height="100vh"
  width="100vh"
  color="blue"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
  
/>
    </div></center>
  )
}

export default Loading
