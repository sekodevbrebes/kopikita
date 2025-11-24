import React from 'react';

type SocialLinksProps = {
  links: {
    href: string;
    icon: string;
    ariaLabel: string;
  }[];
};

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex space-x-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-amber-700 text-white rounded-xl flex items-center justify-center hover:bg-amber-800 transition-colors"
          aria-label={link.ariaLabel}
        >
          <i className={`${link.icon} fa-lg`}></i>
        </a>
      ))}
    </div>
  );
}