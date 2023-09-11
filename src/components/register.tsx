import React, { useContext } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import { IRegister } from '@/interfaces/tamer';
import { TamerContext } from '@/contexts/tamerContext';


const Register = () => {

    const { login, setLogin } = useContext(TamerContext)

    const schema = yup.object({
        nickname: yup.string().required("O Nickname é obrigatorio"),
        name: yup.string().required("O Nome é obrigatorio"),
        email: yup.string().required("O Email é obrigatorio"),
        password: yup.string().required("O Password é obrigatorio"),
    })


    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    function register(data: IRegister) {
        console.log(data)
    }

    return (
        <div className=' w-[300px] h-[auto] flex flex-col justify-center text-center px-10 py-14' style={{
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
        }}>
            <h1 className='font-bold text-white 2xl:'>Registro</h1>

            <Controller
                control={control}
                name='name'
                render={({ field: { onChange, value } }) => {
                    return (
                        <TextField
                            label='Nome'
                            variant='standard'
                            autoComplete='false'
                            value={value}
                            className='mb-1'
                            onChange={onChange}
                        />
                    )
                }}
            />
            {errors.name && <h1 className='text-red-800 mb-0'>{errors.name?.message}</h1>}
            <Controller
                control={control}
                name='nickname'
                render={({ field: { onChange, value } }) => {
                    return (
                        <TextField
                            label='Nickname'
                            variant='standard'
                            autoComplete='false'
                            value={value}
                            className='mb-1'
                            onChange={onChange}
                        />
                    )
                }}
            />
            {errors.email && <h1 className='text-red-800 mb-0'>{errors.email?.message}</h1>}
            <Controller
                control={control}
                name='email'
                render={({ field: { onChange, value } }) => {
                    return (
                        <TextField

                            label='email'
                            variant='standard'
                            autoComplete='false'
                            value={value}
                            className='mb-1'
                            onChange={onChange}
                        />
                    )
                }}
            />
            {errors.nickname && <h1 className='text-red-800 mb-0'>{errors.nickname?.message}</h1>}
            <Controller
                control={control}
                name='password'
                render={({ field: { onChange, value } }) => {
                    return (
                        <TextField
                            label='password'
                            variant='standard'
                            autoComplete='false'
                            value={value}
                            className='mb-1'
                            onChange={onChange}
                        />
                    )
                }}
            />

            {errors.password && <h1 className='text-red-800 mb-5'>{errors.password?.message}</h1>}

            <Button className='m-2' variant='contained' onClick={handleSubmit(register)} >Registro</Button>
            <h4 className='text-blue-600 mt-5 cursor-pointer' onClick={() => setLogin(1)}>Faça Login</h4>
        </div>
    )
}

export default Register