---
deprecated: true
title: SSL Gateway -palvelun tilaaminen
slug: ssl-gateway-palvelun-tilaaminen
links: 
   - docs/web/ssl-gateway/use_ssl_gateway/
excerpt: Suojaa verkkosivusi yhteydet
---


## Yleista

### Edellytykset


> [!primary]
>
> - 
> Omistat aktiivisen verkkotunnuksen tai aliverkkotunnuksen.
> - 
> Sinulla on pääsy sen DNS-alueelle.
> 
> 


## Tilaus
- Tilaa SSL Gateway -palvelu [klikkaamalla tästä](https://www.ovh-hosting.fi/ssl-gateway){.external}.
- Valitse tuote ja klikkaa sitten `Aktivoi nyt`{.action} tai `Tilaa`{.action}.

![kaupallinen sivu](images/1-en.png){.thumbnail}

- Anna aktiivinen verkkotunnuksesi tai aliverkkotunnuksesi ja klikkaa sitten `Jatka`{.action}.

![free-tuotteen tilaus](images/2-en.png){.thumbnail}



> [!warning]
>
> - 
> Free-tuote:
> 
> Vain kolmannen tason verkkotunnukset (www.example.org) tai sitä alemmat ovat hyväksyttyjä.
> - 
> Advanced- ja Enterprise-tuotteet:
> - 
> Neljännen tason (blog.suomi.example.org) ja ylemmät ovat hyväksyttyjä.
> 
> 


Seuraavaksi järjestelmämme havaitsee automaattisesti verkkosivusi verkkotunnuksellesi tai aliverkkotunnuksellesi konfiguroidut IP-osoitteet.

- Mikäli sinulla on useita IP-osoitteita, valitse niistä yksi.
- Valitse SSl Gateway -palvelusi maantieteellinen alue.
- Jos OVH-tilisi hallinnoi tämän verkkotunnuksen tai aliverkkotunnuksen DNS-aluetta, ruksaa sitä koskeva ruutu. Näin muokkaamme automaattisesti sen konfiguraation osoittamaan SSL Gateway -palveluusi.
- Klikkaa `Tilaa`{.action}.


![free-tuotteen tilaus](images/3-en.png){.thumbnail}



> [!primary]
>
> Mikäli verkkosivullasi on useita IP-osoitteita, on niistä valittava vain yksi tilaukseen.
> Voit lisätä myöhemmin jopa kaksi ylimääräistä IP-osoitetta hallintapaneelin kautta, jos sinulla on Advanced-tason tuote.
> 

- Toimi ohjeiden mukaisesti ja vahvista tilauksesi.


## DNS-alueen konfigurointi
Jos et rastittanut automaattisen muokkauksen ruutua, saat tilauksen vahvistamisen jälkeen sähköpostiviestin, jossa pyydetään muuttamaan verkkotunnuksesi tai aliverkkotunnuksesi osoittamaan kohti OVH:n infrastruktuuria kolmen (3) päivän kuluessa.



> [!warning]
>
> Mikäli DNS-aluetta ei muokata kolmen päivän kuluessa, tilauksesi perutaan.
> 

- 

> [!faq]
>
> Esimerkki 1: OVH:n jaetut nimipalvelimet hallinnoivat DNS-aluettasi.
>> 
>>     - Jos asiakastunnuksesi on DNS-alueen admin-yhteyshenkilö tai tekninen yhteyshenkilö, täytyy DNS-alueen muutos tehdä hallintapaneelissasi.
>>     - Jos et ole tämän DNS-alueen yhteyshenkilö, ota yhteyttä siitä vastuussa olevaan henkilöön muokkausta varten.

>> 
>> > [!primary]
>> >
>> > Ohje saatavilla:
>> > - 
>> > Miten DNS-aluetta muokataan?
>> > 
>> > 
>> 
>
- 

> [!faq]
>
> Esimerkki 2: OVH:n jaetut nimipalvelimet eivät hallinnoi DNS-aluettasi.
>> 
>>     - Tässä tapauksessa IP-osoitteen muokkaaminen DNS-alueella riittää, jolloin pääset palveluntarjoajasi tai dedikoidun palvelimesi käyttöliittymään.
>

Kun infrastruktuurimme on rekisteröinyt muokkauksesi, saat vahvistusviestin sähköpostitse.



> [!warning]
>
> DNS-alueen muutoksissa voi kestää 24h, ennen kuin ne toimivat. Tämä johtuu internetpalveluntarjoajien välimuistista.
> 