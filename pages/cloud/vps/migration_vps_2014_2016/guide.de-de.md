---
title: Migration vom VPS 2014 auf das VPS 2016 Angebot
description: In dieser Hilfe werden die verschiedenen Möglichkeiten für die Migration vom VPS 2014 auf das VPS 2016 Angebot vorgestellt.
excerpt: In dieser Hilfe werden die verschiedenen Möglichkeiten für die Migration vom VPS 2014 auf das VPS 2016 Angebot vorgestellt.
slug: migration_vom_vps_2014_auf_das_vps_2016_angebot
legacy_guide_number: g1862
hidden: true
---


## 
Die VPS 2014 Classic Modelle können ausschließlich manuell auf das entsprechende Modell der VPS 2016 SSD Reihe migriert werden.
Die VPS 2014 Cloud Modelle können manuell oder automatisch auf das entsprechende Modell der VPS 2016 Cloud Reihe migriert werden.


## Manuelle Migration
Wir liefern Ihnen einen neuen VPS der neuen Angebotsreihe und übertragen die Restlaufzeit Ihres alten VPS anteilig auf das neue Modell.

Auf der Migrationsseite werden Ihnen der neue Tarif und das neue Ablaufdatum auch bereits vor Beginn der Migration angezeigt.

Ihr alter VPS bleibt dann noch 5 Tage lang aktiv, damit Sie Ihre Dienste und Daten in Ruhe migrieren können. Danach wird der alte VPS geschlossen.

Die Lieferung Ihres neuen VPS beginnt, sobald Sie die Anfrage dafür gestellt haben, und läuft genau so wie bei einer normalen Bestellung ab. Einige Minuten später erhalten Sie eine E-Mail mit den Zugangsdaten für Ihren VPS 2016, und dieser erscheint in Ihrem Kundencenter.


## Automatische Migration
Die automatische Migration ist ausschließlich für die VPS Cloud Modelle verfügbar. Ihr VPS wird dabei in das OpenStack Format konvertiert und auf der neuen Infrastruktur gestartet.

## Achtung! Diese Methode weist folgende Einschränkungen auf:

- Ohne Garantie: Wir haben alle unsere Templates erfolgreich getestet und migriert, einige nach der Auslieferung durchgeführte Konfigurationen (Firewall, auf der öffentlichen IP-Adresse konfigurierte Dienste, spezielle Netzwerk-Konfigurationen...) können jedoch verhindern, dass Ihr VPS auf der neuen Infrastruktur korrekt funktioniert.
- Dienstunterbrechung: Wir müssen Ihren VPS ausschalten und den Speicherplatz auf die neue Infrastruktur kopieren. Diese Operation benötigt mindestens 30 Minuten. Dazu kommt noch ein variabler Zeitraum abhängig vom auf Ihrem VPS belegten Speicherplatz.
- Änderung der IP-Adresse: Ihr VPS erhält eine neue IP-Adresse und muss deshalb im DHCP Modus betrieben werden, um auf der neuen Infrastruktur zu funktionieren.


Wenn Sie die automatische Migration Ihres VPS anfordern, übermitteln wir Ihnen dessen zukünftige IP-Adresse und führen die Migration dann 6 Stunden später durch. So können Sie die Migration nachts starten und haben genug Zeit, um die Einstellungen Ihrer Domains anzupassen.

Um eine reibungslose Migration unter Linux zu gewährleisten führen Sie bitte folgende Schritte durch (unter Windows ist dies nicht erforderlich):


- Umstellung auf DHCP:


```
# Debian-basierte Systeme
/etc/network/interfaces
auto lo
iface lo inet loopback
auto eth0
iface eth0 inet dhcp
```



```
# RedHat-basierte Systeme
/etc/sysconfig/network
Löschen Sie die Zeile, die mit GATEWAY= beginnt
/etc/sysconfig/network-scripts/ifcfg-eth0
DEVICE="eth0"
BOOTPROTO="dhcp"
IPV6INIT="no"
ONBOOT="yes"
```


- UDEV Regeln deaktivieren:


```
#rm -f /etc/udev/rules.d/70-persistent-net.rules
#rm -f /lib/udev/write_net_rules
```



Falls Probleme auftreten sollten, verwenden Sie den KVM- und Rescue-Modus (verfügbar in Ihrem Kundencenter), um die Konfiguration Ihres VPS zu korrigieren.
Sobald nach der Migration alles korrekt funktioniert können Sie:


- Die VMwareTools deinstallieren (diese werden nicht mehr benötigt)
- Das SLA Monitoring für Ihren VPS im Kundencenter oder der API erneut aktivieren


Für den Fall, dass Sie Ihren VPS auf der neuen Infrastruktur nicht zum Laufen bekommen, bewahren wir Ihren alten VPS für 15 Tage auf. Auf Anfrage können Sie die Migration rückgängig machen und Ihren alten VPS erneut starten. Alle zwischen der Migration und der Rückkehr zum alten VPS durchgeführten Änderungen gehen dabei verloren.


## 
Führen Sie eine Sicherung Ihrer Daten durch, bevor Sie die Migration starten.

- Rufen Sie die [Seite für die Anfrage zur Migration](https://www.ovh.de/vps2016/migration2014to2016/) auf und melden Sie sich mit Ihrer OVH Kundenkennung an.
- Wählen Sie den zu migrierenden VPS im Auswahlmenü aus.
- Wählen Sie den gewünschten Migrationsmodus (manuell oder automatisch) aus.
- Wählen Sie das Ziel-Rechenzentrum aus.
- Es wird nun eine Seite mit dem neuen Tarif Ihres VPS, dessen neues Ablaufdatum und bei einer automatischen Migration auch die neue IP-Adresse angezeigt.
- Sie müssen nun nur noch die Vertragsbedingungen akzeptieren, um die Migration zu starten.



