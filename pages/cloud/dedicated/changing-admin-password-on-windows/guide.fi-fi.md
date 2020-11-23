---
deprecated: true
title: 'Administraattorin salasanan vaihtaminen dedikoidulla Windows-palvelimella'
slug: admin-salasanan-vaihtaminen-windows
excerpt: 'Katso, kuinka administraattorin salasana vaihdetaan dedikoidulla Windows-palvelimella'
section: 'Vianhaku ja Rescue-tila'
---

**Päivitetty 30.8.2018**

## Tavoite

Windows-käyttöjärjestelmän asennuksen tai uudelleenasennuksen yhteydessä saat administraattorin salasanan. On erittäin suositeltavaa muokata sitä kuten ohjeessa [“Dedikoidun palvelimen suojaaminen”](https://docs.ovh.com/fi/dedicated/dedikoidun-palvelimen-suojaaminen/){.external} neuvotaan. Lisäksi on mahdollista, ettet löydä enää tätä salasanaa ja joudut muokkaamaan sitä.

**Tässä ohjeessa kerrotaan, kuinka palvelimesi administraattorin salasanaa muokataan.**


## Edellytykset

* Sinulla on asennettuna [dedikoitu palvelin](https://www.ovh-hosting.fi/dedikoidut_palvelimet/){.external} Windowsilla.
* Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager){.external}.


## Käytännössä

Käynnistä aluksi palvelimesi rescue-tilassa käyttäen WinRescue-käynnistysympäristöä. Voit katsoa tarvittaessa apua rescue-tilaan liittyvästä [ohjeesta](https://docs.ovh.com/fi/dedicated/ovh-rescue/){.external}. 

Kun palvelin on uudelleenkäynnistetty, valitse `IPMI`{.action}-kuvake palvelimesi sivulta [hallintapaneelista](https://www.ovh.com/auth/?action=gotomanager){.external}.

> [!primary]
>
> Lisätietoa IPMI-toiminnon käytöstä löydät [IPMIin liittyvästä ohjeesta](https://docs.ovh.com/fi/dedicated/ipmi-konsolin-kaytto-dedikoidut-palvelimet/){.external}.
>

Aktivoi seuraavaksi IPMI-toiminto Java-sovelman tai selaimesi avulla. Kun IPMI-istunto on käynnistynyt, tee kaksoisklikkaus palvelimesi NTPWdi-työkalussa WinRescue-työpöydällä.

![NTPWdi](images/ntpwdi-tool-01.png){.thumbnail}

Klikkaa tämän jälkeen painiketta `Avaa (uudelleen)`{.action} nähdäksesi saatavilla olevien käyttäjätilien listan.

![NTPWdi](images/ntpwdi-tool-02.png){.thumbnail}

Valitse nyt listasta pääkäyttäjätili ja klikkaa painiketta `Vaihda salasana`{.action}.

![NTPWdi](images/ntpwdi-tool-03.png){.thumbnail}

Syötä lopuksi uusi salasana kahdesti ja klikkaa sitten `OK`{.action}.

![NTPWdi](images/ntpwdi-tool-04.png){.thumbnail}

Salasanasi on nyt vaihdettu. Poistu työkalusta, sulje IPMI-istunto ja käynnistä palvelimesi uudelleen normaalitilassa.


## Lue lisää aiheesta

[Rescue-tila](https://docs.ovh.com/fi/dedicated/ovh-rescue){.external}

[IPMI-konsolin käyttö dedikoiduilla palvelimilla](https://docs.ovh.com/fi/dedicated/ipmi-konsolin-kaytto-dedikoidut-palvelimet/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://community.ovh.com/en/>.