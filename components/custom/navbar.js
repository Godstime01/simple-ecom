'use client'

import Link from "next/link"
import { Switch } from "../ui/switch"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 gap-3 dark:bg-slate-950 dark:text-white">
        <Link href="/" className="flex-1">Simple Shop</Link>
        
        <span className="flex gap-3">
            my cart 
            <span>0</span>
        </span>
        <Switch />
    </div>
  )
}

export default Navbar