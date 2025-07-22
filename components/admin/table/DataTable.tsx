import { sampleData } from "@/types";

const DataTable: React.FC = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-[rgba(44,42,41,0.10)]">
      {/* Header Row */}
      <div className="flex h-[46px] items-center justify-between border-b border-[rgba(0,0,0,0.12)] bg-[rgba(46,125,50,0.04)] px-5 py-1 overflow-x-auto hide-scrollbar">
        <div className="flex items-center min-w-max">
          <div className="flex items-center shrink-0 w-[101px] font-helvetica text-xs font-bold leading-normal text-[rgba(0,0,0,0.74)] whitespace-nowrap">
            Service Name
          </div>
          <div className="flex items-center shrink-0 w-[109px] font-helvetica text-xs font-bold leading-normal text-[rgba(0,0,0,0.74)] whitespace-nowrap">
            IP Address
          </div>
          <div className="flex items-center shrink-0 w-[116px] font-helvetica text-xs font-bold leading-normal text-[rgba(0,0,0,0.74)] whitespace-nowrap">
            Device Model
          </div>
          <div className="flex items-center shrink-0 w-[117px] font-helvetica text-xs font-bold leading-normal text-[rgba(0,0,0,0.74)] whitespace-nowrap">
            Entity Affected
          </div>
          <div className="flex items-center shrink-0 w-[114px] font-helvetica text-xs font-bold leading-normal text-[rgba(0,0,0,0.74)] whitespace-nowrap">
            HTTP Method
          </div>
          <div className="flex items-center shrink-0 w-[61px] font-helvetica text-xs font-bold leading-normal text-[rgba(0,0,0,0.74)] whitespace-nowrap">
            Role
          </div>
          <div className="flex items-center shrink-0 w-[98px] font-helvetica text-xs font-bold leading-normal text-[rgba(0,0,0,0.74)] whitespace-nowrap">
            User Agent
          </div>
          <div className="flex items-center shrink-0 w-[120px] font-helvetica text-xs font-bold leading-normal text-[rgba(0,0,0,0.74)] whitespace-nowrap">
            Response Body
          </div>
          <div className="flex items-center shrink-0 w-[97px] font-helvetica text-xs font-bold leading-normal text-[rgba(0,0,0,0.74)] whitespace-nowrap">
            User Name
          </div>
          <div className="flex items-center shrink-0 w-[105px] font-helvetica text-xs font-bold leading-normal text-[rgba(0,0,0,0.74)] whitespace-nowrap">
            Status Code
          </div>
          <div className="flex items-center shrink-0 w-[134px] font-helvetica text-xs font-bold leading-normal text-[rgba(0,0,0,0.74)] whitespace-nowrap">
            Event Description
          </div>
          <div className="flex items-center shrink-0 w-[67px] font-helvetica text-xs font-bold leading-normal text-[rgba(0,0,0,0.74)] whitespace-nowrap">
            Operation System
          </div>
        </div>
      </div>

      {/* Data Rows */}
      {sampleData.map((row, index) => (
        <div
          key={index}
          className="flex h-[54px] items-center border-b border-l border-r border-[rgba(44,42,41,0.10)] bg-white px-5 py-1 overflow-x-auto hide-scrollbar"
        >
          <div className="flex items-center min-w-max">
            <div className="flex items-center shrink-0 w-[101px] font-helvetica text-xs font-bold leading-normal text-[rgba(0,0,0,0.74)]">
              {row.serviceName}
            </div>
            <div className="flex items-center shrink-0 w-[109px] font-helvetica text-xs font-normal leading-normal text-[rgba(0,0,0,0.56)] overflow-hidden text-ellipsis">
              {row.ipAddress}
            </div>
            <div className="flex items-center shrink-0 w-[116px] font-helvetica text-sm font-normal leading-normal text-[rgba(0,0,0,0.56)] overflow-hidden text-ellipsis">
              {row.deviceModel}
            </div>
            <div className="flex items-center shrink-0 w-[117px] font-helvetica text-sm font-normal leading-normal text-[rgba(0,0,0,0.56)] overflow-hidden text-ellipsis">
              {row.entityAffected}
            </div>
            <div className="flex items-center shrink-0 w-[114px] font-helvetica text-sm font-normal leading-normal text-[rgba(0,0,0,0.56)] overflow-hidden text-ellipsis">
              {row.httpMethod}
            </div>
            <div className="flex items-center shrink-0 w-[61px] font-helvetica text-sm font-normal leading-normal text-[rgba(0,0,0,0.56)] overflow-hidden text-ellipsis">
              {row.role}
            </div>
            <div className="flex items-center shrink-0 w-[98px] font-helvetica text-sm font-normal leading-normal text-[rgba(0,0,0,0.56)] overflow-hidden text-ellipsis">
              {row.userAgent}
            </div>
            <div className="flex items-center shrink-0 w-[120px] font-helvetica text-sm font-normal leading-normal text-[rgba(0,0,0,0.56)] overflow-hidden text-ellipsis">
              {row.responseBody}
            </div>
            <div className="flex items-center shrink-0 w-[97px] font-helvetica text-xs font-bold leading-normal text-[rgba(0,0,0,0.74)]">
              {row.userName}
            </div>
            <div className="flex items-center shrink-0 w-[105px] font-helvetica text-sm font-bold leading-normal text-[#2e7d32] overflow-hidden text-ellipsis">
              {row.statusCode}
            </div>
            <div className="flex items-center shrink-0 w-[134px] font-helvetica text-sm font-normal leading-normal text-[rgba(0,0,0,0.56)] overflow-hidden text-ellipsis">
              {row.eventDescription}
            </div>
            <div className="flex items-center shrink-0 w-[67px] font-helvetica text-sm font-normal leading-normal text-[rgba(0,0,0,0.56)] overflow-hidden text-ellipsis">
              {row.operationSystem}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataTable;