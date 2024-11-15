
import PageIllustration from "@/components/page-illustration";


export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 md:pt-20">
      
          {/* Section header */}
          <div className="pb-12 text-center">
            <h2
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Fully modular and automative PaaS  <br className="max-lg:hidden" />
              for small companies that want scale
            </h2>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Orbit is a centralized CMS with connected tools for managing websites, e-commerce, and teams. It offers a 'Plug & Play' feature that allows customized functionalities linked to the same authentication system. Additionally, it includes full automation to efficiently manage tasks, communications, social media, and business data, providing an alternative to managing everything within Excel.              </p>
            </div>
          </div>
    
        </div>
      </div>
    </section>
  );
}
