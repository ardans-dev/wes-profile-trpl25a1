import React from 'react';
import { Shield, GraduationCap, ExternalLink, Award } from 'lucide-react';
import { bphMembers, classMeta } from '../data/classData';

export default function OrganizationSection() {
  const ketua = bphMembers.find((m) => m.role === 'Ketua Kelas');
  const wakil = bphMembers.find((m) => m.role === 'Wakil Ketua');
  const sekretaris = bphMembers.filter((m) => m.role.includes('Sekretaris'));
  const bendahara = bphMembers.filter((m) => m.role.includes('Bendahara'));
  const media = bphMembers.filter((m) => m.role.includes('Media'));

  return (
    <section id="struktur" className="py-16 border-t border-slate-800/80 bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-medium text-blue-400 uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Tata Kelola Kelas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Struktur Kepengurusan Kelas 2026/2027
          </h2>
          <p className="text-sm text-slate-400">
            Badan Pengurus Harian dan Pembimbing Akademik yang mengawal koordinasi perkuliahan TRPL 25 A1.
          </p>
        </div>

        {/* Academic Advisor Highlight Card */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl border border-slate-700/80 bg-gradient-to-br from-navy-900 to-navy-950 shadow-lg flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 text-center sm:text-left">
          <div className="w-14 h-14 rounded-xl bg-blue-950 border border-blue-700/50 flex items-center justify-center text-blue-400 shrink-0">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div className="space-y-1 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
                Dosen Pembimbing Akademik
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Fakultas Ilmu Komputer
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">
              {classMeta.academicAdvisor}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed pt-1">
              Memberikan bimbingan studi kurikulum terapan, monitoring evaluasi pencapaian SKS, dan pengarahan karir rekayasa perangkat lunak.
            </p>
          </div>
        </div>

        {/* Executive Hierarchy Cards */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {/* Top Leaders: Ketua & Wakil */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[ketua, wakil].map((leader) => (
              <div
                key={leader.role}
                className="p-5 rounded-xl border border-slate-800 bg-navy-950/80 hover:border-slate-700 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-950/50 text-amber-300 border border-amber-800/50 font-semibold">
                    {leader.role}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {leader.nim}
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    {leader.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Penanggung Jawab Umum Koordinasi Kelas
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono text-[11px]">Instagram Resmi</span>
                  <a
                    href={`https://instagram.com/${leader.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 font-mono text-xs"
                  >
                    <span>@{leader.instagram}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Department Pairs: Sekretaris, Bendahara, Media */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Sekretaris */}
            <div className="p-5 rounded-xl border border-slate-800 bg-navy-950/60 space-y-4">
              <div className="border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                  Divisi Administrasi
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Surat menyurat, presensi & arsip akademik
                </p>
              </div>
              <div className="space-y-3">
                {sekretaris.map((sec) => (
                  <div key={sec.name} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">{sec.role}</span>
                      <a
                        href={`https://instagram.com/${sec.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-blue-400 hover:underline"
                      >
                        @{sec.instagram}
                      </a>
                    </div>
                    <p className="text-sm font-semibold text-white">{sec.name}</p>
                    <p className="text-[10px] font-mono text-slate-500">{sec.nim}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bendahara */}
            <div className="p-5 rounded-xl border border-slate-800 bg-navy-950/60 space-y-4">
              <div className="border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                  Divisi Keuangan
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Pengelolaan kas kelas & transparansi anggaran
                </p>
              </div>
              <div className="space-y-3">
                {bendahara.map((ben) => (
                  <div key={ben.name} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">{ben.role}</span>
                      <a
                        href={`https://instagram.com/${ben.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-blue-400 hover:underline"
                      >
                        @{ben.instagram}
                      </a>
                    </div>
                    <p className="text-sm font-semibold text-white">{ben.name}</p>
                    <p className="text-[10px] font-mono text-slate-500">{ben.nim}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Media & Publikasi */}
            <div className="p-5 rounded-xl border border-slate-800 bg-navy-950/60 space-y-4">
              <div className="border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                  Divisi Media
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Publikasi digital, visual & dokumentasi
                </p>
              </div>
              <div className="space-y-3">
                {media.map((med) => (
                  <div key={med.name} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">{med.role}</span>
                      <a
                        href={`https://instagram.com/${med.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-blue-400 hover:underline"
                      >
                        @{med.instagram}
                      </a>
                    </div>
                    <p className="text-sm font-semibold text-white">{med.name}</p>
                    <p className="text-[10px] font-mono text-slate-500">{med.nim}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
