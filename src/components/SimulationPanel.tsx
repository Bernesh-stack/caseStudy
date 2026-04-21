import React from 'react';
import type { SimulationLog } from '../api/workflow';

interface SimulationPanelProps {
  logs: SimulationLog[];
  isSimulating: boolean;
  onClose: () => void;
}

const SimulationPanel: React.FC<SimulationPanelProps> = ({ logs, isSimulating, onClose }) => {
  return (
    <div className="absolute bottom-4 left-4 right-4 z-50">
      <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden max-h-[300px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-800/50 border-b border-slate-700">
          <div className="flex items-center gap-4">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Execution Environment</h3>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isSimulating ? 'bg-amber-500 animate-pulse' : 'bg-green-500'}`}></span>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                {isSimulating ? 'Processing...' : 'Simulation Complete'}
              </span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar font-mono">
          {logs.length === 0 && isSimulating && (
            <div className="text-slate-500 text-xs px-2 animate-pulse">Initializing simulation engine...</div>
          )}
          
          {logs.map((log) => (
            <div key={log.id} className="flex items-start gap-4 px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors group">
              <span className="text-[10px] text-slate-600 pt-0.5">{log.timestamp}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded leading-none ${
                    log.status === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                  }`}>
                    {log.status.toUpperCase()}
                  </span>
                  <span className="text-[11px] font-bold text-slate-300">{log.nodeLabel}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">{log.message}</p>
              </div>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-slate-700">#{log.nodeId}</span>
            </div>
          ))}
          
          {!isSimulating && logs.length > 0 && (
            <div className="pt-4 border-t border-slate-800 mt-4 px-3 pb-2">
              <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest">
                ✓ Workflow simulation finished with 0 errors.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimulationPanel;
