import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { TrendingDown, TrendingUp, Calendar, Filter, Download, Zap, Leaf, Target, Info } from 'lucide-react';
import { cn } from '../lib/utils';

const DATA_HISTORY = [
  { day: 'Mon', carbon: 4.2 },
  { day: 'Tue', carbon: 3.8 },
  { day: 'Wed', carbon: 6.5 },
  { day: 'Thu', carbon: 5.1 },
  { day: 'Fri', carbon: 4.9 },
  { day: 'Sat', carbon: 2.3 },
  { day: 'Sun', carbon: 1.8 },
];

const DATA_CATEGORIES = [
  { name: 'Dairy', value: 45, color: '#10b981' },
  { name: 'Meat', value: 85, color: '#059669' },
  { name: 'Produce', value: 12, color: '#34d399' },
  { name: 'Processed', value: 33, color: '#6ee7b7' },
  { name: 'Drinks', value: 18, color: '#a7f3d0' },
];

const PREV_MONTH = 142.5;
const CURRENT_MONTH = 124.5;
const SAVINGS_PERCENT = Math.round(((PREV_MONTH - CURRENT_MONTH) / PREV_MONTH) * 100);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-900 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-md">
        <p className="text-xs font-bold text-white/50 mb-1 uppercase tracking-widest">{label}</p>
        <p className="text-lg font-display font-bold text-brand-primary">{payload[0].value} <span className="text-xs font-normal text-white/30">kg CO₂</span></p>
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Impact Dashboard</h1>
          <p className="text-white/40 flex items-center gap-2">
            <Calendar className="w-4 h-4" /> May 1st - May 15th, 2026
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 p-2 rounded-lg transition-colors">
            <Filter className="w-5 h-5 text-white/60" />
          </button>
          <button className="bg-brand-primary hover:bg-brand-secondary text-black px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-all">
            <Download className="w-4 h-4" /> Export Report
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: "Total CO₂", value: "124.5", unit: "kg", change: "-12%", positive: true, icon: Leaf },
          { label: "Items Scanned", value: "248", unit: "", change: "+18%", positive: true, icon: Zap },
          { label: "Weekly Goal", value: "85%", unit: "", change: "+5%", positive: true, icon: Target },
          { label: "Avg. Daily", value: "8.3", unit: "kg", change: "+2%", positive: false, icon: TrendingUp },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-zinc-900 border border-white/10 p-6 rounded-[32px] hover:border-brand-primary/20 transition-all group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors">
                <stat.icon className="w-5 h-5 text-white/40 group-hover:text-brand-primary transition-colors" />
              </div>
              <div className={cn(
                "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider",
                stat.positive ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
              )}>
                {stat.change}
              </div>
            </div>
            <div className="text-3xl font-display font-bold text-white mb-1">
              {stat.value}
              <span className="text-sm font-normal text-white/30 ml-1">{stat.unit}</span>
            </div>
            <div className="text-xs text-white/30 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Area Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-zinc-900 border border-white/10 rounded-[40px] p-8 overflow-hidden"
        >
          <div className="flex justify-between items-center mb-8">
             <h3 className="text-xl font-display font-bold">Daily Emission Trend</h3>
             <div className="flex bg-black/40 p-1 rounded-lg">
                {['Day', 'Week', 'Month'].map(t => (
                  <button key={t} className={cn("px-4 py-1 text-[10px] font-bold rounded-md transition-all", t === 'Week' ? "bg-brand-primary text-black" : "text-white/40 hover:text-white")}>{t}</button>
                ))}
             </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={DATA_HISTORY} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCarbon" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 700 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="carbon" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorCarbon)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Category Bar Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-zinc-900 border border-white/10 rounded-[40px] p-8"
        >
          <h3 className="text-xl font-display font-bold mb-8">Top High Carbon Groups</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
               <BarChart data={DATA_CATEGORIES} layout="vertical" margin={{ left: -10, right: 30 }}>
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'white', fontSize: 11, fontWeight: 600 }}
                    width={70}
                  />
                  <Tooltip cursor={{ fill: 'rgba(255,255,255,0.03)' }} content={<CustomTooltip />} />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={20}>
                    {DATA_CATEGORIES.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
               </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Comparisons and Tips */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-1 bg-gradient-to-br from-brand-primary/30 to-zinc-900 rounded-[40px] p-8 border border-brand-primary/20 flex flex-col justify-between">
            <div>
               <div className="bg-black/40 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingDown className="w-6 h-6 text-brand-primary" />
               </div>
               <h3 className="text-3xl font-display font-bold mb-4 italic">You saved {SAVINGS_PERCENT}%</h3>
               <p className="text-white/60 mb-8 text-sm leading-relaxed">
                 Amazing progress! Your carbon footprint this month is {PREV_MONTH - CURRENT_MONTH}kg lower than last month. 
                 That's equivalent to planting <span className="text-white font-bold">2.4 trees</span>.
               </p>
            </div>
            <button className="w-full py-4 bg-white text-black rounded-2xl font-bold transition-all hover:scale-105">
              Share Achievement
            </button>
         </div>

         <div className="lg:col-span-2 bg-zinc-900 border border-white/10 rounded-[40px] p-8">
            <div className="flex justify-between items-center mb-8">
               <h3 className="text-xl font-display font-bold">Recommended Eco-Swaps</h3>
               <button className="text-brand-primary text-xs font-bold flex items-center gap-2">View All <Filter className="w-3 h-3" /></button>
            </div>
            <div className="space-y-4">
               {[
                 { from: "Dairy Milk (Cow)", to: "Oat Milk", savings: "1.2kg", impact: "High" },
                 { from: "Frozen Pizza", to: "Homemade Quiche", savings: "0.8kg", impact: "Medium" },
                 { from: "Atlantic Salmon", to: "Local Trout", savings: "3.4kg", impact: "Very High" },
               ].map((swap, idx) => (
                 <div key={idx} className="flex items-center gap-6 p-4 rounded-3xl group hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/5">
                    <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-black transition-all">
                       <Leaf className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                       <div className="flex items-center gap-3 mb-1">
                          <span className="text-white/30 text-xs line-through">{swap.from}</span>
                          <span className="text-brand-primary text-[10px] font-black uppercase">Swap to</span>
                          <span className="text-white font-bold text-sm tracking-tight">{swap.to}</span>
                       </div>
                       <div className="text-[10px] text-white/20 font-bold uppercase tracking-widest">{swap.impact} Impact • Save {swap.savings} CO₂</div>
                    </div>
                    <div className="p-2 bg-white/5 rounded-full">
                       <Info className="w-4 h-4 text-white/20" />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
