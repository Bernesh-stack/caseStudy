import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="h-14 border-b border-border bg-white flex items-center justify-between px-6 shadow-sm z-10">
      <div className="flex items-center gap-8">
        <h1 className="font-bold text-lg text-text-primary tracking-tight">Workflow Designer</h1>
        <nav className="flex gap-6 h-full items-center translate-y-[2px]">
          {['Canvas', 'History', 'Automations', 'Settings'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className={`text-[13px] font-semibold transition-all ${
                item === 'Canvas' 
                ? 'text-accent border-b-2 border-accent h-full flex items-center mt-[1px]' 
                : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-[12px] font-bold uppercase tracking-wider text-text-secondary px-4 py-2 hover:bg-slate-50 rounded-md transition-colors">
          Export
        </button>
        <button className="text-[12px] font-bold uppercase tracking-wider bg-accent text-white px-5 py-2.5 rounded-md hover:bg-blue-600 shadow-sm transition-all active:scale-95">
          Run Workflow
        </button>
        <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
          <button className="text-text-secondary hover:text-text-primary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </button>
          <button className="text-text-secondary hover:text-text-primary relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
