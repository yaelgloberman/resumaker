import React, { useEffect } from 'react'
import { useCollection } from '../hooks/useCollection'


export default function FireLiveToys() {
  const {docs: toys} = useCollection("toys")


  return (   <div className='container'>
  <ul>
    {toys.map(item => {
      return(
        <li key={item.id}>{item.title}</li>
      )
    })}
  </ul>
</div>
)};
