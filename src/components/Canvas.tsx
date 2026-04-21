import React from 'react';

const Canvas: React.FC = () => {
  return (
    <main className="flex-1 overflow-hidden relative workflow-dot-bg bg-slate-50 flex items-center justify-center">
      {/* Example Nodes Layout */}
      <div className="relative w-full h-full">
        {/* Onboarding Start Node */}
        <div className="absolute top-[25%] left-[15%] p-6 bg-white rounded-2xl shadow-premium border border-border w-72 transition-transform hover:scale-[1.02] cursor-pointer">
           <div className="flex items-start gap-4">
              <div className="w-1.5 h-6 bg-accent rounded-full mt-0.5"></div>
              <div>
                <h3 className="font-bold text-[11px] uppercase tracking-wider text-text-primary">Onboarding Start</h3>
                <p className="text-[11px] text-text-secondary mt-3 leading-relaxed font-medium">
                  Triggered when a new employee record is created in HRIS.
                </p>
              </div>
           </div>
           <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent border-[3px] border-white shadow-sm"></div>
        </div>

        {/* Document Review Node */}
        <div className="absolute top-[45%] left-[45%] p-6 bg-white rounded-2xl shadow-premium border border-border w-72 transition-transform hover:scale-[1.02] cursor-pointer">
           <div className="flex items-start gap-4">
              <div className="w-1.5 h-6 bg-slate-300 rounded-full mt-0.5"></div>
              <div>
                <h3 className="font-bold text-[11px] uppercase tracking-wider flex items-center gap-2 text-text-primary">
                  <span className="text-sm">📋</span> DOCUMENT REVIEW
                </h3>
                <p className="text-[11px] text-text-secondary mt-3 leading-relaxed font-medium">
                  Verify I-9 and identity documents for compliance check.
                </p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold tracking-tight">Pending</span>
                </div>
              </div>
           </div>
           <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-slate-300 border-[3px] border-white shadow-sm"></div>
           <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
           </div>
        </div>

        {/* Simplified SVG Path for Connection */}
        <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-40">
           <path 
             d="M 400 240 C 480 240, 480 430, 600 430" 
             fill="none" 
             stroke="#94a3b8" 
             strokeWidth="2" 
             strokeDasharray="6 4"
           />
        </svg>

        {/* Floating Controls */}
        <div className="absolute bottom-20 right-8 flex flex-col gap-3">
          <button className="w-10 h-10 glass rounded-full shadow-premium flex items-center justify-center font-semibold text-text-primary hover:bg-white hover:scale-110 transition-all">+</button>
          <button className="w-10 h-10 glass rounded-full shadow-premium flex items-center justify-center font-semibold text-text-primary hover:bg-white hover:scale-110 transition-all">-</button>
        </div>
      </div>
      
      {/* Execution Logs Section */}
      <div className="absolute bottom-0 left-0 right-0 p-1">
        <div className="bg-white border border-border shadow-2xl rounded-t-xl mx-4 overflow-hidden">
            <div className="h-10 px-6 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-8">
                  <button className="text-[10px] font-bold uppercase tracking-widest text-text-primary border-b-2 border-text-primary pb-0.5">Execution Logs</button>
                  <span className="flex items-center gap-2 text-[10px] text-text-secondary font-semibold">
                     <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live Monitoring
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[11px] text-text-secondary font-medium">
                  <span className="opacity-50">#WF-2849</span>
                  <span className="text-text-primary">Node "Onboarding Start" executed <span className="font-bold">successfully</span></span>
                  <span className="opacity-50">12:45:01 PM</span>
                  <button className="ml-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
                  </button>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
};

export default Canvas;
