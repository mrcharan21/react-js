import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function DeleteTask() {

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(()=>{
        
        Swal.fire({
            title: 'Are you sure?',
            showDenyButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Don't Delete`
        }).then((result)=>{
            if(result.isConfirmed){
                axios.delete(`http://localhost:8000/tasks/${id}`).then(()=>{
                    Swal.fire("Your task has been deleted!",'', 'success')
                    navigate('/');
                });
            }else if(result.isDenied){
                navigate('/');
            }
        })
    }, [])

  return (
    <>

    </>
  )
}
