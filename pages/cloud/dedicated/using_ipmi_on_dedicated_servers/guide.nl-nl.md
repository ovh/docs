---
deprecated: true
title: 'IPMI gebruiken voor dedicated servers'
slug: gebruik-ipmi-dedicated-servers
excerpt: 'Met de IPMI kunt u inloggen op uw server zonder externe software te gebruiken'
section: 'Aan de slag'
updated: 2022-11-16
---

**Laatste update 16-08-2018**

## Introductie

Met de IPMI-console (Intelligent Platform Management Interface) kunt u een directe verbinding te maken met uw dedicated server, zonder gebruik te hoeven maken van externe software (zoals terminal of Putty)  Deze handleiding legt u uit hoe u start met deze console.

Let op, u komt hierin ook de term KVM (Keyboard Video and Mouse) tegen, die onder andere door de VPS voor deze oplossing wordt gebruikt.

## Vereisten

- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl)


## Instructie

De IPMI-verbinding kan via twee methodes plaatsvinden: de java-applet (aanbevolen) of de browser (Serial over LAN).

### Verbinding maken via de java-applet

Java moet op uw computer geïnstalleerd zijn om te kunnen functioneren. Als dit nog niet het geval is, gaat u naar de [officiële pagina](https://www.java.com/nl/download/){.external}.

In het gedeelte `IPMI`{.action} van uw Control Panel klikt u vervolgens op `Via een java-applet (KVM)`{.action}:

![IPMI Java initiated](images/java_ipmi_initiate.png){.thumbnail}

U moet het voorgestelde bestand `kvm.jnlp` downloaden en openen:

![IPMI Java opening](images/java_ipmi_activation.png){.thumbnail}

U komt vervolgens op de inlogpagina waar uw ‘root’-inloggegevens gevraagd worden, net als bij een verbinding via een terminal of externe software:

![IPMI Java login](images/java_ipmi_login.png){.thumbnail}

Vervolgens beheert u uw server zoals gewoonlijk.

### Inloggen via uw browser in Serial over LAN (SoL)

Hoewel de verbinding via de java-applet wordt aanbevolen, is het gebruik van IPMI in Serial over LAN mogelijk. Hiervoor klikt u in het gedeelte `IPMI`{.action} op `Via uw browser (SoL)`{.action}:

![IPMI SoL activation](images/sol_ipmi_activation.png){.thumbnail}

> [!warning]
>
> Het kan een paar minuten duren voordat de verbinding via SoL tot stand is gekomen.
>

### Daarom wordt verbinding via de applet aanbevolen.

De IPMI testen en opnieuw starten Als u geen toegang kunt krijgen, kunt u in eerste instantie een test uitvoeren door te klikken op `IPMI testen`{.action} en het resultaat van de diagnose te bekijken:

![IPMI test](images/ipmi_test.png){.thumbnail}

Als alles normaal is, zoals in ons voorbeeld, hebt u waarschijnlijk te maken met een lokaal probleem (Internetverbinding, computer). Als de IPMI inderdaad een probleem heeft, is het mogelijk om deze opnieuw te starten door te klikken op `IPMI herstarten`{.action}.

![IPMI test](images/ipmi_reboot.png){.thumbnail}

Het opnieuw starten duurt een paar minuten.

## Verder

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com/en/>.