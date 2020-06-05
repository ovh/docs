---
title: 'Exchange 2016: Einrichtung einer E-Mail-Weiterleitung in OWA'
excerpt: 'Exchange 2016: Einrichtung einer E-Mail-Weiterleitung in OWA'
slug: exchange_2016_einrichtung_einer_e-mail-weiterleitung_in_owa
legacy_guide_number: g1920
hidden: true
---


## Schritt 1
Um eine E-Mail-Weiterleitung über das [Exchange Webmail Interface](https://ex.mail.ovh.net/owa/) einzurichten, loggen Sie sich zunächst mit Ihrer vollständigen E-Mail-Adresse und dem zugehörigen Passwort ein.

Klicken Sie dann auf das kleine Zahnradund wählen Sie den Punkt "Optionen" aus.

![](images/img_2936.jpg){.thumbnail}


## Schritt 2
Wählen Sie dann "Posteingangs- und Aufräumregeln" und klicken Sie dann auf das "+".

![](images/img_2939.jpg){.thumbnail}


## Schritt 3
Nun erscheint ein neues Interface.

Füllen Sie die erforderlichen Felder aus:

Name: le nom d'affichage de votre règle.

Wenn Die Nachricht eintrifft und all diesen Bedingungen entspricht: Filter für Nachrichten, die weitergeleitet werden sollen.

Alle folgenden Aktionen ausführen: Auswahl der gewünschten Maßnahmen (Weiterleiten, Löschen, Verschieben, etc.).

![](images/img_2940.jpg){.thumbnail}
Nun öffnet sich ein neues Fenster, in dem Sie die E-Mail-Adresse angeben, an welche die ausgewählten Nachrichten weitergeleitet werden sollen.

Sie haben zwei Möglichkeiten:


- Eine E-Mail-Adresse manuell eintragen.

- Eine E-Mail-Adresse aus Ihrer Kontaktliste auswählen.


Klicken Sie auf "Ok", um Ihre Auswahl zu bestätigen.

![](images/img_2942.jpg){.thumbnail}


## Schritt 4
Sie haben auch die Möglichkeit, Ausnahmeregeln zu definieren, um etwa E-Mails von einem bestimmten Absender nicht weiterzuleiten.

Bestätigen Sie Ihre Regel durch Klick auf "OK".


## Schritt 5
Ihre Regel wird nun korrekt angezeigt.

Eine Übersicht aller verfügbaren Optionen finden Sie rechts.

Sollten Sie die Weiterleitung nicht mehr benötigen, können Sie sie jederzeit löschen.

![](images/img_2944.jpg){.thumbnail}


## Einrichten eines Schutzes vor Spam und Viren
Hier möchten wir Ihnen zum Abschluss noch erklären, wie Sie eine Regel definieren, um Spam in einen Ordner "Junk-E-Mail" zu filtern.

Bei OVH wird Spam grundsätzlich nicht gelöscht, um zu vermeiden, dass erwünschte Mails irrtümlich gelöscht werden.

Allerdings werden verdächtige E-Mail entsprechend getaggt, wenn Sie über Ihr Kundencenter bei der Konfiguration Ihres Service Exchange die Funktion Antispam aktivieren.

Dann können Sie beispielsweise folgende Regel definieren:

Name: Anzeigename Ihrer Regel.

Wenn Die Nachricht eintrifft und all diesen Bedingungen entspricht: "Enthält diese Wörter > im Betreff...": Geben Sie hier "[Spam]" oder "[Virus]" an.

Alle folgenden Aktionen ausführen: "Verschieben, kopieren oder löschen > Nachricht in Ordner verschieben...":  Wählen Sie nun den Ordner "Junk-E-Mail" aus.

![](images/img_2945.jpg){.thumbnail}

