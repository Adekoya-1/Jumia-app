import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <>
    <div className='text-center mt-5'>
    <h1>Page Not Found</h1>
    <Link to='/'>Go back home</Link>
    </div>
    </>
  )
}

export default Notfound