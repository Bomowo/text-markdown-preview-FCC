import {useState} from 'react'

function App() {
  const [text, setText] = useState('Hello, World!')

  function changeTextArea (e) {
    setText(e.target.value)
  }

  return (
    <>
      <div id="preview" className='preview'>{text}</div>
      <textarea id='editor' 
                onKeyDown={changeTextArea} 
                value={text} 
                onChange={changeTextArea}/>
    </>
  )
}

export default App
