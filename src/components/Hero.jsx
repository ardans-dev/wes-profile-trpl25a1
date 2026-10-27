import React from 'react';
import { BookOpen, Users, Clock, MapPin, Sparkles, ChevronRight, GraduationCap, ShieldAlert } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { classMeta, weeklySchedule } from '../data/classData';

export default function Hero() {
  // Get current day of week (0: Sunday, 1: Monday, ... 6: Saturday)
  const todayIndex = new Date().getDay();
  const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const todayName = dayNames[todayIndex];

  // Find schedule for today
  const todaySchedule = weeklySchedule.find((s) => s.dayIndex === todayIndex) || { classes: [] };
  const hasClassesToday = todaySchedule.classes.length > 0;

  return (
    <section id="beranda" className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background radial glow & grid */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Hero Content (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Class Emblem & Campus Tag */}
            <div className="flex items-center space-x-4 sm:space-x-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 filter drop-shadow-[0_4px_20px_rgba(37,99,235,0.4)]">
                <img
                  src="/images/logo-trpl25a1.png"
                  alt="Lambang TRPL 25 A1"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1.5">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="font-medium text-slate-200">{classMeta.faculty}</span>
                  <span className="text-slate-600">/</span>
                  <span className="text-slate-400">UDB Surakarta</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                  <span>Angkatan {classMeta.cohort} &bull; {classMeta.semester}</span>
                  <span>&bull;</span>
                  <a
                    href={`https://instagram.com/${classMeta.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-slate-300 hover:text-white transition-colors"
                  >
                    <InstagramIcon className="w-3 h-3 text-pink-400" />
                    <span>@{classMeta.instagram}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Sarjana Terapan Rekayasa Perangkat Lunak{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  25 A1
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
                {classMeta.description}
              </p>
            </div>

            {/* Slogan Banner */}
            <div className="p-4 rounded-xl border border-slate-800 bg-navy-900/60 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Motto Kelas
                </span>
                <p className="text-base font-semibold text-white tracking-wide">
                  "{classMeta.motto}"
                </p>
              </div>
              <div className="sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800/80">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Dosen Pembimbing
                </span>
                <p className="text-xs sm:text-sm font-medium text-slate-300">
                  {classMeta.academicAdvisor}
                </p>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
              <div className="p-3 sm:p-3.5 rounded-lg border border-slate-800/80 bg-navy-900/40">
                <span className="text-[11px] font-medium text-slate-400">Total Mahasiswa</span>
                <p className="text-xl font-bold text-white mt-0.5">{classMeta.totalStudents}</p>
                <span className="text-[10px] text-slate-400">Orang Terdaftar</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-lg border border-slate-800/80 bg-navy-900/40">
                <span className="text-[11px] font-medium text-slate-400">Beban Semester</span>
                <p className="text-xl font-bold text-white mt-0.5">{classMeta.totalCredits}</p>
                <span className="text-[10px] text-slate-400">SKS Terakreditasi</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-lg border border-slate-800/80 bg-navy-900/40">
                <span className="text-[11px] font-medium text-slate-400">Mata Kuliah</span>
                <p className="text-xl font-bold text-white mt-0.5">8</p>
                <span className="text-[10px] text-slate-400">Praktik & Teori</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-lg border border-slate-800/80 bg-navy-900/40">
                <span className="text-[11px] font-medium text-slate-400">Status Angkatan</span>
                <p className="text-xl font-bold text-blue-400 mt-0.5">Sem. 3</p>
                <span className="text-[10px] text-slate-400">Tahun 2026/2027</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#jadwal"
                className="inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
              >
                <span>Lihat Jadwal Mingguan</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
              <a
                href="#mahasiswa"
                className="inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors"
              >
                <span>Daftar 20 Mahasiswa</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Academic Pulse (Right 5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-800 bg-navy-900/70 backdrop-blur-sm p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Jadwal Hari Ini: {todayName}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {hasClassesToday ? `${todaySchedule.classes.length} Mata Kuliah` : 'Bebas Perkuliahan'}
                </span>
              </div>

              {hasClassesToday ? (
                <div className="space-y-3">
                  {todaySchedule.classes.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-lg border border-slate-800/90 bg-navy-950/70 hover:border-slate-700 transition-colors space-y-2"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800/40">
                            {item.code} ({item.credits} SKS)
                          </span>
                          <h4 className="text-sm font-semibold text-white mt-1.5 leading-snug">
                            {item.course}
                          </h4>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {item.lecturer}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-slate-300 border-t border-slate-800/60 font-mono">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3.5 h-3.5 text-blue-400" />
                          <span>{item.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3.5 h-3.5 text-amber-400" />
                          <span>{item.room}</span>
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-400 pt-0.5 flex items-center justify-between">
                        <span>PJ: {item.pj}</span>
                        {item.pjIg && (
                          <a
                            href={`https://instagram.com/${item.pjIg}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 font-mono text-[10px]"
                          >
                            @{item.pjIg}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 mx-auto flex items-center justify-center text-slate-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-200">
                    Tidak Ada Perkuliahan Tatap Muka
                  </h4>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                    Hari {todayName} tidak dijadwalkan perkuliahan kelas. Waktu difokuskan untuk pengerjaan proyek, tugas kelompok, dan belajar mandiri.
                  </p>
                </div>
              )}

              <div className="pt-2">
                <a
                  href="#jadwal"
                  className="block text-center text-xs font-medium text-slate-300 hover:text-white py-2 rounded border border-slate-800 bg-slate-900/60 hover:bg-slate-800 transition-colors"
                >
                  Buka Jadwal Lengkap Semester 3
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
