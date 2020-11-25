---
deprecated: true
title: Het configureren van een secundaire DNS
excerpt: Hoe kan ik een domein configureren op de secundaire DNS-server
slug: het_configureren_van_een_secundaire_dns
legacy_guide_number: g1477
---


## 
OVH kan u een secundaire DNS leveren, indien u uw server wilt gebruiken als de primaire DNS-server van uw domein.

De Secundaire DNS optie is te vinden onder VPS in uw control panel.

De interface zal er als volgt uitzien:

![](images/img_2008.jpg){.thumbnail}
Op deze pagina heeft u de volgende mogelijkheden:


- het direct Bekijken van de lijst met domeinen die al geconfigureerd zijn met onze secundaire DNS.
- het Toevoegen of verwijderen van een domein op onze secundaire DNS-server.




## 1. Het toevoegen van een domein
Om een domeinnaam toe te voegen, klikt u op Domein toevoegen, en vult u het volgende in:

![](images/img_2009.jpg){.thumbnail}

- In het "Domein" record: vul het toe te voegen domein in.



![](images/img_2010.jpg){.thumbnail}
Zodra de records zijn ingevuld, kunt u dit bevestigen door te klikken op OK.

Zodra de actie is bevestigd, zal uw domein verschijnen in de lijst, zoals in het volgende voorbeeld:

![](images/img_2011.jpg){.thumbnail}
De volgende gegevens worden weergegeven bij elk domein:


- DOMEIN: Het domein dat is geconfigureerd met uw secundaire DNS.
- CREATIE DATUM: De datum dat uw domein werd toegevoegd aan de secundaire DNS.
- IP: Het IP-adres van de primaire DNS-server voor het domein in kwestie.
- Secundaire DNS: De naam van OVH's secundaire DNS waar het domein is geconfigureerd.


Er kan om verificatie worden gevraagd om te zien of u eigenaar van dit domein bent. In dit geval, zult u, zodra u het domein heeft gevalideerd, een bericht zien, vergelijkbaar met het onderstaande:
Er is een fout opgetreden tijdens het verzoek om het domein toe te voegen aan de secundaire DNS. (Eerst moeten we controleren of u de eigenaar bent van dit domein. Voeg hiervoor svp een TXT record toe aan uw DNS-zone voor het 'dedie-domaine.com'-domein, met het subdomein 'ownercheck' en de volgende waarde: '339ea8d0'. Once done and your zone reloaded, try again, probeer het opnieuw {you don't need to wait for DNS propagation}).
Voeg in dit geval een TXT record toe aan het 'ownercheck.yourdomain.com'-subdomein in het domein van de huidige DNS-zone:


```
ownercheck TXT "339ea8d0"
```




## 2. Het verwijderen van een domein
Als u een domein wilt verwijderen van de secundaire DNS, klik dan op Prullebakje, rechts van elk geconfigureerd domein.


## 
In deze handleiding, volgt uitleg over het:

- Toevoegen van een domein op onze secundaire DNS-server.
- Verwijderen van een domein op onze secundaire DNS-server.



