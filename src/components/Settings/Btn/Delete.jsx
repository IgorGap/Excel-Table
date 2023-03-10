import React from 'react'
import '../Settings.css'

const Delete = () => {
  const funcDelElem = () => {
    const arrFocusEl = document.querySelectorAll('.focusElement')
    arrFocusEl.forEach((el) => el.remove())
  }
  return (
    <div className="btn_set_del" onClick={funcDelElem}>
      Del
    </div>
  )
}

export default Delete
