---
title: 'Zusätzliche SSH-Schlüssel konfigurieren'
slug: ssh-zusätzliche-schlüssel konfigurieren
excerpt: Erfahren Sie hier, wie Sie zusätzliche SSH-Schlüssel auf Ihrer Instanz konfigurieren
legacy_guide_number: 1924
section: 'Tutorials'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 09.05.2019**

## Ziel
 
Bei der Erstellung einer Instanz kann nur ein SSH-Schlüssel für den Erstzugriff konfiguriert werden. Sie können jedoch anderen Benutzern Zugriff erlauben, indem Sie die Datei "authorized_keys" Ihrer Instanz konfigurieren.

**Diese Anleitung erklärt, wie Sie zusätzliche SSH-Schlüssel auf Ihrer Instanz konfigurieren, um anderen Personen den Zugriff darauf zu ermöglichen.**

## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud/) in Ihrem OVHcloud Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben administrativen Zugriff (Root) auf Ihre Instanz über SSH.  

## In der praktischen Anwendung

> [!primary]
>
Wenn Sie einen SSH-Schlüssel im OVHcloud Kundencenter speichern möchten, empfehlen wir Ihnen die Verwendung der RSA- oder ECDSA-Verschlüsselung. ED25519 wird derzeit nicht unterstützt.
>

### SSH-Schlüssel erstellen

Folgen Sie zunächst unserer Anleitung zu den [ersten Schritten](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/#schritt-1-ssh-schlussel-erstellen), um einen SSH-Schlüssel zu erstellen.

### Einen neuen Benutzer konfigurieren

Verbinden Sie sich über SSH mit Ihrer Instanz und verwenden Sie folgenden Befehl, um einen neuen Benutzer zu erstellen:

```
admin@server-1:~$ sudo adduser user2

Adding user `user2' ...
Adding new group `user2' (1001) ...
Adding new user `user2' (1001) with group `user2' ...
Creating home directory `/home/user2' ...
Copying files from `/etc/skel' ...

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
Changing the user information for user2
Enter the new value, or press ENTER for the default
Full Name []:
Room Number []:
Work Phone []:
Home Phone []:
Other []:
Is the information correct? [Y/n] Y
```

Speichern Sie anschließend mithilfe des folgenden Befehls einen neuen öffentlichen SSH-Schlüssel im persönlichen Ordner des neuen Benutzers:

```
admin@server-1:~$ sudo vim /home/user2/.ssh/authorized_keys
```

Wenn die Datei ".ssh" noch nicht existiert, können Sie diese mit folgendem Befehl erstellen:

```
admin@serveur-1:~$ sudo mkdir /home/user2/.ssh/
```

Sie können sich nun mit diesem Benutzer über den privaten Schlüssel verbinden, der mit dem von Ihnen konfigurierten Schlüssel verknüpft ist.

```
root@server:~$ ssh user2@149.xxx.xxx.22

Linux server-1 3.2.0-4-amd64 #1 SMP Debian 3.2.68-1+deb7u1 x86_64
Last login: Fri Oct 16 08:14:24 2015 from proxy-109-190-254-35.ovh.net

user2@server-1:~$
```


Sie können weitere SSH-Schlüssel für den Administrator-Benutzer konfigurieren, indem Sie diese in der zugehörigen "authorized_keys" Datei mit diesem Befehl hinzufügen:

```
admin@server-1:~$ sudo vim /home/admin/.ssh/authorized_keys
```


## Weiterführende Informationen

[SSH-Schlüssel erstellen](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/)

[Ersatz Ihres verlorenen SSH-Schlüsselpaares](https://docs.ovh.com/de/public-cloud/nderung_des_ssh_schlussels_bei_verlust/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/>.