"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
 
  // 👉 keep adding type/location/year/scope for other items as you want

  // ===== 2026 =====
{
  img: "/images/ykitori.jpeg",
  alt: "Fusion Japanese Restobar",
  title: "YKITORI",
  type: "Fusion Japanese Restobar",
  location: "Double Tree By Hilton Hotel, Aljadaf Dubai, UAE",
  year: "2026",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},
{
  img: "/images/club-d-orient.jpeg",
  alt: "Authentic Syrian Restaurant",
  title: "Club d'Orient",
  type: "Authentic Syrian Restaurant",
  location: "Adrress Montegomrie Hotel, Emirates Hills, Dubai, UAE",
  year: "2026",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},
{
  img: "/images/laylak-1.jpg",
  alt: "Fusion Japanese Restobar",
  title: "YKITORI",
  type: "Fusion Japanese Restobar",
  location: "Double Tree by Hilton Hotel, Aljadaf Dubai, UAE",
  year: "2026",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},

// ===== 2025 =====
{
  img: "/images/naranj.jpg",
  alt: "Social Restaurant & Café",
  title: "Naranj Café",
  type: "Social Restaurant & Café",
  location: "Iris Blue Tower, Marina Walk, Dubai, UAE",
  year: "2025",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},

// ===== 2023 =====
{
  img: "/images/big-boss.jpeg",
  alt: "BURGER RESTAURANT",
  title: "BIG BOSS",
  type: "BURGER RESTAURANT",
  location: "SPRINGS SOUQ By EMAAR, Emirates Hills, Dubai, UAE",
  year: "2023",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},
{
  img: "/images/ave.png",
  alt: "Restaurant & Café, Sushi Bar",
  title: "AVE",
  type: "Restaurant & Café, Sushi Bar",
  location: "DOWNTOWN, DUBAI, UAE",
  year: "2023",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},

// ===== 2022 =====
{
  img: "/images/code-eight.jpeg",
  alt: "Restaurant & Mixolounge",
  title: "CODE EIGHT",
  type: "Restaurant & Mixolounge",
  location: "Mercure Hotel, Albarsha Hieghts, Dubai, UAE",
  year: "2022",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},

// ===== 2021 =====
{
  img: "/images/crazy-mask.jpg",
  alt: "BAR & CIGAR LOUNGE",
  title: "CREAZY MASK",
  type: "BAR & CIGAR LOUNGE",
  location: "Oasis Hotel, Alfattan Tower JBR, DUBAI, UAE",
  year: "2021",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},
{
  img: "/images/asuman.jpeg",
  alt: "CHOCOLATIRE  Shop",
  title: "ASUMAN",
  type: "CHOCOLATIRE  Shop",
  location: "JUMIERAH Main Road, Dubai, UAE",
  year: "2021",
  scope: "CONCEPT DEVELOPMENT",
  href: "/our-clients",
},
{
  img: "/images/nurai-restaurant.jpg",
  alt: "International Café",
  title: "NURAI",
  type: "International Café",
  location: "Avenue Mall, Motor City, Dubai, UAE",
  year: "2021",
  scope: "CONCEPT DEVELOPMENT",
  href: "/our-clients",
},
{
  img: "/images/baytw.webp",
  alt: "Bayt Ward Interior",
  title: "BAYT WARD",
  type: "LEBANESE RESTAURANT",
  location: "Sheikh Mohamed Boulevard, Dubai,",
  year: "2021",
  scope: "CONCEPT DEVELOPMENT",
  href: "/our-clients",
},

// ===== 2020 =====
{
  img: "/images/karakna.png",
  alt: "Emirati Bites",
  title: "KARAKNA",
  type: "Emirati Bites",
  location: "City Walk, Dubai, UAE",
  year: "2020",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},
{
  img: "/images/czn-burak.webp",
  alt: "Turkish Restaurant & Shisha Lounge",
  title: "CZN BURAK",
  type: "Turkish Restaurant & Shisha Lounge",
  location: "DOWNTOWN, DUBAI, UAE",
  year: "2020",
  scope: "F&B CONSULTANCY",
  href: "/our-clients",
},
{
  img: "/images/sahel-nom.jpg",
  alt: "STREET FOOD",
  title: "SAHELNOM EXPRESS",
  type: "STREET FOOD",
  location: "Blue Bay Tower, BUSINESS BAY, DUBAI, UAE",
  year: "2020",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},
{
  img: "/images/midhat.avif",
  alt: "Apartment Interior Design",
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
  alt: "RESTAURANT & CAFÉ",
  title: "CHARCOAL GARDEN",
  type: "RESTAURANT & CAFÉ",
  location: "SHAZA Tower, MEDIA CITY, DUBAI, UAE",
  year: "2019",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},
{
  img: "/images/estekana.png",
  alt: "CAFÉ",
  title: "ESTIKANA",
  type: "CAFÉ",
  location: "Blue Bay Tower, BUSINESS BAY, DUBAI, UAE",
  year: "2019",
  scope: "F&B CONSULTANCY",
  href: "/our-clients",
},
{
  img: "/images/sahelnom-zaman.jpg",
  alt: "RESTAURANT",
  title: "SAHELNOM ZAMAN",
  type: "RESTAURANT",
  location: "BLUE WATER ISLAND, DUBAI, UAE",
  year: "2019",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},
{
  img: "/images/samoon.jpg",
  alt: "Apartment Interior Design",
  title: "SAMOON",
  type: "FAST FOOD",
  location: "Media City, Dubai",
  year: "2019",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},

// ===== 2018 =====
{
  img: "/images/karamna-alkhalej.png",
  alt: "Fusion Levantine-Gulf RESTAURANT",
  title: "KARAMNA ALKHALEEJ",
  type: "Fusion Levantine-Gulf RESTAURANT",
  location: "ADRRESS DOWNTOWN HOTEL, DUBAI, UAE",
  year: "2018",
  scope: "CONCEPT DEVELOPMENT",
  href: "/our-clients",
},
{
  img: "/images/atmosfire.jpeg",
  alt: "GRILL RESTAURANT",
  title: "ATMOSFIRE",
  type: "GRILL RESTAURANT",
  location: "JUMIERAH Main Road, Dubai, UAE",
  year: "2018",
  scope: "F&B CONSULTANCY",
  href: "/our-clients",
},
{
  img: "/images/above.avif",
  alt: "Apartment Interior Design",
  title: "ABOVE",
  type: "NIGHT CLUB",
  location: "DuSofitel DT, Dubai",
  year: "2018",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},
{
  img: "/images/pit.avif",
  alt: "Apartment Interior Design",
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
  alt: "CAFÉ & RESTAURANT",
  title: "SAHELNOM",
  type: "CAFÉ & RESTAURANT",
  location: "Blue Bay Tower, BUSINESS BAY, DUBAI, UAE",
  year: "2017",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},

// ===== 2016 =====
{
  img: "/images/lua.jpg",
  alt: "FUSION Restaurant",
  title: "LUA",
  type: "FUSION Restaurant",
  location: "SOFITEL HOTEL, THE PALM, DUBAI",
  year: "2016",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},
{
  img: "/images/monte-carlo.jpg",
  alt: "Fusion Restaurant & Café",
  title: "MONTE CARLO STARS",
  type: "Fusion Restaurant & Café",
  location: "Marina - Jumeirah Beach Road - Dubai, UAE",
  year: "2016",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},

// ===== 2014 =====
{
  img: "/images/times-of-arabia.avif",
  alt: "Apartment Interior Design",
  title: "TIMES OF ARABIA",
  type: "RESTAURANT",
  location: "Souk Mafinat Jumeirah, Dubai",
  year: "2014",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},

// ===== 2013 =====
{
  img: "/images/ward.webp",
  alt: "Apartment Interior Design",
  title: "WARD",
  type: "CAFE & RESTAURANT",
  location: "Marina, Dubai",
  year: "2013",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},
{
  img: "/images/OWN-Restaurant-2.avif",
  alt: "Apartment Interior Design",
  title: "OWN",
  type: "CAFE & RESTAURANT",
  location: "JLT, Dubai",
  year: "2013",
  scope: "F&B CONSULTANCY",
  href: "/our-clients",
},

// ===== 2003 =====
{
  img: "/images/times.avif",
  alt: "Apartment Interior Design",
  title: "TIMES",
  type: "RESTAURANT & LOUNGE",
  location: "Media City, Dubai",
  year: "2003",
  scope: "FULL CONCEPT CREATION",
  href: "/our-clients",
},

// ===== 1999 =====
{
  img: "/images/gemini-pit-stop.jpg",
  alt: "24 Hours CAFÉ & Shisha",
  title: "PIT STOP",
  type: "24 Hours CAFÉ & Shisha",
  location: "ABU ROMMANEH, DAMASCUS, Syria",
  year: "1999",
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
