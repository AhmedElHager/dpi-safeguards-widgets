/* ============================================================
   RESOURCE FINDER — data model
   ------------------------------------------------------------
   Every title, description and link below is real, sourced from
   the current Resources Hub or the old GitBook. The TAGS are an
   editorial layer proposed for this redesign — GitBook does not
   currently tag resources this way. Tags reuse the Framework's
   own real taxonomy so the whole site shares one mental model:

     phase      → the 5 real Life Cycle Stages (L1-L5)
     authority  → the 5 real Responsible Authorities (R1-R5)
     topic      → recurring real themes pulled from the sources
                  (not an official taxonomy — a light grouping)

   This mirrors the founding memo's worked example: a civil
   servant should be able to filter by phase, who they are, and
   context to find the right case study or template fast.
   ============================================================ */

window.DPI_RESOURCES = [
  {
    title: 'The Universal DPI Safeguards Framework',
    type: 'Key output · v1.0, Sept 2024',
    desc: 'Principles and practices covering the full DPI lifecycle, with an interactive knowledge library.',
    phase: [], authority: [], topic: ['Framework'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/about/getting-started/key-outputs/the-universal-dpi-safeguards-framework'
  },
  {
    title: 'A Guide to Building Safe and Inclusive DPI for Societies',
    type: 'Key output · Sept 2024',
    desc: 'A practical starting point for turning safeguard principles into action on the ground.',
    phase: ['L1', 'L2'], authority: [], topic: ['Framework'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/about/getting-started/key-outputs/a-guide-to-building-safe-and-inclusive-dpi-for-societies'
  },
  {
    title: 'Interim Report: Leveraging DPI for Safe and Inclusive Societies',
    type: 'Key output · Apr 2024',
    desc: 'Early findings and direction on how DPI can be leveraged for safe and inclusive societies.',
    phase: ['L1'], authority: [], topic: ['Framework'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/about/getting-started/key-outputs/interim-report-leveraging-dpi-for-safe-and-inclusive-societies'
  },
  {
    title: "Lesotho: Digital Public Infrastructure drive",
    type: 'Featured country story',
    desc: '“Building better for every child.” A national DPI drive with safeguards considered from the start.',
    phase: ['L4', 'L5'], authority: ['R1'], topic: ['Digital ID', 'Inclusion'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/country-impementation/country-implementation-1/country-implementation-journey/lesotho-digital-public-infrastructure-drive'
  },
  {
    title: 'Malawi: Implementing safeguards in practice',
    type: 'Featured country story',
    desc: 'How Malawi is implementing offline Digital ID to strengthen inclusion.',
    phase: ['L4', 'L5'], authority: ['R1'], topic: ['Digital ID', 'Inclusion'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/country-impementation/country-implementation-1/country-implementation-journey/malawi-implementing-safeguards-in-practice'
  },
  {
    title: 'Brazil — financial inclusion and climate goals',
    type: 'Implementation around the world',
    desc: 'PIX instant payments (140M+ users) and the Rural Environment Registry, built on safe and inclusive DPI principles.',
    phase: ['L5'], authority: ['R1', 'R4'], topic: ['Payments', 'Climate'],
    link: 'https://safedpi.gitbook.io/safeguards/country-implementation/implementation-around-the-world/brazil'
  },
  {
    title: 'Dominican Republic — Data Strategy Action Plan',
    type: 'Implementation around the world',
    desc: 'Advancing digital infrastructure with the X-Road digital public good, with civil society participation throughout.',
    phase: ['L2'], authority: ['R1', 'R5'], topic: ['Data exchange', 'Equity'],
    link: 'https://safedpi.gitbook.io/safeguards/country-implementation/implementation-around-the-world/dominican-republic'
  },
  {
    title: 'Ethiopia — digital IDs for refugees',
    type: 'Implementation around the world',
    desc: 'The Fayda digital ID extends access to bank accounts, schooling and business registration for refugees and host communities.',
    phase: ['L4'], authority: ['R1'], topic: ['Digital ID', 'Inclusion'],
    link: 'https://safedpi.gitbook.io/safeguards/country-implementation/implementation-around-the-world/ethiopia'
  },
  {
    title: 'Finland — X-Road data exchange',
    type: 'Implementation around the world',
    desc: 'An open-source data exchange layer connecting 800+ public digital services for secure government–citizen interactions.',
    phase: ['L5'], authority: ['R4'], topic: ['Data exchange'],
    link: 'https://safedpi.gitbook.io/safeguards/country-implementation/implementation-around-the-world/finland'
  },
  {
    title: 'India — VISTAAR for agriculture',
    type: 'Implementation around the world',
    desc: 'Built on OpenAgrinet, using AI tools and multilingual support to help farmers adopt sustainable practices.',
    phase: ['L4'], authority: ['R1', 'R4'], topic: ['Agriculture'],
    link: 'https://safedpi.gitbook.io/safeguards/country-implementation/implementation-around-the-world/india'
  },
  {
    title: 'Nigeria — civil registration and digital ID',
    type: 'Implementation around the world',
    desc: 'Linking civil registration with digital IDs to improve health outcomes, committing to Universal DPI Safeguards.',
    phase: ['L4'], authority: ['R1'], topic: ['Digital ID', 'Civil registration'],
    link: 'https://safedpi.gitbook.io/safeguards/country-implementation/implementation-around-the-world/nigeria'
  },
  {
    title: 'Rwanda — eKash digital payments',
    type: 'Implementation around the world',
    desc: 'Enhanced with open-source Mojaloop, eKash now serves 9M+ users with equitable, sustainable payments.',
    phase: ['L5'], authority: ['R4'], topic: ['Payments'],
    link: 'https://safedpi.gitbook.io/safeguards/country-implementation/implementation-around-the-world/rwanda'
  },
  {
    title: 'Somalia — secure, inclusive digital IDs',
    type: 'Implementation around the world',
    desc: 'Relaunching national digital identity for 15M citizens, protecting civil liberties and reaching internally displaced persons.',
    phase: ['L2', 'L3'], authority: ['R1'], topic: ['Digital ID'],
    link: 'https://safedpi.gitbook.io/safeguards/country-implementation/implementation-around-the-world/somalia'
  },
  {
    title: 'Trinidad and Tobago — governance assessment',
    type: 'Implementation around the world',
    desc: 'A multi-stakeholder governance assessment identifies gaps and implements safeguards, boosting climate resilience.',
    phase: ['L2'], authority: ['R2'], topic: ['Governance', 'Climate'],
    link: 'https://safedpi.gitbook.io/safeguards/country-implementation/implementation-around-the-world/trinidad-and-tobago'
  },
  {
    title: 'Uruguay — whole-of-society approach',
    type: 'Implementation around the world',
    desc: 'Integrating DPI Safeguards across health and education through inclusive institutions.',
    phase: ['L5'], authority: ['R1', 'R5'], topic: ['Governance'],
    link: 'https://safedpi.gitbook.io/safeguards/country-implementation/implementation-around-the-world/uruguay'
  },
  {
    title: 'Adoption Pathways',
    type: 'Toolkits & resources',
    desc: 'Practical pathways to guide countries through adopting the framework.',
    phase: ['L1', 'L2'], authority: [], topic: ['Implementation'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/country-impementation/country-implementation-1/toolkits-and-resources/adoption-pathways'
  },
  {
    title: 'Outcomes and Indicators Library',
    type: 'Toolkits & resources',
    desc: 'A library of outcomes and indicators to help monitor safeguards implementation.',
    phase: ['L5'], authority: [], topic: ['Monitoring'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/country-impementation/country-implementation-1/toolkits-and-resources/outcomes-and-indicators-library'
  },
  {
    title: 'Convening Toolkit',
    type: 'Ecosystem engagement',
    desc: 'Resources and guidance for organizing your own local discussions on DPI safeguards.',
    phase: [], authority: ['R5'], topic: ['Community'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/ecosystem-engagement/ecosystem-engagement-1/convening-toolkit'
  },
  {
    title: 'Curated Resources',
    type: 'Additional resources',
    desc: 'A curated collection of further reading and reference material.',
    phase: [], authority: [], topic: ['Reference'],
    link: 'https://dpisafeguards.gitbook.io/resources-hub/additional-resources-and-information/additional-resources-and-information/curated-resources'
  }
];

window.DPI_TAXONOMY = {
  phases: [
    { code: 'L1', name: 'Conception & Scoping' },
    { code: 'L2', name: 'Strategy & Design' },
    { code: 'L3', name: 'Development' },
    { code: 'L4', name: 'Deployment & Transformation' },
    { code: 'L5', name: 'Operations & Maintenance' }
  ],
  authorities: [
    { code: 'R1', name: 'Government' },
    { code: 'R2', name: 'Regulator' },
    { code: 'R3', name: 'Donor' },
    { code: 'R4', name: 'Technology Provider' },
    { code: 'R5', name: 'Advocates' }
  ]
};
