---
title: FAQ Public Cloud OVHcloud
slug: public-cloud-faq
section: 'Allgemeine Informationen'
order: 01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen” auf dieser Seite.
>

**Letzte Aktualisierung am 03.11.2021**

## Public Cloud FAQ

### Wie kann ich mich mit einer Public Cloud Instanz verbinden?

Die Verbindung erfolgt durch ein Paar von SSH-Schlüsseln, die bei der Erstellung Ihrer Public Cloud-Instanz konfiguriert werden müssen.

Lesen Sie die Anleitung [Erste Public Cloud Instanz erstellen und auf dieser einloggen](../public-cloud-erste-schritte/).

### Ich habe den SSH-Schlüssel verloren oder möchte ihn ändern, wie gehe ich dazu vor?

Wenn Sie sich nach dem Verlust Ihres privaten Schlüssels nicht mehr verbinden können, ändern Sie den öffentlichen Schlüssel Ihrer Instanz, indem Sie diese in den "Rescue"-Modus versetzen.

Lesen Sie die Anleitung zum [Ändern des SSH-Schlüssels](../nderung_des_ssh_schlussels_bei_verlust/).

### Welche Backup-Möglichkeiten bietet meine Instanz?

Sie können jederzeit über Ihr OVHcloud Kundencenter ein Backup einer Instanz erstellen. Mit dieser können Sie Ihre Instanz entweder auf eine alte Konfiguration zurücksetzen oder neu erstellen.

Lesen Sie die Anleitung [Backup einer Instanz erstellen](../ein_backup_einer_instanz_erstellen/).

### Wie kann ich OpenStack-Benutzer erstellen und verwalten?  

Um die Horizon- oder OpenStack-APIs verwenden zu können, müssen Sie zunächst einen OpenStack-Benutzer anlegen. Sie können eine unbegrenzte Anzahl erstellen.

Lesen Sie die Anleitung [Einen OpenStack User erstellen oder löschen](../openstack-user-erstellen-loeschen/).

### Wie funktioniert die Abrechnung der Public Cloud?

Die Abrechnung erfolgt zwischen dem 01\. und 05\. eines Monats und richtet sich nach dem Verbrauch des Vormonats. Wenn Sie sich für die monatliche Abrechnung entschieden haben, wird Ihnen die Monatspauschale für den kommenden Monat zusammen mit dem Verbrauch des Vormonats (Instanzen, Object Storage) berechnet. Bei einer Umstellung auf die monatliche Abrechnung einer Ressource erfolgt eine sofortige anteilige Abrechnung für den laufenden Monat.

Bitte beachten Sie, dass jede Instanz abgerechnet wird, bis sie aus Ihrem OVHcloud Kundencenter gelöscht wird.
Sie können Ihren Verbrauch anhand von Prognosen aus Ihrer Nutzungshistorie verfolgen. Darüber hinaus können Sie für jedes Public Cloud Projekt eine separate Abrechnung wählen, was eine Neuabrechnung innerhalb Ihres Unternehmens ermöglicht.

Um von einem Abrechnungsmodus zum anderen zu wechseln, lesen Sie unsere Anleitung [Von der stündlichen auf monatliche Abrechnung umstellen](../abrechnungsart-aendern-public-cloud/).

### Wie kann ich meine Instanzen anpassen, wenn ich mehr oder weniger Ressourcen benötige?

Jede Instanz kann über das Kundencenter auf eine leistungsstärkere Instanz der gleichen Reihe umgestellt werden, indem Sie im Dashboard der Instanz links auf `Bearbeiten`{.action} klicken. Wenn die Option "Flex" gewählt wurde, können Sie diese auch auf ein günstigeres Modell herunterstufen. Diese Option erfordert eine fixe Festplattengröße von 50 GB für alle Modelle und ermöglicht so eine Anpassung in beide Richtungen.

In jedem Fall erfordert die Umstellung der Instanz einen Neustart.

### Sind Public Cloud Instanzen mit *cloud-init* kompatibel?

Ja, die von OVHcloud bereitgestellten Cloud-Images enthalten *cloud-init*-Skripte, mit denen Instanzen beim Start personalisiert werden können. Die Infrastruktur liefert die Informationen zur Personalisierung der Instanz über einen Metadatenserver, der direkt von *cloud-init* kontaktiert wird.

### Kann ich Backups meiner Public Cloud Server erstellen?

Sie können jederzeit und ohne Einschränkung Instance Backups Ihrer Server erstellen. Diese Backups werden wie die Images in "Private Image" gespeichert und abgerechnet. Über OpenStack-APIs können Sie diese außerhalb der OVHcloud Infrastruktur oder von anderen Projekten aus herunterladen.

Lesen Sie die Anleitung [Backup einer Instanz erstellen](../ein_backup_einer_instanz_erstellen/).

### Kann ich die Größe eines Volumes im laufenden Betrieb erhöhen, während die Disk weiterhin genutzt wird?

Nein, ein Volume muss zuerst ausgehängt werden, um es vergrößern zu können.

### Wie viele zusätzliche Volumes kann ich einer Instanz hinzufügen?

Sie können bis zu 25 zusätzliche Volumes an eine Instanz anhängen.

### Wie werden meine Server geschützt?

OVHcloud schützt seine gesamte Infrastruktur mit seinem exklusiven DDoS-Schutz. Darüber hinaus können Sie OpenStack-Sicherheitsgruppen hinzufügen: Dieser Schutz entspricht einer Firewall und wird direkt auf der OpenStack-Infrastruktur verwaltet, also Ihren Instanzen vorangestellt.

Lesen Sie die Anleitung [Eine Sicherheitsgruppe in Horizon erstellen und konfigurieren](../eine-sicherheitsgruppe-konfigurieren-horizon/).

Mithilfe dieser Schutzmaßnahmen, zusammen mit denen, die Sie selbst auf Ihren Servern einrichten, können Sie die Zuverlässigkeit Ihrer Deployments optimieren.

### Wie kann ich ein privates Netzwerk zwischen meinen Servern einrichten?

Public Cloud enthält eine SDN-Lösung (Software Defined Network). Diese ermöglicht es, dynamische private Netzwerke zu erstellen und diese dann über Ihr Kundencenter oder die API mit den Instanzen zu verbinden.

Diese privaten Netzwerke werden durch die vRack Technologie von OVHcloud unterstützt, die allen anderen Diensten des Unternehmens, wie Private Cloud oder Dedicated Server, gemeinsam ist. Sie bietet so die Möglichkeit, alle Ihre Infrastrukturelemente bei OVHcloud einzeln und sicher kommunizieren zu lassen.

Lesen Sie die Anleitung [vRack Public Cloud](https://docs.ovh.com/gb/en/public-cloud/public-cloud-vrack/).

### Kann ich die öffentliche IP-Adresse meiner Instanz ändern?

Die öffentlichen IPs werden den Instanzen automatisch zugewiesen und können daher nicht geändert werden. Um die öffentliche IP-Adresse einer Instanz zu verwalten, empfehlen wir die Verwendung von Additional IPs. So können Sie unabhängig von einer der Instanz automatisch zugewiesenen öffentlichen Adresse eine oder mehrere Additional IP-Adressen zu Ihrer Instanz hinzufügen.

Weitere Informationen finden Sie in der Anleitung [Eine Additional IP erwerben](../eine-failover-ip-erwerben/).


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
