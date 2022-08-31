import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { DataContext } from "./Context";
import SearchBar from "./SearchBar";
function HomeContainer() {
  const [allCountries, setAllCountries] = useState([
    {
      name: {
        common: "India",
        official: "Republic of India",
        nativeName: {
          eng: { official: "Republic of India", common: "India" },
          hin: { official: "भारत गणराज्य", common: "भारत" },
          tam: { official: "இந்தியக் குடியரசு", common: "இந்தியா" },
        },
      },
      tld: [".in"],
      cca2: "IN",
      ccn3: "356",
      cca3: "IND",
      cioc: "IND",
      independent: true,
      status: "officially-assigned",
      unMember: true,
      currencies: { INR: { name: "Indian rupee", symbol: "₹" } },
      idd: { root: "+9", suffixes: ["1"] },
      capital: ["New Delhi"],
      altSpellings: [
        "IN",
        "Bhārat",
        "Republic of India",
        "Bharat Ganrajya",
        "இந்தியா",
      ],
      region: "Asia",
      subregion: "Southern Asia",
      languages: { eng: "English", hin: "Hindi", tam: "Tamil" },
      translations: {
        ara: { official: "جمهورية الهند", common: "الهند" },
        bre: { official: "Republik India", common: "India" },
        ces: { official: "Indická republika", common: "Indie" },
        cym: { official: "Republic of India", common: "India" },
        deu: { official: "Republik Indien", common: "Indien" },
        est: { official: "India Vabariik", common: "India" },
        fin: { official: "Intian tasavalta", common: "Intia" },
        fra: { official: "République de l'Inde", common: "Inde" },
        hrv: { official: "Republika Indija", common: "Indija" },
        hun: { official: "Indiai Köztársaság", common: "India" },
        ita: { official: "Repubblica dell'India", common: "India" },
        jpn: { official: "インド共和国", common: "インド" },
        kor: { official: "인도 공화국", common: "인도" },
        nld: { official: "Republiek India", common: "India" },
        per: { official: "جمهوری هندوستان", common: "هند" },
        pol: { official: "Republika Indii", common: "Indie" },
        por: { official: "República da Índia", common: "Índia" },
        rus: { official: "Республика Индия", common: "Индия" },
        slk: { official: "Indická republika", common: "India" },
        spa: { official: "República de la India", common: "India" },
        swe: { official: "Republiken Indien", common: "Indien" },
        urd: { official: "جمہوریہ بھارت", common: "بھارت" },
        zho: { official: "印度共和国", common: "印度" },
      },
      latlng: [20.0, 77.0],
      landlocked: false,
      borders: ["BGD", "BTN", "MMR", "CHN", "NPL", "PAK"],
      area: 3287590.0,
      demonyms: {
        eng: { f: "Indian", m: "Indian" },
        fra: { f: "Indienne", m: "Indien" },
      },
      flag: "\uD83C\uDDEE\uD83C\uDDF3",
      maps: {
        googleMaps: "https://goo.gl/maps/WSk3fLwG4vtPQetp7",
        openStreetMaps: "https://www.openstreetmap.org/relation/304716",
      },
      population: 1380004385,
      gini: { 2011: 35.7 },
      fifa: "IND",
      car: { signs: ["IND"], side: "left" },
      timezones: ["UTC+05:30"],
      continents: ["Asia"],
      flags: {
        png: "https://flagcdn.com/w320/in.png",
        svg: "https://flagcdn.com/in.svg",
      },
      coatOfArms: {
        png: "https://mainfacts.com/media/images/coats_of_arms/in.png",
        svg: "https://mainfacts.com/media/images/coats_of_arms/in.svg",
      },
      startOfWeek: "monday",
      capitalInfo: { latlng: [28.6, 77.2] },
      postalCode: { format: "######", regex: "^(\\d{6})$" },
    },
    {
      name: {
        common: "India",
        official: "Republic of India",
        nativeName: {
          eng: { official: "Republic of India", common: "India" },
          hin: { official: "भारत गणराज्य", common: "भारत" },
          tam: { official: "இந்தியக் குடியரசு", common: "இந்தியா" },
        },
      },
      tld: [".in"],
      cca2: "IN",
      ccn3: "356",
      cca3: "IND",
      cioc: "IND",
      independent: true,
      status: "officially-assigned",
      unMember: true,
      currencies: { INR: { name: "Indian rupee", symbol: "₹" } },
      idd: { root: "+9", suffixes: ["1"] },
      capital: ["New Delhi"],
      altSpellings: [
        "IN",
        "Bhārat",
        "Republic of India",
        "Bharat Ganrajya",
        "இந்தியா",
      ],
      region: "Asia",
      subregion: "Southern Asia",
      languages: { eng: "English", hin: "Hindi", tam: "Tamil" },
      translations: {
        ara: { official: "جمهورية الهند", common: "الهند" },
        bre: { official: "Republik India", common: "India" },
        ces: { official: "Indická republika", common: "Indie" },
        cym: { official: "Republic of India", common: "India" },
        deu: { official: "Republik Indien", common: "Indien" },
        est: { official: "India Vabariik", common: "India" },
        fin: { official: "Intian tasavalta", common: "Intia" },
        fra: { official: "République de l'Inde", common: "Inde" },
        hrv: { official: "Republika Indija", common: "Indija" },
        hun: { official: "Indiai Köztársaság", common: "India" },
        ita: { official: "Repubblica dell'India", common: "India" },
        jpn: { official: "インド共和国", common: "インド" },
        kor: { official: "인도 공화국", common: "인도" },
        nld: { official: "Republiek India", common: "India" },
        per: { official: "جمهوری هندوستان", common: "هند" },
        pol: { official: "Republika Indii", common: "Indie" },
        por: { official: "República da Índia", common: "Índia" },
        rus: { official: "Республика Индия", common: "Индия" },
        slk: { official: "Indická republika", common: "India" },
        spa: { official: "República de la India", common: "India" },
        swe: { official: "Republiken Indien", common: "Indien" },
        urd: { official: "جمہوریہ بھارت", common: "بھارت" },
        zho: { official: "印度共和国", common: "印度" },
      },
      latlng: [20.0, 77.0],
      landlocked: false,
      borders: ["BGD", "BTN", "MMR", "CHN", "NPL", "PAK"],
      area: 3287590.0,
      demonyms: {
        eng: { f: "Indian", m: "Indian" },
        fra: { f: "Indienne", m: "Indien" },
      },
      flag: "\uD83C\uDDEE\uD83C\uDDF3",
      maps: {
        googleMaps: "https://goo.gl/maps/WSk3fLwG4vtPQetp7",
        openStreetMaps: "https://www.openstreetmap.org/relation/304716",
      },
      population: 1380004385,
      gini: { 2011: 35.7 },
      fifa: "IND",
      car: { signs: ["IND"], side: "left" },
      timezones: ["UTC+05:30"],
      continents: ["Asia"],
      flags: {
        png: "https://flagcdn.com/w320/in.png",
        svg: "https://flagcdn.com/in.svg",
      },
      coatOfArms: {
        png: "https://mainfacts.com/media/images/coats_of_arms/in.png",
        svg: "https://mainfacts.com/media/images/coats_of_arms/in.svg",
      },
      startOfWeek: "monday",
      capitalInfo: { latlng: [28.6, 77.2] },
      postalCode: { format: "######", regex: "^(\\d{6})$" },
    },
    {
      name: {
        common: "India",
        official: "Republic of India",
        nativeName: {
          eng: { official: "Republic of India", common: "India" },
          hin: { official: "भारत गणराज्य", common: "भारत" },
          tam: { official: "இந்தியக் குடியரசு", common: "இந்தியா" },
        },
      },
      tld: [".in"],
      cca2: "IN",
      ccn3: "356",
      cca3: "IND",
      cioc: "IND",
      independent: true,
      status: "officially-assigned",
      unMember: true,
      currencies: { INR: { name: "Indian rupee", symbol: "₹" } },
      idd: { root: "+9", suffixes: ["1"] },
      capital: ["New Delhi"],
      altSpellings: [
        "IN",
        "Bhārat",
        "Republic of India",
        "Bharat Ganrajya",
        "இந்தியா",
      ],
      region: "Asia",
      subregion: "Southern Asia",
      languages: { eng: "English", hin: "Hindi", tam: "Tamil" },
      translations: {
        ara: { official: "جمهورية الهند", common: "الهند" },
        bre: { official: "Republik India", common: "India" },
        ces: { official: "Indická republika", common: "Indie" },
        cym: { official: "Republic of India", common: "India" },
        deu: { official: "Republik Indien", common: "Indien" },
        est: { official: "India Vabariik", common: "India" },
        fin: { official: "Intian tasavalta", common: "Intia" },
        fra: { official: "République de l'Inde", common: "Inde" },
        hrv: { official: "Republika Indija", common: "Indija" },
        hun: { official: "Indiai Köztársaság", common: "India" },
        ita: { official: "Repubblica dell'India", common: "India" },
        jpn: { official: "インド共和国", common: "インド" },
        kor: { official: "인도 공화국", common: "인도" },
        nld: { official: "Republiek India", common: "India" },
        per: { official: "جمهوری هندوستان", common: "هند" },
        pol: { official: "Republika Indii", common: "Indie" },
        por: { official: "República da Índia", common: "Índia" },
        rus: { official: "Республика Индия", common: "Индия" },
        slk: { official: "Indická republika", common: "India" },
        spa: { official: "República de la India", common: "India" },
        swe: { official: "Republiken Indien", common: "Indien" },
        urd: { official: "جمہوریہ بھارت", common: "بھارت" },
        zho: { official: "印度共和国", common: "印度" },
      },
      latlng: [20.0, 77.0],
      landlocked: false,
      borders: ["BGD", "BTN", "MMR", "CHN", "NPL", "PAK"],
      area: 3287590.0,
      demonyms: {
        eng: { f: "Indian", m: "Indian" },
        fra: { f: "Indienne", m: "Indien" },
      },
      flag: "\uD83C\uDDEE\uD83C\uDDF3",
      maps: {
        googleMaps: "https://goo.gl/maps/WSk3fLwG4vtPQetp7",
        openStreetMaps: "https://www.openstreetmap.org/relation/304716",
      },
      population: 1380004385,
      gini: { 2011: 35.7 },
      fifa: "IND",
      car: { signs: ["IND"], side: "left" },
      timezones: ["UTC+05:30"],
      continents: ["Asia"],
      flags: {
        png: "https://flagcdn.com/w320/in.png",
        svg: "https://flagcdn.com/in.svg",
      },
      coatOfArms: {
        png: "https://mainfacts.com/media/images/coats_of_arms/in.png",
        svg: "https://mainfacts.com/media/images/coats_of_arms/in.svg",
      },
      startOfWeek: "monday",
      capitalInfo: { latlng: [28.6, 77.2] },
      postalCode: { format: "######", regex: "^(\\d{6})$" },
    },
    {
      name: {
        common: "India",
        official: "Republic of India",
        nativeName: {
          eng: { official: "Republic of India", common: "India" },
          hin: { official: "भारत गणराज्य", common: "भारत" },
          tam: { official: "இந்தியக் குடியரசு", common: "இந்தியா" },
        },
      },
      tld: [".in"],
      cca2: "IN",
      ccn3: "356",
      cca3: "IND",
      cioc: "IND",
      independent: true,
      status: "officially-assigned",
      unMember: true,
      currencies: { INR: { name: "Indian rupee", symbol: "₹" } },
      idd: { root: "+9", suffixes: ["1"] },
      capital: ["New Delhi"],
      altSpellings: [
        "IN",
        "Bhārat",
        "Republic of India",
        "Bharat Ganrajya",
        "இந்தியா",
      ],
      region: "Asia",
      subregion: "Southern Asia",
      languages: { eng: "English", hin: "Hindi", tam: "Tamil" },
      translations: {
        ara: { official: "جمهورية الهند", common: "الهند" },
        bre: { official: "Republik India", common: "India" },
        ces: { official: "Indická republika", common: "Indie" },
        cym: { official: "Republic of India", common: "India" },
        deu: { official: "Republik Indien", common: "Indien" },
        est: { official: "India Vabariik", common: "India" },
        fin: { official: "Intian tasavalta", common: "Intia" },
        fra: { official: "République de l'Inde", common: "Inde" },
        hrv: { official: "Republika Indija", common: "Indija" },
        hun: { official: "Indiai Köztársaság", common: "India" },
        ita: { official: "Repubblica dell'India", common: "India" },
        jpn: { official: "インド共和国", common: "インド" },
        kor: { official: "인도 공화국", common: "인도" },
        nld: { official: "Republiek India", common: "India" },
        per: { official: "جمهوری هندوستان", common: "هند" },
        pol: { official: "Republika Indii", common: "Indie" },
        por: { official: "República da Índia", common: "Índia" },
        rus: { official: "Республика Индия", common: "Индия" },
        slk: { official: "Indická republika", common: "India" },
        spa: { official: "República de la India", common: "India" },
        swe: { official: "Republiken Indien", common: "Indien" },
        urd: { official: "جمہوریہ بھارت", common: "بھارت" },
        zho: { official: "印度共和国", common: "印度" },
      },
      latlng: [20.0, 77.0],
      landlocked: false,
      borders: ["BGD", "BTN", "MMR", "CHN", "NPL", "PAK"],
      area: 3287590.0,
      demonyms: {
        eng: { f: "Indian", m: "Indian" },
        fra: { f: "Indienne", m: "Indien" },
      },
      flag: "\uD83C\uDDEE\uD83C\uDDF3",
      maps: {
        googleMaps: "https://goo.gl/maps/WSk3fLwG4vtPQetp7",
        openStreetMaps: "https://www.openstreetmap.org/relation/304716",
      },
      population: 1380004385,
      gini: { 2011: 35.7 },
      fifa: "IND",
      car: { signs: ["IND"], side: "left" },
      timezones: ["UTC+05:30"],
      continents: ["Asia"],
      flags: {
        png: "https://flagcdn.com/w320/in.png",
        svg: "https://flagcdn.com/in.svg",
      },
      coatOfArms: {
        png: "https://mainfacts.com/media/images/coats_of_arms/in.png",
        svg: "https://mainfacts.com/media/images/coats_of_arms/in.svg",
      },
      startOfWeek: "monday",
      capitalInfo: { latlng: [28.6, 77.2] },
      postalCode: { format: "######", regex: "^(\\d{6})$" },
    },
    {
      name: {
        common: "India",
        official: "Republic of India",
        nativeName: {
          eng: { official: "Republic of India", common: "India" },
          hin: { official: "भारत गणराज्य", common: "भारत" },
          tam: { official: "இந்தியக் குடியரசு", common: "இந்தியா" },
        },
      },
      tld: [".in"],
      cca2: "IN",
      ccn3: "356",
      cca3: "IND",
      cioc: "IND",
      independent: true,
      status: "officially-assigned",
      unMember: true,
      currencies: { INR: { name: "Indian rupee", symbol: "₹" } },
      idd: { root: "+9", suffixes: ["1"] },
      capital: ["New Delhi"],
      altSpellings: [
        "IN",
        "Bhārat",
        "Republic of India",
        "Bharat Ganrajya",
        "இந்தியா",
      ],
      region: "Asia",
      subregion: "Southern Asia",
      languages: { eng: "English", hin: "Hindi", tam: "Tamil" },
      translations: {
        ara: { official: "جمهورية الهند", common: "الهند" },
        bre: { official: "Republik India", common: "India" },
        ces: { official: "Indická republika", common: "Indie" },
        cym: { official: "Republic of India", common: "India" },
        deu: { official: "Republik Indien", common: "Indien" },
        est: { official: "India Vabariik", common: "India" },
        fin: { official: "Intian tasavalta", common: "Intia" },
        fra: { official: "République de l'Inde", common: "Inde" },
        hrv: { official: "Republika Indija", common: "Indija" },
        hun: { official: "Indiai Köztársaság", common: "India" },
        ita: { official: "Repubblica dell'India", common: "India" },
        jpn: { official: "インド共和国", common: "インド" },
        kor: { official: "인도 공화국", common: "인도" },
        nld: { official: "Republiek India", common: "India" },
        per: { official: "جمهوری هندوستان", common: "هند" },
        pol: { official: "Republika Indii", common: "Indie" },
        por: { official: "República da Índia", common: "Índia" },
        rus: { official: "Республика Индия", common: "Индия" },
        slk: { official: "Indická republika", common: "India" },
        spa: { official: "República de la India", common: "India" },
        swe: { official: "Republiken Indien", common: "Indien" },
        urd: { official: "جمہوریہ بھارت", common: "بھارت" },
        zho: { official: "印度共和国", common: "印度" },
      },
      latlng: [20.0, 77.0],
      landlocked: false,
      borders: ["BGD", "BTN", "MMR", "CHN", "NPL", "PAK"],
      area: 3287590.0,
      demonyms: {
        eng: { f: "Indian", m: "Indian" },
        fra: { f: "Indienne", m: "Indien" },
      },
      flag: "\uD83C\uDDEE\uD83C\uDDF3",
      maps: {
        googleMaps: "https://goo.gl/maps/WSk3fLwG4vtPQetp7",
        openStreetMaps: "https://www.openstreetmap.org/relation/304716",
      },
      population: 1380004385,
      gini: { 2011: 35.7 },
      fifa: "IND",
      car: { signs: ["IND"], side: "left" },
      timezones: ["UTC+05:30"],
      continents: ["Asia"],
      flags: {
        png: "https://flagcdn.com/w320/in.png",
        svg: "https://flagcdn.com/in.svg",
      },
      coatOfArms: {
        png: "https://mainfacts.com/media/images/coats_of_arms/in.png",
        svg: "https://mainfacts.com/media/images/coats_of_arms/in.svg",
      },
      startOfWeek: "monday",
      capitalInfo: { latlng: [28.6, 77.2] },
      postalCode: { format: "######", regex: "^(\\d{6})$" },
    },
    {
      name: {
        common: "India",
        official: "Republic of India",
        nativeName: {
          eng: { official: "Republic of India", common: "India" },
          hin: { official: "भारत गणराज्य", common: "भारत" },
          tam: { official: "இந்தியக் குடியரசு", common: "இந்தியா" },
        },
      },
      tld: [".in"],
      cca2: "IN",
      ccn3: "356",
      cca3: "IND",
      cioc: "IND",
      independent: true,
      status: "officially-assigned",
      unMember: true,
      currencies: { INR: { name: "Indian rupee", symbol: "₹" } },
      idd: { root: "+9", suffixes: ["1"] },
      capital: ["New Delhi"],
      altSpellings: [
        "IN",
        "Bhārat",
        "Republic of India",
        "Bharat Ganrajya",
        "இந்தியா",
      ],
      region: "Asia",
      subregion: "Southern Asia",
      languages: { eng: "English", hin: "Hindi", tam: "Tamil" },
      translations: {
        ara: { official: "جمهورية الهند", common: "الهند" },
        bre: { official: "Republik India", common: "India" },
        ces: { official: "Indická republika", common: "Indie" },
        cym: { official: "Republic of India", common: "India" },
        deu: { official: "Republik Indien", common: "Indien" },
        est: { official: "India Vabariik", common: "India" },
        fin: { official: "Intian tasavalta", common: "Intia" },
        fra: { official: "République de l'Inde", common: "Inde" },
        hrv: { official: "Republika Indija", common: "Indija" },
        hun: { official: "Indiai Köztársaság", common: "India" },
        ita: { official: "Repubblica dell'India", common: "India" },
        jpn: { official: "インド共和国", common: "インド" },
        kor: { official: "인도 공화국", common: "인도" },
        nld: { official: "Republiek India", common: "India" },
        per: { official: "جمهوری هندوستان", common: "هند" },
        pol: { official: "Republika Indii", common: "Indie" },
        por: { official: "República da Índia", common: "Índia" },
        rus: { official: "Республика Индия", common: "Индия" },
        slk: { official: "Indická republika", common: "India" },
        spa: { official: "República de la India", common: "India" },
        swe: { official: "Republiken Indien", common: "Indien" },
        urd: { official: "جمہوریہ بھارت", common: "بھارت" },
        zho: { official: "印度共和国", common: "印度" },
      },
      latlng: [20.0, 77.0],
      landlocked: false,
      borders: ["BGD", "BTN", "MMR", "CHN", "NPL", "PAK"],
      area: 3287590.0,
      demonyms: {
        eng: { f: "Indian", m: "Indian" },
        fra: { f: "Indienne", m: "Indien" },
      },
      flag: "\uD83C\uDDEE\uD83C\uDDF3",
      maps: {
        googleMaps: "https://goo.gl/maps/WSk3fLwG4vtPQetp7",
        openStreetMaps: "https://www.openstreetmap.org/relation/304716",
      },
      population: 1380004385,
      gini: { 2011: 35.7 },
      fifa: "IND",
      car: { signs: ["IND"], side: "left" },
      timezones: ["UTC+05:30"],
      continents: ["Asia"],
      flags: {
        png: "https://flagcdn.com/w320/in.png",
        svg: "https://flagcdn.com/in.svg",
      },
      coatOfArms: {
        png: "https://mainfacts.com/media/images/coats_of_arms/in.png",
        svg: "https://mainfacts.com/media/images/coats_of_arms/in.svg",
      },
      startOfWeek: "monday",
      capitalInfo: { latlng: [28.6, 77.2] },
      postalCode: { format: "######", regex: "^(\\d{6})$" },
    },
  ]);
  const content = useContext(DataContext);
  useEffect(() => setAllCountries(content), [content]);
  function searchCurrency(searchString) {
    console.log(searchString, content);
    if (searchString == "") setAllCountries(content);
    else
      setAllCountries([
        ...content.filter((item) => {
          try {
            let tempVar = Object.keys(item.currencies);
            console.log(tempVar);
            for (let key of tempVar) {
              if (
                key.substring(0, searchString.length).toLowerCase() ==
                searchString.toLowerCase()
              )
                return true;
            }
            return false;
          } catch {
            return false;
          }
        }),
      ]);
  }
  return (
    <div class="home-container">
      <SearchBar
        search={searchCurrency}
        searchPlaceHolder="Search Currency..."
      />
      <div class="card-container">
        {allCountries !== undefined && allCountries.length != 0 ? (
          allCountries.map((item, index) => (
            <Card cardItem={item} key={index} />
          ))
        ) : (
          <h1 class="no-data">No Data!</h1>
        )}
      </div>
    </div>
  );
}

export default React.memo(HomeContainer);
