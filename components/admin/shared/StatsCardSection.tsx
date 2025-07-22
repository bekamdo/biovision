import React from 'react'
import { MiniChart } from '../cards/MiniChart'
import { StatCard } from '../cards/StatCard'
import RecentActivityCard from '../cards/RecentCard'

const StatsCardSection = () => {
  return (
     <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center self-stretch gap-5">
          <div className="flex w-full  lg:w-[732px] flex-col items-start gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 self-stretch">
              <StatCard
                title="Users"
                value="49,937"
                change="+1,292 past week"
                bgColor="bg-yellow-50"
              />
              <StatCard
                title="Outlets"
                value="3,590"
                change="+10 new this week"
                bgColor="bg-orange-100"
              />
              <StatCard
                title="Products"
                value="78,093"
                change="+907 this week"
                bgColor="bg-blue-100"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 self-stretch">
              <MiniChart
                title="Survery Participation"
                value="216"
                change="+12% today"
              />
              <MiniChart
                title="Newsletter Growth"
                value="16"
                change="+11 today"
              />
            </div>
          </div>
           <RecentActivityCard
              time="10.40 AM, Fri 10 June 2025"
              user="Mary N."
             message="submitted a new story"
              summary="Kindly check the requirements and terms of work and make sure everything is right."
              uploadsToday={12}
/>
        </div>

  )
}

export default StatsCardSection