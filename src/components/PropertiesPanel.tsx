import React from 'react';

const PropertiesPanel: React.FC = () => {
  return (
    <aside className="w-80 border-l border-border bg-white flex flex-col p-6 shadow-sm z-10">
      <div className="mb-10">
        <label className="text-[11px] font-bold text-text-primary border-l-4 border-accent pl-4 mb-2 block uppercase tracking-loose">Properties</label>
        <p className="text-[10px] text-text-secondary pl-5 font-medium">Node Configuration</p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-8 pr-2">
        <section>
          <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block mb-3 pl-1">Node Name</label>
          <input 
            type="text" 
            defaultValue="Manager Approval"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[13px] font-semibold text-text-primary focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all"
          />
        </section>

        <section>
          <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block mb-4 pl-1">Configuration</label>
          <div className="space-y-5 bg-slate-50 rounded-2xl p-4 border border-slate-100">
             <div className="flex items-center justify-between">
                <span className="text-xs text-text-primary font-bold">Require Signature</span>
                <button className="w-11 h-6 bg-accent rounded-full relative transition-all active:scale-95 shadow-lg shadow-blue-200">
                   <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md"></div>
                </button>
             </div>
             <div className="flex items-center justify-between">
                <span className="text-xs text-text-primary font-bold">SLA Deadline</span>
                <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-black text-text-primary shadow-sm tracking-tight">24h</span>
             </div>
          </div>
        </section>

        <section>
           <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block mb-4 pl-1">Approver Roles</label>
           <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-slate-900 text-white text-[10px] font-bold rounded-lg shadow-md flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                HR_MANAGER
              </span>
              <button className="px-4 py-2 border-2 border-dashed border-slate-200 text-text-secondary text-[10px] font-bold rounded-lg hover:border-slate-400 hover:text-text-primary transition-all">
                + Add Role
              </button>
           </div>
        </section>
      </div>

      <div className="mt-8 pt-8 border-t border-slate-100 space-y-3">
        <button className="w-full py-4 bg-slate-50 text-text-primary text-[10px] font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-3 hover:bg-slate-100 transition-all active:scale-95 border border-slate-200">
          <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          View Change Logs
        </button>
        <button className="w-full py-4 bg-white border-2 border-red-50 text-red-500 text-[10px] font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-3 hover:bg-red-50 hover:border-red-100 transition-all active:scale-95">
           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
           Delete Node
        </button>
      </div>
    </aside>
  );
};

export default PropertiesPanel;
