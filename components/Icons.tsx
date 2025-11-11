
import React from 'react';

export const AppleIcon = () => (
  <svg viewBox="0 0 100 200" className="w-16 h-32 mx-auto" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M50,30 Q70,30 85,50 T95,90 Q95,130 75,150 T50,160 Q25,160 5,130 T5,90 Q5,50 15,30 T50,30 Z" transform="translate(0 20)"/>
    <circle cx="50" cy="95" r="35" fill="currentColor" opacity="0.1"/>
  </svg>
);

export const PearIcon = () => (
  <svg viewBox="0 0 100 200" className="w-16 h-32 mx-auto" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M50,30 Q60,30 70,40 T75,60 Q75,80 65,95 T50,100 Q35,100 25,80 T25,60 Q25,40 30,30 T50,30 Z" transform="translate(0 15)" />
    <path d="M50,100 C20,100 5,120 5,150 Q25,180 50,180 Q75,180 95,150 C95,120 80,100 50,100 Z" transform="translate(0 0)"/>
  </svg>
);

export const HourglassIcon = () => (
  <svg viewBox="0 0 100 200" className="w-16 h-32 mx-auto" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M15,30 Q50,40 85,30 T85,70 Q50,80 15,70 T15,30 Z" transform="translate(0 15)"/>
    <path d="M15,110 Q50,100 85,110 T85,150 Q50,160 15,150 T15,110 Z" transform="translate(0 20)"/>
    <path d="M15,70 Q50,90 85,70" strokeWidth="1" />
    <path d="M15,110 Q50,90 85,110" strokeWidth="1" transform="translate(0 20)"/>
  </svg>
);

export const RectangleIcon = () => (
  <svg viewBox="0 0 100 200" className="w-16 h-32 mx-auto" fill="none" stroke="currentColor" strokeWidth="3">
    <rect x="25" y="30" width="50" height="140" rx="10" ry="10" transform="translate(0 15)"/>
  </svg>
);

export const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

export const WebsiteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" />
    </svg>
);

export const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth={2}></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" strokeWidth={2}></path>
    </svg>
);

export const BulletIcon = () => (
    <svg className="w-6 h-6 text-rose-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
);
