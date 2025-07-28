import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const Pagination = () => {
  return (
      
      <div className="flex justify-center items-center gap-2 self-stretch mt-4">
        <ChevronLeft className="w-8 h-8  rounded-[50%] cursor-pointer text-sm text-gray-400 bg-white" />
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((page) => (
            <div
              key={page}
              className={`w-8 h-8 flex hover:cursor-pointer   items-center justify-center rounded ${
                page === 1
                  ? "bg-dashboard-green hover:bg-dashboard-green-light rounded-full text-white"
                  : "text-gray-500"
              } text-sm font-medium`}
            >
              {page}
            </div>
          ))}
          <span className="text-gray-400">...</span>
          <div className="w-8 h-8 flex items-center justify-center text-gray-500 text-sm font-medium">10</div>
        </div>
        <ChevronRight className="w-8 h-8 bg-white cursor-pointer rounded-[50%] text-gray-400" />
      </div>
  )
}

export default Pagination