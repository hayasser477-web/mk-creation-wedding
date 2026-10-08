import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      navbar: {
        maison: "LA MAISON",
        collection: "COLLECTION",
        style: "TROUVEZ VOTRE STYLE",
        mariage: "MARIAGE",
        contact: "CONTACT",
        cart: "PANIER",
        items: "article(s)",
        openMenu: "Ouvrir le menu",
        closeMenu: "Fermer le menu",
        mainNavigation: "Navigation principale",
        mobileNavigation: "Menu mobile",
        footerTagline: "MAISON • ÉLÉGANCE • CRÉATION",
      },

      hero: {
        eyebrow: "MK CREATIONS WEDDING",
        titleLine1: "L’héritage algérien",
        titleEmphasis: "réinventé avec élégance.",
        description:
          "Des créations inspirées de notre héritage, pensées pour les femmes qui recherchent caractère, élégance et raffinement.",
        link: "DÉCOUVRIR LA COLLECTION",
        imageAlt: "Création MK",
        scroll: "SCROLL",
      },
      maison: {
  eyebrow: "NOTRE MAISON",

  titleLine1: "L’âme d’une maison",
  titleEmphasis: "algérienne.",

  chapter1: {
    label: "NOTRE SAVOIR-FAIRE",
    title: "L’héritage algérien,|sublimé",
    text:
      "MK CREATION WEDDING célèbre la richesse du patrimoine algérien à travers des créations pensées pour les femmes qui recherchent élégance, caractère et raffinement.",
  },

  chapter2: {
    label: "NOTRE HISTOIRE",
    title: "Une passion|née en Algérie",
    text:
      "Née d’un amour profond pour la beauté et le savoir-faire algérien, MK CREATION WEDDING imagine des pièces où tradition et élégance contemporaine se rencontrent.",
  },

  chapter3: {
    label: "NOTRE SIGNATURE",
    title: "L’élégance|dans chaque détail",
    text:
      "Des matières choisies avec soin, des détails travaillés et des silhouettes inspirées de l’héritage algérien pour créer des tenues qui marquent les moments les plus précieux.",
  },

  chapter4: {
    label: "NOTRE VISION",
    title: "Faire rayonner|notre héritage",
    text:
      "Préserver l’âme de nos traditions tout en leur donnant une expression moderne, élégante et intemporelle, ici en France comme au-delà des frontières.",
  },
},
cta: {
  eyebrow: "VOTRE HISTOIRE COMMENCE ICI",
  titleLine1: "Inscrivez votre moment",
  titleEmphasis: "dans l’élégance.",

  collection: {
    tag: "EXPOSITION & HAUTE COUTURE",
    title: "Découvrir la Collection",
    text: "Laissez-vous séduire par des pièces d'exception où le savoir-faire algérien rencontre le raffinement moderne.",
    button: "Explorer les créations",
  },

  contact: {
    tag: "ÉCHANGE PRIVÉ & INFORMATIONS",
    title: "Nous Contacter",
    text: "Une question sur nos créations ou envie d'échanger sur votre projet ? Retrouvez toutes nos coordonnées et nos liens directs ci-dessous.",
    button: "Découvrir nos coordonnées",
  },
},
mariage: {
  hero: {
    imageAlt: "Tenue traditionnelle algérienne élégante pour mariage",
    titleLine1: "Votre moment",
    titleEmphasis: "mérite une tenue",
    titleLine3: "d’exception.",
    occasions: "Mariage · Fiançailles · Henna · Soirée · Événement",
    button: "DÉCOUVRIR LES CRÉATIONS",
    scroll: "SCROLL",
  },

  intro: {
    eyebrow: "VOTRE OCCASION",
    titleLine1: "Chaque moment",
    titleEmphasis: "mérite son élégance.",
  },
},
testimonials: {
  eyebrow: "L’EXPÉRIENCE MK CREATION",
  titleLine1: "Paroles",
  titleEmphasis: "de femmes.",
  side: "CE QU’ELLES RETIENNENT",

  occasions: {
    Mariage: "Mariage",
    Henna: "Henna",
    Fiançailles: "Fiançailles",
    Soirée: "Soirée",
  },

  imageAlt: "{{name}} — {{occasion}}",

  pagination: "Témoignage {{number}}",
  previous: "Témoignage précédent",
  next: "Témoignage suivant",
},
footer: {
  topLineMaison: "LA MAISON",
  sloganLine1: "L’héritage algérien.",
  sloganLine2: "L’élégance, sans frontières.",
  sections: {
    laMaison: "LA MAISON",
    assistance: "ASSISTANCE",
    informations: "INFORMATIONS",
    followUs: "SUIVEZ-NOUS",
  },
  links: {
    home: "Accueil",
    weddingEvents: "Mariage & Événements",
    collection: "La Collection",
    ourHouse: "Notre Maison",
    faq: "Foire aux questions",
    terms: "Conditions générales",
    privacy: "Politique de confidentialité",
    legal: "Mentions légales",
  },
  madeWithElegance: "FAIT AVEC ÉLÉGANCE",
  locations: "FRANCE · ALGÉRIE",
  backToTop: "Retour en haut",
},
faq: {
  hero: {
    eyebrow: "LE SAVOIR-FAIRE · LES RÉPONSES",
    titleLine1: "Vos questions.",
    titleLine2: "Nos réponses.",
    descriptionLine1: "Tout ce qu’il faut savoir avant",
    descriptionLine2: "de découvrir votre prochaine création.",
    scroll: "SCROLL POUR DÉCOUVRIR",
    questionsCount: "04 QUESTIONS",
  },
  intro: {
    eyebrow: "AVANT VOTRE CRÉATION",
    titleLine1: "Quelques réponses",
    titleLine2: "avant votre choix.",
    description:
      "Parce qu’une belle expérience commence aussi par des réponses claires. Retrouvez ici les informations essentielles concernant nos livraisons et la disponibilité de nos créations.",
  },
  list: {
    sideLabel: "INFORMATIONS",
    answerLabel: "RÉPONSE",
  },
  q1: {
    question: "Est-ce que vous livrez en Algérie ?",
    answerLine1: "Oui",
    answerLine2:
      "Nous livrons en Algérie. Les dates de livraison peuvent varier et nous communiquons régulièrement les prochaines dates de descente en Algérie.",
  },
  q2: {
    question:
      "Est-ce que tous les modèles sont disponibles en Algérie et en France ?",
    answerPart1: "Non. Certains modèles sont disponibles uniquement en France",
    answerPart2: "d’autres uniquement en Algérie",
    answerPart3: "et certains sont disponibles dans les deux pays.",
  },
  q3: {
    question: "Combien coûtent les frais de livraison en Algérie ?",
    answerPart1:
      "Les frais de livraison dépendent de la wilaya. Ils sont généralement compris entre",
    price1: "800 DA",
    and: "et",
    price2: "1 500 DA",
  },
  q4: {
    question: "Est-ce que vous livrez uniquement en France et en Algérie ?",
    answerLine1: "Non",
    answerLine2:
      "Nous livrons dans le monde entier. Les frais et délais de livraison dépendent du pays de destination.",
  },
  end: {
    eyebrow: "UNE DERNIÈRE QUESTION ?",
    titleLine1: "Votre histoire",
    titleLine2: "commence ici.",
    button: "Découvrir les créations",
  },
},
cgv: {
  hero: {
    eyebrow: "LÉGALITÉ · ENGAGEMENT · ÉLÉGANCE",
    titleLine1: "Conditions",
    titleLine2: "générales.",
    descriptionLine1: "Les engagements et règles régissant nos prestations",
    descriptionLine2: "et créations Haute Couture.",
    discover: "DÉCOUVRIR NOS CONDITIONS",
    articlesCount: "06 ARTICLES",
  },
  intro: {
    eyebrow: "TRANSPARENCE & RÉGLEMENTATION",
    titleLine1: "Cadre de nos",
    titleLine2: "prestations.",
    description:
      "Afin de vous garantir une expérience d’exception, nous définissons ici le cadre juridique et commercial de la confection, de la réservation et de la livraison de nos créations.",
  },
  list: {
    sideLabel: "CADRE LÉGAL",
  },
  articles: {
    a1: {
      title: "Objet & Champ d’Application",
      part1: "Les présentes Conditions Générales de Vente régissent l’ensemble des relations entre la maison",
      part2: "et ses clientes. Toute commande ou réservation effectuée implique l’acceptation pleine et entière des présentes conditions.",
    },
    a2: {
      title: "Commandes & Créations Sur-Mesure",
      content:
        "Nos pièces Haute Couture et robes de mariée étant confectionnées sur-mesure ou en séries très limitées, la commande devient définitive dès la validation du devis et le versement de l'acompte convenu. Aucune annulation ne sera acceptée une fois la confection entamée.",
    },
    a3: {
      title: "Tarifs & Modalités de Paiement",
      part1: "Les prix sont indiqués en Euro",
      curr1: "€",
      part2: "et/ou Dinar Algérien",
      curr2: "DA",
      part3: "selon la destination. Le règlement s'effectue selon les modalités convenues lors du premier rendez-vous ou de l'échange privé (virement, espèces ou paiement sécurisé).",
    },
    a4: {
      title: "Livraisons & Délais (France & Algérie)",
      part1: "Nous assurons des livraisons régulières en Algérie",
      part2: "et en France",
      part3: "ainsi qu’à l’international",
      part4: "Les délais de livraison vous sont communiqués lors de la confirmation de commande. La maison ne saurait être tenue responsable des retards liés aux douanes ou transporteurs externes.",
    },
    a5: {
      title: "Retours & Rétractation",
      part1: "Conformément à la réglementation sur les articles confectionnés sur-mesure et personnalisés, les créations",
      part2: "ne bénéficient pas d’un droit de rétractation, ni de retour ou d’échange, sauf défaut majeur constaté à la réception.",
    },
    a6: {
      title: "Propriété Intellectuelle",
      part1: "L'ensemble des modèles, croquis, photographies et éléments visuels présents sur nos supports restent la propriété exclusive de la maison",
      part2: "Toute reproduction même partielle est strictement interdite.",
    },
  },
},
privacy: {
  hero: {
    eyebrow: "PROTECTION · DISCRÉTION · SÉCURITÉ",
    titleLine1: "Politique de",
    titleLine2: "confidentialité.",
    descriptionLine1: "La protection de vos données personnelles est au cœur de notre engagement",
    descriptionLine2: "de discrétion et de confiance.",
    discover: "DÉCOUVRIR NOS ENGAGEMENTS",
    articlesCount: "06 ARTICLES",
  },
  intro: {
    eyebrow: "DISCRÉTION & RESPECT DE LA VIE PRIVÉE",
    titleLine1: "Votre confiance,",
    titleLine2: "notre priorité.",
    description:
      "Parce que la confection d'une tenue Haute Couture repose sur une relation de confiance intime et privilégiée, nous nous engageons à préserver la confidentialité de toutes les informations que vous nous confiez.",
  },
  list: {
    sideLabel: "PROTECTION",
  },
  sections: {
    s1: {
      title: "Collecte des Données Personnelles",
      part1: "Dans le cadre de votre expérience avec",
      part2: "nous collectons les informations nécessaires à la confection et au suivi de vos commandes (nom, prénom, adresse e-mail, numéro de téléphone, adresse de livraison en France",
      part3: "ou en Algérie",
      part4: ", ainsi que vos mensurations pour les créations sur-mesure).",
    },
    s2: {
      title: "Utilisation de vos Informations",
      part1: "Vos données sont exclusivement utilisées pour la gestion de vos rendez-vous d'essayage, la confection de vos tenues, l'expédition de vos commandes et la communication d'informations relatives à vos créations. Vos données ne sont",
      bold: "jamais vendues ni cédées",
      part2: "à des tiers à des fins commerciales.",
    },
    s3: {
      title: "Protection & Sécurité",
      content:
        "Nous appliquons des mesures de sécurité strictes afin de protéger vos informations personnelles contre tout accès non autorisé, altération ou divulgation. L'accès à vos données est strictement limité aux membres habilités de la maison.",
    },
    s4: {
      title: "Gestion des Cookies",
      content:
        "Notre site utilise des cookies essentiels au bon fonctionnement de votre navigation et à l'amélioration de votre expérience utilisateur. Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies non essentiels.",
    },
    s5: {
      title: "Durée de Conservation",
      content:
        "Vos données personnelles ne sont conservées que pendant la durée strictly nécessaire à la réalisation des prestations souscrites et au respect de nos obligations légales et comptables.",
    },
    s6: {
      title: "Vos Droits & Contact (RGPD)",
      content:
        "Conformément à la réglementation sur la protection des données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer vos droits, vous pouvez nous contacter directement par e-mail ou via nos canaux officiels.",
    },
  },
},
legal: {
  hero: {
    eyebrow: "MK CREATION WEDDING · INFORMATIONS",
    titleLine1: "Mentions",
    titleLine2: "légales.",
    discover: "DÉCOUVRIR",
    infoReg: "INFORMATIONS RÉGLEMENTAIRES",
    articlesCount: "10 ARTICLES",
  },
  intro: {
    eyebrow: "INFORMATIONS GÉNÉRALES",
    titleLine1: "Les informations essentielles",
    titleLine2: "relatives à ce site.",
    description:
      "Cette page présente les principales informations concernant l’utilisation du site, ses contenus, ses services et les conditions générales de sa consultation.",
  },
  list: {
    sideLabel: "RÉGLEMENTATION",
  },
  sections: {
    s1: {
      tag: "INFORMATIONS",
      title: "Informations générales",
      part1:
        "Les présentes mentions légales ont pour objectif de présenter les règles générales relatives à l’utilisation de ce site et de préciser les conditions dans lesquelles les visiteurs peuvent accéder à ses contenus et services.",
      part2:
        "L’accès et l’utilisation du site impliquent l’acceptation des présentes mentions légales ainsi que des conditions applicables aux différents services proposés.",
    },
    s2: {
      tag: "ÉDITEUR",
      title: "Éditeur du site",
      part1:
        "Le site est édité et administré par son propriétaire, qui assure sa gestion, son fonctionnement et la mise à disposition des contenus présentés aux visiteurs.",
      part2:
        "Les informations présentes sur le site sont publiées dans le but de présenter les produits, services, informations et contenus proposés aux utilisateurs.",
    },
    s3: {
      tag: "HÉBERGEMENT",
      title: "Hébergement du site",
      part1:
        "Le site est accessible grâce à une solution d’hébergement permettant de stocker et de rendre disponibles ses différents contenus sur Internet.",
      part2:
        "L’hébergeur assure notamment les services techniques nécessaires au fonctionnement et à l’accessibilité du site.",
    },
    s4: {
      tag: "CONTENUS",
      title: "Propriété intellectuelle",
      part1:
        "L’ensemble des éléments présents sur ce site, notamment les textes, photographies, images, logos, illustrations, créations graphiques, vidéos, éléments visuels et contenus éditoriaux, constitue un ensemble protégé par les règles relatives à la propriété intellectuelle.",
      part2:
        "Toute reproduction, représentation, copie, modification, adaptation ou utilisation, totale ou partielle, des contenus du site sans autorisation préalable est susceptible d’être interdite.",
      part3:
        "Les contenus présents sur le site ne peuvent être utilisés à des fins commerciales ou personnelles d’une manière portant atteinte aux droits de leur propriétaire.",
    },
    s5: {
      tag: "UTILISATION",
      title: "Responsabilité",
      part1:
        "Les informations publiées sur le site sont fournies dans un objectif informatif et peuvent être modifiées, mises à jour ou supprimées à tout moment.",
      part2:
        "Des efforts sont réalisés afin de maintenir des informations aussi précises et actualisées que possible.",
      part3:
        "Toutefois, aucune garantie absolue ne peut être donnée concernant l’exactitude, l’exhaustivité ou la disponibilité permanente de l’ensemble des contenus.",
      part4: "L’utilisation du site relève de la responsabilité de chaque utilisateur.",
    },
    s6: {
      tag: "ACCESSIBILITÉ",
      title: "Disponibilité du site",
      part1:
        "Le site est destiné à être accessible de manière continue, mais certaines interruptions peuvent survenir notamment en raison de travaux de maintenance, de mises à jour, de problèmes techniques ou de circonstances indépendantes de la volonté de l’éditeur.",
      part2:
        "L’accès à certaines fonctionnalités peut également être temporairement limité ou interrompu afin d’assurer la maintenance et l’amélioration du site.",
    },
    s7: {
      tag: "NAVIGATION",
      title: "Liens externes",
      part1:
        "Le site peut contenir des liens permettant d’accéder à des sites, plateformes ou services externes.",
      part2:
        "Ces liens sont proposés afin de faciliter la navigation et l’accès à certaines informations complémentaires.",
      part3:
        "Les sites externes disposent de leurs propres conditions d’utilisation et politiques de confidentialité.",
      part4:
        "L’éditeur du présent site ne peut être tenu responsable de leur contenu, de leur fonctionnement ou de leurs pratiques.",
    },
    s8: {
      tag: "CADRE JURIDIQUE",
      title: "Droit applicable",
      part1:
        "Les présentes mentions légales sont interprétées conformément aux règles et dispositions légales applicables.",
      part2:
        "En cas de difficulté concernant l’utilisation du site ou son contenu, une solution amiable est privilégiée avant toute autre démarche.",
    },
    s9: {
      tag: "MISE À JOUR",
      title: "Modification des mentions",
      part1:
        "Les présentes mentions légales peuvent être modifiées ou mises à jour à tout moment afin de tenir compte de l’évolution du site, de ses services ou des dispositions applicables.",
      part2:
        "La version publiée sur le site constitue la version en vigueur au moment de sa consultation.",
    },
    s10: {
      tag: "CONTACT",
      title: "Nous contacter",
      content:
        "Pour toute question, demande d’information ou remarque concernant le site, son contenu ou les présentes mentions légales, les utilisateurs peuvent contacter l’équipe responsable du site par les moyens de communication mis à leur disposition.",
    },
  },
},
collection: {
  heroLine1: "La collection",
  heroEmphasis: "comme une signature.",
  heroDescription:
    "Découvrez nos créations à travers une expérience pensée comme un véritable showroom couture.",

  navigationEyebrow: "COLLECTION",
  navigationText: "Choisissez votre destination.",

  filters: {
    algeria: "ALGÉRIE",
    france: "FRANCE",
    world: "MONDE",
    all: "TOUTES",
  },

  showcaseTitleLine1: "Des pièces",
  showcaseTitleEmphasis: "faites pour marquer.",

  productDescription:
    "Une création pensée dans les moindres détails, entre héritage algérien et élégance contemporaine.",

  addToCart: "AJOUTER AU PANIER",
  delivery: "Disponibilité selon destination",
  close: "Fermer",
},
style: {
  hero: {
    titleLine1: "Trouvez votre",
    titleEmphasis: "signature.",
    description:
      "Quelques questions suffisent pour révéler la création qui correspond à votre personnalité, à votre occasion et à votre vision de l’élégance.",
    button: "COMMENCER L’EXPÉRIENCE",
  },

  atelier: {
    eyebrow: "L’ATELIER MK",
    titleLine1: "Votre style.",
    titleEmphasis: "Votre histoire.",
  },

  questionLabel: "VOTRE SÉLECTION",

  questions: {
    model: {
      title: "Quel modèle recherchez-vous ?",
    },
    occasion: {
      title: "Pour quelle occasion ?",
    },
    personality: {
      title: "Quel style vous ressemble le plus ?",
    },
  },

  options: {
    Caftans: "Caftans",
    Karakou: "Karakou",
    Whrani: "Wahrani",
    Mlhfa: "Mlhfa",
    Frgani: "Fergani",
    autre: "Autre",

    Mariage: "Mariage",
    Fiançailles: "Fiançailles",
    Henna: "Henna",
    Soirée: "Soirée",
    Réception: "Réception",

    Traditionnel: "Traditionnel",
    Élégant: "Élégant",
    Moderne: "Moderne",
    Royal: "Royal",
  },

  controls: {
    previous: "PRÉCÉDENT",
    next: "CONTINUER",
    result: "VOIR MON STYLE",
  },

  result: {
    eyebrow: "VOTRE SIGNATURE EST RÉVÉLÉE",
    titleLine1: "Votre élégance",
    titleEmphasis: "commence ici.",
    description:
      "Votre sélection nous permet de mieux comprendre votre univers. Découvrez maintenant les créations qui pourraient correspondre à votre style personnel.",

    model: "MODÈLE",
    occasion: "OCCASION",
    style: "STYLE",

    collectionButton: "DÉCOUVRIR LA COLLECTION",

    restart: "RECOMMENCER",

    recommendations: "CRÉATIONS SÉLECTIONNÉES",
    recommendationsDescription:
      "Selon vos réponses, voici les créations qui correspondent le mieux à votre style et à vos envies.",

    viewFullCollection: "VOIR TOUTE LA COLLECTION",
  },
},
cart: {
  firstName: "Prénom",
  lastName: "Nom",
  firstNamePlaceholder: "Votre prénom",
  lastNamePlaceholder: "Votre nom",

  phone: "Téléphone",
  phonePlaceholder: "Votre numéro de téléphone",

  country: "Pays",
  countryPlaceholder: "Sélectionnez votre pays",
  countrySearchPlaceholder: "Rechercher un pays...",
  loadingCountries: "Chargement des pays...",
  noCountries: "Aucun pays trouvé",

  city: "Ville",
  cityPlaceholder: "Saisissez votre ville",

  deliveryTitle: "Mode de livraison",
  bureau: "Point relais",
  home: "À domicile",

  product: "Création",
  selectedCreation: "CRÉATION SÉLECTIONNÉE",
  shipping: "Livraison",
  price: "Prix",
  total: "Total",

  formEyebrow: "VOS INFORMATIONS",
  formTitleLine1: "Finalisez votre",
  formTitleEmphasis: "commande",

  titleLine1: "Votre commande",
  titleEmphasis: "en quelques étapes.",

  description:
    "Complétez vos informations afin de finaliser votre commande.",

  eyebrow: "CHECKOUT",

  confirm: "CONFIRMER MA COMMANDE",

  emptyTitleLine1: "Votre panier",
  emptyTitleEmphasis: "est vide.",
  emptyDescription:
    "Découvrez nos créations et trouvez la pièce qui vous correspond.",
  discoverCollection: "DÉCOUVRIR LA COLLECTION",
},
thankYou: {
  eyebrow: "COMMANDE CONFIRMÉE",

  titleLine1: "Votre commande",

  titleEmphasis: "a bien été passée.",

  description:
    "Merci pour votre confiance. Votre commande a bien été enregistrée et notre équipe va maintenant la préparer avec le plus grand soin.",

  note:
    "L’équipe MK Creation Wedding vous contactera dans les prochaines heures afin de confirmer votre commande et les détails de livraison.",

  backHome: "RETOURNER À L’ACCUEIL",
},
    },
  },

  en: {
    translation: {
      navbar: {
        maison: "THE HOUSE",
        collection: "COLLECTION",
        style: "FIND YOUR STYLE",
        mariage: "WEDDING",
        contact: "CONTACT",
        cart: "BAG",
        items: "item(s)",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        mainNavigation: "Main navigation",
        mobileNavigation: "Mobile menu",
        footerTagline: "HOUSE • ELEGANCE • CREATION",
      },

      hero: {
        eyebrow: "MK CREATIONS WEDDING",
        titleLine1: "Algerian heritage",
        titleEmphasis: "reimagined with elegance.",
        description:
          "Creations inspired by our heritage, designed for women who seek character, elegance and refinement.",
        link: "DISCOVER THE COLLECTION",
        imageAlt: "MK Creation",
        scroll: "SCROLL",
      },
      maison: {
  eyebrow: "OUR HOUSE",

  titleLine1: "The soul of an",
  titleEmphasis: "Algerian house.",

  chapter1: {
    label: "OUR CRAFT",
    title: "Algerian heritage,|elevated",
    text:
      "MK CREATION WEDDING celebrates the richness of Algerian heritage through creations designed for women who seek elegance, character and refinement.",
  },

  chapter2: {
    label: "OUR STORY",
    title: "A passion|born in Algeria",
    text:
      "Born from a deep love for Algerian beauty and craftsmanship, MK CREATION WEDDING creates pieces where tradition meets contemporary elegance.",
  },

  chapter3: {
    label: "OUR SIGNATURE",
    title: "Elegance|in every detail",
    text:
      "Carefully selected materials, refined details and silhouettes inspired by Algerian heritage come together to create outfits made for the most precious moments.",
  },

  chapter4: {
    label: "OUR VISION",
    title: "Let our heritage|shine beyond borders",
    text:
      "Preserving the soul of our traditions while giving them a modern, elegant and timeless expression, in France and beyond.",
  },
},
cta: {
  eyebrow: "YOUR STORY BEGINS HERE",
  titleLine1: "Make your moment",
  titleEmphasis: "a statement of elegance.",

  collection: {
    tag: "EXHIBITION & HAUTE COUTURE",
    title: "Discover the Collection",
    text: "Explore exceptional pieces where Algerian craftsmanship meets modern refinement.",
    button: "Explore the creations",
  },

  contact: {
    tag: "PRIVATE EXCHANGE & INFORMATION",
    title: "Get in Touch",
    text: "Have a question about our creations or wish to discuss your project? Find all our contact details and direct links below.",
    button: "Discover our contact details",
  },
},
mariage: {
  hero: {
    imageAlt: "Elegant Algerian traditional dress for a wedding",
    titleLine1: "Your moment",
    titleEmphasis: "deserves a gown",
    titleLine3: "of distinction.",
    occasions: "Wedding · Engagement · Henna · Evening · Event",
    button: "DISCOVER THE CREATIONS",
    scroll: "SCROLL",
  },

  intro: {
    eyebrow: "YOUR OCCASION",
    titleLine1: "Every moment",
    titleEmphasis: "deserves its elegance.",
  },
},
testimonials: {
  eyebrow: "THE MK CREATION EXPERIENCE",
  titleLine1: "Words",
  titleEmphasis: "from women.",
  side: "WHAT THEY REMEMBER",

  occasions: {
    Mariage: "Wedding",
    Henna: "Henna",
    Fiançailles: "Engagement",
    Soirée: "Evening",
  },

  imageAlt: "{{name}} — {{occasion}}",

  pagination: "Testimonial {{number}}",
  previous: "Previous testimonial",
  next: "Next testimonial",
},
footer: {
  topLineMaison: "THE HOUSE",
  sloganLine1: "Algerian heritage.",
  sloganLine2: "Elegance, without borders.",
  sections: {
    laMaison: "THE HOUSE",
    assistance: "SUPPORT",
    informations: "INFORMATION",
    followUs: "FOLLOW US",
  },
  links: {
    home: "Home",
    weddingEvents: "Wedding & Events",
    collection: "The Collection",
    ourHouse: "Our House",
    faq: "Frequently asked questions",
    terms: "Terms & conditions",
    privacy: "Privacy policy",
    legal: "Legal notice",
  },
  madeWithElegance: "MADE WITH ELEGANCE",
  locations: "FRANCE · ALGERIA",
  backToTop: "Back to top",
},
faq: {
  hero: {
    eyebrow: "SAVOIR-FAIRE · ANSWERS",
    titleLine1: "Your questions.",
    titleLine2: "Our answers.",
    descriptionLine1: "Everything you need to know before",
    descriptionLine2: "discovering your next creation.",
    scroll: "SCROLL TO DISCOVER",
    questionsCount: "04 QUESTIONS",
  },
  intro: {
    eyebrow: "BEFORE YOUR CREATION",
    titleLine1: "A few answers",
    titleLine2: "before your choice.",
    description:
      "Because a great experience starts with clear answers. Find all essential information regarding our deliveries and the availability of our creations here.",
  },
  list: {
    sideLabel: "INFORMATION",
    answerLabel: "ANSWER",
  },
  q1: {
    question: "Do you deliver to Algeria?",
    answerLine1: "Yes",
    answerLine2:
      "We deliver to Algeria. Delivery dates may vary, and we regularly communicate upcoming delivery dates to Algeria.",
  },
  q2: {
    question: "Are all models available in both Algeria and France?",
    answerPart1: "No. Some models are available exclusively in France",
    answerPart2: "others exclusively in Algeria",
    answerPart3: "and some are available in both countries.",
  },
  q3: {
    question: "How much are the delivery fees in Algeria?",
    answerPart1:
      "Delivery fees depend on the wilaya. They generally range between",
    price1: "800 DZD",
    and: "and",
    price2: "1,500 DZD",
  },
  q4: {
    question: "Do you only deliver to France and Algeria?",
    answerLine1: "No",
    answerLine2:
      "We ship worldwide. Shipping costs and delivery times depend on the destination country.",
  },
  end: {
    eyebrow: "ONE LAST QUESTION?",
    titleLine1: "Your story",
    titleLine2: "starts here.",
    button: "Discover creations",
  },
},
cgv: {
  hero: {
    eyebrow: "LEGALITY · COMMITMENT · ELEGANCE",
    titleLine1: "General",
    titleLine2: "terms.",
    descriptionLine1: "The commitments and rules governing our services",
    descriptionLine2: "and Haute Couture creations.",
    discover: "DISCOVER OUR TERMS",
    articlesCount: "06 ARTICLES",
  },
  intro: {
    eyebrow: "TRANSPARENCY & REGULATION",
    titleLine1: "Framework of our",
    titleLine2: "services.",
    description:
      "To ensure an exceptional experience, we define here the legal and commercial framework for the tailoring, booking, and delivery of our creations.",
  },
  list: {
    sideLabel: "LEGAL FRAMEWORK",
  },
  articles: {
    a1: {
      title: "Subject & Scope",
      part1: "These General Terms and Conditions of Sale govern all relations between the house of",
      part2: "and its clients. Any order or booking placed implies full and unreserved acceptance of these terms.",
    },
    a2: {
      title: "Orders & Bespoke Creations",
      content:
        "As our Haute Couture pieces and wedding dresses are custom-made or produced in very limited series, orders become final upon quote validation and payment of the agreed deposit. No cancellation will be accepted once tailoring has commenced.",
    },
    a3: {
      title: "Pricing & Payment Terms",
      part1: "Prices are indicated in Euros",
      curr1: "€",
      part2: "and/or Algerian Dinars",
      curr2: "DZD",
      part3: "depending on destination. Payment is made according to the terms agreed during the first appointment or private exchange (wire transfer, cash, or secure payment).",
    },
    a4: {
      title: "Deliveries & Lead Times (France & Algeria)",
      part1: "We provide regular deliveries to Algeria",
      part2: "and France",
      part3: "as well as internationally",
      part4: "Delivery times are communicated upon order confirmation. The house cannot be held responsible for delays related to customs or external carriers.",
    },
    a5: {
      title: "Returns & Withdrawal",
      part1: "In accordance with regulations on custom-made and personalized items, creations from",
      part2: "do not qualify for a right of withdrawal, return, or exchange, except in the case of a major defect noted upon receipt.",
    },
    a6: {
      title: "Intellectual Property",
      part1: "All designs, sketches, photographs, and visual elements on our platforms remain the exclusive property of",
      part2: "Any reproduction, even partial, is strictly prohibited.",
    },
  },
},
privacy: {
  hero: {
    eyebrow: "PROTECTION · DISCRETION · SECURITY",
    titleLine1: "Privacy",
    titleLine2: "policy.",
    descriptionLine1: "Protecting your personal data is at the core of our commitment",
    descriptionLine2: "to discretion and trust.",
    discover: "DISCOVER OUR COMMITMENTS",
    articlesCount: "06 ARTICLES",
  },
  intro: {
    eyebrow: "DISCRETION & PRIVACY RESPECT",
    titleLine1: "Your trust,",
    titleLine2: "our priority.",
    description:
      "Because tailoring a Haute Couture garment rests on an intimate and privileged relationship of trust, we commit to protecting the confidentiality of all information you entrust to us.",
  },
  list: {
    sideLabel: "PROTECTION",
  },
  sections: {
    s1: {
      title: "Personal Data Collection",
      part1: "As part of your experience with",
      part2: "we collect the necessary information to tailor and fulfill your orders (full name, email address, phone number, shipping address in France",
      part3: "or Algeria",
      part4: ", as well as your measurements for custom creations).",
    },
    s2: {
      title: "Use of Your Information",
      part1: "Your data is exclusively used to manage your fitting appointments, tailor your garments, ship your orders, and communicate updates regarding your creations. Your data is",
      bold: "never sold or transferred",
      part2: "to third parties for commercial purposes.",
    },
    s3: {
      title: "Protection & Security",
      content:
        "We implement strict security measures to protect your personal information against unauthorized access, alteration, or disclosure. Access to your data is strictly limited to authorized house members.",
    },
    s4: {
      title: "Cookie Management",
      content:
        "Our website uses essential cookies for seamless navigation and to enhance your user experience. You can configure your browser at any time to reject non-essential cookies.",
    },
    s5: {
      title: "Data Retention Period",
      content:
        "Your personal data is retained only for as long as strictly necessary to complete the requested services and fulfill our legal and accounting obligations.",
    },
    s6: {
      title: "Your Rights & Contact (GDPR)",
      content:
        "In accordance with data protection regulations (GDPR), you have the right to access, rectify, erase, and transfer your data. To exercise your rights, you can contact us directly by email or through our official channels.",
    },
  },
},
legal: {
  hero: {
    eyebrow: "MK CREATION WEDDING · INFORMATION",
    titleLine1: "Legal",
    titleLine2: "notices.",
    discover: "DISCOVER",
    infoReg: "REGULATORY INFORMATION",
    articlesCount: "10 ARTICLES",
  },
  intro: {
    eyebrow: "GENERAL INFORMATION",
    titleLine1: "Essential information",
    titleLine2: "regarding this site.",
    description:
      "This page presents key information regarding the use of the website, its content, services, and general conditions for consultation.",
  },
  list: {
    sideLabel: "REGULATIONS",
  },
  sections: {
    s1: {
      tag: "INFORMATION",
      title: "General Information",
      part1:
        "These legal notices aim to present the general rules regarding the use of this website and specify the conditions under which visitors can access its content and services.",
      part2:
        "Access and use of the website imply full acceptance of these legal notices as well as applicable terms for offered services.",
    },
    s2: {
      tag: "PUBLISHER",
      title: "Website Publisher",
      part1:
        "The website is published and managed by its owner, who ensures its management, operation, and availability of presented content to visitors.",
      part2:
        "The information on the site is published to present products, services, information, and content offered to users.",
    },
    s3: {
      tag: "HOSTING",
      title: "Website Hosting",
      part1:
        "The site is accessible via a web hosting solution that allows storing and serving its content online.",
      part2:
        "The host provides necessary technical services for the proper functioning and availability of the site.",
    },
    s4: {
      tag: "CONTENT",
      title: "Intellectual Property",
      part1:
        "All elements present on this site, including texts, photographs, images, logos, illustrations, graphics, videos, visual elements, and editorial content, are protected under intellectual property regulations.",
      part2:
        "Any reproduction, representation, copy, modification, adaptation, or full or partial use of the content without prior permission is prohibited.",
      part3:
        "The contents on this site may not be used for commercial or personal purposes in a manner that infringes on the owner's rights.",
    },
    s5: {
      tag: "USAGE",
      title: "Limitation of Liability",
      part1:
        "Information published on this website is provided for informational purposes and may be modified, updated, or removed at any time.",
      part2:
        "Efforts are made to keep information as accurate and up to date as possible.",
      part3:
        "However, no absolute guarantee is given regarding accuracy, completeness, or continuous availability of all content.",
      part4: "Use of the site is the sole responsibility of each user.",
    },
    s6: {
      tag: "ACCESSIBILITY",
      title: "Website Availability",
      part1:
        "The website is intended to be available continuously, but interruptions may occur due to maintenance, updates, technical issues, or circumstances beyond control.",
      part2:
        "Access to certain features may also be temporarily restricted or interrupted to perform maintenance and improvements.",
    },
    s7: {
      tag: "NAVIGATION",
      title: "External Links",
      part1:
        "The website may contain links to external sites, platforms, or services.",
      part2:
        "These links are provided to facilitate navigation and access to additional information.",
      part3: "External sites have their own terms of use and privacy policies.",
      part4:
        "The publisher of this site cannot be held responsible for their content, operation, or practices.",
    },
    s8: {
      tag: "LEGAL FRAMEWORK",
      title: "Applicable Law",
      part1:
        "These legal notices are interpreted in accordance with applicable legal rules and provisions.",
      part2:
        "In case of any dispute or difficulty regarding the use of the site or its content, an amicable solution is preferred prior to any legal proceedings.",
    },
    s9: {
      tag: "UPDATES",
      title: "Modifications to Notices",
      part1:
        "These legal notices may be modified or updated at any time to reflect updates to the website, its services, or applicable rules.",
      part2:
        "The version published on the website constitutes the version currently in effect.",
    },
    s10: {
      tag: "CONTACT",
      title: "Contact Us",
      content:
        "For any question, information request, or feedback regarding the website, its content, or these legal notices, users may contact the team through available communication channels.",
    },
  },
},
collection: {
  heroLine1: "The collection",
  heroEmphasis: "as a signature.",
  heroDescription:
    "Discover our creations through an experience designed as a true couture showroom.",

  navigationEyebrow: "COLLECTION",
  navigationText: "Choose your destination.",

  filters: {
    algeria: "ALGERIA",
    france: "FRANCE",
    world: "WORLD",
    all: "ALL",
  },

  showcaseTitleLine1: "Pieces",
  showcaseTitleEmphasis: "made to be remembered.",

  productDescription:
    "A creation designed down to the finest detail, where Algerian heritage meets contemporary elegance.",

  addToCart: "ADD TO BAG",
  delivery: "Availability depends on destination",
  close: "Close",
},
style: {
  hero: {
    titleLine1: "Find your",
    titleEmphasis: "signature.",
    description:
      "A few questions are all it takes to reveal the creation that matches your personality, your occasion and your vision of elegance.",
    button: "START THE EXPERIENCE",
  },

  atelier: {
    eyebrow: "THE MK ATELIER",
    titleLine1: "Your style.",
    titleEmphasis: "Your story.",
  },

  questionLabel: "YOUR SELECTION",

  questions: {
    model: {
      title: "Which model are you looking for?",
    },
    occasion: {
      title: "What is the occasion?",
    },
    personality: {
      title: "Which style feels most like you?",
    },
  },

  options: {
    Caftans: "Caftans",
    Karakou: "Karakou",
    Whrani: "Wahrani",
    Mlhfa: "Mlhfa",
    Frgani: "Fergani",
    Autre: "Other",

    Mariage: "Wedding",
    Fiançailles: "Engagement",
    Henna: "Henna",
    Soirée: "Evening",
    Réception: "Reception",

    Traditionnel: "Traditional",
    Élégant: "Elegant",
    Moderne: "Modern",
    Royal: "Royal",
  },

  controls: {
    previous: "PREVIOUS",
    next: "CONTINUE",
    result: "SEE MY STYLE",
  },

  result: {
    eyebrow: "YOUR SIGNATURE IS REVEALED",
    titleLine1: "Your elegance",
    titleEmphasis: "begins here.",
    description:
      "Your selection helps us understand your world. Now discover the creations that could match your personal style.",

    model: "MODEL",
    occasion: "OCCASION",
    style: "STYLE",

    collectionButton: "DISCOVER THE COLLECTION",

    restart: "START AGAIN",

    recommendations: "SELECTED CREATIONS",
    recommendationsDescription:
      "Based on your answers, here are the creations that best match your style and preferences.",

    viewFullCollection: "VIEW FULL COLLECTION",
  },
},
cart: {
  firstName: "First name",
  lastName: "Last name",
  firstNamePlaceholder: "Your first name",
  lastNamePlaceholder: "Your last name",

  phone: "Phone number",
  phonePlaceholder: "Your phone number",

  country: "Country",
  countryPlaceholder: "Select your country",
  countrySearchPlaceholder: "Search for a country...",
  loadingCountries: "Loading countries...",
  noCountries: "No country found",

  city: "City",
  cityPlaceholder: "Enter your city",

  deliveryTitle: "Delivery method",
  bureau: "Pickup point",
  home: "Home delivery",

  product: "Creation",
  selectedCreation: "SELECTED CREATION",
  shipping: "Delivery",
  price: "Price",
  total: "Total",

  formEyebrow: "YOUR INFORMATION",
  formTitleLine1: "Complete your",
  formTitleEmphasis: "order",

  titleLine1: "Your order",
  titleEmphasis: "in just a few steps.",

  description:
    "Complete your information to finalize your order.",

  eyebrow: "CHECKOUT",

  confirm: "CONFIRM MY ORDER",

  emptyTitleLine1: "Your bag",
  emptyTitleEmphasis: "is empty.",
  emptyDescription:
    "Discover our creations and find the piece that feels right for you.",
  discoverCollection: "DISCOVER THE COLLECTION",
},
thankYou: {
  eyebrow: "ORDER CONFIRMED",
  titleLine1: "Your order",
  titleEmphasis: "has been placed.",
  description:
    "Thank you for your trust. Your order has been successfully received and our team will now prepare it with the greatest care.",
  note:
    "The MK Creation Wedding team will contact you within the next few hours to confirm your order and delivery details.",
  backHome: "RETURN TO HOME",
},
    },
  },
};

const savedLanguage = localStorage.getItem("language") || "fr";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "fr",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;