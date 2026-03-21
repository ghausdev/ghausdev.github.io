import data from "../../data.json";

export function Footer() {
  return (
    <footer className="py-12 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-10" />
        <p className="text-sm text-white/50 font-mono tracking-wide">
          &copy; {data.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
