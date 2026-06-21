import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Wifi, 
  Smartphone, 
  ExternalLink, 
  HelpCircle, 
  Phone, 
  MessageSquare, 
  X, 
  Check, 
  HardDriveDownload,
  AlertCircle
} from "lucide-react";

export default function App() {
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [downloadSpeedSim, setDownloadSpeedSim] = useState(42.5);

  const supportNumber = "0790805176";
  const whatsappLink = `https://wa.me/27790805176?text=Hello%20Swift%20WiFi%20Support,%20I%20have%20a%20problem%20connecting.`;
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
    <div className="min-h-screen bg-gradient-to-tr from-[#F1F5F9] via-[#E0F2FE]/50 to-[#EEF2F6] text-slate-800 font-sans flex flex-col justify-between p-4 sm:p-8 relative overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* Soft warm colorful blurs for a gentle, modern, non-technical background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute top-1/4 right-[-200px] w-[500px] h-[550px] rounded-full bg-indigo-100/40 blur-3xl" />
        <div className="absolute bottom-[-100px] left-1/4 w-[450px] h-[450px] rounded-full bg-emerald-100/30 blur-3xl" />
      </div>

      {/* TOP: LIVE DATA FLOW SIMULATION TO PHONE */}
      <header className="relative w-full max-w-lg mx-auto z-10 select-none bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-md shadow-sky-900/5 border border-sky-100/80">
        <div className="flex flex-col space-y-3">
          
          {/* Header row: Branding and Status */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm">
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
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-xs border border-blue-100/50">
                <Wifi className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Router</span>
            </div>

            {/* Simulated Data Stream (Floating glowing particles) */}
            <div className="flex-1 flex items-center justify-center relative px-6 h-6 overflow-hidden">
              
              {/* Particle Stream */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-blue-100 via-emerald-100 to-blue-200 rounded-full" />
              
              {/* Flowing Bubbles with staggered anim delays */}
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
                  className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-xs"
                />
              ))}

              <div className="absolute -top-3 text-[9px] font-mono font-bold text-slate-400 bg-white/90 px-1.5 py-0.5 rounded border border-slate-100 shadow-2xs flex items-center gap-1">
                <HardDriveDownload className="w-2.5 h-2.5 text-blue-500" />
                <span>{downloadSpeedSim} MB/s</span>
              </div>
            </div>

            {/* Users Phone Station receiving data */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-xs border border-emerald-100/50 relative">
                <Smartphone className="w-5 h-5" />
                {/* Micro positive glowing pulse badge */}
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Your Phone</span>
            </div>
          </div>

        </div>
      </header>

      {/* CENTER: COZY MODERN AND GORGEOUS WELCOME PLATFORM */}
      <main className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center my-auto py-8 sm:py-12 px-2 space-y-7">
        
        {/* Playfully bouncy high definition Wifi Emoji */}
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

        {/* Dynamic header typography */}
        <div className="space-y-3.5">
          <motion.h1 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight"
          >
            Welcome to <span className="text-blue-600 bg-clip-text">Swift WiFi</span>
          </motion.h1>

          {/* Secure connected badge */}
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

        {/* Friendly easy explanation */}
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-slate-600 text-sm sm:text-lg max-w-lg mx-auto leading-relaxed font-medium"
        >
          You are now connected to the internet. Enjoy fast, secure and reliable browsing powered by Swift WiFi.
        </motion.p>

        {/* Clean minimal actions menu */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full max-w-md pt-3 space-y-3.5"
        >
          
          {/* Main Action 1: Join WhatsApp group with cozy friendly colorway */}
          <a
            href="https://chat.whatsapp.com/IYeoeJPCvcv6dDbiOTDRqH"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center space-x-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-2xl w-full shadow-md shadow-emerald-550/10 transition-all duration-200 active:scale-98 cursor-pointer overflow-hidden border border-emerald-700/10"
            id="join-whatsapp-btn"
          >
            <span className="text-lg">💬</span>
            <span>Join our WhatsApp Group</span>
            <ExternalLink className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Main Action 2: Get help with connection popup */}
          <button
            onClick={() => setShowSupportModal(true)}
            className="w-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 transition-all font-bold text-sm py-3.5 px-6 rounded-2xl inline-flex items-center justify-center space-x-2 cursor-pointer shadow-xs active:scale-98"
            id="trouble-connecting-btn"
          >
            <HelpCircle className="w-4.5 h-4.5 text-blue-500" />
            <span>Having trouble connecting? Contact Support Here</span>
          </button>

        </motion.div>

      </main>

      {/* INFORMATIVE MODAL FOR TROUBLE CONNECTING */}
      <AnimatePresence>
        {showSupportModal && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.35 }}
              className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 max-w-md w-full relative space-y-6 shadow-2xl text-left"
              id="support-modal-box"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowSupportModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 p-2 rounded-full transition-colors cursor-pointer"
                id="close-modal"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base text-slate-900">How can we help?</h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Swift WiFi Support Desk</p>
                </div>
              </div>

              {/* Automatic diagnostics instructions */}
              <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 text-xs text-slate-600 space-y-3 leading-relaxed">
                <div className="flex items-center space-x-2 text-blue-600 font-bold uppercase tracking-wider text-[10px]">
                  <AlertCircle className="w-3.5 h-3.5 text-blue-500" />
                  <span>Automatic Diagnostics Message</span>
                </div>
                
                <p>
                  <strong>Welcome to Swift WiFi Support!</strong>
                  <br /><br />
                  If your device has connected but shows "No Internet" or is loading slowly:
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-slate-600 font-medium">
                  <li>Try toggling your device WiFi off and back on again.</li>
                  <li>Ensure your device is configured to get an IP automatically (DHCP).</li>
                  <li>Temporary custom static proxies or VPNs might block local routing.</li>
                </ul>
              </div>

              {/* Directly contact admin */}
              <div className="space-y-3">
                <p className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-widest text-center leading-none">
                  Support hotline: <span className="text-slate-800 font-extrabold">{supportNumber}</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  
                  {/* WhatsApp Support Direct admin button */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 px-4 rounded-xl shadow-xs transition-colors text-center cursor-pointer"
                    id="support-whatsapp-btn"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Support</span>
                  </a>

                  {/* Standard Cellular tel-link call */}
                  <a
                    href={telLink}
                    className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3.5 px-4 rounded-xl shadow-xs transition-colors text-center cursor-pointer"
                    id="support-call-btn"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Direct Call Support</span>
                  </a>

                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
