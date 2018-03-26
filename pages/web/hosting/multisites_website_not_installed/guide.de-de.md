---
title: 'Webhosting: Fehler - Webseite ist nicht installiert'
excerpt: Informationen zur Behebung der Fehlermeldung "Webseite nicht installiert"
id: '1585'
slug: webhosting_fehler_-_webseite_ist_nicht_installiert
legacy_guide_number: g1585
---


## Allgemein
Diese Seite wird angezeigt, wenn das Ziel der Domain ungültig ist oder die Domain noch nicht vollständig auf dem Server publiziert wurde.

Diese Warnmeldung kann aus verschiedenen Gründen auftreten:


- Ihr Webweiterleitung ist nicht richtig eingestellt

- Ihre Domain oder Sub-Domain ist nicht mit dem Hostserver verbunden

- Ihre Domaine zeigt nicht auf die richtige Stelle



![](images/img_2321.jpg){.thumbnail}
Wichtiger Hinweis:


- Nach Änderung einer IP Adresse ist eine unvermeidliche Propagationzeit von 4 bis 24 Stunden notwendig. Die Fehlermeldung kann während dieser Zeit erscheinen.




## Fehler beim Einrichten der Webweiterleitung
Diese Seite kann angezeigt werden, wenn Sie Ihre Webweiterleitung nur teilweise eingerichtet haben.

Beispiel: Sie lassen Ihren Domainnamen oder die Subdomain auf die IP des Servers (Bsp. 213.186.33.5) verweisen, aber haben noch nicht die Webweiterleitung im [Kundencenter](https://www.ovh.com/manager/web/auth.html/) eingerichtet.

In diesem Fall prüfen Sie bitte, ob die Webweiterleitung der Hauptdomain und der "www" Subdomain eingerichtet ist und dass  Ihre Domain auf die richtige IP verweist (Bsp. 213.186.33.5).

Eine Anleitung zur Einrichtung einer Webweiterleitung finden Sie hier:[]({legacy}1339)

![](images/img_2268.jpg){.thumbnail}


## Fehlerhafte Verknüpfung Ihrer Domain oder Sub-Domain mit dem Hostserver
Diese Seite kann erscheinen falls Ihre Domain oder Sub-Domains nicht richtig eingerichtet wurden.

Beispiel: Ihre Domain oder Sub-Domain verweist auf die IP des Webservers (Cluster), ist aber nicht im [Kundencenter](https://www.ovh.com/manager/web) hinterlegt.

![](images/img_2269.jpg){.thumbnail}
In diesem Fall überprüfen Sie bitte, dass Ihre Domain oder Sub-Domain im Kundencenter über den Button "Domain hinzufügen" korrekt eingerichtet wurde.

Bitte achten Sie darauf, dass die Domain oder Sub-Domain auf die richtige IP verweist (Sie finden die Hostserver IP im [Kundencenter](https://www.ovh.com/manager/web)).

Eine Anleitung zur Einrichtung von Multi-Domains finden Sie hier:[]({legacy}1332)

![](images/img_3965.jpg){.thumbnail}


## Fehlerhafter Verweis auf Domainname
Diese Seite kann ebenfalls erscheinen falls Ihr Domainname nicht auf die richtige IP verweist oder sie auf eine IP eines Hostservers verweist, auf dem Ihre Webseite nicht eingetragen wurde.


Beispiel: Der Hostserver Ihres Domainnamens ist in Cluster12, aber Ihre Domain verweist auf Cluster14.

[So finden Sie die IP Ihres Hostservers](https://www.ovh.de/g1290.geocache-cdn).

![](images/img_2274.jpg){.thumbnail}

