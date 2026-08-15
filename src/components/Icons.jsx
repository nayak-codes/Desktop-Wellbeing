import React from 'react';

export function WindowsIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 88 88" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.016 46.126zM40.47 6.748L87.973 0v41.427l-47.503.385zm47.53 39.52v41.691L40.47 81.21V46.075z" />
    </svg>
  );
}

export function WindowsModernIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M0 0h11v11H0zM13 0h11v11H13zM0 13h11v11H0zm13 0h11v11H13z" />
    </svg>
  );
}

export function Windows11Badge({ text = "Windows 11 / 10", className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/25 shadow-sm shadow-blue-500/10 ${className}`}>
      <WindowsModernIcon className="w-3 h-3 text-[#0078D4]" />
      <span>{text}</span>
    </span>
  );
}
