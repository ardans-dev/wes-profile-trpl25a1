import React, { useState } from 'react';
import { Users, Search, ExternalLink, Copy, Check } from 'lucide-react';
import { students } from '../data/classData';

export default function StudentDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('Semua');
  const [copiedNim, setCopiedNim] = useState(null);

  const handleCopyNim = (nim) => {
    navigator.clipboard.writeText(nim);
    setCopiedNim(nim);
    setTimeout(() => setCopiedNim(null), 2000);
  };

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.nim.includes(searchQuery);

    if (filterRole === 'BPH') {
      return (
        matchesSearch &&
        (student.role.includes('Ketua') ||
          student.role.includes('Sekretaris') ||
          student.role.includes('Bendahara') ||
          student.role.includes('Media'))
      );
    }
    if (filterRole === 'PJ') {
      return matchesSearch && student.role.includes('PJ');
    }
    return matchesSearch;
  });

  return (
    <section id="mahasiswa" className="py-16 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-medium text-blue-400 uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>Direktori Mahasiswa</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Daftar 20 Mahasiswa TRPL 25 A1
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Data resmi mahasiswa Angkatan 2025, Fakultas Ilmu Komputer, Universitas Duta Bangsa Surakarta.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Cari nama atau NIM..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-9 pr-4 py-2.5 sm:py-2 text-sm sm:text-xs bg-navy-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="flex items-center gap-1 p-1 bg-navy-950 border border-slate-800 rounded-lg w-full sm:w-auto">
              {['Semua', 'BPH', 'PJ'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterRole(cat)}
                  className={`flex-1 sm:flex-initial px-3 py-2 sm:py-1.5 text-xs font-medium rounded-md transition-all text-center ${
                    filterRole === cat
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat === 'Semua' ? 'Semua (20)' : cat === 'BPH' ? 'Pengurus BPH' : 'PJ Matkul'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredStudents.map((student) => {
            // Generate initials for avatar
            const initials = student.name
              .split(' ')
              .map((n) => n[0])
              .slice(0, 2)
              .join('')
              .toUpperCase();

            const isBPH =
              student.role.includes('Ketua') ||
              student.role.includes('Sekretaris') ||
              student.role.includes('Bendahara') ||
              student.role.includes('Media');

            const isPJ = student.role.includes('PJ');

            return (
              <div
                key={student.id}
                className="p-5 rounded-xl border border-slate-800 bg-navy-950/60 hover:border-slate-700/80 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    {/* Monogram Avatar */}
                    <div className="w-10 h-10 rounded-lg bg-navy-900 border border-slate-700/70 flex items-center justify-center text-xs font-mono font-bold text-blue-400 group-hover:border-blue-500/50 transition-colors">
                      {initials}
                    </div>

                    {/* Role Tag */}
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        isBPH
                          ? 'bg-amber-950/40 text-amber-300 border-amber-800/40'
                          : isPJ
                          ? 'bg-blue-950/40 text-blue-300 border-blue-800/40'
                          : 'bg-slate-900 text-slate-400 border-slate-800'
                      }`}
                    >
                      {student.role}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white tracking-tight leading-snug">
                      {student.name}
                    </h3>
                    
                    {/* NIM & Copy button */}
                    <div className="flex items-center space-x-2 mt-1.5">
                      <span className="text-xs font-mono text-slate-400">
                        {student.nim}
                      </span>
                      <button
                        onClick={() => handleCopyNim(student.nim)}
                        className="min-w-[26px] min-h-[26px] flex items-center justify-center rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800/80 active:bg-slate-700 transition-colors"
                        title="Salin NIM"
                        aria-label={`Salin NIM ${student.name}`}
                      >
                        {copiedNim === student.nim ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-500">TRPL 25 A1</span>
                  {student.instagram ? (
                    <a
                      href={`https://instagram.com/${student.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-slate-400 hover:text-blue-400 font-mono text-[11px] transition-colors"
                    >
                      <span>@{student.instagram}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[10px] text-slate-600 font-mono">-</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredStudents.length === 0 && (
          <div className="py-12 text-center text-slate-500 text-sm">
            Tidak ditemukan mahasiswa dengan kriteria pencarian tersebut.
          </div>
        )}

      </div>
    </section>
  );
}
