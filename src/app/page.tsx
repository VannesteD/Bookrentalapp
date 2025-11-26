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
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col justify-center items-center text-center max-w-5xl mx-auto px-6 pt-20 pb-8 w-full">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-retro-dark leading-[0.9] drop-shadow-sm mb-8">
          Huur boeken.<br />
          <span className="text-retro-blue">Bespaar geld.</span><br />
          <span className="text-retro-pink">Lees meer.</span>
        </h1>

        <p className="text-xl md:text-2xl text-retro-dark/80 max-w-2xl leading-relaxed font-bold mb-12">
          Boeken huren of verhuren: goedkoop, lokaal, eenvoudig. Schrijf je in als early-member en huur de eerste week gratis!
        </p>

        <div className="w-full max-w-md bg-white/80 backdrop-blur-sm p-2 rounded-2xl border-4 border-retro-dark shadow-[8px_8px_0px_0px_rgba(45,55,72,1)]">
          <EmailForm />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-12">
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

        {/* Social Proof */}
        <div className="text-center mt-4 mb-20">
          <p className="text-sm font-bold text-retro-dark/70 bg-white/60 inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border-2 border-retro-dark/10">
            🔒 Al 23 lezers schreven zich in voor early access.
          </p>
        </div>
      </section>

      {/* End CTA Section */}
      <section className="relative z-20 py-20 px-6 bg-retro-yellow border-t-4 border-retro-dark text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black text-retro-dark mb-8 tracking-tight leading-tight">
            We gaan binnenkort live.<br />
            <span className="text-retro-pink">Mis de eerste weken niet.</span>
          </h2>
          <div className="w-full max-w-md bg-white/80 backdrop-blur-sm p-2 rounded-2xl border-4 border-retro-dark shadow-[8px_8px_0px_0px_rgba(45,55,72,1)]">
            <EmailForm />
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
