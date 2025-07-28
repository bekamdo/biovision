import { ActionButton } from "./icon/ActionButton";
import { DeleteIcon } from "./icon/DeleteIcon";
import { EditIcon } from "./icon/EditIcon";
import { ViewIcon } from "./icon/ViewIcon";

interface UserRowProps {
  name: string;
  userType: string;
  contactNumber: string;
  emailAddress: string;
  role: string;
}

export const UserRow = ({
  name,
  userType,
  contactNumber,
  emailAddress,
  role,
}: UserRowProps) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full border-b border-design-border py-3 gap-3 md:gap-0">
    {/* Mobile layout */}
    <div className="flex md:hidden flex-col gap-2 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ec8013246d0ea1088521ef8e1d26cdde0c0bad54?width=80"
            alt="User avatar"
            className="w-10 h-10 rounded-full flex-shrink-0"
          />
          <div className="text-design-text text-xs font-bold">{name}</div>
        </div>
        <div className="flex items-center gap-2">
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

      <div className="text-design-text text-xs">
        <strong>User Type:</strong> {userType}
      </div>
      <div className="text-design-text text-xs">
        <strong>Contact:</strong> {contactNumber}
      </div>
      <div className="text-design-text text-xs">
        <strong>Email:</strong> {emailAddress}
      </div>
      <div className="text-design-text text-xs">
        <strong>Role:</strong> {role}
      </div>
    </div>

    {/* Desktop layout */}
    <div className="hidden md:flex w-full items-center justify-between">
      <div className="flex items-center gap-4 w-[200px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ec8013246d0ea1088521ef8e1d26cdde0c0bad54?width=80"
          alt="User avatar"
          className="w-10 h-10 rounded-full flex-shrink-0"
        />
        <div className="text-design-text text-xs font-bold">{name}</div>
      </div>

      <div className="text-design-text text-xs w-[150px]">{userType}</div>
      <div className="text-design-text text-xs w-[150px]">{contactNumber}</div>
      <div className="text-design-text text-xs w-[200px] truncate">{emailAddress}</div>
      <div className="text-design-text text-xs w-[120px]">{role}</div>

      <div className="flex items-center gap-2">
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
  </div>
);
