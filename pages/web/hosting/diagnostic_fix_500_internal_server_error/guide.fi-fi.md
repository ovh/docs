---
deprecated: true
title: 'Webhotelli: Virheilmoitus 500 Internal Server Error'
excerpt: 'Webhotelli: Virheilmoitus 500 Internal Server Error'
id: '1987'
slug: webhotelli_virheilmoitus_500_internal_server_error
legacy_guide_number: g1987
---


## .htaccess
Mikäli .htaccess-tiedoston syntaksi on väärin, näyttää verkkopalvelin 500 Internal Server Error -virheilmoitusta. Tiedosto on nimettävä uudelleen esimerkiksi muotoon .htaccess_bak. Jos sivu toimii tämän jälkeen normaalisti, virheen aiheutti siis .htaccess.

Voit lukea lisää tästä ohjeesta:
[]({legacy}1967)


## Luvat/oikeudet
Skripteille annettavissa oikeuksissa on noudatettava joitakin turvallisuussääntöjä:

- sivun juuren täytyy ehdottomasti olla 705 (OVH:n myöntämät oletusluvat). Kyseessä on FTP-palvelimesi hakemisto/ tai . (piste), joten älä muokkaa sitä.
- muut hakemistot: enintään 755
- Php/cgi-skriptit: enintään 755.


Miten tiedoston tai hakemiston oikeuksia voi muokata: [Katso tästä](https://docs.ovh.com/pages/releaseview.action?pageId=12225474)


## Skriptivirhe
Mikäli ohjelmoit esimerkiksi Perl-kielellä, voi skriptissä oleva virhe johtaa virheilmoitukseen. Valitettavasti asiasta ei voi saada lisätietoja (turvallisuuskysymys). Voit käyttää skriptin korjaamiseen telnet/ssh-yhteyttä (mahdollinen Pro-webhotelleista eteenpäin).

Klikkaa tästä lukeaksesi lisää:
[]({legacy}1962)

