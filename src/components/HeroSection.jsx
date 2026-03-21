import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import data from "../../data.json";

const hero = data.hero;

const iconMap = {
  mail: Mail,
  github: SiGithub,
  linkedin: FaLinkedinIn,
};

const ease = [0.25, 0.1, 0.25, 1];

function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  const edu = hero.education;

  return (
    <section
      id="about"
      className="pt-36 pb-36 flex items-center justify-center min-h-[92vh]"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="text-center md:text-left w-full md:flex-1">

            <FadeUp delay={0.1}>
              <p className="text-lg md:text-2xl italic text-muted-foreground leading-relaxed max-w-2xl mb-8">
                {hero.affiliation.text}{" "}
                <a
                  href={hero.affiliation.lab.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  {hero.affiliation.lab.name}
                </a>
              </p>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-10 text-white lowercase">
                {hero.name}
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="surface-elevated rounded-xl p-6 md:p-8 mb-10 text-left">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
                  Education
                </p>
                <p className="font-display font-bold text-xl md:text-2xl text-white leading-tight">
                  {edu.degree}
                </p>
                <p className="text-base text-muted-foreground mt-3">
                  {edu.university}
                </p>
                <p className="text-sm text-muted-foreground">
                  {edu.location}
                </p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5 pt-5 border-t border-white/[0.06]">
                  <span className="text-sm text-white/60 font-mono">
                    {edu.period}
                  </span>
                  <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-sm font-semibold text-white">
                    CGPA: {edu.cgpa}
                  </span>
                </div>
                <p className="text-sm text-white/40 mt-4 leading-relaxed">
                  {edu.honors.join(" · ")}
                </p>
                <p className="text-sm text-white/40 leading-relaxed">
                  {edu.medals}
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start">
                {hero.researchInterests.map((interest, i) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 + i * 0.06, duration: 0.5, ease }}
                    className="px-5 py-2.5 rounded-full text-sm font-mono text-white/80 bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.08] hover:border-white/[0.18] transition-all duration-300"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.38}>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-12">
                {[...hero.skills.languages, ...hero.skills.libraries, ...hero.skills.tools].map((skill, i) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md border border-white/[0.08] text-[11px] font-mono text-white/40 hover:text-white/60 hover:border-white/[0.15] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.44}>
              <div
                className="flex flex-wrap items-center justify-center md:justify-start gap-5"
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
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] border border-transparent hover:border-white/[0.1] transition-all duration-300"
                    >
                      <Icon className="w-[18px] h-[18px]" />
                    </a>
                  );
                })}
              </div>
            </FadeUp>

          </div>

          {hero.cvUrl && (
            <FadeUp delay={0.5} className="hidden md:flex w-52 shrink-0 self-center">
              <a
                href={hero.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Research CV"
                aria-label="Research CV"
                className="group flex flex-col items-center justify-center gap-4 w-full aspect-square rounded-2xl surface-elevated border border-white/[0.08] hover:border-white/[0.2] transition-all duration-500 hover:scale-[1.03]"
                data-no-custom-cursor
              >
                <FileText className="w-10 h-10 text-white/30 group-hover:text-white/80 transition-colors duration-300" />
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 group-hover:text-white/80 transition-colors duration-300">
                  Research CV
                </span>
                <span className="text-[10px] font-mono text-white/20 group-hover:text-white/50 transition-colors duration-300">
                  View PDF
                </span>
              </a>
            </FadeUp>
          )}
        </div>

        {hero.cvUrl && (
          <FadeUp delay={0.5} className="md:hidden mt-8 flex justify-center">
            <a
              href={hero.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Research CV"
              aria-label="Research CV"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl surface-elevated border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
              data-no-custom-cursor
            >
              <FileText className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors duration-300" />
              <span className="text-xs font-mono uppercase tracking-[0.15em] text-white/50 group-hover:text-white/80 transition-colors duration-300">
                Research CV
              </span>
            </a>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
