---
title: 'Erste Public Cloud Instanz erstellen und auf dieser einloggen'
slug: public-cloud-erste-schritte
excerpt: 'So starten Sie nach der Erstellung eines Projekts mit der Verwendung Ihres Public Cloud Dienstes'
section: 'Erste Schritte'
order: 1
---

**Letzte Aktualisierung am 02.08.2022**

## Ziel

OVHcloud Public Cloud Instanzen erfordern einen anderen Ansatz als VPS oder Dedicated Server.

**In dieser Anleitung erfahren Sie, wie Sie eine erste Public Cloud Instanz erstellen und sich mit dieser verbinden.**

## Voraussetzungen

- Sie verfügen über ein [Public Cloud](https://www.ovhcloud.com/de/public-cloud/) Projekt in Ihrem OVHcloud Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).


## In der praktischen Anwendung

### Schritt 1: SSH-Schlüssel erstellen

Das SSH-Protokoll sorgt für eine verschlüsselte Client-Server-Kommunikation. Der Einsatz von SSH-Schlüsseln erhöht die Sicherheit, indem Verbindungen von einem Gerät ohne passenden Schlüssel verhindert werden. Wenn Sie einen SSH-Schlüsselsatz erstellen, erhalten Sie einen öffentlichen und einen privaten Schlüssel.

- Der **öffentliche Schlüssel** wird bei der Installation zu Ihrer Public Cloud Instanz hinzugefügt.

- Der **private Schlüssel** wird auf Ihrem Client-Gerät gespeichert und ermöglicht den Zugriff auf Ihre Instanz ohne Benutzerpasswort. 

> [!primary]
>
Bitte beachten Sie, dass für die Verbindung mit Public Cloud Instanzen ein schlüsselbasierter SSH-Login erforderlich ist (mit Ausnahme von Instanzen mit Windows-Betriebssystem). Zu Ihrem OVHcloud Kundencenter hinzugefügte öffentliche SSH-Schlüssel sind für Public Cloud Dienste in allen Regionen und Rechenzentren verfügbar. Sie können nur **RSA**\- und **ECDSA**-verschlüsselte Schlüssel speichern; ED25519 wird aktuell nicht unterstützt. 
>
Für die Login-Authentifizierung auf Windows-Instanzen sind nur Benutzername und Passwort erforderlich.
>

#### SSH-Schlüssel mit Linux- oder Mac-Betriebssystem erstellen

Öffnen Sie zunächst über einen Mac-Computer oder ein Gerät mit installiertem Linux-Betriebssystem die Kommandozeile (Terminal). Stellen Sie sicher, dass sich in Ihrem $HOME-Verzeichnis ein Ordner “.ssh” befindet. Ist der Ordner nicht vorhanden, erstellen Sie diesen:

```bash
$ mkdir ~/.ssh
$ chmod 700 ~/.ssh
```

Verwenden Sie folgenden Befehl, um einen 4096-Bit-RSA-Schlüssel zu erstellen:

```bash
$ ssh-keygen -b 4096
```
Indem Sie die Option “-t” mit diesem Befehl verwenden, können Sie eine andere Verschlüsselungsmethode angeben, z. B.:

```bash
$ ssh-keygen -t ecdsa -a 256
```

Nach Ausführen des Befehls werden Sie aufgefordert, den neu erstellten Schlüssel in der Standarddatei zu speichern:

```ssh
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Sie können die Standarddatei akzeptieren, indem Sie “Enter” drücken. Anschließend haben Sie die Möglichkeit, eine Passphrase einzugeben, um Ihren SSH-Schlüssel durch ein Passwort zu schützen. Diese Maßnahme wird empfohlen, da sie für zusätzliche Sicherheit sorgt. Da für den Zugriff auf Ihre Public Cloud Instanz über Ihr Arbeitsgerät nur der zugehörige private Schlüssel erforderlich ist, sollten an dieser Stelle angemessene Sicherheitsvorkehrungen getroffen werden. Die Passphrase muss eingegeben werden, wenn eine Verbindung mit der Instanz hergestellt wird.

Ihre SSH-Schlüssel sollten im Verzeichnis “.ssh” gespeichert sein. Zum Dateinamen der öffentlichen Schlüsseldatei wurde die Endung “.pub” hinzugefügt.

```ssh
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:MRk+Y0zCOoOkferhkTvMpcMsYspj212lK7sEauNap user@hostname
The key's randomart image is:
+---[RSA 4096]----+
|     .. o        |
|    . .= o       |
|   o o  X        |
|. . . .          |
|. .=.o .S.       |
| =o.o.  .   .    |
|o +   .  . o ..  |
|.. .  .   oEoo . |
|o.        .o+oo  |
+----[SHA256]-----+
```

> [!warning]
>
> Der private Schlüssel sollte immer sicher aufbewahrt werden und der Zugriff darauf ausschließlich autorisierten Personen gestattet sein.
> 

Wenden Sie zum Lesen und Exportieren Ihres öffentlichen Schlüssels den Befehl “cat” auf Ihre “.pub”-Schlüsseldatei an und kopieren Sie die Ausgabe:

```bash
$ cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

> [!primary]
>
>In einem MacOS-Terminal können Sie auch die “pbcopy”- und “pbpaste”-Befehle verwenden, um die Schlüsselfolgen zu verwalten. Verwenden Sie zum Beispiel diesen Befehl, um den Schlüssel aus der Datei “id_rsa.pub” in der Zwischenablage zu speichern.
>

```bash
$ pbcopy < ~/.ssh/id_rsa.pub
```

#### SSH-Schlüssel mit Windows-Betriebssystem erstellen

[PuTTY](https://putty.org/){.external} ist eine Open-Source-SSH-Client-Software mit grafischem Benutzerinterface, verfügbar für Windows und andere Betriebssysteme. Sie können PuTTY verwenden, um eine Remoteverbindung mit einem Linux-Server herzustellen. Die zugehörige Software PuTTY Key Generator (PuTTYgen) kann zum Erstellen von SSH-Schlüsseln verwendet werden.

Wenn PuTTY nicht bereits installiert ist, laden Sie es zuerst über [die offizielle Webseite](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) herunter. Das empfohlene Standardinstallationspaket enthält PuTTYgen, es ist aber auch als Standalone-Datei verfügbar. Um zu überprüfen, ob Sie bereits über PuTTY verfügen, durchsuchen Sie das Menü “Programme” oder verwenden Sie die Windows-Suche.

Öffnen Sie PuTTYgen und wählen Sie einen unterstützten Verschlüsselungsalgorithmus aus. Das vorliegende Beispiel verwendet RSA. Geben Sie 4096 als Bit-Anzahl ein und klicken Sie dann auf den Button `Generate`{.action}.

![Schlüssel erstellen](images/puttygen_01.png){.thumbnail}

Bewegen Sie anschließend Ihre Maus willkürlich im Bereich unter der Fortschrittsanzeige.

![erstellter Schlüssel](images/puttygen_02.gif){.thumbnail}

Der Schlüssel ist fertig erstellt, wenn die Fortschrittsanzeige voll ist. 

![Schlüssel speichern](images/puttygen_03a.png){.thumbnail}

Sie können den öffentlichen Schlüssel in diesem Fenster auswählen und kopieren, um diesen in Ihrem OVHcloud Kundencenter wie in [Schritt 2](./#schritt-2-offentliche-schlussel-im-ovhcloud-kundencenter-speichern_1) beschrieben zu speichern.

Speichern Sie beide Schlüssel in Dateien und verwenden Sie die Option zur Eingabe einer Passphrase. Da für den Zugriff auf Ihre Public Cloud Instanz über Ihr Arbeitsgerät nur der zugehörige private Schlüssel erforderlich ist, sollten an dieser Stelle angemessene Sicherheitsvorkehrungen getroffen werden. Die Passphrase muss eingegeben werden, wenn eine Verbindung mit der Instanz hergestellt wird.

### Schritt 2: Öffentliche Schlüssel im OVHcloud Kundencenter speichern

Unabhängig von der zur Erstellung der SSH-Schlüssel verwendeten Methode verfügen Sie jetzt über einen öffentlichen Schlüssel, der zu einer Public Cloud Instanz hinzugefügt werden kann. Sie können öffentliche Schlüssel im Public Cloud Bereich des OVHcloud Kundencenters speichern, damit Ihnen diese bei Erstellen einer Instanz direkt zur Verfügung stehen.

> [!primary]
>
Gespeicherte SSH-Schlüssel ermöglichen es Ihnen, Ihre Instanzen schneller zu erstellen. Zur Änderung von Schlüsselpaaren oder zum späteren Hinzufügen von Benutzern folgen Sie der Anleitung “[Zusätzliche SSH-Schlüssel konfigurieren](https://docs.ovh.com/de/public-cloud/zusaetzliche-ssh-schluessel-konfigurieren/)”.
>

Loggen Sie sich im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie das betreffende Public Cloud Projekt aus. Klicken Sie dann in der linken Menüleiste unter “Project Management” auf `SSH-Schlüssel`{.action}.

Klicken Sie auf den Button `SSH-Schlüssel hinzufügen`{.action}. Geben Sie im neu geöffneten Fenster einen Namen für den Schlüssel ein und fügen Sie Ihre Schlüsselfolge (in [Schritt 1](./#schritt-1-ssh-schlussel-erstellen) aus der öffentlichen Schlüsseldatei bzw. dem PuTTYgen-Fenster kopiert) in das Feld “Schlüssel” ein. Bestätigen Sie den Vorgang, indem Sie auf `Hinzufügen`{.action} klicken.

![Schlüssel hinzufügen](images/puttygen-04.png){.thumbnail}


### Schritt 3: Instanz erstellen

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YP92y1rAVdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Loggen Sie sich im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie das betreffende Public Cloud Projekt aus. Klicken Sie auf der “Start”-Seite auf `Instanz erstellen`{.action}. (Sie finden dieselbe Funktion auch auf der “Instanzen”-Seite, indem Sie in der linken Menüzeile unter “Compute” auf `Instances`{.action} klicken.)

![Instanz auswählen](images/instance-creation-01-2021.png){.thumbnail}

Wählen Sie zunächst entsprechend Ihren Anforderungen ein Server-Template aus. Der Assistent zeigt Ihnen Beschreibungen zu den verschiedenen Einsatzzwecken sowie die Verfügbarkeit der Servermodelle. Sie können aus den folgenden angepassten Kategorien auswählen:

| Servertyp | Garantierte Ressourcen | Verwendungshinweise |
| :---         |     :---:      |          :--- |
| General Purpose   | ✓     | Entwicklungsserver, Web- oder Geschäftsanwendungen    |
| CPU     | ✓       | Videokodierung oder anderes High Performance Computing      |
| RAM   | ✓     | Datenbanken, Analysen und In-Memory-Berechnungen    |
| GPU     | ✓       | Massiv-Parallel-Processing-Leistung für spezialisierte Anwendungen (Rendering, Big Data, Deep Learning etc.)       |
| Sandbox    | -       | Auf geteilten Ressourcen gehostet, für Test- und Entwicklungsumgebungen      |
| Discovery    | -       | Auf geteilten Ressourcen gehostet, für Test- und Entwicklungsumgebungen      |
| IOPS   | ✓     | Optimiert für Festplattentransaktionen    |


> [!primary]
>
Die Gesamtressourcen Ihres Public Cloud Projekts sind anfangs aus Sicherheitsgründen eingeschränkt. Sie können Quotas überprüfen und eine Erhöhung über Ihr OVHcloud Kundencenter anfordern, indem Sie in der linken Menüleiste unter “Project Management” auf `Quota and Regions`{.action} klicken.
>
Bitte beachten Sie, dass Sie Ihre Instanz im Nachhinein upgraden, jedoch nicht auf ein kleineres Modell wechseln können, sofern Sie nicht in Schritt 4 der Erstellung die “Flex”-Option ausgewählt haben. Mehr Informationen hierzu finden Sie weiter unten in dieser Anleitung.
>

Wählen Sie im nächsten Schritt ein Rechenzentrum für Ihre Public Cloud Instanz aus.

Im dritten Schritt wählen Sie das Betriebssystem für Ihre Instanz aus. Welche Images in diesem Schritt verfügbar sind, ist abhängig von Ihrer Auswahl in den vorangegangen Schritten, d. h. der Kompatibilität mit dem Servertyp und der Region. Es stehen auch Betriebssysteme mit vorinstallierten Anwendungen zur Verfügung.

![Image auswählen](images/instance-creation-02.png){.thumbnail}

> [!primary]
>
Wenn Sie ein Betriebssystem auswählen, das eine kostenpflichtige Lizenz erfordert, werden die Kosten automatisch zu Ihrer stündlichen oder monatlichen Abrechnung hinzugefügt.
>

Auch für diesen Schritt muss ein SSH-Schlüssel hinzugefügt werden (ausgenommen Windows-Instanzen), indem dieser entweder direkt über `Schlüssel hinzufügen`{.action} eingefügt oder aus der Liste ausgewählt wird, wenn Sie diesen bereits in [Schritt 2](./#schritt-2-offentliche-schlussel-im-ovhcloud-kundencenter-speichern_1) im Kundencenter gespeichert haben.

![Schlüssel auswählen](images/instance-creation-03.png){.thumbnail}

Im vierten Schritt können zusätzliche Optionen konfiguriert werden.

![Optionen auswählen](images/instance-creation-04.png){.thumbnail}

- Sie können mehrere Instanzen mit den gewählten Einstellungen deployen (innerhalb der zuvor erwähnten Quota).
- Sie können eine flexible Instanz erstellen, damit Sie im Nachhinein auch auf ein kleineres Modell (oder sogar andere Servermodellkategorien) wechseln können. Diese Option begrenzt jedoch den **inklusiven Speicherplatz** der Instanz auf 50 GB, unabhängig davon, ob auf ein höheres oder ein geringeres Modell migriert wird.
- Sie können den Anzeigenamen Ihrer Instanz ändern.
- Sie können ein Post-Installationsskript hinzufügen.
- Sie können die Instanz(en) zu einem vorhandenen privaten Netzwerk (vRack) hinzufügen.
- Sie können automatische Backups für die Instanz(en) aktivieren. Bitte achten Sie hierbei auf die Preisinformationen sowie die Optionen zur Backup-Rotation.

Wenn Sie Ihre Auswahl getroffen haben, klicken Sie auf `Weiter`{.action}, um zum letzten Schritt überzugehen und eine Abrechnungsmethode auszuwählen.

![Abrechnungsmethode auswählen](images/instance-creation-05.png){.thumbnail}

Wir empfehlen Ihnen, bei Unsicherheit bezüglich des Verwendungszeitraums die stündliche Abrechnung auszuwählen, da es nicht möglich ist, im Nachhinein zu dieser Option zu wechseln. Sobald die Instanz auf der “Instanzen”-Seite verfügbar ist, können Sie auf monatliche Abrechnung umstellen.

> [!warning]
>
>Wenn Sie sich für die stündliche Abrechnung entscheiden, wird Ihnen die Instanz solange in Rechnung gestellt, bis diese gelöscht wird. Es spielt keine Rolle, ob die Instanz tatsächlich verwendet wird oder nicht.
>

Nachdem Sie überprüft haben, dass Ihre Konfigurationseinstellungen korrekt sind, klicken Sie auf den Button `Instanz erstellen`{.action}, um den Vorgang abzuschließen. Es kann einige Minuten dauern, bis Ihr Dienst geliefert wird.

### Schritt 4: Mit Ihrer Instanz verbinden <a name="connect-to-instance"></a>

Loggen Sie sich im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie das betreffende Public Cloud Projekt aus. Klicken Sie dann in der linken Menüleiste unter “Compute” auf `Instanzen`{.action}. Ihre Instanz steht bereit, sobald in der entsprechenden Tabellenspalte als Status “Aktiviert” angezeigt wird. Um dies zu überprüfen, können Sie rechts neben `Instanz erstellen`{.action} auf den Aktualisierungsbutton klicken.

![Instanzen-Seite](images/instance-connect-01.png){.thumbnail}

Für die Instanz wird automatisch ein Benutzer mit erweiterten Berechtigungen erstellt. Der Benutzername entspricht dem gewählten Image, z. B. “ubuntu”, “debian”, “fedora”, “arch” etc. Diese sowie weitere Eigenschaften können Sie im “Dashboard” der Instanz einsehen, indem Sie auf `...`{.action} und dann auf `Instanz-Details`{.action} klicken.

> [!primary]
>
Sollten Verbindungsprobleme auftreten, d. h. kommt es zu Fehlern mit Ihren SSH-Schlüsseln, lesen Sie bitte die Anleitung “[Änderung des SSH-Schlüssels bei Verlust](https://docs.ovh.com/de/public-cloud/nderung_des_ssh_schlussels_bei_verlust/)”.
>


> [!primary]
>
Wenn Sie über die OVHcloud API oder das Interface von OpenStack Horizon eine Instanz ohne SSH-Schlüssel erstellt haben, können Sie Ihrer Instanz nur über den [Rescue-Modus](https://docs.ovh.com/de/public-cloud/umstellung_einer_instanz_auf_den_rescue-modus/) einen SSH-Schlüssel hinzufügen. Beachten Sie hierzu die Anweisungen in [diesem Abschnitt der entsprechenden Anleitung](../nderung_des_ssh_schlussels_bei_verlust/#in-der-praktischen-anwendung).
>

#### Über Linux / Mac mit einer Linux-Instanz verbinden

Sie können jetzt über die Kommandozeile (Terminal) via SSH auf Ihre Instanz zugreifen. Ersetzen Sie “username” in den nachfolgenden Beispielen wie zuvor beschrieben mit Ihrem Standardbenutzer. Sie können auch einfach den gesamten Login-Befehl aus dem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) kopieren, indem Sie diesen im “Dashboard” Ihrer Instanz anklicken und in Ihr Terminal kopieren.

![Instanzen-Seite](images/instance-connect-02.png){.thumbnail}

Geben Sie die Passphrase Ihres privaten Schlüssels ein, wenn Sie dazu aufgefordert werden. 

```bash
ssh username@IPv4_of_your_instance
Enter passphrase for key '/Users/username/.ssh/id_rsa':
```
Da Sie mit root-Berechtigung eingeloggt sind (“sudo user”), können Sie direkt Befehle eingeben, um Verwaltungsaufgaben auszuführen. Es wird empfohlen, zuerst Ihr Passwort zu ändern:

```bash
$ sudo passwd username
New password:
Retype new password:
passwd: password updated successfully
```
Sie können diese Login-Daten anschließend verwenden, um sich über die `VNC-Konsole`{.action} Ihres [OVHcloud Kundencenters](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) einzuloggen. Wechseln Sie nun zum “root”-Benutzer und legen Sie ein sicheres Passwort fest. Wechseln Sie dann wieder zum vorherigen Benutzer.

```bash
$ sudo su -
# passwd
New password:
Retype new password:
passwd: password updated successfully
# su - username
```
Beachten Sie, dass es nur selten notwendig ist, zum “root”-Benutzer zu wechseln. Wir empfehlen, dass Sie sich für Verwaltungsaufgaben, die root-Berechtigungen erfordern, als ein Benutzer aus der “sudo”-Gruppe einloggen, um Befehle auszuführen.

#### Über Windows mit einer Linux-Instanz verbinden

Nachdem Sie Ihre SSH-Schlüssel erstellt und gespeichert ([Schritt 1](./#schritt-1-ssh-schlussel-erstellen)) und Ihre Instanz mit dem öffentlichen Schlüssel installiert haben ([Schritt 3](./#schritt-3-instanz-erstellen)), können Sie [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) und Ihren privaten Schlüssel verwenden, um sich mit Ihrer Instanz zu verbinden.

Öffnen Sie PuTTY, erweitern Sie links den Menüpunkt “SSH” und klicken Sie dann auf “Auth”, um die Authentifizierungsoptionen einzusehen.

![PuTTY verwenden](images/puttyconnect-01.png){.thumbnail}

Klicken Sie auf den Button `Browse`{.action}, um zu dem Ordner zu navigieren, in dem sich Ihre private Schlüsseldatei (.ppk) befindet, und öffnen Sie diese. Wechseln Sie dann im linken Menü zu “Session” und geben Sie Ihre Login-Daten (benutzer@IPv4_adresse) ein. Ersetzen Sie “ubuntu” in den Beispiel-Screenshots mit dem zugehörigen Standardbenutzer, der im “Dashboard” der Instanz im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angezeigt wird. (Klicken Sie in der linken Menüleiste auf `Instances`{.action}, dann auf den Namen der Instanz.)

Sie können diese Sitzung nun für zukünftige Verbindungen speichern, damit sie über die Liste in diesem Interface verfügbar ist. Geben Sie unter “Saved Sessions” einen beschreibenden Namen ein und klicken Sie auf `Save`{.action}, um diesen hinzuzufügen.

![PuTTY verwenden](images/puttyconnect-02.png){.thumbnail}

Klicken Sie dann auf `Open`{.action}. Sie werden dazu aufgefordert, die Passphrase des Schlüssels einzugeben.

![PuTTY verwenden](images/puttyconnect-03.png){.thumbnail}


> [!primary]
>
Die obenstehenden Anweisungen entsprechen der Best Practice für die sichere Verbindung mit Ihren Public Cloud Instanzen. Aus praktischen und Sicherheitsgründen empfehlen wir außerdem, einen Passwort-Manager auf Ihrem Gerät zu verwenden, zum Beispiel die kostenlose Open-Source-Lösung **KeePass**.
>


#### Mit einer Windows-Instanz verbinden

Nachdem die Instanz fertig erstellt ist, muss die Windows-Installation abgeschlossen werden (_sysprep_). Klicken Sie hierzu auf `...`{.action} und dann auf ` Instanz-Details`{.action}. Wechseln Sie zum Tab `VNC-Konsole`{.action}. Die Konsole sollte bereits das Post-Installationsfenster anzeigen.

![Windows sysprep](images/windows-connect-01.png){.thumbnail}

Legen Sie im ersten Schritt Ihre Standorteinstellungen fest, indem Sie eine Region, eine Sprache sowie das Tastaturlayout auswählen. Klicken Sie auf `Weiter`{.action}, um fortzufahren.

![Windows sysprep](images/windows-connect-02.png){.thumbnail}

Im zweiten Schritt wird der Standard-“Administrator”-Account eingerichtet. Geben Sie zweimal Ihre Passphrase ein und klicken Sie auf `Beenden`{.action}, um den Installationsvorgang abzuschließen. Verwenden Sie das Augen-Symbol, um zu überprüfen, dass alle im Feld eingegebenen Zeichen dem Layout Ihrer Tastatur entsprechen.

Die Instanz wird neu gestartet und Sie können sich mithilfe dieser Login-Daten über einen Remotedesktop-Client einloggen. 

##### **Über Windows**

Verwenden Sie falls nötig die Windows-Suche und öffnen Sie den Windows-Client für Remote-Desktopverbindungen.

![Windows Remote](images/windows-connect-03.png){.thumbnail}

Geben Sie die IPv4-Adresse Ihrer Instanz sowie “Administrator” als Benutzer und dann Ihre Passphrase ein. Normalerweise erscheint nun eine Warnungsmeldung, die Sie auffordert, die Verbindung aufgrund eines unbekannten Zertifikats zu bestätigen. Klicken Sie auf `Ja`{.action}, um sich mit Ihrer Instanz zu verbinden.

> [!primary]
>
Sollten bei diesem Vorgang Probleme auftreten, stellen Sie sicher, dass Remoteverbindungen (RDP) auf Ihrem Gerät erlaubt sind, indem Sie Ihre Systemeinstellungen, Firewall-Regeln und mögliche Netzwerkeinschränkungen kontrollieren.
>

##### **Über Linux**

Sie können über die eingebaute VNC-Konsole im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) auf Public Cloud Instanzen zugreifen. Für den Login über Ihr lokales Gerät müssen die Verbindungen über eine Client-Anwendung hergestellt werden, die das Remote Desktop Protocol (RDP) unterstützt.

Zum Beispiel ist Remmina Remote Desktop Client eine kompatible Anwendung, die bei einer Ubuntu-Desktop-Installation enthalten sein sollte. Wenn Sie Remmina in Ihrer Umgebung nicht finden können, können Sie es von der [offiziellen Webseite](https://remmina.org/) herunterladen.

![Linux Remote](images/linux-connect-01.png){.thumbnail}

Öffnen Sie Remmina und stellen Sie sicher, dass als Verbindungsprotokoll “RDP” ausgewählt ist. Geben Sie die IPv4-Adresse Ihrer Public Cloud Instanz ein und drücken Sie auf “Enter”.

![Linux Remote](images/linux-connect-02.png){.thumbnail}

Erscheint eine Zertifikatsmeldung, klicken Sie auf `Ja`{.action}. Geben Sie anschließend den Benutzernamen und das Passwort für die Instanz ein und klicken Sie auf `OK`{.action}, um die Verbindung herzustellen.

![Linux Remote](images/linux-connect-03.png){.thumbnail}


## Weiterführende Informationen

[Backup einer Instanz erstellen](../ein_backup_einer_instanz_erstellen/)

[Public Cloud Quota erhöhen](../public-cloud-quota-erhoehen/)

[Von der stündlichen auf monatliche Abrechnung umstellen](../abrechnungsart-aendern-public-cloud/)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.