import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import data from "../../data.json";

const { roles, teaching, awards } = data.service;

export function ServiceSection() {
  return (
    <Section id="service" title="Service & Leadership" className="bg-white/[0.02]">
      <div className="space-y-8">

        <motion.fieldset
          className="border border-white/20 px-6 pb-6 pt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <legend className="px-2 text-xs font-mono uppercase tracking-widest text-white/50">
            Leadership Roles
          </legend>
          <div className="space-y-4">
            {roles.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <p className="font-display font-bold text-sm text-white">{item.role}</p>
                <p className="text-xs text-muted-foreground">{item.org} · {item.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.fieldset>

        <motion.fieldset
          className="border border-white/20 px-6 pb-6 pt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <legend className="px-2 text-xs font-mono uppercase tracking-widest text-white/50">
            Teaching Assistant & Lab Demonstrator
          </legend>
          <div className="flex flex-wrap gap-3">
            {teaching.map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="px-4 py-2 border border-white/15 text-sm"
              >
                <span className="font-display font-semibold text-white tracking-wide">
                  {item.course}
                </span>
                <span className="text-white/30 mx-1.5">/</span>
                <span className="font-mono text-[11px] text-white/40">
                  {item.semester} · {item.advisor}
                </span>
              </motion.span>
            ))}
          </div>
        </motion.fieldset>

        <motion.fieldset
          className="border border-white/20 px-6 pb-6 pt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <legend className="px-2 text-xs font-mono uppercase tracking-widest text-white/50">
            Honors & Awards
          </legend>
          <div className="space-y-2">
            {awards.map((award, i) => (
              <p key={i} className="text-sm text-muted-foreground">
                <span className="text-yellow-400/70 mr-2">★</span>
                {award}
              </p>
            ))}
          </div>
        </motion.fieldset>

      </div>
    </Section>
  );
}
