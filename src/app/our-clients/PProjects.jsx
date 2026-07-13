"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
 
  // 👉 keep adding type/location/year/scope for other items as you want


  // ===== 2026 =====
  {
    img: "/images/ykitori.jpeg",
    alt: "Yakito fusion Japanese restobar in Al Jadaf Dubai",
    title: "YAKITO",
    type: "Fusion Japanese Restobar",
    location: "Double Tree By Hilton Hotel, Al Jadaf Dubai, UAE",
    year: "2026",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },

  // ===== 2024 =====
  {
    img: "/images/rahama-cafe.jpeg",
    alt: "Rahma cafe and multipurpose hall in Orange County California",
    title: "RAHMA",
    type: "Café & Multi Purpose Hall",
    location: "Rahma Center, Lake Forest, Orange County, California, USA",
    year: "2024",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },

  // ===== 2023 =====
  {
    img: "/images/oak-japanese-lounge.webp",
    alt: "Oak Asian restaurant and lounge in Jumeirah Dubai",
    title: "OAK",
    type: "Asian Restaurant & Lounge",
    location: "Jumeirah Main Road, Dubai, UAE",
    year: "2023",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },
  {
    img: "/images/ave-lounge-cafe.webp",
    alt: "AVE restaurant cafe and sushi bar in Downtown Dubai",
    title: "AVE",
    type: "Restaurant & Café, Sushi Bar",
    location: "Downtown, Dubai, UAE",
    year: "2023",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },
  {
    img: "/images/big-boss.jpeg",
    alt: "Big Boss burger restaurant in Springs Souq Dubai",
    title: "BIG BOSS",
    type: "BURGER RESTAURANT",
    location: "Springs Souq by Emaar, Emirates Hills, Dubai, UAE",
    year: "2023",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },
  {
    img: "/images/ave.png",
    alt: "AVE restaurant cafe and sushi bar in Downtown Dubai",
    title: "AVE",
    type: "Restaurant & Café, Sushi Bar",
    location: "Downtown, Dubai, UAE",
    year: "2023",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },

  // ===== 2022 =====
  {
    img: "/images/code-eight.jpeg",
    alt: "Code Eight restaurant and mixolounge in Al Barsha Dubai",
    title: "CODE EIGHT",
    type: "Restaurant & Mixolounge",
    location: "Mercure Hotel, Al Barsha Heights, Dubai, UAE",
    year: "2022",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },

  // ===== 2021 =====
  {
    img: "/images/crazy-mask.jpg",
    alt: "Crazy Mask bar and cigar lounge in JBR Dubai",
    title: "CRAZY MASK",
    type: "BAR & CIGAR LOUNGE",
    location: "Oasis Hotel, Alfattan Tower JBR, Dubai, UAE",
    year: "2021",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },
  {
    img: "/images/asuman.jpeg",
    alt: "Asuman chocolatier shop in Jumeirah Dubai",
    title: "ASUMAN",
    type: "CHOCOLATIER SHOP",
    location: "Jumeirah Main Road, Dubai, UAE",
    year: "2021",
    scope: "CONCEPT DEVELOPMENT",
    href: "/our-clients",
  },
  {
    img: "/images/nurai-restaurant.jpg",
    alt: "Nurai international cafe in Motor City Dubai",
    title: "NURAI",
    type: "International Café",
    location: "Avenue Mall, Motor City, Dubai, UAE",
    year: "2021",
    scope: "CONCEPT DEVELOPMENT",
    href: "/our-clients",
  },
  {
    img: "/images/baytw.webp",
    alt: "Bayt Ward Lebanese restaurant in Downtown Dubai",
    title: "BAYT WARD",
    type: "LEBANESE RESTAURANT",
    location: "Sheikh Mohamed Boulevard, Dubai",
    year: "2021",
    scope: "CONCEPT DEVELOPMENT",
    href: "/our-clients",
  },

  // ===== 2020 =====
  {
    img: "/images/midhat-pasha-sosial-cafe.webp",
    alt: "Midhat Pasha social cafe in Business Bay Dubai",
    title: "MIDHAT PASHA",
    type: "SOCIAL CAFÉ",
    location: "Blue Bay Tower, Business Bay, Dubai, UAE",
    year: "2020",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },
  {
    img: "/images/karakna.png",
    alt: "Karakna Emirati bites restaurant in City Walk Dubai",
    title: "KARAKNA",
    type: "Emirati Bites",
    location: "City Walk, Dubai, UAE",
    year: "2020",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },
  {
    img: "/images/czn-burak.webp",
    alt: "CZN Burak Turkish restaurant in Downtown Dubai",
    title: "CZN BURAK",
    type: "Turkish Restaurant & Shisha Lounge",
    location: "Downtown, Dubai, UAE",
    year: "2020",
    scope: "F&B CONSULTANCY",
    href: "/our-clients",
  },
  {
    img: "/images/sahel-nom.jpg",
    alt: "Sahelnom Express street food in Business Bay Dubai",
    title: "SAHELNOM EXPRESS",
    type: "STREET FOOD",
    location: "Blue Bay Tower, Business Bay, Dubai, UAE",
    year: "2020",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },
  {
    img: "/images/midhat.avif",
    alt: "Midhat Pasha cafe in Business Bay Dubai",
    title: "MIDHAT PASHA",
    type: "CAFE",
    location: "Business Bay, Dubai",
    year: "2020",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },

  // ===== 2019 =====
  {
    img: "/images/charcoal -garden.jpg",
    alt: "Charcoal Garden restaurant in Dubai Media City",
    title: "CHARCOAL GARDEN",
    type: "RESTAURANT & CAFÉ",
    location: "Shaza Tower, Media City, Dubai, UAE",
    year: "2019",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },
  {
    img: "/images/estekana.png",
    alt: "Estikana cafe in Business Bay Dubai",
    title: "ESTIKANA",
    type: "CAFÉ",
    location: "Blue Bay Tower, Business Bay, Dubai, UAE",
    year: "2019",
    scope: "F&B CONSULTANCY",
    href: "/our-clients",
  },
  {
    img: "/images/sahelnom-zaman.jpg",
    alt: "Sahelnom Zaman restaurant in Bluewaters Dubai",
    title: "SAHELNOM ZAMAN",
    type: "RESTAURANT",
    location: "Bluewaters Island, Dubai, UAE",
    year: "2019",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },
  {
    img: "/images/samoon.jpg",
    alt: "Samoon fast food restaurant in Dubai Media City",
    title: "SAMOON",
    type: "FAST FOOD",
    location: "Media City, Dubai",
    year: "2019",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },

  // ===== 2018 =====
  {
    img: "/images/galliard-restaurant.webp",
    alt: "The Galliard restaurant and lounge in Downtown Dubai",
    title: "THE GALLIARD",
    type: "RESTAURANT & Lounge",
    location: "Address Downtown Hotel, Dubai, UAE",
    year: "2018",
    scope: "F&B CONSULTANCY",
    href: "/our-clients",
  },
  {
    img: "/images/huqqa-restaurant.jpg",
    alt: "Huqqa Turkish restaurant and shisha lounge in Dubai Mall",
    title: "HUQQA",
    type: "Turkish Restaurant & Shisha Lounge",
    location: "Fashion Avenue, Dubai Mall, Dubai, UAE",
    year: "2018",
    scope: "F&B CONSULTANCY",
    href: "/our-clients",
  },
  {
    img: "/images/markette.webp",
    alt: "The Market elegant Mediterranean restaurant in Dubai Mall",
    title: "THE MARKET",
    type: "Elegant Mediterranean Restaurant",
    location: "Fashion Avenue, Dubai Mall, Dubai, UAE",
    year: "2018",
    scope: "F&B CONSULTANCY",
    href: "/our-clients",
  },
  {
    img: "/images/karamna-alkhalej.png",
    alt: "Karamna Alkhaleej fusion restaurant in Downtown Dubai",
    title: "KARAMNA ALKHALEEJ",
    type: "Fusion Levantine-Gulf RESTAURANT",
    location: "Address Downtown Hotel, Dubai, UAE",
    year: "2018",
    scope: "CONCEPT DEVELOPMENT",
    href: "/our-clients",
  },
  {
    img: "/images/atmosfire.jpeg",
    alt: "Atmosfire grill restaurant in Jumeirah Dubai",
    title: "ATMOSFIRE",
    type: "GRILL RESTAURANT",
    location: "Jumeirah Main Road, Dubai, UAE",
    year: "2018",
    scope: "F&B CONSULTANCY",
    href: "/our-clients",
  },
  {
    img: "/images/pit.avif",
    alt: "The Pit restaurant in Jumeirah Dubai",
    title: "THE PIT",
    type: "RESTAURANT",
    location: "Jumeirah, Dubai",
    year: "2018",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },

  // ===== 2017 =====
  {
    img: "/images/sahelnom-business-bay.jpg",
    alt: "Sahelnom cafe and restaurant in Business Bay Dubai",
    title: "SAHELNOM",
    type: "CAFÉ & RESTAURANT",
    location: "Blue Bay Tower, Business Bay, Dubai, UAE",
    year: "2017",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },

  // ===== 2016 =====
  {
    img: "/images/lua.jpg",
    alt: "LUA fusion restaurant at Sofitel Palm Dubai",
    title: "LUA",
    type: "FUSION Restaurant",
    location: "Sofitel Hotel, The Palm, Dubai",
    year: "2016",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },
  {
    img: "/images/monte-carlo.jpg",
    alt: "Monte Carlo Stars restaurant in Dubai Marina",
    title: "MONTE CARLO STARS",
    type: "Fusion Restaurant & Café",
    location: "Marina, Dubai, UAE",
    year: "2016",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },

  // ===== 2014 =====
  {
    img: "/images/own-cafe.webp",
    alt: "OWN cafe and restaurant in JLT Dubai",
    title: "OWN",
    type: "CAFÉ & RESTAURANT",
    location: "JLT, Dubai",
    year: "2014",
    scope: "F&B CONSULTANCY",
    href: "/our-clients",
  },

  // ===== 2013 =====
  {
    img: "/images/ward-cafe.avif",
    alt: "Ward cafe in Dubai Marina",
    title: "WARD",
    type: "CAFÉ",
    location: "Marina, Dubai",
    year: "2013",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },
  {
    img: "/images/ward.webp",
    alt: "Ward cafe and restaurant in Dubai Marina",
    title: "WARD",
    type: "CAFE & RESTAURANT",
    location: "Marina, Dubai",
    year: "2013",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },
  {
    img: "/images/OWN-Restaurant-2.avif",
    alt: "OWN cafe and restaurant in JLT Dubai",
    title: "OWN",
    type: "CAFE & RESTAURANT",
    location: "JLT, Dubai",
    year: "2013",
    scope: "F&B CONSULTANCY",
    href: "/our-clients",
  },

  // ===== 2010 =====
  {
    img: "/images/almukhtar-restaurant.jpg",
    alt: "Al Mukhtar restaurant and cafe in Damascus",
    title: "AL MUKHTAR",
    type: "Restaurant & Café",
    location: "Dummar, Damascus, Syria",
    year: "2010",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },
  {
    img: "/images/perl-d-orient-restaurant.jpg",
    alt: "Perl d'Orient Levantine restaurant in Damascus",
    title: "PERL D'ORIENT",
    type: "Levantine RESTAURANT",
    location: "Damascus, Syria",
    year: "2010",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },
  {
    img: "/images/cannelle.jpg",
    alt: "Cannelle pastry and chocolate boutique in Damascus",
    title: "CANNELLE",
    type: "PASTRY & CHOCOLATE",
    location: "Damascus, Syria",
    year: "2010",
    scope: "F&B CONSULTANCY",
    href: "/our-clients",
  },
  {
    img: "/images/plat-d-ore-catering.jpg",
    alt: "Plate D'ore catering company in Damascus",
    title: "PLATE D'ORE",
    type: "CATERING COMPANY",
    location: "Damascus, Syria",
    year: "2010",
    scope: "F&B CONSULTANCY",
    href: "/our-clients",
  },

  // ===== 2008 =====
  {
    img: "/images/panini.jpg",
    alt: "Pannini fast food restaurant in Damascus",
    title: "PANNINI",
    type: "FAST FOOD",
    location: "Damascus, Syria",
    year: "2008",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },

  // ===== 2007 =====
  {
    img: "/images/taj-mahel-express.jpg",
    alt: "Taj Mahal Express fast food in Damascus",
    title: "TAJ MAHAL EXPRESS",
    type: "FAST FOOD",
    location: "Damascus, Syria",
    year: "2007",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },

  // ===== 2006 =====
  {
    img: "/images/roll-up-go.jpg",
    alt: "Roll Up and Go fast food concept in Damascus",
    title: "ROLL UP & GO",
    type: "FAST FOOD",
    location: "Damascus, Syria",
    year: "2006",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },

  // ===== 2002 =====
  {
    img: "/images/steed-cafe.jpg",
    alt: "Steed Gemini cafe and bar in Damascus",
    title: "STEED ( GEMINI )",
    type: "CAFÉ & Bar",
    location: "Damascus, Syria",
    year: "2002",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },
  {
    img: "/images/taj-mahel-indian-restaurant.jpg",
    alt: "Taj Mahal Indian restaurant in Damascus",
    title: "TAJ MAHAL",
    type: "First Indian Restaurant",
    location: "Damascus, Syria",
    year: "2002",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },

  // ===== 2001 =====
  {
    img: "/images/al-saj.png",
    alt: "Al Saj bakery in Damascus",
    title: "AL SAJ",
    type: "BAKERY",
    location: "Damascus, Syria",
    year: "2001",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },

  // ===== 2000 =====
  {
    img: "/images/under-graound-bar.png",
    alt: "Under Ground nightclub and bar in Damascus",
    title: "UNDER GROUND",
    type: "Night CLUB & Bar",
    location: "Damascus, Syria",
    year: "2000",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },

  // ===== 1999 =====
  {
    img: "/images/pit-stop-cafe.jpg",
    alt: "Pit Stop cafe and shisha in Damascus",
    title: "PIT STOP",
    type: "24 Hours CAFÉ & Shisha",
    location: "Damascus, Syria",
    year: "1999",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },

  // ===== 1997 =====
  {
    img: "/images/gemini-cafe-grill.png",
    alt: "Gemini Grill steakhouse restaurant in Damascus",
    title: "GEMINI GRILL",
    type: "STEAK HOUSE RESTAURANT",
    location: "Damascus, Syria",
    year: "1997",
    scope: "FULL CONCEPT CREATION",
    href: "/our-clients",
  },

  // ...
];

const PProjects = () => {
  return (
    <section
      id="projects"
      className="bg-[url('/images/p-bg.webp')] bg-cover bg-center bg-no-repeat text-white mt-20 md:mt-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-6 sm:py-16">

        {/* Section Title */}
        <div className="relative mb-6 sm:mb-12 mt-6 sm:mt-12">
          <h2 className="text-lg sm:text-xl text-black font-bold tracking-wider text-center">
            OUR CLIENTS IN DUBAI
          </h2>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((card, index) => (
            <Link
              key={index}
              href={card.href || "#"}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer w-full block"
            >
              {/* Background image */}
              <Image
                src={card.img}
                alt={card.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Center content */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-[0.2em] mb-4">
                  {card.title}
                </h3>

                {card.type && (
                  <p className="text-xs sm:text-sm tracking-[0.25em] mb-1">
                    {card.type}
                  </p>
                )}

                {card.location && (
                  <p className="text-[11px] sm:text-xs tracking-[0.18em] mb-1">
                    {card.location}
                  </p>
                )}

                {card.year && (
                  <p className="text-[11px] sm:text-xs tracking-[0.18em] mb-1">
                    {card.year}
                  </p>
                )}

                {card.scope && (
                  <p className="text-[11px] sm:text-xs tracking-[0.18em] mt-2">
                    {card.scope}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PProjects;
