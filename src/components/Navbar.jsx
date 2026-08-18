import { Link } from 'react-router-dom';
import { NAV_LINKS, BRAND } from '../data/site';
import { useLocation } from 'react-router-dom';
import { btnHover } from '../lib/motion';

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full" data-purpose="primary-navigation">
      <span className="text-2xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-heading)', letterSpacing: '0.08em' }}>
        {BRAND.name}
      </span>
      <ul className="hidden md:flex items-center gap-8 text-sm" style={{ color: 'rgba(237,234,227,0.8)' }}>
        {NAV_LINKS.map((link) => (
          <li key={link.href} className="cursor-pointer hover:opacity-70 transition-opacity">
            <Link
              to={link.href}
              className={`${location.pathname === link.href ? 'text-[var(--color-accent)]' : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <button className="btn-hover flex items-center rounded-full pl-4 pr-2 py-1.5 gap-2 text-sm" style={{ backgroundColor: 'var(--color-accent)', color: '#1C1808' }} {...btnHover}>
        <span>Enquire</span>
        <div className="p-1 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(28,24,8,0.15)' }}>
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7"></path>
            <path d="M7 7h10v10"></path>
          </svg>
        </div>
      </button>
    </nav>
  );
};