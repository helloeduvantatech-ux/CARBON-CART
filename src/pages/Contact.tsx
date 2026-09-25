import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Send, Twitter, Github, Linkedin, Leaf } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary text-xs font-bold mb-6">
            <MessageSquare className="w-3 h-3" />
            <span>Connect with Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
            Let's make the planet <br />
            <span className="text-brand-primary italic">greener</span> together.
          </h1>
          <p className="text-white/50 text-lg mb-12 leading-relaxed max-w-lg">
            Have questions about our calculation methodology? Interested in enterprise API access? Or just want to say hi? We'd love to hear from you.
          </p>

          <div className="space-y-8 mb-12">
            {[
              { icon: Mail, label: "Email", value: "hello@carboncart.eco" },
              { icon: MapPin, label: "Location", value: "Sustainability Hub, Oslo, Norway" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-center">
                <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center">
                   <item.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <div className="text-xs text-white/30 font-bold uppercase tracking-widest mb-0.5">{item.label}</div>
                  <div className="text-lg font-display font-medium">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
             {[Twitter, Github, Linkedin].map((Icon, idx) => (
               <button key={idx} className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:border-brand-primary/50 transition-all text-white/50 hover:text-brand-primary">
                  <Icon className="w-5 h-5" />
               </button>
             ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900 border border-white/10 rounded-[40px] p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8">
             <Leaf className="w-32 h-32 text-brand-primary/5 -rotate-12" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-display font-bold mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-sm outline-none focus:border-brand-primary transition-colors"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-sm outline-none focus:border-brand-primary transition-colors"
                    />
                 </div>
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Inquiry Type</label>
                  <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-sm outline-none focus:border-brand-primary transition-colors appearance-none">
                     <option>General Inquiry</option>
                     <option>Technical Support</option>
                     <option>Media & PR</option>
                     <option>Partnerships</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="How can we help?" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-sm outline-none focus:border-brand-primary transition-colors resize-none"
                  ></textarea>
               </div>
               <button className="w-full bg-brand-primary hover:bg-brand-secondary text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-brand-primary/10">
                  <Send className="w-5 h-5" />
                  Send Message
               </button>
               <p className="text-[10px] text-center text-white/30 uppercase tracking-widest">Typically responds within 24 hours</p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
