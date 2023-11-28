---
title: "Wie erstelle ich eine Subdomain?"
excerpt: "Diese Anleitung erklärt, wie Sie eine Subdomain bei OVHcloud definieren und erstellen"
updated: 2023-11-28
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel <a name="goal"></a>

Das Internet besteht aus *Servern* und *Geräten*, die über ein globales Netzwerk miteinander interagieren. Wenn diese *Server* und ihre *Geräte* mit dem Internet verbunden sind, wird ihnen eine *öffentliche IP-Adresse* (entspricht einer Postadresse) zugewiesen. Diese *IP-Adresse* ermöglicht es, sich remote an einen Server oder ein Gerät anzuschließen, sodass ein Benutzer eine Website anzeigen kann, indem er diese *IP-Adresse* mithilfe seines auf seinem Computer installierten Internetbrowsers eingibt.

Die **Domainnamen** wurden eingerichtet, um den Benutzern des Internet-Netzwerks den Zugriff auf eine Website zu erleichtern. So ist es einfacher, sich einen Namen zu merken, der aus einer ausgewählten Zeichenfolge besteht (Beispiel: ovhcloud.com), als eine Folge von Ziffern, die aus einer *IP-Adresse* besteht (Beispiel: 54.39.46.56).

Ein **Domainname** besteht aus Stufen. Diese Level sind in der Regel durch ein `.` (mit Ausnahme einiger **Endungen** der *ersten Ebene* wie *.co.uk*, *.gouv.fr* oder *.notaires.fr*):

- **T**op **L**evel **D**omain (**TLD**): Stellt die Domains der *Top Level* dar. Sie werden üblicher als **Endungen** bezeichnet. Derzeit gibt es 4 Arten von Top-Level-Domains: 

    - Die **c**ountry **c**ode **T**op **L**evel **D**omains (**ccTLDs**): bestehen aus zwei Zeichen und entsprechen den verschiedenen Ländern der Welt. Zum Beispiel sind die Endungen *.de*, *.es*, *.it* oder *.pl* ccTLDs;
    - Die **g**eneric **T**op **L**evel **D**omains (**gTLDs**): Bestehend aus mindestens drei Zeichen, stellen sie allgemeinere Themen oder Branchen dar. Zum Beispiel sind die Endungen *.com*, *.net*, *.org* oder *.info* gTLDs;
    - Die **new** **g**eneric **T**op **L**evel **D**omains (**new gTLDs**):
    Neue Endungen, die ab 2012 durch das **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) erstellt wurden, um den steilen Anstieg der Anfragen zur Erstellung von Domainnamen zu bewältigen. Dabei kann es sich um allgemeine Themen, Marken, Regionen oder Städte handeln. Zum Beispiel sind die Endungen *.love*, *.ovh* oder *.paris* new gTLDs;
    - Die **Corp**oration **T**op **L**evel **D**omains (**CorpTLDs**): Dies ist eine Unterkategorie der neuen gTLDs. Unternehmen oder Organisationen können auf Anfrage bei der **ICANN** die Erstellung einer eigenen TLD beantragen. Zum Beispiel ist die Endung *.ovh* eine CorpTLD, die vor einigen Jahren von OVHcloud erstellt wurde.

- **S**econd **L**evel **D**omain (**SLD**): Stellt Domains der *zweiten Ebene* dar. Wir nennen sie am häufigsten **labels**. Wenn Sie einen Domainnamen bestellen, können Sie das **label** frei definieren (vorausgesetzt, dieser Name wurde nicht bereits von einem anderen Benutzer mit derselben Endung registriert und ist auf 63 Zeichen begrenzt). Zum Beispiel entspricht *ovhcloud* dem Label der Domain *ovhcloud.com*.

- Third Level Domain (**subdomain**): Ab dieser dritten Ebene spricht man von einer *subdomain*. In dieser Anleitung erfahren Sie, wie Sie diese mit Ihren verschiedenen Diensten einrichten.

![URL content](images/url-composition.png){.thumbnail}
  
**Diese Anleitung erklärt, Sie mehr über Subdomains und wie Sie Subdomains bei OVHcloud erstellen.**