---
title: Creëer een DNS zone voor een domein dat niet geregistreerd is bij OVH.
excerpt: Creëer een DNS zone voor een domein dat niet geregistreerd is bij OVH.
slug: creeer_een_dns_zone_voor_een_domein_dat_niet_geregistreerd_is_bij_ovh
legacy_guide_number: g2229
---


## Vereisten
Om een DNS zone aan te maken voor een domein dat niet geregistreerd is bij OVH dient u na te gaan dat het aan de volgende vereisten voldoet: 


- Er kunnen voor dit domein geen bestaande bestellingen of acties openstaan bij OVH
- Het domein moet bestaan
- Het SOA-record van het domein moet aangegeven zijn in de DNS zone.




## Stap 1: domeinverificatie

- In het domeinonderdeel van uw control panel klikt u op Add DNS zone.



![](images/img_4295.jpg){.thumbnail}
In het Domain name onderdeel geeft u het domein aan waar u de zone voor wilt aanmaken.

![](images/img_4296.jpg){.thumbnail}

## Let op:

- Als het aangegeven domein niet aan de vereisten voldoet dan kan er geen DNS zone voor aangemaakt worden.



![](images/img_4297.jpg){.thumbnail}

## Tip:
Als u een domein zonder DNS server heeft dan kunt u bij OVH tijdelijke DNS servers gebruiken voor het toevoegen van de * DNS zone:

- parking1.ovh.net
- parking2.ovh.net




## Stap 2: kies zone type
Vervolgens dient u het DNS zone type te kiezen: 

- Minimal: DNS zone met het minimum benodigde records om te kunnen functioneren (A, MX, CNAME, ...)
- Normal: DNS zone met aanvullende records (CNAME naar POP/IMAP/SMTP server, ...)



![](images/img_4298.jpg){.thumbnail}


## Stap 3: Bevestiging

- Vink het vakje 'I have read and understood the terms and conditions' aan.
- Klik dan op 'Generate purchase order'.



![](images/img_4299.jpg){.thumbnail}

- Klik vervolgens op 'Settle'.



![](images/img_4300.jpg){.thumbnail}

- Zodra u bij de bestelling bent aangekomen klikt u op 'Continue'.



![](images/img_4301.jpg){.thumbnail}

## Informatie:
Creatie van een DNS zone is geheel gratis.

- Geef de veiligheidscode aan en bevestig.



![](images/img_4302.jpg){.thumbnail}


## Stap 4: Bevestig de bestelling
Vervolgens kunt u zien of de bestelling is gevalideerd.

![](images/img_4303.jpg){.thumbnail}

## Informatie:
Na de validatie van uw bestelling kan de installatie ongeveer 30 minuten in beslag nemen.

