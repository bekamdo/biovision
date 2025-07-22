import StatsCardSection from '@/components/admin/shared/StatsCardSection';
import AuditLogTable from '@/components/admin/table/AuditLogTable';
import React from 'react'

const AuditSecurityPage = () => {
  return (
    <div className="flex w-full flex-col items-start gap-5 p-4 md:p-6 lg:p-5 bg-[#F5F5F5] font-sans max-w-[1338px] mx-auto">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-[#2c2a29] mb-2">Audit & Security Logs</h1>
          <p className="text-[#666666]">Review admin activity,login attempts,and sensitive changes</p>
        </section>
         {/* Stats Cards */}
      <div className="flex flex-col items-end gap-5 self-stretch">
         <StatsCardSection/>
         <AuditLogTable/>
     </div>
    </div>
  )
}

export default AuditSecurityPage;