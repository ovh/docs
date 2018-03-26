---
title: Verwendung des GeoCache Boosters auf einem Webhosting
excerpt: Hilfe zur Verwendung des bei den Webhosting-Angeboten enthaltenen GeoCache Boosters
slug: verwendung_des_geocache_boosters_auf_einem_webhosting
legacy_guide_number: g1290
---


## 
Loggen Sie sich mit Ihrer OVH Kundenkennung und dem dazugehörigen Passwort in Ihr [OVH Kundencenter](https://www.ovh.com/manager/web) ein.

Wählen Sie dann unter "Hosting-Pakete" Ihr Webhosting aus.

![](images/img_2904.jpg){.thumbnail}


## Den Cache des GeoCache Boosters leeren
Die TTL (Time to Live = Lebensdauer einer Datei im Cache eines PoP) beträgt zwischen 5 und 60 Minuten. Dieser Wert wird zur Optimierung von unseren Servern verwaltet. Nach Ablauf dieses Zeitraums wird die Datei im Cache gelöscht. Sobald ein Benutzer das betroffene Element erneut aufruft, wird es im dazugehörigen PoP wieder in den Cache gelegt.

Um den Austausch einer Datei im Cache eines PoP zu erzwingen, zum Beispiel nach einer Änderung an Ihrer Seite, muss der bestehende Cache geleert werden. Die Dateien werden dann in ihrer neuesten Version wieder in den Cache aufgenommen, sobald ein Benutzer sie aus der Zone, für die der PoP zuständig ist, aufruft.

Um den Cache Ihrer CDN PoP manuell zu löschen, begeben Sie sich in Ihrem OVH Kundencenter in den Bereich "Hosting-Pakete". Wählen Sie dort Ihr Hosting aus und klicken Sie auf "Den Cache des Basis-CDN leeren".

![](images/img_2957.jpg){.thumbnail}


## Die Verwendung des GeoCache Boosters deaktivieren
Wenn Sie den bei Ihrem Webhosting-Paket enthaltenen GeoCache nicht verwenden möchten, haben Sie mehrere Möglichkeiten:


- Verwenden Sie nicht die dem GeoCache zugewiesene IP-Adresse (A-Eintrag) Ihres Webhostings.
- Ändern Sie die Einstellung in der .ovhconfig-Datei im Wurzelverzeichnis des FTP-Bereichs Ihres Webhostings (siehe nächster Abschnitt).


Wir beschreiben hier die erste Lösung, die darin besteht, die von Ihrem Webhosting verwendete IP-Adresse zu ändern:

Begeben Sie sich dazu in die Rubrik "Domain" und wählen Sie die Domain aus, die Ihrem Webhosting zugewiesen ist und das CDN verwendet. Klicken Sie dort auf "DNS Zone".

Suchen Sie in den Einträgen der DNS Zone den "A-Eintrag", der einer IP-Adresse vom Typ 213.xxx.xxxx.xxx * zugewiesen ist.

* Diese IP ist die Adresse des Ihrem Webhosting zugewiesenen GeoCache Boosters. Um den GeoCache wieder zu aktivieren, müssen Sie diese IP-Adresse an gleicher Stelle erneut eintragen. Die Liste der verfügbaren IP-Adressen finden Sie weiter unten. Notieren Sie sich am besten die IP-Adresse, damit Sie diese Angabe bei Bedarf sofort zur Hand haben. Ansonsten können Sie sie auch beim Support anfragen.

Klicken Sie anschließend auf "Ändern" (das Symbol mit Bleistift und Block rechts in der Zeile des A-Eintrags).

Auf der nun angezeigten Seite können Sie verschiedene Einstellungen bearbeiten:


- Subdomain: standardmäßig ist der A-Eintrag ausgewählt - ändern Sie diesen Wert nicht!
- Eine IP auswählen: wählen Sie "Shared Hosting" aus
- Ein Hosting auswählen: wählen Sie die zu Ihrem Webhosting gehörende Domain aus
- Ein Land auswählen: wählen Sie die gewünschte Geolokalisierung der IP-Adresse aus


Bestätigen Sie Ihre Auswahl anschließend mit einem Klick auf "Bestätigen". Daraufhin wird Ihre IP geändert, das Update nimmt einige Augenblicke in Anspruch.

Sie können in Ihrem Kundencenter herausfinden, welcher Cluster für Ihr Webhosting zuständig ist. Klicken Sie dazu in der Rubrik "Hosting-Pakete" auf den Tab "FTP - SSH". Den zuständigen Cluster finden Sie auch in der E-Mail, die Sie nach der Aktivierung Ihres Angebots erhalten haben.

|Cluster|IPV4 FR|IPV6 FR|17 PoP (full-cdn)|SSL (GlobalSign)|
|HOST|clusterXXX.ovh.net|clusterXX.ovh.net|full-cdn-01.clusterXX.ovh.net|cluster0XX.proxy1.rbx4.hostedssl.ovh.net|
|cluster002.ovh.net|213.186.33.2|2001:41d0:1:1b00:213:186:33:2|213.186.33.69|46.105.174.33|
|cluster003.ovh.net|213.186.33.4|2001:41d0:1:1b00:213:186:33:4|213.186.33.85|46.105.174.34|
|cluster005.ovh.net|213.186.33.16|2001:41d0:1:1b00:213:186:33:16|213.186.33.95|46.105.174.35|
|cluster006.ovh.net|213.186.33.17|2001:41d0:1:1b00:213:186:33:17|213.186.33.97|46.105.174.36|
|cluster007.ovh.net|213.186.33.18|2001:41d0:1:1b00:213:186:33:18|213.186.33.105|46.105.174.37|
|cluster010.ovh.net|213.186.33.19|2001:41d0:1:1b00:213:186:33:19|213.186.33.107|46.105.174.38|
|cluster011.ovh.net|213.186.33.40|2001:41d0:1:1b00:213:186:33:40|213.186.33.151|46.105.174.39|
|cluster012.ovh.net|213.186.33.48|2001:41d0:1:1b00:213:186:33:48|213.186.33.153|46.105.174.40|
|cluster013.ovh.net|213.186.33.24|2001:41d0:1:1b00:213:186:33:24|213.186.33.83|46.105.174.41|
|cluster014.ovh.net|213.186.33.87|2001:41d0:1:1b00:213:186:33:87|213.186.33.169|46.105.174.42|
|cluster015.ovh.net|213.186.33.3|2001:41d0:1:1b00:213:186:33:3|213.186.33.171|46.105.174.43|
|cluster017.ovh.net|213.186.33.50|2001:41d0:1:1b00:213:186:33:50|213.186.33.173|46.105.174.44|
|cluster020.hosting.ovh.net|46.105.57.169|IPV6 noch nicht verfügbar|213.186.33.176|46.105.57.169|




## 
Verbinden Sie sich per FTP mit Ihrem Hosting-Speicherplatz, um die Konfigurationsdatei aufzurufen.

Sie können dazu zum Beispiel das Programm FileZilla verwenden.


## Die Verwendung des GeoCache Boosters aktivieren / deaktivieren
Sobald Sie mit dem FTP-Speicherplatz Ihres Webhostings verbunden sind, befinden Sie sich standardmäßig in dessen Wurzelverzeichnis. Dort befinden sich mehrere Dateien und Ordner, darunter auch die Datei .ovhconfig.

Laden Sie die Datei auf Ihren Computer herunter (am einfachsten sollte dies per Doppelklick auf die Datei möglich sein) und öffnen Sie sie in einem Texteditor. Bei Bedarf können Sie die Datei zum Bearbeiten in ovhconfig.txt umbenennen.

Ändern Sie den Wert des Eintrags "environment" und ersetzen Sie "production" durch "development".

Benennen Sie die Datei wieder in .ovhconfig zurück und kopieren Sie sie wieder ins Wurzelverzeichnis des FTP-Bereichs (die bestehende Datei ersetzen).

Um den GeoCache wieder zu aktivieren ändern Sie einfach wieder den Wert des Eintrags "environment" in "production".

![](images/img_1207.jpg){.thumbnail}
Sie können auch folgende Datei in Ihrer .htaccess-Datei hinzufügen:

```
Header set Cache-Control "no-cache"
```



