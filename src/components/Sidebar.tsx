import React from 'react';

const Sidebar: React.FC = () => {
  const nodeTypes = [
    { type: 'START', icon: '🚩', label: 'START', color: 'bg-black' },
    { type: 'TASK', icon: '⚡', label: 'TASK', color: 'bg-blue-500' },
    { type: 'APPROVAL', icon: '▶️', label: 'APPROVAL', color: 'bg-red-200' },
    { type: 'AUTOMATED', icon: '🛠️', label: 'AUTOMATED', color: 'bg-purple-500' },
    { type: 'END', icon: '⏹️', label: 'END', color: 'bg-red-800' },
  ];

  return (
    <aside className="w-64 border-r border-border bg-sidebar flex flex-col pt-6">
      <div className="px-6 mb-8">
        <label className="text-[10px] font-bold text-text-secondary tracking-widest uppercase flex items-center gap-2">
            <span className="w-3 h-3 bg-slate-300 rounded-sm"></span>
            Nodes
        </label>
        <p className="text-xs text-text-secondary mt-1 ml-5">Drag to canvas</p>
      </div>
      <div className="flex flex-col gap-3 px-4">
        {nodeTypes.map((node) => (
          <div
            key={node.type}
            className="flex items-center gap-3 px-4 py-3.5 bg-white border border-border rounded-xl shadow-sm cursor-grab hover:border-accent hover:shadow-md transition-all group active:scale-95"
          >
            <div className={`w-1 h-5 ${node.color} rounded-full`}></div>
            <span className="text-[11px] font-bold text-text-secondary flex items-center gap-2 group-hover:text-text-primary transition-colors">
              <span className="text-sm grayscale group-hover:grayscale-0 transition-all">{node.icon}</span>
              {node.label}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-auto p-4 border-t border-slate-200 bg-slate-50">
        <button className="w-full py-3 text-[10px] font-bold uppercase tracking-widest border border-dashed border-slate-300 text-text-secondary rounded-xl hover:bg-white hover:border-accent hover:text-accent transition-all active:scale-95">
          + Add Custom Node
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
