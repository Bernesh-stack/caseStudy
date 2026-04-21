import React from 'react';
import type { WorkflowNodeType } from '../types';

interface NodeItemProps {
  type: WorkflowNodeType;
  icon: string;
  label: string;
  colorClass: string;
}

const NodeItem: React.FC<NodeItemProps> = ({ type, icon, label, colorClass }) => {
  const onDragStart = (event: React.DragEvent, nodeType: WorkflowNodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, type)}
      className="flex items-center gap-3 px-4 py-3.5 bg-white border border-border rounded-xl shadow-sm cursor-grab hover:border-accent hover:shadow-md transition-all group active:scale-95"
    >
      <div className={`w-1 h-5 ${colorClass} rounded-full`}></div>
      <span className="text-[11px] font-bold text-text-secondary flex items-center gap-2 group-hover:text-text-primary transition-colors">
        <span className="text-sm grayscale group-hover:grayscale-0 transition-all">{icon}</span>
        {label}
      </span>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const nodeTypes: NodeItemProps[] = [
    { type: 'START', icon: '🚩', label: 'START', colorClass: 'bg-black' },
    { type: 'TASK', icon: '⚡', label: 'TASK', colorClass: 'bg-blue-500' },
    { type: 'APPROVAL', icon: '▶️', label: 'APPROVAL', colorClass: 'bg-red-200' },
    { type: 'AUTOMATED', icon: '🛠️', label: 'AUTOMATED', colorClass: 'bg-purple-500' },
    { type: 'END', icon: '⏹️', label: 'END', colorClass: 'bg-red-800' },
  ];

  return (
    <aside className="w-[240px] border-r border-border bg-sidebar flex flex-col pt-6 flex-shrink-0">
      <div className="px-6 mb-8">
        <label className="text-[10px] font-bold text-text-secondary tracking-widest uppercase flex items-center gap-2">
            <span className="w-3 h-3 bg-slate-300 rounded-sm"></span>
            Node Library
        </label>
        <p className="text-xs text-text-secondary mt-1 ml-5">Drag to add to flow</p>
      </div>

      <div className="flex flex-col gap-3 px-4">
        {nodeTypes.map((node) => (
          <NodeItem key={node.type} {...node} />
        ))}
      </div>

      <div className="mt-auto p-4 border-t border-slate-200 bg-slate-50">
        <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
                Ready to Deploy?
            </p>
            <button className="mt-3 w-full py-2.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-slate-800 transition-all active:scale-95">
                Staging Env
            </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
