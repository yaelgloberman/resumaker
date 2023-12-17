import React from 'react'
import {useForm} from "react-hook-form";

export default function Form() {

  // getValues -> פונקציה שנותנת לבדוק אם ערך של 
  // אינפוט שווה לערך של אינפוט2
  const {register, handleSubmit, formState: {errors}, getValues} = useForm();
  // dataBody -> יכיל כאובייקט את כל הערכים של אינפוטרים שיש להם ריף
  // בפורם המשוגר
  // מחיקת מאפיין
  const onSub = (dataBody) => {
    delete dataBody.phone2;
    console.log(dataBody);
  }

  // register -> פונקציה שמייצר לנו ריף עם וולדזציה לאינפוט מסויים
  const nameRef = register("name",{required:true, minLength:2});
  const phoneRef = register("phone",{required:true, minLength:5});
  const emailRef = register("email",{required:true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})
  const colorRef = register("color",{required:true});
  const phone2Ref = register("phone2",{required:true, validate:(val) => {
    return val == getValues("phone")
  }})
  // בודק אם הערך של טלפון 2 שווה לערך של האינפוט בטלפון 

  return (
    <div className='container'>
      <h2>Form in react</h2>
      <form onSubmit={handleSubmit(onSub)} className='col-md-6 p-2'>

        <label>Name:</label>
        <input {...nameRef} type="text" className='form-control' />

        {errors.name && <div className='text-danger'>* Enter valid name: min 2 chars</div>} 

         <label>Phone:</label>
        <input {...phoneRef} type="tel" className='form-control' />
        {errors.phone && <div className='text-danger'>* Enter valid number: min 9 chars</div>}

        <label>Phone again:</label>
        <input {...phone2Ref} type="tel" className='form-control' />
        {errors.phone2 && <div className='text-danger'>* Phones not match</div>}

        <label>Email:</label>
        <input {...emailRef} type="email" className='form-control' />
        {errors.email && <div className='text-danger'>* Enter valid Email</div>}
        <label>Choose color</label>
        <select {...colorRef} className='form-select'>
          <option value="">Choose color...</option>
          <option value="orange">Orange</option>
          <option value="red">Red</option>
          <option value="blue">blue</option>
        </select>
        {errors.color && <div className='text-danger'>* You must choose color</div>}
        <button className='btn btn-info mt-3'>Send</button>
      </form>
    </div>
  )
}
