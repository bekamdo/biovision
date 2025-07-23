export const ActionButton = ({ children, variant = 'default', onClick }: { 
  children: React.ReactNode; 
  variant?: 'default' | 'edit' | 'delete' | 'view';
  onClick?: () => void;
}) => {
  const baseClasses = "flex items-center justify-center p-[5px] rounded-md cursor-pointer";
  const variants = {
    default: "bg-[#9CA3AF]",
    view: "bg-[#9CA3AF]",
    edit: "bg-dashboard-green",
    delete: "bg-red-logout"
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};