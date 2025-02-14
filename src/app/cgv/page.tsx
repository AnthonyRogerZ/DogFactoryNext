'use client'
import { motion } from 'framer-motion'

export default function CGV() {
  return (
    <div className="bg-white min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-[#5B5F3D] mb-8">
              Conditions Générales de Vente Dog'Factory
            </h1>

            <div className="space-y-8 text-gray-600">
              <p>
                Chez Dog'Factory, nous nous engageons à fournir un service transparent et de qualité 
                à tous nos clients. Ces Conditions Générales Dog'Factory définissent les droits et 
                obligations liés à nos prestations de toilettage.
              </p>

              <div>
                <h2 className="text-2xl font-bold text-[#5B5F3D] mb-4">
                  Conditions générales Dog'Factory – Engagements et Prestations
                </h2>
                <p>
                  Nous proposons une large gamme de prestations adaptées aux besoins spécifiques de 
                  chaque animal, notamment le bain, la tonte, la coupe aux ciseaux, et l'épilation. 
                  Toutes les prestations respectent les normes d'hygiène strictes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#5B5F3D] mb-4">
                  Vos droits avec les CGV de Dog'Factory
                </h2>
                <p>
                  Le client doit signaler tout problème de santé ou comportement agressif avant la 
                  prestation. Nous nous réservons le droit de refuser les animaux malades ou dangereux 
                  pour garantir la sécurité de tous.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#5B5F3D] mb-4">
                  Paiements et tarifs des prestations Dog'Factory
                </h2>
                <p>
                  Tous les tarifs sont TTC et affichés dans notre salon. Le paiement s'effectue 
                  immédiatement après la prestation. En cas de retard, des pénalités peuvent s'appliquer.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#5B5F3D] mb-4">
                  Horaires et Disponibilités
                </h2>
                <p>
                  Nous vous accueillons du lundi au samedi pour offrir les meilleurs soins à vos 
                  compagnons. Contactez-nous pour convenir d'un rendez-vous.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p>
                  Pour plus d'informations, consultez le site officiel du{' '}
                  <a 
                    href="https://agriculture.gouv.fr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#5B5F3D] hover:underline"
                  >
                    Ministère de l'Agriculture
                  </a>
                  .
                </p>
                <p className="mt-4">
                  Découvrez également nos{' '}
                  <a href="/mentions-legales" className="text-[#5B5F3D] hover:underline">
                    mentions légales
                  </a>{' '}
                  ou contactez-nous par email à{' '}
                  <a 
                    href="mailto:contact@dogfactory.fr"
                    className="text-[#5B5F3D] hover:underline"
                  >
                    contact@dogfactory.fr
                  </a>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
