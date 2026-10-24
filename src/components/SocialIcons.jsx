import React from 'react';

/**
 * Standard, crisp SVG icons for social media platforms
 */

export function InstagramIcon({ size = 20, className = '', color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      style={{ display: 'block', margin: 'auto' }}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export function FacebookIcon({ size = 20, className = '', fill = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
      aria-hidden="true"
      style={{ display: 'block', margin: 'auto' }}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20, className = '', fill = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
      aria-hidden="true"
      style={{ display: 'block', margin: 'auto' }}
    >
      <path d="M12.031 2c-5.516 0-9.994 4.478-9.994 9.995 0 1.763.459 3.483 1.332 5.001L2 22l5.163-1.354a9.96 9.96 0 0 0 4.868 1.258h.004c5.516 0 9.995-4.479 9.995-9.996.001-2.671-1.037-5.181-2.926-7.07C17.216 3.048 14.704 2.001 12.031 2zm5.827 14.195c-.244.688-1.42 1.318-1.968 1.399-.516.076-1.189.108-3.418-.813-2.852-1.179-4.686-4.086-4.827-4.275-.141-.189-1.152-1.534-1.152-2.926 0-1.392.73-2.076.989-2.359.259-.283.565-.353.753-.353.189 0 .377.002.541.011.176.009.412-.067.647.494.244.587.824 2.012.895 2.153.071.141.118.306.024.494-.094.188-.141.306-.282.471-.141.165-.297.368-.424.494-.141.141-.289.294-.124.577.165.282.733 1.21 1.572 1.957 1.08 1.002 1.99 1.314 2.273 1.455.283.141.447.118.612-.071.165-.189.706-.824.895-1.106.188-.283.376-.236.635-.141.259.094 1.647.777 1.929.918.283.141.471.212.541.33.071.118.071.683-.173 1.371z" />
    </svg>
  );
}

export function GoogleMapsIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      style={{ display: 'block', margin: 'auto' }}
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}
