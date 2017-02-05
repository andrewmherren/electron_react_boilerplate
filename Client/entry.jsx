import React from 'react'
import ReactDOM from 'react-dom'

// Import css and fonts
require('./Styles/index.styl')

class Entry extends React.Component{
  render () {
    return (
      <div className='main-container'>
        Hello Electron!
      </div>
    )
  }
}

ReactDOM.render(<Entry />, document.getElementById('content'));
