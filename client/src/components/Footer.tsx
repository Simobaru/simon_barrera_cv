import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#05101A] border-t border-white/10 pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              {t('contact.cta')}
            </h2>
            <p className="text-muted-foreground max-w-md mb-8">
              {t('about.description')}
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white/10 hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white/10 hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white/10 hover:text-primary">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Email</h3>
                <a href={`mailto:${t('contact.email')}`} className="text-lg text-white hover:text-primary transition-colors">
                  {t('contact.email')}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Phone</h3>
                <p className="text-lg text-white">
                  {t('contact.phone')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Location</h3>
                <p className="text-lg text-white">
                  {t('contact.location')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground/50">
          <p>© {new Date().getFullYear()} Simón Barrera Ruíz. All rights reserved.</p>
          <p>Designed & Engineered with React + Three.js</p>
        </div>
      </div>
    </footer>
  );
}
