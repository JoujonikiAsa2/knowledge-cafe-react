import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  return (
    <>
      <Header></Header>
      <div className='grid grid-cols-1 justify-center justify-items-center items-center content-center md:flex md:justify-between md:items-center md:p-4 md:mx-4'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
