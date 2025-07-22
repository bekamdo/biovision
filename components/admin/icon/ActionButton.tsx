export const ActionButton = ({ children, variant = 'default', onClick }: { 
  children: React.ReactNode; 
  variant?: 'default' | 'edit' | 'delete' | 'view';
  onClick?: () => void;
}) => {
  const baseClasses = "flex items-center justify-center p-[5px] rounded-md cursor-pointer";
  const variants = {
    default: "bg-design-gray",
    view: "bg-design-gray",
    edit: "bg-design-green",
    delete: "bg-design-red"
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};