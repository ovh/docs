---
title: Exchange 2013/2016 Verwendung der Ressourcen-Accounts
excerpt: In dieser Hilfe wird die Verwendung der Ressourcen-Accounts Ihres Exchange 2013 Angebots beschrieben
slug: exchange_20132016_verwendung_der_ressourcen-accounts
legacy_guide_number: g1325
section: 'Exchange Account-Funktionen'
---


## Erstellung der Ressource Teil 1
Um Ihre Ressource zu erstellen verbinden Sie sich mit Ihrem [OVH Kundencenter](https://www.ovh.com/manager/web/login.html).

Wählen Sie unter "Plattform" Ihr Exchange Angebot aus. 

Stellen Sie die Ansicht rechts oben im Interface auf den "Experten-Modus" um.

Klicken Sie auf die Rubrik "Ressourcen-Accounts" und dann auf "Einen Ressourcen-Account hinzufügen".

![](images/img_1346.jpg){.thumbnail}


## Erstellung der Ressource Teil 2
Tragen Sie die geforderten Angaben in die Felder ein: 

Name der Ressource: geben Sie den Namen an, der für die Ressource angezeigt werden soll.

E-Mail-Adresse der Ressource:  wählen Sie die E-Mail-Adresse der Ressource aus. Dabei darf es sich nicht um eine bereits existierende E-Mail-Adresse handeln!

Kapazität:  zu Informationszwecken können Sie hier die Größe Ihrer Ressource angeben.

Konflikte erlauben:  wenn diese Option ausgewählt ist, wird keine Warnmeldung angezeigt, wenn ein Benutzer versucht, einen Saal oder ein Gerät zu reservieren, das bereits für ein Ereignis verwendet wird.

Ressourcen-Typ:  es sind zwei Ressourcen-Typen verfügbar: "Saal" oder "Gerät".

Klicken Sie auf "Weiter", um zum nächsten Schritt zu gelangen, und schließen Sie dann die Operation mit einem Klick auf "Erstellen" ab.

![](images/img_1347.jpg){.thumbnail}


## Erstellung der Ressource Teil 3
Sobald Ihre Ressourcen erstellt wurden, können Sie diese bearbeiten oder löschen.

Es wird eine Tabelle mit der Zusammenfassung der Informationen angezeigt: Name der Ressource, Typ (Saal oder Gerät), Kapazität und E-Mail-Adresse der Ressource.

Die Ressourcen-Accounts sind aktiviert, und im zweiten Teil dieser Hilfe wird deren Verwendung beschrieben.

![](images/img_1348.jpg){.thumbnail}


## Kalender einer Ressource Teil 1
In diesem Abschnitt wird beschrieben, wie Sie den Kalender einer Ressource in OWA anzeigen lassen können.

Verbinden Sie sich dazu mit dem [Exchange Webmail-Interface](https://ex.mail.ovh.net/owa/).

Verwenden Sie für die Anmeldung die vollständige E-Mail-Adresse und das dazugehörige Passwort.

Wählen Sie die Rubrik "Kalender" aus, machen Sie einen Rechtsklick auf "WEITERE KALENDER" und wählen Sie "Kalender öffnen" aus.

![](images/img_1349.jpg){.thumbnail}


## Kalender einer Ressource Teil 2
Geben Sie den Namen Ihrer Ressource an. Der Exchange Server findet sie automatisch, da sie Teil der GAL (globalen Adressliste) ist.

Wählen Sie "Öffnen" aus, um die Operation fertigzustellen.

![](images/img_1350.jpg){.thumbnail}


## Kalender einer Ressource Teil 3
Die Kalender der erstellten Ressourcen sind nun im OWA Interface sichtbar.

Links oben befindet sich der Button "Neues Ereignis", den Sie verwenden können, um neue Ereignisse für Ihre Mitarbeiter zu erstellen.

![](images/img_1351.jpg){.thumbnail}


## Verwaltung einer Ressource Teil 1
In einem ersten Schritt erstellen wir ein Ereignis unter Verwendung der zuvor erstellten Ressourcen.

Wählen Sie dazu in der Rubrik "Kalender""Neues Ereignis" aus.

Es wird dann folgendes Interface angezeigt.

Füllen Sie die Felder aus:

Ereignis:  geben Sie den gewünschten Namen für Ihr Ereignis an.

Ort:  Sie können nun hier Ihre Ressource vom Typ "Saal" hinzufügen.

Teilnehmer:  fügen Sie hier die Teilnehmer und die Ressourcen von Typ "Gerät" hinzu.

Start:  tragen Sie hier den Starttermin Ihres Ereignisses ein.

Dauer:  hier können Sie die Dauer des Ereignisses eintragen.

Anzeigen als:  legt den Status fest, der im Kalender angezeigt werden soll.

Erinnerung:  legt fest, wann eine Erinnerung für das Ereignis erfolgen soll.

Wiederholen:  legt eine Wiederholungsfrequenz für Ihr Ereignis fest (zum Beispiel einmal wöchentlich).

Wählen Sie "Speichern" aus, um das Hinzufügen Ihres Ereignisses fertigzustellen.

![](images/img_1352.jpg){.thumbnail}


## Verwaltung einer Ressource Teil 2
Das Ereignis "Reunion" wurde von der Ressource "MaSalle1" vom Typ Saal und der Ressource "Equipement1" vom Typ Gerät akzeptiert.

Da eine Anwort per E-Mail angefordert wurde, werden Sie über die Annahme oder Ablehnung Ihrer Anfrage per Mail benachrichtigt.

![](images/img_1356.jpg){.thumbnail}


## Verwaltung einer Ressource Teil 3
Sie können den Status der Ressourcen über das Kalender-Interface einsehen.

Aufgrund des hinzugefügten Ereignisses ist der Status der Ressourcen derzeit "Besetzt".

![](images/img_1357.jpg){.thumbnail}


## Verwaltung einer Ressource Teil 4
Es wird ein neues Ereignis am gleichen Termin wie das Vorherige hinzugefügt.

Dabei wird ebenfalls eine Benachrichtigung über die Annahme oder Ablehnung Ihrer Anfrage versandt.

Für das zweite Ereignis "Discours" hat die Ressource "MaSalle1" das Ereignis aufgrund von Konflikten abgelehnt.
Da bereits ein Ereignis für diesen Termin geplant ist und für diese Ressource keine Konflikte erlaubt sind, wird die Anfrage abgelehnt.

Die Ressource "Equipement1" hat das Ereignis akzeptiert.
Es ist zwar bereits ein Ereignis zu diesem Termin geplant, aber da die Verwaltung von Konflikten für diese Ressource deaktiviert ist, wird die Anfrage dennoch akzeptiert.

![](images/img_1358.jpg){.thumbnail}

