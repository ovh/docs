---
title: Sichern Sie Ihre Domain mit DNSSEC ab
excerpt: ''
slug: sichern_sie_ihre_domain_mit_dnssec_ab
legacy_guide_number: g609
---


## Voraussetzungen

- Ihre Domain muss bei OVH registriert sein. Dies ist eine technische Einschränkung aufgrund der Notwendigkeit, die DS Einträge bei der Registry aktuell zu halten.
- Ihre Domain muss eine der folgenden Endungen haben: .com, .net, .org, .info, .biz, .de, .at, .ch, .eu, .pl, .be. .fr, .re, .pm, .yt, .wf, .tf, .li, .sx, .se, .nl, .in, .us, .nu, .la, .ac, .cz, .me, .sh, .io, .uk, .co.uk, .me.uk, .org.uk, oder eine der kürzlich gestarteten neuen Domainendungen wie .paris, .club, .xyz, .wiki, .ink sowie sämtliche von Donuts verwalteten Domainendungen (wir werden nach und nach weitere Endungen implementieren).




## Die beiden Anwendungsfälle

- Entweder Sie hosten Ihre Domain auf externen DNS Servern (z.B. Ihrem dedizierten Server oder einem anderen Server), ziehen Sie in diesem Fall die dazugehörige [Hilfe](http://hilfe.ovh.de/DnsSec) zu Rate. Darin wird erklärt, wie Sie Ihre Schlüssel generieren, Ihre Zone signieren und OVH den öffentlichen Schlüssel für die Updates des DS Eintrags bei der Registry übermitteln können.

- Oder Sie verwenden die allgemeinen DNS Server von OVH, dies ist der in dieser Hilfe behandelte Anwendungsfall. Wir verwalten dann für Sie transparent die Schlüssel, deren regelmäßigen Austausch, die Updates des DS Eintrags sowie die Signatur der Zone.


Wenn Sie sich nicht sicher sind, dann können Sie die verwendeten DNS Server in Ihrem [OVH Kundencenter](https://www.ovh.com/manager/web) überprüfen. Wählen Sie dazu die Domain unter "Domains" in dem Menü auf der linken Seite aus und klicken Sie dann auf "DNS Verwaltung". Wenn die angezeigten DNS Server von der Form nsXX.ovh.net, dnsXX.ovh.net oder Xns200.anycast.me sind, dann verwenden Sie die allgemeinen DNS Server von OVH.


## Aktivierung

- Verbinden Sie sich zuerst mit Ihrem [OVH Kundencenter](https://www.ovh.com/manager/web).

- Wählen Sie dann den gewünschten Domainnamen in dem Menü auf der linken Seite unter "Domains" aus.



![](images/img_2896.jpg){.thumbnail}

- Sie können in der Rubrik "DNS Verwaltung" überprüfen, ob die Domain die OVH DNS Server verwendet.



![](images/img_3966.jpg){.thumbnail}

- Nachdem die Überprüfung der DNS Server durchgeführt wurde, klicken Sie auf den Button zur Aktivierung von DNSSEC.



![](images/img_3967.jpg){.thumbnail}

- Es wird dann ein Popup-Fenster angezeigt, in dem die Operation bestätigt werden muss. Dort wird auch angezeigt, dass die Durchführung bis zu 24 Stunden in Anspruch nehmen kann.



![](images/img_2895.jpg){.thumbnail}

- Der Aktivierungs-Button wird eingefärbt, sobald die Bestätigung durchgeführt wurde.



![](images/img_3968.jpg){.thumbnail}

- Sie können in der Rubrik "Laufende Operationen" überprüfen, dass die Operation wie gewünscht gestartet wurde.



![](images/img_3969.jpg){.thumbnail}


## Deaktivierung
Um die DNSSEC Option wieder zu deaktivieren, wählen Sie die Domain erneut aus und klicken Sie auf den Button zur Deaktivierung. Es wird dann ein Popup-Fenster angezeigt, in dem die Operation bestätigt werden muss. 
Hinweis: Wenn die Aktivierung noch nicht abgeschlossen wurde, dann müssen Sie erst abwarten, bis diese beendet wurde. Die Option zur Deaktivierung ist so lange ausgegraut, um zu verhindern, dass die DNSSEC Konfiguration Ihrer Domain in einem undefinierten Zustand verbleibt.

![Deaktivierung](images/img_3970.jpg){.thumbnail}


## Methode 1: Mit Firefox oder Chrome
Sie können ein Firefox Add-on installieren das überprüft, ob die von Ihnen besuchten Seiten per DNSSEC gesichert sind, und wenn dies der Fall ist, wie das Ergebnis der Validierung ausfällt. Dieses Add-on können Sie [hier herunterladen](http://www.dnssec-validator.cz/). Nachdem es installiert wurde erscheint links neben der Adresszeile Ihres Browsers ein Schlüssel-Symbol. Bei Domains, bei denen der Schlüssel grün ist, wurde die IP der Seite per DNSSEC überprüft.

![Firefox Add-on zur DNSSEC Validierung: Diese Seite ist gesichert](images/img_119.jpg){.thumbnail}
Wenn der Schlüssel orange ist, dann ist der rekursive DNS Server Ihres Internetproviders nicht mit DNSSEC kompatibel. Dies ist jedoch nicht schlimm: Sie können auch alternative DNS Server verwenden, um diese Validierung durchzuführen. Das Firefox Add-on stellt Ihnen eine Liste mit Alternativen zur Verfügung, führen Sie dazu einen Rechtsklick auf den Schlüssel aus und wählen Sie dann "Einstellungen".

Eine Alpha-Version dieses Add-ons ist auch für Chrome verfügbar, und zwar auf [dieser Seite](https://chrome.google.com/webstore/detail/hpmbmjbcmglolhjdcbicfdhmgmcoeknm).


## Methode 2: Im Konsolen-Modus mit vorheriger Deklaration des Root-Schlüssels
Um zu überprüfen, ob DNSSEC für eine Domain korrekt konfiguriert ist, können Sie den dig Befehl verwenden. Um damit die DNSSEC Validierung durchführen zu können muss der öffentliche Root-Schlüssel bekannt sein (mit diesem wird der Schlüssel der Root-Zone "." signiert). Dieser Schlüssel ist an mehreren Stellen im Internet verfügbar, der Einfachheit halber führen wir ihn hier ebenfalls auf. Sie können den Schlüssel wie er unten steht in die Datei /etc/trusted-key.key kopieren (alles in eine Zeile):


```
. 172717 IN DNSKEY 257 3 8 AwEAAagAIKlVZrpC6Ia7gEzahOR+9W29euxhJhVVLOyQbSEW0O8gcCjF
FVQUTf6v58fLjwBd0YI0EzrAcQqBGCzh/RStIoO8g0NfnfL2MTJRkxoX
bfDaUeVPQuYEhg37NZWAJQ9VnMVDxP/VHL496M/QZxkjf5/Efucp2gaD
X6RS6CXpoY68LsvPVjR0ZSwzz1apAzvN9dlzEheX7ICJBBtuA6G3LQpz
W5hOA2hzCTMjJPJ8LbqF6dsV6DoBQzgul0sGIcGOYl7OyQdXfZ57relS
Qageu+ipAdTTJ25AsRTAoub8ONGcLmqrAmRLKBP1dfwhYB4N7knNnulq
QxA+Uk1ihz0=
```


Beachten Sie, dass Sie diesen Schlüssel nicht kopieren sollten, ohne vorher dessen Authentizität zu überprüfen: bei DNSSEC ist wie bei jedem anderen auf dem Prinzip einer Chain of Trust basierenden kryptographischen System die Authentizität der Root-Signaturen, denen man standardmässig vertraut, äußerst wichtig. Die offizielle Adresse, unter der der Schlüssel veröffentlicht wird, ist [bei der IANA](https://data.iana.org/root-anchors/), und die Datei ist mit GPG signiert.
Der auszuführende Befehl ist folgender, in diesem Beispiel möchten wir die IP der Seite www.eurid.eu validieren:

```
$ dig +sigchase www.eurid.eu
;; RRset to chase:
www.eurid.eu. 544 IN CNAME eurid.eu.
[...]
;; WE HAVE MATERIAL, WE NOW DO VALIDATION
;; VERIFYING DS RRset for eu. with DNSKEY:55231: success
;; OK We found DNSKEY (or more) to validate the RRset
;; Ok, find a Trusted Key in the DNSKEY RRset: 19036
;; VERIFYING DNSKEY RRset for . with DNSKEY:19036: success

;; Ok this DNSKEY is a Trusted Key, DNSSEC validation is ok: SUCCESS
```


Die letzte Zeile zeigt an, dass die Validierung erfolgreich war, da die Chain of Trust erfolgreich geprüft werden konnte und deren Ende dem bekannten offentlichen Schlüssel der Root-Zone entspricht.

Wenn Sie folgende Meldung erhalten, dann hat dig den Root-Schlüssel in /etc/trusted-key.key nicht gefunden:

```
$ dig +sigchase www.eurid.eu
No trusted keys present
```




## Methode 3: Im Konsolen-Modus ohne vorherige Deklaration des Root-Schlüssels
Wenn Sie nicht wie oben beschrieben den öffentlichen Schlüssel deklarieren können, dann können Sie auch einem externen DNS Server vertrauen, damit dieser die Validierung an Ihrer Stelle durchführt. Es wurden von verschiedenen Stellen rekursive DNS Server zur Validierung von DNSSEC eingerichtet, beispielsweise die von [DNS-OARC](https://www.dns-oarc.net/oarc/services/odvr), die wir in diesem Beispiel verwenden, um die IP der Seite www.eurid.eu zu validieren:


```
$ dig +dnssec www.eurid.eu @149.20.64.21

; <<>> DiG 9.7.3 <<>> +dnssec www.eurid.eu @149.20.64.21
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 26117
;; flags: qr rd ra ad; QUERY: 1, ANSWER: 6, AUTHORITY: 7, ADDITIONAL: 16
[...]
```


Hier zeigt das Vorhandensein des "ad" Flags an, dass die Antwort, die Sie erhalten haben, vom rekursiven Resolver validiert wurde.

