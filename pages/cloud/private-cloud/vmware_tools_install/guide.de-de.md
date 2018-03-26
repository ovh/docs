---
title: Wie installiere ich die VMware Tools?
excerpt: ''
slug: wie_installiere_ich_die_vmware_tools
legacy_guide_number: g621
---


## 
Sie müssen den vSphere Client verwenden, entweder indem Sie über Ihren eigenen lokalen Client darauf zugreifen, oder indem Sie die RDP Verbindung nutzen, die wir Ihnen bei der Aktivierung Ihres PCC eingerichtet haben.


## 
Mounten Sie das Image mit den VMware Tools von der Konsole Ihrer VM aus, indem Sie die Option "Install/Upgrade VMware Tools" auswählen:

![](images/img_142.jpg){.thumbnail}
Mouten Sie anschliessend das durch den Befehl aktivierte Volume:


```
# mount /dev/cdrom /mnt
```


Und entpacken Sie danach das Tool-Archiv. In unserem Beispiel wählen wir dazu das /home Verzeichnis:


```
#cd /home (zum Beispiel)
#tar xvf /mnt/VmareTools-8.3.2-257589.tar.gz
#cd /home/VMWare-tools-distrib
#./VMWare-install.pl default
```


Sobald die Installation abgeschlossen wurde wird das Tool-Image automatisch wieder aus dem System entfernt.


## 
Sobald Sie das Image mit der Option "Install/Upgrade VMware Tools" gemountet haben erscheint die CD im Arbeitsplatz auf Ihrer VM. Machen Sie einen Doppelklick darauf, um die Installation der Tools zu starten:

![](images/img_143.jpg){.thumbnail}
Daraufhin startet der Installations-Assistent und fordert Sie auf, die Lizenz-Bedingungen zu akzeptieren sowie den gewünschten Installations-Typ auszuwählen (wir empfehlen die vollständige Installation der VMware Tools).
Sobald die Installation abgeschlossen wurde bietet Ihnen der Assistent an, einen Neustart der VM durchzuführen, damit die Änderungen übernommen werden.

