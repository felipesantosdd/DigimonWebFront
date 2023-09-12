import React from 'react'
import Swal from 'sweetalert2'

const SucessAlert = (message: string) => {
  Swal.fire({
    title: 'Suceso',
    text: message,
    icon: 'success',
    color: '#fff',
    background: '#252525'
  })
}

export default SucessAlert