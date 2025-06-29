import { Faker, hu } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';
import * as fs from 'fs';
import * as path from 'path';

export async function szemelyGeneralas(index: number) {
  const customFaker = new Faker({ locale: [hu] });
  // Magyar nevek és végzettségek
  const magyarVezeteknevek = [
    'Nagy', 'Kovács', 'Tóth', 'Szabó', 'Horváth', 'Varga', 'Kiss', 'Molnár', 'Németh', 'Farkas',  
    'Balogh', 'Papp', 'Takács', 'Juhász', 'Lakatos', 'Oláh', 'Simon', 'Rácz', 'Fekete', 'Vass',  
    'Gál', 'Kelemen', 'Szalai', 'Sándor', 'Bíró', 'Mészáros', 'Bognár', 'Fodor', 'Halász', 'Pintér',  
    'Vincze', 'Barna', 'Csányi', 'György', 'Fehér', 'Török', 'Balla', 'Antal', 'Veres', 'Hegedűs',  
    'Somogyi', 'Péter', 'Katona', 'Barta', 'Illés', 'Bálint', 'Szőke', 'Szűcs', 'Tamás', 'Király',  
    'Dobos', 'Csonka', 'Boros', 'Béres', 'Bencsik', 'Hajdu', 'Márton', 'Sipos', 'Dobos', 'Pap'
  ];
  const magyarKeresztnevek = [
    'Miklós', 'Béla', 'József', 'László', 'István', 'Ferenc', 'Gábor', 'Zoltán', 'Sándor', 'Tamás',  
    'András', 'Péter', 'György', 'Imre', 'Attila', 'Károly', 'Róbert', 'Balázs', 'Ádám', 'Bence',  
    'Csaba', 'Dávid', 'Ernő', 'Jenő', 'Kálmán', 'Márton', 'Norbert', 'Ottó', 'Pál', 'Rihárd',  
    'Szilárd', 'Tibor', 'Viktor', 'Vilmos', 'Zsolt', 'Levente', 'Mihály', 'Endre', 'Ákos', 'Bertalan',  
    'Elemér', 'Gergely', 'Lőrinc', 'Mátyás', 'Márk', 'Noel', 'Sebestyén', 'Vince', 'Zsombor', 'Bálint',
    'Erzsébet', 'Mária', 'Katalin', 'Ilona', 'Zsuzsanna', 'Éva', 'Anna', 'Júlia', 'Margit', 'Andrea',  
    'Krisztina', 'Tímea', 'Ágnes', 'Edit', 'Eszter', 'Irén', 'Ildikó', 'Judit', 'Anikó', 'Zsófia',  
    'Beáta', 'Melinda', 'Piroska', 'Réka', 'Nóra', 'Barbara', 'Veronika', 'Szilvia', 'Lilla', 'Bernadett',  
    'Klára', 'Orsolya', 'Hajnalka', 'Rita', 'Boglárka', 'Nikolett', 'Csilla', 'Diána', 'Bianka', 'Alíz',  
    'Adrienn', 'Dorina', 'Dóra', 'Fanni', 'Henrietta', 'Janka', 'Kinga', 'Luca', 'Petra', 'Viktória'
  ];
  const noiKeresztnevek = [
    'Erzsébet', 'Mária', 'Katalin', 'Ilona', 'Zsuzsanna', 'Éva', 'Anna', 'Júlia', 'Margit', 'Andrea',  
    'Krisztina', 'Tímea', 'Ágnes', 'Edit', 'Eszter', 'Irén', 'Ildikó', 'Judit', 'Anikó', 'Zsófia',  
    'Beáta', 'Melinda', 'Piroska', 'Réka', 'Nóra', 'Barbara', 'Veronika', 'Szilvia', 'Lilla', 'Bernadett',  
    'Klára', 'Orsolya', 'Hajnalka', 'Rita', 'Boglárka', 'Nikolett', 'Csilla', 'Diána', 'Bianka', 'Alíz',  
    'Adrienn', 'Dorina', 'Dóra', 'Fanni', 'Henrietta', 'Janka', 'Kinga', 'Luca', 'Petra', 'Viktória'
  ]
  const vegzetsegek = ['nincs', 'alapfok', 'középfok', 'felsőfok'];
  // JSON beolvasása
  const telepulesek = JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', '..', '..', 'database', 'adat-forras', 'telepulesek.json'), 'utf-8'),
  );
  // Közterület típusok
  const kozteruletTipusok = ['utca', 'út', 'tér', 'köz', 'körút', 'fasor'];
  // Ékezetek eltávolítása
  function removeAccents(str: string): string {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ő/g, 'o')
      .replace(/ű/g, 'u')
      .replace(/Ö/g, 'O')
      .replace(/Ü/g, 'U')
      .toLowerCase();
  } 
  let vezeteknev = magyarVezeteknevek[Math.floor(Math.random() * magyarVezeteknevek.length)];
  let keresztnev = magyarKeresztnevek[Math.floor(Math.random() * magyarKeresztnevek.length)];
  let ekezetNelkuliVezeteknev = removeAccents(vezeteknev);
  let ekezetNelkuliKeresztnev = removeAccents(keresztnev);
  let felhasznalonev = `${ekezetNelkuliVezeteknev}.${ekezetNelkuliKeresztnev}${index ? index : ''}`;
  let jogosultsag = 'nincs';
  let email = `${ekezetNelkuliVezeteknev}.${ekezetNelkuliKeresztnev}.${index ? index : ''}@nincs.hu`
  if (index === 1) {
    vezeteknev = 'Nagy';
    keresztnev = 'Főnök';
    ekezetNelkuliVezeteknev = removeAccents(vezeteknev);
    ekezetNelkuliKeresztnev = removeAccents(keresztnev);
    felhasznalonev = 'admin';
    jogosultsag = 'admin';
    email = 'nagy.fonok@nincs.hu'
  } else if (index === 2) {
    vezeteknev = 'Kis';
    keresztnev = 'Főnök';
    ekezetNelkuliVezeteknev = removeAccents(vezeteknev);
    ekezetNelkuliKeresztnev = removeAccents(keresztnev);
    felhasznalonev = 'user';
    jogosultsag = 'user';
    email = 'kis.fonok@nincs.hu'
  } 
  const jelszo = await bcrypt.hash(felhasznalonev, 10);
  // Véletlenszerű irányítószám és város
  const helyseg = telepulesek[Math.floor(Math.random() * telepulesek.length)];
  const utcaNev = `${magyarVezeteknevek[Math.floor(Math.random() * magyarVezeteknevek.length)]} ${
    kozteruletTipusok[Math.floor(Math.random() * kozteruletTipusok.length)]
  } ${Math.floor(Math.random() * 100) + 1}`;
  // Címek generálása
  const cimek = [
    {
      cim_tipus: 'állandó',
      cim_iranyitoszam: helyseg.iranyitoszam,
      cim_varos: helyseg.varos,
      cim_utca: utcaNev,
    },
  ];
  // 50% esély a tartózkodási és levelezési címre
  if (Math.random() < 0.5) {
    const tartHelyseg = telepulesek[Math.floor(Math.random() * telepulesek.length)];
    cimek.push({
      cim_tipus: 'tartózkodási',
      cim_iranyitoszam: tartHelyseg.iranyitoszam,
      cim_varos: tartHelyseg.varos,
      cim_utca: `${magyarVezeteknevek[Math.floor(Math.random() * magyarVezeteknevek.length)]} ${
        kozteruletTipusok[Math.floor(Math.random() * kozteruletTipusok.length)]
      } ${Math.floor(Math.random() * 100) + 1}`,
    });
  }
  if (Math.random() < 0.5) {
    const levHelyseg = telepulesek[Math.floor(Math.random() * telepulesek.length)];
    cimek.push({
      cim_tipus: 'levelezési',
      cim_iranyitoszam: levHelyseg.iranyitoszam,
      cim_varos: levHelyseg.varos,
      cim_utca: `${magyarVezeteknevek[Math.floor(Math.random() * magyarVezeteknevek.length)]} ${
        kozteruletTipusok[Math.floor(Math.random() * kozteruletTipusok.length)]
      } ${Math.floor(Math.random() * 100) + 1}`,
    });
  }
  // 50% esély telefonszámra  
  const telefon = Math.random() < 0.5 ? customFaker.phone.number({style: 'human'}).toString() : null;
  // 80% esély születési dátumra és anyja nevére
  const szuldatum = Math.random() < 0.8 ? customFaker.date.between({ from: '1905-06-20', to: '2025-06-20' }) : null;
  const anyjaneve = Math.random() < 0.8 ? `${
      magyarVezeteknevek[Math.floor(Math.random() * magyarVezeteknevek.length)]
    } ${noiKeresztnevek[Math.floor(Math.random() * noiKeresztnevek.length)]}` : null;
  return {
    szemely_vezeteknev: vezeteknev,
    szemely_keresztnev: keresztnev,
    szemely_szuletesi_datum: szuldatum,
    szemely_anyja_neve: anyjaneve,
    szemely_vegzettseg: vegzetsegek[Math.floor(Math.random() * vegzetsegek.length)], // Egyenletes eloszlás
    szemely_email: email,
    szemely_telefon: telefon,
    szemely_felhasznalonev: felhasznalonev,
    szemely_jelszo: jelszo,
    szemely_jogosultsag: jogosultsag,
    szemely_cimek: cimek,
  };
}