import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import data from "../../data.json";

const projects = data.projects;

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="glass-card rounded-xl p-6 md:p-7 flex flex-col"
            data-testid={`card-project-${i}`}
          >
            <h3 className="font-display font-bold text-base text-white mb-3 leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md border border-white/[0.08] text-[10px] font-mono text-white/35 uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
