import React from 'react'
import ItemEmp from './itemEmp'

export default function ListEmp(props) {
  return (
    <div>
      <h2>List of employees: {props.company}</h2>
      <div className="row">
        {props.ar.map(item => {
          return(
            <ItemEmp key={item.email} item={item} />
          )
        })}
      </div>
    </div>
  )
}
