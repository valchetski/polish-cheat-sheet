export const prepositionsData = [
  {
    name: 'to',
    cases: ['mianownik']
  },
  {
    name: 'jak',
    cases: ['mianownik']
  },
  {
    name: 'jako',
    cases: ['mianownik']
  },
  {
    name: 'niby',
    cases: ['mianownik']
  },
  {
    name: 'spoza',
    cases: ['mianownik']
  },
  {
    name: 'według',
    cases: ['mianownik']
  },
  {
    name: 'zamiast',
    cases: ['mianownik']
  },
  {
    name: 'z(e)',
    cases: ['dopełniacz', 'narzędnik'],
    usage: {
      dopełniacz: {
        description: 'Kierunek, pochodzenie',
        examples: ['Wracam z pracy', 'Jestem z Polski' ]
      },
      narzędnik: {
        description: 'Towarzystwo, narzędzie',
        examples: ['Rozmawiam z bratem', 'Piję kawę z cukrem' ]
      }
    }
  },
  {
    name: 'bez',
    cases: ['dopełniacz'],
  },
  {
    name: 'dla',
    cases: ['dopełniacz'],
  },
  {
    name: 'do',
    cases: ['dopełniacz'],
  },
  {
    name: 'od',
    cases: ['dopełniacz'],
    usage: {
      dopełniacz: {
        description: 'Początek czasu, punkt startu czegoś, oddalenie, źródło pochodzenia zjawiska',
        examples: ['Od poniedziałku', 'Zacząć od zera', 'Odejść od domu', 'Światło od lampy' ]
      }
    }
  },
  {
    name: 'naprzeciw(ko)',
    cases: ['celownik'],
  },
  {
    name: 'dzięki',
    cases: ['celownik'],
  },
  {
    name: 'przeciw',
    cases: ['celownik'],
  },
  {
    name: 'o',
    cases: ['biernik', 'miejscownik'],
    usage: {
      biernik: {
        description: 'Czasowniki z silnym ładunkiem emocjonalnym. Ale są wyjątki!',
        examples: ['Pytać o drogę', 'Prosić o pomoc', 'Walczyć o źycie', 'Podejrzewać o zdradę', 'Dbać o zdrowie', 'Martwić/bać się o przyszłość', 'Kłócić się o pieniądze', 'Chodzi o to', 'Błagać o wybaczenie' ]
      },
      miejscownik: {
        description: 'Neutralne czasowniki. Bez mocnego ładunku emocjonalnego',
        examples: ['Myśleć o tobie', 'Czytać/pisać o kotach', 'Wiedzieć o problemie', 'Śnić o podróży', 'Rozmawiać o planach', 'Pamiętać o wizycie', 'Mówić o pogodzie' ]
      }
    }
  },
  {
    name: 'w(e)',
    cases: ['biernik', 'miejscownik'],
  },
  {
    name: 'po',
    cases: ['biernik', 'miejscownik'],
  },
  {
    name: 'na',
    cases: ['biernik', 'miejscownik'],
  },
  {
    name: 'po/między',
    cases: ['biernik', 'narzędnik'],
  },
  {
    name: 'pod',
    cases: ['biernik', 'narzędnik'],
  },
  {
    name: 'nad',
    cases: ['biernik', 'narzędnik'],
  },
  {
    name: 'przed(e)',
    cases: ['biernik', 'narzędnik'],
  }
];
