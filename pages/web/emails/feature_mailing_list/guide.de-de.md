---
title: 'Webhosting E-Mail: Verwendung von Mailinglisten'
excerpt: Verwendung von Mailinglisten
slug: webhosting_e-mail_verwendung_von_mailinglisten
legacy_guide_number: g1596
---


## Allgemeines
Mithilfe einer Mailingliste können Sie zahlreiche Abonnenten gleichzeitig kontaktieren, d. h. eine Nachricht oder eine Information an mehrere Empfänger gleichzeitig schicken.
Dies kann etwa dann sinnvoll sein, wenn Sie beispielsweise Ihre Kunden über ein neues Produkt (bei einer E-Commerce-Seite) oder eine Gruppe über einen Termin (bei einer Gemeindeseite) informieren möchten. Je nach Bedarf gibt es hier zahlreiche verschiedene Einsatzmöglichkeiten.

Ezmlm ist eine sehr verbreitete und leistungsstarke Software zum Betrieb von Mailinglisten. In dieser Hilfe erfahren Sie, wie Sie Mailinglisten erstellen, verwalten und konfigurieren.

- Bitte beachten Sie, dass die Mailinglisten-Funktion nicht für den Versand von Spam (Werbung) gedacht ist. Diese Art der Nutzung wird zwar in einem gewissen Rahmen tolertiert, aber nur solange sie nicht als missbräuchlich einzustufen ist.

- Bitte bedenken Sie auch, dass jeder Nutzer jederzeit das Abonnement beenden sowie bei Spamverdacht eine entsprechende Meldung erstellen kann.




## Eine Mailingliste erstellen
In unserem Beispiel handelt es sich um eine Mailingliste für ein Hosting-Angebot Pro.
Um eine Mailingliste zu erstellen, begeben Sie sich zunächst in Ihr [OVH Kundencenter](http://www.ovh.com/manager/web).

Wählen Sie dann im Menü links unter "E-Mails" das gewünschte Hosting aus und klicken Sie dann auf den Tab "Mailing-Listen".

![](images/img_3626.jpg){.thumbnail}
Wenn Sie bereits früher Mailinglisten erstellt haben, erscheinen diese jetzt in der Übersichtstabelle. In unserem Beispiel wurde bisher keine Mailingliste erstellt.

Um eine neue Mailingliste zu erstellen, klicken Sie ganz rechts auf den Button Mailingliste hinzufügen.

![](images/img_3017.jpg){.thumbnail}
Nebenstehend sehen Sie das Formular für die Erstellung einer Mailingliste. Folgende Angaben sind notwendig:


- Name: Geben Sie Ihrer Mailingliste einen Namen.
- Inhaber: Geben Sie hier die E-Mail-Adresse des Inhabers der Mailingliste an (dieser wird dann auch Moderator sein).
- Antwort an: Definieren Sie hier die Antwortadresse.
- Sprache: Wählen Sie die Sprache Ihrer Mailingliste aus (Übersetzung der automatischen E-Mails für Anmeldung zur oder Abmeldung von der Mailingliste).
- Moderation der Nachrichten: Der Inhaber (Moderator) muss die einzelnen Antworten freigeben.
- Moderation der Abonnenten: Der Inhaber (Moderator) muss die Anmeldungen zur Mailingliste bestätigen.
- Nur Abonnenten können posten: Es können nur Nachrichten an die Mailingliste gesendet werden von Personen, die selbst die Mailingliste abonniert haben.



![](images/img_3019.jpg){.thumbnail}
Wenn das Formular für die Erstellung abgeschickt wurde, erscheint eine Bestätigungsmeldung.

![](images/img_3020.jpg){.thumbnail}

## Für Ihre Mailinglisten gibt es geiwsse Beschränkungen bei der Zahl der Abonnenten:

- 5000 Abonnenten nur bei moderierten Mailinglisten!
- 250 Abonnenten für Newsletter und andere Typen.




## Prinzip der Moderation
Die Moderation einer Mailingliste ist sinnvoll, damit nicht unkontrolliert und/oder von Unbefugten E-Mails an Ihre Abonnenten versandt werden können. Eine moderierte Mailingliste kann etwa dem Versand eines Newsletters dienen. Eine nicht moderierte Mailingliste hingegen kann der einfachen Kommunikation per E-Mail zwischen den Abonnenten dienen.

![](images/img_3565.jpg){.thumbnail}
.

![](images/img_3564.jpg){.thumbnail}


## Die Optionen der Mailingliste bearbeiten oder die Mailingliste löschen
Wenn Sie die bei der Erstellung Ihrer Mailingliste gewählten Optionen bearbeiten oder die Mailingliste löschen möchten, klicken Sie auf das kleine Zahnrad rechts neben dem Namen Ihrer Mailingliste.

![](images/img_3021.jpg){.thumbnail}


## Abonnenten importieren
In unserem Beispiel haben wir noch keinen Abonnenten erfasst. Um Abonnenten hinzuzufügen, klicken Sie auf das kleine schwarze Symbol in der Spalte "Abonnenten".

![](images/img_3022.jpg){.thumbnail}

- Klicken Sie dann rechts oben auf den Button "Abonnenten hinzufügen".



![](images/img_3023.jpg){.thumbnail}
Es gibt zwei verschiedene Möglichkeiten, Abonnenten zu einer Mailingliste hinzuzufügen:


- Manuelle Eingabe der Adresse.
- Import einer Textdatei mit einer Adresse pro Zeile.



![](images/img_3030.jpg){.thumbnail}
Nach der Bestätigung erscheint eine entsprechende Meldung.

![](images/img_3033.jpg){.thumbnail}
Je nach Zahl der hinzugefügten Abonnenten kann die Operation einige Zeit in Anspruch nehmen.


## Die Liste der Abonnenten in eine CSV-Datei exportieren

- Klicken Sie auf den Button "Export der Abonnenten im CSV Format", um eine DCV-Datei mit allen Abonnenten zu erstellen. In unserem Beispiel ist diese Option nicht verfügbar, da die Mailingliste noch keine Empfänger enthält.




## Eine Mailingliste abonnieren
Um Ihre Mailingliste zu abonnieren, muss der Interessent lediglich eine E-Mail schicken an:

```
name_ihrer_ML-subscribe@ihredomain.com
```




## Von einer Mailingliste abmelden
Um sich von Ihrer Mailingliste abzumelden, muss der Interessent lediglich eine E-Mail schicken an:

```
name_ihrer_ML-unsubscribe@ihredomain.com
```




## Fehlerhafte Adressen automatisch löschen
Das Mailinglistensystem löscht einen Abonnenten nicht gleich bei der ersten Fehlermeldung (Nachricht nicht zugestellt, ungültige Adresse, ...). Vielmehr wird rund zwölf Tage nach dieser ersten nicht erfolgreichen Zustellung eine "Warnung" an den Abonnenten versandt.

In dieser Nachricht sind die verpassten E-Mails genannt. Wenn auch diese Nachricht nicht zugestellt werden kann, verschickt das System nach weiteren zwölf Tagen erneut eine "Testnachricht". Erst wenn diese Nachricht ebenfalls nicht zugestellt werden kann, wird der Abonnent von der Mailingliste gelöscht.


## Versand ohne Betreff
Beim Versand an eine Mailingliste ist die Angabe eines Betreffs obligatorisch. Andernfalls entsteht ein Fehler und der Absender erhält eine entsprechende Fehlermeldung:


```
Hi. This is the qmail-send program at mx1.mail.ovh.net.
I'm afraid I wasn't able to deliver your message to the following addresses.
This is a permanent error; I've given up. Sorry it didn't work out.

<newsletter@testinterne.ovh>:

ezmlm-reject: fatal: Sorry, I don't accept message with empty Subject (#5.7.0)
```




## Versand mit der Adresse der Mailingliste in versteckter Kopie (BCC)
Beim Versand einer Nachricht an eine Mailingliste muss die Adresse zwingend entweder im Feld "An" oder im Feld "CC" angegeben sein.

Bei Angabe der Adresse im Feld "BCC" erhält der Absender eine entsprechende Fehlermeldung:


```
Hi. This is the qmail-send program at mx1.mail.ovh.net.
I'm afraid I wasn't able to deliver your message to the following addresses.
This is a permanent error; I've given up. Sorry it didn't work out.

<newsletter@testinterne.ovh>:

ezmlm-reject: fatal: List address must be in To: or Cc: (#5.7.0)
```




## Wie personalisiere ich den Inhalt meiner Mailingliste?
Sie können die meisten Texte Ihrer Mailingliste personalisieren. Schicken Sie als Moderator eine leere Nachricht an name_ihrer_ML-edit@ihredomain.com.


- Beispiel: Ihre Mailingliste heißt newsletter@testinterne.ovh. Von Ihrer Moderator-E-Mail-Adresse aus schicken Sie also eine Nachricht an newsletter-edit@testinterne.ovh.


Sie erhalten dann eine E-Mail, die Sie durch die Personalisierung Ihrer Mailingliste begleitet.

Untenstehend finden Sie eine Liste der Dateien mit den Texten für Antworten und einer kurzen Beschreibung. Um eine Datei zu bearbeiten, schicken Sie eine Nachricht an name_ihrer_ML-edit.datei@ihredomain.com und ersetzen Sie 'datei' mit dem entsprechenden Dateinamen aus der Liste. Die Anleitung zur Bearbeitung wird Ihnen dann zugeschickt.

|Datei|Beschreibung|
|bottom|Footer aller Antworten: allgemeine Informationen.|
|digest|'Administrativer' Bereich der Newsletter.|
|faq|Antworten auf häufige Fragen zur Mailingliste.|
|get_bad|wenn Nachrichten im Archiv fehlen.|
|help|allgemeine Hilfe (zwischen 'top' und 'bottom').|
|info|Informationen über die Mailingliste. Die erste Zeile enthält eine Kurzbeschreibung.|
|mod_help|Spezifische Hilfe für Moderatoren.|
|mod_reject|An den Absender abgelehnter Nachrichten.|
|mod_request|An Moderatoren bei Versand.|
|mod_sub|An Abonnenten nach Bestägigung der Anmeldung durch den Moderator.|
|mod_sub_confirm|An den Moderator zur Bestätigung einer Anmeldung.|
|mod_timeout|An den Absender einer Nachricht (seit Langem ungültig).|
|mod_unsub_confirm|An einen Administrator, um die Abmeldung anzufordern.|
|sub_bad|An den Abonnenten, wenn die Bestätigung gescheitert ist.|
|sub_confirm|An den Abonnenten, um die Anfrage zu bestätigen.|
|sub_nop|An den Abonnenten nach erneuter Anmeldung.|
|sub_ok|An den Abonnenten nach erfolgreicher Anmeldung.|
|top|Header aller Antworten.|
|trailer|Wird jedem Beitrag zur Liste hinzugfügt.|
|unsub_bad|An den Abonnenten, wenn die Bestätigung der Abmeldung gescheitert ist.|
|unsub_confirm|An den Abonnenten, um eine Bestätigung der Abmeldung anzufordern.|
|unsub_nop|An einen Nicht-Abonnenten nach Anforderung der Abmeldung.|
|unsub_ok|An einen ehemaligen Abonnenten nach erfolgreicher Abmeldung.|


Beispiel: Wenn Sie den Default-Footer der an die Mailingliste versandten Mails ändern möchten, schicken Sie eine Nachricht an die Adresse "newsletter-edit.bottom@testinterne.ovh".

Sie erhalten dann eine E-Mail, in der die Personalisierung des Footers erklärt wird.

