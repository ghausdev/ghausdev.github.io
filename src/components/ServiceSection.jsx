import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import data from "../../data.json";

const { roles, teaching, awards } = data.service;

const ease = [0.25, 0.1, 0.25, 1];

export function ServiceSection() {
  return (
    <Section id="service" title="Service & Leadership">
      <div className="space-y-8">

        <motion.div
          className="surface-elevated rounded-xl p-6 md:p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/35 mb-6">
            Leadership Roles
          </p>
          <div className="space-y-5">
            {roles.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4, ease }}
              >
                <p className="font-display font-bold text-sm text-white">{item.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.org} · {item.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="surface-elevated rounded-xl p-6 md:p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.08, ease }}
        >
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/35 mb-6">
            Teaching Assistant & Lab Demonstrator
          </p>
          <div className="flex flex-wrap gap-3">
            {teaching.map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3, ease }}
                className="px-4 py-2.5 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 text-sm"
              >
                <span className="font-display font-semibold text-white tracking-wide">
                  {item.course}
                </span>
                <span className="text-white/20 mx-2">/</span>
                <span className="font-mono text-[11px] text-white/35">
                  {item.semester} · {item.advisor}
                </span>
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="surface-elevated rounded-xl p-6 md:p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.16, ease }}
        >
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/35 mb-6">
            Honors & Awards
          </p>
          <div className="space-y-3">
            {awards.map((award, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
                <span className="text-yellow-400/60 mt-0.5 shrink-0">★</span>
                <span>{award}</span>
              </p>
            ))}
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
