import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Barcode, Scan, CheckCircle2, AlertCircle, RefreshCcw, Leaf, ShoppingCart } from 'lucide-react';
import { cn } from '../lib/utils';

interface ScannedProduct {
  name: string;
  brand: string;
  carbon: number; // kg CO2
  category: string;
  rating: 'A' | 'B' | 'C' | 'D' | 'E';
  alternatives: string[];
}

const MOCK_PRODUCTS: ScannedProduct[] = [
  {
    name: "Oat Milk - Barista Edition",
    brand: "Oatly",
    carbon: 0.42,
    category: "Dairy Alternatives",
    rating: 'A',
    alternatives: ["Pea Milk", "Homemade Almond Milk"]
  },
  {
    name: "Classic Greek Yogurt",
    brand: "Generic Brand",
    carbon: 1.85,
    category: "Dairy",
    rating: 'D',
    alternatives: ["Oat Yogurt", "Coconut Yogurt"]
  },
  {
    name: "Organic Avocados",
    brand: "EcoFarm",
    carbon: 1.2,
    category: "Produce",
    rating: 'C',
    alternatives: ["Local Seasonal Fruits", "Broad Beans"]
  },
  {
    name: "Dark Chocolate 70%",
    brand: "FairTrade",
    carbon: 0.9,
    category: "Snacks",
    rating: 'B',
    alternatives: ["Local Honey", "Dried Fruits"]
  }
];

export default function Tracker() {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<ScannedProduct | null>(null);
  const [history, setHistory] = useState<ScannedProduct[]>([]);
  const [error, setError] = useState<string | null>(null);

  const startScan = () => {
    setIsScanning(true);
    setResult(null);
    setError(null);

    // Simulate scan delay
    setTimeout(() => {
      const luckyIndex = Math.floor(Math.random() * MOCK_PRODUCTS.length);
      const product = MOCK_PRODUCTS[luckyIndex];
      setResult(product);
      setHistory(prev => [product, ...prev]);
      setIsScanning(false);
    }, 2500);
  };

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'A': return 'text-emerald-500 bg-emerald-500/10';
      case 'B': return 'text-green-500 bg-green-500/10';
      case 'C': return 'text-yellow-500 bg-yellow-500/10';
      case 'D': return 'text-orange-500 bg-orange-500/10';
      case 'E': return 'text-red-500 bg-red-500/10';
      default: return 'text-white/50 bg-white/5';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pb-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-display font-bold mb-4">Carbon Scanner</h1>
        <p className="text-white/40">Point your camera at a barcode to get instant eco-insights.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Scanner Body */}
        <div className="space-y-6">
          <div className="relative aspect-square md:aspect-[4/3] bg-zinc-900 rounded-[40px] border border-white/10 overflow-hidden flex items-center justify-center">
            {/* Camera View Simulation */}
            <div className="absolute inset-0 opacity-20">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
               <div className="w-full h-full bg-zinc-800 animate-pulse"></div>
            </div>

            <AnimatePresence mode="wait">
              {isScanning ? (
                <motion.div 
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative z-10 flex flex-col items-center gap-6"
                >
                  <div className="relative">
                    <div className="w-64 h-32 border-2 border-brand-primary/50 rounded-2xl relative overflow-hidden">
                       <motion.div 
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute h-0.5 w-full bg-brand-primary shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                       />
                    </div>
                    <Scan className="absolute -top-4 -left-4 w-8 h-8 text-brand-primary" />
                    <Scan className="absolute -top-4 -right-4 w-8 h-8 text-brand-primary rotate-90" />
                    <Scan className="absolute -bottom-4 -right-4 w-8 h-8 text-brand-primary rotate-180" />
                    <Scan className="absolute -bottom-4 -left-4 w-8 h-8 text-brand-primary -rotate-90" />
                  </div>
                  <div className="flex items-center gap-3">
                    <RefreshCcw className="w-5 h-5 text-brand-primary animate-spin" />
                    <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Analyzing Data...</span>
                  </div>
                </motion.div>
              ) : !result ? (
                <motion.div 
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center p-8 flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                    <Barcode className="w-10 h-10 text-white/20" />
                  </div>
                  <button 
                    onClick={startScan}
                    className="bg-brand-primary hover:bg-brand-secondary text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all hover:scale-105"
                  >
                    <Scan className="w-5 h-5" />
                    Start Scanning
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full h-full p-8 flex flex-col justify-center items-center gap-6 z-10 bg-zinc-950/80 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                     <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-black tracking-widest text-white/30 uppercase mb-1">{result.brand}</div>
                    <h2 className="text-2xl font-display font-bold text-white mb-2">{result.name}</h2>
                    <div className={cn("inline-block px-3 py-1 rounded-full text-xs font-bold mb-6", getRatingColor(result.rating))}>
                      Eco Score: {result.rating}
                    </div>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-brand-primary"
                    />
                  </div>
                  <button 
                    onClick={startScan}
                    className="text-sm font-bold text-white/40 hover:text-brand-primary transition-colors flex items-center gap-2"
                  >
                    <RefreshCcw className="w-4 h-4" /> Scan Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Result Details (if scanned) */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-zinc-900 border border-white/10 rounded-[32px] p-8 space-y-6"
              >
                <div className="flex justify-between items-center bg-black/40 p-6 rounded-2xl border border-white/5">
                   <div>
                      <div className="text-xs text-white/40 font-bold uppercase mb-1">Carbon Impact</div>
                      <div className="text-3xl font-display font-bold text-brand-primary">{result.carbon} <span className="text-sm font-normal text-white/30">kg CO₂</span></div>
                   </div>
                   <Leaf className="w-8 h-8 text-brand-primary/20" />
                </div>

                <div>
                   <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                     <AlertCircle className="w-4 h-4 text-brand-primary" />
                     Recommended Alternatives
                   </h4>
                   <div className="space-y-3">
                      {result.alternatives.map((alt, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl text-sm border border-transparent hover:border-brand-primary/20 transition-all cursor-pointer">
                           <span>{alt}</span>
                           <span className="text-[10px] font-bold text-emerald-500 uppercase">Save ~30%</span>
                        </div>
                      ))}
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* History / Info Sidebar */}
        <div className="space-y-8">
           <div className="bg-zinc-900/50 border border-white/5 rounded-[32px] p-8">
              <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                <ShoppingCart className="w-5 h-5 text-brand-primary" />
                Recent Scans
              </h3>
              
              <div className="space-y-4">
                {history.length > 0 ? history.map((item, i) => (
                  <motion.div 
                    layout
                    key={i + item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition-all border border-transparent hover:border-white/5"
                  >
                    <div className="flex flex-col">
                       <span className="text-sm font-bold">{item.name}</span>
                       <span className="text-[10px] text-white/30 uppercase">{item.brand}</span>
                    </div>
                    <div className="text-right">
                       <div className="text-sm font-bold text-brand-primary">{item.carbon}kg</div>
                       <div className={cn("text-[8px] font-black px-1.5 py-0.5 rounded", getRatingColor(item.rating))}>
                          SCORE {item.rating}
                       </div>
                    </div>
                  </motion.div>
                )) : (
                  <div className="text-center py-12 text-white/20">
                     <p className="text-sm">No scans yet today.</p>
                  </div>
                )}
              </div>
           </div>

           <div className="p-8 rounded-[32px] bg-gradient-to-br from-brand-primary/20 to-black/40 border border-brand-primary/10">
              <h4 className="font-bold mb-3">Eco Tip of the Day</h4>
              <p className="text-sm text-white/60 leading-relaxed italic">
                 "Replacing just one beef-based meal a week with a plant-based alternative can save as much carbon as driving 30 miles in a car."
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
