import React, { useState, useRef } from 'react';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  Factory, 
  Clock, 
  ShieldCheck,
  QrCode,
  Briefcase
} from 'lucide-react';

// Product descriptions and metadata
interface Product {
  id: string;
  name: string;
  subTitle: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
}

export default function App() {
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Accordion state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Reference to scroll to final contact section
  const contactRef = useRef<HTMLDivElement>(null);

  // Products List
  const products: Product[] = [
    {
      id: 'huile-brute',
      name: 'HUILE BRUTE',
      subTitle: 'Approvisionnement industriel et raffinage',
      description: 'Matière de premier choix destinée aux applications industrielles et aux processus de raffinage. Notre circuit logistique rigoureux assure une régularité de livraison pour soutenir vos cadences de production.',
      points: [
        'Destiné uniquement aux usages professionnels',
        'Suivi de la régularité des approvisionnements',
        'Logistique adaptée aux volumes industriels',
        'Qualité conforme aux exigences réglementaires'
      ],
      image: '/src/assets/images/huile_brute_1791033931936.jpg',
      imageAlt: 'Huile brute industrielle stockée dans un contenant professionnel haut de gamme'
    },
    {
      id: 'huile-acide',
      name: 'HUILE ACIDE',
      subTitle: 'Formulations techniques et savonnerie',
      description: 'Idéale pour les unités de savonnerie, de formulation chimique ou de fabrication de dérivés industriels. Un produit de négoce brut sélectionné pour sa rentabilité technique et sa compatibilité industrielle.',
      points: [
        'Produit brut de qualité constante',
        'Idéal pour les savonneries régionales',
        'Négoce et transport sécurisé',
        'Volume ajustable selon les contrats'
      ],
      image: '/src/assets/images/huile_acide_1791033946357.jpg',
      imageAlt: 'Huile acide industrielle de qualité supérieure dans un contenant en verre de laboratoire'
    },
    {
      id: 'melasse-de-sucre',
      name: 'MÉLASSE DE SUCRE',
      subTitle: 'Coproduit sucrier à haute viscosité',
      description: 'Sous-produit noble issu du raffinage du sucre, particulièrement recherché par les fabricants d\'aliments pour bétail, les unités de fermentation ou les applications biotechnologiques.',
      points: [
        'Haute teneur en matières sèches et sucres',
        'Origine industrielle contrôlée',
        'Excellent pouvoir liant et appétant',
        'Stockage et livraison en citerne adaptés'
      ],
      image: '/src/assets/images/melasse_sucre_1791033960474.jpg',
      imageAlt: 'Mélasse de sucre visqueuse et dorée s\'écoulant avec une texture riche'
    }
  ];

  // FAQ Items
  const faqs = [
    {
      question: 'Comment demander des informations sur un produit ?',
      answer: 'Vous pouvez utiliser notre formulaire en ligne ou appeler directement Mohamed au 0552 27 28 44 ou au 0697 30 33 96. Nous étudions votre demande sous 24 heures ouvrées pour vous proposer les conditions les plus adaptées.'
    },
    {
      question: 'Comment obtenir les conditions commerciales ?',
      answer: 'Les tarifs, modalités de paiement et de livraison sont discutés au cas par cas. Ils dépendent du produit choisi, du volume requis et du caractère ponctuel ou récurrent de votre commande.'
    },
    {
      question: 'Comment vérifier la disponibilité d\'un produit ?',
      answer: 'Nos stocks de matières premières évoluent rapidement selon les arrivages au port de Bejaia et les contrats B2B en cours. Un simple appel téléphonique vous permettra d\'obtenir une confirmation immédiate sur l\'état des volumes disponibles.'
    },
    {
      question: 'Comment passer une commande ?',
      answer: 'Une fois les conditions convenues (fiche commerciale, prix et logistique), la transaction est formalisée d\'entreprise à entreprise (B2B) avec l\'établissement d\'un contrat commercial rigoureux.'
    },
    {
      question: 'Quels types de professionnels pouvez-vous accompagner ?',
      answer: 'Nous accompagnons les fabricants industriels, les savonneries, les raffineries, les unités de nutrition animale, les grossistes et distributeurs de matières brutes à travers tout le territoire national depuis Bejaia.'
    }
  ];

  // Handler to scroll to contact direct area
  const handleProductInquiry = () => {
    scrollToContact();
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProducts = () => {
    document.getElementById('produits')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#080d09] text-[#f7f5f0] flex flex-col font-sans selection:bg-[#c4a46a] selection:text-[#080d09] overflow-x-hidden">
      
      {/* 1. TOP BAR CONTRACT (Optimized Header height on mobile) */}
      <header className="sticky top-0 z-50 bg-[#080d09]/95 backdrop-blur-md border-b border-[#1c291d] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          
          {/* Zone 1: Single text wordmark branding (Text size auto-scales on tiny viewports) */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-sm xs:text-base md:text-lg font-bold tracking-wider text-[#f7f5f0] group-hover:text-[#c4a46a] transition-colors whitespace-nowrap">
              BEJAIA MATIÈRES PREMIÈRES
            </span>
          </a>

          {/* Zone 2: Navigation Links (Remains hidden on mobile) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-[#a3b2a4]">
            <a href="#accueil" className="hover:text-[#c4a46a] transition-colors py-2">Accueil</a>
            <a href="#produits" className="hover:text-[#c4a46a] transition-colors py-2">Nos produits</a>
            <a href="#secteurs" className="hover:text-[#c4a46a] transition-colors py-2">Secteurs</a>
            <a href="#pourquoi-nous" className="hover:text-[#c4a46a] transition-colors py-2">Pourquoi nous</a>
            <a href="#faq" className="hover:text-[#c4a46a] transition-colors py-2">FAQ</a>
            <a href="#contact" className="hover:text-[#c4a46a] transition-colors py-2">Contact</a>
          </nav>

          {/* Zone 3: Primary Actions (Remains hidden on mobile to avoid cockpit clutter) */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href="tel:+213552272844" 
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c4a46a] hover:text-white transition-colors py-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>0552 27 28 44</span>
            </a>
            <button 
              onClick={scrollToContact} 
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-widest bg-[#c4a46a] hover:bg-[#b09058] text-[#080d09] transition-all duration-200"
            >
              Nous Contacter
            </button>
          </div>

          {/* Mobile hamburger menu toggle (Tappable target expanded for WCAG compliance >= 44px) */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 -mr-2 text-[#a3b2a4] hover:text-[#c4a46a] focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a120c] border-b border-[#1c291d] px-4 pt-2 pb-6 space-y-2.5">
            <a 
              href="#accueil" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm sm:text-base font-medium text-[#f7f5f0] hover:text-[#c4a46a]"
            >
              Accueil
            </a>
            <a 
              href="#produits" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm sm:text-base font-medium text-[#f7f5f0] hover:text-[#c4a46a]"
            >
              Nos produits
            </a>
            <a 
              href="#secteurs" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm sm:text-base font-medium text-[#f7f5f0] hover:text-[#c4a46a]"
            >
              Secteurs
            </a>
            <a 
              href="#pourquoi-nous" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm sm:text-base font-medium text-[#f7f5f0] hover:text-[#c4a46a]"
            >
              Pourquoi nous
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm sm:text-base font-medium text-[#f7f5f0] hover:text-[#c4a46a]"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm sm:text-base font-medium text-[#f7f5f0] hover:text-[#c4a46a]"
            >
              Contact
            </a>
            <div className="pt-4 border-t border-[#1c291d] flex flex-col gap-3">
              <div className="flex items-center gap-2 px-3 text-[#c4a46a]">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="text-sm font-bold">Mohamed : 0552 27 28 44</span>
              </div>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToContact();
                }}
                className="w-full text-center px-4 py-3.5 text-xs font-bold uppercase tracking-widest bg-[#c4a46a] text-[#080d09] min-h-[44px]"
              >
                Nous Contacter
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. SECTION 1 — HERO / FIRST IMPRESSION (Optimized spacing & responsive sizes) */}
      <section id="accueil" className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden pt-8 pb-14 xs:pb-16 sm:py-20 lg:py-20 border-b border-[#1c291d]">
        <div className="absolute inset-0 bg-[#080d09]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#080d09] via-[#080d09]/90 to-transparent z-10" />
          <img 
            src="/src/assets/images/hero_raw_materials_1791033916812.jpg" 
            alt="Approvisionnement logistique de matières premières industrielles et commerciales à Bejaia Algérie" 
            className="w-full h-full object-cover opacity-35 object-center scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
          <div className="max-w-3xl">
            
            {/* Trust Line & QR Indicator (Clean text without static pills) */}
            <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1 mb-5 sm:mb-6 text-[#c4a46a] text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
              <span>Qualité</span>
              <span className="text-[#3b4f3d] font-normal">·</span>
              <span>Fiabilité</span>
              <span className="text-[#3b4f3d] font-normal">·</span>
              <span>Partenariat durable</span>
              <span className="text-[#3b4f3d] font-normal hidden sm:inline">·</span>
              <span className="text-[#a3b2a4] normal-case tracking-normal hidden xs:inline-flex items-center gap-1">
                <QrCode className="w-3.5 h-3.5 shrink-0" /> Accès direct via QR Code
              </span>
            </div>

            {/* H1 Heading using viewport sizing clamp rules to prevent overlapping and orphans */}
            <h1 className="text-[25px] xs:text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f7f5f0] mb-5 sm:mb-6 leading-[1.2] max-w-2xl text-wrap-balance">
              Vente & Distribution de matières premières pour les professionnels
            </h1>
            
            {/* Description clamped on mobile to maintain page height rhythm */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#a3b2a4] mb-8 sm:mb-10 max-w-2xl leading-relaxed">
              Des solutions d’approvisionnement pensées pour les besoins des fabricants, usines et acteurs professionnels à Bejaia et sur toute l’Algérie.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8 sm:mb-10">
              <a 
                href="tel:+213552272844" 
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#c4a46a] hover:bg-[#b09058] text-[#080d09] transition-all shadow-lg min-h-[46px]"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Appeler maintenant</span>
              </a>
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider border border-[#c4a46a]/40 hover:border-[#c4a46a] text-[#f7f5f0] hover:bg-white/5 transition-all min-h-[46px]"
              >
                <span>Directives de Contact</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Manager and Location Information */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-y-3.5 gap-x-6 pt-5 sm:pt-6 border-t border-[#1c291d] text-xs sm:text-sm text-[#a3b2a4]">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#3b4f3d] block mb-0.5">Responsable Commercial</span>
                <span className="font-semibold text-[#f7f5f0]">Mohamed — Gérant</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-[#1c291d]" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#3b4f3d] block mb-0.5">Siège & Distribution</span>
                <span className="font-semibold text-[#f7f5f0] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#c4a46a] shrink-0" /> Bejaia, Algérie
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION 2 — QUICK BUSINESS VALUE (Optimized vertical padding and spacing) */}
      <section className="bg-[#0b120c] py-10 sm:py-16 border-b border-[#1c291d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-7 gap-x-6">
            
            {/* Point 1 */}
            <div className="flex gap-3.5">
              <div className="w-10 h-10 shrink-0 bg-[#131e15] border border-[#1c291d] flex items-center justify-center text-[#c4a46a]">
                <Factory className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-[#f7f5f0] mb-1">Approvisionnement B2B</h3>
                <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed">
                  Logistique dimensionnée pour répondre aux exigences de transformation des usines et des manufacturiers.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex gap-3.5">
              <div className="w-10 h-10 shrink-0 bg-[#131e15] border border-[#1c291d] flex items-center justify-center text-[#c4a46a]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-[#f7f5f0] mb-1">Qualité & Sélection</h3>
                <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed">
                  Des matières premières pures répondant rigoureusement aux critères techniques de votre secteur.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex gap-3.5">
              <div className="w-10 h-10 shrink-0 bg-[#131e15] border border-[#1c291d] flex items-center justify-center text-[#c4a46a]">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-[#f7f5f0] mb-1">Service Commercial Direct</h3>
                <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed">
                  Pas d'intermédiaires. Vous traitez directement avec le gérant pour une flexibilité et réactivité optimales.
                </p>
              </div>
            </div>

            {/* Point 4 */}
            <div className="flex gap-3.5">
              <div className="w-10 h-10 shrink-0 bg-[#131e15] border border-[#1c291d] flex items-center justify-center text-[#c4a46a]">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-[#f7f5f0] mb-1">Relation Durable</h3>
                <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed">
                  Nous privilégions la régularité et le respect rigoureux des engagements de volumes et de calendrier.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECTION 3 — NOS PRODUITS (Optimized spacing, text wrapping, and image containment) */}
      <section id="produits" className="py-12 xs:py-16 sm:py-20 md:py-24 bg-[#080d09] border-b border-[#1c291d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#c4a46a] font-bold block mb-2 sm:mb-3">Catalogue Professionnel</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#f7f5f0] mb-3 text-wrap-balance">
              Nos produits de base
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#a3b2a4] text-wrap-balance">
              Des matières premières stratégiques sélectionnées pour leur conformité technique et destinées aux unités de fabrication.
            </p>
          </div>

          {/* Product Cards Container (Clean Stacked list on smartphone screens, grid on desktop) */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-[#0b120c] border border-[#1c291d] flex flex-col justify-between group transition-all duration-300 hover:border-[#c4a46a]/40"
              >
                <div>
                  {/* Card Image Slot with proper mobile aspect constraint to avoid overflow */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#131e15] border-b border-[#1c291d]">
                    <img 
                      src={product.image} 
                      alt={product.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#131e15] to-[#080d09] text-center';
                          fallback.innerHTML = `
                            <svg class="w-12 h-12 text-[#c4a46a] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                            </svg>
                            <span class="text-xs font-bold tracking-wider text-[#f7f5f0]">${product.name}</span>
                          `;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-[#c4a46a] text-[#080d09] text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-0.5">
                      B2B Supply
                    </div>
                  </div>

                  {/* Card Content (Horizontal padding optimized for 320px-430px screens) */}
                  <div className="p-5 sm:p-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-[#f7f5f0] mb-0.5">
                      {product.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs font-semibold text-[#c4a46a] uppercase tracking-wider mb-3">
                      {product.subTitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed mb-5">
                      {product.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2 sm:space-y-3 mb-2">
                      {product.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-[11px] sm:text-xs text-[#f7f5f0]/90">
                          <Check className="w-3.5 h-3.5 text-[#c4a46a] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="px-5 pb-5 sm:px-8 sm:pb-8 pt-1">
                  <div className="border-t border-[#1c291d] pt-4 sm:pt-6 flex flex-col gap-2.5">
                    <button 
                      onClick={handleProductInquiry}
                      className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider bg-[#131e15] hover:bg-[#c4a46a] text-[#f7f5f0] hover:text-[#080d09] border border-[#c4a46a]/20 hover:border-[#c4a46a] transition-all duration-200 cursor-pointer min-h-[44px]"
                    >
                      Contacter le gérant
                    </button>
                    <button 
                      onClick={handleProductInquiry}
                      className="text-center text-[11px] text-[#a3b2a4] hover:text-[#c4a46a] underline transition-colors"
                    >
                      Obtenir les informations de contact direct
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SECTION 4 — NOS CLIENTS / SECTEURS PROFESSIONNELS (Optimized stacking & balanced heights) */}
      <section id="secteurs" className="py-12 xs:py-16 sm:py-20 md:py-24 bg-[#0b120c] border-b border-[#1c291d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-16">
            <div className="max-w-2xl">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#c4a46a] font-bold block mb-2 sm:mb-3">Secteurs Industriels</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#f7f5f0] mb-3">
                Nous accompagnons les professionnels
              </h2>
              <p className="text-xs sm:text-sm text-[#a3b2a4] max-w-xl">
                Nos solutions de distribution sont spécifiquement structurées pour répondre aux flux de production de diverses branches professionnelles.
              </p>
            </div>
            <div className="mt-5 lg:mt-0">
              <span className="inline-block text-[10px] sm:text-xs text-[#c4a46a] font-mono tracking-wider bg-[#131e15] border border-[#1c291d] px-3.5 py-1.5 uppercase">
                Acheminement direct depuis Bejaia
              </span>
            </div>
          </div>

          {/* Grid Layout of Target Sectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* Sector 1 */}
            <div className="bg-[#080d09] border border-[#1c291d] p-5 sm:p-8 hover:border-[#c4a46a]/20 transition-all">
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-[#c4a46a] mb-4 sm:mb-6" />
              <h3 className="text-base sm:text-lg font-bold text-[#f7f5f0] mb-2">Unités de production & Savonneries</h3>
              <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed">
                Approvisionnement direct en <strong className="text-[#f7f5f0]">huile acide</strong> et matières grasses adaptées aux formules de détergence, fabrication de savon traditionnel ou de synthèse.
              </p>
            </div>

            {/* Sector 2 */}
            <div className="bg-[#080d09] border border-[#1c291d] p-5 sm:p-8 hover:border-[#c4a46a]/20 transition-all">
              <Factory className="w-6 h-6 sm:w-8 sm:h-8 text-[#c4a46a] mb-4 sm:mb-6" />
              <h3 className="text-base sm:text-lg font-bold text-[#f7f5f0] mb-2">Raffineries & Usines de transformation</h3>
              <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed">
                Négoce régulier en <strong className="text-[#f7f5f0]">huile brute</strong> pour les unités industrielles dotées de capacités de traitement, de désodorisation et de raffinage de corps gras.
              </p>
            </div>

            {/* Sector 3 */}
            <div className="bg-[#080d09] border border-[#1c291d] p-5 sm:p-8 hover:border-[#c4a46a]/20 transition-all">
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-[#c4a46a] mb-4 sm:mb-6" />
              <h3 className="text-base sm:text-lg font-bold text-[#f7f5f0] mb-2">Nutrition Animale & Agro-Technique</h3>
              <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed">
                Distribution de <strong className="text-[#f7f5f0]">mélasse de sucre</strong> hautement concentrée, indispensable pour la formulation de blocs de léchage, d'aliments concentrés ou les ferments.
              </p>
            </div>

            {/* Sector 4 */}
            <div className="bg-[#080d09] border border-[#1c291d] p-5 sm:p-8 hover:border-[#c4a46a]/20 transition-all">
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-[#c4a46a] mb-4 sm:mb-6" />
              <h3 className="text-base sm:text-lg font-bold text-[#f7f5f0] mb-2">Acteurs Industriels & Usines</h3>
              <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed">
                Soutien logistique et volumes réguliers sous forme d'engagements contractuels annuels ou trimestriels pour sécuriser vos intrants industriels majeurs.
              </p>
            </div>

            {/* Sector 5 */}
            <div className="bg-[#080d09] border border-[#1c291d] p-5 sm:p-8 hover:border-[#c4a46a]/20 transition-all">
              <Factory className="w-6 h-6 sm:w-8 sm:h-8 text-[#c4a46a] mb-4 sm:mb-6" />
              <h3 className="text-base sm:text-lg font-bold text-[#f7f5f0] mb-2">Distributeurs & Négociants</h3>
              <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed">
                Fourniture d'intrants en gros volumes pour les revendeurs de matières brutes capables de gérer des capacités de stockage et de re-conditionnement.
              </p>
            </div>

            {/* Sector 6 */}
            <div className="bg-[#080d09] border border-[#1c291d] p-5 sm:p-8 hover:border-[#c4a46a]/20 transition-all">
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-[#c4a46a] mb-4 sm:mb-6" />
              <h3 className="text-base sm:text-lg font-bold text-[#f7f5f0] mb-2">Acheteurs Professionnels</h3>
              <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed">
                Échanges fluides, fiches techniques conformes et réactivité d'expédition pour satisfaire les critères de conformité des départements achats.
              </p>
            </div>

          </div>

          <div className="mt-8 text-center text-[10px] text-[#6e8571]">
            * Note : Les profils de secteurs énumérés représentent les typologies de clients professionnels que nous sommes habilités à servir dans le cadre de nos activités de négoce et distribution.
          </div>

        </div>
      </section>

      {/* 6. SECTION 5 — POURQUOI TRAVAILLER AVEC NOUS ? (Responsive visual rhythm & layout card optimization) */}
      <section id="pourquoi-nous" className="py-12 xs:py-16 sm:py-20 md:py-24 bg-[#080d09] border-b border-[#1c291d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            
            {/* Business Card layout container (Internal padding adapted for mobile) */}
            <div className="bg-gradient-to-br from-[#131e15] to-[#0b120c] border border-[#c4a46a]/30 p-5 xs:p-6 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c4a46a]/5 rounded-full blur-2xl" />
              
              <div className="border-l-2 border-[#c4a46a] pl-4 sm:pl-6 mb-8 sm:mb-12">
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#c4a46a] block mb-1.5">ENGAGEMENT DIRECT</span>
                <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-[#f7f5f0] leading-snug">
                  "Une gestion directe et réactive pour sécuriser vos approvisionnements."
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed mb-6 sm:mb-8">
                Basés à Bejaia, carrefour d'activité industrielle majeur en Algérie, nous offrons une passerelle simple et directe entre vos besoins et la disponibilité des matières premières. Nous n'utilisons pas d'arguments marketing superflus : notre réputation se construit sur chaque tonne livrée.
              </p>

              {/* Business Card Core Metrics (Unboxed static texts, gap adjusted for compact display) */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 border-t border-[#1c291d] text-xs sm:text-sm font-semibold">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#3b4f3d] block mb-0.5">LOCALISATION</span>
                  <span className="text-[#f7f5f0]">Bejaia, Algérie</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#3b4f3d] block mb-0.5">INTERLOCUTEUR</span>
                  <span className="text-[#f7f5f0]">Mohamed, Gérant</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#3b4f3d] block mb-0.5">TYPE DE COMMERCE</span>
                  <span className="text-[#f7f5f0]">B2B - Vente & Distribution</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#3b4f3d] block mb-0.5">VÉRIFICATION</span>
                  <span className="text-[#f7f5f0]">Professionnels uniquement</span>
                </div>
              </div>
            </div>

            {/* Values content block */}
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#c4a46a] font-bold block mb-2 sm:mb-3">Crédibilité & Sérieux</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#f7f5f0] mb-5 sm:mb-6">
                Pourquoi travailler avec nous ?
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#a3b2a4] mb-6 sm:mb-8 leading-relaxed">
                Le choix d'un fournisseur industriel ne doit rien au hasard. C'est pourquoi nous privilégions la rigueur et le contact humain direct pour chaque transaction.
              </p>

              <div className="space-y-5 sm:space-y-6">
                
                {/* Point 1 */}
                <div className="flex gap-3 sm:gap-4">
                  <span className="text-sm sm:text-lg font-bold text-[#c4a46a] font-mono select-none shrink-0 mt-0.5">01</span>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#f7f5f0]">Échange direct avec un interlocuteur unique</h4>
                    <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed mt-1">
                      Vous échangez sans filtre directement avec Mohamed, gérant. Cela permet des décisions instantanées et une compréhension précise de vos contraintes.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex gap-3 sm:gap-4">
                  <span className="text-sm sm:text-lg font-bold text-[#c4a46a] font-mono select-none shrink-0 mt-0.5">02</span>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#f7f5f0]">Approche orientée besoins réels</h4>
                    <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed mt-1">
                      Nous n’imposons pas de grilles standardisées rigides. Nous étudions vos volumes de consommation et planifions la livraison de manière flexible.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-3 sm:gap-4">
                  <span className="text-sm sm:text-lg font-bold text-[#c4a46a] font-mono select-none shrink-0 mt-0.5">03</span>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#f7f5f0]">Disponibilité commerciale et logistique à Bejaia</h4>
                    <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed mt-1">
                      Notre présence géographique près des grands pôles logistiques et maritimes nous donne un accès privilégié aux matières brutes d'importation et de raffinage.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. SECTION 6 — PROCESSUS SIMPLE (Optimized sequence cards for mobile verticality) */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 bg-[#0b120c] border-b border-[#1c291d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#c4a46a] font-bold block mb-2 sm:mb-3">En trois étapes</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#f7f5f0] mb-3">
              Un processus d'achat simple
            </h2>
            <p className="text-xs sm:text-sm text-[#a3b2a4]">
              Voici comment s’organise la mise en relation et la finalisation de votre approvisionnement B2B.
            </p>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Step 1 */}
            <div className="bg-[#080d09] border border-[#1c291d] p-5 sm:p-8 relative">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#c4a46a]/15 font-mono absolute top-4 right-5 select-none">01</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#c4a46a] block mb-1.5">Phase de Contact</span>
              <h3 className="text-base sm:text-lg font-bold text-[#f7f5f0] mb-2">Présentez votre besoin</h3>
              <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed">
                Contactez-nous directement par téléphone. Indiquez-nous le produit recherché (Huile brute, Huile acide ou Mélasse de sucre) ainsi que le volume estimé.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#080d09] border border-[#1c291d] p-5 sm:p-8 relative">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#c4a46a]/15 font-mono absolute top-4 right-5 select-none">02</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#c4a46a] block mb-1.5">Phase d'Échange</span>
              <h3 className="text-base sm:text-lg font-bold text-[#f7f5f0] mb-2">Échange commercial direct</h3>
              <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed">
                Mohamed prend directement contact avec vous pour préciser les détails techniques, vous transmettre les fiches produits et étudier nos stocks.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#080d09] border border-[#1c291d] p-5 sm:p-8 relative">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#c4a46a]/15 font-mono absolute top-4 right-5 select-none">03</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#c4a46a] block mb-1.5">Phase de Validation</span>
              <h3 className="text-base sm:text-lg font-bold text-[#f7f5f0] mb-2">Finalisation & Enlèvement</h3>
              <p className="text-xs sm:text-sm text-[#a3b2a4] leading-relaxed">
                Nous convenons d'un tarif, d'un calendrier et des conditions d'enlèvement ou de livraison d'entreprise à entreprise en toute transparence réglementaire.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 8. SECTION 7 — HIGH-CONVERSION CTA BANNER (Optimized container spaces and text sizing) */}
      <section className="py-12 xs:py-16 sm:py-20 md:py-24 bg-[#080d09] relative overflow-hidden border-b border-[#1c291d]">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[#c4a46a]/5" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(196,164,106,0.15)_0,transparent_60%)]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#c4a46a] font-bold block mb-3">Demande d'Informations</span>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#f7f5f0] mb-4 sm:mb-6 max-w-3xl mx-auto text-wrap-balance leading-tight">
            Vous recherchez un approvisionnement fiable pour votre activité ?
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#a3b2a4] mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Échangez directement avec notre équipe pour connaître les disponibilités, les fiches techniques de lot et obtenir des conditions adaptées à votre besoin.
          </p>

          {/* Interactive Calling Actions (Comfortable stack on mobile and inline row on desktop) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8">
            <a 
              href="tel:+213552272844" 
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-xs font-bold uppercase tracking-widest bg-[#c4a46a] text-[#080d09] hover:bg-[#b09058] transition-all duration-150 shadow-md min-h-[48px]"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>0552 27 28 44</span>
            </a>
            <a 
              href="tel:+213697303396" 
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-xs font-bold uppercase tracking-widest bg-[#131e15] text-[#f7f5f0] hover:bg-[#1a291d] border border-[#c4a46a]/30 hover:border-[#c4a46a] transition-all duration-150 min-h-[48px]"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>0697 30 33 96</span>
            </a>
          </div>

          <div className="text-xs sm:text-sm text-[#a3b2a4]">
            Un appel direct vous permet d'obtenir des réponses fiables en quelques minutes.
          </div>

        </div>
      </section>

      {/* 9. SECTION 8 — FAQ B2B (Optimized accordion headers & line wraps) */}
      <section id="faq" className="py-12 xs:py-16 sm:py-20 md:py-24 bg-[#0b120c] border-b border-[#1c291d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#c4a46a] font-bold block mb-2 sm:mb-3">Foire Aux Questions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#f7f5f0] mb-3">
              Questions fréquentes B2B
            </h2>
            <p className="text-xs sm:text-sm text-[#a3b2a4] max-w-xl mx-auto">
              Retrouvez des réponses factuelles et concrètes pour faciliter votre démarche de commande de matières premières.
            </p>
          </div>

          {/* Accordion List (Optimized touch padding and sizing) */}
          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-[#080d09] border border-[#1c291d] transition-all duration-200"
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-3.5 cursor-pointer hover:bg-[#131e15]/40 transition-colors min-h-[48px]"
                  >
                    <span className="text-xs xs:text-sm sm:text-base font-semibold text-[#f7f5f0] tracking-wide leading-tight text-wrap-balance">
                      {faq.question}
                    </span>
                    <span className="text-[#c4a46a] shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-60 border-t border-[#1c291d]' : 'max-h-0'}`}>
                    <div className="px-4 py-4 sm:p-6 text-xs sm:text-sm text-[#a3b2a4] leading-relaxed bg-[#0a100a]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. SECTION 9 — FINAL CONTACT (Fully optimized visual balance, space distribution, and calling text fits on 320px) */}
      <section id="contact" className="py-12 xs:py-16 sm:py-20 md:py-24 bg-[#080d09] border-b border-[#1c291d]" ref={contactRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 sm:gap-16">
            
            {/* Left Column: Premium Contact Block & QR Code Wording */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#c4a46a] font-bold block mb-2.5">Informations de contact</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#f7f5f0] mb-5">
                  Parlons de votre besoin
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-[#a3b2a4] mb-6 sm:mb-8 leading-relaxed">
                  Pour toute étude de prix, consultation de disponibilité ou demande de fiche technique, n'hésitez pas à nous joindre. Nous sommes à votre service pour vous proposer une solution fiable.
                </p>

                {/* Simulated Business Card Block (Padding optimized for tiny devices) */}
                <div className="bg-[#0b120c] border border-[#c4a46a]/20 p-5 sm:p-8 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1 bg-[#c4a46a] h-full" />
                  
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-bold text-[#f7f5f0]">MOHAMED</h3>
                    <span className="text-[10px] text-[#c4a46a] uppercase tracking-wider font-semibold">Gérant Principal</span>
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-sm text-[#a3b2a4]">
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-[#c4a46a] shrink-0" />
                      <span>Bejaia, Algérie</span>
                    </div>
                    
                    <div className="flex items-start gap-2.5">
                      <Phone className="w-4 h-4 text-[#c4a46a] shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-1.5">
                        <a href="tel:+213552272844" className="hover:text-white transition-colors font-mono font-semibold tracking-wide">
                          0552 27 28 44
                        </a>
                        <a href="tel:+213697303396" className="hover:text-white transition-colors font-mono font-semibold tracking-wide">
                          0697 30 33 96
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Traffic Section */}
              <div className="bg-[#131e15] border border-[#1c291d] p-5 text-xs text-[#a3b2a4] flex items-center gap-3.5">
                <QrCode className="w-8 h-8 text-[#c4a46a] shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#f7f5f0] mb-0.5">Accès par QR Code Mobile</h4>
                  <p className="leading-relaxed text-[11px] sm:text-xs">
                    Ce site web est spécialement conçu pour s'adapter à votre smartphone lors de vos scans en déplacement.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Redesigned premium "CONTACT DIRECT" Action Area */}
            <div className="lg:col-span-7">
              <div className="bg-[#0b120c] border border-[#1c291d] p-5 xs:p-6 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full">
                
                {/* Decorative Subtle Background Line */}
                <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-l from-[#c4a46a] to-transparent" />
                <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-[#c4a46a]/30 to-transparent" />

                <div className="space-y-6 sm:space-y-8">
                  
                  {/* Category Title */}
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#c4a46a]" />
                    <span className="text-[10px] uppercase tracking-widest text-[#c4a46a] font-bold block">Canal Direct</span>
                  </div>

                  {/* Main Header (Wording matches exactly with elegant clamp size rules) */}
                  <div>
                    <h3 className="text-xl sm:text-3xl font-extrabold text-[#f7f5f0] tracking-tight mb-3">
                      Besoin d’un approvisionnement ?
                    </h3>
                    <p className="text-xs sm:text-base text-[#a3b2a4] leading-relaxed">
                      Échangez directement avec notre équipe pour connaître la disponibilité de nos produits, les conditions commerciales et les solutions adaptées à votre activité.
                    </p>
                  </div>

                  {/* High Visual Calling Area */}
                  <div className="bg-[#080d09] border border-[#1c291d] p-5 sm:p-8 relative">
                    <div className="absolute top-4 right-4 text-[#c4a46a]/10 pointer-events-none hidden xs:block">
                      <Phone className="w-16 h-16 sm:w-20 sm:h-20" />
                    </div>

                    <h4 className="text-[10px] sm:text-xs uppercase tracking-widest text-[#c4a46a] font-bold mb-3.5 sm:mb-4 block">
                      Appelez-nous directement
                    </h4>

                    {/* Highly visible typography layout for numbers */}
                    <div className="space-y-3.5 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3.5">
                        <div className="w-8 h-8 rounded-full bg-[#131e15] flex items-center justify-center border border-[#1c291d] shrink-0">
                          <Phone className="w-3.5 h-3.5 text-[#c4a46a]" />
                        </div>
                        <a href="tel:+213552272844" className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wider text-[#f7f5f0] hover:text-[#c4a46a] transition-colors font-mono">
                          0552 27 28 44
                        </a>
                      </div>
                      <div className="flex items-center gap-3.5">
                        <div className="w-8 h-8 rounded-full bg-[#131e15] flex items-center justify-center border border-[#1c291d] shrink-0">
                          <Phone className="w-3.5 h-3.5 text-[#c4a46a]" />
                        </div>
                        <a href="tel:+213697303396" className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wider text-[#f7f5f0] hover:text-[#c4a46a] transition-colors font-mono">
                          0697 30 33 96
                        </a>
                      </div>
                    </div>

                    {/* Huge Actionable Smartphone-ready calling buttons (Clean stack on mobile and inline row on desktop) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a 
                        href="tel:+213552272844"
                        className="w-full inline-flex items-center justify-center gap-2.5 px-3 py-3.5 sm:py-4 text-[10px] xs:text-xs font-black uppercase tracking-wider bg-[#c4a46a] hover:bg-[#b09058] text-[#080d09] transition-all duration-200 shadow-md text-center min-h-[48px]"
                      >
                        <Phone className="w-3.5 h-3.5 shrink-0" />
                        <span className="whitespace-nowrap">APPELER LE 0552 27 28 44</span>
                      </a>
                      <a 
                        href="tel:+213697303396"
                        className="w-full inline-flex items-center justify-center gap-2.5 px-3 py-3.5 sm:py-4 text-[10px] xs:text-xs font-black uppercase tracking-wider bg-[#131e15] hover:bg-[#1a291d] text-[#f7f5f0] border border-[#c4a46a]/30 hover:border-[#c4a46a] transition-all duration-200 text-center min-h-[48px]"
                      >
                        <Phone className="w-3.5 h-3.5 shrink-0" />
                        <span className="whitespace-nowrap">APPELER LE 0697 30 33 96</span>
                      </a>
                    </div>

                    {/* Short professional description line under buttons */}
                    <div className="mt-4 text-center sm:text-left text-[11px] text-[#6e8571] italic">
                      Un échange direct pour répondre rapidement à votre besoin professionnel.
                    </div>

                  </div>

                </div>

                {/* Secondary optional action layout block (scrolls back up to explore items) */}
                <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-[#1c291d] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-[11px] sm:text-xs text-[#a3b2a4]">
                    Besoin de consulter à nouveau notre catalogue ?
                  </span>
                  <button 
                    onClick={scrollToProducts}
                    className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold text-[#c4a46a] hover:text-white uppercase tracking-wider transition-colors cursor-pointer min-h-[30px]"
                  >
                    <span>Voir nos produits</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 11. FOOTER (Optimized content padding) */}
      <footer className="bg-[#050805] text-[#a3b2a4] text-[11px] sm:text-xs py-8 sm:py-12 border-t border-[#1c291d] mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
            
            {/* Branding */}
            <div className="text-center md:text-left">
              <span className="font-bold text-[#f7f5f0] tracking-wider uppercase block mb-1">BEJAIA MATIÈRES PREMIÈRES</span>
              <p className="text-[#6e8571] text-[10px] sm:text-xs">Vente et Distribution B2B de ressources industrielles brutes.</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <a href="#accueil" className="hover:text-white transition-colors">Accueil</a>
              <a href="#produits" className="hover:text-white transition-colors">Produits</a>
              <a href="#secteurs" className="hover:text-white transition-colors">Secteurs</a>
              <a href="#pourquoi-nous" className="hover:text-white transition-colors">Pourquoi nous</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right text-[#6e8571] text-[10px] sm:text-xs">
              <p>&copy; {new Date().getFullYear()} Bejaia Matières Premières. Tous droits réservés.</p>
              <p className="mt-1">Mohamed, Gérant — Bejaia, Algérie.</p>
            </div>

          </div>
        </div>
      </footer>

      {/* 12. STICKY BOTTOM BAR FOR MOBILE PHONES (< 15% viewport height aggregate cap with env safe-area spacing) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#080d09]/95 backdrop-blur-md border-t border-[#1c291d] pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] px-4 shadow-2xl flex items-center justify-between gap-3 select-none">
        <div className="flex-1">
          <a 
            href="tel:+213552272844" 
            className="w-full flex items-center justify-center gap-2 py-3 px-2 text-[11px] font-black uppercase tracking-widest bg-[#c4a46a] text-[#080d09] shadow-md hover:bg-[#b09058] transition-colors duration-150 min-h-[48px]"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span className="tracking-widest font-black">📞 Appeler maintenant</span>
          </a>
        </div>
        <div className="flex-1">
          <button 
            onClick={scrollToContact}
            className="w-full flex items-center justify-center gap-2 py-3 px-2 text-[11px] font-black uppercase tracking-widest bg-[#131e15] text-[#f7f5f0] border border-[#c4a46a]/30 hover:bg-[#1a291d] transition-colors duration-150 min-h-[48px]"
          >
            <span>Voir Contact</span>
          </button>
        </div>
      </div>

    </div>
  );
}
