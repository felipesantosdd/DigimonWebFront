import React, { useContext } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import { TamerContext } from '@/contexts/tamerContext';
import { ILogin } from '@/interfaces/tamer';

const Login = () => {

    const { Tamer, setLogin } = useContext(TamerContext)



    const schema = yup.object({
        nickname: yup.string().required("Qual o seu nickname"),
        password: yup.string().required("Informe o seu password")
    })

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    function handleLogin(data: ILogin): void {
        Tamer.Login(data)
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
            <h1 className='font-bold text-white text-2xl '>Login</h1>
            <Controller
                control={control}
                name='nickname'
                render={({ field: { onChange, value } }) => {
                    return <TextField
                        className='mb-3'
                        name='nickname'
                        label="Nickname"
                        variant="standard"
                        autoComplete='false'
                        value={value}
                        onChange={onChange} />
                }} />
            {errors.nickname && <h1 className='text-red-800'>{errors.nickname?.message}</h1>}

            <Controller
                control={control}
                name='password'
                render={({ field: { onChange, value } }) => {
                    return <TextField
                        className='mb-3'
                        name='password'
                        label="Password"
                        variant="standard"
                        value={value}
                        type='password'
                        onChange={onChange} />
                }}

            />

            {errors.password && <h1 className='text-red-800 mb-3'>{errors.password?.message}</h1>}

            <Button
                className='m-2'
                variant='contained'
                onClick={handleSubmit(handleLogin)} >Login</Button>
            <h4 className='text-blue-600 cursor-pointer' onClick={() => setLogin(0)}>Registre-se</h4>

        </div>
    )
}

export default Login