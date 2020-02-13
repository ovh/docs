---
title: 'PCI-DSS-Zertifizierung für Ihre Private Cloud aktivieren'
slug: pci-dss-option-aktivieren
excerpt: 'So aktivieren Sie die PCI-DSS-Zertifizierung für Ihre Private Cloud'
section: 'OVH Dienstleistungen und Optionen'
---

**Letzte Aktualisierung am 13.02.2020**

## Einleitung

Sie haben die Möglichkeit, für Ihre Private Cloud die PCI-DSS-Zertifizierung zu aktivieren, was zum Beispiel beim Hosten von [Kreditkartendaten](https://www.ovh.de/private-cloud/payment-infrastructure/pci-dss.xml) unerlässlich sein kann.

**In dieser Anleitung erfahren Sie, wie Sie die PCI-DSS-Zertifizierung für Ihre Private Cloud aktivieren.**

## Voraussetzungen

- Sie verfügen über eine Private Cloud Infrastruktur mit Version 6.0 oder höher.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) eingeloggt und befinden sich im Bereich `Dedicated`{.action} (im neuen Interface im Bereich „Server“).

## Beschreibung

### Überprüfen, dass die Sicherheitsoption aktiviert ist

Um eine Zertifizierung wie PCI-DSS für Ihre Private Cloud zu aktivieren, muss die entsprechende Sicherheitsoption aktiviert sein. Um dies zu überprüfen, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und gehen Sie in den Bereich „Server“ (vormals „Dedicated“). Klicken Sie auf `Private Cloud`{.action} und wählen Sie den betreffenden Dienst aus. 

Gehen Sie im angezeigten Fenster in den Tab `Allgemeine Informationen`{.action}. Überprüfen Sie dort den Aktivierungsstatus der Sicherheitsoptionen im Bereich „Sicherheitsoptionen“. **Bitte beachten Sie, dass es aktuell nicht möglich ist, mehrere Sicherheitsoptionen für dieselbe Private Cloud zu aktivieren.**

![PCI-DSS Compliance](images/HomeSDDCManager.PNG){.thumbnail}

Wenn die gewünschte Sicherheitsoption nicht aktiviert ist, klicken Sie auf den Button `...`{.action} und dann auf `Aktivieren`{.action}. Hierzu sind einige Voraussetzungen erforderlich:

- **Die Optionen [NSX](https://www.ovh.de/private-cloud/optionen/nsx.xml) und [vROps](https://www.ovh.de/private-cloud/optionen/vrops.xml) müssen installiert sein**: Sie können den Aktivierungsstatus der Option im Tab `Allgemeine Informationen`{.action} im Bereich „Private Cloud Optionen“ einsehen. Sind sie nicht aktiviert, klicken Sie auf den Button `...`{.action} und dann auf `Aktivieren`{.action}.

- **Die Zugangseinstellungen für vCenter müssen eingeschränkt sein**: Sie können den Status der Zugangseinstellungen im „Tab“ Sicherheit überprüfen. Sind diese nicht eingeschränkt, klicken Sie auf den Button `Regeln für den Zugang zum vCenter`{.action} und befolgen Sie die angezeigten Schritte. Wenn Sie hierbei Hilfe benötigen, lesen Sie die Anleitung [Introduction to the OVH Private Cloud Control Panel](https://docs.ovh.com/gb/en/private-cloud/control-panel-ovh-private-cloud/#security) (Englisch).

- **Sie benötigen mindestens eine IP-Adresse mit der Berechtigung, sich mit vCenter zu verbinden**: Überprüfen Sie im Tab „Sicherheit“, dass Sie über mindestens eine autorisierte IP-Adresse verfügen. Falls nötig, verwenden Sie den Button `IP-Adressen hinzufügen`{.action}. Wenn Sie hierbei Hilfe benötigen, lesen Sie die Anleitung [Introduction to the OVH Private Cloud Control Panel](https://docs.ovh.com/gb/en/private-cloud/control-panel-ovh-private-cloud/#security) (Englisch).

Um sicherzustellen, dass Sie sich immer einloggen können, empfehlen wir, mindestens zwei autorisierte IP-Adressen einzurichten. Diese sollten natürlich fix und nicht dynamisch sein, um die Verfügbarkeit zu gewährleisten.

- **Die Informationen des Admin-Benutzers müssen vollständig sein und er verfügt über die erforderliche Berechtigung**: Überprüfen Sie im Tab „Benutzer“, dass Telefonnummer und E-Mail-Adresse des Admin-Benutzers gespeichert sind und dass dieser die „**token validator**“-Berechtigung hat. Falls nötig können Sie Änderungen vornehmen, indem Sie auf den Button `...`{.action} klicken und dann auf `Bearbeiten`{.action}. Wenn Sie hierbei Hilfe benötigen, lesen Sie die Anleitung [Introduction to the OVH Private Cloud Control Panel](https://docs.ovh.com/gb/en/private-cloud/control-panel-ovh-private-cloud/#users) (Englisch).

Um sicherzustellen, dass Sie sich im vCenter einloggen können, empfehlen wir Ihnen, mindestens zwei Benutzer mit den notwendigen Informationen und Berechtigungen (mit verschiedenen E-Mail-Adressen und Telefonnummern).

Wenn Sie die Aktivierungsschritte durchgeführt haben, müssen Sie nur noch:

- den Erhalt des Tokens bestätigen, der per SMS an die Benutzer mit **token validator**-Berechtigung versendet wurde. So wird sichergestellt, dass Sie diese für die Bestätigung sensibler Operationen notwendigen Token empfangen können.
- die Dokumente vervollständigen, die Sie per E-Mail erhalten werden, um den vertraglichen Teil abzuschließen. 

Während Sie warten, empfehlen wir Ihnen, diese Anleitung weiter zu lesen und sich so bereits mit dem sicheren Interface vertraut zu machen. 

> [!primary]
>
> Bitte beachten Sie, dass das vSphere-Interface während der Aktivierung der Sicherheitsoption nicht verfügbar ist.
>

### Mit der Verwendung des sicheren Interface beginnen

Nach der Aktivierung der Sicherheitsoption erhalten Sie per E-Mail eine Beschreibung der Funktionsweise des Token-Validierungsprozesses. Diese erklärt unter anderem, wie Token funktionieren und wie Sie diese verwenden können. 

Aus Sicherheitsgründen gilt Folgendes nach der Aktivierung der Sicherheitsoption:

- Alle für Ihre Private Cloud eingerichteten Benutzer sind deaktiviert.
- Ändern Sie die Passwörter Ihrer Benutzer, um dieser wieder zu aktivieren.
- Die Passwörter Ihrer Benutzer können von nun an nur noch über das sichere Interface geändert werden. Sie können diese Aktion nicht länger über das OVHcloud Kundencenter vornehmen. 

Zur Erinnerung: Es ist nicht möglich auf das sichere Interface zuzugreifen, bevor die Aktivierung der Sicherheitsoption abgeschlossen ist.

Nach fertiger Aktivierung können Sie sich über den Link, den Sie per E-Mail erhalten haben, auf dem sicheren Interface einloggen. Dieser Link entspricht in etwa der Form „https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/password-lost“. Sobald Sie eingeloggt sind, können Sie das Passwort des Admin-Benutzers und anschließend die Passwörter der anderen Benutzer ändern. Weitere Informationen hierzu finden Sie in unserer Anleitung [Das sichere Interface verwenden](https://docs.ovh.com/de/private-cloud/sicheres-interface/).

## Weiterführende Informationen

[Stündliche Ressourcen hinzufügen](https://docs.ovh.com/de/private-cloud/stuendliche-ressourcen-hinzufuegen/)

[vSphere Web Client sichern](https://docs.ovh.com/de/private-cloud/vsphere-web-zugang-sichern/)

[VMware Tools installieren](https://docs.ovh.com/de/private-cloud/wie_installiere_ich_die_vmware_tools/)


Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.