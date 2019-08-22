---
title: Inloggen op de Horizon-interface
slug: een_toegang_tot_horizon_creeren
legacy_guide_number: 1773
excerpt: Ontdek hoe u uw Horizon-interface kunt openen
section: Vanaf de Horizon-interface
order: 1
---

**Laatste update 17-03-2018**

## Introductie

Horizon is de grafische beheerinterface voor OpenStack. Bepaalde functies zijn alleen toegankelijk via deze interface.

**In deze handleiding wordt uitgelegd hoe u de Horizon-interface opent.**


## Vereisten

- U moet een Public Cloud-project hebben gemaakt.


## Instructies

### Maak een OpenStack-gebruiker aan

Allereerst moet u een OpenStack-gebruikersaccount maken om toegang te krijgen tot de Horizon-interface. Log hiervoor in op uw Control Panel. Ga naar het gedeelte `Cloud`{.action}, vervolgens `Servers`{.action} en selecteer het betreffende project. Klik vervolgens op het tabblad `OpenStack`{.action} in de linkerkolom:

![Voeg gebruiker toe](images/1_H_add_user.png){.thumbnail}

Klik op `Gebruiker toevoegen`{.action} en kies een gebruikersbeschrijving. De gebruikersnaam en het wachtwoord worden vervolgens automatisch gegenereerd. Nadat de bewerking is voltooid, wordt er een bericht geopend waarin wordt bevestigd dat het account is gemaakt.

Het wachtwoord is zichtbaar in het Control Panel totdat u de pagina hebt vernieuwd. U kunt dit wachtwoord noteren en gebruiken wanneer u de interface opnieuw opent. U kunt ook een nieuw wachtwoord genereren door op het vernieuwingspictogram naast uw huidige wachtwoord te klikken:

![ Projectmenu ](images/2_H_password_refresh.png){.thumbnail}

### Log in op OpenStack Horizon

Om het menu te openen, klikt u op het pictogram met de drie stippen aan het einde van de regel `...`{.action}. Klik vervolgens op de `Open OpenStack Horizon`{.action}-link. De [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external}-inlogpagina verschijnt dan. Voer uw `User Name` en wachtwoord in om u in te loggen.

![ Projectmenu ](images/3_H_open_menu.png){.thumbnail}

![Login scherm](images/4_H_login_window.png){.thumbnail}

Nadat u bent ingelogd, verschijnt de OpenStack Horizon-interface:

![Horizon-interface](images/5_H_view.png){.thumbnail}


## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.
