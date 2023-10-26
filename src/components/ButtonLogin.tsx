import { ReactNode } from "react"

interface IButtonProps{
    children: ReactNode
    onClick?: ()=>void,
    type:"submit"|"button"
}
export default function ButtonLogin({children, onClick,type} : IButtonProps) {
    return (
        <button type={type}  className="flex transition-all items-center justify-center w-full bg-transparent rounded-md h-10 hover:border-0 hover:bg-[#ffc757a4] border-2 border-solid border-[#635a30]" onClick={onClick}>{children}</button>
    )
}