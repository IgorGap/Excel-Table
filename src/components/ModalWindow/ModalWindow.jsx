import React from 'react'
import './ModalWindow.css'

const ModalWindow = ({ table, modal, setModal }) => {
  const getArr = (n) => {
    const arr = []
    arr.length = n
    arr.fill(0)
    return arr
  }

  const handleSubmit = (e) => {
    console.log('кнопка работает')
    e.preventDefault()
    setModal('none')
    table.setTable()

    console.log('table', table.settingTable)
  }

  const changeHandler = (event) => {
    console.log('я в инпуте')
    table.setSettingTable((prev) => ({
      ...prev,
      [event.target.name]:
        event.target.name !== 'title'
          ? getArr(event.target.value)
          : event.target.value,
    }))
  }

  return (
    <div className={`modal_wrap ${modal}`}>
      <div className='modalStyle'>
        <button className="BtnClose" onClick={() => setModal('none')}>
          <span className="modal_close_s1"></span>
          <span className="modal_close_s2"></span>
        </button>

        <h2>Указать настройки таблицы</h2>

        <div className="modal_input_cont">
          <label>Название</label>
          <input
            name="title"
            onChange={changeHandler}
            placeholder="введите текст"
          ></input>
        </div>

        <div className="modal_input_cont">
          <label>Количество строк</label>
          <input
            name="row"
            onChange={changeHandler}
            placeholder="укажите значение"
          ></input>
        </div>

        <div className="modal_input_cont">
          <label>Количество столбцов</label>
          <input
            name="column"
            onChange={changeHandler}
            placeholder="укажите значение"
          ></input>
        </div>

        <button className="Btn_modal" onClick={handleSubmit}>
          добавить
        </button>
      </div>
    </div>
  )
}

export default ModalWindow
