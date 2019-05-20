---
title: Umzug einer Failover-IP
excerpt: Umzug einer Failover-IP
slug: umzug_einer_failover-ip
legacy_guide_number: g1890
---


## 
In dieser Hilfe wird beschrieben, wie Sie eine Failover-IP von einer Instanz auf eine andere Instanz umziehen können. Dies kann aus verschiedenen Gründen interessant sein, meist wird diese Operation dazu genutzt, um die durchgehende Erreichbarkeit einer Dienstleistung sicherzustellen, zum Beispiel:

- Im Rahmen einer Umstellung einer Website auf deren "neue Version".
- Um den Produktivbetrieb auf einen replizierten Server umzuleiten, während Sie eine Wartung oder ein Update am Produktiv-Server durchführen.




## Voraussetzungen

- Mindestens zwei gestartete Public Cloud Instanzen
- Eine Failover-IP




## 

- Die IP-Adresse wird derzeit auf den Server 1 geroutet und soll auf den Server 2 umgezogen werden.



![](images/img_3815.jpg){.thumbnail}

- Klicken Sie auf die IP-Adresse und dann auf "Den dazugehörigen Server ändern".



![](images/img_3816.jpg){.thumbnail}

- Wählen Sie den gewünschten Ziel-Server aus.



![](images/img_3817.jpg){.thumbnail}

- Klicken Sie auf "Anhängen".


Die Failover-IP kann auf dem Ziel-Server sowohl vor als auch nach deren Umzug konfiguriert werden. Es empfiehlt sich jedoch eine vorherige Konfiguration, da die Adresse dann unmittelbar nach dem Abschluss der Routing-Operation antwortet.


## 
[Zurück zum Index der Cloud Hilfen]({legacy}1785)

