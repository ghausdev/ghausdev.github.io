import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import data from "../../data.json";

const newsItems = data.news;

export function NewsSection() {
  return (
    <Section id="news" title="News">
      <div className="border border-white/20">
        <div className="grid md:grid-cols-3">
          {newsItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              className="p-6 border-b border-white/20 md:border-r md:odd:border-white/20 last:border-b-0 md:[&:nth-last-child(2):nth-child(odd)]:border-b-0"
              data-testid={`card-news-${i}`}
            >
              <span className="inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-white/50 border border-white/15 mb-4">
                {item.date}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
