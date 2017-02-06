import React from 'react'
import ReactDOM from 'react-dom'

// Import css and fonts
require('./Styles/index.styl')

import jQuery from 'jquery'
window.jQuery = jQuery
require('bootstrap')

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
