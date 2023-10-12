import React from 'react'
import TextField from '../../Components/TextField'
import Button from '../../Components/Button'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { editUser } from './userSlice'


const EditUser = () => {
    const params=useParams()
    const dispatch=useDispatch()
    const users=useSelector(store=>store.users)
    const navigate=useNavigate()
    const existingUser=users.filter(user=>user.id===params.id)
    const {name,email}= existingUser[0];
    const [values,setValues]=useState({
      name,
      email
    })
    const handleEditUser=()=>{
      setValues({name:"", email:""})
      dispatch(editUser({
        id:params.id,
        name:values.name,
        email:values.email
      }))
      navigate("/")
    }
    return (
      <div className='mt-10 max-w-xl mx-auto'>
        <TextField 
        value={values.name}
        onChange={(e)=>setValues({...values,name:e.target.value})}
        label="Name"
        inputProps={{type:"text", placeholder:"Nitesh Kumar"}} 
         /> 
         <br/>
        <TextField 
        value={values.email}
        onChange={(e)=>setValues({...values,email:e.target.value})}
        label="Email"
        inputProps={{type:"email", placeholder:"nitesh@gmail.com"}} 
         /> 
         <Button onClick={handleEditUser}>Edit</Button>
      </div>
    )
}

export default EditUser;
