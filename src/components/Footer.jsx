import data from "../../data.json";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 text-center text-sm text-muted-foreground font-mono">
      <p>&copy; {data.footer.copyright}</p>
    </footer>
  );
}
