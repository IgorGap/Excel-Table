import React from 'react'

const Position = ({ showTextContainer, setShowTextContainer }) => {

  const handleTextContainer = (event) => {
    if (event.target.classList.contains('btn_set_AlignText')) {
      showTextContainer === ''
        ? setShowTextContainer('alignConteiner-active')
        : setShowTextContainer('')
    }
  }
  const handleAlignText = (event) => {
    const focus = document.querySelectorAll('.focusElement')
    focus.forEach((el) => (el.style.textAlign = event.target.id))
  }
  return (
    <div className="btn_set_AlignText" onClick={handleTextContainer}>
      <span className="btnAlignText_span"></span>
      <span className="btnAlignText_span"></span>
      <span className="btnAlignText_span"></span>
      <div className={`alignConteiner ${showTextContainer}`}>
        <div id="left" className="textL" onClick={handleAlignText}>{`<`}</div>
        <div id="center" className="textC" onClick={handleAlignText}>
          |
        </div>
        <div id="right" className="textR" onClick={handleAlignText}>{` >`}</div>
      </div>
    </div>
  )
}

export default Position
