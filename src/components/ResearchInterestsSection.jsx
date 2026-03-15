import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import data from "../../data.json";

const { mainArea, interests } = data.researchInterests;

export function ResearchInterestsSection() {
  return (
    <Section id="research-interests" title="Research Interests">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <fieldset className="border border-white/20 px-6 pb-6 pt-2 mb-10">
          <legend className="px-2 text-xs font-mono uppercase tracking-widest text-white/50">
            Main Area
          </legend>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {mainArea}
          </p>
        </fieldset>

        <div className="border border-white/20">
          {interests.map((interest, i) => (
            <div
              key={i}
              className="px-6 py-5 border-b border-white/20 last:border-b-0"
              data-testid={`row-interest-${i}`}
            >
              <p className="font-display font-bold text-md md:text-lg text-white mb-2">
                {interest.title}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {interest.desc}
              </p>
              <span className="text-xs font-mono text-white/40">
                {interest.venues}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
