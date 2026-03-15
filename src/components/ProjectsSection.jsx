import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import data from "../../data.json";

const projects = data.projects;

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="group border border-white/20 bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-6"
            data-testid={`card-project-${i}`}
          >
            <h3 className="font-display font-bold text-sm md:text-base text-white mb-3 leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 border border-white/15 text-[10px] font-mono text-white/40 uppercase tracking-wider"
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
