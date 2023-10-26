import React, { useContext, useEffect, useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller, FormProvider } from 'react-hook-form'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import { TamerContext } from '@/contexts/tamerContext';
import { ILogin } from '@/interfaces/tamer';
import {EyeSlash,EyeClosed,Eyeglasses, HandEye, Eye} from "phosphor-react"
import RememberForgetContainer from './RememberForgetContainer';
import ButtonLogin from './ButtonLogin';
import {Inknut_Antiqua} from "next/font/google";
 
const inkutFont = Inknut_Antiqua({weight:"400",subsets:["latin"]})
const schema = yup.object({
    nick: yup.string().required("Informe o seu nickname"),
    password: yup.string().required("Informe o seu password"),
    remember: yup.boolean()
})
 
 
const Login = () => {

    const { Login, Authentication, tamerData, setLogin, setTamerData } = useContext(TamerContext)
   
   
    const dataForm = useForm({
        resolver: yupResolver(schema)
    })

    const  { control,register, handleSubmit, formState: { errors } } = dataForm

    function handleLogin(data: ILogin) {
       Login(data)
    }

    useEffect(() => {
        const auth = localStorage.getItem("authToken")
        if (auth) {
            window.location.href = '/home';
        }
    }, []);
    const [showPassword,setShowPassword] = useState(false)
    return (
        <FormProvider {...dataForm}>

           <div className='w-screen min-h-screen mx-auto text-white bg-[#202024]'>
                <div className='max-w-[400px] mx-auto mt-28 p-8 rounded-md sm:bg-transparent bg-[#121214]' >
                    
                    <h1 className={`text-[16px] text-zinc-400 mb-4`}>CONECTE-SE</h1>
                    <form onSubmit={handleSubmit(handleLogin)} >
                       
                            {/*<p className='text-red-700 text-[12px]'>senha ou nome de usuario errado</p>*/}
                    
                            <div className='flex flex-col items-start gap-1 mt-1'>
                                <label  className={`text-zinc-400  text-[12px]  `} >Digite seu apelido</label>
                                <div style={{background:"#635a30"}} className={`flex items-center w-full h-10 px-4 rounded-md border-2  ${errors.nick ? " border-red-700":"border-transparent"}`}>
                                        <input  {...register("nick")}  className={`w-full bg-transparent  text-zinc-300 text-[12px]`} type="text" placeholder='Apelido' /> 
                                </div>
                                { errors.nick && <p className='text-[10px] text-red-700'>{errors.nick.message}</p> }
                            </div>
                            
                            <div className='flex flex-col items-start gap-1 mt-6'>
                                <label  className={`  text-[12px]  text-zinc-400 `}>Digite sua senha</label>
                                <div style={{background:"#635a30"}} className={`  border-2    ${errors.password ? " border-red-700":"border-transparent"} flex items-center w-full h-10 px-4 rounded-md`}>
                                    <input {...register("password")}  className={`w-full bg-transparent text-zinc-300 text-[12px]`} type={ !showPassword ? "password" : "text"}  placeholder='senha' /> 
                                    <button type='button' onClick={()=>setShowPassword((state)=>!state)}>{ !showPassword ? <Eye weight='fill' color='#333' size={22}/>:<EyeClosed weight='fill' color='#333' size={22}/>}</button>
                                </div>
                                { errors.password && <p className='text-[10px] text-red-700'>{errors.password.message}</p> }
                            </div>

                            <RememberForgetContainer/>
                            
                            <div className='mt-2 w-full '>
                                <ButtonLogin type='submit' >Entrar</ButtonLogin>
                            </div>
                    </form>
                    <button  className={` mt-4 font-bold text-[12px] text-zinc-400`} onClick={()=>setLogin(0)}>Ainda não tem conta? Regista-se</button>
                        
                </div>
        </div> 
        </FormProvider>
        
    )
}

export default Login