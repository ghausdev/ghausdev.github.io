import { Section } from "@/components/Section";
import { Mail, MapPin, Phone } from "lucide-react";
import data from "../../data.json";

const contact = data.contact;

export function ContactSection() {
  return (
    <Section id="contact" title="Get in Touch">
      <div className="max-w-2xl">
        <p className="text-lg text-muted-foreground mb-8">
          {contact.message}
        </p>

        <div className="space-y-4">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors"
            data-testid="link-email"
          >
            <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/20">
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-mono text-sm">{contact.email}</span>
          </a>
          {contact.phone && (
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors"
            >
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/20">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-mono text-sm">{contact.phone}</span>
            </a>
          )}
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/20">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="font-mono text-sm">{contact.location}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
