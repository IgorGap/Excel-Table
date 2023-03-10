import React, { useState } from 'react'
import './Table.css'

const Table = ({ table }) => {
  const [mousedown, setMousedown] = useState(false)

  const clickTable = (e) => {
    if (e.target.classList.contains('textarea') && mousedown) {
      e.target.classList.add('focusElement')
    }
  }
  const funcMousedown = (e) => {
    const arrFocus = document.querySelectorAll('.focusElement')
    arrFocus.forEach((item) => item.classList.remove('focusElement'))
    setMousedown(true)
    e.target.classList.add('focusElement')
  }

  const funcMouseup = () => setMousedown(false)

  return (
    table.table !== 'none' && (
      <div className="table_wrap">
        <section className="tablestyle">
          <h2>{table.title}</h2>
          <table>
            <tbody
              onMouseOver={clickTable}
              onMouseDown={funcMousedown}
              onMouseUp={funcMouseup}
            >
              {table.settingTable.row.map((item, index) => {
                return (
                  <tr key={index}>
                    {table.settingTable.column.map((item, ind) => {
                      return (
                        <td key={ind} className="section1">
                          <textarea
                            className="textarea"
                          ></textarea>
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>
      </div>
    )
  )
}

export default Table
