import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import data from "../../data.json";

const experiences = data.experience;

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-5">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.06, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="glass-card rounded-xl p-6 md:p-8"
            data-testid={`row-experience-${i}`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
              <p className="font-display font-bold text-base md:text-lg text-white leading-snug">
                {exp.org}
              </p>
              <span className="text-[11px] font-mono text-white/35 shrink-0 md:pt-1 tracking-wide">
                {exp.dateRange}
              </span>
            </div>

            <p className="text-xs font-mono text-white/30 mb-5 tracking-wide">
              Advisor: {exp.advisor}
            </p>

            <div className="space-y-5">
              {exp.projects.map((project, j) => (
                <div key={j} className={j > 0 ? "pt-5 border-t border-white/[0.05]" : ""}>
                  <p className="font-semibold text-sm text-white/85 mb-3">
                    {project.name}
                  </p>
                  <ul className="space-y-2">
                    {project.bullets.map((bullet, k) => (
                      <li key={k} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="shrink-0 w-1 h-1 rounded-full bg-white/20 mt-2" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
