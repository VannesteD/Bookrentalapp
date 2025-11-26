import Link from "next/link";
import { EmailForm } from "@/components/EmailForm";
import HeroScene from "@/components/HeroScene";
import { BookOpen, Sparkles, Wallet } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col font-sans text-retro-dark overflow-x-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-retro-cream">
        <HeroScene />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter text-retro-dark">
          Rentabook
        </div>
        <div className="px-4 py-2 bg-retro-dark text-retro-cream rounded-full text-sm font-bold shadow-lg transform hover:scale-105 transition-transform cursor-default">
          Binnenkort beschikbaar
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex-1 flex flex-col justify-center items-center text-center max-w-5xl mx-auto px-6 py-20 w-full">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-retro-dark leading-[0.9] drop-shadow-sm mb-8">
          Geen dure boeken meer,<br />
          <span className="text-retro-blue">huur ze in jouw buurt.</span>
        </h1>

        <p className="text-xl md:text-2xl text-retro-dark/80 max-w-2xl leading-relaxed font-bold mb-12">
          Boeken huren of verhuren: goedkoop, lokaal, eenvoudig. Schrijf je in als early-member en huur de eerste week gratis!
        </p>

        <div className="w-full max-w-md bg-white/80 backdrop-blur-sm p-2 rounded-2xl border-4 border-retro-dark shadow-[8px_8px_0px_0px_rgba(45,55,72,1)]">
          <EmailForm />
        </div>
      </section>

      {/* Wavy Divider */}
      <div className="relative z-20 w-full leading-[0] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-retro-yellow"></path>
        </svg>
      </div>

      {/* Features Section */}
      <section className="relative z-20 bg-retro-yellow border-t-0">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-3xl border-4 border-retro-dark shadow-[8px_8px_0px_0px_rgba(45,55,72,1)] hover:-translate-y-2 transition-transform duration-300">
            <div className="h-16 w-16 rounded-2xl bg-retro-pink text-retro-dark flex items-center justify-center border-4 border-retro-dark mb-6 shadow-[4px_4px_0px_0px_rgba(45,55,72,1)]">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-black text-retro-dark mb-3">Hoe werkt het</h3>
            <p className="text-retro-dark/80 font-bold leading-relaxed">
              1) Upload je boek<br />
              2) Iemand huurt<br />
              3) Jij verdient of huurt goedkoop!
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-3xl border-4 border-retro-dark shadow-[8px_8px_0px_0px_rgba(45,55,72,1)] hover:-translate-y-2 transition-transform duration-300">
            <div className="h-16 w-16 rounded-2xl bg-retro-blue text-retro-dark flex items-center justify-center border-4 border-retro-dark mb-6 shadow-[4px_4px_0px_0px_rgba(45,55,72,1)]">
              <Wallet className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-black text-retro-dark mb-3">Huur Goedkoop!</h3>
            <p className="text-retro-dark/80 font-bold leading-relaxed">
              Verzamel geld met je boeken in plaats van stof. Betaal per boek of neem een abonnement.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-3xl border-4 border-retro-dark shadow-[8px_8px_0px_0px_rgba(45,55,72,1)] hover:-translate-y-2 transition-transform duration-300">
            <div className="h-16 w-16 rounded-2xl bg-retro-green text-retro-dark flex items-center justify-center border-4 border-retro-dark mb-6 shadow-[4px_4px_0px_0px_rgba(45,55,72,1)]">
              <Sparkles className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-black text-retro-dark mb-3">Ervaring</h3>
            <p className="text-retro-dark/80 font-bold leading-relaxed">
              Huur en verhuur veilig en zonder zorgen. Goed voor je portemonnee én het milieu.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 py-12 px-6 bg-retro-yellow border-t-4 border-retro-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-retro-dark font-bold">
          <p>© 2024 Rentabook. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:underline decoration-4 underline-offset-4 decoration-retro-pink">Privacy</Link>
            <Link href="/voorwaarden" className="hover:underline decoration-4 underline-offset-4 decoration-retro-blue">Voorwaarden</Link>
            <Link href="/contact" className="hover:underline decoration-4 underline-offset-4 decoration-retro-green">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
