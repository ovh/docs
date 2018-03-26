---
title: Die Spare-Hosts
excerpt: Bereitstellung eines Spare-Hosts in der Dedicated Cloud
slug: die_spare-hosts
legacy_guide_number: g860
---


## 
Sie haben im Zusammenhang mit einem Störungsticket eine E-Mail bezüglich der Bereitstellung eines Spare-Hosts in Ihrer Dedicated Cloud erhalten.
Ein Spare-Host wird üblicherweise bereitgestellt, wenn einer der Hosts, aus denen Ihre Infrastruktur besteht, ausfällt. Dieser Host ist für Sie kostenlos. Im Störungsticket wird auch die IP-Adresse des von dem Ausfall betroffenen Hosts aufgeführt.
Bei der Verbindung mit Ihrem vSphere Client sehen Sie auch den auf Ihrem Host angezeigten Alarm.
Wenn Sie die HA und DRS Funktionen von VMware korrekt konfiguriert haben, werden die VM automatisch auf den Spare-Host migriert.
Wenn Sie diese Funktionen nicht aktiviert haben, müssen Sie Ihre virtuellen Maschinen von Hand migrieren.


## 

## Achtung!
OVH stellt Ihnen einen Spare-Host zur Verfügung, um den Ausfall von Ressourcen zu kompensieren. Sobald der ausgefallene Host wieder normal verfügbar ist, muss der Spare-Host an OVH zurückgegeben werden.


## 
Nach der Wiederherstellung des ausgefallenen Hosts muss der Spare-Host zurückgegeben werden. Ein Spare-Host kann nicht dauerhaft genutzt oder in einen regulär abgerechneten Host umgewandelt werden. Wenn Sie Ihren ausgefallenen Host austauschen möchten, gehen Sie wie in der Hilfe [Austausch eines defekten Hosts]({legacy}861) beschrieben vor.


## 
Sobald die Situation auf Ihrem ausgefallenen Host wieder normal ist und die dazugehörigen Warnmeldungen verschwunden sind, können Sie Ihren Spare-Host zurückgeben. Die Vorgehensweise dazu wird im Abschnitt "Einen Host entfernen" der Hilfe [Wie füge ich einen Host hinzu?]({legacy}605) beschrieben.

