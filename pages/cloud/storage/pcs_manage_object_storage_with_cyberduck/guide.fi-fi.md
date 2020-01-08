---
title: 'Object Storagen hallinta CyberDuckin avulla'
excerpt: 'Object Storagen hallinta CyberDuckin avulla'
slug: object_storagen_hallinta_cyberduckin_avulla
section: 'Object Storage'
legacy_guide_number: g1868
---

**Päivitetty 08.1.2020**

## 
Object Storage on säilytysratkaisu, jota hallinnoidaan pääasiallisesti OpenStack API -sovelluksen avulla. 
Saattaa kuitenkin olla, että säilytystilan hallinta komentoriviä pääasiassa käyttäen, ei ole sinulle kovin tuttua.

Tätä varten on olemassa graafisia ratkaisuja, jotka käyttävät näkymättömällä tavalla OpenStackin API -sovellusta puolestasi. 
CyberDuck on yksi näistä ratkaisuista ja sen konfigurointi onnistuu helposti. 

Olemassa on myös muita käyttöliittymiä, joita löytyy suoraan Internetistä. Niiden konfigurointi tapahtuu hyvin samankaltaisesti kuin seuraavaksi esitelemämme konfigurointi.

Tässä ohjeessa kerrotaan kuinka Cyberduck konfiguroidaan, jotta Object Storagea voidaan hallinnoida OpenStackin API:iin perustuvalla graafisella käyttöliittymällä.


## Edellytykset

- Pääsy Horizoniin: 
[]({legacy}1773)
- Sinulla on projekti- ja käyttäjätunnus, jotka voit saada lataamalla OpenRC-tiedoston Horizonin [Access and Security]({legacy}1774) valikosta.




## 

- Lataa [Cyberduck](https://cyberduck.io/)
- Kirjaudu "Swift - OpenStack Object Storage" -tyyppiselle tilille



![objectstorage-cyberduck](images/v3.0.png){.thumbnail}
Kavaakkeseen on täytettävä erilaisia tietoja:

- Palvelin: auth.cloud.ovh.net (Palvelimen tunnistus)
- Tenant ID:Access Key: Tämä on sama kuin Project_ID:Horizon_User_ID
- Secret Key: Horizon salasanasi
- More Options / Path : v3.0



- Kirjaudu



![objectstorage-cyberduck](images/img_2756.jpg){.thumbnail}


## 

- [API Swiftin käytön aloitus]({legacy}1916)
- [Owncloudin konfigurointi Object Storagen avulla]({legacy}2000)




## 
[Paluu Cloud-tuotteiden ohjeiden valikkoon]({legacy}1785)

