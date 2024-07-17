---
title: "Wszystko o rekordach DNS"
excerpt: "Poznaj różne typy rekordów DNS dostępnych w strefie DNS OVHcloud"
updated: 2024-07-17
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

Skrót **DNS** oznaczający **D**omain **N**ame **S**ystem to zbiór elementów (serwery DNS, strefy DNS, etc.) pozwalających na dopasowanie nazwy domeny do adresu IP.

Zalecamy, abyś przed podjęciem jakichkolwiek działań zapoznał się z naszymi przewodnikami "[Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)" i "[Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)" w tej kolejności.

Strefa DNS domeny to plik konfiguracyjny domeny. Zawiera on informacje techniczne nazywane *rekordami DNS*. Strefa DNS jest, w pewnym sensie, centrum koordynacji dla nazwy domeny.

Celem niniejszego przewodnika jest przedstawienie różnych typów rekordów DNS dostępnych w strefie DNS zarządzanej w OVHcloud. Uzupełnia on następujące przewodniki:

- [Utwórz strefę DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)
- [Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
- [Zarządzanie historią strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_history)
- [Usuń strefę DNS OVHcloud](/pages/web_cloud/domains/dns_zone_deletion)

**Poznaj różne typy rekordów DNS dostępnych w strefie DNS OVHcloud.**

## W praktyce

### Rekordy DNS

**[Edycja strefy DNS](/pages/web_cloud/domains/dns_zone_edit) jest operacją wymagającą odpowiedniej wiedzy** : omyłkowe działanie mogłoby na przykład uniemożliwić dostęp do Twojej strony WWW lub odbiór nowych wiadomości e-mail.

Poniższa lista przedstawia cele i specyfikacje każdego rekordu. Pozwoli Ci to lepiej monitorować operacje wykonywane na usługach DNS.

#### Zapisy wskazania <a name="pointer-records"></a>

Wybierz odpowiedni rekord, klikając każdą z następujących zakładek.

> [!tabs]
> **A**
>> **A**ddress <br><br>
>> Powiąż domenę z adresem IPv4 `X.X.X.X` (gdzie `X` to cyfry od `0` do `255`). Na przykład adres IPv4 serwera, na którym hostowana jest Twoja strona WWW.
>>
> **AAAA** 
>> Four **A** characters because this record is encoded on four times more bits than the historical **A** field.
>> Powiąż domenę z adresem IPv6. Na przykład adres IPv6 serwera, na którym hostowana jest Twoja strona WWW.
>>
>> > [!primary]
>> > Adresy IPv6 są wdrażane stopniowo, aby zmniejszyć brak adresów IPv4 ze względu na stałe zwiększanie się zastosowań cyfrowych. 128-bitowe kodowanie adresów IPv6 pozwala na zapewnienie większej liczby adresów IP.
>> >
>> > Jeśli jednak Twój serwer dysponuje już adresem IPv4, zalecamy korzystanie z adresu IPv6.<br>
>> > W rzeczywistości adresy IPv6 nie są jeszcze prawidłowo interpretowane w całej sieci internetowej, co może powodować zaburzenia wyświetlania lub dostępu.
>> >
> **CNAME**
>> **C**anonical **NAME** <br><br>
>> Użyj adresu IP innej domeny tworząc link o nazwie alias. Na przykład, jeśli *www.domain.tld* to *domain.tld*, oznacza to, że *www.domain.tld* będzie używał adresu IP *domain.tld*.
>>
>> > [!alert]
>> >
>> > Rekord TXT wykorzystujący tę samą domenę lub subdomenę co rekord CNAME zakłóca jego działanie. Wpis CNAME będzie działać tylko częściowo lub w ogóle.
>>
>> > [!warning]
>> >
>> > Pola CNAME nie mogą być używane bezpośrednio przez domenę w jej własnej strefie DNS. Tylko domena musi bowiem wskazywać bezpośrednio na adres IP z polem typu A (lub AAAA, jeśli jest to IPv6).
>> > 
>> > Aby skorzystać z powyższego przykładu, nie będziesz mógł utworzyć pola CNAME dla domeny *domain.tld* w strefie DNS, którą utworzyłeś dla domeny.
>> > Możesz utworzyć pole CNAME dla wszystkich subdomen (przykłady: *subdomain.domain.tld* lub *www.domain.tld*) domeny *domain.tld* w strefie DNS utworzonej dla *domain.tld*.
>> >
>> > Jeśli chcesz dowiedzieć się więcej na ten temat z technicznego punktu widzenia, na dole strony znajdziesz [specjalny przypadek zastosowania dla CNAME i stref DNS utworzonych dla subdomen](#cnameusecase).
>>
> **DNAME**
>> **D**elegation **NAME** <br><br>
>> Umożliwia wygenerowanie "aliasu" dla wszystkich subdomen domeny. Rekord ten pozwala uniknąć tworzenia wielu rekordów CNAME. Pole CNAME przekierowuje niezależnie tylko jedną subdomenę na jeden cel.
>>
>> Przykład: rejestrację DNAME domeny *domain.tld* na *ovh.com*, wszystkie subdomeny *domain.tld* (takie jak *dname.domain.tld* i *xxx.domain.tld*) zostaną przekierowane na subdomeny z krajów niebędących domenami z kategorii *dname.ovh.com* Kapitan i *xxx.ovh.com*.
>>
>> Innymi słowy, rekord DNAME wskazuje, że *dname.domain.tld* i *xxx.domain.tld* muszą wyświetlać wyniki *dname.ovh.com* i *xxx.ovh.com*.
>>
>> > [!warning]
>> >
>> > Natomiast *domain.tld* jako domena nie będzie wyświetlała docelowej domeny *ovh.com*, ponieważ rekord DNAME jest ważny tylko dla subdomen zdefiniowanych w rekordzie DNAME.
>> >
>> > Ponadto, jeśli subdomena *xxx.ovh.com* nie wskaże nigdzie indziej, rekord DNAME nie wyświetli się również w przypadku *xxx.domain.tld*.
>>
>> > [!success]
>> > 
>> > Rejestracja DNAME jest zazwyczaj stosowana w przypadku zmiany nazwy firmy. Można go również uruchomić, jeśli użytkownik dysponuje kilkoma rozszerzeniami domen (.pl, .net, .com, .info, ...).
>> >
> **NS**
>> **N**ame **S**erver<br><br>
>> Definiuje serwery DNS przypisane do strefy DNS. Na przykład, jeśli wpisy NS Twojej strefy DNS wyświetlają serwery *dnsXX.ovh.net* i *nsXX.ovh.net*, użyj ich w zakładce `Serwery DNS`{.action} w Panelu klienta OVHcloud. Więcej informacji znajdziesz w przewodniku "[Zmiana serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
>>
>> > [!warning]
>> >
>> > Jeśli [edytujesz strefę DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit), nie zmieniaj, za pomocą przycisku `Modyfikacja w trybie tekstowym`{.action}, wpisów DNS strefy DNS na rzecz serwerów DNS spoza OVHcloud. Ta strefa DNS działa **tylko** z serwerami DNS OVHcloud.
>> >

#### Zapisy e-mail <a name="mail-records"></a>

Wybierz odpowiedni rekord, klikając każdą z następujących zakładek.

> [!tabs]
> **MX**
>> **M**ail e**X**changer <br><br>
>> Powiąż domenę z serwerem e-mail. Na przykład adres *10 mx1.mail.ovh.net* odpowiada jednemu z serwerów e-mail OVHcloud, gdy korzystasz z usługi e-mail OVHcloud. Istnieje prawdopodobieństwo, że Twój dostawca poczty e-mail dysponuje kilkoma serwerami e-mail: należy utworzyć kilka pól MX. Zapoznaj się z naszą dokumentacją "[Dodaj pole MX do konfiguracji domeny](/pages/web_cloud/domains/dns_zone_mx)".
>>
>> > [!warning]
>> >
>> > Zalecamy używanie w strefie DNS wyłącznie jednego lub kilku serwerów tego samego dostawcy e-mail.
>> > Jeśli dysponujesz już usługami e-mail u innego dostawcy i dodajesz jednocześnie (nie zastępując) serwery e-mail nowego dostawcy, istnieje ryzyko, że obie strony będą losowo otrzymywać e-maile od jednego lub kilku dostawców.
>>
> **SPF**
>> **S**ender **P**olicy **F**ramework <br><br>
>> Pozwala zapobiegać przypadkom podszywania się pod adresy e-mail używające Twojej domeny (*spoofing*). Na przykład rejestracja `v=spf1 include:mx.ovh.com ~all` wskazuje, że jedynie serwery poczty elektronicznej powiązane z Twoją ofertą mail OVHCloud mogą być uznane za zgodne z prawem przez serwer poczty przychodzącej. Możesz wprowadzić ten wpis w formie pola TXT lub w systemie automatycznej konfiguracji. 
>>
>> Aby dowiedzieć się więcej, zapoznaj się z naszą dokumentacją "[Dodaj pole SPF do konfiguracji domeny](/pages/web_cloud/domains/dns_zone_spf)".
>>
> **DKIM**
>> **D**omain**K**eys **I**dentified **M**ail <br><br>
>> Pozwala sprawdzić autentyczność domeny nadawcy i zapewnić integralność wysłanego e-maila. Wpis DKIM ma postać klucza składającego się z kilku znaków. Klucz DKIM jest dostarczany przez dostawcę poczty elektronicznej (jeśli jest on proponowany przez dostawcę). Możesz go podać w postaci pola TXT.
>>
>> Zapoznaj się z naszą dokumentacją "[Konfiguruj rekord DKIM](/pages/web_cloud/domains/dns_zone_dkim)", aby dowiedzieć się więcej.
>>
> **DMARC**
>> **D**omain-based **M**essage **A**uthentication, **R**eporting and **C**onformance <br><br>
>> Przyczynia się do uwierzytelniania e-maili przy użyciu SPF i/lub DKIM. Wartość ta zostanie Ci przyznana przez dostawcę poczty e-mail (jeśli taka funkcja jest oferowana przez dostawcę). Będzie ona przynajmniej powiązana z rekordem SPF lub DKIM.
>>
>> Zapoznaj się z naszą dokumentacją "[Konfiguracja rekordu DMARC w Twojej domenie](/pages/web_cloud/domains/dns_zone_dmarc)", aby dowiedzieć się więcej.

#### Rozszerzone wpisy <a name="extended-records"></a>

Select the record you want by clicking each of the following tabs.

> [!tabs]
> **TXT**
>> **T**e**XT** <br><br>
>> Pozwala dodać wybraną wartość w formacie tekstowym w strefie DNS Twojej domeny. Rekord ten jest często używany podczas weryfikacji/walidacji lub procesu bezpieczeństwa.
>>
>> > [!warning]
>> > 
>> > Wpis TXT jest ograniczony do 255 znaków. W niektórych przypadkach możesz jednak podzielić Twoją wartość na kilka rekordów. Skontaktuj się ze swoim dostawcą, jeśli żąda on od niego podania wartości przekraczającej rozmiar 255 znaków.
>> > 
>> > Limit ten nie istnieje jednak, jeśli przechodzisz przez funkcję `Modyfikacja w trybie tekstowym`{.action} opisaną w naszym przewodniku "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" (dla zaawansowanych użytkowników).
>>
> **SRV**
>> **S**e**RV**ice resource <br><br>
>> Umożliwia wskazanie adresu serwera zarządzającego usługą. Może na przykład wskazać adres serwera SIP lub adres serwera pozwalającego na automatyczną konfigurację programu pocztowego.
>>
> **CAA**
>> **C**ertification **A**uthority **A**uthorization <br><br>
>> Umożliwia wyświetlenie listy organizacji upoważnionych do wydawania certyfikatów SSL dla domeny. 
>>
>> > [!warning]
>> >
>> > Jeśli konfigurujesz wpis CAA dla domeny, ta konfiguracja będzie dotyczyć również **wszystkich subdomen** dla tej samej domeny.
>> >
>> > Jeśli używasz certyfikatu SSL Let's Encrypt dla swojej domeny na hostingu www OVHcloud i używasz rekordu CAA, ten ostatni uniemożliwi odnowienie certyfikatu SSL Let's Encrypt.
>>
> **NAPTR**
>> **N**ame **A**uthority **P**oin**T**e**R** <br><br>
>> Używane w telekomunikacji do kierowania zapytań wysyłanych przez mobilny terminal na serwer. Rekord SRV może być powiązany z dynamicznym generowaniem docelowych adresów URI (Uniform Resource Identifier).
>>
> **LOC**
>> **LOC**ation <br><br>
>> Używane, gdy podajemy informacje o położeniu geograficznym (np. szerokość geograficzna, długość geograficzna i wysokość).
>>
> **SSHFP**
>> **S**ecure **SH**ell **F**inger**P**rint <br><br>
>> Używane, gdy wpisujemy odcisk klucza publicznego SSH.
>>
> **TLSA**
>> **T**ransport **L**ayer **S**ecurity **A**uthentification <br><br>
>> Używane, gdy wpisujemy odcisk palca certyfikatu SSL/TLS. Umożliwi to zachowanie *hash* certyfikatu bezpośrednio w strefie DNS Twojej domeny poprzez rekord DNS.
>>
>> Rekord ten jest objęty protokołem **D**NS-based **A**uthentication of **N**amed **E**ntities (DANE).
>>
>> Protokół DANYCH pozwala klientowi (przeglądarce internetowej, klientowi poczty elektronicznej, klientowi FTP, klientowi SSH, etc.) sprawdzić rekord TLSA. W ten sposób zyskuje pewność, że certyfikat SSL/TLS używany dla danej domeny jest certyfikatem potwierdzającym tą samą nazwę domeny.
>>
>> W razie potrzeby sprawdź więcej szczegółów na stronie [**I**nternet **E**ngineering **T**ask **F**orce (**IETF**)](https://datatracker.ietf.org/doc/html/rfc6698){.external} (EN).
>>

#### Specjalne zastosowania: użycie rekordów CNAME <a name="cannamesecase"></a>

Niektórzy użytkownicy tworzą strefy DNS bezpośrednio dla subdomeny domeny (na przykład *subdomain-with-its-own-DNS-zone.domain.tld*). Reguła określona powyżej w zakładce "CNAME" w sekcji "[Rekordy wskazywania](#pointer-records)" stosuje się również w tym przypadku.

Strefa DNS jest utworzona dla subdomeny (w naszym przykładzie *subdomain-with-its-own-DNS-zone.domain.tld*), ta ostatnia jest wówczas traktowana jako pełna domena w jej strefie DNS.

W tym przypadku nie będziesz mógł utworzyć pola CNAME dla *subdomain-with-its-own-DNS-zone.domain.tld* w strefie DNS utworzonej dla tej domeny. Będziesz mógł jednak tworzyć pola CNAME, takie jak *subdomain.subdomain-with-its-own-DNS-zone.domain.tld* lub *xxx.subdomain-with-its-own-DNS-zone.domain.tld*.

## Sprawdź również

[Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)

[Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Dodawanie rekordu SPF podczas konfiguracji domeny](/pages/web_cloud/domains/dns_zone_spf)

[Zabezpieczenie domeny przed Cache Poisoning za pomocą DNSSEC](/pages/web_cloud/domains/dns_dnssec)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).