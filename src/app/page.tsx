"use client"
import Image from 'next/image'
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'



export default function Home() {

  const schema = yup.object({
    nickname: yup.string().required("Qual o seu nickname"),
    password: yup.string().required("Informe o seu password")
  })

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  function login(data: any): void {
    console.log(data)
  }

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      style={{
        background: `url('https://static.vecteezy.com/system/resources/previews/001/987/871/non_2x/abstract-black-stripes-diagonal-background-free-vector.jpg')`,
        backgroundSize: 'center',
      }}
    >
      <div className='flex flex-col justify-center text-center'>

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
                className='mb-6'
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
                className='mb-6'
                name='password'
                label="Password"
                value={value}
                type='password'
                onChange={onChange}
              ></TextField>
            }}

          />

          {errors.password && <h1 className='text-red-800'>{errors.password?.message}</h1>}

          <Button variant='contained' onClick={handleSubmit(login)} >Login</Button>
          <link rel="stylesheet" href="" />
        </div>

      </div>
    </main>
  )
}
