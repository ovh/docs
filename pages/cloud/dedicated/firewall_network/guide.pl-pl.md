---
title: 'Konfiguracja zapory sieciowej Network Firewall'
excerpt: 'Dowiedz się, jak skonfigurować reguły firewalla w OVHcloud'
slug: network-firewall
section: 'Sieć & IP'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 31-05-2022**

## Wprowadzenie

Aby chronić swoją globalną infrastrukturę oraz serwery klientów, OVHcloud udostępniło zaporę ogniową, z możliwością wprowadzenia własnej konfiguracji, w pełni zintegrowaną z rozwiązaniem **Anty-DDoS (VAC)**: Network Firewall . Jest to rozwiązanie filtrujące ataki z sieci publicznej na usługi naszych klientów.

**Ten przewodnik wyjaśnia, jak skonfigurować zaporę Network Firewall w Panelu klienta.**


> [!primary]
>
> Więcej informacji o rozwiązaniu DDoS, znajdziesz na stronie: <https://www.ovhcloud.com/pl/security/anti-ddos/>.
> 

![Szczegóły dotyczące systemu VAC](images/vac-inside.png){.thumbnail}


## Wymagania początkowe

- Korzystanie z usługi OVHcloud ze zintegrowaną zaporą ogniową, Network Firewall: ([Serwer Dedykowany](https://www.ovhcloud.com/pl/bare-metal/){.external}, [serwer VPS](https://www.ovhcloud.com/pl/vps/){.external}, [instancje Public Cloud](https://www.ovhcloud.com/pl/public-cloud/){.external}, [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/){.external}, [Additional IP](https://www.ovhcloud.com/pl/bare-metal/ip/){.external}, etc.)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](https://eco.ovhcloud.com/pl/about/).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](https://eco.ovhcloud.com/pl/compare/).

## W praktyce

### Aktywacja zapory Network Firewall 

> [!primary]
>
> Network Firewall chroni adresy IP powiązane z serwerem.  Należy zatem skonfigurować reguły dla każdego adresu IP oddzielnie. Wprowadzenie wspólnej konfiguracji dla całego serwera nie jest możliwe.
> 

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), kliknij menu `Bare Metal Cloud`{.action} i otwórz sekcję `IP`{.action}. Kliknij `...`{.action}, aby aktywować zaporę na wybranym adresie IPv4.

![Aktywacja Network Firewall ](images/firewall_creation2022.png){.thumbnail}

Następnie wymagane jest potwierdzenie.

![Zatwierdzenie](images/creationvalid.png){.thumbnail}

Następnie kliknij przycisk `Aktywuj firewall`{.action} (1), po czym wybierz `Skonfiguruj firewall`{.action} (2) i rozpocznij konfigurację.

![Uruchomienie konfiguracji](images/activationconfig.png){.thumbnail}

Do dyspozycji masz **20 reguł dla każdego adresu IP**.

> [!warning]
>
> Firewall uruchamia się automatycznie przy każdym ataku DDoS i nie można go wyłączyć przed zakończeniem ataku.  Dlatego ważne jest, aby reguły firewalla były aktualne. 
> Domyślnie, żadne reguły nie są skonfigurowane, więc można ustanowić dowolne połączenia z serwerem. 
> Kiedy korzystasz z firewalla, pamiętaj o regularnym sprawdzaniu reguł (jeśli je ustawiłeś), nawet jeśli jest on w danej chwili dezaktywowany.
> 

> [!primary]
>
> - Fragmentacja UDP jest domyślnie zablokowana (DROP).  Jeśli używasz sieci VPN, to podczas aktywacji firewalla, pamiętaj, aby poprawnie skonfigurować maksymalną jednostkę transmisji (MTU). Na przykład na OpenVPN możesz zaznaczyć `MTU test`{.action}.
> - Reguły skonfigurowane w Network Firewallu nie są brane pod uwagę wewnątrz sieci OVHcloud.  Wprowadzone reguły nie mają wpływu na połączenia w wewnętrznej sieci OVHcloud.
>


### Konfiguracja zapory Network Firewall 

> [!warning]
> Network Firewall OVHcloud nie może być używany do otwierania portów na serwerze. Aby otworzyć porty na serwerze, musisz przejść przez firewall systemu operacyjnego zainstalowanego na serwerze<br>
> Więcej informacji znajdziesz w przewodnikach: [Konfiguracja firewalla w systemie Windows](https://docs.ovh.com/pl/dedicated/firewall-windows/) i [Konfiguracja firewalla w systemie Linux z systemem Iptables](https://docs.ovh.com/pl/dedicated/firewall-iptables/).
>

Dodawanie reguły odbywa się przez kliknięcie po prawej stronie `Dodaj regułę`{.action}.

![Dodawanie reguły](images/ajoutregle1.png){.thumbnail}

Dla każdej reguły możesz wybrać:

- priorytet (od 0 do 19, gdzie 0 jest pierwszą zastosowaną regułą);
- akcja (`Zezwalaj`{.action} lub `Odrzucaj`{.action});
- protokół
- IP (opcjonalnie);
- port źródłowy (tylko dla TCP);
- port docelowy (tylko dla TCP);
- opcje TCP (tylko dla TCP).

![Szczegóły dotyczące dodania reguły](images/ajoutregle4.png){.thumbnail}


> [!primary]
>
> - Priorytet 0: zaleca się autoryzację protokołu TCP dla wszystkich IP z opcją `Established`{.action}. Opcja `Established`{.action} umożliwia sprawdzenie, czy pakiet jest częścią poprzednio otwartej sesji (już zainicjowanej).  Jeśli na to nie zezwolisz, serwer nie otrzyma zwrotów protokołu TCP z żądań SYN/ACK.
> 
> - Priorytet 19: odrzucenie całego protokołu IPv4, jeśli nie zostanie spełniona żadna reguła przed 19-tą (ostatnią możliwą).
> 

### Przykład konfiguracji

Aby pozostawić otwarte tylko porty SSH (22), HTTP (80), HTTPS (443), UDP (na porcie 10000), zezwalając na ICMP, należy przestrzegać następujących zasad:

![Przykład konfiguracji.](images/exemple.png){.thumbnail}

Reguły są uporządkowane chronologicznie, od 0 (pierwsza odczytana reguła) do 19 (ostatnia odczytana reguła) i w tym porządku są uruchamiane dla pakietów. Reguły przestają być sprawdzane, w chwili gdy jedna z nich dotyczy odebranego pakietu.

Na przykład pakiet przeznaczony dla portu 80/TCP zostanie przechwycony przez regułę 2, wtedy kolejne reguły nie są już aplikowane.  Pakiet przeznaczony dla portu 25/TCP zostanie przechwycony tylko przy ostatniej regule (19), która zablokuje go, ponieważ OVHcloud nie zezwala na żadną komunikację na porcie 25 w poprzednich regułach.

> [!warning]
> Jak już wspomniano, powyższa konfiguracja jest tylko przykładem i powinna zostać użyta jako punkt odniesienia, jeśli reguły nie mają zastosowania do usług hostowanych na Twoim serwerze. Konieczne jest skonfigurowanie reguł firewalla w zależności od usług hostowanych na Twoim serwerze. Nieprawidłowa konfiguracja reguł firewall może spowodować zablokowanie prawidłowego ruchu i niedostępność usług serwera.
>

### Mitygacja ataków - Filtrowanie ataku DDoS - OVH Anty-DDoS

Istnieją trzy tryby filtrowania: automatyczne, stałe lub wymuszone.

**Automatyczne filtrowanie**: Dzięki temu trybowi ruch przechodzi przez system mitygacji tylko wtedy, gdy zostanie wykryty jako "nietypowy" w porównaniu do normalnego ruchu otrzymywanego przez serwer.

**Stałe filtrowanie**: Aktywując stałe filtrowanie, stosujesz pierwszy poziom stałego filtrowania przez sprzęt Shield.<br>
Cały ruch przechodzi przez system mitygacji zanim dotrze do serwera. Zalecamy ten tryb w przypadku usług będących przedmiotem częstych ataków.<br>
Pamiętaj, że Firewall Network nie powinien zostać utworzony/aktywowany, aby włączyć stałe filtrowanie dla Twojego IP.

Aby go aktywować, kliknij menu `Bare Metal Cloud`{.action} i otwórz `IP`{.action}. Następnie kliknij przycisk `...`{.action} po prawej stronie odpowiedniego IPv4 i wybierz `Filtrowanie: tryb stały`{.action}.

**Wymuszone filtrowanie**: Tryb ten jest włączany automatycznie po wykryciu ataku na serwer. Po włączeniu tego trybu nie można wyłączyć. W celu ochrony naszej infrastruktury, ochrona będzie aktywowana przez cały czas trwania ataku, aż do całkowitego zniszczenia infrastruktury.

> [!warning]
>
> W chwili gdy włącza się ochrona Anty-DDoS, Twoje reguły zdefiniowane w usłudze Network Firewall zostaną uaktywnione, nawet jeśli je wyłączyłeś. W przypadku dezaktywacji firewalla, pamiętaj o usunięciu reguł.
> 
> Pamiętaj, że tłumienie anty-DDoS nie może zostać wyłączone.

### Konfiguracja zapory Armor (Firewall Game)

> [!primary]
> Domyślnie firewall Armor jest wstępnie skonfigurowany z niektórymi zasadami, które OVHcloud ustalił podczas uruchamiania najpopularniejszych gier. Jednak w przypadku klientów posiadających serwer dedykowany Game możemy pójść o krok dalej i skonfigurować reguły dla portów.
>

Aby skonfigurować reguły portów w trybie Armor, należy najpierw zalogować się do Panelu klienta OVHcloud.<br>
Następnie przejdź do menu `Bare Metal Cloud`{.action} i otwórz sekcję `IP`{.action}. Kliknij `...`{.action} obok adresu IP serwera gier, a następnie `Konfiguracja firewall game`{.action}.

![Game_wall](images/GAMEwall2021.png){.thumbnail}

Na następnym ekranie kliknij przycisk `Dodaj regułę`{.action}, aby dodać regułę do Armor.

Do dyspozycji masz **30 reguł dla każdego adresu IP**.

![Konfiguruj_Armor](images/ConfigureArmor2021.png){.thumbnail}

Włącz porty zgodnie z Twoimi potrzebami na kolejnym ekranie i kliknij przycisk `Zatwierdź`{.action}, gdy zakończysz dodawanie reguł. Firewall Armor został już skonfigurowany.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.