---
title: Zugriff auf die Konsole einer Instanz in Horizon
excerpt: Zugriff auf die Konsole einer Instanz in Horizon
slug: zugriff_auf_die_konsole_einer_instanz_in_horizon
legacy_guide_number: g1782
---


## 
Sollte der Zugang zu Ihrer Instanz einmal nicht mehr möglich ist, zum Beispiel aufgrund einer fehlerhaften Konfiguration oder eines Absturzes des SSH Diensts, können Sie die Konfiguration Ihrer Instanz über die VNC Konsole reparieren.

## Hinweis:
Um in Horizon auf die Konsole einer Instanz zugreifen zu können, muss ein Passwort für einen in der Instanz vorhandenen Systembenutzer erstellt worden sein, um sich beim Betriebssystem der Instanz zu authentifizieren.

Die VNC Konsole kann bei Funktionsstörungen auch erste Diagnoseinformationen liefern, da sie eine Analyse der Startphase Ihrer Instanz ermöglicht.


## Voraussetzungen

- [Erstellung eines Zugangs zu Horizon]({legacy}1773)
- Eine erstellte Instanz
- [Root-Rechte erlangen und Passwort festlegen]({legacy}1786)




## 
Um auf die Konsole einer Instanz zuzugreifen gehen Sie wie folgt vor:


- Verbinden Sie sich mit Horizon
- Klicken Sie in dem Menü auf der linken Seite auf Instanzen
- Wählen Sie für die gewünschte Instanz in der Dropdown-Liste Konsole aus



![](images/img_2658.jpg){.thumbnail}

- Es wird dann die Konsole der Instanz angezeigt



## Hinweis:
Sollte die Konsole nicht mehr auf Tastatureingaben reagieren, klicken Sie auf die Statusleiste. Zum Verlassen des Vollbildmodus klicken Sie auf den Zurück-Button Ihres Browsers.
Konsole der Instanz

![](images/img_2657.jpg){.thumbnail}
Wir raten davon ab, Ihre Passwörter über die VNC Konsole zu konfigurieren, da diese kein deutsches Tastatur-Layout verwendet.


## 
[Zurück zum Index der Cloud Hilfen]({legacy}1785)

