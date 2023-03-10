import React from 'react'

const ColorText = () => {
  const changeTcolor = (event) => {
    const focus = document.querySelectorAll('.focusElement')
    focus.forEach((el) => (el.style.color = event.target.value))
  }
  return (
    <div className="btn_set_bColor">
      <input onChange={changeTcolor} type="color" />
    </div>
  )
}

export default ColorText
