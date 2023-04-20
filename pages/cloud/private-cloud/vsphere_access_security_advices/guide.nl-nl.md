---
deprecated: true
title: Beveiliging van uw vSphere web-client
excerpt: Leer hoe u de beveiliging van uw vSphere web kunt optimaliseren
updated: 2020-06-30
---

**Laatste update 06-03-2018**

## Introductie

Voor een optimale beveiliging van uw systeem raden we aan de toegang ertoe te beperken. Hiervoor bieden we een aantal verschillende methoden:

**Ontdek hoe u de toegang tot uw vSphere web-client snel en eenvoudig kunt beveiligen met behulp van onze onderstaande tips.**

## Vereisten

- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}

## Instructies

### Beperk IP-toegang

Deze eerste methode betreft het beperken van toegang per IP-adres. We raden aan te blijven werken met een registratiesysteem dat gebruikmaakt van whitelisting. Deze techniek weigert standaard toegang voor alle IP-adressen. U kunt vervolgens handmatig de IP's toevoegen die toegang tot uw infrastructuur vereisen.

U kunt dit rechtstreeks vanaf uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} doen. Ga naar uw Private Cloud-gedeelte en vervolgens naar  `Beveiliging`{.action}. In dit gedeelte ziet u een tabel met alle geautoriseerde of geweigerde IP-adressen. Als u nieuwe wilt toevoegen, klikt u op `IP-adressen toevoegen`{.action} aan de rechterkant:

![IP toevoegen](images/adding_ip.png){.thumbnail}


### Maak specifieke gebruikers aan

We raden ten zeerste aan persoonlijke accounts te maken voor elke gebruiker die toegang tot uw infrastructuur nodig heeft. U kunt dit ook doen in uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, maar deze keer moet u naar het tabblad `Gebruikers`{.action} gaan. Om nieuwe gebruikers toe te voegen, klikt u op de knop aan de rechterkant: Maak een gebruiker aan

![Gebruikers](images/users.png){.thumbnail}


Wanneer u een nieuwe gebruiker maakt, moet u een wachtwoord instellen.

> [!primary]
>
> Om ervoor te zorgen dat uw gegevens veilig zijn, moet uw wachtwoord voldoen aan de onderstaande criteria:
>
> - Het moet ten minste acht tekens bevatten.
> - Het moet uit minstens drie soorten tekens bestaan.
> - Het mag geen woord uit het woordenboek bevatten.
> - Het mag geen persoonlijke informatie bevatten (bijvoorbeeld uw voornaam, achternaam of geboortedatum).
> - Het mag niet als wachtwoord worden gebruikt door andere gebruikersaccounts.
> - Het moet worden opgeslagen in een wachtwoord-manager.
> - Het moet elke drie maanden worden vervangen.
> - Het mag niet identiek zijn aan eerder gebruikte wachtwoorden.
>

U kunt vervolgens de rechten van elke gebruiker beheren door op het tandwielpictogram rechts van elke gebruikersrij te klikken:

![Wijzig gebruikersrechten](images/users_edit.png){.thumbnail}

### Sessietijden beperken

Wanneer gebruikers een sessie beëindigen, raden wij aan de sessie dienovereenkomstig te sluiten. Om de verbindingstijd te beperken, kunt u een vervaltijd instellen voor de sessie.

Ga hiervoor naar uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}. Ga naar uw Private Cloud-gedeelte en vervolgens naar  `Beveiliging`{.action}. Klik vervolgens op de knop `De vervaldatum wijzigen`{.action} aan de rechterkant van het scherm. In het volgende venster kunt u de tijd (in minuten) kiezen voordat een sessie verloopt.

![Vervaldatum van de sessie](images/expiration.png){.thumbnail}

## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.