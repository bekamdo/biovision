import { Edit, Trash2 } from "lucide-react";

export const TableRow: React.FC<{
  name: string;
  resourceId: string;
  contributor: string;
  target: string;
  status: string;
  isEven: boolean;
}> = ({ name, resourceId, contributor, target, status, isEven }) => (
  <div
    className={`flex h-14 px-20 py-1 justify-between items-center self-stretch border-r border-b border-l border-gray-200 ${isEven ? "bg-gray-50" : "bg-white"}`}
  >
    <div className="flex w-[133px] items-center gap-6">
      <div className="text-dashboard-text text-xs font-bold leading-normal">
        {name}
      </div>
    </div>
    <div className="flex w-[199px] items-center gap-2.5">
      <div className="flex-1 text-dashboard-text text-sm font-medium leading-normal overflow-hidden text-ellipsis">
        {resourceId}
      </div>
    </div>
    <div className="flex w-[214px] items-center gap-2.5">
      <div className="flex-1 text-dashboard-text text-sm font-medium leading-normal overflow-hidden text-ellipsis">
        {contributor}
      </div>
    </div>
    <div className="flex w-[170px] items-center gap-2.5">
      <div className="flex-1 text-dashboard-text text-sm font-medium leading-normal overflow-hidden text-ellipsis">
        {target}
      </div>
    </div>
    <div className="flex w-[131px] items-center gap-2.5">
      <div className="flex px-2.5 py-0.5 flex-col justify-center items-center gap-2.5 rounded-[17px] bg-gray-50">
        <div className="text-dashboard-success text-xs font-bold leading-[18px]">
          {status}
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2.5">
      <div className="flex p-1.5 items-center gap-2.5 rounded-md bg-dashboard-success">
        <Edit className="w-3.5 h-3.5 text-white" />
      </div>
      <div className="flex p-1.5 items-center gap-2.5 rounded-md bg-red-600">
        <Trash2 className="w-3.5 h-3.5 text-white" />
      </div>
    </div>
  </div>
);
