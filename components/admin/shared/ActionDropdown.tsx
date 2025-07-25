import React, { useState, useRef, useEffect } from 'react';
import { MoreHorizontal } from 'lucide-react';

interface ActionDropdownProps {
  status: 'approved' | 'pending' | 'rejected';
  onAction: (action: string) => void;
}

export const ActionDropdown: React.FC<ActionDropdownProps> = ({ status, onAction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getActions = () => {
    switch (status) {
      case 'approved':
        return [
          { label: 'Edit', color: '#2C2A29' },
          { label: 'Suspend', color: '#2C2A29' },
          { label: 'Delete', color: '#ED0006' }
        ];
      case 'pending':
        return [
          { label: 'Approve', color: '#2E7D32' },
          { label: 'Reject', color: '#ED0006' }
        ];
      case 'rejected':
        return [
          { label: 'Approve', color: '#2E7D32' },
          { label: 'Delete', color: '#ED0006' }
        ];
      default:
        return [];
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const actions = getActions();

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#2C2A29] text-[17px] font-extrabold tracking-[-1.191px] hover:bg-gray-100 rounded p-1 transition-colors"
        aria-label="More actions"
      >
        <MoreHorizontal className="w-4 h-4" />
      </button>
      
      {isOpen && (
        <div 
          className="flex flex-col justify-end items-center shadow-[-5px_8px_20px_0_rgba(0,0,0,0.05)] absolute z-10 bg-white rounded-[0_0_8px_8px] right-0 top-full mt-1 min-w-[195px]"
          style={{ height: `${actions.length * 42}px` }}
        >
          {actions.map((action, index) => (
            <button
              key={action.label}
              onClick={() => {
                onAction(action.label);
                setIsOpen(false);
              }}
              className="flex justify-between items-center w-full bg-white px-6 py-[11px] border-b-[rgba(44,42,41,0.10)] border-b border-solid hover:bg-gray-50 transition-colors"
            >
              <span 
                className="text-sm font-medium leading-[18px] tracking-[0.42px]"
                style={{ color: action.color }}
              >
                {action.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
