
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TableRow } from "./TableRow";
import Pagination from "../shared/Pagination";


export const ResourceTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex flex-col items-start min-w-[800px] rounded-xl border border-gray-200">
        {/* Table Header */}
        <div className="flex h-12 px-4 md:px-20 py-1 justify-between items-center w-full border-b border-gray-300 bg-gray-50">
          <div className="flex items-center gap-6 min-w-[100px]">
            <div className="text-dashboard-text text-xs font-bold">Resource Type</div>
          </div>
          <div className="flex items-center gap-2.5 min-w-[150px]">
            <div className="text-dashboard-text text-xs font-bold">Name</div>
          </div>
          <div className="flex items-center gap-2.5 min-w-[150px]">
            <div className="text-dashboard-text text-xs font-bold">Contributor</div>
          </div>
          <div className="flex items-center gap-2.5 min-w-[120px]">
            <div className="text-dashboard-text text-xs font-bold">Target Amount</div>
          </div>
          <div className="flex items-center gap-2.5 min-w-[100px]">
            <div className="text-dashboard-text text-xs font-bold">Status</div>
          </div>
          <div className="flex w-20 items-center gap-2.5">
            <div className="text-dashboard-text text-xs font-bold">Actions</div>
          </div>
        </div>

        {/* Table Rows */}
        {Array.from({ length: 11 }, (_, index) => (
          <TableRow
            key={index}
            name="John Doe"
            resourceId="asjsbuwo832yr8747"
            contributor="40,908.00"
            target="20,987.00"
            status="Closed"
            isEven={index % 2 === 1}
          />
        ))}
      </div>

      {/* Pagination */}

      <Pagination/>
    </div>
  );
};

export default ResourceTable;
