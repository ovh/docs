---
title: Jak skonfigurować strefę DNSSEC dla domeny
excerpt: ''
slug: jak_skonfigurowac_strefe_dnssec_dla_domeny
legacy_guide_number: g609
---


## Wymagania

- Domena musi byc zarejestrowana w OVH. Jest to wymóg techniczny związany z koniecznością aktualizacji wpisów DS po stronie registry.	
- Domena musi miec jedno z tych rozszerzeń: .fr, .com, .be, .net, .eu, .pl, .re, .pm, .yt, .wf, .tf, .info, .li, .ch, .biz, .de, .sx, .org, .se, .nl, .in, .us, .at, .nu, .la, .ac, .cz, .me, .sh, .io, .uk, .co.uk, .me.uk, .org.uk, lub nowe rozszerzenie, na przykład .paris, .club, .xyz, .wiki, .ink, i wszystkie rozszerzenia firmy Donuts. (wkrótce pojawia się inne rozszerzenia)




## Przypadek zastosowania
W przewodniku tym opisujemy przypadek korzystania z serwerów DNS hostingu OVH. OVH zarządza kluczami, aktualizacją wpisów DS i podpisywaniem strefy w sposób transparentny.
Serwery DNS możesz sprawdzić logując się do [panelu klienta](https://www.ovh.com/manager/web) i przechodząc do sekcji Domeny, Zarządzanie DNS. Jeśli serwery DNS na liście mają formę nsXX.ovh.net i dnsXX.ovh.net lub Xns200.anycast.me, korzystasz z serwerów DNS OVH.


## Aktywacja

- W pierwszej kolejności zaloguj się do [panelu klienta](https://www.ovh.com/manager/web).

- Wybierz domenę w sekcji "Domeny".



![](images/img_2896.jpg){.thumbnail}

- W sekcji "Zarządzanie DNS" możesz sprawdzić, czy korzystasz z serwerów DNS OVH.



![](images/img_3966.jpg){.thumbnail}

- Po dokonaniu weryfikacji kliknij na przycisk aktywacji opcji DNSSEC.



![](images/img_3967.jpg){.thumbnail}

- Pojawi się okno pop-up z opcją potwierdzenia operacji. Operacja ta może trwać do 24 godzin.



![](images/img_2895.jpg){.thumbnail}

- Po potwierdzeniu operacji przycisk aktywacji zmięni się.



![](images/img_3968.jpg){.thumbnail}

- Status operacji możesz sprawdzić w sekcji "Operacje w trakcie".



![](images/img_3969.jpg){.thumbnail}


## Wyłączanie
Jeśli włączyłeś protokół DNSSEC, musisz ponownie wybrać domenę i kliknąć na "przycisk wyłączania". Pojawi się okno pop-up z opcją potwierdzenia operacji. Jeśli aktywacja trwa, należy poczekać do jej zakończenia (przycisk nie będzie dostępny).

![Wyłączanie](images/img_3970.jpg){.thumbnail}


## Sposób 1: korzystając z przeglądarki Firefox lub Chrome
Możesz zainstalować rozszerzenie Firefox, które pozwala na sprawdzenie, czy odwiedzane strony są zabezpieczone przez DNSSEC, i jeśli tak, jaki jest wynik weryfikacji. Rozszerzenie to jest [dostępne tutaj](http://www.dnssec-validator.cz/). Po jego zainstalowaniu zobaczysz klucz z lewej strony w pasku adresu przeglądarki. W przypadku domen, dla których klucz jest zielony, IP jest weryfikowane przez DNSSEC.

![Moduł Firefox weryfikacji DNSSEC: ta strona jest zabezpieczona](images/img_119.jpg){.thumbnail}
Jeśli klucz jest pomarańczowy, oznacza to, że rekursywny serwer DNS twojego dostawcy internetu nie jest kompatybilny z DNSSEC. Możesz korzystać z alternatywnych serwerów DNS, aby wykonać tą weryfikację. Moduł Firefox proponuje listę serwerów DNS, która jest dostępna po kliknięciu prawym przyciskiem myszy na klucz i po wybraniu "Preferences".

Wersja alpha tego rozszerzenia jest dostępna również dla przeglądarki Chrome na [tej stronie](https://chrome.google.com/webstore/detail/hpmbmjbcmglolhjdcbicfdhmgmcoeknm).


## Sposób 2: z poziomu konsoli, w przypadku wcześniejszej deklaracji klucza źródłowego
Aby sprawdzić, czy DNSSEC jest poprawnie skonfigurowany dla danej domeny, możesz skorzystać z narzędzia dig. Aby móc wykonać potwierdzenie DNSSEC, narzędzie to musi znać publiczny klucz źródłowy (z którym podpisywany jest klucz, który podpisuje strefę root "."). Klucz ten jest dostępny w kilku miejscach w internecie. Podajemy go tutaj, możesz go skopiować do pliku /etc/trusted-key.key (wszystko musi być w jednej linii) :


```
. 172717 IN DNSKEY 257 3 8 AwEAAagAIKlVZrpC6Ia7gEzahOR+9W29euxhJhVVLOyQbSEW0O8gcCjF
FVQUTf6v58fLjwBd0YI0EzrAcQqBGCzh/RStIoO8g0NfnfL2MTJRkxoX
bfDaUeVPQuYEhg37NZWAJQ9VnMVDxP/VHL496M/QZxkjf5/Efucp2gaD
X6RS6CXpoY68LsvPVjR0ZSwzz1apAzvN9dlzEheX7ICJBBtuA6G3LQpz
W5hOA2hzCTMjJPJ8LbqF6dsV6DoBQzgul0sGIcGOYl7OyQdXfZ57relS
Qageu+ipAdTTJ25AsRTAoub8ONGcLmqrAmRLKBP1dfwhYB4N7knNnulq
QxA+Uk1ihz0=
```


Nie możesz go skopiować bez sprawdzenia jego autentyczności, ponieważ w przypadku DNSSEC, jak w każdym systemie kryptograficznym opartym na kanale zaufania, pozycje źródłowe są najważniejsze. Oficjalny punkt dystrybucyjny jest [w IANA](https://data.iana.org/root-anchors/), a plik jest podpisany przez GPG.
Należy uruchomić następujące polecenie (przykład dotyczy strony www.eurid.eu):

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


Ostatnia linia informuje, że weryfikacja powiodła się. 

Jeśli otrzymasz poniższy komunikat, oznacza to, że dig nie odnalazł klucza źródłowego w /etc/trusted-key.key :

```
$ dig +sigchase www.eurid.eu
No trusted keys present
```




## Sposób 3: z poziomu konsoli, bez wcześniejszej deklaracji klucza źródłowego
Jeśli nie możesz zdefiniować klucza publicznego, możesz wybrać zewnętrzny serwer DNS, aby wykonać weryfikację. Niektóre rekursywne serwery DNS potwierdzające DNSSEC są dostępne publicznie przez różne podmioty. Na przykład serwery [DNS-OARC](https://www.dns-oarc.net/oarc/services/odvr), które wykorzystamy dla poniższego przykładu, w którym sprawdzamy IP strony www.eurid.eu:




```
$ dig +dnssec www.eurid.eu @149.20.64.21

; <<>> DiG 9.7.3 <<>> +dnssec www.eurid.eu @149.20.64.21
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 26117
;; flags: qr rd ra ad; QUERY: 1, ANSWER: 6, AUTHORITY: 7, ADDITIONAL: 16
[...]
```


Obecność oznacznika "ad" wskazuje, że otrzymana odpowiedź została potwierdzona przez serwer rekursywny.

