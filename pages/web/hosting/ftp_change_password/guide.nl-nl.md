---
deprecated: true
title: Wijziging van het wachtwoord van een FTP-gebruiker
slug: wijzigen-wachtwoord-ftp-gebruiker
excerpt: Leer hoe u het wachtwoord van een FTP-gebruiker op uw OVH-webhosting kunt wijzigen
section: FTP en SSH
order: 1
updated: 2022-08-18
---

**Laatste update 23-02-2018**

## Introductie

OVH's webhosting biedt u opslagruimte voor het uploaden van bestanden naar uw website. Toegang tot deze ruimte is mogelijk via een FTP-gebruiker en het bijbehorende wachtwoord.

Leer hoe u het wachtwoord van een FTP-gebruiker op uw OVH-webhosting kunt wijzigen

## Vereisten

- U moet beschikken over een [OVH-webhosting plan](https://www.ovh.com/nl/shared-hosting/){.external}.
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.

## Instructies

### Stap 1: Ga naar het beheer van de FTP-gebruikers

Log eerst in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klik op `Webhosting`{.action} in de dienstenbalk aan de linkerkant, kies dan het bijbehorende webhostingplan. Ga naar het `FTP - SSH`{.action}-tabblad.

De tabel toont de FTP-gebruikers die zijn aangemaakt op uw webhosting.  Met deze gebruikers hebt u toegang tot uw opslagruimte om online bestanden van uw website te plaatsen. Sommige hiervan zijn automatisch gemaakt wanneer uw webhostingplan is opgezet.

![ftppassword](images/change-ftp-password-step1.png){.thumbnail}

### Stap2: Wijzig het wachtwoord van een FTP-gebruiker 

Het wijzigen van het wachtwoord van een FTP-gebruiker die op uw hosting is gemaakt, gebeurt op twee manieren, afhankelijk van uw [OVH-webhostingplan](https://www.ovh.com/nl/shared-hosting/){.external}:

- **Voor producten waarop meerdere FTP-gebruikers NIET kunnen worden gecreëerd** (Start 10M, Kimsufi Web en Personal): klik op het potloodpictogram in de kolom `Wachtwoord`{.action} van de tabel, vul het nieuwe wachtwoord in het tekstvak, en bevestig vervolgens de wijziging;

- **Voor producten waarop meerdere FTP-gebruikers kunnen worden gecreëerd** (Pro- en Performance): Klik in de tabel op het tandwielpictogram rechts van de geselecteerde gebruiker en vervolgens op `Wachtwoord wijzigen`{.action}. Voer in het venster dat verschijnt het nieuwe wachtwoord in, en klik op de knop `Bevestigen`{.action}.

Het kan een paar minuten duren voordat de wijziging volledig is doorgevoerd. 

> [!primary]
>
> Om veiligheidsredenen verzoeken wij u de voorwaarden te respecteren die tijdens de registratie van informatie worden aangegeven. Ook raden we u aan: 
>
> - niet hetzelfde wachtwoord twee keer gebruiken;
>
> - om een wachtwoord te kiezen dat niets te maken heeft met uw persoonlijke informatie (vermijd bijvoorbeeld gebruik van uw naam, voornaam, of geboortedatum);
>
> - om uw wachtwoorden regelmatig te vernieuwen;
>
> - uw wachtwoorden niet op papier te schrijven of naar uw e-mailadres sturen;
>
> - uw wachtwoorden niet automatisch op te slaan in uw internetbrowser, zelfs als deze het aan u voorstelt.
>

### Stap 3: Ga naar uw opslagruimte

Nu het FTP-gebruikerswachtwoord is gewijzigd, kunt u nu naar uw opslagruimte gaan.

Hiervoor (en afhankelijk van uw [OVH webhostingplan](https://www.ovh.com/nl/shared-hosting/){.external}) zijn er verschillende manieren:

- **Gebruik van FTP Explorer**: Dit geeft u toegang tot uw opslagruimte vanaf uw internetbrowser. Om het te gebruiken, altijd vanaf het tabblad `FTP - SSH`{.action}, klikt u op de `FTP Explorer`{.action}-knop;

- **Gebruik FTP-compatibele software**: U moet compatibele software op uw computer installeren (zoals FileZilla);

- **Gebruik SSH Access**: U moet commando's vanaf een terminal gebruiken om te communiceren met uw opslagruimte. Gebruik van dit type toegang vereist geavanceerde kennis. 

## Verder

[Gebruik van FileZilla-software bij uw hosting](https://docs.ovh.com/nl/hosting/webhosting_filezilla_gebruikershandleiding/){.external}.

Ga in gesprek met andere communityleden op [https://community.ovh.com](https://community.ovh.com){.external}.