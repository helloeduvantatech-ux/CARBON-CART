import { motion } from 'framer-motion';
import { Barcode, Zap, TrendingUp, Search, Info, Calculator, Save, ShieldCheck, Star, Check, Leaf } from 'lucide-react';
import { Page } from '../App';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-10 pb-20 md:pt-20 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-semibold mb-4 w-fit">
              <span>v2.0 Now Live — Track Your Impact</span>
            </div>
            <h1 className="text-6xl font-bold leading-tight mb-4 tracking-tight">
              Scan Your Groceries.<br/><span className="text-emerald-500">Track Your Carbon.</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
              Barcode scan to calculate the CO₂ impact of your daily products instantly. Offset your lifestyle one cart at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('tracker')}
                className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/5"
              >
                <Barcode className="w-5 h-5" />
                Scan Barcode
              </button>
              <button 
                onClick={() => onNavigate('dashboard')}
                className="border border-gray-700 hover:border-gray-500 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
              >
                View Dashboard
              </button>
            </div>
            
            {/* Design Testimonials */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex-1">
                <p className="text-xs italic text-gray-300">"Saved 40kg of CO₂ in my first month just by switching milk brands!"</p>
                <span className="text-[10px] text-emerald-400 font-bold uppercase mt-2 block tracking-widest">— Sarah Jenkins</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex-1">
                <p className="text-xs italic text-gray-300">"The scanner is lightning fast. Best eco-tool I've used."</p>
                <span className="text-[10px] text-emerald-400 font-bold uppercase mt-2 block tracking-widest">— Marc R.</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full -z-10 animate-pulse"></div>
            <div className="bg-zinc-900 rounded-[32px] border border-white/10 p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 blur-[80px]"></div>
              
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                  Personal Impact
                </h3>
                <span className="text-[10px] bg-emerald-500 text-black px-2 py-0.5 rounded font-black uppercase tracking-widest">Live</span>
              </div>
              
              <div className="bg-black/40 rounded-2xl p-6 mb-6 border border-white/5">
                <p className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-widest">Total CO₂ This Month</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold">142.8</span>
                  <span className="text-sm text-gray-500 mb-1">kg CO₂e</span>
                  <span className="text-xs text-emerald-400 ml-auto flex items-center mb-1">▼ 12%</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Top High-Carbon Products</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-200">Wagyu Beef Burger</span>
                    </div>
                    <span className="font-mono text-xs text-gray-400">14.2kg</span>
                  </div>
                  <div className="flex justify-between items-center text-sm p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-200">Imported Avocados</span>
                    </div>
                    <span className="font-mono text-xs text-gray-400">2.1kg</span>
                  </div>
                </div>

                {/* Chart Mockup */}
                <div className="h-24 w-full flex items-end justify-between gap-1.5 mt-6 px-1">
                  <motion.div initial={{ height: 0 }} animate={{ height: '40%' }} className="w-full bg-emerald-500/20 rounded-t-sm"></motion.div>
                  <motion.div initial={{ height: 0 }} animate={{ height: '60%' }} className="w-full bg-emerald-500/30 rounded-t-sm"></motion.div>
                  <motion.div initial={{ height: 0 }} animate={{ height: '50%' }} className="w-full bg-emerald-500/40 rounded-t-sm"></motion.div>
                  <motion.div initial={{ height: 0 }} animate={{ height: '80%' }} className="w-full bg-emerald-500/60 rounded-t-sm"></motion.div>
                  <motion.div initial={{ height: 0 }} animate={{ height: '45%' }} className="w-full bg-emerald-500/80 rounded-t-sm"></motion.div>
                  <motion.div initial={{ height: 0 }} animate={{ height: '100%' }} className="w-full bg-emerald-500 rounded-t-sm"></motion.div>
                  <motion.div initial={{ height: 0 }} animate={{ height: '35%' }} className="w-full bg-emerald-500/40 rounded-t-sm"></motion.div>
                </div>
              </div>

              {/* Eco Tip Card */}
              <div className="mt-8 p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                <div className="flex gap-3">
                  <div className="text-xl">💡</div>
                  <div>
                    <p className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase">Eco Tip</p>
                    <p className="text-xs text-gray-300 leading-relaxed">Swap plastic bottles for refillable glass packs to save 4.2kg/month.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all">
              <p className="text-emerald-500 font-bold mb-2">01. Scan</p>
              <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-widest font-semibold mb-1">Barcode recognition</p>
              <p className="text-sm text-gray-500">Instant product recognition via our proprietary barcode database.</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all">
              <p className="text-emerald-500 font-bold mb-2">02. Calculate</p>
              <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-widest font-semibold mb-1">Carbon Footprint</p>
              <p className="text-sm text-gray-500">Accurate CO₂ estimation based on source, production, and shipping.</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all">
              <p className="text-emerald-500 font-bold mb-2">03. Track</p>
              <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-widest font-semibold mb-1">Impact Analytics</p>
              <p className="text-sm text-gray-500">Monitor weekly and monthly goals in a simplified dashboard.</p>
            </div>
            <div className="p-6 bg-emerald-500 text-black rounded-2xl flex flex-col justify-between hover:bg-emerald-400 transition-all group cursor-pointer">
              <p className="font-bold text-xs uppercase tracking-widest">Premium Access</p>
              <div className="flex justify-between items-end">
                <p className="text-3xl font-display font-bold leading-none">$9<span className="text-xs">/mo</span></p>
                <span className="text-[10px] font-black underline decoration-2 group-hover:no-underline">GET PRO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-12">
                {[
                  { step: "01", title: "Scan Barcode", desc: "Use our hyper-fast mobile scanner at home or in-store.", icon: Search },
                  { step: "02", title: "Get Details", desc: "Instantly see product ingredients, origin, and packaging data.", icon: Info },
                  { step: "03", title: "Calculate CO₂", desc: "Our proprietary algorithm estimates environmental impact.", icon: Calculator },
                  { step: "04", title: "Reduce Footprint", desc: "Follow smart suggestions to swap for eco-friendly alternatives.", icon: TrendingUp }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center font-display font-bold text-brand-primary border border-brand-primary/20">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold mb-2">{step.title}</h4>
                      <p className="text-white/40 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
                Your journey to <br />
                <span className="text-brand-primary italic">Net Zero</span> <br />
                starts here.
              </h2>
              <p className="text-white/50 mb-8 max-w-md">
                We make it easy to understand the invisible costs of consumption. Every scan contributes to your personal sustainability journey.
              </p>
              <div className="p-8 bg-zinc-900/40 rounded-3xl border border-white/5 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4">
                    <ShieldCheck className="w-8 h-8 text-brand-primary/20" />
                 </div>
                 <p className="text-white font-display font-medium text-lg leading-relaxed italic">
                   "CarbonCart completely changed how I grocery shop. I had no idea my favorite yogurt had such a high footprint!"
                 </p>
                 <div className="mt-6 flex items-center gap-4">
                    <div className="w-10 h-10 bg-zinc-800 rounded-full overflow-hidden">
                       <img src="https://i.pravatar.cc/100?img=32" alt="Avatar" />
                    </div>
                    <div>
                       <div className="text-sm font-bold">Sarah Jenkins</div>
                       <div className="text-xs text-white/30">Sustainability Blogger</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 px-6 bg-brand-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-900 rounded-[40px] border border-white/10 shadow-3xl overflow-hidden relative">
            <div className="p-8 md:p-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Beautiful Analytics</h2>
                <p className="text-white/40">Visualizing your progress makes small steps feel big.</p>
              </div>
              <button 
                onClick={() => onNavigate('dashboard')}
                className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Go to Dashboard <Zap className="w-4 h-4" />
              </button>
            </div>
            <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-black/40 rounded-3xl p-8 border border-white/5 h-[300px] flex flex-col justify-end">
                <div className="flex gap-4 items-end h-full">
                  {[40, 70, 45, 90, 65, 30, 80].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      className="flex-1 bg-brand-primary/20 hover:bg-brand-primary rounded-t-lg transition-colors cursor-pointer"
                    ></motion.div>
                  ))}
                </div>
                <div className="mt-6 flex justify-between text-[10px] font-bold text-white/20 uppercase tracking-widest">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-black/40 p-6 rounded-3xl border border-white/5">
                   <div className="text-xs text-brand-primary font-bold uppercase tracking-widest mb-1">Monthly Total</div>
                   <div className="text-3xl font-display font-bold">124.5 <span className="text-sm font-normal text-white/30">kg CO₂</span></div>
                </div>
                <div className="bg-black/40 p-6 rounded-3xl border border-white/5">
                   <div className="text-xs text-emerald-500 font-bold uppercase tracking-widest mb-1">Savings</div>
                   <div className="text-3xl font-display font-bold">12.8% <span className="text-sm font-normal text-white/30">vs last month</span></div>
                </div>
                <div className="px-6">
                   <div className="text-xs text-white/30 font-bold uppercase tracking-widest mb-4">Eco Achievements</div>
                   <div className="flex gap-2">
                     <div className="w-10 h-10 bg-brand-primary text-black rounded-full flex items-center justify-center font-bold">🌱</div>
                     <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center grayscale opacity-50">💧</div>
                     <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center grayscale opacity-50">🚲</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Tips Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold">Smart Alternatives</h2>
            <p className="text-white/40 mt-2">Small swaps that make a massive difference.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { from: "Plastic Bottles", to: "Refill Pack", saved: "0.2kg", impact: "High" },
              { from: "Red Meat", to: "Lentils/Peas", saved: "25.0kg", impact: "Very High" },
              { from: "Paper Towels", to: "Bamboo Cloths", saved: "1.2kg", impact: "Medium" }
            ].map((tip, idx) => (
              <div key={idx} className="bg-zinc-900 border border-white/5 p-6 rounded-2xl">
                 <div className="flex justify-between items-start mb-6">
                    <span className="bg-white/5 px-3 py-1 rounded text-[10px] font-bold text-white/40 uppercase">Recommended Swap</span>
                    <span className="text-brand-primary text-xs font-bold">Saved {tip.saved}</span>
                 </div>
                 <div className="flex items-center gap-4 text-sm mb-6">
                    <span className="text-white/30 line-through">{tip.from}</span>
                    <div className="flex-1 border-t border-dashed border-white/10"></div>
                    <span className="text-white font-bold">{tip.to}</span>
                 </div>
                 <button className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-all uppercase tracking-widest">Learn why</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-black/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 italic">Support the Planet.</h2>
            <p className="text-white/40">Basic features are free forever. Upgrade for advanced intelligence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-950 p-10 rounded-[32px] border border-white/5">
              <h3 className="text-2xl font-display font-bold mb-2">Essential</h3>
              <p className="text-white/40 text-sm mb-8">For individuals on their green journey.</p>
              <div className="text-4xl font-display font-bold mb-8">$0 <span className="text-base font-normal text-white/30">/ month</span></div>
              <ul className="space-y-4 mb-10 text-sm text-white/60">
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-brand-primary" /> 100 Scans / month</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-brand-primary" /> Basic CO₂ Calculation</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-brand-primary" /> Community Benchmarks</li>
                <li className="flex items-center gap-3 opacity-30"><Check className="w-4 h-4 text-brand-primary" /> Advanced ML Analytics</li>
              </ul>
              <button 
                onClick={() => onNavigate('tracker')}
                className="w-full py-4 bg-white/5 hover:bg-white/10 rounded-2xl font-bold transition-all"
              >
                Join for free
              </button>
            </div>
            
            <div className="bg-brand-primary p-10 rounded-[32px] text-black relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-display font-bold">Pro</h3>
                  <span className="bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">Recommended</span>
                </div>
                <p className="text-black/60 text-sm mb-8">For serious climate advocates.</p>
                <div className="text-4xl font-display font-bold mb-8">$9 <span className="text-base font-normal text-black/40">/ month</span></div>
                <ul className="space-y-4 mb-10 text-sm text-black/80 font-medium">
                  <li className="flex items-center gap-3"><Check className="w-4 h-4" /> Unlimited Scans</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4" /> Detailed Supply Chain Data</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4" /> Monthly Carbon Offset Tips</li>
                  <li className="flex items-center gap-3"><Check className="w-4 h-4" /> Eco Challenges & Rewards</li>
                </ul>
                <button className="w-full py-4 bg-black text-white rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl">
                  Try Pro for free
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[60px] bg-gradient-to-br from-brand-primary to-brand-secondary p-12 md:p-24 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
           <div className="relative z-10 text-black">
              <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 leading-none">Ready to lighten your load on Earth?</h2>
              <p className="text-black/60 text-lg mb-10 max-w-2xl mx-auto">Join the movement of thousands making every purchase count toward a greener future.</p>
              <button 
                onClick={() => onNavigate('tracker')}
                className="bg-black text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl"
              >
                Scan My First Item
              </button>
           </div>
        </div>
      </section>
    </div>
  );
}
