import { CheckCircle, Users, Shield, Clock, Heart, Award } from 'lucide-react';
import { companyInfo } from '../data/apartments';

const About = () => {
  const stats = [
    { value: '500+', label: 'Clients satisfaits' },
    { value: '4.9/5', label: 'Note moyenne' },
    { value: companyInfo.apartments, label: 'Appartements' },
    { value: '24h/7j', label: 'Support client' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Tous nos appartements sont sécurisés avec gardien et surveillance 24h/7j.'
    },
    {
      icon: Heart,
      title: 'Confort',
      description: 'Nous sélectionnons uniquement des logements répondant à nos standards élevés.'
    },
    {
      icon: Users,
      title: 'Service client',
      description: 'Une équipe dédiée pour vous accompagner avant, pendant et après votre séjour.'
    },
    {
      icon: Clock,
      title: 'Réactivité',
      description: 'Réservation rapide via WhatsApp avec confirmation sous 2 heures.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            À Propos d'AppartDouala
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Spécialistes de la location d'appartements meublés à Douala depuis {new Date().getFullYear() - parseInt(companyInfo.established)} ans. 
            Nous vous offrons un service de qualité pour votre confort et votre sécurité.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Fondée en {companyInfo.established}, AppartDouala est née de la volonté de proposer 
                  des solutions d'hébergement de qualité à Douala, capitale économique du Cameroun.
                </p>
                <p>
                  Notre expertise locale nous permet de sélectionner les meilleurs appartements 
                  dans les quartiers stratégiques de Douala : Bonapriso, Bonanjo, Akwa et Bali.
                </p>
                <p>
                  Nous comprenons les besoins spécifiques des voyageurs d'affaires, expatriés 
                  et touristes qui visitent notre belle ville.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/about-team.jpg"
                alt="Équipe AppartDouala"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ce qui nous guide au quotidien pour vous offrir la meilleure expérience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Nous Choisir ?
              </h2>
              <div className="space-y-6">
                {companyInfo.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card p-6">
                <Award className="w-8 h-8 text-secondary-500 mb-4" />
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  Expertise Locale
                </h3>
                <p className="text-gray-600">
                  Notre connaissance approfondie de Douala nous permet de vous conseiller 
                  les meilleurs quartiers selon vos besoins professionnels ou personnels.
                </p>
              </div>
              
              <div className="card p-6">
                <Users className="w-8 h-8 text-secondary-500 mb-4" />
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  Service Personnalisé
                </h3>
                <p className="text-gray-600">
                  Chaque client est unique. Nous adaptons nos services à vos besoins 
                  spécifiques pour un séjour parfaitement adapté.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Une Question ? Contactez-Nous !
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour vous aider à trouver 
            l'appartement parfait pour votre séjour à Douala.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-secondary"
            >
              Nous Contacter
            </a>
            <a
              href="/appartements"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
            >
              Voir nos Appartements
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;