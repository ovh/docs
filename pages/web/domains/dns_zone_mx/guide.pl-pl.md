---
title: 'Hosting www: Konfiguracja serwerów MX w strefie DNS OVH'
excerpt: 'Hosting www: Konfiguracja serwerów MX w strefie DNS OVH'
slug: hosting_www_konfiguracja_serwerow_mx_w_strefie_dns_ovh
legacy_guide_number: g2012
---


## Posiadasz usługę e-mail w OVH.
Jeśli korzystasz z e-maili zawartych w ofercie hostingu www, musisz używać wpisów MX OVH:

- Serwery mail [Anty-Wirus + Anty-Spam]:


|Typ pola|Priorytet|Adres docelowy|
|MX|1|mx1.mail.ovh.net.|
|MX|5|mx2.mail.ovh.net.|
|MX|10|mx3.mail.ovh.net.|



## Informacja:
Aktualnie stare serwery MX nadal działają dla usług e-mail utworzonych przed 23/05/2016.


## Nie masz usługi e-mail w OVH
Jeśli nie masz usługi e-mail w OVH, nie możesz odbierać e-maili, ponieważ nie posiadasz konta e-mail.
W takiej sytuacji możesz korzystać z Aliasów (przekierowań).

Możesz na przykład utworzyć alias "alias@mojadomena.com" z przekierowaniem na istniejący adres e-mail "mojadres@mojainnadomena.com".
W tym przypadku należy skorzystać z takiej konfiguracji:
Serwer mail [Alias]:
|Typ pola|Priorytet|Adres docelowy|
|MX|1|redirect.ovh.net|


Jeśli posiadasz ofertę e-mail, również możesz korzystać z Aliasów (przekierowań). Zapoznaj się z tym przewodnikiem: []({legacy}2001).


## Masz usługę e-mail u innego dostawcy.

- Dysponujesz nazwą hosta dla serwera/serwerów MX:


Jeśli Twoja domena korzysta ze strefy DNS OVH a usługa e-mail znajduje się u innego dostawcy (nie w OVH lub na serwerze dedykowanym), możesz skonfigurować strefę DNS w ten sam sposób, ale podając odpowiednie serwery MX:
Serwery mail:
|Typ pola|Prioriytet|Adres docelowy|
|MX|1|twój serwer mail|
|MX|5|twój kolejny serwer mail|



- Nie dysponujesz nazwami hostów, ale znasz jeden lub kilka adresów IP serwera/serwerów MX:


Jeśli Twoja domena korzysta ze strefy DNS OVH ale korzystasz z zewnętrznej usługi e-mail (na przykład na lokalnym serwerze), możesz skonfigurować swoją strefę DNS OVH tak, aby przypisać ten adres IP do nazwy hosta. Nie można wprowadzić wpisu MX w formie adresu IP.
Serwer mail:
|Subdomena|Typ pola|Priorytet|Adres docelowy|
|mail2|A||IP serwera mail|
||MX|1|mail2.twoja_domena|




## Czas propagacji
Uwaga: Propagacja zmian w strefie DNS trwa do 24 godzin.

