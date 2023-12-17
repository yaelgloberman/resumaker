import React from 'react'

export default function ItemEmp(props) {
  let item = props.item;
  return (
    <div className='col-md-6 border'>
      <img src={item.picture.large} className="w-25 float-start me-2" />
      <h2>{item.name.first} {item.name.last}</h2>
      <div>Age:{item.dob.age}</div>
      <div>National: {item.nat}</div>
    </div>
  )
}
