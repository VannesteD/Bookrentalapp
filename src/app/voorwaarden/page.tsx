import Link from "next/link";

export default function TermsPage() {
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
                    Algemene Voorwaarden
                </h1>

                <div className="prose prose-lg max-w-none space-y-8 text-retro-dark/90 font-medium">
                    <section>
                        <h2 className="text-3xl font-black text-retro-dark mb-4">1. Over deze voorwaarden</h2>
                        <p>
                            Deze algemene voorwaarden zijn van toepassing op het gebruik van de Bookrentalapp website en diensten. Door je aan te melden voor updates, ga je akkoord met deze voorwaarden.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-retro-dark mb-4">2. Pre-lancering fase</h2>
                        <p>
                            Bookrentalapp is momenteel in de pre-lancering fase. Door je e-mailadres achter te laten:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Meld je je aan voor updates over de lancering</li>
                            <li>Ga je ermee akkoord dat we je e-mails sturen over Bookrentalapp</li>
                            <li>Begrijp je dat de dienst nog niet beschikbaar is</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-retro-dark mb-4">3. Gebruik van de website</h2>
                        <p>
                            Je gaat ermee akkoord om deze website alleen te gebruiken voor legitieme doeleinden en op een manier die de rechten van anderen niet schaadt.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-retro-dark mb-4">4. Intellectueel eigendom</h2>
                        <p>
                            Alle inhoud op deze website, inclusief teksten, afbeeldingen, logo's en design, is eigendom van Bookrentalapp en beschermd door auteursrecht.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-retro-dark mb-4">5. Aansprakelijkheid</h2>
                        <p>
                            We doen ons best om accurate en actuele informatie te verstrekken, maar we kunnen niet garanderen dat alle informatie op deze website volledig, juist of actueel is.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-retro-dark mb-4">6. Wijzigingen</h2>
                        <p>
                            We behouden ons het recht voor om deze voorwaarden op elk moment te wijzigen. Belangrijke wijzigingen zullen we communiceren via e-mail.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-retro-dark mb-4">7. Toekomstige diensten</h2>
                        <p>
                            Wanneer Bookrentalapp lanceert, zullen aanvullende voorwaarden van toepassing zijn op het huren en verhuren van boeken. Deze zullen beschikbaar worden gemaakt bij de lancering.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-retro-dark mb-4">8. Contact</h2>
                        <p>
                            Heb je vragen over deze voorwaarden? Neem contact met ons op via de <Link href="/contact" className="text-retro-blue hover:underline decoration-4 underline-offset-4 font-bold">contactpagina</Link>.
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
