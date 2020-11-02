---
deprecated: true
title: 'Sähköposti: Konfigurointiohje Android 5.1 version puhelimille'
excerpt: 'Sähköposti: Konfigurointiohje Android 5.1 version puhelimille'
slug: sahkoposti_konfigurointiohje_android_51_version_puhelimille
legacy_guide_number: g1912
---


## 1. Vaihe: Puhelimen asetukset
Mene ensin älypuhelimesi asetuksiin.

![](images/img_3554.jpg){.thumbnail}


## 2.Vaihe: Tilien hallinta
Mene sitten kohtaan "Tilit".

![](images/img_3555.jpg){.thumbnail}


## 3. Vaihe: Lisää tili
Aluksi on klikattava "Lisää tili".

![](images/img_3556.jpg){.thumbnail}


## 4. Vaihe: Sähköpostiprotokolla
Valitse "IMAP" protokolla jatkaaksesi.

Huom, on mahdollista valita myös "POP". Tässä tapauksessa käytä konfiguraatiotietoja, jotka löytyvät tämän oppaan lopusta.

![](images/img_3557.jpg){.thumbnail}


## 5. Vaihe: Anna sähköpostiosoite
Anna vain haluamasi sähköpostiosoite ja klikkaa painiketta "Jatka".

![](images/img_3558.jpg){.thumbnail}


## 6. Vaihe: Salasana
Syötä pyydetyt asetukset:

Seuraavaksi sinun on annettava salasana ja klikattava "Seuraava".

![](images/img_3559.jpg){.thumbnail}


## 7. Vaihe: Tilin konfigurointi (1)
Syötä pyydetyt asetukset:
Käyttäjätunnus: sähköpostiosoitteesi kokonaisuudessaan.
Salasana: salasana, jonka olet määrittänyt hallintapaneelissa.
Palvelin: SSL0.OVH.NET
Portti: 993
Suojaustyyppi: SSL/TLS
(hyväksy kaikki certifikaatit)

Jos haluat käyttää toista konfiguraatiota, mene tämän ohjeen loppuun, josta löytdät erilaisia mahdollisia asetuksia.

Klikkaa "Seuraava" konfiguroinnin jatkamiseksi.

![](images/img_3560.jpg){.thumbnail}


## 8. Vaihe: Tilin konfigurointi (2)
Syötä pyydetyt asetukset:
SMTP-palvelin: SSL0.OVH.NET
Portti: 465
Suojaustyyppi: SSL/TLS
(hyväksy kaikki certifikaatit)
"Vaadi yhteys" on oltava valittuna. 
Käyttäjätunnus: sähköpostiosoitteesi kokonaisuudessaan.
Salasana: hallintapaneelissa määrittämäsi salasana.

Jos haluat käyttää toista konfiguraatiota, mene tämän ohjeen loppuun, josta löydät erilaiset mahdolliset asetukset.

Klikkaa "Seuraava" jatkaaksesi konfiguraatiota.
Tunnistautuminen ulosmenevälle palvelimelle on välttämätön asetus, jotta sähköpostien lähetys toimii OVH:n SMTP-palvelimilla.
Jos tunnistautuminen ei ole aktivoitu, Open SMTP -tiketti saatetaan avata ilmoittamaan sinulle, että "POP before SMTP" -tunnistautumista ei tueta. Palvelimen tunnistautuminen on ehdottomasti aktivoitava sähköpostien lähettämistä varten.

![](images/img_3561.jpg){.thumbnail}


## 9. Vaihe: Tilin valinta
Voit valita tässä synkronoinnin aikavälin ja pyytää ilmoituksen saapuvista sähköpostiviesteistä.

![](images/img_3562.jpg){.thumbnail}


## 10. Vaihe: Viimeistely
Tässä viimeisessä vaiheessa sinua pyydetään antamaan tilillesi nimi ja nimi, joka näkyy lähetettävissä sähköpostiviesteissä.

![](images/img_3563.jpg){.thumbnail}


## POP-konfiguraatio
Tässä POP-sähköpostitilin konfiguraatioon tarvittavat tiedot.

POP-konfiguraatio aktivoidulla tai ei aktiivisellaSSL-suojauksella:


Sähköpostiosoite: Sähköpostiosoitteesi kokonaisuudessaan.
Salasana: Salasana, jonka olet määrittänyt [hallintapaneelissa](https://www.ovh.com/manager/).
Käyttäjätunnus:[/url] Sähköpostiosoitteesi kokonaisuudessaan.
Saapuva palvelin: Saapuva sähköpostipalvelin: SSL0.OVH.NET
Saapuvan palvelimen portti: Saapuvan palvelimen portti: 995 ou 110
Lähtevä palvelin: Lähtevä sähköpostipalvelin: SSL0.OVH.NET
Lähtevän palvelimen portti: Lähtevän palvelimen portti: 465 ou 587

Portit 110 ja 587 vastaavat deaktivoitua SSL-suojausta.
Portit 995 ja 465 vastaavat aktivoitua SSL-suojausta.


- Sinun on ehdottomasti aktivoitava [url=#android_alypuhelimen_konfiguraatio_osa_6_tilin_konfigurointi_2]lähtevän SMTP-palvelimen tunnistautuminen.



|Portit|SSLaktivoitu|SSLdeaktivoitu|
|Saapuva|995|110|
|Lähtevä|465|587|




## IMAP-konfigurointi
Tässä IMAP-sähköpostitilin konfiguraatioon tarvittavat tiedot.

IMAP-konfiguraatio aktivoidulla tai ei aktiivisellaSSL-suojauksella:


Sähköpostiosoite: Sähköpostiosoitteesi kokonaisuudessaan.
Salasana: Salasana, jonka olet määrittänyt [hallintapaneelissa](https://www.ovh.com/manager/).
Käyttäjätunnus:[/url] Sähköpostiosoitteesi kokonaisuudessaan.
Saapuva palvelin: Saapuva sähköpostipalvelin: SSL0.OVH.NET
Saapuvan palvelimen portti: Saapuvan palvelimen portti: 993 ou 143
Lähtevä palvelin: Lähtevä sähköpostipalvelin: SSL0.OVH.NET
Lähtevän palvelimen portti: Lähtevän palvelimen portti: 465 ou 587

Portit 143 ja 587 vastaavat deaktivoitua SSL-suojausta.
Portit 993 ja 465 vastaavat aktivoitua SSL-suojausta.


- Sinun on ehdottomasti aktivoitava [url=#android_alypuhelimen_konfiguraatio_osa_6_tilin_konfigurointi_2]lähtevän SMTP-palvelimen tunnistautuminen.



|Portit|SSLaktivoitu|SSLdeaktivoitu|
|Saapuva|993|143|
|Lähtevä|465|587|



