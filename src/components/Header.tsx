import React from 'react';

/**
 * Header: Top navigation and application actions.
 */
interface HeaderProps {
  onRun?: () => void;
  isSimulating?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onRun, isSimulating }) => {
  const navItems = ['Canvas', 'History', 'Automations', 'Settings'];

  return (
    <header className="h-14 border-b border-border bg-white flex items-center justify-between px-6 shadow-sm z-10 flex-shrink-0">
      <div className="flex items-center gap-8 h-full">
        <h1 className="font-bold text-lg text-text-primary tracking-tight">Workflow Designer</h1>
        
        <nav className="flex gap-6 h-full">
          {navItems.map((item) => (
            <a 
              key={item} 
              href="#" 
              className={`text-[13px] font-semibold h-full flex items-center border-b-2 transition-all ${
                item === 'Canvas' 
                ? 'text-accent border-accent' 
                : 'text-text-secondary border-transparent hover:text-text-primary'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button className="text-[12px] font-bold uppercase tracking-wider text-text-secondary px-4 py-2 hover:bg-slate-50 rounded-md transition-colors">
            Export
          </button>
          <button 
            onClick={onRun}
            disabled={isSimulating}
            className={`text-[12px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-md shadow-sm transition-all active:scale-95 flex items-center gap-3 ${
                isSimulating 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-accent text-white hover:bg-blue-600'
            }`}
          >
            {isSimulating && <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>}
            {isSimulating ? 'Running...' : 'Run Workflow'}
          </button>
        </div>

        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <button className="text-text-secondary hover:text-text-primary p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-400 cursor-pointer hover:bg-slate-200 transition-colors">
            JD
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
