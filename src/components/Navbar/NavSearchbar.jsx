import React from 'react'
import { Search } from 'lucide-react'

const NavSearchbar = () => {
  return (
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        placeholder="Write something"
        className="w-90 bg-white  pl-4 py-2 rounded  focus:outline-none "
      />
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer" />
    </div>
  )
}

export default NavSearchbar
