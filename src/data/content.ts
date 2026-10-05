export interface ServiceItem {
  id: string;
  category: 'iphone' | 'ipad' | 'accessories';
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageUrl: string;
  altText: string;
  googleMapsUrl: string;
  tag?: string;
}

export const COMPANY_DATA = {
  name: "Celtec.pro - Santa Maria",
  shortName: "Celtec.pro",
  logoUrl: "https://i.postimg.cc/gJBcxtms/images-removebg-preview-(1).png",
  slogan: "Assistência Técnica Especializada Apple e Produtos Premium com Procedência de Verdade.",
  credibilityStatement: "Nossos produtos vêm direto da distribuidora oficial Apple no Brasil! 🤝",
  address: "Rua Dr. Bozano, 1147 - 206G - Centro, Santa Maria - RS, 90015-003",
  addressShort: "Rua Dr. Bozano, 1147 - Sala 206G, Centro - Santa Maria/RS",
  businessHours: "Segunda a Sexta: 10:00 às 18:00",
  businessHoursShort: "Seg a Sex: 10:00 - 18:00",
  whatsappNumber: "055991708201",
  whatsappUrl: "https://wa.me/5555991708201?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Celtec.pro%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20o%20meu%20Apple!",
  phoneDisplay: "(55) 99170-8201",
  instagramUrl: "https://www.instagram.com/celtec.sm/",
  instagramHandle: "@celtec.sm",
  googleMapsLocationUrl: "https://www.google.com.br/maps/place/Celtec.pro+Santa+Maria/@-29.6871327,-53.8094901,17z/data=!3m1!4b1!4m6!3m5!1s0x9503cb01061ae033:0x16d0badd965cc025!8m2!3d-29.6871327!4d-53.8094901!16s%2Fg%2F11y0763zfc",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.756317540266!2d-53.81167882377317!3d-29.687132675103683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cb01061ae033%3A0x16d0badd965cc025!2sCeltec.pro%20Santa%20Maria!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
  videoUrl: "/video-celtec.mp4"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "iphone-repair-sales",
    category: "iphone",
    title: "Assistência Especializada & Venda de iPhone",
    subtitle: "Do iPhone 8 ao iPhone 16 Pro Max",
    description: "Assistência técnica com ferramental de precisão Apple, troca expressa de tela (retendo TrueTone), substituição de bateria com calibração e reparos complexos em placa lógica. Além disso, venda de iPhones novos lacrados e seminovos selecionados com procedência oficial Apple Brasil e garantia integral.",
    features: [
      "Troca de tela em até 40 minutos com preservação de TrueTone e FaceID",
      "Baterias de alta capacidade com ciclo certificado e saúde 100%",
      "Microssoldagem em placa lógica (reparo de curto, circuito de carga e áudio)",
      "Venda de iPhones lacrados e seminovos com laudo de procedência"
    ],
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TDtqb2ZXPE21tX6cH7QEAxu6iZYP3BNTY1j4az038fN5656p7kzEIrk7dzdiBUuIflABagabRYoR9Y9p70duCWkjcCOdQlPrQ0YWUiiUhxDf9rHdObWHUpaQlR94iEnn46uhs92wB1diU=w800-h600-k-no",
    altText: "Aparelhos iPhone novos e seminovos na vitrine da Celtec.pro Santa Maria",
    googleMapsUrl: "https://www.google.com.br/maps/place/Celtec.pro+Santa+Maria/@-29.6868927,-53.809557,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhAnbsP65d2VDQ5NDK49UAyC!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9TDtqb2ZXPE21tX6cH7QEAxu6iZYP3BNTY1j4az038fN5656p7kzEIrk7dzdiBUuIflABagabRYoR9Y9p70duCWkjcCOdQlPrQ0YWUiiUhxDf9rHdObWHUpaQlR94iEnn46uhs92wB1diU%3Dw203-h360-k-no!7i2160!8i3840!4m11!1m2!2m1!1sloja+de+iphone!3m7!1s0x9503cb01061ae033:0x16d0badd965cc025",
    tag: "Mais Procurado"
  },
  {
    id: "ipad-repair-sales",
    category: "ipad",
    title: "Assistência & Venda de iPad",
    subtitle: "iPad, iPad Air, iPad Mini e iPad Pro",
    description: "Manutenção avançada para toda a linha de iPads. Troca de telas laminadas, reparo em portas USB-C e Lightning, solução para problemas de carregamento e restauração de sistema operacional. Também comercializamos modelos novos e seminovos revisados para estudantes, desenhistas e profissionais.",
    features: [
      "Substituição de vidro touch e display Retina/Liquid Retina",
      "Troca de conector de carga (USB-C / Lightning) com blindagem original",
      "Recuperação de iPads que não ligam ou travam no logotipo da maçã",
      "Venda de iPads com suporte a Apple Pencil e Smart Keyboard"
    ],
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QN4qhWbFnEWJ0lhgLmEnFVUn5weljytb0IbfZCjO8Rqugdg0mZGiqxb5xPuAKmWjpoaMZpNq15ZJAaICeQVMdgyBXArlLnbuO3Q1mMrq3o-zqvc1TYq4FsclErylItEU6fQOjKDiUatso=w800-h600-k-no",
    altText: "iPad em exposição e bancada de reparo na Celtec.pro",
    googleMapsUrl: "https://www.google.com.br/maps/place/Celtec.pro+Santa+Maria/@-29.6868927,-53.809557,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhDdg-X5hqXufkMbyERimItD!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9QN4qhWbFnEWJ0lhgLmEnFVUn5weljytb0IbfZCjO8Rqugdg0mZGiqxb5xPuAKmWjpoaMZpNq15ZJAaICeQVMdgyBXArlLnbuO3Q1mMrq3o-zqvc1TYq4FsclErylItEU6fQOjKDiUatso%3Dw203-h270-k-no!7i3024!8i4032!4m11!1m2!2m1!1sloja+de+iphone!3m7!1s0x9503cb01061ae033:0x16d0badd965cc025",
    tag: "Produtividade Apple"
  },
  {
    id: "accessories-sales",
    category: "accessories",
    title: "Acessórios Originais & Premium",
    subtitle: "Proteção máxima e carregamento seguro",
    description: "Ampla linha de capas protetoras antichoque, cases com anel MagSafe magnético integrado, películas cerâmicas e de vidro temperado de cobertura total com aplicação profissional sem bolhas. Carregadores rápidos 20W e 35W homologados, cabos reforçados em nylon trançado e fones com pureza sonora.",
    features: [
      "Capas de silicone aveludado e acrílico anti-amarelamento MagSafe",
      "Películas 9D / Cerâmica / Privacidade aplicadas na hora",
      "Fontes de carregamento rápido 20W/35W com proteção contra sobretensão",
      "Cabos USB-C e Lightning certificados com malha ultra reforçada"
    ],
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T2mOnM75fNzQNnhcU_-rKdVRDp-A06RG-7qyQNvwNjYEx1P82W74MJ5TuYzJViWzsS5jvVyldCDeBN67gmuE5hAhR_jHWCC79rJMzJ7kQc6JJ6P1TmQ2jFcKfv1Jb4IqhGHX3q1-PNE7wd=w800-h600-k-no",
    altText: "Expositor de capas para celular iPhone na loja Celtec.pro",
    googleMapsUrl: "https://www.google.com.br/maps/place/Celtec.pro+Santa+Maria/@-29.6868927,-53.809557,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhC9uAGRRI30JD96w1bgMjPE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9T2mOnM75fNzQNnhcU_-rKdVRDp-A06RG-7qyQNvwNjYEx1P82W74MJ5TuYzJViWzsS5jvVyldCDeBN67gmuE5hAhR_jHWCC79rJMzJ7kQc6JJ6P1TmQ2jFcKfv1Jb4IqhGHX3q1-PNE7wd%3Dw203-h270-k-no!7i3024!8i4032!4m11!1m2!2m1!1sloja+de+iphone!3m7!1s0x9503cb01061ae033:0x16d0badd965cc025",
    tag: "Pronta Entrega"
  }
];

export const STORE_GALLERY = [
  {
    title: "Foto do Interior da Loja",
    description: "Ambiente acolhedor, climatizado e moderno com bancada de atendimento e laboratório de reparos.",
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q2GNa-lCZs-y0wJD0ScK3ho2HeOgFTbUCnT4UYH_c4YJuLJ6EYNuKF-AT1R1Bgm9pIfUs5lE-3DRKTN2MJLZUKCaPGlnaigxpjYhLdnQWjE9bLdPVhQXzUDSGqiElS1rFpapCcqeZKxnKO=w1000-h800-k-no",
    altText: "Interior da loja Celtec.pro em Santa Maria",
    mapsUrl: "https://www.google.com.br/maps/place/Celtec.pro+Santa+Maria/@-29.6868927,-53.809557,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhB8FE6OpyJHsTkrEGVhHXEE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9Q2GNa-lCZs-y0wJD0ScK3ho2HeOgFTbUCnT4UYH_c4YJuLJ6EYNuKF-AT1R1Bgm9pIfUs5lE-3DRKTN2MJLZUKCaPGlnaigxpjYhLdnQWjE9bLdPVhQXzUDSGqiElS1rFpapCcqeZKxnKO%3Dw203-h270-k-no!7i3024!8i4032!4m11!1m2!2m1!1sloja+de+iphone!3m7!1s0x9503cb01061ae033:0x16d0badd965cc025!8m2!3d-29.6871327!4d-53.8094901!10e5!15sCg5sb2phIGRlIGlwaG9uZVoQIg5sb2phIGRlIGlwaG9uZZIBEGNlbGxfcGhvbmVfc3RvcmWaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVaTTJKWGJIZE9SM0IxVGpKb05XTXllRU5SVkZKTVZqSk9kMDR4UlJBQuABAPoBBAgAECA!16s%2Fg%2F11y0763zfc"
  },
  {
    title: "Foto de 2 iPhones na Vitrine",
    description: "Aparelhos revisados e com procedência oficial garantida direto da distribuidora Apple Brasil.",
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TDtqb2ZXPE21tX6cH7QEAxu6iZYP3BNTY1j4az038fN5656p7kzEIrk7dzdiBUuIflABagabRYoR9Y9p70duCWkjcCOdQlPrQ0YWUiiUhxDf9rHdObWHUpaQlR94iEnn46uhs92wB1diU=w1000-h800-k-no",
    altText: "Dois iPhones em exposição na Celtec.pro",
    mapsUrl: "https://www.google.com.br/maps/place/Celtec.pro+Santa+Maria/@-29.6868927,-53.809557,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhAnbsP65d2VDQ5NDK49UAyC!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9TDtqb2ZXPE21tX6cH7QEAxu6iZYP3BNTY1j4az038fN5656p7kzEIrk7dzdiBUuIflABagabRYoR9Y9p70duCWkjcCOdQlPrQ0YWUiiUhxDf9rHdObWHUpaQlR94iEnn46uhs92wB1diU%3Dw203-h360-k-no!7i2160!8i3840!4m11!1m2!2m1!1sloja+de+iphone!3m7!1s0x9503cb01061ae033:0x16d0badd965cc025!8m2!3d-29.6871327!4d-53.8094901!10e5!15sCg5sb2phIGRlIGlwaG9uZVoQIg5sb2phIGRlIGlwaG9uZZIBEGNlbGxfcGhvbmVfc3RvcmWaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVaTTJKWGJIZE9SM0IxVGpKb05XTXllRU5SVkZKTVZqSk9kMDR4UlJBQuABAPoBBAgAECA!16s%2Fg%2F11y0763zfc"
  },
  {
    title: "Fotos do iPad em Exposição",
    description: "Modelos de iPad novos e seminovos prontos para estudos, design gráfico e produtividade.",
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QN4qhWbFnEWJ0lhgLmEnFVUn5weljytb0IbfZCjO8Rqugdg0mZGiqxb5xPuAKmWjpoaMZpNq15ZJAaICeQVMdgyBXArlLnbuO3Q1mMrq3o-zqvc1TYq4FsclErylItEU6fQOjKDiUatso=w1000-h800-k-no",
    altText: "iPads disponíveis na Celtec.pro",
    mapsUrl: "https://www.google.com.br/maps/place/Celtec.pro+Santa+Maria/@-29.6868927,-53.809557,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhDdg-X5hqXufkMbyERimItD!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9QN4qhWbFnEWJ0lhgLmEnFVUn5weljytb0IbfZCjO8Rqugdg0mZGiqxb5xPuAKmWjpoaMZpNq15ZJAaICeQVMdgyBXArlLnbuO3Q1mMrq3o-zqvc1TYq4FsclErylItEU6fQOjKDiUatso%3Dw203-h270-k-no!7i3024!8i4032!4m11!1m2!2m1!1sloja+de+iphone!3m7!1s0x9503cb01061ae033:0x16d0badd965cc025!8m2!3d-29.6871327!4d-53.8094901!10e5!15sCg5sb2phIGRlIGlwaG9uZVoQIg5sb2phIGRlIGlwaG9uZZIBEGNlbGxfcGhvbmVfc3RvcmWaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVaTTJKWGJIZE9SM0IxVGpKb05XTXllRU5SVkZKTVZqSk9kMDR4UlJBQuABAPoBBAgAECA!16s%2Fg%2F11y0763zfc"
  },
  {
    title: "Capa de Celular para iPhone & Acessórios",
    description: "Ampla variedade de capas com MagSafe, películas de privacidade, carregadores rápidos e cabos.",
    imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T2mOnM75fNzQNnhcU_-rKdVRDp-A06RG-7qyQNvwNjYEx1P82W74MJ5TuYzJViWzsS5jvVyldCDeBN67gmuE5hAhR_jHWCC79rJMzJ7kQc6JJ6P1TmQ2jFcKfv1Jb4IqhGHX3q1-PNE7wd=w1000-h800-k-no",
    altText: "Expositor de capas para celular iPhone na loja Celtec.pro",
    mapsUrl: "https://www.google.com.br/maps/place/Celtec.pro+Santa+Maria/@-29.6868927,-53.809557,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhC9uAGRRI30JD96w1bgMjPE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9T2mOnM75fNzQNnhcU_-rKdVRDp-A06RG-7qyQNvwNjYEx1P82W74MJ5TuYzJViWzsS5jvVyldCDeBN67gmuE5hAhR_jHWCC79rJMzJ7kQc6JJ6P1TmQ2jFcKfv1Jb4IqhGHX3q1-PNE7wd%3Dw203-h270-k-no!7i3024!8i4032!4m11!1m2!2m1!1sloja+de+iphone!3m7!1s0x9503cb01061ae033:0x16d0badd965cc025!8m2!3d-29.6871327!4d-53.8094901!10e5!15sCg5sb2phIGRlIGlwaG9uZVoQIg5sb2phIGRlIGlwaG9uZZIBEGNlbGxfcGhvbmVfc3RvcmWaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVaTTJKWGJIZE9SM0IxVGpKb05XTXllRU5SVkZKTVZqSk9kMDR4UlJBQuABAPoBBAgAECA!16s%2Fg%2F11y0763zfc"
  }
];

export const TESTIMONIALS = [
  {
    name: "Rafael Martins",
    role: "Cliente iPhone 14 Pro",
    comment: "Troquei a tela do meu iPhone 14 Pro na Celtec.pro em menos de 1 hora. A qualidade é idêntica à de fábrica e o TrueTone continuou funcionando perfeitamente. Atendimento nota 10 em Santa Maria!",
    stars: 5,
    date: "Há 2 semanas"
  },
  {
    name: "Bruna Albuquerque",
    role: "Cliente iPad Air & Acessórios",
    comment: "Comprei um iPad Air para a faculdade com eles. Aparelho impecável com procedência comprovada direto da distribuidora. Além disso, colocaram a película perfeitamente sem nenhuma bolha!",
    stars: 5,
    date: "Há 1 mês"
  },
  {
    name: "Guilherme Fontoura",
    role: "Cliente iPhone 12",
    comment: "Meu aparelho não ligava após uma queda e em outros lugares me disseram que a placa tinha morrido. O pessoal da Celtec fez o reparo na placa e recuperou tudo. Honestidade e competência rara!",
    stars: 5,
    date: "Há 3 semanas"
  }
];
