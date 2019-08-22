---
title: Migratie van een failover IP
excerpt: Migratie van een failover IP
slug: migratie_van_een_failover_ip
legacy_guide_number: g1890
---


## 
Deze handleiding legt uit hoe een failover IP gemigreerd kan worden van de ene instance naar een andere. Over het algemeen beperkt of verwijdert deze actie de mogelijkheid dat uw server niet beschikbaar zal zijn en laat het u:

- migreren naar een website in de 'nieuwe versie';
- uw activiteit draaien op een replication server terwijl u onderhoud onderhoud of een update uitvoert op de production server.




## Vereisten

- Tenminste twee actieve Public Cloud instances
- Een failover IP




## 

- Het IP wordt gerouteerd naar server 1 en ik wil het doorsturen naar server 2.



![](images/img_3815.jpg){.thumbnail}

- Klik op de pijl en vervolgens op 'Wijzig de bijbehorende server'.



![](images/img_3816.jpg){.thumbnail}
Klik op de box naast de destination server

![](images/img_3817.jpg){.thumbnail}

- Klik op Toevoegen


Het failover IP kan geconfigureerd worden op de destination server voor of na het uitvoeren van de migratie. Als het vooraf geconfigureerd is zal het reageren zodra de routing is voltooid.


## 
[Ga terug naar de index van de Cloud handleidingen]({legacy}1785)

