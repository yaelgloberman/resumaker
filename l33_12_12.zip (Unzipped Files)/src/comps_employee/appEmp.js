import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import InputEmp from './inputEmp'
import ListEmp from './listEmp'

export default function AppEmp() {
  const [ar,setAr] = useState([]);
  const [company,setCompany] = useState("")
  // אוסף פארמס מהכתובת
  const params = useParams();

  useEffect(() => {
    doApi()
  },[params["company"]])

  const doApi = async() => {
    //req.params.company
    let searchQ = params["company"] || "SSN";
    setCompany(searchQ)
    let url = `https://randomuser.me/api/?results=10&seed=${searchQ}`;
    let resp = await axios.get(url);
    console.log(resp.data.results);
    setAr(resp.data.results);
  }

  return (
    <div className='container'>
      <InputEmp />
      <ListEmp ar={ar} company={company} />
    </div>
  )
}
