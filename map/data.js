/* ============================================================
   MAP DATA MODEL  —  edit this file to update the map.
   ------------------------------------------------------------
   Every country and blurb is drawn ONLY from the two GitBooks:
     - Current Resources Hub: featured implementation stories
       (Lesotho, Malawi)
     - Old GitBook "Implementation Around the World": the 11
       countries and their showcase themes.

   status:  'featured'       = full implementation story in the
                               Resources Hub (amber, pulsing)
            'implementation' = showcased in Implementation Around
                               the World (blue)

   Adding a country = one object here.
   ============================================================ */

window.DPI_COUNTRIES = [
  /* ---- Featured stories (current Resources Hub) ------------ */
  {
    id: 'lesotho', name: 'Lesotho', coords: [-29.61, 28.23], status: 'featured',
    headline: "Lesotho's Digital Public Infrastructure drive",
    summary: '“Building better for every child.” Lesotho’s national DPI drive with safeguards considered from the start.',
    tags: ['National DPI drive', 'Children', 'Inclusion'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/country-impementation/country-implementation-1/country-implementation-journey/lesotho-digital-public-infrastructure-drive'
  },
  {
    id: 'malawi', name: 'Malawi', coords: [-13.25, 34.30], status: 'featured',
    headline: 'Implementing safeguards in practice',
    summary: 'How Malawi is implementing offline Digital ID to strengthen inclusion.',
    tags: ['Digital ID', 'Offline access', 'Inclusion'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/country-impementation/country-implementation-1/country-implementation-journey/malawi-implementing-safeguards-in-practice'
  },

  /* ---- Implementation Around the World (old GitBook) ------- */
  {
    id: 'brazil', name: 'Brazil', coords: [-10.3, -53.2], status: 'implementation',
    headline: 'Financial inclusion and climate goals',
    summary: 'From PIX — instant payments serving 140+ million users — to the Rural Environment Registry, built on safe and inclusive DPI principles.',
    tags: ['Payments', 'Financial inclusion', 'Climate'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/country-impementation/implementation-around-the-world/brazil'
  },
  {
    id: 'dominican-republic', name: 'Dominican Republic', coords: [18.73, -70.16], status: 'implementation',
    headline: 'Data Strategy Action Plan promotes equity and inclusion',
    summary: 'Advancing digital infrastructure with the X-Road digital public good, with civil society participating throughout implementation.',
    tags: ['Data exchange', 'Equity', 'Civil society'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/country-impementation/implementation-around-the-world/dominican-republic'
  },
  {
    id: 'ethiopia', name: 'Ethiopia', coords: [9.15, 40.49], status: 'implementation',
    headline: 'Digital IDs enable essential services for refugees',
    summary: 'The Fayda digital ID extends access to bank accounts, schooling and business registration for refugees and host communities.',
    tags: ['Digital ID', 'Refugees', 'Essential services'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/country-impementation/implementation-around-the-world/ethiopia'
  },
  {
    id: 'finland', name: 'Finland', coords: [62.6, 25.7], status: 'implementation',
    headline: 'Advancing safe and inclusive digital ecosystems',
    summary: 'X-Road, an open-source data exchange layer, connects 800+ public digital services for secure government–citizen interactions.',
    tags: ['Data exchange', 'Open source', 'Trust'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/country-impementation/implementation-around-the-world/finland'
  },
  {
    id: 'india', name: 'India', coords: [22.6, 79.0], status: 'implementation',
    headline: 'DPI transforms agriculture and empowers millions of small-scale farmers',
    summary: 'VISTAAR, built on OpenAgrinet, uses AI tools and multilingual support to help farmers adopt sustainable practices.',
    tags: ['Agriculture', 'AI', 'Livelihoods'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/country-impementation/implementation-around-the-world/india'
  },
  {
    id: 'nigeria', name: 'Nigeria', coords: [9.08, 8.68], status: 'implementation',
    headline: 'Building safe and inclusive DPI',
    summary: 'Linking civil registration with digital IDs to improve health outcomes, with a commitment to adopting Universal DPI Safeguards.',
    tags: ['Civil registration', 'Digital ID', 'Health'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/country-impementation/implementation-around-the-world/nigeria'
  },
  {
    id: 'rwanda', name: 'Rwanda', coords: [-1.94, 29.87], status: 'implementation',
    headline: 'Financial inclusion through digital payments',
    summary: 'The eKash platform — enhanced with open-source Mojaloop — now serves over 9 million users with equitable, sustainable payments.',
    tags: ['Payments', 'Financial inclusion', 'Open source'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/country-impementation/implementation-around-the-world/rwanda'
  },
  {
    id: 'somalia', name: 'Somalia', coords: [5.15, 46.20], status: 'implementation',
    headline: 'Secure, inclusive and transparent digital IDs',
    summary: 'Relaunching national digital identity for 15 million citizens — protecting civil liberties and reaching internally displaced persons.',
    tags: ['Digital ID', 'IDPs', 'Civil liberties'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/country-impementation/implementation-around-the-world/somalia'
  },
  {
    id: 'trinidad-and-tobago', name: 'Trinidad and Tobago', coords: [10.5, -61.3], status: 'implementation',
    headline: 'Strengthening resilience across Small Island Developing States',
    summary: 'A multi-stakeholder governance assessment identifies gaps and implements safeguards in the digital ID system, boosting climate resilience.',
    tags: ['Digital ID', 'Governance', 'Climate resilience'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/country-impementation/implementation-around-the-world/trinidad-and-tobago'
  },
  {
    id: 'uruguay', name: 'Uruguay', coords: [-32.8, -56.0], status: 'implementation',
    headline: 'Taking a whole-of-society approach to implementing DPI',
    summary: 'Integrating DPI Safeguards across health and education through inclusive institutions — protecting people’s rights and data.',
    tags: ['Whole-of-society', 'Health', 'Education'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/country-impementation/implementation-around-the-world/uruguay'
  }
];
