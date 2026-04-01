import React from 'react'
// import Card from './components/Card'
import {Bookmark} from 'lucide-react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
          <Card com='Amazon' des='UI/UX designer'/>
          <Card com='Microsoft' des='Web Developer'/>
          <Card com='Flipkart' des='ML Engineer'/>
    </div>
  )
}

export default App
