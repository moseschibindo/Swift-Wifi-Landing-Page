import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Wifi, 
  Smartphone, 
  ExternalLink, 
  HelpCircle, 
  Phone, 
  MessageSquare, 
  HardDriveDownload
} from "lucide-react";

export default function App() {
  const [downloadSpeedSim, setDownloadSpeedSim] = useState(42.5);

  const supportNumber = "+254790805176";
  const whatsappLink = `https://wa.me/254790805176?text=Hello%20Swift%20WiFi%20Support,%20I%20have%20a%20problem%20connecting.`;
  const telLink = `tel:${supportNumber}`;

  // Gently fluctuate speed simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadSpeedSim((prev) => {
        const offset = (Math.random() * 8 - 4);
        const newValue = prev + offset;
        return newValue < 15 ? 15 : newValue > 75 ? 75 : parseFloat(newValue.toFixed(1));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#F1F5F9] via-[#E1F5FE]/55 to-[#EEF2F6] text-slate-800 font-sans flex flex-col justify-between p-4 sm:p-8 relative overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* Soft warm colorful ambient glows for a gorgeous, non-technical background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute top-1/4 right-[-200px] w-[500px] h-[550px] rounded-full bg-indigo-100/40 blur-3xl" />
        <div className="absolute bottom-[-150px] left-1/4 w-[450px] h-[450px] rounded-full bg-emerald-100/40 blur-3xl" />
      </div>

      {/* TOP: LIVE DATA FLOW SIMULATION TO PHONE */}
      <header className="relative w-full max-w-lg mx-auto z-10 select-none bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-md shadow-sky-950/5 border border-sky-100/80">
        <div className="flex flex-col space-y-3">
          
          {/* Header row: Branding and Status */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <Wifi className="w-4 h-4" />
              </div>
              <span className="font-display font-extrabold text-sm text-slate-800 tracking-tight">
                Swift <span className="text-blue-600">WiFi</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Active</span>
            </div>
          </div>

          {/* Connected Data Flowing Visualizer */}
          <div className="flex items-center justify-between bg-slate-50/80 rounded-xl p-3 border border-slate-100">
            {/* Server/WiFi Router Station */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-2xs border border-blue-100/50">
                <Wifi className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Router</span>
            </div>

            {/* Simulated Data Stream (Floating glowing particles) */}
            <div className="flex-1 flex items-center justify-center relative px-6 h-6 overflow-hidden">
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-blue-100 via-emerald-100 to-blue-200 rounded-full" />
              
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "100%", opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: index * 0.45,
                    ease: "linear"
                  }}
                  className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-2xs"
                />
              ))}

              <div className="absolute -top-3 text-[9px] font-mono font-bold text-slate-400 bg-white/90 px-1.5 py-0.5 rounded border border-slate-100 shadow-2xs flex items-center gap-1">
                <HardDriveDownload className="w-2.5 h-2.5 text-blue-500" />
                <span>{downloadSpeedSim} MB/s</span>
              </div>
            </div>

            {/* Users Phone Station */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-2xs border border-emerald-100/50 relative">
                <Smartphone className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Your Phone</span>
            </div>
          </div>

        </div>
      </header>

      {/* CENTER: COZY MODERN AND GORGEOUS WELCOME PLATFORM */}
      <main className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center my-auto py-8 sm:py-12 px-4 space-y-8">
        
        {/* Playfully bouncy Wifi Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 110,
            damping: 15,
            delay: 0.1
          }}
          className="text-7xl sm:text-8xl select-none filter drop-shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
          id="main-icon"
        >
          📶
        </motion.div>

        {/* Dynamic headings matching exactly */}
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight"
          >
            Welcome to <span className="text-blue-600">Swift WiFi</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-5 py-2 rounded-full shadow-sm"
          >
            <span className="text-sm font-bold text-emerald-700 flex items-center gap-1.5 tracking-wide">
              ✅ Connected Successfully
            </span>
          </motion.div>
        </div>

        {/* Essential text requested */}
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-slate-600 text-sm sm:text-lg max-w-lg mx-auto leading-relaxed font-medium"
        >
          You are now connected to the internet. Enjoy fast, secure and reliable browsing powered by Swift WiFi.
        </motion.p>

        {/* INTEGRATED SUPPORT & CALL DIRECT ACTION PANEL ON THE MAIN PAGE */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full max-w-lg space-y-4 pt-4"
        >
          {/* Main Action: Join WhatsApp Group directly */}
          <a
            href="https://chat.whatsapp.com/IYeoeJPCvcv6dDbiOTDRqH"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center space-x-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base py-4 px-6 rounded-2xl w-full shadow-md shadow-emerald-500/10 transition-all duration-200 active:scale-98 cursor-pointer overflow-hidden border border-emerald-750/10"
            id="join-whatsapp-btn"
          >
            <span className="text-xl">💬</span>
            <span>Join our WhatsApp Group</span>
            <ExternalLink className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Integrated Immediate Contact Options - Direct Support on Main Page */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-slate-200 space-y-4 shadow-xs" id="support-main-section">
            <div className="flex items-center space-x-2.5 justify-center sm:justify-start">
              <HelpCircle className="w-5 h-5 text-blue-500" />
              <div className="text-left">
                <h4 className="font-bold text-sm text-slate-800">Having trouble connecting?</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none mt-0.5">Direct Support Desk</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* WhatsApp Support Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold text-xs py-3.5 px-4 rounded-xl transition-all cursor-pointer shadow-2xs"
                id="support-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Support</span>
              </a>

              {/* standard Phone Call Support */}
              <a
                href={telLink}
                className="flex items-center justify-center space-x-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-bold text-xs py-3.5 px-4 rounded-xl transition-all cursor-pointer shadow-2xs"
                id="support-call-btn"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call support {supportNumber}</span>
              </a>
            </div>
          </div>

        </motion.div>

      </main>

      {/* FOOTER */}
      <footer className="relative w-full max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 mt-8 border-t border-slate-200/60 z-10 select-none">
        <div>
          <span className="font-mono text-[10px] text-slate-400 font-bold tracking-wider">
            © 2026 SWIFT WIFI • EXCELLENT ACCESS
          </span>
        </div>
        
        <div className="text-[10px] text-slate-450 font-semibold font-mono text-slate-400">
          Affordable Wifi To All
        </div>
      </footer>

    </div>
  );
}
