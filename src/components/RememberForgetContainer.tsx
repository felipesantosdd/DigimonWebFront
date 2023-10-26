import Link from "next/link";
import {Inknut_Antiqua} from "next/font/google"
import  {useFormContext} from "react-hook-form"
import * as Checkbox from '@radix-ui/react-checkbox';
 
 

const inkutFont = Inknut_Antiqua({weight:"400",subsets:["latin"]})
export default function RememberForgetContainer() {
    const {register} = useFormContext()
    return (
        <div className="flex justify-between mt-6 ">
            <div className="flex gap-[0.5rem] items-center " style={{ }}>
               <input id="c1" type="checkbox" className="appearance-none w-5 h-5 text-xs relative checked:before:overflow-hidden checked:before:content-['✔']  checked:before:absolute checked:before:-translate-x-2/4  checked:before:-translate-y-2/4 checked:before:top-1/2 checked:before:left-1/2   border-solid border-zinc-500 rounded-md bg-[#ffc757a4]" />
                <label className="text-zinc-400 text-[12px]" htmlFor="c1">
                    Lembrar de mim
                </label>
            </div>
            <Link href="/password-forget"><span className={`text-[12px] text-zinc-400`}>Esqueci a senha</span></Link>
        </div>
    )
}