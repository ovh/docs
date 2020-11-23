---
deprecated: true
title: Exchange 2013 Het gebruik van resource accounts
excerpt: In deze handleiding wordt het gebruik van de resource accounts van uw Exchange 2013 beschreven.
slug: exchange_2013_het_gebruik_van_resource_accounts
legacy_guide_number: g1325
---


## Het aanmaken van de resource, deel 1
Om uw resource aan te maken, dient u in te loggen op uw[Control Panel](https://www.ovh.com/manager/web/login.html).

Selecteer uw Exchange 2013 pack in "Platform".

Kies de tab "Resource accounts" vervolgens "Een resource account toevoegen".

U moet "Expert Mode" selecteren, rechts in het control panel.

![](images/img_1346.jpg){.thumbnail}


## Het aanmaken van de resource, deel 2
Vul de verplichte velden in: 

Resource naam: geef de gewenste weergavenaam voor de resource.

E-mail van de resource: kies het e-mailadres voor de resource. Het kan geen bestaand e-mailadres zijn.

Capaciteit:  bepaal voor informatieve doeleinden, de grootte van uw resource.

Conflicten toelaten: indien dit vakje is aangevinkt dan zal er geen waarschuwing worden gegeven, wanneer een gebruiker probeert om een ​​room of equipment in het event te boeken, dat al in gebruik is. 

Resource type:  twee resource types zijn beschikbaar: "Room" of "Equipment".

Klik op "Volgende" om verder te gaan naar stap 2 en bevestig deze handeling door te klikken op "Create".

![](images/img_1347.jpg){.thumbnail}


## Het aanmaken van de resource, deel 3
Zodra uw resources zijn aangemaakt, kunt u deze wijzigen of verwijderen.

Er is een overzichtstabel met de naam, het type (room of equipment) en het e-mailadres van uw resource.

De resource accounts zijn geactiveerd, u zult later in deze handleiding lezen, hoe u deze kunt gebruiken.

![](images/img_1348.jpg){.thumbnail}


## Kalender van een resource, deel 1
Hier ziet u hoe u de kalender van de resource kunt bekijken via OWA. 

Ga naar de [Exchange 2013 Webmail](https://ex.mail.ovh.net/owa/).

Log in met uw volledige e-mailadres en het wachtwoord voor uw e-mailaccount. 

Selecteer vervolgens de tab "Kalender", met een rechter muisklik op "ANDERE KALENDERS" selecteer vervolgens "Open de kalender".

![](images/img_1349.jpg){.thumbnail}


## Kalender van een resource, deel 2
Voer de naam van uw resource in. De Exchange 2013 server zal deze automatisch markeren, omdat het deel uitmaakt van de GAL (Global Adres Lijst).

Selecteer "Open" om de bewerking te voltooien.

![](images/img_1350.jpg){.thumbnail}


## Kalender van een resource, deel 3
De kalenders met de aangemaakte resources zijn nu zichtbaar in het OWA-menu.

Linksboven vindt u een "nieuw event" knop. U kunt deze gebruiken om een event voor uw medewerkers aan te maken.

![](images/img_1351.jpg){.thumbnail}


## Beheer van een resource, deel 1
We zullen een event creëren met onze reeds aangemaakte resources.

Selecteer hiervoor in de "Kalender""nieuw event".

Het menu verschijnt hieronder.

Vul de verplichte velden in:

Event: de gewenste naam voor uw event.

Lokatie: U kunt nu uw resource "room" type toevoegen op dit level.

Deelnemers: Voeg hier uw medewerkers en de "equipment" resources toe.

Starten Geef het begin van uw event aan.

Duur: In dit veld kunt u de duur van uw event aangeven.

Weergeven als: Bepaalt de status die u wilt weergeven op de kalender.

Reminder: Bepaalt wanneer een reminder voor het event moet plaatsvinden.

Repeat: Bepaalt de frequentie van uw event.

Selecteer "Verzenden" om het toevoegen van uw event te voltooien.

![](images/img_1352.jpg){.thumbnail}


## Beheer van een resource, deel 2
Het event "vergadering" werd geaccepteerd door de resource 'room'-type "MyRoom1" en de resource 'equipment'-type "equipment1".

Een antwoord via e-mail verzoek werd gevraagd, u krijgt een melding van de aanvaarding of afwijzing van uw aanvraag.

![](images/img_1356.jpg){.thumbnail}


## Beheer van een resource, deel 3
In het kalender menu, kunt u de status van de resources raadplegen.

We kunnen zien dat na het toegevoegde event, de resource status momenteel "bezet" is.

![](images/img_1357.jpg){.thumbnail}


## Beheer van een resource, deel 4
Een nieuw event op dezelfde datum wordt net zoals de vorige toegevoegd.

Wij worden in kennis gesteld van de acceptatie of weigering van het event.

Voor ons tweede event "speech" en de "MyRoom1" resource werd het event geweigerd vanwege conflicten.
Een ander event is al gepland op die datum en heeft deze resource niet geautoriseerd vanwege conflicten, dus het heeft ons event verzoek geweigerd.

De "Equipement1" resource heeft het event geaccepteerd.
Een event is al gepland op deze datum, maar conflictbeheer is uitgeschakeld op deze resource, dus het heeft ons event verzoek toch aanvaard.

![](images/img_1358.jpg){.thumbnail}

