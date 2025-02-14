'use client'
import { motion } from 'framer-motion'

export default function MentionsLegales() {
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
              Mentions Légales
            </h1>

            <div className="space-y-8 text-gray-600">
              <div>
                <h2 className="text-2xl font-bold text-[#5B5F3D] mb-4">
                  Identité de l'Éditeur
                </h2>
                <div className="space-y-2">
                  <p className="font-semibold">Dog'Factory</p>
                  <p>Salon de Toilettage Canin</p>
                  <p>Propriétaire : Mme Christine Rochet-Lemaire</p>
                  <p>Adresse : 79 rue de la Baste, 77000 Vaux-le-Pénil</p>
                  <p>Téléphone : <a href="tel:0658166105" className="text-[#5B5F3D] hover:underline">06 58 16 61 05</a></p>
                  <p>Email : <a href="mailto:contact@dogfactory.fr" className="text-[#5B5F3D] hover:underline">contact@dogfactory.fr</a></p>
                  <p>SIRET : [Votre numéro SIRET]</p>
                  <p>Immatriculation : Chambre des Métiers et de l'Artisanat de Melun</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#5B5F3D] mb-4">
                  Hébergement du Site
                </h2>
                <div className="space-y-2">
                  <p>Hébergeur : OVH</p>
                  <p>Adresse : 2 rue Kellermann, 59100 Roubaix, France</p>
                  <p>Téléphone : 1007 (gratuit depuis une ligne fixe en France)</p>
                  <p>Site web : <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer" className="text-[#5B5F3D] hover:underline">www.ovh.com</a></p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#5B5F3D] mb-4">
                  Propriété Intellectuelle
                </h2>
                <p>
                  Le site Dog'Factory ainsi que l'ensemble de son contenu (textes, images, logos, 
                  vidéos, etc.) sont protégés par les lois en vigueur sur la propriété intellectuelle. 
                  Toute reproduction, représentation ou exploitation non autorisée des contenus du site 
                  est strictement interdite sans l'accord préalable écrit de Mme Christine Rochet-Lemaire.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#5B5F3D] mb-4">
                  Données Personnelles
                </h2>
                <p>
                  En conformité avec le Règlement Général sur la Protection des Données (RGPD), les 
                  informations collectées via les formulaires de contact ou de réservation sont utilisées 
                  uniquement pour répondre à vos demandes. Vous disposez d'un droit d'accès, de 
                  rectification et de suppression de vos données personnelles, que vous pouvez exercer 
                  en nous contactant par email à{' '}
                  <a href="mailto:contact@dogfactory.fr" className="text-[#5B5F3D] hover:underline">
                    contact@dogfactory.fr
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#5B5F3D] mb-4">
                  Gestion des Cookies
                </h2>
                <p>
                  Le site Dog'Factory utilise des cookies pour améliorer votre expérience utilisateur. 
                  Vous pouvez configurer vos préférences ou désactiver les cookies dans les paramètres 
                  de votre navigateur.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#5B5F3D] mb-4">
                  Responsabilité
                </h2>
                <p>
                  Dog'Factory ne saurait être tenu responsable des dommages directs ou indirects causés 
                  au matériel de l'utilisateur lors de l'accès au site. De plus, le site peut contenir 
                  des liens vers des sites tiers sur lesquels Dog'Factory n'exerce aucun contrôle.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#5B5F3D] mb-4">
                  Droit Applicable
                </h2>
                <p>
                  Les présentes mentions légales sont régies par la loi française. En cas de litige, 
                  les tribunaux compétents seront ceux de la juridiction de Melun.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
