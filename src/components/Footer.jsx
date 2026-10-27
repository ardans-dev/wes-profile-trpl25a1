import React from 'react';
import { classMeta } from '../data/classData';
import { Shield, Code2, Globe } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-navy-950 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 shrink-0 filter drop-shadow-[0_2px_10px_rgba(37,99,235,0.3)]">
                <img 
                  src="/images/logo-trpl25a1.png" 
                  alt="Logo TRPL 25 A1" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-white text-sm tracking-tight">
                {classMeta.name} &bull; {classMeta.fullName}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {classMeta.faculty}, {classMeta.university}. Portal pusat informasi dan koordinasi akademik perkuliahan angkatan 2025.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1 font-mono text-[11px] text-slate-400">
              <div className="flex items-center space-x-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>trpl25a1.my.id</span>
              </div>
              <a
                href={`https://instagram.com/${classMeta.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>@{classMeta.instagram}</span>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] font-mono">
              Navigasi Halaman
            </span>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <a href="#beranda" className="hover:text-white transition-colors">Beranda Utama</a>
              </li>
              <li>
                <a href="#jadwal" className="hover:text-white transition-colors">Jadwal Kuliah Semester 3</a>
              </li>
              <li>
                <a href="#mahasiswa" className="hover:text-white transition-colors">Direktori 20 Mahasiswa</a>
              </li>
              <li>
                <a href="#struktur" className="hover:text-white transition-colors">Struktur Organisasi Kelas</a>
              </li>
              <li>
                <a href="#dokumentasi" className="hover:text-white transition-colors">Arsip Dokumentasi</a>
              </li>
            </ul>
          </div>

          {/* Institutional Note */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] font-mono">
              Pengembangan Terbuka
            </span>
            <p className="text-slate-400 text-xs leading-relaxed">
              Basis data mahasiswa dan jadwal disimpan dalam berkas terstruktur untuk memudahkan pembaruan berkala oleh pengurus kelas dan kontribusi seluruh anggota kelas.
            </p>
            <div className="p-3 rounded-lg border border-slate-800 bg-navy-900/60 font-mono text-[11px] text-slate-400">
              Motto: <span className="text-white font-medium">"{classMeta.motto}"</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>
            &copy; {currentYear} TRPL 25 A1 &bull; Universitas Duta Bangsa Surakarta. Hak cipta dilindungi.
          </p>
          <div className="flex items-center space-x-4">
            <span>Semester 3 &bull; 22 SKS</span>
            <span>Azure Static Web Apps</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
