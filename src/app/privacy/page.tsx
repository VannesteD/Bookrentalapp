import Link from "next/link";

export default function PrivacyPage() {
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
                    Privacybeleid
                </h1>

                <div className="prose prose-lg max-w-none space-y-8 text-retro-dark/90 font-medium">
                    <section>
                        <h2 className="text-3xl font-black text-retro-dark mb-4">1. Welke gegevens verzamelen we?</h2>
                        <p>
                            Op dit moment verzamelen we alleen je <strong>e-mailadres</strong> wanneer je je aanmeldt voor updates over de lancering van Bookrentalapp.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-retro-dark mb-4">2. Hoe gebruiken we je gegevens?</h2>
                        <p>We gebruiken je e-mailadres uitsluitend om:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Je op de hoogte te houden van de lancering van Bookrentalapp</li>
                            <li>Je updates te sturen over nieuwe functies en diensten</li>
                            <li>Je te informeren over belangrijke wijzigingen</li>
                        </ul>
                        <p className="mt-4">
                            We zullen je e-mailadres <strong>nooit</strong> verkopen, verhuren of delen met derden voor marketingdoeleinden.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-retro-dark mb-4">3. Hoe bewaren we je gegevens?</h2>
                        <p>
                            Je e-mailadres wordt veilig opgeslagen in onze database (Supabase) met industry-standard beveiligingsmaatregelen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-retro-dark mb-4">4. Je rechten</h2>
                        <p>Je hebt het recht om:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Je gegevens in te zien</li>
                            <li>Je gegevens te laten verwijderen</li>
                            <li>Je op elk moment af te melden voor onze e-mails</li>
                        </ul>
                        <p className="mt-4">
                            Neem contact met ons op via de <Link href="/contact" className="text-retro-blue hover:underline decoration-4 underline-offset-4 font-bold">contactpagina</Link> als je gebruik wilt maken van deze rechten.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-retro-dark mb-4">5. Cookies</h2>
                        <p>
                            We gebruiken alleen essentiële cookies voor analytics (Vercel Analytics) om te begrijpen hoe bezoekers onze website gebruiken. Deze gegevens zijn geanonimiseerd.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-retro-dark mb-4">6. Wijzigingen in dit beleid</h2>
                        <p>
                            We kunnen dit privacybeleid van tijd tot tijd bijwerken. Belangrijke wijzigingen zullen we communiceren via e-mail.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-retro-dark mb-4">7. Contact</h2>
                        <p>
                            Heb je vragen over dit privacybeleid? Neem contact met ons op via de <Link href="/contact" className="text-retro-blue hover:underline decoration-4 underline-offset-4 font-bold">contactpagina</Link>.
                        </p>
                    </section>

                    <p className="text-sm text-retro-dark/60 mt-12">
                        Laatst bijgewerkt: 25 november 2024
                    </p>
                </div>
            </div>
        </main>
    );
}
