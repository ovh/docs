---
deprecated: true
title: Toevoeging van een MX-veld aan de configuratie van uw domeinnaam
slug: dns-zone-mx-configuratie-handleiding
excerpt: Ontdek hoe u een MX-veld kunt toevoegen aan de configuratie van uw domeinnaam
section: DNS en DNS-zone
order: 04
---

**Laatste update 21-03-2018**

## Introductie

Het MX-record wordt gebruikt om een domeinnaam naar een e-mailserver te laten wijzen. Hiermee kunnen servers die e-mails naar uw e-mailadressen verzenden, weten waar ze deze naartoe moeten sturen. Uw serviceprovider heeft waarschijnlijk meerdere e-mailservers. Daarom moet u verschillende MX-records maken.

Ontdek hoe u een MX-veld kunt toevoegen aan de configuratie van uw domeinnaam.

## Vereisten

- U moet gemachtigd zijn om de betreffende domeinnaam te beheren vanuit uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}
- De domeinnaam in kwestie moet de OVH-configuratie gebruiken (dat wil zeggen de OVH DNS-servers).

> [!warning]
>
> - Als uw domeinnaam de OVH DNS-servers niet gebruikt, moet u de MX-velden aanpassen vanuit de interface van de provider die de configuratie van uw domeinnaam beheert.
>
> - Als uw domeinnaam bij OVH is, kunt u controleren of deze onze OVH-configuratie gebruikt vanuit uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} in `DNS-servers`{.action}, zodra deze op het betreffende domein is geplaatst.
>

## Instructies

### Stap 1: Begrijp de basisfunctie van het MX-record

Een MX-record koppelt uw domeinnaam aan de servers van uw e-mailserviceprovider (bijvoorbeeld de servers van OVH). Wanneer u een e-mail ontvangt, gebruikt de server die de e-mail verzendt het MX-record om uit te zoeken op welke server deze moet worden afgeleverd.

U kunt meerdere MX-records toevoegen aan een enkele domeinnaam, dus u moet voor elk record een prioriteit definiëren. Op die manier weten de servers, die e-mails naar uw e-mailadres sturen, naar welke server ze moeten leveren, op prioriteit. Houd er echter rekening mee dat wanneer u meerdere MX-records toevoegt, de servers waarnaar zij verwijzen moeten behoren tot dezelfde serviceprovider.

Over het algemeen is het **wijzigen van MX-records een lastige taak**. Als u fouten maakt bij het configureren van MX-records, kunnen uw e-mailadressen mogelijk geen nieuwe e-mails ontvangen. Daarom raden wij u ten zeerste aan zorgvuldig te werk te gaan bij het uitvoeren van deze configuratiewijzigingen.

### Stap 2: Kennis van de OVH MX-configuratie

In de onderstaande tabel hebben we de OVH MX-configuratie vermeld die we kunnen gebruiken voor onze MX Plan-oplossingen (beide als een op zichzelf staande oplossing of opgenomen als onderdeel van onze [OVH-webhostingsplannen](https://www.ovhcloud.com/nl/web-hosting/){.external}, [Email Pro](https://www.ovhcloud.com/nl/emails/email-pro/){.external} en [Exchange](https://www.ovhcloud.com/nl/emails/){.external}-oplossingen. Onze e-mailservers hebben ook antispam en antivirus.

|Domein|TTL|Soort Record|Prioriteit|Target|
|---|---|---|---|---|
|*leeg laten*|3600|MX|1|mx0.mail.ovh.net.|
|*leeg laten*|3600|MX|5|mx1.mail.ovh.net.|
|*leeg laten*|3600|MX|50|mx2.mail.ovh.net.|
|*leeg laten*|3600|MX|100|mx3.mail.ovh.net.|

U moet deze MX-records nu toevoegen aan de DNS-zone-configuratie van uw domeinnaam. De volgende stap zal u helpen om dit te doen, in de OVH DNS-zone van uw domeinnaam.

### Stap 3: Wijzig de configuratie van een OVH MX-record

Om de MX-velden in de OVH-configuratie van uw domein aan te passen, logt u zich in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}. Ga naar het gedeelte `Domeinen`{.action} op de dienstenbalk aan de linkerkant, klik op het betreffende domein en ga vervolgens naar de `DNS-zone`{.action}.

De tabel geeft de OVH-configuratie van uw domein weer. Elke regel komt overeen met een DNS-record. Controleer om te beginnen of de MX-records al bestaan in de OVH DNS-zoneconfiguratie van uw domeinnaam. U kunt dit doen met behulp van het zoekfilter.

![dnsmxrecord](images/mx-records-dns-zone.png){.thumbnail}

Als er al MX-records zijn en u deze wilt vervangen, klikt u op het tandwielpictogram aan de rechterkant van elke tabelrij en vervolgens op `Record verwijderen`{.action}. Zorg er echter voor dat u niet alle MX-records verwijdert voordat u de nieuwe records toevoegt.

Als u een record wilt toevoegen, klikt u op `Record toevoegen`{.action} en selecteert u vervolgens `MX`{.action}. Vul de vereiste informatie in, naargelang de e-mailoplossing die u hebt besteld:

- **Als u een OVH-e-mailoplossing hebt**: raadpleeg de informatie in [Stap 2: Kennis van de OVH MX-configuratie](https://docs.ovh.com/nl/domains/dns-zone-mx-configuratie-handleiding/#stap-2-kennis-van-de-ovh-mx-configuratie){.external}.

- **Als u een e-mailoplossing van een andere serviceprovider gebruikt**: raadpleeg de informatie van uw serviceprovider.

Nadat u de informatie hebt ingevoerd, voltooit u de stappen en klikt u op `Bevestigen`{.action}.

> [!primary]
>
> Het kan 4 tot 24 uur duren voordat de wijziging volledig is doorgevoerd.
>

## Verder

[Algemene informatie over DNS-servers](https://docs.ovh.com/nl/domains/gedeelde_hosting_algemene_informatie_over_dns_servers/){.external}

[Wijziging van een OVH DNS-zone](https://docs.ovh.com/nl/domains/hosting_hoe_wijzig_ik_mijn_dns_zone/){.external}

Ga in gesprek met andere communityleden op [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.