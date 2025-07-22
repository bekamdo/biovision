import React from "react";
import { TableRow } from "./TableRow";
import Pagination from "../shared/Pagination";


export const ResourceTable: React.FC = () => {
  const tableData = Array.from({ length: 11 }, (_, index) => ({
    id: index + 1,
    name: "John Doe",
    resourceId: "asjsbuwo832yr8747",
    contributor: "40,908.00",
    target: "20,987.00",
    status: "Closed",
  }));

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="bg-white rounded-xl border border-[rgba(44,42,41,0.10)] overflow-hidden shadow-sm">
        {/* Table Header - Hidden on small screens, shown on medium and up */}
        <div className="hidden md:flex items-center px-20 py-3 bg-[#f4f4f4] border-b border-gray-200 h-12">
          <div className="flex items-center text-xs font-bold text-[#2c2a29] font-helvetica w-full">
            <span className="w-32">Resource Type</span>
            <span className="w-48">Name</span>
            <span className="w-52">Contributor</span>
            <span className="w-44">Target Amount</span>
            <span className="w-32">Status</span>
            <span className="w-12">Actions</span>
          </div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-200">
          {tableData.map((item, index) => (
            <TableRow
              key={item.id}
              name={item.name}
              resourceId={item.resourceId}
              contributor={item.contributor}
              target={item.target}
              status={item.status}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default ResourceTable;
