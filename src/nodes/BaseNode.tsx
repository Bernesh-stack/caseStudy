import React from 'react';
import { Handle, Position } from 'reactflow';

interface BaseNodeProps {
  id: string;
  type: string;
  label: string;
  icon: string;
  colorClass: string;
  children?: React.ReactNode;
  selected?: boolean;
}

const BaseNode: React.FC<BaseNodeProps> = ({ label, icon, colorClass, children, selected }) => {
  return (
    <div className={`px-4 py-3 bg-white rounded-2xl shadow-premium border-2 transition-all min-w-[200px] ${
      selected ? 'border-accent ring-4 ring-blue-50' : 'border-slate-100 hover:border-slate-200'
    }`}>
      {/* Handles */}
      <Handle type="target" position={Position.Left} className="w-3 h-3 bg-slate-300 border-2 border-white shadow-sm" />
      
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-xl ${colorClass} flex items-center justify-center text-lg shadow-sm`}>
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{label}</h4>
          <div className="mt-1">
            {children}
          </div>
        </div>
      </div>

      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-accent border-2 border-white shadow-sm" />
    </div>
  );
};

export default BaseNode;
