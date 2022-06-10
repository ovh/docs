---
title: Das sichere Interface verwenden
slug: sicheres-interface
excerpt: Erfahren Sie hier, wie Sie das sichere Interface verwenden, um kritische Operationen zu bestätigen
section: OVHcloud Dienste und Optionen
---

**Letzte Aktualisierung am 10.06.2022**

## Ziel

OVHcloud stellt Ihnen ein sicheres Interface zur Verfügung, über welches Sie sensible Operationen (Passwortänderungen, Hinzufügen eines Benutzers etc.) bestätigen können, die von Benutzern oder Dritten auf Ihrer HDS oder PCI-DSS Private Cloud durchgeführt wurden.

**Diese Anleitung erklärt, wie Sie das sichere Interface verwenden, um diese Operationen zu bestätigen.**

## Voraussetzungen

- Sie verfügen über eine Infrastruktur mit **Advanced Security** Option (in [PCI-DSS](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/safety-compliance/sddc/) und [HDS](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/safety-compliance/hds/) Angeboten enthalten). Diese Option ermöglicht die Bestätigung sensibler Operationen.
- Sie haben Zugriff auf das gesicherte Interface der Private Cloud, zum Beispiel: https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/ (achten Sie darauf, „ / “ am Ende der Adresse hinzuzufügen).

## In der praktischen Anwendung

Die Bestätigung von als „sensibel“ eingestuften Operationen über das sichere Interface ist nur für Benutzer mit **token validator**-Berechtigung möglich. Administratoren verfügen automatisch über diese Berechtigung, da dies für die Aktivierung der Option **Advanced Security** notwendig ist. 

Hinweis: Über Ihr OVHcloud Kundencenter können Sie diese Berechtigung auch anderen Benutzern erteilen. Wenn Sie hierbei Hilfe benötigen, lesen Sie die Anleitung [Einführung in das Kundencenter der OVHcloud Private Cloud](../manager-ovh-private-cloud/).

Über das sichere Interface können Sie drei Operationen ausführen. Befolgen Sie den Abschnitt dieser Anleitung, der der auszuführenden Operation entspricht:

- [Operation mithilfe eines Tokens bestätigen](./#operation-mithilfe-eines-tokens-bestatigen)
- [Passwort eines Benutzers ändern](./#passwort-eines-benutzers-andern)
- [Passwort zurücksetzen](./#passwort-zurucksetzen)

### Operation mithilfe eines Tokens bestätigen

Nach Erhalt eines Tokens per SMS muss dieser im sicheren Interface eingegeben werden, um den ausstehenden Task zu starten.

> [!warning]
>
> Der erstellte Token ist nur 15 Minuten gültig. Wenn Sie den Task in dieser Zeit nicht bestätigen, wird die Operation abgebrochen.
>
> Anschließend wird der Task entweder erneut vorgeschlagen (im Falle von Wartungsarbeiten), oder muss von Ihnen neu erstellt werden (wenn er auf eine Aktion Ihrerseits hin gestartet wurde).
>

Hier ein Beispiel für eine versendete SMS:

![Erste SMS](images/SMS1.png){.thumbnail}

Diese Nachricht enthält:

- den Benutzer mit **token validator**-Berechtigung, der die SMS erhalten hat. Dies kann die Verwaltung der zu bestätigenden Token vereinfachen, wenn Sie Ihre Telefonnummer in mehreren Benutzeraccounts angegeben haben.
- den Namen der zu bestätigenden Operation
- die ID der Operation
- den Token für die Bestätigung
- einen Link zur Bestätigung der Operation (Achtung: Wenn Ihr Telefon nicht mit einem Netzwerk verbunden ist, dessen [IP zugelassen](../manager-ovh-private-cloud/#sicherheit) ist, wird die Seite nicht angezeigt.)

Um die Operation zu bestätigen, loggen Sie sich über den in der Nachricht enthaltenen Link ein. Gehen Sie dann in den Bereich `Operation validation`{.action}.

![Operation bestätigen](images/operationValidation.png){.thumbnail}

Es wird ein Verbindungsfenster geöffnet, in dem nur ein Benutzer mit **token validator**-Berechtigung eine Bestätigung ausführen kann.

Laden Sie die Operation, indem Sie die zugehörige ID im Feld „Operation ID“ eingeben, und klicken Sie dann auf den Button `Load operation`{.action}. Geben Sie anschließend den Token ein, den Sie per SMS erhalten haben, und klicken Sie auf `Confirm operation`{.action}.

![Token der Operation](images/operationIdAndToken.png){.thumbnail}

Anschließend wird eine SMS an Benutzer mit **token validator**-Berechtigung versendet, um die Validierung der Operation zu bestätigen. Hier ein Beispiel:

![Zweite SMS](images/SMS2.png){.thumbnail}

Wie Sie sehen, enthält diese Nachricht:

- den Benutzer mit **token validator**-Berechtigung, der die SMS erhalten hat
- den Namen der Operation und deren ID
- den Benutzer mit **token validator**-Berechtigung, der die Operation validiert hat

### Passwort eines Benutzers ändern

Jeder Benutzer kann sein Passwort ändern, auch wenn er nicht über die **token validator**-Berechtigung verfügt. Allerdings benötigt er sein aktuelles Passwort, um die Änderung durchzuführen.

> [!primary]
>
> Hat der Benutzer sein Passwort vergessen, muss er einen anderen Benutzer mit **token validator**-Berechtigung bitten, die Passwortänderung für ihn durchzuführen, indem dieser [das Passwort zurücksetzt](./#passwort-zurucksetzen).
> 

Um ein Benutzerpasswort zu ändern, loggen Sie sich im sicheren Interface ein (`https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/`) und klicken Sie auf den Button `Change password`{.action}.

![Passwort ändern](images/changePassword.png){.thumbnail}

Wählen Sie auf der daraufhin angezeigten Seite den betreffenden Benutzer aus und legen Sie sein neues Passwort fest.

Anschließend wird ein Token an die Benutzer mit [token validator](./#operation-mithilfe-eines-tokens-bestatigen)-Berechtigung versendet, damit diese die **Operation bestätigen** können.

![Passwort festlegen](images/defineNewPassword.png){.thumbnail}

### Passwort zurücksetzen

Diese Operation ist nur für Benutzer mit **token validator**-Berechtigung verfügbar.

> [!primary]
>
> Wenn ein Benutzer ohne **token validator**-Berechtigung sein Passwort verliert, muss er einen Benutzer mit dieser Berechtigung bitten, sein Passwort zurückzusetzen.
> 

Um ein Benutzerpasswort zurückzusetzen, loggen Sie sich im sicheren Interface ein (`https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/`) und klicken Sie auf den Button `Password lost`{.action}.

![Passwort verloren](images/passwordLost.png){.thumbnail}

Eine Nachricht zeigt an, dass Sie in der Lage sein müssen, SMS zu empfangen, um fortzufahren. Ist das der Fall, geben Sie die angeforderten Informationen ein (darunter der Benutzer, dessen Passwort zurückgesetzt werden soll) und klicken Sie auf `Next step`{.action}.

![Benutzerinformationen](images/infoUser.png){.thumbnail}

Geben Sie nun die beiden Token ein, die Sie per SMS und per E-Mail empfangen haben, und legen Sie das neue Passwort fest.

> [!primary]
>
> Wird das Passwort für einen anderen Benutzer zurückgesetzt, muss die Person, die das Passwort zurückgesetzt hat, diesem das neue Passwort mitteilen. Wir empfehlen dringend, dieses [Passwort anschließend so schnell wie möglich zu ändern](./#passwort-eines-benutzers-andern).
> 

![Token und Passwort](images/tokenAndPassword.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
