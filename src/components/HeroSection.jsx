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
              className="mb-10"
            >
              <fieldset className="border border-white/20 px-7 pb-6 pt-2 text-left rounded-md">
                <legend className="px-3 text-xs font-mono uppercase tracking-widest text-white/50">
                  Education
                </legend>
                <p className="font-display font-bold text-xl md:text-2xl text-white mt-1">{edu.degree}</p>
                <p className="text-base text-muted-foreground mt-2">{edu.university}</p>
                <p className="text-sm text-muted-foreground">{edu.location}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3">
                  <span className="text-sm text-white/70 font-mono">{edu.period}</span>
                  <span className="text-sm font-semibold text-white">CGPA: {edu.cgpa}</span>
                </div>
                <p className="text-sm text-white/50 mt-3 leading-relaxed">{edu.honors.join(" · ")}</p>
                <p className="text-sm text-white/50 leading-relaxed">{edu.medals}</p>
              </fieldset>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-2 justify-center md:justify-start"
            >
              {hero.researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 border border-white/25 rounded-full text-sm font-mono text-white/80 bg-white/5"
                >
                  {interest}
                </span>
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
