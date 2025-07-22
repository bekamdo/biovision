import { ActionButton } from "./icon/ActionButton";
import { DeleteIcon } from "./icon/DeleteIcon";
import { EditIcon } from "./icon/EditIcon";
import { ViewIcon } from "./icon/ViewIcon";

export const UserRow = ({ name, role }: { name: string; role: string }) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full border-b border-design-border py-3 gap-3 md:gap-0">
    {/* Mobile: Name and Icons on same line with space-between, Desktop: Separate layout */}
    <div className="flex md:hidden items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ec8013246d0ea1088521ef8e1d26cdde0c0bad54?width=80"
          alt="User avatar"
          className="w-10 h-10 rounded-full flex-shrink-0"
        />
        <div className="text-design-text text-xs font-bold">{name}</div>
      </div>
      <div className="flex items-center gap-[10px]">
        <ActionButton variant="view">
          <ViewIcon />
        </ActionButton>
        <ActionButton variant="edit">
          <EditIcon />
        </ActionButton>
        <ActionButton variant="delete">
          <DeleteIcon />
        </ActionButton>
      </div>
    </div>

    {/* Desktop: Original layout */}
    <div className="hidden md:flex items-center gap-[23px] w-[172px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/ec8013246d0ea1088521ef8e1d26cdde0c0bad54?width=80"
        alt="User avatar"
        className="w-10 h-10 rounded-full flex-shrink-0"
      />
      <div className="text-design-text text-xs font-bold">{name}</div>
    </div>

    <div className="text-design-text text-xs w-full md:w-[219px] flex items-center md:pl-6">{role}</div>

    <div className="hidden md:flex items-center gap-[10px] justify-end">
      <ActionButton variant="view">
        <ViewIcon />
      </ActionButton>
      <ActionButton variant="edit">
        <EditIcon />
      </ActionButton>
      <ActionButton variant="delete">
        <DeleteIcon />
      </ActionButton>
    </div>
  </div>
);