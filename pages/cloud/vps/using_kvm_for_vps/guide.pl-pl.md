---
title: Używanie konsoli KVM z VPS
excerpt: Dowiedz się, jak uzyskać dostęp do serwera VPS przy użyciu funkcji KVM 
slug: kvm_na_serwerach_vps
section: Pierwsze kroki
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 30/08/2022**

## Wprowadzenie

Konsola KVM pozwala na bezpośrednie połączenie z serwerem VPS bez konieczności korzystania z zewnętrznego oprogramowania (terminal, Putty, itp.). Konsola ta jest dostępna w Panelu klienta OVHcloud lub w API OVHcloud.  

**Niniejszy przewodnik opisuje dwie metody dostępu do KVM.**

## Wymagania początkowe

- Jeden [VPS](https://www.ovhcloud.com/pl/vps/) na Twoim koncie OVHcloud.
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

### Logowanie do KVM w Panelu klienta OVHcloud

#### Aktualna gama VPS

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer w części `Prywatny serwer wirtualny`{.action}. W tej sekcji kliknij `...`{.action} po prawej stronie nazwy serwera VPS w polu "Twój VPS".

![Otwórz KVM](images/kvm-new1.png){.thumbnail}

#### Poprzednia gama VPS

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer w części `Prywatny serwer wirtualny`{.action}. W tej sekcji kliknij link skrócony o nazwie `KVM`{.action}.

![Kliknij przycisk](images/kvm-new2.png){.thumbnail}

### Korzystanie z konsoli KVM

Otworzy się ekran KVM. Jest to małe okno wskazujące połączenie z serwerem. Ponieważ okno jest dość małe, nawigowanie w interfejsie Twojego serwera za pomocą prętów przewijania może być bardzo trudne. Dlatego zalecamy otwarcie KVM w nowym oknie pełnym ekranem za pomocą przycisku "Otwórz w nowym oknie" w prawym dolnym rogu okna kontekstowego.

> [!primary]
>
> Jeśli masz problemy z podwójnym wpisem, może to być spowodowane automatyczną regulacją ekranu. Zalecamy otwarcie KVM w nowym oknie klikając na przycisk "Otwórz w nowym oknie".
> Jeśli nadal masz problemy z wyświetlaczem, zalecamy usunięcie z adresu URL części "auto". Jeśli adres URL to https://compute.sbg1.cloud.ovh.net:6080/vnc_auto.html?token=xxxxxxxxxxxx, musi się on zmienić na https://compute.sbg1.cloud.ovh.net:6080/vnc.html?token=xxxxxxxxxxxx (link może być inny niż ten podany przykład ilustruje tylko część adresu URL do usunięcia)
>

Połączenie z siecią

> [!primary]
>
> Klawiatura może mieć inny układ niż ty. Upewnij się, że to sprawdzić, ponieważ klawiatura może być AZERTY zamiast QWERTY, na przykład.
>

#### Zmiana ustawienia klawiatury

Możesz włączyć konfigurację klawiatury, którą wolisz, aby korzystanie z konsoli było bardziej praktyczne. Wprowadź następujące polecenie:

```bash
sudo dpkg-reconfigure keyboard-configuration
```

Otworzy się menu graficzne, które umożliwia wybranie modelu klawiatury.

![KVM](images/kvm_vps01.png){.thumbnail}

Użyj klawiszy strzałek, aby uzyskać dostęp do opcji zbliżonej do Twojego sprzętu, a następnie naciśnij "Enter". 

W kolejnym menu wybierz kraj.

![KVM](images/kvm_vps02.png){.thumbnail}

Trzecie menu pozwala określić rzeczywisty układ klawiatury.

![KVM](images/kvm_vps03.png){.thumbnail}

W zależności od dokonanego wyboru, po trzecim menu mogą pojawić się inne opcje.

Wróć do wiersza poleceń, wprowadź następującą komendę, aby wprowadzić zmiany:

```bash
sudo systemctl restart keyboard-setup
```

### Połączenie z KVM przez API

Zdarza się, że napotkasz problemy z połączeniem z KVM za pomocą panelu konfiguracyjnego OVHcloud, zwłaszcza w przypadku starszych wersji. W takim przypadku możesz użyć rozwiązania API. W tym celu zaloguj się przez API [OVHcloud](https://api.ovh.com/).

#### Na serwerze VPS 2014

Jeśli posiadasz serwer VPS 2014, może wystąpić *błąd 1 06*. Przegląd API za pomocą poniższego zaproszenia może rozwiązać ten problem.

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /vps/{serviceName}/openConsoleAccess
>> >
>>
>
> Parametry połączenia API:
>
>> > **serviceName**
>> >
>> >> ID serwera VPS, który wygląda jak vpsxxxxx.ovh.net
>> >
>> > **protocol** 
>> >
>> >> VNC
>


Pomimo pozytywnego powrotu API połączenie może trwać kilka minut, zanim port zostanie faktycznie otwarty.

Zalecamy użycie jednego z następujących klientów:

- [UltraVnc](https://www.uvnc.com/downloads/ultravnc.html){.external}
- [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/){.external}

Korzystaj ze szczegółowych informacji dostarczonych przez wywołanie API, aby zdalnie połączyć się z serwerem VPS za pomocą jednego z wyżej wymienionych klientów oprogramowania.

#### Na serwerze VPS 2016

W przypadku problemów z KVM, postępuj zgodnie z poleceniem API dotyczącym dostępu do KVM:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /vps/{serviceName}/getConsoleUrl
>> >
>>
>
> Parametry połączenia API:
>
>> > **serviceName**
>> >
>> >> ID serwera VPS, który wygląda jak vpsxxxxx.ovh.net
>

> [!primary]
>
> Jeśli nadal masz problemy z wyświetlaczem, zalecamy usunięcie z adresu URL części "auto". Jeśli adres URL jest (link dla Ciebie może być inny, przykład ten pokazuje tylko część adresu URL do usunięcia) https://compute.sbg1.cloud.ovh.net:6080/vnc_auto.html?token=xxxxxxxxxxxx to musi stać się https://compute.sbg1.cloud.ovh.net:6080/vnc.html?token=xxxxxxxxxxxx
>

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.