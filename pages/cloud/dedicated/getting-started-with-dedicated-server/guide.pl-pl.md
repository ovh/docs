---
title: 'Pierwsze kroki z serwerem dedykowanym'
slug: pierwsze-kroki-z-serwerem-dedykowanym
excerpt: 'Poznaj podstawy korzystania z serwera dedykowanego'
section: 'Pierwsze kroki'
order: 1
---

**Ostatnia aktualizacja z dnia 28-08-2018**

## Wprowadzenie

Serwer dedykowany to fizyczny serwer zlokalizowany w jednym z naszych centrów danych. W przeciwieństwie do rozwiązań hostingowych (określanych jako „hosting współdzielony”), którymi zarządza OVH, w przypadku serwera dedykowanego to Ty jesteś w pełni odpowiedzialny za administrowanie nim.

**Poznaj podstawy korzystania z serwera dedykowanego.**

> [!warning]
>
> OVH oddaje do Twojej dyspozycji usługi, za które przejmujesz odpowiedzialność. Firma OVH nie ma dostępu do Twoich serwerów, nie pełni funkcji administratora i w związku z tym nie będzie mogła udzielić Ci wsparcia. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta.
> 
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji „Sprawdź również”.
>


## Wymagania początkowe

* Posiadanie [serwera dedykowanego](https://www.ovh.pl/serwery_dedykowane/){.external} widocznego w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} w sekcji `Dedykowane`{.action} > `Serwery dedykowane`{.action}


## W praktyce

### Logowanie do serwera

#### Linux

Jeśli konfigurujesz serwer po raz pierwszy, otrzymasz e-mail z hasłem dostępu root. Dostęp root umożliwia zalogowanie do serwera przez SSH - bezpieczny protokół komunikacji. Dostęp odbywa się przez okienko terminala poleceń (Linux lub MAC), a w systemie Windows za pomocą oprogramowania innych producentów (na przykład PuTTy).

Po otworzeniu terminala, wprowadź następujące polecenie, aby zalogować się do serwera. Tekst po symbolu @ zastąp wymaganymi informacjami (adres IP lub nazwa serwera). Nazwa serwera zawsze zaczyna się od **ns**.

- Przykład z użyciem adresu IP:

```sh
ssh root@IP_Twojego_serwera
```

- Przykład z nazwą serwera:

```sh
ssh root@nazwa_serwera
```

#### Windows

Jeśli konfigurujesz serwer po raz pierwszy, otrzymasz e-mail z hasłem dostępu administratora. Wprowadź hasło, aby zalogować się do serwera przez *Remote Desktop Protocol* (RDP). Po zalogowaniu przeprowadź wstępną konfigurację, postępując zgodnie z instrukcjami systemu Windows.

### Instalacja lub reinstalacja serwera dedykowanego

W tym celu przejdź do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} > `Informacje ogólne`, kliknij `...`{.action}, a następnie `Reinstaluj`{.action} w sekcji `System (OS)`.

![Przycisk Reinstalacja](images/reinstalling-your-server-01.png){.thumbnail}

W kolejnym oknie wybierz `Instalacja szablonu OVH`{.action} lub `Instalacja mojego szablonu`{.action}, po czym kliknij `Dalej`{.action}.

![Wybór szablonu do instalacji](images/reinstalling-your-server-02.png){.thumbnail}

Wybierz system operacyjny, który chcesz zainstalować, a następnie kliknij `Dalej`{.action}.

![Wybór trybu działania](images/reinstalling-your-server-03.png){.thumbnail}

Postępuj zgodnie z kolejnymi instrukcjami, po czym kliknij `Zatwierdź`{.action}, aby kontynuować instalację.


> [!primary]
>
> Niektóre systemy operacyjne lub platformy, takie jak Plesk i Windows, wymagają zakupu licencji przed instalacją. Licencję możesz kupić, przechodząc do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} > sekcji `Dedykowane`{.action} > `Licencje`{.action} lub u resellera. Licencję wgraj ręcznie za pośrednictwem systemu operacyjnego lub [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}. 
> 


### Zabezpieczenie serwera dedykowanego

Zgodnie z informacją w części „Wprowadzenie” niniejszego przewodnika, jesteś administratorem Twojego serwera dedykowanego. W związku z tym jesteś odpowiedzialny za Twoje dane i bezpieczeństwo serwera. Poniższe wskazówki pomogą Ci zabezpieczyć serwer:

* systematycznie aktualizuj system operacyjny;
* systematycznie aktualizuj oprogramowanie;
* zmień domyślny port SSH (port 22) na inny;
* zmień hasło root:
* na potrzeby codziennego użytkowania serwera utwórz nowego użytkownika systemu z ograniczonym dostępem.

Więcej informacji znajdziesz w naszym [przewodniku](https://docs.ovh.com/pl/dedicated/porady-zabezpieczanie-serwera-dedykowanego/){.external}.


### Konfiguracja sieci

#### Network Bridging

Mostkowanie sieci to operacja realizowana przez sprzęt sieciowy mająca na celu agregację sieci z dwóch (lub więcej) sieci komunikacyjnych albo dwóch (lub więcej) segmentów sieci.

Jest to konfiguracja, która jest najczęściej wykorzystywana w wirtualizacji, aby umożliwić każdej maszynie wirtualnej posiadanie własnego publicznego adresu IP.

Więcej informacji na ten temat znajdziesz w przewodniku [Network Bridging](https://docs.ovh.com/gb/en/dedicated/network-bridging//){.external}.

#### Alias IP

Alias IP to specjalna konfiguracja sieci serwera dedykowanego, która umożliwia przypisanie wielu adresów IP do jednego interfejsu sieciowego. Dzięki temu serwer może ustanowić kilka połączeń z siecią, z których każde będzie służyło do innego celu. 

Szczegółowe instrukcje dotyczące konfiguracji aliasu IP znajdziesz w [tym przewodniku](https://docs.ovh.com/pl/dedicated/network-ip-alias/){.external}.

#### Konfiguracja IPv6

Wszystkie serwery dedykowane OVH dysponują blokiem /64 adresów IPv6. Aby móc używać adresów tego bloku, należy przeprowadzić kilka zmian konfiguracji sieci. W tym celu skorzystaj z przewodnika: [Konfiguracja IPv6](https://docs.ovh.com/gb/en/dedicated/network-ipv6/){.external}.


### Rozwiązanie problemów z konfiguracją za pomocą IPMI

Wszystkie serwery dedykowane OVH posiadają konsolę IPMI (Intelligent Platform Management Interface), która uruchamiana jest w przeglądarce lub poprzez aplet Java. Konsola pozwala łączyć się bezpośrednio z serwerem, nawet jeśli nie posiada on połączenia sieciowego. Dzięki temu możliwe jest rozwiązanie problemów z połączeniem sieciowym do serwera oraz konfiguracją IP.

Więcej informacji znajdziesz w przewodniku [Korzystanie z IPMI dla serwerów dedykowanych](https://docs.ovh.com/pl/dedicated/uzywanie-ipmi-serwery-dedykowane/){.external}.


### Tryb Rescue

W przypadku problemów z Twoim serwerem pierwszym krokiem w procesie ich usunięcia jest ponowne uruchomienie serwera w trybie Rescue. Aby aktywować ten tryb, zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} i przejdź do strony serwera. Następnie przejdź do sekcji `Status serwera`{.action}, następnie `Informacje ogólne`{.action} i `Boot`{.action}. Kliknij przycisk `Zmień`{.action}, aby zmienić tryb uruchamiania.

![Zmień tryb uruchamiania](images/rescue-mode-01.png){.thumbnail}

W kolejnym oknie wybierz `Uruchom w trybie Rescue`{.action}, a następnie wybierz z rozwijanej listy `rescue64-pro`{.action}. Aby zakończyć, wpisz adres e-mail w polu tekstowym, a następnie kliknij Dalej.

![Rescue Pro 64](images/rescue-mode-03.png){.thumbnail}

Potwierdź wybrane przez Ciebie opcje na kolejnym ekranie, następnie zrestartuj serwer, aby zmiany stały się efektywne.

![Potwierdzenie restartu](images/rescue-mode-02.png){.thumbnail}

Twój serwer zostanie teraz zrestartowany w trybie Rescue. Po tej operacji otrzymasz dane do logowania przy użyciu adresu e-mail, który wcześniej podałeś. Aby wyłączyć tryb Rescue, zmień sposób uruchamiania serwera w sekcji Uruchom serwer z dysku twardego, następnie zrestartuj serwer.

Aby dowiedzieć się więcej o sposobie użycia trybu Rescue w celu rozwiązania problemów z Twoim serwerem, zapoznaj się z przewodnikiem o [trybie Rescue](https://docs.ovh.com/pl/dedicated/ovh-rescue/){.external}


#### Diagnostyka sprzętu (hardware)

Testy sprzętu dostępne w trybie Rescue pomogą Ci zdiagnozować fizyczne uszkodzenia mogące powodować usterki Twojego serwera.

Po zalogowaniu się do interfejsu sieciowego trybu Rescue możesz przeprowadzić testy następujących komponentów: 

* RAM;
* dyski twarde;
* macierz RAID;
* procesor;
* połączenie sieciowe.

#### Interfejs sieciowy trybu Rescue

![Interfejs sieciowy](images/rescue-mode-04.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.