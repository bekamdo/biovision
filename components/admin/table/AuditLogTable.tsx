
import { auditData } from "@/app/data/sampledata";
import Pagination from "../shared/Pagination";


export default function AuditLogTable() {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 sm:p-5 flex flex-col gap-8 sm:gap-[50px] font-helvetica">
      {/* Header Section */}
      <div className="flex flex-col gap-6 sm:gap-[30px]">
        {/* Period Info Bar */}
        <div 
          className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 p-4 sm:p-6 lg:px-[50px] lg:py-8 rounded-[15px] bg-white"
          style={{ border: '1px solid rgba(44, 42, 41, 0.10)' }}
        >
          <div className="flex items-center gap-1">
            <span 
              className="font-helvetica text-sm font-medium"
              style={{ color: '#2c2a29' }}
            >
              Period :
            </span>
            <span 
              className="font-helvetica text-sm font-normal"
              style={{ color: '#2c2a29' }}
            >
              Oct 24, 2024 - Nov 24, 2024
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span 
              className="font-helvetica text-sm font-medium"
              style={{ color: '#2c2a29' }}
            >
              Timezone :
            </span>
            <span 
              className="font-helvetica text-sm font-normal"
              style={{ color: '#2c2a29' }}
            >
              UTC+03:00
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span 
              className="font-helvetica text-sm font-medium"
              style={{ color: '#2c2a29' }}
            >
              Run By :
            </span>
            <div className="flex items-center gap-[5px]">
              <span 
                className="font-helvetica text-sm font-normal"
                style={{ color: '#1a3664' }}
              >
                Alexis
              </span>
              <span 
                className="font-helvetica text-sm font-normal"
                style={{ color: '#2c2a29' }}
              >
                (Nov 25, 2024)
              </span>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div 
          className="rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(44, 42, 41, 0.10)' }}
        >
          {/* Desktop Table View */}
          <div className="hidden xl:block overflow-x-auto hide-scrollbar">
            {/* Table Header */}
            <div
              className="min-h-[46px] px-5 py-1 flex justify-between items-center min-w-[1197px]"
              style={{
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                backgroundColor: 'rgba(46, 125, 50, 0.04)'
              }}
            >
              <div
                className="font-helvetica text-xs font-bold flex items-center gap-[20px] w-[95px]"
                style={{ color: 'rgba(0, 0, 0, 0.74)' }}
              >
                Service Name
              </div>
              <div
                className="font-helvetica text-xs font-bold flex items-center gap-2.5 w-[100px]"
                style={{ color: 'rgba(0, 0, 0, 0.74)' }}
              >
                IP Address
              </div>
              <div
                className="font-helvetica text-xs font-bold flex items-center gap-2.5 w-[110px]"
                style={{ color: 'rgba(0, 0, 0, 0.74)' }}
              >
                Device Model
              </div>
              <div
                className="font-helvetica text-xs font-bold flex items-center gap-2.5 w-[110px]"
                style={{ color: 'rgba(0, 0, 0, 0.74)' }}
              >
                Entity Affected
              </div>
              <div
                className="font-helvetica text-xs font-bold flex items-center gap-2.5 w-[100px]"
                style={{ color: 'rgba(0, 0, 0, 0.74)' }}
              >
                HTTP Method
              </div>
              <div
                className="font-helvetica text-xs font-bold flex items-center gap-2.5 w-[55px]"
                style={{ color: 'rgba(0, 0, 0, 0.74)' }}
              >
                Role
              </div>
              <div
                className="font-helvetica text-xs font-bold w-[90px]"
                style={{ color: 'rgba(0, 0, 0, 0.74)' }}
              >
                User Agent
              </div>
              <div
                className="font-helvetica text-xs font-bold w-[110px]"
                style={{ color: 'rgba(0, 0, 0, 0.74)' }}
              >
                Response Body
              </div>
              <div
                className="font-helvetica text-xs font-bold w-[90px]"
                style={{ color: 'rgba(0, 0, 0, 0.74)' }}
              >
                User Name
              </div>
              <div
                className="font-helvetica text-xs font-bold w-[95px]"
                style={{ color: 'rgba(0, 0, 0, 0.74)' }}
              >
                Status Code
              </div>
              <div
                className="font-helvetica text-xs font-bold w-[122px]"
                style={{ color: 'rgba(0, 0, 0, 0.74)' }}
              >
                Event Description
              </div>
              <div
                className="font-helvetica text-xs font-bold w-[60px]"
                style={{ color: 'rgba(0, 0, 0, 0.74)' }}
              >
                Operation System
              </div>
            </div>

            {/* Table Rows */}
            {auditData.map((entry, index) => (
              <div
                key={index}
                className="min-h-[54px] px-5 py-1 flex justify-between items-center bg-white min-w-[1200px]"
                style={{ 
                  borderRight: '1px solid rgba(44, 42, 41, 0.10)',
                  borderLeft: '1px solid rgba(44, 42, 41, 0.10)',
                  borderBottom: '1px solid rgba(44, 42, 41, 0.10)'
                }}
              >
                <div 
                  className="font-helvetica text-xs font-bold flex items-center gap-[23px] w-[101px]"
                  style={{ color: 'rgba(0, 0, 0, 0.74)' }}
                >
                  {entry.serviceName}
                </div>
                <div 
                  className="font-helvetica text-xs font-medium w-[109px] truncate overflow-hidden"
                  style={{ 
                    color: 'rgba(0, 0, 0, 0.56)',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1
                  }}
                >
                  {entry.ipAddress}
                </div>
                <div 
                  className="font-helvetica text-sm font-medium flex items-center gap-2.5 w-[116px] truncate overflow-hidden"
                  style={{ 
                    color: 'rgba(0, 0, 0, 0.56)',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1
                  }}
                >
                  {entry.deviceModel}
                </div>
                <div 
                  className="font-helvetica text-sm font-medium flex items-center gap-2.5 w-[117px] truncate overflow-hidden"
                  style={{ 
                    color: 'rgba(0, 0, 0, 0.56)',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1
                  }}
                >
                  {entry.entityAffected}
                </div>
                <div 
                  className="font-helvetica text-sm font-medium flex items-center gap-2.5 w-[114px] truncate overflow-hidden"
                  style={{ 
                    color: 'rgba(0, 0, 0, 0.56)',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1
                  }}
                >
                  {entry.httpMethod}
                </div>
                <div 
                  className="font-helvetica text-sm font-medium flex items-center gap-2.5 w-[61px] truncate overflow-hidden"
                  style={{ 
                    color: 'rgba(0, 0, 0, 0.56)',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1
                  }}
                >
                  {entry.role}
                </div>
                <div 
                  className="font-helvetica text-sm font-medium flex items-center gap-2.5 w-[98px] truncate overflow-hidden"
                  style={{ 
                    color: 'rgba(0, 0, 0, 0.56)',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1
                  }}
                >
                  {entry.userAgent}
                </div>
                <div 
                  className="font-helvetica text-sm font-medium flex items-center gap-2.5 w-[120px] truncate overflow-hidden"
                  style={{ 
                    color: 'rgba(0, 0, 0, 0.56)',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1
                  }}
                >
                  {entry.responseBody}
                </div>
                <div 
                  className="font-helvetica text-sm font-bold flex items-center gap-2.5 w-[97px] truncate overflow-hidden"
                  style={{ 
                    color: 'rgba(0, 0, 0, 0.56)',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1
                  }}
                >
                  {entry.userName}
                </div>
                <div 
                  className="font-helvetica text-sm font-bold flex items-center gap-2.5 w-[105px] truncate overflow-hidden"
                  style={{ 
                    color: '#2e7d32',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1
                  }}
                >
                  {entry.statusCode}
                </div>
                <div 
                  className="font-helvetica text-sm font-medium flex items-center gap-2.5 w-[134px] truncate overflow-hidden"
                  style={{ 
                    color: 'rgba(0, 0, 0, 0.56)',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1
                  }}
                >
                  {entry.eventDescription}
                </div>
                <div 
                  className="font-helvetica text-sm font-medium flex items-center gap-2.5 w-[67px] truncate overflow-hidden"
                  style={{ 
                    color: 'rgba(0, 0, 0, 0.56)',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1
                  }}
                >
                  {entry.operationSystem}
                </div>
              </div>
            ))}
          </div>

          {/* Tablet and Mobile Card View */}
          <div className="block xl:hidden">
            {auditData.map((entry, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 border-b bg-white"
                style={{ borderBottom: '1px solid rgba(44, 42, 41, 0.10)' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-sm">
                  <div>
                    <span
                      className="font-helvetica font-bold text-xs sm:text-sm"
                      style={{ color: 'rgba(0, 0, 0, 0.74)' }}
                    >
                      Service:
                    </span>
                    <span
                      className="font-helvetica font-bold text-xs sm:text-sm ml-1"
                      style={{ color: 'rgba(0, 0, 0, 0.74)' }}
                    >
                      {entry.serviceName}
                    </span>
                  </div>
                  <div>
                    <span
                      className="font-helvetica font-bold text-xs sm:text-sm"
                      style={{ color: 'rgba(0, 0, 0, 0.74)' }}
                    >
                      Status:
                    </span>
                    <span
                      className="font-helvetica font-bold text-xs sm:text-sm ml-1"
                      style={{ color: '#2e7d32' }}
                    >
                      {entry.statusCode}
                    </span>
                  </div>
                  <div>
                    <span
                      className="font-helvetica font-bold text-xs sm:text-sm"
                      style={{ color: 'rgba(0, 0, 0, 0.74)' }}
                    >
                      Device:
                    </span>
                    <span
                      className="font-helvetica font-medium text-xs sm:text-sm ml-1"
                      style={{ color: 'rgba(0, 0, 0, 0.56)' }}
                    >
                      {entry.deviceModel}
                    </span>
                  </div>
                  <div>
                    <span
                      className="font-helvetica font-bold text-xs sm:text-sm"
                      style={{ color: 'rgba(0, 0, 0, 0.74)' }}
                    >
                      Method:
                    </span>
                    <span
                      className="font-helvetica font-medium text-xs sm:text-sm ml-1"
                      style={{ color: 'rgba(0, 0, 0, 0.56)' }}
                    >
                      {entry.httpMethod}
                    </span>
                  </div>
                  <div>
                    <span
                      className="font-helvetica font-bold text-xs sm:text-sm"
                      style={{ color: 'rgba(0, 0, 0, 0.74)' }}
                    >
                      Entity:
                    </span>
                    <span
                      className="font-helvetica font-medium text-xs sm:text-sm ml-1"
                      style={{ color: 'rgba(0, 0, 0, 0.56)' }}
                    >
                      {entry.entityAffected}
                    </span>
                  </div>
                  <div>
                    <span
                      className="font-helvetica font-bold text-xs sm:text-sm"
                      style={{ color: 'rgba(0, 0, 0, 0.74)' }}
                    >
                      Role:
                    </span>
                    <span
                      className="font-helvetica font-medium text-xs sm:text-sm ml-1"
                      style={{ color: 'rgba(0, 0, 0, 0.56)' }}
                    >
                      {entry.role}
                    </span>
                  </div>
                  <div className="sm:col-span-2 lg:col-span-3">
                    <span
                      className="font-helvetica font-bold text-xs sm:text-sm"
                      style={{ color: 'rgba(0, 0, 0, 0.74)' }}
                    >
                      IP Address:
                    </span>
                    <span
                      className="font-helvetica font-medium text-xs sm:text-sm ml-1"
                      style={{ color: 'rgba(0, 0, 0, 0.56)' }}
                    >
                      {entry.ipAddress}
                    </span>
                  </div>
                  <div className="sm:col-span-2 lg:col-span-3">
                    <span
                      className="font-helvetica font-bold text-xs sm:text-sm"
                      style={{ color: 'rgba(0, 0, 0, 0.74)' }}
                    >
                      Event Description:
                    </span>
                    <span
                      className="font-helvetica font-medium text-xs sm:text-sm ml-1"
                      style={{ color: 'rgba(0, 0, 0, 0.56)' }}
                    >
                      {entry.eventDescription}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
         <Pagination/>
    </div>
  );
}
