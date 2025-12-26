import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Cpu, Code, Zap, Monitor } from 'lucide-react';

const icons = {
  engineering: Cpu,
  programming: Code,
  electronics: Zap,
  dev: Monitor
};

export default function TechStack() {
  const { t } = useTranslation();
  
  // Get categories from translation
  const categories = t('stack.categories', { returnObjects: true }) as Record<string, string>;
  const items = t('stack.items', { returnObjects: true }) as Record<string, string[]>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Object.entries(categories).map(([key, title], index) => {
        const Icon = icons[key as keyof typeof icons] || Monitor;
        const skills = items[key as keyof typeof items] || [];

        return (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            
            <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
            
            <ul className="space-y-2">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}
