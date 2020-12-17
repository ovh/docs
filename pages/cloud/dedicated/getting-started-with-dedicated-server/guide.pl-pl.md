---
title: 'Pierwsze kroki z serwerem dedykowanym'
slug: pierwsze-kroki-z-serwerem-dedykowanym
excerpt: 'Poznaj podstawy korzystania z serwera dedykowanego'
section: 'Pierwsze kroki'
order: 1
---

**Ostatnia aktualizacja z dnia 2 kwietnia 2020 r**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

## Wprowadzenie

Serwer dedykowany to fizyczny serwer zlokalizowany w jednym z naszych centrów danych. W przeciwieństwie do rozwiązań hostingowych (określanych jako "hosting współdzielony"), którymi zarządza OVHcloud, w przypadku serwera dedykowanego to Ty ponosisz całkowitą odpowiedzialność za administrowanie nim.

**Poznaj podstawy korzystania z serwera dedykowanego**

<iframe width="560" height="315" src="https://www.youtube.com/embed/I2G6TkKg0gQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, za które przejmujesz odpowiedzialność. Firma OVH nie ma dostępu do Twoich serwerów, nie pełni funkcji administratora i w związku z tym nie będzie mogła udzielić Ci wsparcia. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta.
>
> Oddajemy w Twoje ręce przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji „Sprawdź również”.
>

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/){.external}
- Połączenie przez SSH (dostęp root) z systemem Linux lub jako administrator z systemem Windows
- Zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager)

## W praktyce

Po skonfigurowaniu pierwszego serwera dedykowanego możesz wybrać system operacyjny do zainstalowania.

### Instalacja lub reinstalacja serwera dedykowanego

W prosty sposób możesz przeprowadzić reinstalację serwera i wybrać inny model systemu operacyjnego w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager). W zakładce `Informacje ogólne`{.action} kliknij przycisk `...`{.action} obok `systemu (OS)`, a następnie `Zainstaluj`{.action}.

![Przycisk Reinstalacja](images/reinstalling-your-server-00.png){.thumbnail}

Na następnym ekranie wybierz `Zainstaluj szablon OVH`{.action} (aby korzystać z jednego z naszych modeli instalacyjnych) lub `Zainstaluj jeden z Twoich szablonów`{.action} (aby korzystać z Twojego szablonu), a następnie kliknij `Dalej`{.action}.

![Wybór modelu](images/reinstalling-your-server-02.png){.thumbnail}

Wybierz system operacyjny, który chcesz zainstalować i kliknij `Dalej`{.action}".

![Wybór operacyjny](images/reinstalling-your-server-03.png){.thumbnail}

Jeśli musisz zmienić układ partycji systemu operacyjnego, zaznacz kratkę "Personalizacja konfiguracji partycji" i kliknij `Dalej`{.action}.

![Spersonalizuj konfigurację partycji](images/SSH_02.png){.thumbnail}

Po zakończeniu korekt kliknij Dalej, aby `uzyskać dostęp`{.action} do strony podsumowania.

### Dodanie klucza SSH (opcjonalnie)

Jeśli instalujesz system operacyjny Linux, możesz dodać klucz SSH do ostatniego etapu procesu instalacji.

![Spersonalizuj konfigurację partycji](images/SSH_03.png){.thumbnail}

Jeśli klucz SSH jest już zarejestrowany, pojawia się on w rozwijanym menu pod `Kluczami SSH` na dole. Jeśli nie, najpierw należy dodać jeden w sekcji "Moje usługi".

Aby to zrobić, otwórz pasek boczny klikając swoją nazwę w prawym górnym rogu i użyj skrótu `Produkty i usługi`{.action}.

![Spersonalizuj konfigurację partycji](images/SSH_13.png){.thumbnail}

W sekcji "Moje usługi" przejdź do zakładki `Klucze SSH`{.action} i kliknij `Dodaj klucz SSH`{.action}.

![Spersonalizuj konfigurację partycji](images/SSH_14.png){.thumbnail}

Ponieważ chodzi o instalację serwera dedykowanego (lub VPS), z rozwijanego menu wybierz "Dedykowany".

W nowym oknie wprowadź ID (wybraną nazwę) i klucz (typu RSA, ECDSA lub Ed25519) w odpowiednich polach.

![Spersonalizuj konfigurację partycji](images/SSH_12.png){.thumbnail}

Aby uzyskać szczegółowe wyjaśnienie dotyczące tworzenia kluczy SSH, zapoznaj się z [tym przewodnikiem](https://docs.ovh.com/pl/public-cloud/tworzenie-kluczy-ssh/).


> [!primary]
>
> Niektóre systemy operacyjne lub platformy, takie jak Plesk i Windows, wymagają nabycia licencji przed instalacją. Licencję można kupić u OVHcloud[ ](https://www.ovhcloud.com/pl/bare-metal/os/) lub u pośrednika. Następnie wprowadź ją ręcznie za pośrednictwem systemu operacyjnego lub [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager). Licencje możesz zarządzać na Panelu konfiguracyjnym w sekcji `Bare Metal Cloud`{.action} pod `Licencjami`{.action}. W tej sekcji możesz również zamawiać licencje (przez przycisk `Zamów`{.action} po lewej stronie) lub dodać własną licencję serwera SQL lub Windows SPLA (przez przycisk `Dodaj licencję SPLA`{.action} po lewej stronie).
>

### Połączenie z serwerem

#### Linux

Po zakończeniu instalacji otrzymasz e-mail z hasłem dostępu root. Dostęp root umożliwia zalogowanie do serwera przez SSH - bezpieczny protokół komunikacji. Dostęp do serwera odbywa się przez okienko terminala poleceń (Linux lub MAC) lub przez oprogramowanie innych producentów w systemie Windows (na przykład: PuTTy).

Po otworzeniu terminala wprowadź następującą komendę, aby połączyć się z serwerem, zastępując tekst po symbolu @ wymaganymi informacjami (adres IP lub nazwa serwera). Nazwa serwera zawsze zaczyna się od*ns*.

**Przykład z adresem IP**

```sh
ssh root@IP_Twojego_serwera
```

**Przykład z nazwą serwera**

```sh
ssh root@nazwa_serwera
```

#### Windows

Po zakończeniu instalacji otrzymasz e-mail z hasłem dostępu administratora (root). Użyj tych danych do logowania się do serwera przez RDP (****emote ****Desktop ****Protocol). Po zalogowaniu Windows poprowadzi Cię przez całą początkową instalację.


### Bezpieczeństwo serwera dedykowanego

Zgodnie z informacją w części „Wprowadzenie” niniejszego przewodnika, jesteś administratorem Twojego serwera dedykowanego. W związku z tym jesteś odpowiedzialny za Twoje dane i bezpieczeństwo serwera. Poniższe wskazówki pomogą Ci zabezpieczyć serwer:

* systematycznie aktualizuj system operacyjny;
* systematycznie aktualizuj oprogramowanie;
* zmień domyślny port SSH (port 22) na inny;
* zmień hasło root;
* stwórz nowego użytkownika systemu z ograniczonym dostępem do codziennego użytku.

Więcej informacji znajdziesz w naszym [przewodniku](../porady-zabezpieczanie-serwera-dedykowanego/){.external}.

### Konfiguracja sieci

#### Network Bridging

Mostkowanie sieci to operacja realizowana przez sprzęt sieciowy mająca na celu agregację sieci z dwóch (lub więcej) sieci komunikacyjnych albo dwóch (lub więcej) segmentów sieci. Tryb bridge'a różni się od routingu, który pozwala sieciom komunikować się niezależnie, jednocześnie pozostając oddzielonym.

Jest to konfiguracja, która jest najczęściej wykorzystywana w wirtualizacji, aby umożliwić każdej maszynie wirtualnej posiadanie własnego publicznego adresu IP.

Więcej informacji znajdziesz w naszym przewodniku: [Tryb bridge IP](https://docs.ovh.com/gb/en/dedicated/network-bridging/){.external}.

#### Alias IP

Alias IP to specjalna konfiguracja sieci serwera dedykowanego, która umożliwia przypisanie wielu adresów IP do jednego interfejsu sieciowego.  Dzięki temu serwer może ustanowić kilka połączeń z siecią, z których każde będzie służyło do innego celu. 

Szczegółowe instrukcje dotyczące konfiguracji aliasu IP znajdziesz w przewodniku [Konfiguracja adresu IP jako aliasu](../network-ip-alias/).

#### Konfiguracja IPv6

Wszystkie serwery dedykowane OVHcloud zawierają blok /64 IPv6. Aby korzystać z adresów tego bloku, należy wprowadzić zmiany w konfiguracji sieci. Sprawdź nasz przewodnik: [Konfiguracja IPv6 na serwerze dedykowanym](../siec-ipv6/).


### Naprawa

OVHcloud uruchamia wszystkie swoje serwery dedykowane za pomocą konsoli IPMI (Intelligent Platform Management Interface), która jest uruchamiana w przeglądarce lub za pomocą apletu Java i pozwala na bezpośrednie połączenie z serwerem, nawet jeśli nie ma on połączenia sieciowego. Pozwala to na rozwiązanie problemów, które mogły spowodować odłączenie Twojego serwera.

Więcej informacji znajdziesz w naszym przewodniku: [Korzystanie z IPMI dla serwerów dedykowanych](../uzywanie-ipmi-serwery-dedykowane/).

### Tryb Rescue

W przypadku problemów z serwerem pierwszym krokiem w procesie rozwiązywania problemów jest uruchomienie serwera w trybie rescue. Aby włączyć tryb Rescue, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager) i przejdź do strony Twojego serwera. W menu `Informacje ogólne` kliknij przycisk `...`{.action}, a następnie `Zmień`{.action}, aby zmienić tryb uruchamiania.

![Zmodyfikuj wybór uruchamiania](images/rescue-mode-01.png){.thumbnail}

Na następnym ekranie wybierz `Uruchom w trybie`{.action} Rescue i wybierz `rescue64-pro`{.action} z rozwijanej listy. Wpisz adres e-mail w polu tekstowym, a następnie kliknij `Dalej`{.action}. Jeśli zostawisz pole pustego e-maila, adres e-mail przypisany do Twojego konta OVHcloud jest używany domyślnie.

![Rescue Pro 64](images/rescue-mode-03.png){.thumbnail}

Potwierdź wybrane przez Ciebie opcje na kolejnym ekranie, następnie zrestartuj serwer, aby zmiany stały się efektywne.

![Potwierdzenie restartu](images/rescue-mode-02.png){.thumbnail}

Twój serwer zostanie teraz zrestartowany w trybie Rescue. Po tej operacji otrzymasz dane do logowania przy użyciu adresu e-mail, który podałeś. Aby wyłączyć tryb Rescue, zmodyfikuj ponownie netboot, aby przywrócić go na `Booter na dysku twardym`{.action}, a następnie zrestartuj serwer.

Aby uzyskać więcej informacji na temat korzystania z trybu Rescue w celu rozwiązania problemów z Twoim serwerem, zapoznaj się z przewodnikiem dotyczącym [trybu Rescue](../ovh-rescue/).

#### Diagnostyka sprzętu

Testy sprzętu dostępne w trybie Rescue pomogą Ci zdiagnozować usterki sprzętowe mogące powodować problemy na Twoim serwerze.

Po zalogowaniu się do interfejsu sieciowego trybu Rescue możesz przeprowadzić testy następujących komponentów:

* RAM
* Dyski twarde
* Macierz RAID
* Procesor
* Połączenie sieciowe

#### Interfejs sieciowy trybu Rescue

![Interfejs www](images/rescue-mode-04.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
