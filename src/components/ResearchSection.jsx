import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { useState } from "react";
import data from "../../data.json";

const papers = data.publications;

function PaperCard({ paper, index, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="glass-card rounded-xl overflow-hidden group"
      data-testid={`card-paper-${index}`}
    >
      <div className={`${featured ? "h-36" : "h-28"} bg-gradient-to-br from-white/[0.02] to-white/[0.06] flex items-center justify-center px-6 border-b border-white/[0.06]`}>
        <div className="text-center">
          <span className="font-mono text-xs text-white/30 uppercase tracking-widest">
            {paper.venue} {paper.year}
          </span>
          {paper.status && (
            <span className="block text-[10px] text-yellow-400/50 mt-1.5 font-mono">
              {paper.status}
            </span>
          )}
        </div>
      </div>
      <div className="p-6 md:p-7">
        <h3 className={`font-display font-bold ${featured ? "text-base md:text-lg" : "text-sm md:text-base"} tracking-wide text-white mb-3 leading-snug`}>
          {paper.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-5 font-sans leading-relaxed">
          {paper.authors}
        </p>
        <div className="flex flex-wrap gap-3">
          {paper.links.map((link, j) => (
            <a
              key={j}
              href="#"
              className="text-xs text-white/40 hover:text-white transition-colors duration-300 font-mono underline underline-offset-4 decoration-white/15 hover:decoration-white/40"
              data-testid={`link-paper-${index}-${link}`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ResearchSection() {
  const [expanded, setExpanded] = useState(false);
  const visibleExtra = expanded ? papers.slice(2) : papers.slice(2, 8);

  return (
    <Section id="research" title="Selected Publications">
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        {papers.slice(0, 2).map((paper, i) => (
          <PaperCard key={i} paper={paper} index={i} featured />
        ))}
      </div>
      {visibleExtra.length > 0 && (
        <div className="grid md:grid-cols-3 gap-5">
          {visibleExtra.map((paper, i) => (
            <PaperCard key={i + 2} paper={paper} index={i + 2} />
          ))}
        </div>
      )}
      {papers.length > 8 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label={expanded ? "Show fewer publications" : "Show more publications"}
            className="px-8 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-sm font-mono text-white/50 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.18] transition-all duration-300 tracking-wider uppercase"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </Section>
  );
}
