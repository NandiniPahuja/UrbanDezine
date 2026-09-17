import React from 'react';

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const paths = {
  pen: <><path d="M4 20l1-4.2L14.8 6a1.8 1.8 0 0 1 2.5 0l.7.7a1.8 1.8 0 0 1 0 2.5L8.2 19l-4.2 1z"/><path d="M13 7.3l3.7 3.7"/></>,
  book: <><path d="M4 5.2c2.2-.9 4.8-.9 7 0v14c-2.2-.9-4.8-.9-7 0z"/><path d="M20 5.2c-2.2-.9-4.8-.9-7 0v14c2.2-.9 4.8-.9 7 0z"/></>,
  tshirt: <path d="M8 4L4 7.2 6.4 10 8 8.7V20h8V8.7L17.6 10 20 7.2 16 4c-.6 1.4-2 2.3-4 2.3S8.6 5.4 8 4z"/>,
  chip: <><rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M9.5 7V4M14.5 7V4M9.5 20v-3M14.5 20v-3M7 9.5H4M7 14.5H4M20 9.5h-3M20 14.5h-3"/></>,
  bag: <><path d="M6 8h12l1 12H5z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></>,
  gift: <><rect x="4" y="9" width="16" height="11" rx="1"/><path d="M4 9h16v3.2H4z"/><path d="M12 9v11"/><path d="M12 9c-1.4-3-3-4.2-4.4-3.4C6 6.4 7 9 12 9zM12 9c1.4-3 3-4.2 4.4-3.4C18 6.4 17 9 12 9z"/></>,
  mug: <><path d="M5 6h11v9a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"/><path d="M16 9h1.5a2.5 2.5 0 0 1 0 5H16"/></>,
  cap: <><path d="M4 13c0-4.4 3.6-8 8-8s8 3.6 8 8"/><path d="M4 13h16"/><path d="M16 13c2.4 0 4.4.5 5.6 1.3-.6 1-2.6 1.7-5 1.7"/></>,
  earbuds: <><circle cx="7" cy="7" r="2.4"/><circle cx="17" cy="7" r="2.4"/><path d="M7 9.4v6.1a2.5 2.5 0 0 0 5 0"/><path d="M17 9.4v3.1a2.2 2.2 0 0 1-2.2 2.2"/></>,
  speaker: <><rect x="7" y="3" width="10" height="18" rx="3"/><circle cx="12" cy="14" r="3.2"/><path d="M12 6.2h.01"/></>,
  powerbank: <><rect x="6" y="4" width="12" height="16" rx="2"/><path d="M13 8l-3 4.5h3L10 17"/></>,
  smartwatch: <><rect x="7.5" y="7" width="9" height="10" rx="2.2"/><path d="M9.5 7V4h5v3M9.5 17v3h5v-3"/></>,
  usb: <><rect x="8" y="3" width="8" height="6" rx="1"/><path d="M12 9v5"/><path d="M8 14h8v3a4 4 0 0 1-4 4 4 4 0 0 1-4-4z"/></>,
  charger: <><rect x="4" y="9" width="9" height="9" rx="2"/><path d="M8.5 11.5V15"/><circle cx="17.5" cy="7.5" r="3.2"/></>,
  laptopbag: <><rect x="4" y="7" width="16" height="12" rx="1.5"/><path d="M4 12h16"/><path d="M10 7V5.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V7"/></>,
  backpack: <><path d="M8 8V6a4 4 0 0 1 8 0v2"/><path d="M6 9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"/><path d="M9 13h6M10 9v3h4V9"/></>,
  tote: <><path d="M5 8h14l-1 12H6z"/><path d="M9 8a3 3 0 0 1 6 0"/></>,
  messenger: <><rect x="4" y="9" width="16" height="10" rx="2"/><path d="M6 9c0-3.3 2.7-5 6-5s6 1.7 6 5"/></>,
  duffel: <><rect x="4" y="9" width="16" height="9" rx="3"/><path d="M9 9V7a3 3 0 0 1 6 0v2"/><path d="M4 12.5h16"/></>,
  folder: <><path d="M4 6h6l2 2h8v11H4z"/></>,
  briefcase: <><rect x="4" y="8" width="16" height="10" rx="1.5"/><path d="M9 8V6.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6.5V8"/><path d="M4 13h16"/></>,
  keychain: <><circle cx="9" cy="7" r="3"/><path d="M11.2 9.2L18 16"/><path d="M15.5 13.5l2.5-2.5M17 16l2-2"/></>,
  deskorganizer: <><rect x="4" y="10" width="16" height="8" rx="1.5"/><path d="M8 10V7h3v3M14 10V5h3v5"/></>,
  mousepad: <><rect x="3.5" y="7" width="17" height="10" rx="3"/><circle cx="15.5" cy="12" r="1.6"/></>,
  ball: <><circle cx="12" cy="12" r="8"/><path d="M4 12c3-2 6 2 8 0s5-2 8 0M12 4c-2 3 2 6 0 8s-2 5 0 8"/></>,
  calendar: <><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 9.5h16M8 3v4M16 3v4"/></>,
  phonestand: <><rect x="8" y="3" width="8" height="14" rx="1.6"/><path d="M6 21h12M9 21l1-4h4l1 4"/></>,
  umbrella: <><path d="M12 3v16.5a2 2 0 0 1-3.6 1.2"/><path d="M3 12a9 9 0 0 1 18 0c-2 0-2-2-4.5-2s-2.5 2-4.5 2-2.5-2-4.5-2S5 12 3 12z"/></>,
};

export function Icon({ name, className = '' }) {
  const path = paths[name];
  if (!path) return null;
  return (
    <svg {...base} className={`icon icon-${name} ${className}`}>
      {path}
    </svg>
  );
}

export default Icon;
