import React, { useContext, useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller, FormProvider } from 'react-hook-form'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import { IRegister } from '@/interfaces/tamer';
import { TamerContext } from '@/contexts/tamerContext';
import ButtonLogin from './ButtonLogin';
import { Eye, EyeClosed, EyeSlash } from 'phosphor-react';


const Register = () => {

    const { setLogin, Register } = useContext(TamerContext)

    const schema = yup.object({
        nickname: yup.string().required("O Nickname é obrigatorio"),
        name: yup.string().required("O Nome é obrigatorio"),
        email: yup.string().email("O email não é válido").required("O Email é obrigatorio"),
        password: yup.string().required("O Password é obrigatorio"),
        confirm: yup.string().oneOf([yup.ref("password")], "a senha não corresponse")
    })

    const dataForm = useForm({
        resolver: yupResolver(schema)
    })
    const { control, handleSubmit,register, formState: { errors } } = dataForm

    function handleRegister(data: IRegister) {
      Register(data)
    }
    const [showPassword,setShowPassword] = useState(false)
  
    return (

        <FormProvider {...dataForm}>
          <div className='w-screen min-h-screen mx-auto py-8 text-white bg-[#202024] '>
                <div className='max-w-[400px] mx-auto mt-10 p-8 rounded-md sm:bg-transparent bg-[#121214]' >
                    <h1 className='font-bold text-white text-[1.5rem]'>Regista-se</h1>
                    <form onSubmit={handleSubmit(handleRegister)} className='w-full flex flex-col gap-4'>
                    
                         <div className='flex flex-col items-start gap-1 mt-1'>
                                <label  className={`text-zinc-400  text-[12px]  `} >Digite seu Nome</label>
                                <div style={{background:"#635a30"}} className={`flex items-center w-full h-10 px-4 rounded-md border-2  ${errors.name ? " border-red-700":"border-transparent"}`}>
                                        <input  {...register("name")}  className={`w-full bg-transparent  text-zinc-300 text-[12px]`} type="text" placeholder='Nome' /> 
                                </div>
                                { errors.name && <p className='text-[10px] text-red-700'>{errors.name.message}</p> }
                        </div>
                         <div className='flex flex-col items-start gap-1 mt-1'>
                                <label  className={`text-zinc-400  text-[12px]  `} >Digite seu apelido</label>
                                <div style={{background:"#635a30"}} className={`flex items-center w-full h-10 px-4 rounded-md border-2  ${errors.nickname ? " border-red-700":"border-transparent"}`}>
                                        <input  {...register("nickname")}  className={`w-full bg-transparent  text-zinc-300 text-[12px]`} type="text" placeholder='Apelido' /> 
                                </div>
                                { errors.nickname && <p className='text-[10px] text-red-700'>{errors.nickname.message}</p> }
                        </div>
                         <div className='flex flex-col items-start gap-1 mt-1'>
                                <label  className={`text-zinc-400  text-[12px]  `} >Digite seu Email</label>
                                <div style={{background:"#635a30"}} className={`flex items-center w-full h-10 px-4 rounded-md border-2  ${errors.email ? " border-red-700":"border-transparent"}`}>
                                        <input  {...register("email")}  className={`w-full bg-transparent  text-zinc-300 text-[12px]`} type="text" placeholder='Email' /> 
                                </div>
                                { errors.email && <p className='text-[10px] text-red-700'>{errors.email.message}</p> }
                        </div>
                         <div className='flex flex-col items-start gap-1 mt-1'>
                                <label  className={`text-zinc-400  text-[12px]  `} >Digite sua Senha</label>
                                <div style={{background:"#635a30"}} className={`flex items-center w-full h-10 px-4 rounded-md border-2  ${errors.password ? " border-red-700":"border-transparent"}`}>
                                        <input  {...register("password")}  className={`w-full bg-transparent  text-zinc-300 text-[12px]`} type={ !showPassword ? "password" : "text"}  placeholder='Senha' /> 
                                        <button type='button' onClick={()=>setShowPassword((state)=>!state)}>{ !showPassword ? <Eye weight='fill' color='#333' size={22}/>:<EyeClosed weight='fill' color='#333' size={22}/>}</button>
                                </div>
                                { errors.password && <p className='text-[10px] text-red-700'>{errors.password.message}</p> }
                        </div>
                         <div className='flex flex-col items-start gap-1 mt-1'>
                                <label  className={`text-zinc-400  text-[12px]  `} >Confirme sua Senha</label>
                                <div style={{background:"#635a30"}} className={`flex items-center w-full h-10 px-4 rounded-md border-2  ${errors.confirm ? " border-red-700":"border-transparent"}`}>
                                        <input  {...register("confirm")}  className={`w-full bg-transparent  text-zinc-300 text-[12px]`} type="password" placeholder='confirmar senha' /> 
                                </div>
                                { errors.confirm && <p className='text-[10px] text-red-700'>{errors.confirm.message}</p> }
                        </div>
                        <div className='mt-4'>
                            <ButtonLogin type='submit'>Criar conta</ButtonLogin>
                        </div>
                            
                         </form>
                         <button type='button'  className={` mt-4 font-bold text-[12px] text-zinc-400`} onClick={()=>setLogin(1)}>Já possui conta? Entrar</button>
                       
            </div>
        </div>
        </FormProvider>
       
    )
}

export default Register