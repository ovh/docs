---
deprecated: true
title: 'Creatie van een OVH DNS-zone voor een domeinnaam'
slug: creeer_een_dns_zone_voor_een_domein_dat_niet_geregistreerd_is_bij_ovh
excerpt: 'Ontdek hoe u via uw Control Panel een OVH DNS-zone voor uw domeinnaam kunt aanmaken'
legacy_guide_number: g2229
section: 'DNS en DNS-zone'
order: 02
---

**Laatste update 06-07-2018**

## Introductie

Een Domain Name System (DNS) -zone is het configuratiebestand van een domeinnaam. Het is samengesteld uit technische informatie, ook wel 'records' genoemd. DNS-zones worden meestal gebruikt om uw domeinnaam te koppelen aan de server (of servers) die uw website en e-mailadressen hosten.

Om een aantal redenen moet u mogelijk een DNS-zone aanmaken voor uw domeinnaam bij OVH.

**Deze handleiding legt uit hoe u een OVH DNS-zone voor uw domeinnaam kunt creëren via uw Control Panel.**

## Vereisten

- U moet beschikken over een domeinnaam.
- De betreffende domeinnaam mag nog geen OVH DNS-zone hebben, of deel uitmaken van een actie of bestelling die momenteel bij OVH wordt verwerkt.
- De technische configuratie van de domeinnaam moet correct zijn (status, SOA, etc.).
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}

## Instructies

### Stap 1: Creëer de DNS-zone via het Control Panel.

Log u eerst in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klik op `Bestelling`{.action} in de dienstenbalk aan de linkerkant en vervolgens op `DNS-zone`{.action}.

Voer in het popup-venster de domeinnaam in waarvoor u een OVH DNS wilt aanmaken. Wacht dan even totdat de tool zijn verificaties op de domeinnaam uitvoert.

Als er een bericht verschijnt met de melding dat de DNS-zone niet kan worden aangemaakt, controleer dan of de domeinnaam voldoet aan de vereisten of vraag de persoon die de domeinnaam beheert om dit voor u te doen. Zodra u zeker weet dat de domeinnaam aan de vereisten voldoet en correct is geconfigureerd, probeert u het opnieuw.

![dnszonecreate](images/dns-zone-create-step1.png){.thumbnail}

Nadat de verificaties zijn voltooid, moet u kiezen of u de minimale records wilt inschakelen voor de DNS-zone die u gaat maken. De manier waarop u uw DNS-records instelt, is niet permanent. U kunt de records wijzigen nadat u de DNS-zone hebt gemaakt.

|Minimale records inschakelen?|Details|
|---|---|
|Ja|Selecteer deze optie als u de DNS-zone in een later stadium zelf wilt aanpassen.|
|Nee|Selecteer deze optie als u van plan bent om OVH diensten te gebruiken zoals een webhostingabonnement, omdat de zone al vooraf is geconfigureerd.|

![dnszonecreate](images/dns-zone-create-step2.png){.thumbnail}

Nadat u een optie hebt geselecteerd, gaat u door met het volgen van de volgende stappen totdat u de DNS-zone hebt aangemaakt.

### Stap 2: Bewerk de DNS-zone (optioneel).

Nu de DNS-zone van uw domeinnaam is gecreëerd, kunt u deze bewerken. Deze stap is optioneel, maar het kan van cruciaal belang zijn als u ervoor wilt zorgen dat aan uw domeinnaam gekoppelde diensten (bijvoorbeeld uw website en e-maildiensten) geen downtime ervaren.

Als u deze DNS-zone wilt bewerken, klikt u in uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} op `Domeinen`{.action} op de dienstenbalk aan de linkerkant en kiest u vervolgens de betreffende domeinnaam. Ga naar het `DNS-zone`{.action}-tabblad.

> [!primary]
>
> Als u zojuist de DNS-zone hebt gemaakt, maar de domeinnaam niet wordt weergegeven onder de lijst met diensten in het gedeelte `Domeinen`{.action}, wacht dan even. Laad vervolgens de pagina opnieuw.
>

Zodra het verschijnt, brengt u de vereiste wijzigingen aan. Lees de volgende handleiding voor meer informatie over [bewerking van een DNS-zone](https://docs.ovh.com/nl/domains/hosting_hoe_wijzig_ik_mijn_dns_zone/){.external}. Nadat u de OVH DNS-zone van uw domeinnaam hebt gewijzigd, kan het van 4 tot 24 uur in beslag nemen voordat de wijzigingen volledig zijn doorgevoerd en effectief zijn.

### Stap 3: Bewerk de DNS-servers voor een OVH domeinnaam

Zodra de OVH DNS-zone klaar is om te worden gebruikt, kunt u deze koppelen aan uw domeinnaam. Om dit te doen, moet u de details ophalen voor de OVH DNS-servers die voor uw domeinnaam zijn geactiveerd in uw OVH Control Panel. De servers verschijnen onder `Name Servers`{.action}.

![dnszonecreate](images/dns-zone-create-step3.png){.thumbnail}

Zodra u over de gegevens beschikt, kunt u de **DNS-servers van uw domeinnaam bewerken met behulp van de interface die wordt verstrekt door de serviceprovider van uw domeinnaam**. Wanneer het bewerken is voltooid, is een propagatietijd van maximaal 48 uur vereist voordat de wijziging is doorgevoerd.

## Verder

[Wijziging van een OVH DNS-zone](https://docs.ovh.com/nl/domains/hosting_hoe_wijzig_ik_mijn_dns_zone/){.external}.

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.