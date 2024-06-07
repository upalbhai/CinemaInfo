'use client'
import {MdLightMode, MdDarkMode} from  'react-icons/md';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
export default function DarkModeSwitch() {
    const {theme,setTheme,systemTheme} = useTheme();
    const [mounted,setmounted]=useState(false)
    const currentTheme = theme === 'system' ?'systemTheme':theme;
    useEffect(()=>setmounted(true),[])
  return (
    <div>
      { mounted && 
      (currentTheme==='dark' ? <MdDarkMode onClick={()=>setTheme('light')} className='text-xl cursor-pointer hover:text-orange-500'/> : <MdLightMode onClick={()=>setTheme('dark')}  className='text-xl cursor-pointer hover:text-orange-500'/>)}
    </div>
  )
}
