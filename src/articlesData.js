import React, { useState, useEffect } from 'react';
//import axios from 'axios';

//just using dummy data for now (code commented below to be used when APIs available)
const articlesData=[
  {
    "url": "https://www.businessinsider.com/mark-zuckerberg-passes-elon-musk-on-bloomberg-billionaires-index-2024-4",
    "authorsByline": "Lakshmi Varanasi",
    "articleId": "13113da0b4944f01b440457bc13f9ec4",
    "clusterId": "97836ac7d45a45a09b5b76465624a8ef",
    "source": {
      "domain": "businessinsider.com",
      "paywall": true,
      "location": null
    },
    "imageUrl": "https://i.insider.com/661179071caec1275a6d8814?width=1200&format=jpeg",
    "country": "us",
    "language": "en",
    "pubDate": "2024-04-06T16:46:16+00:00",
    "addDate": "2024-04-06T16:50:48.515372+00:00",
    "refreshDate": "2024-04-06T16:50:48.515376+00:00",
    "score": 1,
    "title": "Mark Zuckerberg moves ahead of Elon Musk on richest person list as Tesla falters",
    "description": "Mark Zuckerberg just overtook Elon Musk as the third richest person in the world according to Bloomberg's Billionaire Index.",
    "content": "There's a new round in the billionaire brawl between Mark Zuckerberg and Elon Musk — and this time, the Meta CEO is on top.Zuckerberg became the third richest person on the Bloomberg Billionaires Index on Friday, with a reported net worth of $187 billion. This is the first time Zuckerberg has broken into the ranking's top three since 2020, Fortune reported.Meanwhile, Musk, the Tesla CEO, has fallen to fourth place with a fortune of $181 billion.The news comes as Tesla sold just 386,800 cars in the first quarter of 2024, marking the company's first year-over-year sales drop in nearly four years. The company's shares fell more than 7% in early trading following the news, and the company's stock is down more than 34% since the start of 2024.With another $30 billion in the bank, Zuckerberg is approaching Amazon founder Jeff Bezos' level of wealth. Bezos has a net worth of $207 billion and is in second place, according to Bloomberg. LVMH CEO Bernard Arnault is in the top spot with a net worth of $223 billion.Zuckerberg and Musk are feuding about more than just their fortune.The tech execs have been at odds since 2016 when a SpaceX explosion destroyed a Facebook satellite. And their public rivalry heated up after Musk challenged Zuckerberg to a cage fight last year. Meta's launch of Threads, a rival social media platform to X, hasn't helped soften the tension between the two.",
    "medium": "Article",
    "links": [
      "https://www.insider-inc.com/privacy-policy",
      "https://www.insider-inc.com/terms",
      "https://www.businessinsider.com/elon-musk-mark-zuckerberg-cage-match-jiu-jitsu-2023-6",
      "https://www.businessinsider.com/meta",
      "https://www.businessinsider.com/subscription",
      "https://archive.ph/uTopZ",
      "https://www.businessinsider.com/mark-zuckerberg",
      "https://newsletter.businessinsider.com/view/65579c6e5b5522fe5f0e49b865983c9461121e31bb09345b/53db8e23",
      "https://www.businessinsider.com/tesla-ceo-elon-musk",
      "https://www.businessinsider.com/elon-musk-mark-zuckerberg-twitter-meta-cage-fight-2023-6",
      "https://www.businessinsider.com/tesla-sales-deliveries-q1-elon-musk-disappoint-fsd-2024-4",
      "https://www.bloomberg.com/billionaires/",
      "https://www.businessinsider.com/elon-musk"
    ],
    "labels": [],
    "matchedAuthors": [
      {
        "id": "2fd7dc61cc644a20b93accaea3d414da",
        "name": "Lakshmi Varanasi"
      }
    ],
    "claim": "",
    "verdict": "",
    "keywords": [
      {
        "name": "year",
        "weight": 0.15022019
      },
      {
        "name": "last year",
        "weight": 0.14663544
      },
      {
        "name": "second place",
        "weight": 0.11056502
      },
      {
        "name": "Bloomberg",
        "weight": 0.10855238
      },
      {
        "name": "fourth place",
        "weight": 0.091327064
      },
      {
        "name": "a reported net worth",
        "weight": 0.08575714
      },
      {
        "name": "Friday",
        "weight": 0.08182661
      },
      {
        "name": "second",
        "weight": 0.07537921
      },
      {
        "name": "the Bloomberg Billionaires Index",
        "weight": 0.07509597
      },
      {
        "name": "a net worth",
        "weight": 0.072083324
      }
    ],
    "topics": [
      {
        "name": "Business Leaders"
      }
    ],
    "categories": [
      {
        "name": "Auto"
      }
    ],
    "entities": [
      {
        "data": "Mark Zuckerberg",
        "type": "PERSON",
        "mentions": 7
      },
      {
        "data": "Elon Musk",
        "type": "PERSON",
        "mentions": 5
      },
      {
        "data": "Jeff Bezos",
        "type": "PERSON",
        "mentions": 2
      },
      {
        "data": "Bernard Arnault",
        "type": "PERSON",
        "mentions": 1
      },
      {
        "data": "Tesla",
        "type": "ORG",
        "mentions": 3
      },
      {
        "data": "Meta",
        "type": "ORG",
        "mentions": 2
      },
      {
        "data": "Fortune",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Amazon",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Bloomberg",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "LVMH",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "SpaceX",
        "type": "ORG",
        "mentions": 2
      },
      {
        "data": "Facebook",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Threads",
        "type": "PRODUCT",
        "mentions": 1
      }
    ],
    "companies": [
      {
        "id": "d6a5089d5dd14420a09e5ff62269ad29",
        "name": "Chan Zuckerberg Initiative",
        "domains": [
          "chanzuckerberg.com"
        ],
        "symbols": []
      },
      {
        "id": "cd7748b083b34b8591acc3cd8a32ab08",
        "name": "LVMH Moët Hennessy - Louis Vuitton, Société Européenne",
        "domains": [
          "lvmh.com"
        ],
        "symbols": [
          "MOH.DE",
          "MC.PA",
          "MC.SW",
          "LVMHF",
          "LVMUY"
        ]
      },
      {
        "id": "eeee660a046242b8bf99f45fdc95cc32",
        "name": "Tesla, Inc.",
        "domains": [
          "tesla.com"
        ],
        "symbols": [
          "TSLA",
          "TL0.DE"
        ]
      }
    ],
    "sentiment": {
      "positive": 0.022595394,
      "negative": 0.88944507,
      "neutral": 0.08795955
    },
    "summary": "Mark Zuckerberg, the Meta CEO, has topped the Bloomberg Billionaires Index with a reported net worth of $187 billion, making him the third richest person on the list. This is the first time Zuckerberg has broken into the top three since 2020. Meanwhile, Tesla CEO Elon Musk has dropped to fourth place with a fortune of $181 billion. This comes as Tesla struggles, with its first year-over-year sales drop in nearly four years. With another $30 billion in the bank, Zuckerberg is approaching Amazon founder Jeff Bezos' level of wealth. The two CEOs have been feuding since a SpaceX explosion destroyed a Facebook satellite in 2016, and their public rivalry began when Musk challenged Zuckerberg to a cage fight last year.",
    "translation": "",
    "translatedTitle": "",
    "translatedDescription": "",
    "translatedSummary": "",
    "locations": [],
    "reprint": false,
    "reprintGroupId": "3ef4002edcdf4aa896910d107800b3f2",
    "places": [],
    "people": [
      {
        "wikidataId": "Q312556",
        "name": "Jeff Bezos"
      },
      {
        "wikidataId": "Q32055",
        "name": "Bernard Arnault"
      },
      {
        "wikidataId": "Q317521",
        "name": "Elon Musk"
      },
      {
        "wikidataId": "Q36215",
        "name": "Mark Zuckerberg"
      }
    ]
  },
  {
    "url": "https://www.businessinsider.com/mark-zuckerberg-passes-elon-musk-on-bloomberg-billionaires-index-2024-4",
    "authorsByline": "Lakshmi Varanasi",
    "articleId": "13113da0b4944f01b440457bc13f9ec4",
    "clusterId": "97836ac7d45a45a09b5b76465624a8ef",
    "source": {
      "domain": "businessinsider.com",
      "paywall": true,
      "location": null
    },
    "imageUrl": "https://i.insider.com/661179071caec1275a6d8814?width=1200&format=jpeg",
    "country": "us",
    "language": "en",
    "pubDate": "2024-04-06T16:46:16+00:00",
    "addDate": "2024-04-06T16:50:48.515372+00:00",
    "refreshDate": "2024-04-06T16:50:48.515376+00:00",
    "score": 1,
    "title": "Mark Zuckerberg moves ahead of Elon Musk on richest person list as Tesla falters",
    "description": "Mark Zuckerberg just overtook Elon Musk as the third richest person in the world according to Bloomberg's Billionaire Index.",
    "content": "There's a new round in the billionaire brawl between Mark Zuckerberg and Elon Musk — and this time, the Meta CEO is on top.Zuckerberg became the third richest person on the Bloomberg Billionaires Index on Friday, with a reported net worth of $187 billion. This is the first time Zuckerberg has broken into the ranking's top three since 2020, Fortune reported.Meanwhile, Musk, the Tesla CEO, has fallen to fourth place with a fortune of $181 billion.The news comes as Tesla sold just 386,800 cars in the first quarter of 2024, marking the company's first year-over-year sales drop in nearly four years. The company's shares fell more than 7% in early trading following the news, and the company's stock is down more than 34% since the start of 2024.With another $30 billion in the bank, Zuckerberg is approaching Amazon founder Jeff Bezos' level of wealth. Bezos has a net worth of $207 billion and is in second place, according to Bloomberg. LVMH CEO Bernard Arnault is in the top spot with a net worth of $223 billion.Zuckerberg and Musk are feuding about more than just their fortune.The tech execs have been at odds since 2016 when a SpaceX explosion destroyed a Facebook satellite. And their public rivalry heated up after Musk challenged Zuckerberg to a cage fight last year. Meta's launch of Threads, a rival social media platform to X, hasn't helped soften the tension between the two.",
    "medium": "Article",
    "links": [
      "https://www.insider-inc.com/privacy-policy",
      "https://www.insider-inc.com/terms",
      "https://www.businessinsider.com/elon-musk-mark-zuckerberg-cage-match-jiu-jitsu-2023-6",
      "https://www.businessinsider.com/meta",
      "https://www.businessinsider.com/subscription",
      "https://archive.ph/uTopZ",
      "https://www.businessinsider.com/mark-zuckerberg",
      "https://newsletter.businessinsider.com/view/65579c6e5b5522fe5f0e49b865983c9461121e31bb09345b/53db8e23",
      "https://www.businessinsider.com/tesla-ceo-elon-musk",
      "https://www.businessinsider.com/elon-musk-mark-zuckerberg-twitter-meta-cage-fight-2023-6",
      "https://www.businessinsider.com/tesla-sales-deliveries-q1-elon-musk-disappoint-fsd-2024-4",
      "https://www.bloomberg.com/billionaires/",
      "https://www.businessinsider.com/elon-musk"
    ],
    "labels": [],
    "matchedAuthors": [
      {
        "id": "2fd7dc61cc644a20b93accaea3d414da",
        "name": "Lakshmi Varanasi"
      }
    ],
    "claim": "",
    "verdict": "",
    "keywords": [
      {
        "name": "year",
        "weight": 0.15022019
      },
      {
        "name": "last year",
        "weight": 0.14663544
      },
      {
        "name": "second place",
        "weight": 0.11056502
      },
      {
        "name": "Bloomberg",
        "weight": 0.10855238
      },
      {
        "name": "fourth place",
        "weight": 0.091327064
      },
      {
        "name": "a reported net worth",
        "weight": 0.08575714
      },
      {
        "name": "Friday",
        "weight": 0.08182661
      },
      {
        "name": "second",
        "weight": 0.07537921
      },
      {
        "name": "the Bloomberg Billionaires Index",
        "weight": 0.07509597
      },
      {
        "name": "a net worth",
        "weight": 0.072083324
      }
    ],
    "topics": [
      {
        "name": "Business Leaders"
      }
    ],
    "categories": [
      {
        "name": "Auto"
      }
    ],
    "entities": [
      {
        "data": "Mark Zuckerberg",
        "type": "PERSON",
        "mentions": 7
      },
      {
        "data": "Elon Musk",
        "type": "PERSON",
        "mentions": 5
      },
      {
        "data": "Jeff Bezos",
        "type": "PERSON",
        "mentions": 2
      },
      {
        "data": "Bernard Arnault",
        "type": "PERSON",
        "mentions": 1
      },
      {
        "data": "Tesla",
        "type": "ORG",
        "mentions": 3
      },
      {
        "data": "Meta",
        "type": "ORG",
        "mentions": 2
      },
      {
        "data": "Fortune",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Amazon",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Bloomberg",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "LVMH",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "SpaceX",
        "type": "ORG",
        "mentions": 2
      },
      {
        "data": "Facebook",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Threads",
        "type": "PRODUCT",
        "mentions": 1
      }
    ],
    "companies": [
      {
        "id": "d6a5089d5dd14420a09e5ff62269ad29",
        "name": "Chan Zuckerberg Initiative",
        "domains": [
          "chanzuckerberg.com"
        ],
        "symbols": []
      },
      {
        "id": "cd7748b083b34b8591acc3cd8a32ab08",
        "name": "LVMH Moët Hennessy - Louis Vuitton, Société Européenne",
        "domains": [
          "lvmh.com"
        ],
        "symbols": [
          "MOH.DE",
          "MC.PA",
          "MC.SW",
          "LVMHF",
          "LVMUY"
        ]
      },
      {
        "id": "eeee660a046242b8bf99f45fdc95cc32",
        "name": "Tesla, Inc.",
        "domains": [
          "tesla.com"
        ],
        "symbols": [
          "TSLA",
          "TL0.DE"
        ]
      }
    ],
    "sentiment": {
      "positive": 0.022595394,
      "negative": 0.88944507,
      "neutral": 0.08795955
    },
    "summary": "Mark Zuckerberg, the Meta CEO, has topped the Bloomberg Billionaires Index with a reported net worth of $187 billion, making him the third richest person on the list. This is the first time Zuckerberg has broken into the top three since 2020. Meanwhile, Tesla CEO Elon Musk has dropped to fourth place with a fortune of $181 billion. This comes as Tesla struggles, with its first year-over-year sales drop in nearly four years. With another $30 billion in the bank, Zuckerberg is approaching Amazon founder Jeff Bezos' level of wealth. The two CEOs have been feuding since a SpaceX explosion destroyed a Facebook satellite in 2016, and their public rivalry began when Musk challenged Zuckerberg to a cage fight last year.",
    "translation": "",
    "translatedTitle": "",
    "translatedDescription": "",
    "translatedSummary": "",
    "locations": [],
    "reprint": false,
    "reprintGroupId": "3ef4002edcdf4aa896910d107800b3f2",
    "places": [],
    "people": [
      {
        "wikidataId": "Q312556",
        "name": "Jeff Bezos"
      },
      {
        "wikidataId": "Q32055",
        "name": "Bernard Arnault"
      },
      {
        "wikidataId": "Q317521",
        "name": "Elon Musk"
      },
      {
        "wikidataId": "Q36215",
        "name": "Mark Zuckerberg"
      }
    ]
  },
  {
    "url": "https://www.businessinsider.com/mark-zuckerberg-passes-elon-musk-on-bloomberg-billionaires-index-2024-4",
    "authorsByline": "Lakshmi Varanasi",
    "articleId": "13113da0b4944f01b440457bc13f9ec4",
    "clusterId": "97836ac7d45a45a09b5b76465624a8ef",
    "source": {
      "domain": "businessinsider.com",
      "paywall": true,
      "location": null
    },
    "imageUrl": "https://i.insider.com/661179071caec1275a6d8814?width=1200&format=jpeg",
    "country": "us",
    "language": "en",
    "pubDate": "2024-04-06T16:46:16+00:00",
    "addDate": "2024-04-06T16:50:48.515372+00:00",
    "refreshDate": "2024-04-06T16:50:48.515376+00:00",
    "score": 1,
    "title": "Mark Zuckerberg moves ahead of Elon Musk on richest person list as Tesla falters",
    "description": "Mark Zuckerberg just overtook Elon Musk as the third richest person in the world according to Bloomberg's Billionaire Index.",
    "content": "There's a new round in the billionaire brawl between Mark Zuckerberg and Elon Musk — and this time, the Meta CEO is on top.Zuckerberg became the third richest person on the Bloomberg Billionaires Index on Friday, with a reported net worth of $187 billion. This is the first time Zuckerberg has broken into the ranking's top three since 2020, Fortune reported.Meanwhile, Musk, the Tesla CEO, has fallen to fourth place with a fortune of $181 billion.The news comes as Tesla sold just 386,800 cars in the first quarter of 2024, marking the company's first year-over-year sales drop in nearly four years. The company's shares fell more than 7% in early trading following the news, and the company's stock is down more than 34% since the start of 2024.With another $30 billion in the bank, Zuckerberg is approaching Amazon founder Jeff Bezos' level of wealth. Bezos has a net worth of $207 billion and is in second place, according to Bloomberg. LVMH CEO Bernard Arnault is in the top spot with a net worth of $223 billion.Zuckerberg and Musk are feuding about more than just their fortune.The tech execs have been at odds since 2016 when a SpaceX explosion destroyed a Facebook satellite. And their public rivalry heated up after Musk challenged Zuckerberg to a cage fight last year. Meta's launch of Threads, a rival social media platform to X, hasn't helped soften the tension between the two.",
    "medium": "Article",
    "links": [
      "https://www.insider-inc.com/privacy-policy",
      "https://www.insider-inc.com/terms",
      "https://www.businessinsider.com/elon-musk-mark-zuckerberg-cage-match-jiu-jitsu-2023-6",
      "https://www.businessinsider.com/meta",
      "https://www.businessinsider.com/subscription",
      "https://archive.ph/uTopZ",
      "https://www.businessinsider.com/mark-zuckerberg",
      "https://newsletter.businessinsider.com/view/65579c6e5b5522fe5f0e49b865983c9461121e31bb09345b/53db8e23",
      "https://www.businessinsider.com/tesla-ceo-elon-musk",
      "https://www.businessinsider.com/elon-musk-mark-zuckerberg-twitter-meta-cage-fight-2023-6",
      "https://www.businessinsider.com/tesla-sales-deliveries-q1-elon-musk-disappoint-fsd-2024-4",
      "https://www.bloomberg.com/billionaires/",
      "https://www.businessinsider.com/elon-musk"
    ],
    "labels": [],
    "matchedAuthors": [
      {
        "id": "2fd7dc61cc644a20b93accaea3d414da",
        "name": "Lakshmi Varanasi"
      }
    ],
    "claim": "",
    "verdict": "",
    "keywords": [
      {
        "name": "year",
        "weight": 0.15022019
      },
      {
        "name": "last year",
        "weight": 0.14663544
      },
      {
        "name": "second place",
        "weight": 0.11056502
      },
      {
        "name": "Bloomberg",
        "weight": 0.10855238
      },
      {
        "name": "fourth place",
        "weight": 0.091327064
      },
      {
        "name": "a reported net worth",
        "weight": 0.08575714
      },
      {
        "name": "Friday",
        "weight": 0.08182661
      },
      {
        "name": "second",
        "weight": 0.07537921
      },
      {
        "name": "the Bloomberg Billionaires Index",
        "weight": 0.07509597
      },
      {
        "name": "a net worth",
        "weight": 0.072083324
      }
    ],
    "topics": [
      {
        "name": "Business Leaders"
      }
    ],
    "categories": [
      {
        "name": "Auto"
      }
    ],
    "entities": [
      {
        "data": "Mark Zuckerberg",
        "type": "PERSON",
        "mentions": 7
      },
      {
        "data": "Elon Musk",
        "type": "PERSON",
        "mentions": 5
      },
      {
        "data": "Jeff Bezos",
        "type": "PERSON",
        "mentions": 2
      },
      {
        "data": "Bernard Arnault",
        "type": "PERSON",
        "mentions": 1
      },
      {
        "data": "Tesla",
        "type": "ORG",
        "mentions": 3
      },
      {
        "data": "Meta",
        "type": "ORG",
        "mentions": 2
      },
      {
        "data": "Fortune",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Amazon",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Bloomberg",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "LVMH",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "SpaceX",
        "type": "ORG",
        "mentions": 2
      },
      {
        "data": "Facebook",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Threads",
        "type": "PRODUCT",
        "mentions": 1
      }
    ],
    "companies": [
      {
        "id": "d6a5089d5dd14420a09e5ff62269ad29",
        "name": "Chan Zuckerberg Initiative",
        "domains": [
          "chanzuckerberg.com"
        ],
        "symbols": []
      },
      {
        "id": "cd7748b083b34b8591acc3cd8a32ab08",
        "name": "LVMH Moët Hennessy - Louis Vuitton, Société Européenne",
        "domains": [
          "lvmh.com"
        ],
        "symbols": [
          "MOH.DE",
          "MC.PA",
          "MC.SW",
          "LVMHF",
          "LVMUY"
        ]
      },
      {
        "id": "eeee660a046242b8bf99f45fdc95cc32",
        "name": "Tesla, Inc.",
        "domains": [
          "tesla.com"
        ],
        "symbols": [
          "TSLA",
          "TL0.DE"
        ]
      }
    ],
    "sentiment": {
      "positive": 0.022595394,
      "negative": 0.88944507,
      "neutral": 0.08795955
    },
    "summary": "Mark Zuckerberg, the Meta CEO, has topped the Bloomberg Billionaires Index with a reported net worth of $187 billion, making him the third richest person on the list. This is the first time Zuckerberg has broken into the top three since 2020. Meanwhile, Tesla CEO Elon Musk has dropped to fourth place with a fortune of $181 billion. This comes as Tesla struggles, with its first year-over-year sales drop in nearly four years. With another $30 billion in the bank, Zuckerberg is approaching Amazon founder Jeff Bezos' level of wealth. The two CEOs have been feuding since a SpaceX explosion destroyed a Facebook satellite in 2016, and their public rivalry began when Musk challenged Zuckerberg to a cage fight last year.",
    "translation": "",
    "translatedTitle": "",
    "translatedDescription": "",
    "translatedSummary": "",
    "locations": [],
    "reprint": false,
    "reprintGroupId": "3ef4002edcdf4aa896910d107800b3f2",
    "places": [],
    "people": [
      {
        "wikidataId": "Q312556",
        "name": "Jeff Bezos"
      },
      {
        "wikidataId": "Q32055",
        "name": "Bernard Arnault"
      },
      {
        "wikidataId": "Q317521",
        "name": "Elon Musk"
      },
      {
        "wikidataId": "Q36215",
        "name": "Mark Zuckerberg"
      }
    ]
  },

  {
    "url": "https://www.businessinsider.com/mark-zuckerberg-passes-elon-musk-on-bloomberg-billionaires-index-2024-4",
    "authorsByline": "Lakshmi Varanasi",
    "articleId": "13113da0b4944f01b440457bc13f9ec4",
    "clusterId": "97836ac7d45a45a09b5b76465624a8ef",
    "source": {
      "domain": "businessinsider.com",
      "paywall": true,
      "location": null
    },
    "imageUrl": "https://i.insider.com/661179071caec1275a6d8814?width=1200&format=jpeg",
    "country": "us",
    "language": "en",
    "pubDate": "2024-04-06T16:46:16+00:00",
    "addDate": "2024-04-06T16:50:48.515372+00:00",
    "refreshDate": "2024-04-06T16:50:48.515376+00:00",
    "score": 1,
    "title": "Mark Zuckerberg moves ahead of Elon Musk on richest person list as Tesla falters",
    "description": "Mark Zuckerberg just overtook Elon Musk as the third richest person in the world according to Bloomberg's Billionaire Index.",
    "content": "There's a new round in the billionaire brawl between Mark Zuckerberg and Elon Musk — and this time, the Meta CEO is on top.Zuckerberg became the third richest person on the Bloomberg Billionaires Index on Friday, with a reported net worth of $187 billion. This is the first time Zuckerberg has broken into the ranking's top three since 2020, Fortune reported.Meanwhile, Musk, the Tesla CEO, has fallen to fourth place with a fortune of $181 billion.The news comes as Tesla sold just 386,800 cars in the first quarter of 2024, marking the company's first year-over-year sales drop in nearly four years. The company's shares fell more than 7% in early trading following the news, and the company's stock is down more than 34% since the start of 2024.With another $30 billion in the bank, Zuckerberg is approaching Amazon founder Jeff Bezos' level of wealth. Bezos has a net worth of $207 billion and is in second place, according to Bloomberg. LVMH CEO Bernard Arnault is in the top spot with a net worth of $223 billion.Zuckerberg and Musk are feuding about more than just their fortune.The tech execs have been at odds since 2016 when a SpaceX explosion destroyed a Facebook satellite. And their public rivalry heated up after Musk challenged Zuckerberg to a cage fight last year. Meta's launch of Threads, a rival social media platform to X, hasn't helped soften the tension between the two.",
    "medium": "Article",
    "links": [
      "https://www.insider-inc.com/privacy-policy",
      "https://www.insider-inc.com/terms",
      "https://www.businessinsider.com/elon-musk-mark-zuckerberg-cage-match-jiu-jitsu-2023-6",
      "https://www.businessinsider.com/meta",
      "https://www.businessinsider.com/subscription",
      "https://archive.ph/uTopZ",
      "https://www.businessinsider.com/mark-zuckerberg",
      "https://newsletter.businessinsider.com/view/65579c6e5b5522fe5f0e49b865983c9461121e31bb09345b/53db8e23",
      "https://www.businessinsider.com/tesla-ceo-elon-musk",
      "https://www.businessinsider.com/elon-musk-mark-zuckerberg-twitter-meta-cage-fight-2023-6",
      "https://www.businessinsider.com/tesla-sales-deliveries-q1-elon-musk-disappoint-fsd-2024-4",
      "https://www.bloomberg.com/billionaires/",
      "https://www.businessinsider.com/elon-musk"
    ],
    "labels": [],
    "matchedAuthors": [
      {
        "id": "2fd7dc61cc644a20b93accaea3d414da",
        "name": "Lakshmi Varanasi"
      }
    ],
    "claim": "",
    "verdict": "",
    "keywords": [
      {
        "name": "year",
        "weight": 0.15022019
      },
      {
        "name": "last year",
        "weight": 0.14663544
      },
      {
        "name": "second place",
        "weight": 0.11056502
      },
      {
        "name": "Bloomberg",
        "weight": 0.10855238
      },
      {
        "name": "fourth place",
        "weight": 0.091327064
      },
      {
        "name": "a reported net worth",
        "weight": 0.08575714
      },
      {
        "name": "Friday",
        "weight": 0.08182661
      },
      {
        "name": "second",
        "weight": 0.07537921
      },
      {
        "name": "the Bloomberg Billionaires Index",
        "weight": 0.07509597
      },
      {
        "name": "a net worth",
        "weight": 0.072083324
      }
    ],
    "topics": [
      {
        "name": "Business Leaders"
      }
    ],
    "categories": [
      {
        "name": "Auto"
      }
    ],
    "entities": [
      {
        "data": "Mark Zuckerberg",
        "type": "PERSON",
        "mentions": 7
      },
      {
        "data": "Elon Musk",
        "type": "PERSON",
        "mentions": 5
      },
      {
        "data": "Jeff Bezos",
        "type": "PERSON",
        "mentions": 2
      },
      {
        "data": "Bernard Arnault",
        "type": "PERSON",
        "mentions": 1
      },
      {
        "data": "Tesla",
        "type": "ORG",
        "mentions": 3
      },
      {
        "data": "Meta",
        "type": "ORG",
        "mentions": 2
      },
      {
        "data": "Fortune",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Amazon",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Bloomberg",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "LVMH",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "SpaceX",
        "type": "ORG",
        "mentions": 2
      },
      {
        "data": "Facebook",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Threads",
        "type": "PRODUCT",
        "mentions": 1
      }
    ],
    "companies": [
      {
        "id": "d6a5089d5dd14420a09e5ff62269ad29",
        "name": "Chan Zuckerberg Initiative",
        "domains": [
          "chanzuckerberg.com"
        ],
        "symbols": []
      },
      {
        "id": "cd7748b083b34b8591acc3cd8a32ab08",
        "name": "LVMH Moët Hennessy - Louis Vuitton, Société Européenne",
        "domains": [
          "lvmh.com"
        ],
        "symbols": [
          "MOH.DE",
          "MC.PA",
          "MC.SW",
          "LVMHF",
          "LVMUY"
        ]
      },
      {
        "id": "eeee660a046242b8bf99f45fdc95cc32",
        "name": "Tesla, Inc.",
        "domains": [
          "tesla.com"
        ],
        "symbols": [
          "TSLA",
          "TL0.DE"
        ]
      }
    ],
    "sentiment": {
      "positive": 0.022595394,
      "negative": 0.88944507,
      "neutral": 0.08795955
    },
    "summary": "Mark Zuckerberg, the Meta CEO, has topped the Bloomberg Billionaires Index with a reported net worth of $187 billion, making him the third richest person on the list. This is the first time Zuckerberg has broken into the top three since 2020. Meanwhile, Tesla CEO Elon Musk has dropped to fourth place with a fortune of $181 billion. This comes as Tesla struggles, with its first year-over-year sales drop in nearly four years. With another $30 billion in the bank, Zuckerberg is approaching Amazon founder Jeff Bezos' level of wealth. The two CEOs have been feuding since a SpaceX explosion destroyed a Facebook satellite in 2016, and their public rivalry began when Musk challenged Zuckerberg to a cage fight last year.",
    "translation": "",
    "translatedTitle": "",
    "translatedDescription": "",
    "translatedSummary": "",
    "locations": [],
    "reprint": false,
    "reprintGroupId": "3ef4002edcdf4aa896910d107800b3f2",
    "places": [],
    "people": [
      {
        "wikidataId": "Q312556",
        "name": "Jeff Bezos"
      },
      {
        "wikidataId": "Q32055",
        "name": "Bernard Arnault"
      },
      {
        "wikidataId": "Q317521",
        "name": "Elon Musk"
      },
      {
        "wikidataId": "Q36215",
        "name": "Mark Zuckerberg"
      }
    ]
  },
  {
    "url": "https://www.businessinsider.com/mark-zuckerberg-passes-elon-musk-on-bloomberg-billionaires-index-2024-4",
    "authorsByline": "Lakshmi Varanasi",
    "articleId": "13113da0b4944f01b440457bc13f9ec4",
    "clusterId": "97836ac7d45a45a09b5b76465624a8ef",
    "source": {
      "domain": "businessinsider.com",
      "paywall": true,
      "location": null
    },
    "imageUrl": "https://i.insider.com/661179071caec1275a6d8814?width=1200&format=jpeg",
    "country": "us",
    "language": "en",
    "pubDate": "2024-04-06T16:46:16+00:00",
    "addDate": "2024-04-06T16:50:48.515372+00:00",
    "refreshDate": "2024-04-06T16:50:48.515376+00:00",
    "score": 1,
    "title": "Mark Zuckerberg moves ahead of Elon Musk on richest person list as Tesla falters",
    "description": "Mark Zuckerberg just overtook Elon Musk as the third richest person in the world according to Bloomberg's Billionaire Index.",
    "content": "There's a new round in the billionaire brawl between Mark Zuckerberg and Elon Musk — and this time, the Meta CEO is on top.Zuckerberg became the third richest person on the Bloomberg Billionaires Index on Friday, with a reported net worth of $187 billion. This is the first time Zuckerberg has broken into the ranking's top three since 2020, Fortune reported.Meanwhile, Musk, the Tesla CEO, has fallen to fourth place with a fortune of $181 billion.The news comes as Tesla sold just 386,800 cars in the first quarter of 2024, marking the company's first year-over-year sales drop in nearly four years. The company's shares fell more than 7% in early trading following the news, and the company's stock is down more than 34% since the start of 2024.With another $30 billion in the bank, Zuckerberg is approaching Amazon founder Jeff Bezos' level of wealth. Bezos has a net worth of $207 billion and is in second place, according to Bloomberg. LVMH CEO Bernard Arnault is in the top spot with a net worth of $223 billion.Zuckerberg and Musk are feuding about more than just their fortune.The tech execs have been at odds since 2016 when a SpaceX explosion destroyed a Facebook satellite. And their public rivalry heated up after Musk challenged Zuckerberg to a cage fight last year. Meta's launch of Threads, a rival social media platform to X, hasn't helped soften the tension between the two.",
    "medium": "Article",
    "links": [
      "https://www.insider-inc.com/privacy-policy",
      "https://www.insider-inc.com/terms",
      "https://www.businessinsider.com/elon-musk-mark-zuckerberg-cage-match-jiu-jitsu-2023-6",
      "https://www.businessinsider.com/meta",
      "https://www.businessinsider.com/subscription",
      "https://archive.ph/uTopZ",
      "https://www.businessinsider.com/mark-zuckerberg",
      "https://newsletter.businessinsider.com/view/65579c6e5b5522fe5f0e49b865983c9461121e31bb09345b/53db8e23",
      "https://www.businessinsider.com/tesla-ceo-elon-musk",
      "https://www.businessinsider.com/elon-musk-mark-zuckerberg-twitter-meta-cage-fight-2023-6",
      "https://www.businessinsider.com/tesla-sales-deliveries-q1-elon-musk-disappoint-fsd-2024-4",
      "https://www.bloomberg.com/billionaires/",
      "https://www.businessinsider.com/elon-musk"
    ],
    "labels": [],
    "matchedAuthors": [
      {
        "id": "2fd7dc61cc644a20b93accaea3d414da",
        "name": "Lakshmi Varanasi"
      }
    ],
    "claim": "",
    "verdict": "",
    "keywords": [
      {
        "name": "year",
        "weight": 0.15022019
      },
      {
        "name": "last year",
        "weight": 0.14663544
      },
      {
        "name": "second place",
        "weight": 0.11056502
      },
      {
        "name": "Bloomberg",
        "weight": 0.10855238
      },
      {
        "name": "fourth place",
        "weight": 0.091327064
      },
      {
        "name": "a reported net worth",
        "weight": 0.08575714
      },
      {
        "name": "Friday",
        "weight": 0.08182661
      },
      {
        "name": "second",
        "weight": 0.07537921
      },
      {
        "name": "the Bloomberg Billionaires Index",
        "weight": 0.07509597
      },
      {
        "name": "a net worth",
        "weight": 0.072083324
      }
    ],
    "topics": [
      {
        "name": "Business Leaders"
      }
    ],
    "categories": [
      {
        "name": "Auto"
      }
    ],
    "entities": [
      {
        "data": "Mark Zuckerberg",
        "type": "PERSON",
        "mentions": 7
      },
      {
        "data": "Elon Musk",
        "type": "PERSON",
        "mentions": 5
      },
      {
        "data": "Jeff Bezos",
        "type": "PERSON",
        "mentions": 2
      },
      {
        "data": "Bernard Arnault",
        "type": "PERSON",
        "mentions": 1
      },
      {
        "data": "Tesla",
        "type": "ORG",
        "mentions": 3
      },
      {
        "data": "Meta",
        "type": "ORG",
        "mentions": 2
      },
      {
        "data": "Fortune",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Amazon",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Bloomberg",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "LVMH",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "SpaceX",
        "type": "ORG",
        "mentions": 2
      },
      {
        "data": "Facebook",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Threads",
        "type": "PRODUCT",
        "mentions": 1
      }
    ],
    "companies": [
      {
        "id": "d6a5089d5dd14420a09e5ff62269ad29",
        "name": "Chan Zuckerberg Initiative",
        "domains": [
          "chanzuckerberg.com"
        ],
        "symbols": []
      },
      {
        "id": "cd7748b083b34b8591acc3cd8a32ab08",
        "name": "LVMH Moët Hennessy - Louis Vuitton, Société Européenne",
        "domains": [
          "lvmh.com"
        ],
        "symbols": [
          "MOH.DE",
          "MC.PA",
          "MC.SW",
          "LVMHF",
          "LVMUY"
        ]
      },
      {
        "id": "eeee660a046242b8bf99f45fdc95cc32",
        "name": "Tesla, Inc.",
        "domains": [
          "tesla.com"
        ],
        "symbols": [
          "TSLA",
          "TL0.DE"
        ]
      }
    ],
    "sentiment": {
      "positive": 0.022595394,
      "negative": 0.88944507,
      "neutral": 0.08795955
    },
    "summary": "Mark Zuckerberg, the Meta CEO, has topped the Bloomberg Billionaires Index with a reported net worth of $187 billion, making him the third richest person on the list. This is the first time Zuckerberg has broken into the top three since 2020. Meanwhile, Tesla CEO Elon Musk has dropped to fourth place with a fortune of $181 billion. This comes as Tesla struggles, with its first year-over-year sales drop in nearly four years. With another $30 billion in the bank, Zuckerberg is approaching Amazon founder Jeff Bezos' level of wealth. The two CEOs have been feuding since a SpaceX explosion destroyed a Facebook satellite in 2016, and their public rivalry began when Musk challenged Zuckerberg to a cage fight last year.",
    "translation": "",
    "translatedTitle": "",
    "translatedDescription": "",
    "translatedSummary": "",
    "locations": [],
    "reprint": false,
    "reprintGroupId": "3ef4002edcdf4aa896910d107800b3f2",
    "places": [],
    "people": [
      {
        "wikidataId": "Q312556",
        "name": "Jeff Bezos"
      },
      {
        "wikidataId": "Q32055",
        "name": "Bernard Arnault"
      },
      {
        "wikidataId": "Q317521",
        "name": "Elon Musk"
      },
      {
        "wikidataId": "Q36215",
        "name": "Mark Zuckerberg"
      }
    ]
  },
  {
    "url": "https://www.businessinsider.com/mark-zuckerberg-passes-elon-musk-on-bloomberg-billionaires-index-2024-4",
    "authorsByline": "Lakshmi Varanasi",
    "articleId": "13113da0b4944f01b440457bc13f9ec4",
    "clusterId": "97836ac7d45a45a09b5b76465624a8ef",
    "source": {
      "domain": "businessinsider.com",
      "paywall": true,
      "location": null
    },
    "imageUrl": "https://i.insider.com/661179071caec1275a6d8814?width=1200&format=jpeg",
    "country": "us",
    "language": "en",
    "pubDate": "2024-04-06T16:46:16+00:00",
    "addDate": "2024-04-06T16:50:48.515372+00:00",
    "refreshDate": "2024-04-06T16:50:48.515376+00:00",
    "score": 1,
    "title": "Mark Zuckerberg moves ahead of Elon Musk on richest person list as Tesla falters",
    "description": "Mark Zuckerberg just overtook Elon Musk as the third richest person in the world according to Bloomberg's Billionaire Index.",
    "content": "There's a new round in the billionaire brawl between Mark Zuckerberg and Elon Musk — and this time, the Meta CEO is on top.Zuckerberg became the third richest person on the Bloomberg Billionaires Index on Friday, with a reported net worth of $187 billion. This is the first time Zuckerberg has broken into the ranking's top three since 2020, Fortune reported.Meanwhile, Musk, the Tesla CEO, has fallen to fourth place with a fortune of $181 billion.The news comes as Tesla sold just 386,800 cars in the first quarter of 2024, marking the company's first year-over-year sales drop in nearly four years. The company's shares fell more than 7% in early trading following the news, and the company's stock is down more than 34% since the start of 2024.With another $30 billion in the bank, Zuckerberg is approaching Amazon founder Jeff Bezos' level of wealth. Bezos has a net worth of $207 billion and is in second place, according to Bloomberg. LVMH CEO Bernard Arnault is in the top spot with a net worth of $223 billion.Zuckerberg and Musk are feuding about more than just their fortune.The tech execs have been at odds since 2016 when a SpaceX explosion destroyed a Facebook satellite. And their public rivalry heated up after Musk challenged Zuckerberg to a cage fight last year. Meta's launch of Threads, a rival social media platform to X, hasn't helped soften the tension between the two.",
    "medium": "Article",
    "links": [
      "https://www.insider-inc.com/privacy-policy",
      "https://www.insider-inc.com/terms",
      "https://www.businessinsider.com/elon-musk-mark-zuckerberg-cage-match-jiu-jitsu-2023-6",
      "https://www.businessinsider.com/meta",
      "https://www.businessinsider.com/subscription",
      "https://archive.ph/uTopZ",
      "https://www.businessinsider.com/mark-zuckerberg",
      "https://newsletter.businessinsider.com/view/65579c6e5b5522fe5f0e49b865983c9461121e31bb09345b/53db8e23",
      "https://www.businessinsider.com/tesla-ceo-elon-musk",
      "https://www.businessinsider.com/elon-musk-mark-zuckerberg-twitter-meta-cage-fight-2023-6",
      "https://www.businessinsider.com/tesla-sales-deliveries-q1-elon-musk-disappoint-fsd-2024-4",
      "https://www.bloomberg.com/billionaires/",
      "https://www.businessinsider.com/elon-musk"
    ],
    "labels": [],
    "matchedAuthors": [
      {
        "id": "2fd7dc61cc644a20b93accaea3d414da",
        "name": "Lakshmi Varanasi"
      }
    ],
    "claim": "",
    "verdict": "",
    "keywords": [
      {
        "name": "year",
        "weight": 0.15022019
      },
      {
        "name": "last year",
        "weight": 0.14663544
      },
      {
        "name": "second place",
        "weight": 0.11056502
      },
      {
        "name": "Bloomberg",
        "weight": 0.10855238
      },
      {
        "name": "fourth place",
        "weight": 0.091327064
      },
      {
        "name": "a reported net worth",
        "weight": 0.08575714
      },
      {
        "name": "Friday",
        "weight": 0.08182661
      },
      {
        "name": "second",
        "weight": 0.07537921
      },
      {
        "name": "the Bloomberg Billionaires Index",
        "weight": 0.07509597
      },
      {
        "name": "a net worth",
        "weight": 0.072083324
      }
    ],
    "topics": [
      {
        "name": "Business Leaders"
      }
    ],
    "categories": [
      {
        "name": "Auto"
      }
    ],
    "entities": [
      {
        "data": "Mark Zuckerberg",
        "type": "PERSON",
        "mentions": 7
      },
      {
        "data": "Elon Musk",
        "type": "PERSON",
        "mentions": 5
      },
      {
        "data": "Jeff Bezos",
        "type": "PERSON",
        "mentions": 2
      },
      {
        "data": "Bernard Arnault",
        "type": "PERSON",
        "mentions": 1
      },
      {
        "data": "Tesla",
        "type": "ORG",
        "mentions": 3
      },
      {
        "data": "Meta",
        "type": "ORG",
        "mentions": 2
      },
      {
        "data": "Fortune",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Amazon",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Bloomberg",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "LVMH",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "SpaceX",
        "type": "ORG",
        "mentions": 2
      },
      {
        "data": "Facebook",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Threads",
        "type": "PRODUCT",
        "mentions": 1
      }
    ],
    "companies": [
      {
        "id": "d6a5089d5dd14420a09e5ff62269ad29",
        "name": "Chan Zuckerberg Initiative",
        "domains": [
          "chanzuckerberg.com"
        ],
        "symbols": []
      },
      {
        "id": "cd7748b083b34b8591acc3cd8a32ab08",
        "name": "LVMH Moët Hennessy - Louis Vuitton, Société Européenne",
        "domains": [
          "lvmh.com"
        ],
        "symbols": [
          "MOH.DE",
          "MC.PA",
          "MC.SW",
          "LVMHF",
          "LVMUY"
        ]
      },
      {
        "id": "eeee660a046242b8bf99f45fdc95cc32",
        "name": "Tesla, Inc.",
        "domains": [
          "tesla.com"
        ],
        "symbols": [
          "TSLA",
          "TL0.DE"
        ]
      }
    ],
    "sentiment": {
      "positive": 0.022595394,
      "negative": 0.88944507,
      "neutral": 0.08795955
    },
    "summary": "Mark Zuckerberg, the Meta CEO, has topped the Bloomberg Billionaires Index with a reported net worth of $187 billion, making him the third richest person on the list. This is the first time Zuckerberg has broken into the top three since 2020. Meanwhile, Tesla CEO Elon Musk has dropped to fourth place with a fortune of $181 billion. This comes as Tesla struggles, with its first year-over-year sales drop in nearly four years. With another $30 billion in the bank, Zuckerberg is approaching Amazon founder Jeff Bezos' level of wealth. The two CEOs have been feuding since a SpaceX explosion destroyed a Facebook satellite in 2016, and their public rivalry began when Musk challenged Zuckerberg to a cage fight last year.",
    "translation": "",
    "translatedTitle": "",
    "translatedDescription": "",
    "translatedSummary": "",
    "locations": [],
    "reprint": false,
    "reprintGroupId": "3ef4002edcdf4aa896910d107800b3f2",
    "places": [],
    "people": [
      {
        "wikidataId": "Q312556",
        "name": "Jeff Bezos"
      },
      {
        "wikidataId": "Q32055",
        "name": "Bernard Arnault"
      },
      {
        "wikidataId": "Q317521",
        "name": "Elon Musk"
      },
      {
        "wikidataId": "Q36215",
        "name": "Mark Zuckerberg"
      }
    ]
  },
  {
    "url": "https://www.businessinsider.com/mark-zuckerberg-passes-elon-musk-on-bloomberg-billionaires-index-2024-4",
    "authorsByline": "Lakshmi Varanasi",
    "articleId": "13113da0b4944f01b440457bc13f9ec4",
    "clusterId": "97836ac7d45a45a09b5b76465624a8ef",
    "source": {
      "domain": "businessinsider.com",
      "paywall": true,
      "location": null
    },
    "imageUrl": "https://i.insider.com/661179071caec1275a6d8814?width=1200&format=jpeg",
    "country": "us",
    "language": "en",
    "pubDate": "2024-04-06T16:46:16+00:00",
    "addDate": "2024-04-06T16:50:48.515372+00:00",
    "refreshDate": "2024-04-06T16:50:48.515376+00:00",
    "score": 1,
    "title": "Mark Zuckerberg moves ahead of Elon Musk on richest person list as Tesla falters",
    "description": "Mark Zuckerberg just overtook Elon Musk as the third richest person in the world according to Bloomberg's Billionaire Index.",
    "content": "There's a new round in the billionaire brawl between Mark Zuckerberg and Elon Musk — and this time, the Meta CEO is on top.Zuckerberg became the third richest person on the Bloomberg Billionaires Index on Friday, with a reported net worth of $187 billion. This is the first time Zuckerberg has broken into the ranking's top three since 2020, Fortune reported.Meanwhile, Musk, the Tesla CEO, has fallen to fourth place with a fortune of $181 billion.The news comes as Tesla sold just 386,800 cars in the first quarter of 2024, marking the company's first year-over-year sales drop in nearly four years. The company's shares fell more than 7% in early trading following the news, and the company's stock is down more than 34% since the start of 2024.With another $30 billion in the bank, Zuckerberg is approaching Amazon founder Jeff Bezos' level of wealth. Bezos has a net worth of $207 billion and is in second place, according to Bloomberg. LVMH CEO Bernard Arnault is in the top spot with a net worth of $223 billion.Zuckerberg and Musk are feuding about more than just their fortune.The tech execs have been at odds since 2016 when a SpaceX explosion destroyed a Facebook satellite. And their public rivalry heated up after Musk challenged Zuckerberg to a cage fight last year. Meta's launch of Threads, a rival social media platform to X, hasn't helped soften the tension between the two.",
    "medium": "Article",
    "links": [
      "https://www.insider-inc.com/privacy-policy",
      "https://www.insider-inc.com/terms",
      "https://www.businessinsider.com/elon-musk-mark-zuckerberg-cage-match-jiu-jitsu-2023-6",
      "https://www.businessinsider.com/meta",
      "https://www.businessinsider.com/subscription",
      "https://archive.ph/uTopZ",
      "https://www.businessinsider.com/mark-zuckerberg",
      "https://newsletter.businessinsider.com/view/65579c6e5b5522fe5f0e49b865983c9461121e31bb09345b/53db8e23",
      "https://www.businessinsider.com/tesla-ceo-elon-musk",
      "https://www.businessinsider.com/elon-musk-mark-zuckerberg-twitter-meta-cage-fight-2023-6",
      "https://www.businessinsider.com/tesla-sales-deliveries-q1-elon-musk-disappoint-fsd-2024-4",
      "https://www.bloomberg.com/billionaires/",
      "https://www.businessinsider.com/elon-musk"
    ],
    "labels": [],
    "matchedAuthors": [
      {
        "id": "2fd7dc61cc644a20b93accaea3d414da",
        "name": "Lakshmi Varanasi"
      }
    ],
    "claim": "",
    "verdict": "",
    "keywords": [
      {
        "name": "year",
        "weight": 0.15022019
      },
      {
        "name": "last year",
        "weight": 0.14663544
      },
      {
        "name": "second place",
        "weight": 0.11056502
      },
      {
        "name": "Bloomberg",
        "weight": 0.10855238
      },
      {
        "name": "fourth place",
        "weight": 0.091327064
      },
      {
        "name": "a reported net worth",
        "weight": 0.08575714
      },
      {
        "name": "Friday",
        "weight": 0.08182661
      },
      {
        "name": "second",
        "weight": 0.07537921
      },
      {
        "name": "the Bloomberg Billionaires Index",
        "weight": 0.07509597
      },
      {
        "name": "a net worth",
        "weight": 0.072083324
      }
    ],
    "topics": [
      {
        "name": "Business Leaders"
      }
    ],
    "categories": [
      {
        "name": "Auto"
      }
    ],
    "entities": [
      {
        "data": "Mark Zuckerberg",
        "type": "PERSON",
        "mentions": 7
      },
      {
        "data": "Elon Musk",
        "type": "PERSON",
        "mentions": 5
      },
      {
        "data": "Jeff Bezos",
        "type": "PERSON",
        "mentions": 2
      },
      {
        "data": "Bernard Arnault",
        "type": "PERSON",
        "mentions": 1
      },
      {
        "data": "Tesla",
        "type": "ORG",
        "mentions": 3
      },
      {
        "data": "Meta",
        "type": "ORG",
        "mentions": 2
      },
      {
        "data": "Fortune",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Amazon",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Bloomberg",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "LVMH",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "SpaceX",
        "type": "ORG",
        "mentions": 2
      },
      {
        "data": "Facebook",
        "type": "ORG",
        "mentions": 1
      },
      {
        "data": "Threads",
        "type": "PRODUCT",
        "mentions": 1
      }
    ],
    "companies": [
      {
        "id": "d6a5089d5dd14420a09e5ff62269ad29",
        "name": "Chan Zuckerberg Initiative",
        "domains": [
          "chanzuckerberg.com"
        ],
        "symbols": []
      },
      {
        "id": "cd7748b083b34b8591acc3cd8a32ab08",
        "name": "LVMH Moët Hennessy - Louis Vuitton, Société Européenne",
        "domains": [
          "lvmh.com"
        ],
        "symbols": [
          "MOH.DE",
          "MC.PA",
          "MC.SW",
          "LVMHF",
          "LVMUY"
        ]
      },
      {
        "id": "eeee660a046242b8bf99f45fdc95cc32",
        "name": "Tesla, Inc.",
        "domains": [
          "tesla.com"
        ],
        "symbols": [
          "TSLA",
          "TL0.DE"
        ]
      }
    ],
    "sentiment": {
      "positive": 0.022595394,
      "negative": 0.88944507,
      "neutral": 0.08795955
    },
    "summary": "Mark Zuckerberg, the Meta CEO, has topped the Bloomberg Billionaires Index with a reported net worth of $187 billion, making him the third richest person on the list. This is the first time Zuckerberg has broken into the top three since 2020. Meanwhile, Tesla CEO Elon Musk has dropped to fourth place with a fortune of $181 billion. This comes as Tesla struggles, with its first year-over-year sales drop in nearly four years. With another $30 billion in the bank, Zuckerberg is approaching Amazon founder Jeff Bezos' level of wealth. The two CEOs have been feuding since a SpaceX explosion destroyed a Facebook satellite in 2016, and their public rivalry began when Musk challenged Zuckerberg to a cage fight last year.",
    "translation": "",
    "translatedTitle": "",
    "translatedDescription": "",
    "translatedSummary": "",
    "locations": [],
    "reprint": false,
    "reprintGroupId": "3ef4002edcdf4aa896910d107800b3f2",
    "places": [],
    "people": [
      {
        "wikidataId": "Q312556",
        "name": "Jeff Bezos"
      },
      {
        "wikidataId": "Q32055",
        "name": "Bernard Arnault"
      },
      {
        "wikidataId": "Q317521",
        "name": "Elon Musk"
      },
      {
        "wikidataId": "Q36215",
        "name": "Mark Zuckerberg"
      }
    ]
  },

    
];

/* 
const [articlesData, setArticlesData] = useState([]);

useEffect(() => {
    const fetchNewsStories = async () => {
      try {
        const response = await axios.get('news-list-api-here');
        console.log('Fetched news stories:', response.data);
        setArticlesData(response.data.articles); 
      } catch (error) {
        console.error('Error fetching news stories:', error);
      }
    };
    fetchNewsStories(); 
  }, []); 
*/
export default articlesData;