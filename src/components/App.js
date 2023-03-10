import { useState } from 'react'
import './App.css'
import ModalWindow from './ModalWindow/ModalWindow'
import Table from './Table/Table'
import Settings from './Settings/settings'

function App() {
  const [modal, setModal] = useState('none')
  const [table, setTable] = useState('none')


  const [settingTable, setSettingTable] = useState({
    title: '',
    row: [],
    column: [],
  })

  const showTable = () => {
    setTable('')
  }
  const showModal = () => {
    setModal('')
  }


  const obj = {
    table: table,
    setTable: showTable,
    settingTable: settingTable,
    setSettingTable: setSettingTable,
  }

  return (
    <main>
      <div className="navbar">
        <button className="Btn" onClick={() => showModal()}>
          Создать таблицу
        </button>
      </div>
      <ModalWindow table={obj} modal={modal} setModal={setModal} />
      <Table table={obj} />
      <Settings />
    </main>
  )
}

export default App
