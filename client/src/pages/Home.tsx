import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero3D from '@/components/Hero3D';
import ExperienceCard from '@/components/ExperienceCard';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';
import { Trophy, Globe } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();

  const experienceItems = t('experience.items', { returnObjects: true }) as any[];
  const achievementItems = t('achievements.items', { returnObjects: true }) as any[];
  const internationalItems = t('international.items', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero3D />

        {/* About Section */}
        <section id="about" className="py-24 relative">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">
                {t('about.title')}
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                {t('about.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-black/20">
          <div className="container">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
              <h2 className="text-3xl font-serif font-bold text-white shrink-0">
                {t('experience.title')}
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
            </div>

            <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
              {experienceItems.map((item, index) => (
                <ExperienceCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-24 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />
          
          <div className="container relative z-10">
            <h2 className="text-3xl font-serif font-bold text-white mb-16 text-center">
              {t('achievements.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievementItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 font-serif">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 bg-black/20">
          <div className="container">
            <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">
              {t('stack.title')}
            </h2>
            <TechStack />
          </div>
        </section>

        {/* International Impact Section */}
        <section className="py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/20 to-purple-900/20 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-primary/20 text-primary">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-white">
                    {t('international.title')}
                  </h2>
                </div>
                
                <p className="text-xl text-white/80 mb-8">
                  {t('international.description')}
                </p>

                <div className="grid gap-4">
                  {internationalItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-lg text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
}
