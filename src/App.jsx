import React from 'react'
import Navbar from './navbar'

const App = () => {
  return (
    <>
    <Navbar/>
      <div className='min-h-screen w-full relative bg-gradient-to-r from fuchsia-300 to bg-pink-300 flex items-center justify-center flex-col text-center gap-10 text-white p-52'>
          <h1 className='text-7xl'>Section 1</h1>
          <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellat aspernatur quas quam laudantium ea possimus, 
            quasi molestias natus ut totam culpa velit suscipit! Commodi ea assumenda excepturi dolorem doloremque voluptate 
            sit nulla laboriosam asperiores mollitia nobis molestias, dolores quo molestiae rerum necessitatibus autem nesciunt 
            consectetur itaque facilis accusamus quas!
          </p>
      </div>
    </>
  )
}

export default App