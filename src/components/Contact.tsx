import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, CONTACT_DETAILS, SOCIAL_LINKS } from '../constants';
import { cn } from '../lib/utils';
import { PremiumButton } from './PremiumButton';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('idle');
    try {
      const formData = {
        ...data,
        access_key: "92c88a70-c8d4-4527-8df2-e5c843cf4cf1",
        subject: `New Contact Form Submission from ${data.name}`,
        from_name: "MC Heating & Plumbing Website",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        reset();
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-gray/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Ready to Start Your <span className="text-gradient hover:glow-text transition-all">Next Project?</span>
            </h3>
            <p className="text-white/50 text-lg mb-12 max-w-lg">
              Have a breakdown? Need a quote for a new boiler? Or just have a quick plumbing question? Reach out to Mitch directly.
            </p>

            <div className="space-y-8 mb-12">
              {CONTACT_DETAILS.map((detail) => (
                <a 
                  key={detail.label}
                  href={detail.href}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:glow-border transition-all">
                    <detail.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{detail.label}</p>
                    <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">{detail.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:glow-border hover:bg-primary/5 transition-all text-white/60 hover:text-primary"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2rem] border-white/5 glow-border relative overflow-hidden"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/70 ml-1">Full Name</label>
                  <input
                    {...register("name")}
                    placeholder="John Doe"
                    className={cn(
                      "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all",
                      errors.name && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50"
                    )}
                  />
                  {errors.name && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest ml-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/70 ml-1">Email Address</label>
                  <input
                    {...register("email")}
                    placeholder="john@example.com"
                    className={cn(
                      "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all",
                      errors.email && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50"
                    )}
                  />
                  {errors.email && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest ml-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/70 ml-1">Phone Number</label>
                  <input
                    {...register("phone")}
                    placeholder="07764 740103"
                    className={cn(
                      "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all",
                      errors.phone && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50"
                    )}
                  />
                  {errors.phone && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest ml-1">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/70 ml-1">Service Required</label>
                  <select
                    {...register("service")}
                    className={cn(
                      "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none",
                      errors.service && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50"
                    )}
                  >
                    <option value="" className="bg-dark text-white">Select a service</option>
                    <option value="boiler-install" className="bg-dark text-white">Boiler Installation</option>
                    <option value="boiler-service" className="bg-dark text-white">Boiler Servicing</option>
                    <option value="central-heating" className="bg-dark text-white">Central Heating</option>
                    <option value="repairs" className="bg-dark text-white">Boiler/Heating Repairs</option>
                    <option value="bathroom" className="bg-dark text-white">Bathroom Refurb</option>
                    <option value="plumbing" className="bg-dark text-white">Plumbing Repair</option>
                  </select>
                  {errors.service && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest ml-1">{errors.service.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/70 ml-1">Your Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className={cn(
                    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none",
                    errors.message && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50"
                  )}
                />
                {errors.message && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest ml-1">{errors.message.message}</p>}
              </div>

              <div className="relative pt-4">
                <AnimatePresence mode="wait">
                  {submitStatus === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 mb-6"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-medium">Message sent successfully! We'll be in touch soon.</p>
                    </motion.div>
                  ) : submitStatus === 'error' ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 mb-6"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-medium">Something went wrong. Please try again or call us.</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <PremiumButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 shadow-[0_0_25px_rgba(255,77,0,0.3)]"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </PremiumButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
