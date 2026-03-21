import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import data from "../../data.json";

const contact = data.contact;
const ease = [0.25, 0.1, 0.25, 1];

const contactItems = [
  contact.email && {
    icon: Mail,
    label: contact.email,
    href: `mailto:${contact.email}`,
    testId: "link-email",
  },
  contact.phone && {
    icon: Phone,
    label: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: contact.location,
  },
].filter(Boolean);

export function ContactSection() {
  return (
    <Section id="contact" title="Get in Touch">
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-lg text-muted-foreground leading-relaxed mb-10"
        >
          {contact.message}
        </motion.p>

        <div className="space-y-3">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4, ease }}
                className="flex items-center gap-4 px-5 py-4 rounded-xl text-muted-foreground hover:text-white bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] group-hover:bg-white/[0.08] flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-[18px] h-[18px]" />
                </div>
                <span className="font-mono text-sm">{item.label}</span>
              </motion.div>
            );

            return item.href ? (
              <a key={i} href={item.href} aria-label={item.label} data-testid={item.testId}>
                {content}
              </a>
            ) : (
              content
            );
          })}
        </div>
      </div>
    </Section>
  );
}
