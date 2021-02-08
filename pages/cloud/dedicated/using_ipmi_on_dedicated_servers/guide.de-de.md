---
title: 'Verwendung der IPMI-Konsole für Dedicated Server'
slug: verwendung-ipmi-dedicated-server
excerpt: 'Mit IPMI können Sie sich mit Ihrem Server verbinden, ohne auf externe Software zurückgreifen zu müssen.'
section: Erste Schritte
---

**Letzte Aktualisierung am 20.08.2018**

## Einleitung

Die IPMI-Konsole (Intelligent Platform Management Interface) ermöglicht eine direkte Verbindung zu Ihrem Dedicated Server, ohne externe Software (z. B. Terminal oder Putty) installieren zu müssen. In dieser Anleitung erfahren Sie, wie Sie diese Konsole starten.

Bitte beachten Sie, dass in der Anleitung auch der Begriff KVM (Keyboard Video and Mouse) verwendet wird, der vor allem in Zusammenhang mit VPS gebräuchlich ist.

## Voraussetzungen

- Sie sind in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.

## Beschreibung

Die Verbindung zu IPMI kann auf zwei Arten hergestellt werden: Per Java-Applet (empfohlen) oder über den Browser (Serial over LAN).

### Verbindung per Java-Applet

Damit das Java-Applet funktionieren kann, muss Java auf Ihrem Computer installiert sein. Ist dies nicht der Fall, gehen Sie auf die [offizielle Website](https://www.java.com/de/download/){.external} von Java.

Im Tab `IPMI`{.action} in Ihrem Kundencenter, klicken Sie auf `Mit einem Java-Applet (KVM)`{.action}:

![IPMI Java initiated](images/java_ipmi_initiate.png){.thumbnail}

Laden Sie die Datei `kvm.jnlp` herunter und führen Sie diese aus:

![IPMI Java opening](images/java_ipmi_activation.png){.thumbnail}

Sie gelangen dann auf die Login-Seite, auf der Sie Ihre `Root`-Zugangsdaten eingegeben, genau wie bei der Verbindung über ein Terminal oder eine externe Software:

![IPMI Java login](images/java_ipmi_login.png){.thumbnail}

Danach können Sie Ihren Server wie gewohnt verwalten.

### Verbindung über den Browser (Serial over LAN - SoL).

Auch wenn die Verbindung per Java-Applet empfohlen wird, ist es durchaus möglich, IPMI auch über den Browser (Serial over LAN) zu verwenden. Klicken Sie dazu im Tab `IPMI`{.action} auf den Button `Mit Ihrem Browser (SoL)`{.action}:

![IPMI SoL Aktivierung](images/sol_ipmi_activation.png){.thumbnail}

> [!warning]
>
> Es kann mehrere Minuten dauern, bis die Verbindung über SoL hergestellt ist. Deshalb wird die Verwendung des Applets empfohlen.
>

### IPMI testen und neu starten

Es ist möglich, dass IPMI nicht mehr reagiert. Wenn Sie keine Verbindung zu IPMI herstellen können, führen Sie zunächst einen Funktionstest durch, indem Sie auf `IPMI Test`{.action} klicken und sich das Diagnoseergebnis anzeigen lassen:

![IPMI Test](images/ipmi_test.png){.thumbnail}

Wenn, wie in unserem Beispiel, alles normal erscheint, liegt wahrscheinlich ein lokales Problem vor (Internetverbindung, Fehler auf lokalem Rechner usw.). Wenn das Problem mit IPMI zusammenhängt, können Sie mit einem Klick auf die Schaltfläche `IPMI neu starten`{.action} einen Neustart durchführen.

![IPMI Test](images/ipmi_reboot.png){.thumbnail}

Der Neustart dauert mehrere Minuten.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
