import React from 'react'

const ColorBack = () => {
  const changeBcolor = (event) => {
    const focus = document.querySelectorAll('.focusElement')
    focus.forEach((el) => (el.style.backgroundColor = event.target.value))
  }
  return (
    <div className="btn_set_bColor">
      <input onChange={changeBcolor} type="color" />
    </div>
  )
}

export default ColorBack
