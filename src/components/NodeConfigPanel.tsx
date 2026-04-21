import React from 'react';
import type { WorkflowNode } from '../types';

interface NodeConfigPanelProps {
  selectedNode?: WorkflowNode;
  onUpdateData: (data: any) => void;
}

const NodeConfigPanel: React.FC<NodeConfigPanelProps> = ({ selectedNode, onUpdateData }) => {
  if (!selectedNode) {
    return (
      <aside className="w-[300px] border-l border-border bg-white flex flex-col p-6 shadow-sm z-10 flex-shrink-0 justify-center items-center">
        <div className="text-center opacity-30 px-8">
          <div className="text-4xl mb-4">👈</div>
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-loose">
            Select a node to configure its properties
          </p>
        </div>
      </aside>
    );
  }

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateData({ label: e.target.value });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onUpdateData({ description: e.target.value });
  };

  const handleFieldChange = (field: string, value: string) => {
    onUpdateData({ [field]: value });
  };

  return (
    <aside className="w-[300px] border-l border-border bg-white flex flex-col p-6 shadow-sm z-10 flex-shrink-0">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-0.5 bg-slate-900 text-white text-[9px] font-black rounded uppercase tracking-tighter">
                {selectedNode.data.type}
            </span>
            <label className="text-[11px] font-bold text-text-primary uppercase tracking-loose">
                Properties
            </label>
        </div>
        <p className="text-[10px] text-text-secondary font-medium pl-1">Configuration for id: {selectedNode.id}</p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-8 pr-2 custom-scrollbar">
        {/* Basic Info */}
        <section className="space-y-4">
          <div>
            <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block mb-2 px-1">Display Name</label>
            <input 
              type="text" 
              value={selectedNode.data.label}
              onChange={handleLabelChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[13px] font-semibold text-text-primary focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all"
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block mb-2 px-1">Description</label>
            <textarea 
              value={selectedNode.data.description || ''}
              onChange={handleDescriptionChange}
              placeholder="What does this step do?"
              rows={3}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[13px] font-semibold text-text-primary focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all resize-none"
            />
          </div>
        </section>

        {/* Polymorphic Fields based on Type */}
        <section className="pt-6 border-t border-slate-100 space-y-6">
          {selectedNode.data.type === 'TASK' && (
            <div>
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block mb-2 px-1">Assignee</label>
                <select 
                    value={selectedNode.data.assignee || ''}
                    onChange={(e) => handleFieldChange('assignee', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[13px] font-semibold text-text-primary focus:outline-none transition-all"
                >
                    <option value="">Select Assignee</option>
                    <option value="user_1">System Admin</option>
                    <option value="user_2">Manager</option>
                </select>
            </div>
          )}

          {selectedNode.data.type === 'APPROVAL' && (
            <div>
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block mb-2 px-1">SLA Deadline</label>
                <div className="flex gap-2">
                    {['24h', '48h', '1w'].map(time => (
                        <button 
                            key={time}
                            onClick={() => handleFieldChange('deadline', time)}
                            className={`flex-1 py-2 rounded-lg text-[11px] font-bold transition-all ${
                                selectedNode.data.deadline === time 
                                ? 'bg-accent text-white shadow-md shadow-blue-100' 
                                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                            }`}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </div>
          )}

          {selectedNode.data.type === 'AUTOMATED' && (
            <div>
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block mb-2 px-1">Webhook URL</label>
                <input 
                    type="url" 
                    value={selectedNode.data.webhookUrl || ''}
                    onChange={(e) => handleFieldChange('webhookUrl', e.target.value)}
                    placeholder="https://api.service.com/hook"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[13px] font-semibold text-text-primary focus:outline-none transition-all"
                />
            </div>
          )}
        </section>
      </div>

      <div className="mt-8 pt-8 border-t border-slate-100">
        <button className="w-full py-4 bg-slate-900 border-2 border-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-white hover:text-slate-900 transition-all active:scale-95 shadow-lg shadow-slate-100">
           Save Changes
        </button>
      </div>
    </aside>
  );
};

export default NodeConfigPanel;
