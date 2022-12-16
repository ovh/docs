---
title: "Ogranicz dostęp przez IP do Panelu klienta OVHcloud"
slug: ovhcloud-control-panel-ip-restriction
excerpt: "Dowiedz się, jak zabezpieczyć Twoje konto OVHcloud ograniczając dostęp do adresów IP"
section: Bezpieczeństwo
order: 03
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 13-12-2022**
  
## Wprowadzenie
  
OVHcloud daje do Twojej dyspozycji opcje służące zwiększeniu bezpieczeństwa Twojego Panelu klienta OVHcloud i Twoich usług.

W szczególności możesz ograniczyć dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) do niektórych adresów IP.
Uruchomienie tej opcji, w połączeniu z zabezpieczeniem Twojego konta przez [weryfikację dwuetapową](https://docs.ovh.com/pl/customer/zabezpieczenie-konta-za-pomoca-2FA/), pozwala na optymalne zabezpieczenie Twojego panelu klienta OVHcloud przed ewentualnymi próbami włamania.

**Dowiedz się, jak zabezpieczyć konto OVHcloud ograniczając dostęp do adresów IP**

> [!warning]
>
> Ograniczenie dostępu z adresu IP i/lub weryfikacja dwuetapowa zabezpiecza dostęp do Panelu klienta OVHcloud, z którego możesz zamawiać, zarządzać, odnawiać lub usuwać usługi OVHcloud. Opcje te nie zabezpieczają Twoich usług samodzielnie, w przypadku których należy zastosować określone środki bezpieczeństwa.
>
  
## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Zapoznanie się z [zaleceniami dotyczącymi zarządzania hasłem dostępu do konta](https://docs.ovh.com/pl/customer/zarzadzanie-haslem/).
  
## W praktyce

### Etap 1 - pobranie publicznych adresów IP upoważnionych do dostępu do Panelu klienta OVHcloud

Istnieją dwa rodzaje adresów IP:

- **Publiczne adresy IP**: są widoczne w całej sieci internetowej. Są one wykorzystywane na przykład przez punkt dostępu/box w Internecie, aby mieć adres internetowy umożliwiający dostęp do całej sieci.
- **Prywatne adresy IP**: nie widoczne i nie nadające się do wykorzystania w sieci internetowej, są one przypisane do sieci lokalnej. Przykład ten pokazuje, że w przypadku każdego podłączonego do niego urządzenia (komputer, smartfon, tablet, itp.), Twój box internetowy przydziela prywatny adres IP. Punkt dostępowy/box internetowy umożliwia tym urządzeniom korzystanie z publicznego adresu IP w celu uzyskania dostępu do Internetu. Adresy IP są łatwe do rozpoznania, ponieważ zaczynają się od 10.0.X.X, 172.16.X.X lub 192.168.X.X (gdzie wartości X mieszczą się w zakresie od 0 do 255).

Aby skorzystać z opcji ograniczenia IP w Panelu klienta OVHcloud, należy wpisać **tylko** Twój publiczny adres IP.

Aby uzyskać publiczny adres IP urządzenia, które będzie uprawnione do dostępu do Panelu klienta OVHcloud, przejdź na stronę [whatismyip.com](https://www.whatismyip.com/){.external} (nie zarządzany przez OVHcloud).

Przypisz do wiadomości adres IP, który się wyświetli, po czym powtórzyj operację dla każdego urządzenia, który będzie miał dostęp do Twojego Panelu klienta OVHcloud.

Jeśli używasz sieci 4G/5G jako uzupełnienie, pamiętaj o pobraniu również adresu IP tej sieci (tych sieci).

> [!warning]
>
> Większość Dostawców Internetu (ISP) przydziela dynamiczny adres IP **dynamiczne** do swojego punktu dostępowego do internetu/box. Dynamiczne adresy IP zmieniają się podczas restartu box lub co 24/48 godziny. Niektóre dostawcy usług internetowych mogą jednak przydzielić Ci adresy IP **stałe** na żądanie.
>
> W przypadku połączenia 3G/4G/5G adresy IP są systematycznie **dynamiczne**.
>
> **Przed** wprowadzeniem ograniczenia dla adresu IP w Panelu klienta OVHcloud, sprawdź u swojego dostawcy usług internetowych, czy odzyskane wcześniej adresy IP to rzeczywiście adresy IP **stałe**. W przeciwnym razie ryzykowałbyś szybką utratę dostępu do Panelu klienta OVHcloud, deklarując dynamiczny adres IP.
>

### Etap 2 - wprowadzenie ograniczenia dostępu dla adresu IP

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). Kliknij na Twoje `nazwisko i imię` w prawym górnym rogu **następnie** na Twoje `tim` w niebieskiej kolumnie, która pojawi się po prawej stronie.

![Access from Manager](images/ip1.png){.thumbnail}

Następnie kliknij zakładkę `Bezpieczeństwo`{.action}, aby przejść na następującą stronę:

![Access from Manager](images/ip2.png){.thumbnail}

Kliknij polecenie `Włącz`{.action} po prawej stronie `Ograniczenie dostępu przez IP`.

#### Prezentacja interfejsu

![Access from Manager](images/ip3.png){.thumbnail}

Istnieją dwie sekcje dotyczące wprowadzania ograniczeń dla adresu IP:

- **Domyślna reguła**. Pole to pozwala na:
    - odmówić dostępu do wszystkich adresów IP z wyjątkiem adresów uprzednio zadeklarowanych jako **autoryzowanych** w drugiej sekcji *IP skonfigurowanych*. 
    - zezwolić na dostęp do wszystkich adresów IP z wyjątkiem adresów uprzednio zadeklarowanych jako **odmówionych** w drugiej sekcji *IP skonfigurowanych*.
    > Zaznacz kratkę `Alert`{.action}, jeśli chcesz otrzymywać powiadomienia na adres e-mail do kontaktu, po przeprowadzeniu nieautoryzowanej próby logowania do panelu klienta.

- **skonfigurowane IP**. Pole to pozwala na zadeklarowanie adresów IP, które będą przedmiotem ograniczenia lub upoważnienia do dostępu. Umożliwia również wyświetlenie wcześniej wprowadzonych reguł.

> [!alert]
>
> Uwaga przed kontynuowaniem operacji.
>
> W sekcji `Domyślna reguła`{.action} nie zatwierdź **nigdy** domyślnej reguły w statusie `Odrzucony`{.action} **bez wcześniejszej zgody** poprawnie i wcześniej co najmniej jeden z publicznych adresów IP w sekcji `skonfigurowane IP` domyślnie. 
>
> W przeciwnym razie blokujesz **absolutnie wszystkie publiczne adresy IP (w tym twoje)** bez żadnych wyjątków. Nikt już nie będzie miał dostępu do Twojej [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i przeprowadź procedurę administracyjną, aby odblokować Twoją sytuację.
>
> Bądźcie więc niezwykle czujny w tej kwestii.
>

#### Odrzuć wszystkie adresy IP z wyjątkiem uprawnionych adresów

Aby zezwolić na dostęp do Panelu klienta OVHcloud wyłącznie dla jednego lub kilku uprawnionych adresów IP, kliknij przycisk `Dodaj ograniczenie`{.action}.

> W kolejnych zrzutach ekranów IP **192.0.2.0** zostanie zastąpione adresem IP, które Cię interesuje.
> 

![Add allow rule](images/ip4.png){.thumbnail}

W oknie, które się otworzy, wprowadź publiczny adres IP, który chcesz autoryzować w formularzu `IP`{.action}. Zaznacz kratkę `Alert`{.action}, jeśli chcesz zostać powiadomiony e-mailem o próbach logowania za pośrednictwem tego adresu IP, po czym pozostaw `Reguła`{.action} na statusie `Autoryzowany`{.action}.

Kliknij przycisk `Dalej`{.action} i sprawdź adres IP oraz regułę przed kliknięciem `Zatwierdź`{.action}.

![Add allow rule](images/ip5.png){.thumbnail}

Reguła powinna pojawić się w sekcji `Skonfigurowane IP`.

![Add allow rule](images/ip6.png){.thumbnail}

> [!primary]
>
> **Przed** kontynuowaniem operacji opisanych w tym etapie, powtórzyć powyższą operację dla wszystkich pozostałych adresów IP, które chcesz autoryzować, aby uzyskać dostęp do Panelu klienta OVHcloud.
>

Po **wszystkie** publicznych adresów IP podanej w sekcji `Skonfigurowane IP`, przejdź do sekcji `Domyślna reguła`, do reguły `Odrzucony`{.action}. Zaznacz kratkę `Alert`{.action}, jeśli chcesz zostać powiadomiony e-mailem o próbach logowania, następnie kliknij `Zatwierdź`{.action}.

![Add allow rule](images/ip7.png){.thumbnail}

> Od tej chwili **tylko** dostęp do Panelu klienta OVHcloud mogą uzyskać publiczne adresy IP, które zostały wcześniej autoryzowane w sekcji `Skonfigurowane IP`.

#### Autoryzuj wszystkie adresy IP z wyjątkiem niektórych adresów

Opcja ograniczenia dostępu dla adresu IP pozwala również na zezwolenie wszystkim adresom IP na dostęp do Panelu klienta OVHcloud, z wyjątkiem niektórych adresów, które wcześniej zidentyfikowałeś jako nieuprawnione.

Aby zablokować dostęp do Panelu klienta OVHcloud dla jednego lub kilku adresów IP, w sekcji `Skonfigurowane IP` kliknij przycisk `Dodaj ograniczenie`{.action}.

![Add deny rule](images/ip9.png){.thumbnail}

W oknie, które się otworzy, wprowadź publiczny adres IP, który chcesz zablokować w polu `IP`{.action}. Zaznacz kratkę `Alert`{.action}, jeśli chcesz zostać powiadomiony e-mailem o próbach logowania za pomocą tego adresu IP, następnie przejdź do `Reguła`{.action} na status `Odrzucony`{.action}.

Kliknij przycisk `Dalej`{.action}, sprawdź adres IP oraz regułę, zanim klikniesz `Zatwierdź`{.action}.

![Add deny rule](images/ip10.png){.thumbnail}

Reguła powinna pojawić się w sekcji `Skonfigurowane IP`.

![Add deny rule](images/ip11.png){.thumbnail}

> [!primary]
>
> **Przed*** wykonaniem operacji opisanych w tym etapie należy powtórzyć operację dla wszystkich pozostałych adresów IP, które chcesz zablokować dostęp do Panelu klienta OVHcloud.
>

Po wprowadzeniu wszystkich publicznych adresów IP w sekcji `Skonfigurowane IP`, w sekcji `Domyślna reguła` pozostaw regułę w statusie `Autoryzowany`{.action}. Zaznacz kratkę `Alert`{.action}, jeśli chcesz zostać powiadomiony e-mailem o próbach logowania, następnie kliknij `Zatwierdź`{.action}.

![Add deny rule](images/ip12.png){.thumbnail}

> Od tej pory **wszystkie** publiczne adresy IP mogą mieć dostęp do Panelu klienta OVHcloud, **z wyjątkiem** adresów zgłoszonych w sekcji `Skonfigurowane IP`.

## Sprawdź również

[Wprowadzić weryfikację dwuetapową w Panelu klienta OVHcloud](https://docs.ovh.com/pl/customer/zabezpieczenie-konta-za-pomoca-2FA/)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>. 