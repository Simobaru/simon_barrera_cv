import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
}

export default function ExperienceCard({ item, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative p-6 md:p-8 rounded-2xl bg-card/40 backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all duration-300 hover:bg-card/60 hover:shadow-[0_10px_40px_-10px_rgba(47,164,255,0.1)]"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-l-2xl" />
      
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
            {item.role}
          </h3>
          <div className="flex items-center gap-2 text-primary/80 mt-1 font-medium">
            <Briefcase className="w-4 h-4" />
            <span>{item.company}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full w-fit">
          <Calendar className="w-3 h-3" />
          <span>{item.period}</span>
        </div>
      </div>
      
      <p className="text-muted-foreground leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}
