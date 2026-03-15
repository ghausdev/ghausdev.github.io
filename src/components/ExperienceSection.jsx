import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import data from "../../data.json";

const experiences = data.experience;

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="border border-white/20">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="px-6 py-5 border-b border-white/20 last:border-b-0"
              data-testid={`row-experience-${i}`}
            >
              <p className="font-display font-bold text-md md:text-lg text-white mb-1">
                {exp.org}
              </p>
              <span className="text-xs font-mono text-white/40 block mb-3">
                {exp.dateRange} · Advisor: {exp.advisor}
              </span>
              {exp.projects.map((project, j) => (
                <div key={j} className="mb-4 last:mb-0">
                  <p className="font-semibold text-sm text-white/90 mb-2">
                    Project: {project.name}
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground leading-relaxed space-y-1">
                    {project.bullets.map((bullet, k) => (
                      <li key={k}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
