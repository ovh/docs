---
deprecated: true
title: Introductie tot SSH
slug: ssh-introductie
excerpt: Ontdek hoe u met de SSH-dienst toegang krijgt tot uw server
section: SSH en de SSH-key
order: 1
updated: 2022-06-08
---

**Laatste update 18/12/2017**

## Introductie

Het SSH (Secure Shell) communicatieprotocol is standaard geïnstalleerd op alle OVH-servers (VPS, dedicated servers, Public Cloud instances).

**Ontdek hoe u de SSH-dienst gebruikt om toegang te krijgen tot uw server.**

## Vereisten

- SSH is op alle machines geïnstalleerd.  U kunt het gebruiken om veilig verbinding te maken met uw server en er volledige controle over te hebben.


## Instructies

### Compatibele software

U kunt met vele softwaretoepassingen verbinding maken in SSH. Hier vindt u enkele voorbeelden. 

#### Windows

- [PuTTY](http://www.putty.org/){.external} (gratis)
- [MobaXterm](https://mobaxterm.mobatek.net/) (gratis versie en betaalde versie)
- [SecureCRT](http://www.vandyke.com/products/securecrt/){.external} (Betaald)

Voor de nieuwste versies van Windows 10 en Windows Server geeft de ontwikkelaarsmodus u toegang tot een bash-console. Microsoft-documentatie: <https://msdn.microsoft.com/fr-fr/commandline/wsl/install-win10>

#### Mac

- De `Terminal`{.action} tool wordt geleverd bij Mac OS X en wordt systematisch op het apparaat geïnstalleerd.


#### Linux

- De `Console`{.action} of `Terminal`{.action} tool is standaard geïnstalleerd en kan worden gebruikt om in te loggen.
- Voor het beheren van meerdere tabbladen kan het `Terminator` pakket worden geïnstalleerd. Een handleiding over Terminator: <https://doc.ubuntu-fr.org/terminator>
- [OpenSSH](http://www.openssh.com){.external} (gratis).


### Stappen voor SSH-verbinding

#### Stap 1: eerste verbinding

Om een machine in SSH te verbinden, zijn de volgende gegevens nodig: 

- de IPv4 of de naam van de machine;
- het root-wachtwoord van de machine (ontvangen per e-mail tijdens de installatie). 


U kunt verbinden met het volgende commando: 

```sh
ssh root@IP_du_serveur
```

of anders met:

```sh
ssh root@nom_du_serveur
```

Vervolgens krijgt u het bericht: 

```sh
The authenticity of host servername (IP_du_serveur) cant be established.
RSA key fingerprint is a9:bb:55:35:86:xx:xx:00:xx:00:2b:2c:79:10:96:3c.
Are you sure you want to continue connecting (yes/no)? YES
Warning: Permanently added servername,IP_du_serveur (RSA) to the list of known hosts.
Password:
root@vps12345:~#
```

Wanneer u de eerste keer verbinding maakt, ontvangt uw SSH-client een RSA key vingerafdruk, een vingerafdruk van de server waarmee u verbinding maakt. Dit wordt gecontroleerd voor elke nieuwe verbinding. Als de vingerafdruk verandert, wordt u op de hoogte gebracht, dit betekent dat er iets is veranderd:

- de machine is opnieuw geïnstalleerd; 
- de SSH-server is opnieuw geïnstalleerd; 
- u bent ingelogd op een andere machine. 

Wanneer u voor het eerst verbinding maakt, moet u de vingerafdruk accepteren die door uw SSH-client op uw bureaublad wordt opgeslagen.


#### Stap 2: de handleiding

Op Linux-distributies hebt u toegang tot een handleiding met alle beschikbare commando‘s en hun argumenten.

```sh
man bash
```

#### Stap 3: updates

Zowel uw SSH-client als uw distributie moeten up-to-date worden gehouden. Om dit te controleren, kunt u de volgende commando‘s typen:

```sh
ssh -V
```

Voor meer informatie kunt u de documentatie raadplegen voor de SSH-client die u gebruikt.


## Ga verder

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com> .