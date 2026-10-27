import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Minimize2, CornerDownLeft } from 'lucide-react';
import { classMeta, students, weeklySchedule, bphMembers } from '../data/classData';

export default function ClassTerminal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'TRPL 25 A1 Virtual Shell [Version 1.0.0]\nKetik "help" untuk melihat daftar perintah.',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: inputVal }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Daftar Perintah Tersedia:
  jadwal      - Tampilkan ringkasan jadwal kuliah Semester 3
  mahasiswa   - Tampilkan daftar 20 mahasiswa dan NIM
  pengurus    - Tampilkan susunan Badan Pengurus Harian (BPH)
  dosen       - Tampilkan informasi Pembimbing Akademik & Dosen
  ig          - Tampilkan akun Instagram resmi kelas
  motto       - Tampilkan motto dan identitas kelas
  clear       - Bersihkan layar terminal
  exit        - Tutup jendela terminal`,
        });
        break;

      case 'jadwal':
        const scheduleText = weeklySchedule
          .filter((d) => d.classes.length > 0)
          .map(
            (d) =>
              `[${d.day}]\n` +
              d.classes
                .map((c) => `  * ${c.time} | ${c.course} (${c.credits} SKS) @ ${c.room}`)
                .join('\n')
          )
          .join('\n\n');
        newHistory.push({ type: 'output', text: scheduleText });
        break;

      case 'mahasiswa':
        const studentText = students
          .map((s, idx) => `${String(idx + 1).padStart(2, '0')}. ${s.nim} - ${s.name} (${s.role})`)
          .join('\n');
        newHistory.push({ type: 'output', text: `Daftar 20 Mahasiswa TRPL 25 A1:\n${studentText}` });
        break;

      case 'pengurus':
        const bphText = bphMembers
          .map((b) => `* ${b.role}: ${b.name} (${b.nim}) [@${b.instagram}]`)
          .join('\n');
        newHistory.push({ type: 'output', text: `Badan Pengurus Harian (BPH):\n${bphText}` });
        break;

      case 'dosen':
        newHistory.push({
          type: 'output',
          text: `Dosen Pembimbing Akademik: ${classMeta.academicAdvisor}
Fakultas: ${classMeta.faculty}
Institusi: ${classMeta.university}`,
        });
        break;

      case 'ig':
      case 'sosmed':
        newHistory.push({
          type: 'output',
          text: `Instagram Resmi: @${classMeta.instagram}\nTautan: https://instagram.com/${classMeta.instagram}`,
        });
        break;

      case 'motto':
        newHistory.push({
          type: 'output',
          text: `Motto: "${classMeta.motto}"
Instagram: @${classMeta.instagram}
Kelas: ${classMeta.name} (${classMeta.cohort})
Status: ${classMeta.semester} - 22 SKS`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Perintah tidak dikenali: "${cmd}". Ketik "help" untuk panduan.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-2xl bg-navy-950 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[82vh] sm:h-[480px] max-h-[520px]">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 bg-navy-900 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <span className="text-xs font-mono text-slate-400 pl-1.5 sm:pl-2 truncate">
              bash — trpl25a1@udb: ~
            </span>
          </div>
          <button
            onClick={onClose}
            className="min-w-[32px] min-h-[32px] flex items-center justify-center text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
            aria-label="Tutup Terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Content Area */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs text-slate-300 space-y-3">
          {history.map((entry, idx) => (
            <div key={idx}>
              {entry.type === 'system' && (
                <div className="text-slate-400 whitespace-pre-wrap">{entry.text}</div>
              )}
              {entry.type === 'user' && (
                <div className="flex items-center space-x-2 text-slate-200">
                  <span className="text-blue-400 font-bold">trpl25a1@udb:~$</span>
                  <span>{entry.text}</span>
                </div>
              )}
              {entry.type === 'output' && (
                <div className="text-slate-300 whitespace-pre-wrap pl-2 border-l border-slate-800">
                  {entry.text}
                </div>
              )}
              {entry.type === 'error' && (
                <div className="text-rose-400 whitespace-pre-wrap">{entry.text}</div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Line */}
        <form
          onSubmit={handleCommand}
          className="p-3 bg-navy-900/90 border-t border-slate-800 flex items-center space-x-2"
        >
          <span className="text-blue-400 font-mono font-bold text-xs">trpl25a1@udb:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="flex-1 bg-transparent text-xs font-mono text-white focus:outline-none"
            placeholder="ketik perintah..."
          />
          <button type="submit" className="text-slate-500 hover:text-slate-300">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
