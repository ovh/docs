---
title: 'Auf das Horizon-Interface zugreifen'
excerpt: 'In dieser Anleitung erfahren Sie, wie Sie auf das Horizon-Interface zugreifen.'
slug: erstellung_eines_zugangs_zu_horizon
legacy_guide_number: g1773
section: 'Über das Horizon-Interface'
---

**Stand 16.08.2018**

## Einleitung

Horizon ist das grafische Verwaltungsinterface von OpenStack. Manche Funktionen sind ausschließlich über dieses Interface verfügbar.

**Hier erfahren Sie, wie Sie auf das Horizon-Interface zugreifen.**


## Voraussetzungen

- Sie haben ein Public Cloud Projekt erstellt.


## Beschreibung

### OpenStack-Benutzer erstellen

Für den Zugriff auf Horizon benötigen Sie zunächst einen OpenStack-Benutzer. Gehen Sie hierfür in Ihrem Kundencenter in den Bereich `Cloud`{.action} und dort in den Bereich `Server`{.action}. Wählen Sie dann das betreffende Projekt aus  und klicken Sie anschließend in der linken Spalte auf `OpenStack`{.action}:

![Benutzer hinzufügen](images/1_H_add_user.png){.thumbnail}

Klicken Sie nun auf den Button `Einen Benutzer hinzufügen`{.action} und geben Sie anschließend eine Beschreibung für diesen Benutzer an. Der Login sowie das Passwort werden dann automatisch erstellt. Sobald dieser Vorgang abgeschlossen ist, wird eine Bestätigungsmeldung zur Erstellung des Benutzerkontos angezeigt.

Das Passwort bleibt im Kundencenter bis zur Aktualisierung der Seite sichtbar. Dieses Passwort kann aufbewahrt und für einen späteren Login erneut verwendet werden. Bei Bedarf kann aber auch ein neues Passwort erstellt werden. Klicken Sie hierfür auf das kleine Aktualisierungs-Icon neben Ihrem aktuellen Passwort:

![Projektmenü](images/2_H_user_manage.png){.thumbnail}

### In OpenStack Horizon einloggen

Um das Menü anzuzeigen, klicken Sie auf das kleine Piktogramm am Ende der Zeile (`...`{.action}). Klicken Sie dort auf den Link `OpenStack Horizon öffnen`{.action}. Nun erscheint die Login-Seite von [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external}. Um sich einzuloggen, geben Sie einfach Ihren Benutzernamen (`User Name`) und Ihr Passwort ein.

![Projektmenü](images/3_H_open_menu.png){.thumbnail}

![Login-Seite](images/4_H_login_window.png){.thumbnail}

Nach dem Login erscheint das OpenStack Horizon-Interface:

![Horizon-Interface](images/5_H_view.png){.thumbnail}


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.