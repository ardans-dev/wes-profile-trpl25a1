import React, { useState } from 'react';
import { Menu, X, Calendar, Users, Shield, Image, Terminal } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { classMeta } from '../data/classData';

export default function Navbar({ onOpenTerminal }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Jadwal Kuliah', href: '#jadwal' },
    { name: 'Mahasiswa', href: '#mahasiswa' },
    { name: 'Struktur Kelas', href: '#struktur' },
    { name: 'Dokumentasi', href: '#dokumentasi' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-navy-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo and Brand */}
          <a href="#beranda" className="flex items-center space-x-2.5 sm:space-x-3 group min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center transition-transform group-hover:scale-105">
              <img 
                src="/images/logo-trpl25a1.png" 
                alt="Logo TRPL 25 A1" 
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(37,99,235,0.25)]"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-slate-100 tracking-tight text-sm sm:text-base truncate">
                  {classMeta.name}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/50 shrink-0">
                  {classMeta.semester}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block truncate">
                Universitas Duta Bangsa Surakarta
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <a
              href={`https://instagram.com/${classMeta.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 text-xs font-mono font-medium text-slate-300 bg-navy-900 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors hover:text-white"
              title="Instagram Resmi TRPL 25 A1"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
              <span>@{classMeta.instagram}</span>
            </a>
            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 text-xs font-mono font-medium text-slate-300 bg-navy-900 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors"
              title="Buka Terminal Interaktif"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>CLI</span>
            </button>
            <a
              href="#jadwal"
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors shadow-sm"
            >
              Jadwal Hari Ini
            </a>
          </div>

          {/* Mobile menu trigger & CLI */}
          <div className="flex sm:hidden items-center space-x-1.5">
            <button
              onClick={onOpenTerminal}
              className="min-w-[38px] min-h-[38px] flex items-center justify-center text-slate-300 hover:text-white bg-navy-900 border border-slate-800 rounded-lg active:bg-slate-800 transition-colors"
              aria-label="Terminal CLI"
            >
              <Terminal className="w-4 h-4 text-blue-400" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="min-w-[38px] min-h-[38px] flex items-center justify-center text-slate-300 hover:text-white bg-navy-900 border border-slate-800 rounded-lg active:bg-slate-800 transition-colors"
              aria-label="Menu Navigasi"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer menu */}
      {isOpen && (
        <div className="sm:hidden border-b border-slate-800 bg-navy-900/98 px-4 pt-3 pb-5 space-y-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3.5 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 active:bg-slate-800 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 space-y-2">
            <a
              href={`https://instagram.com/${classMeta.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-2.5 px-3 text-xs font-mono font-medium text-slate-200 bg-navy-950 border border-slate-800 rounded-lg active:bg-slate-800 transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400" />
              <span>Instagram @{classMeta.instagram}</span>
            </a>
            <a
              href="#jadwal"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full py-2.5 px-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
            >
              Cek Jadwal Perkuliahan
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
