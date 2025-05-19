import { Menu } from 'lucide-react'
import React from 'react'

const NavCategories = () => {
  return (
    <div className="flex items-center gap-2 bg-teal-600 px-10 h-16  cursor-pointer select-none  text-white font-medium">
      <Menu size={20} />
      <span>Categories</span>
    </div>
  )
}

export default NavCategories
