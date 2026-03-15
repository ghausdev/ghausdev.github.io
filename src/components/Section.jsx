import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Section({ id, title, children, className }) {
  return (
    <section id={id} className={cn("py-28 md:py-36 section-divider last:border-0", className)}>
      <div className="max-w-5xl mx-auto px-6">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-16"
          >
            <div className="flex items-center gap-5">
              <span className="w-10 h-[1px] bg-gradient-to-r from-white/50 to-transparent block" />
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                {title}
              </h2>
            </div>
          </motion.div>
        )}
        <div className="space-y-14">
          {children}
        </div>
      </div>
    </section>
  );
}
