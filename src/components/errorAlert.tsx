import React from 'react'
import Swal from 'sweetalert2'

const ErrorAlert = (message: string) => {
    Swal.fire({
        title: 'Algo deu errado',
        text: message,
        icon: 'error',
        color: '#fff',
        background: '#252525'
    })
}

export default ErrorAlert