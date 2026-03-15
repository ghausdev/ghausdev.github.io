import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { useState } from "react";
import data from "../../data.json";

const papers = data.publications;

function PaperCard({ paper, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group border border-white/20 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
      data-testid={`card-paper-${index}`}
    >
      <div className="h-32 bg-gradient-to-br from-white/[0.03] to-white/[0.08] border-b border-white/20 flex items-center justify-center px-6">
        <span className="font-mono text-xs text-white/30 uppercase tracking-widest text-center">
          {paper.venue} {paper.year}
          {paper.status && (
            <span className="block text-[10px] text-yellow-400/60 mt-1">
              {paper.status}
            </span>
          )}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-sm md:text-base tracking-wide text-white mb-3 leading-snug">
          {paper.title}
        </h3>
        <p className="text-xs text-muted-foreground  mb-4 font-sans">
          {paper.authors}
        </p>
        <div className="flex flex-wrap gap-3">
          {paper.links.map((link, j) => (
            <a
              key={j}
              href="#"
              className="text-xs text-white/50 hover:text-white transition-colors font-mono underline underline-offset-4 decoration-white/20 hover:decoration-white/50"
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
    <Section id="research" title="Selected Publications" className="bg-white/[0.02]">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {papers.slice(0, 2).map((paper, i) => (
          <PaperCard key={i} paper={paper} index={i} />
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {visibleExtra.map((paper, i) => (
          <PaperCard key={i + 2} paper={paper} index={i + 2} />
        ))}
      </div>
      {papers.length > 8 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-8 py-3 border border-white/15 text-sm font-mono text-white/60 hover:text-white hover:border-white/30 transition-colors tracking-wider uppercase"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </Section>
  );
}
