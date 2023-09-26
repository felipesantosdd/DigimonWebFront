
import React, { useContext, useEffect, useState } from 'react'
import { TamerContext } from '@/contexts/tamerContext'
import MenuEvolutions from './menuEvolutions'
import Menu from './MenuMain'
import MenuStatus from './MenuStatus'
import MenuBag from './MenuBag'
import MenuHistoric from './MenuHistoric'
import MenuFriends from './MenuFriends'
import MenuMission from './MenuMission'

export default function MenuBottom() {
    /*
    interface IActiveMenu{
        menu: "main" | "status" | "digivice" | "bag" | "historic" | "friends" | "mission" // os diversos menus que existem
    }*/
    const { setMenu, Authentication } = useContext(TamerContext)
    const [activeMenu,setActiveMenu ] = useState<"main" | "status" | "digivice" | "bag" | "historic" | "friends" | "mission" | null>("main") // os diversos menus que existem
    useEffect(() => {
        Authentication()

    }, [])

    
    
    
    return (
        <div className='bg-yellow-300 bottom-0 absolute w-[100%] p-3 flex row justify-between'>
            {activeMenu === "main" && <Menu setActiveMenu={setActiveMenu}/>}
            {activeMenu === "status" && <MenuStatus setActiveMenu={setActiveMenu}/>}
            {activeMenu === "digivice" && <MenuEvolutions setActiveMenu={setActiveMenu}/>}
            {activeMenu === "bag" && <MenuBag setActiveMenu={setActiveMenu}/>}
            {activeMenu === "historic" && <MenuHistoric setActiveMenu={setActiveMenu}/>}
            {activeMenu === "friends" && <MenuFriends setActiveMenu={setActiveMenu}/>}
            {activeMenu === "mission" && <MenuMission setActiveMenu={setActiveMenu}/>}
 
        </div>
    )
}
