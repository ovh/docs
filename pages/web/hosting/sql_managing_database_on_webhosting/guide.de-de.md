---
title: Verwaltung einer Datenbank in Ihrem Webhosting
slug: verwaltung-einer-datenbank-in-ihrem-webhosting
legacy_guide_number: 1943
hidden: true
---


## Allgemeine Informationen
Eine Datenbank ist eine Sammlung strukturierter und organisierter Daten, die dazu dient, auch große Datenmengen effizient speichern und verwenden zu können. Man spricht oft von "BDD" oder "SQL". SQL ist eine Datenbanksprache, mit der man Daten einfügen, verändern, wiederherstellen oder löschen kann.

Die Webhosting-Angebote von OVH enthalten standardmäßig SQL-Datenbanken. Ihre Anzahl und maximale Größe hängen davon ab, für welches unserer Angebote Sie sich entschieden haben. Die Details zu unseren verschiedenen Angeboten finden Sie [hier](https://www.ovhcloud.com/de/web-hosting/){.external}.

Auf diese Datenbanken können Sie ausschließlich über Ihr OVH Webhosting zugreifen. Sie können keine Webseite oder Applikation außerhalb von OVH mit diesen Datenbanken verbinden.

OVH bietet Ihnen zwei verschiedene Datenbanktypen an: MySQL oder PostgreSQL


## Verwaltung einer Datenbank in Ihrem Webhosting

### Erstellung einer Datenbank
Loggen Sie sich mit Kundenkennung (nic-handle, z. B. " **xx999-ovh** ") und Passwort in Ihr [Kundencenter](https://www.ovh.com/manager/web){.external} ein.


![hosting](images/3035.png){.thumbnail}

In unserem Beispiel verwenden wir ein OVH Webhosting-Angebot mit mehreren Datenbanken. Wir erstellen nun eine MySQL-Datenbank. Wählen Sie im Menü links unter "Hosting-Pakete" das betreffende Hosting aus und klicken Sie dann auf den Tab Datenbank


![hosting](images/3854.png){.thumbnail}

- Klicken Sie nun rechts auf Eine Datenbank erstellen , um zum Erstellungsformular zu gelanden.
- Falls in Ihrem Webhosting keine Datenbank mehr verfügbar ist, können Sie eine zusätzliche Datenbank bestellen .


![hosting](images/3855.png){.thumbnail}

Im nächsten Schritt müssen Sie folgende Angaben machen:

- Die Engine der Datenbank: MySQL oder PostgreSQL
- Die Version der gewünschten Datenbank
- Den gewünschten Typ der Datenbank (Wahlmöglichkeit erst ab dem Hosting-Level PRO)


![hosting](images/3040.png){.thumbnail}

Wenn das Formular vollständig ausgefüllt ist, klicken Sie auf "Weiter" Im nächsten Schritt sind folgende Angaben erforderlich:

- Einen Nutzernamen( maximal 6 Zeichen, nur Buchstaben und Ziffern )
- Ein Passwort (die Bedingungen hierfür finden Sie im Formular).


![hosting](images/3041.png){.thumbnail}

Klicken Sie auf "Weiter", um zum letzten Schritt zu gelangen.

Hier sehen Sie noch einmal im Überblick alle Angaben zur gewünschten Datenbank. Wenn alles korrekt ist, können Sie die Erstellung "Bestätigen".


![hosting](images/3042.png){.thumbnail}

Nun sollte eine Meldung erscheinen, dass die Erstellung erfolgreich war. Es kann einige Minuten dauern, bis Ihre Datenbank einsatzbereit ist. Sie erhalten eine Benachrichtigung per E-Mail, wenn die Datenbank verwendet werden kann.


![hosting](images/3043.png){.thumbnail}

Die Erstellung Ihrer Datenbank ist damit abgeschlossen.


## Die Verwaltungsoptionen in Ihrem OVH Kundencenter
Wenn Sie eine Datenbank erstellt haben, finden Sie in Ihrem OVH Kundencenter eine Reihe von Funktionen, die Ihnen die Verwaltung erleichtern sollen


![hosting](images/3847.png){.thumbnail}


### Das Passwort andern
Mit dieser Funktion können Sie das Passwort Ihrer Datenbank von Ihrem Kundencenter aus ändern.

- Achtung: Sie sollten das Passwort der Datenbank nicht unüberlegt ändern. Hierdurch kann es zu einer Unterbrechung der Erreichbarkeit derjenigen Webseiten oder Dienste kommen, die diese Datenbank verwenden. .

Wenn Sie das Passwort ändern und bei der Änderung eine Webseite diese Datenbank verwendet, denken Sie unbedingt daran, die Konfigurationsdatei auf Ihrem FTP-Server zu  **aktualisieren** .


### Eine Sicherung (Dump) erstellen
Sie können direkt von Ihrem Kundencenter aus eine Sicherung Ihrer Dtaenbank erstellen.

OVH bietet verschiedene Sicherungszeitpunkte an:

- Jetzt: die zum Zeitpunkt der Sicherung in der Datenbank gespeicherten Daten,
- Gestern: die 24 Stunden zuvor in der Datenbank gespeicherten Daten,
- Letzte Woche: die 7 Tage zuvor in der Datenbank gespeicherten Daten.

Mit dieser Funktion können Sie Daten wiederherstellen, die (egal aus welchem Grund) zuvor gelöscht oder verändert wurden.


![hosting](images/3045.png){.thumbnail}

Klicken Sie dann auf "Weiter" und anschließend auf "Bestätigen". Die Erstellung der Sicherung kann einige Minuten in Anspruch nehmen. Wenn die Sicherung abgeschlossen ist, erhalten Sie eine E-Mail an die im Kundencenter hinterlegte Adresse.


### Eine Sicherung (Dump) wiederherstellen
Wenn Sie die Daten einer zuvor erstellten Sicherung (wie oben beschrieben) wiederherstellen möchten, gehen Sie folgendermaßen vor:

Im Menü Ihrer Datenbanksicherungen, können Sie rechts neben jeder erstellten Sicherung zwischen folgenden Optionen wählen:

- Die Sicherung herunterladen
- Die Datenbank anhand dieser Sicherung wiederherstellen


![hosting](images/3848.png){.thumbnail}


### Die Datenbank loschen
Wenn Sie eine Datenbank nicht länger verwenden möchten, können Sie sie über diesen Button endgültig löschen.

**Diese Aktion kann nicht rückgängig gemacht werden und führt zum Verlust aller in der Datenbank gespeicherten Daten.**

Ein Pop-up erinnert Sie daran, dass die Löschung endgültig ist. Sie müssen die Löschung nun bestätigen.


![hosting](images/3046.png){.thumbnail}


### Das Quota neu berechnen
**Wichtige Informationen zum Quota** :

Diese Informationen werden alle  **24h**  automatisch aktualisiert.

Sie können auch von Ihrem Kundencenter aus manuell eine Aktualisierung starten.

Wenn Sie den empfohlenen Speicherplatz überschreiten, werden Ihre Rechte eingeschränkt und Sie haben nur noch Lesezugriff.

Um diese Einschränkung zu vermeiden, können Sie nicht mehr benötigte Daten löschen und anschließend das Quota neu berechnen. Wenn Sie die empfohlene Größe nicht mehr übersteigt, wird Ihre Datenbank automatisch wieder freigeschaltet. Dies kann einige Minuten in Anspruch nehmen.


### Zugang zu phpMyAdmin
Sie müssen hier lediglich das Passwort Ihrer Datenbank angeben. Alle anderen Felder werden automatisch ausgefüllt.

- Passwort: das Passwort Ihrer Datenbank.

Version: Sie können sich wahlweise mit der aktuellen Datenbank oder einer Sicherung (24h oder 7 Tage zuvor) verbinden.


![hosting](images/3047.png){.thumbnail}



> [!success]
>
> https://phpmyadmin.ovh.net/
> 


## Haufige Fehler

### Can't connect to local MySQL
Hierbei handelt es sich um einen Verbindungsfehler mit dem MySQL-Server. Die Meldung besagt, dass Ihr Skript erfolglos versucht, sich mit dem lokalen MySQL zu verbinden. MySQL funktioniert bei OVH (Webhosting-Angebote) nicht lokal, sondern über das Netzwerk. Bei der Konfiguration Ihrer Skripte haben Sie vermutlich localhost angegeben. Das ist nicht korrekt . Sie müssen in der Konfigurationsdatei Ihrer Webseite folgenden Servernamen angeben: "Name_Ihrer_bdd.mysql.db".


### Too Many Connections
Wenn die Fehlermeldung " **Too many connections**" erscheint, wenn Sie sich mit MySQL verbinden wollen, ist bereits die maximal erlaubte Anzahl Clients mit dem MySQL-Server verbunden ( **max_connections** ). Die Zahl gleichzeitiger Zugriffe ist auf 30 begrenzt . Überprüfen Sie, ob alle SQL-Verbindungen nach jeder Anfrage ordnungsgemäß beendet werden.


## Weitere Aktionen

### Eine Sicherung (Dump) importieren
Wie importiere ich das Backup meiner MySQL-Datenbank? Welche Möglichkeiten habe ich?

Eine Hilfe zum Import von MySql-Datenbanken finden Sie [hier](https://www.ovhcloud.com/de/web-hosting/guides/g1393.mutualise_guide_importation_dune_base_de_donnees_mysql){.external} .


### Eine Datenbank exportieren
Wie exportiere ich meine SQL-Datenbank? Welche Möglichkeiten habe ich, um ein Backup meiner Datenbank zu erstellen?

Eine Hilfe zum Export von Datenbanken finden Sie [hier](https://www.ovhcloud.com/de/web-hosting/guides/g1394.mutualise_guide_exportation_des_bases_de_donnees){.external}.
