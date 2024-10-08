
import PageIllustration from "@/components/page-illustration";


export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
      
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
            </div>
            
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
             ORBIT <br className="max-lg:hidden" />
            </h1>
          
            <h2
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Una PaaS completamente modulare e automatizzata <br className="max-lg:hidden" />
              per aziende che vogliono scalare
            </h2>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Orbit è un CMS centralizzato con strumenti integrati per la gestione di siti web, e-commerce e team. Offre una funzionalità 'Plug & Play' che consente di aggiungere funzionalità personalizzate collegate allo stesso sistema di autenticazione. Inoltre, include una funzione di automazione completa per gestire in modo efficiente attività, comunicazioni, social media e dati aziendali.
              </p>

            </div>
          </div>
    
        </div>
      </div>
    </section>
  );
}
