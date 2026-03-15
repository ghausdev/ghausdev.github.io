import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import data from "../../data.json";

const newsItems = data.news;

export function NewsSection() {
  return (
    <Section id="news" title="News">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.03, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="glass-card rounded-xl p-5"
            data-testid={`card-news-${i}`}
          >
            <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest text-white/40 bg-white/[0.04] border border-white/[0.06] mb-4">
              {item.date}
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
