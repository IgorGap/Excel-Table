import React, { useState } from 'react'
import ColorBack from './Btn/ColorBack'
import ColorText from './Btn/ColorText'
import Position from './Btn/Position'
import Delete from './Btn/Delete'
import './Settings.css'

const Settings = () => {
  const [showSetting, setShowSetting] = useState('notSlide')
  const [showTextContainer, setShowTextContainer] = useState('')
  const eventShowSetting = () => {
    showSetting === 'notSlide' ? setShowSetting('') : setShowSetting('notSlide')
    setShowTextContainer('')
  }

  return (
    <section className={`settingContainer ${showSetting}`}>
      <button className="sett_wrap" onClick={eventShowSetting}>
        X
      </button>
      <div className="settingContainer_block">
        <ColorBack />
        <ColorText />
        <Position
          showTextContainer={showTextContainer}
          setShowTextContainer={setShowTextContainer}
        />
        <Delete />
      </div>
    </section>
  )
}

export default Settings
