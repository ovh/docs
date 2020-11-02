---
deprecated: true
title: UKK Dedicated Cloud
excerpt: ''
slug: ukk_dedicated_cloud
legacy_guide_number: g598
---


## HA:ta konfiguroidessa saan virheen: "HA virhe: Mahdotonta suorittaa HA:n konfiguraatiota"
Jos tämä virhe jatkuu, sinun täytyy poistaa HA-klusterin konfigurointi ja uudelleenkonfiguroida se käsin. Tehdäksesi tämän, mene klusterin asetuksiin, poisti HA-lisäoptio ja vahvista muutos. Tehtävän päätyttyä, palaa takaisin asetuksiin ja aktivoi HA-lisäoptio uudelleen. Aktivointitehtävän päätyttyä, HA-lisäoptio on uudelleenaktivoitu klusterille.


## Mitä tehdään klusterin "Rescan Datastore" -lisäoptiolla:
Tätä lisäoptiota käytetään iSCSI-Storageilla polkujen päivittämiseksi.
Tämä toimenpide ei ole tarpeellinen OVH:lla. Sitä ei käytetä kuin iSCSI:lle, jota me emme tarjoa.


## Hälytyksen jälkeen se jää näkyviin hostiin (punainen kolmio)
Vahvista hälytys ja muuta se vihreäksi hostin hälytys -välilehdellä. Klikkaa näkyviin jäänyttä hälytystä oikealla hiiren painikkeella.


## Yksi VM on tilassa Invalid
Poista VM inventaariosta klikkaamalla sen päällä oikealla hiiren painikkeella.
HUOMIO! Valitse "Poista inventaariosta", ei "Poista levyltä". Jälkimmäisessä tapauksessa menetät VM:n tiedot. 
Tämän jälkeen lisää VM uudelleen inventaarioon.


## Kirjautuessani sisään konsolilla VM:ään näen vain mustan näytön
VM:n käyttöjärjestelmä on siirtänyt näytön lepotilaan. Paina mitä tahansa näppäimistön näppäintä aktivoidaksesi näytön uudelleen.

