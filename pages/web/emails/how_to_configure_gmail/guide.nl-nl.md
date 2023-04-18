---
deprecated: true
title: 'Configuratie van een e-mailadres op de online interface van Gmail'
excerpt: 'Leer hoe u een MX Plan e-mailadres op de online interface van Gmail kunt configureren'
updated: 2021-01-08
---

**Laatste update 10-09-2018**

## Introductie

U kunt MX Plan-e-mailadressen configureren op e-mailclients en online interfaces, als deze compatibel zijn. Door dit te doen, kunt u uw e-mailadres gebruiken via uw voorkeursapparaat of online interface.

**Deze handleiding legt uit hoe u een MX Plan e-mailadres op de online interface van Gmail kunt configureren**

> [!warning] 
> 
> OVH biedt u diensten waarvoor u verantwoordelijk bent, ook met betrekking tot hun configuratie en beheer. U bent er daarom verantwoordelijk voor dat ze correct werken.
> 
> Wij stellen u deze handleiding ter beschikking om u zo goed mogelijk te begeleiden bij deze dagelijkse taken. We raden u echter aan om de diensten van een gespecialiseerde provider in te schakelen en/of contact op te nemen met de uitgever van de software voor de dienst als u problemen ondervindt. We kunnen u niet zelf helpen. Meer informatie in het gedeelte ‘Verder’ in deze handleiding.
> 

## Vereisten

- U moet beschikken over een MX Plan-e-mailadres (inbegrepen bij MX Plan en in [OVHcloud-webhosting](https://www.ovhcloud.com/nl/web-hosting/){.external}).
- U moet beschikken over de inloggegevens voor het OVH e-mailadres waarvan u de instellingen wilt bewerken.
- U moet beschikken over de inloggegevens voor het Gmail-account waarvoor u het OVH-e-mailadres wilt instellen

> [!primary]
> 
> Deze handleiding is geschreven op basis van de nieuwe Gmail-interface. Zelfs als er kleine verschillen zijn in de layout van uw interfaceversie, kunnen de instructies in deze handleiding nog steeds worden gevolgd.
>

## Instructies

### Stap 1: Voeg het e-mailaccount toe aan de Gmail interface.

Ga allereerst via uw webbrowser naar de online interface van Gmail. Log u vervolgens in op uw account met uw inloggegevens voor Gmail.

Nadat u bent ingelogd op de interface, klikt u op het tandwielpictogram en vervolgens op `Instellingen`{.action}. Klik op de weergegeven pagina op `Accounts en import`{.action}. 

![mxplan](images/configuration-gmail-web-step1.png){.thumbnail}

Klik naast `Mail van andere accounts controleren` op `Een e-mailaccount toevoegen`{.action}. Voer in het popup-venster uw OVH e-mailadres in en klik op `Volgende`{.action}. Selecteer `Importeer e-mails van mijn andere account (POP3)`{.action} en klik vervolgens opnieuw op `Volgende`{.action}.

![mxplan](images/configuration-gmail-web-step2.png){.thumbnail}

Voer nu de instellingen in voor de POP-server (inkomende server) van uw OVH e-mailadres:

|Informatie|Omschrijving| 
|---|---| 
|Gebruikersnaam|Voer het **volledige** e-mailadres in.|  
|Het wachtwoord|Voer het wachtwoord van het e-mailadres in. |
|POP-server|Voer de ssl0.ovh.net server in.|
|Poort|Selecteer poort 995.|

Wat betreft de keuzes kunt u het volgende aanvinken:

- **Bewaar een kopie van een opgehaald bericht op de server**: we raden aan dit vakje aan te vinken als u een kopie van de ontvangen berichten via uw OVH e-mailadres wilt behouden op onze servers.

- **Altijd een beveiligde verbinding (SSL) bij het ophalen van e-mail gebruiken**: zorg ervoor dat dit vakje is aangevinkt zodat de verbinding met uw OVH e-mailadres kan worden gemaakt.

- **Inkomende berichten labelen**: door dit vakje aan te vinken, kunt u een label toevoegen aan de e-mails die van uw OVH e-mailadres worden geïmporteerd naar uw Gmail account.

- **Inkomende berichten archiveren (De inbox overslaan)**: door dit vakje aan te vinken, kunt u ervoor zorgen dat e-mails die zijn geïmporteerd vanaf uw OVH e-mailadres niet worden weergegeven in de inbox voor uw Gmail account.

Nadat u deze informatie hebt ingevoerd, klikt u op `Een account toevoegen`{.action}. Als alle informatie correct is, is de verbinding met het e-mailadres succesvol. 

![mxplan](images/configuration-gmail-web-step3.png){.thumbnail}

Als u vervolgens ook e-mails wilt verzenden vanaf uw OVH e-mailadres met behulp van de online interface van Gmail, vinkt u het selectievakje `Ja, ik wil e-mail kunnen verzenden vanaf het adres`{.action}, en klikt u vervolgens op `Volgende`{.action}. 

Voer dan de naam van de afzender in die wordt weergegeven wanneer u e-mails verzendt vanaf dit e-mailadres. Vink het vakje `Behandelen als alias`{.action} aan en klik op `Volgende stap`{.action}.

![mxplan](images/configuration-gmail-web-step4.png){.thumbnail}

Voer nu de instellingen in voor de SMTP-server (uitgaande server) van uw OVH e-mailadres:

|Informatie|Omschrijving| 
|---|---| 
|SMTP-server|Voer de ssl0.ovh.net server in.|  
|Poort|Selecteer poort 587.|
|Gebruikersnaam|Voer het **volledige** e-mailadres in.|  
|Het wachtwoord|Voer het wachtwoord van het e-mailadres in. |

Nadat u de gevraagde informatie hebt ingevuld, vinkt u het selectievakje naast `Beveiligde verbinding met TLS`{.action} aan en klikt u vervolgens op `Account toevoegen`{.action}. Als alle informatie correct is, is de verbinding met het e-mailadres succesvol. 

![mxplan](images/configuration-gmail-web-step5.png){.thumbnail}

Nu hoeft u deze toevoeging alleen nog maar te bevestigen door een bevestigingscode in te voeren die naar uw OVH e-mailadres is verzonden. Om het te ontvangen, logt u zoals gebruikelijk in op onze online interface via: <https://www.ovh.com/nl/mail/>. 

Nadat u op bevestigen hebt geklikt, wordt het OVH e-mailadres weergegeven op het tabblad `Accounts en import`{.action}, waarmee u was begonnen.

### Stap 2: Gebruik het e-mailadres van de Gmail interface.

Nadat u uw e-mailadres hebt geconfigureerd, kunt u het gaan gebruiken! U kunt nu berichten verzenden en ontvangen vanaf dit e-mailadres op de Gmail interface.

Om een e-mail vanaf uw OVH e-mailadres via de online interface van Gmail te verzenden, moet u het e-mailadres selecteren waarnaar u wilt verzenden wanneer u een nieuwe e-mail maakt. De selectie wordt gemaakt in het `Writer-venster`{.action} naast de afzender.

![mxplan](images/configuration-gmail-web-step6.png){.thumbnail}

Houd er ook rekening mee dat u nog steeds onze online-interface kunt gebruiken, toegankelijk via <https://www.ovh.com/nl/mail/> voor toegang tot uw OVH e-mailadres. U kunt inloggen met uw gebruikelijke inloggegevens.

## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.