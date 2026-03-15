import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import data from "../../data.json";

const hero = data.hero;

const iconMap = {
  "mail": Mail,
  "github": SiGithub,
  "linkedin": FaLinkedinIn,
};

export function HeroSection() {
  const edu = hero.education;

  return (
    <section
      id="about"
      className="pt-32 pb-32 flex items-center justify-center min-h-[90vh]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center md:items-start">

          <div className="text-center md:text-left w-full max-w-3xl">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-xl md:text-3xl italic text-muted-foreground leading-relaxed max-w-2xl mb-10">
                {hero.affiliation.text}{" "}
                <a
                  href={hero.affiliation.lab.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {hero.affiliation.lab.name}
                </a>
                {hero.affiliation.advisors.length > 0 && (
                  <>
                    {" "}currently interning with{" "}
                    {hero.affiliation.advisors.map((advisor, i) => (
                      <span key={advisor.name}>
                        {i > 0 && " and "}
                        <a
                          href={advisor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/80 hover:text-white transition-colors"
                        >
                          {advisor.name}
                        </a>
                      </span>
                    ))}
                  </>
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold font-mono tracking-tight mb-6 text-white lowercase">
                {hero.name}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mb-8"
            >
              <fieldset className="border border-white/20 px-5 pb-4 pt-1 text-left">
                <legend className="px-2 text-[10px] font-mono uppercase tracking-widest text-white/50">
                  Education
                </legend>
                <p className="font-display font-bold text-sm text-white">{edu.degree}</p>
                <p className="text-xs text-muted-foreground">{edu.university} — {edu.location}</p>
                <p className="text-xs text-muted-foreground">{edu.period} · CGPA: {edu.cgpa}</p>
                <p className="text-xs text-white/50 mt-1">{edu.honors.join(" · ")} · {edu.medals}</p>
              </fieldset>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4"
            >
              {hero.bio.map((paragraph, i) => (
                <p key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-2 justify-center md:justify-start"
            >
              {[...hero.skills.languages, ...hero.skills.libraries, ...hero.skills.tools].map((skill) => (
                <span key={skill} className="px-3 py-1 border border-white/15 text-[11px] font-mono text-white/50">
                  {skill}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-10"
              data-no-custom-cursor
            >
              {hero.socials.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.icon}
                    href={social.url}
                    target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    title={social.label}
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
