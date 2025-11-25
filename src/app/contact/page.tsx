import Link from "next/link";
import { Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-retro-cream text-retro-dark">
            {/* Navigation */}
            <nav className="w-full px-6 py-6 flex justify-between items-center max-w-4xl mx-auto border-b-4 border-retro-dark">
                <Link href="/" className="text-2xl font-black tracking-tighter text-retro-dark hover:text-retro-blue transition-colors">
                    ← Bookrentalapp
                </Link>
            </nav>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-5xl md:text-6xl font-black text-retro-dark mb-8">
                    Contact
                </h1>

                <div className="space-y-8">
                    <section className="bg-white p-8 rounded-3xl border-4 border-retro-dark shadow-[8px_8px_0px_0px_rgba(45,55,72,1)]">
                        <h2 className="text-3xl font-black text-retro-dark mb-4">Neem contact met ons op</h2>
                        <p className="text-retro-dark/80 font-bold leading-relaxed mb-6">
                            We horen graag van je! Of je nu vragen hebt, feedback wilt geven, of gewoon meer wilt weten over Bookrentalapp, aarzel niet om contact op te nemen.
                        </p>

                        <div className="flex items-center gap-4 p-6 bg-retro-yellow rounded-2xl border-4 border-retro-dark">
                            <div className="h-12 w-12 rounded-xl bg-retro-blue text-white flex items-center justify-center border-4 border-retro-dark">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-retro-dark/60 mb-1">E-mail ons op:</p>
                                <a
                                    href="mailto:info@bookrentalapp.com"
                                    className="text-xl font-black text-retro-dark hover:text-retro-blue transition-colors"
                                >
                                    info@bookrentalapp.com
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border-4 border-retro-dark shadow-[8px_8px_0px_0px_rgba(45,55,72,1)]">
                        <h2 className="text-3xl font-black text-retro-dark mb-4">Veelgestelde vragen</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-black text-retro-dark mb-2">Wanneer lanceert Bookrentalapp?</h3>
                                <p className="text-retro-dark/80 font-bold leading-relaxed">
                                    We zijn hard aan het werk om Bookrentalapp voor je klaar te maken. Meld je aan voor updates om als eerste te horen wanneer we lanceren!
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-black text-retro-dark mb-2">Hoe werkt het huren van boeken?</h3>
                                <p className="text-retro-dark/80 font-bold leading-relaxed">
                                    Meer details over ons huurproces delen we bij de lancering. Blijf op de hoogte door je aan te melden voor onze nieuwsbrief.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-black text-retro-dark mb-2">Kan ik ook mijn eigen boeken verhuren?</h3>
                                <p className="text-retro-dark/80 font-bold leading-relaxed">
                                    Ja! Bookrentalapp maakt het mogelijk om zowel boeken te huren als te verhuren. Zo kun je geld verdienen met boeken die je toch niet meer leest.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-black text-retro-dark mb-2">Hoe kan ik mijn gegevens laten verwijderen?</h3>
                                <p className="text-retro-dark/80 font-bold leading-relaxed">
                                    Stuur ons een e-mail op <a href="mailto:info@bookrentalapp.com" className="text-retro-blue hover:underline decoration-4 underline-offset-4">info@bookrentalapp.com</a> en we verwijderen je gegevens binnen 48 uur.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-retro-pink/20 p-8 rounded-3xl border-4 border-retro-dark">
                        <h2 className="text-3xl font-black text-retro-dark mb-4">Nog niet aangemeld?</h2>
                        <p className="text-retro-dark/80 font-bold leading-relaxed mb-6">
                            Meld je aan voor updates en wees de eerste die hoort wanneer Bookrentalapp lanceert!
                        </p>
                        <Link
                            href="/"
                            className="inline-block px-8 py-4 bg-retro-dark text-retro-cream rounded-full text-lg font-black shadow-[4px_4px_0px_0px_rgba(45,55,72,0.3)] hover:-translate-y-1 transition-transform"
                        >
                            Naar de homepage →
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
