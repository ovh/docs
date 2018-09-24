---
title: 'Zmiana konfiguracji hostingu'
excerpt: 'Dowiedz się, jak zmienić konfigurację hostingu OVH'
id: '2149'
slug: zmiana_srodowiska_uruchomieniowego_dla_hostingu_www
section: 'Konfiguracja hostingu'
order: 3
---

**Ostatnia aktualizacja z dnia 24-09-2018**

## Wprowadzenie

W sieci istnieje bardzo wiele rodzajów stron WWW. 

Możesz uruchomić Twoją stronę WWW (bloga, sklep internetowy czy stronę prezentującą Twoją działalność) na **hostingu OVH**, o ile jest ona kompatybilna z [konfiguracją infrastruktury OVH](http://pro.ovh.net/infos/){.external}.

**Dowiedz się, jak zmienić konfigurację hostingu OVH w Panelu klienta.**

## Wymagania początkowe

- Posiadanie [hostingu OVH](https://www.ovh.pl/hosting/){.external} (z wyjątkiem Cloud Web)
- Dostęp do [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager)

## W praktyce

**Zmiana konfiguracji hostingu jest operacją wymagającą odpowiedniej wiedzy**: omyłkowe działanie mogłoby spowodować niedostępność Twojej strony WWW. Świadomość możliwych konsekwencji modyfikacji pozwoli Ci lepiej zrozumieć wprowadzane zmiany.

Zmieniając konfigurację hostingu, zmieniasz jednocześnie konfigurację Twojej strony WWW. Jeśli korzystasz z kilku hostingów w ramach infrastruktury OVH, upewnij się, że wybrana konfiguracja jest kompatybilna z Twoją stroną WWW.

> [!warning]
>
> Przed rozpoczęciem jakichkolwiek zmian, upewnij się, że operacja nie uniemożliwi dostępu do Twojej strony WWW. Jednak w przypadku trudności zalecamy skorzystanie z pomocy specjalisty. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „Sprawdź również”. 
> 

### Zmiana konfiguracji hostingu w Panelu klienta

#### Etap 1: zarządzanie konfiguracją hostingu

Przed rozpoczęciem operacji zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}, kliknij `Hosting`{.action} na pasku usług po lewej stronie, następnie wybierz nazwę odpowiedniego hostingu. Pozostań w zakładce `Informacje ogólne`{.action}, w sekcji `Konfiguracja` kliknij przycisk z trzema kropkami obok wersji PHP i wybierz `Zmień konfigurację`{.action}.

![hosting zmiana wersji php](images/change-hosting-configuration-step1.png){.thumbnail}

Jeśli przycisk `Zmień konfigurację`{.action} jest wyszarzony, możliwe jest, że trwa weryfikacja **głównej wersji PHP**. W takim przypadku obok wersji wyświetli się okrągły niebieski symbol oznaczający, że weryfikacja jest w toku. Odczekaj kilka minut, aby przycisk `Zmień konfigurację`{.action} stał się znowu aktywny.

![hosting zmiana wersji php](images/change-hosting-configuration-step2.png){.thumbnail}

#### Etap 2: zmiana konfiguracji hostingu

W oknie, które się pojawi, masz do wyboru dwie opcje. Wybierz opcję odpowiadającą operacji, którą chcesz przeprowadzić, następnie kliknij `Dalej`{.action}.

|Wybór|Szczegóły|
|---|---|
|„Powrót do poprzedniej konfiguracji”|Po zaznaczeniu tej opcji, wybierz konfigurację do odtworzenia obok przycisku `Wybór poprzedniej konfiguracji`. Opcja ta może być niedostępna, jeśli nie przeprowadzałeś zmian konfiguracji w przeszłości.|
|„Zmień bieżącą konfigurację”|Po zaznaczeniu tej opcji wybierz spośród poszczególnych pól modyfikacje do wprowadzenia w danej konfiguracji. Możesz sprawdzić dostępne modyfikacje w sekcji zatytułowanej [Dostępne opcje konfiguracji środowiska uruchomieniowego](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/#dostepne-opcje-konfiguracji-srodowiska-uruchomieniowego){.external}.|

> [!primary]
>
> Zmiana środowiska uruchomieniowego hostingu automatycznie resetuje sesje PHP.
> 

Kiedy wszystko jest gotowe, kliknij `Zatwierdź`{.action}, aby wdrożyć modyfikację. Odczekaj kilka chwil, zanim zmiany staną się widoczne.

![hosting zmiana wersji php](images/change-hosting-configuration-step3.png){.thumbnail}

### Dostępne opcje konfiguracji środowiska uruchomieniowego

Kiedy zmieniasz konfigurację hostingu, masz kilka opcji do wyboru. W dalszej części przewodnika znajdziesz szczegółowe informacje dotyczące poniższych zagadnień.

- [Framework](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/#framework){.external}
- [Wersja PHP](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/#wersja-php){.external}
- [Silnik PHP](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/#silnik-php){.external}
- [Tryb](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/#tryb){.external}

#### Framework

Zmiana frameworka umożliwia modyfikację niektórych parametrów technicznych Twojego hostingu. **Przed wprowadzeniem jakiejkolwiek zmiany upewnij się, że środowisko, które będziesz uruchamiać jest kompatybilne z Twoją stroną WWW.** 

|Środowiska|Legacy|stable|testing|jessie.i386|
|---|---|---|---|---|
|Powiązany obraz|Legacy|jessie.i386|jessie.i386|jessie.i386|
|Minimalna wersja PHP|4.4|5.3|5.3|5.3|
|Openssl|0.9.8o|1.0.1k (TLS1.2 compatible)|1.0.1k (TLS1.2 compatible)|1.0.1k (TLS1.2 compatible)|
|Rozszerzenie php imagick| - | Tak | Tak | Tak |
|Rozszerzenie php memcached (PHP 5.6)| Tak | Tak | Tak | Tak |
|Rozszerzenie php memcached (PHP 5.6)| - | Tak | Tak | Tak |
|Rozszerzenie php mongo (PHP 5.4, 5.5, 5.6)| - | Tak | Tak | Tak |
|Rozszerzenie mysqlnd (wyłącznie w utf-8)| - | Tak | Tak | Tak |
|Rozszerzenie redis| - | Tak | Tak | Tak |
|Opcache| Tak | Tak | Tak | Tak |
|Python|2.6|2.7 i 3.4|2.7 i 3.4|2.7 i 3.4|
|Ruby|1.8.7|2.1.5|2.1.5|2.1.5|
|Rails|2.3.5|4.1.8|4.1.8|4.1.8|
|Perl|5.10|5.20|5.20|5.20|
|git|1.7.2.5|2.1.4|2.1.4|2.1.4|

> [!primary]
>
> Środowisko „legacy” może być użyteczne w przypadku starszych stron WWW korzystających z poprzednich wersji PHP. Zalecamy używanie środowiska „stable”, które zawiera najnowsze aktualizacje. **Zanim rozpoczniesz wprowadzanie jakichkolwiek zmian, upewnij się, że Twoja strona WWW jest z nimi kompatybilna.**
> 

Po dokonaniu wyboru masz dwie możliwości przeprowadzenia zmiany:

- **w Panelu klienta**: postępuj zgodnie z instrukcjami zawartymi w sekcji niniejszego przewodnika zatytułowanej [Modyfikacja konfiguracji hostingu w Panelu klienta](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/#zmiana-konfiguracji-hostingu-w-panelu-klienta){.external};
- **modyfikując ręcznie plik .ovhconfig**: to rozwiązanie wymagające wiedzy technicznej i połączenia z przestrzenią dyskową FTP. Jeśli chcesz zmodyfikować plik **.ovhconfig**, postępuj zgodnie z instrukcjami zawartymi w przewodniku [Konfiguracja pliku .ovhconfig na hostingu](https://docs.ovh.com/pl/hosting/konfiguracja-pliku-ovhconfig/){.external}.

#### Wersja PHP

Aktualnie istnieje kilka wersji języka programowania PHP. Kolejne wersje zawierają różne poprawki, ponadto dodawane są nowe lub znikają stare funkcjonalności. OVH udostępnia najnowsze główne wersje PHP, których listę znajdziesz pod linkiem:<https://www.ovh.pl/hosting/php.xml>. 

W związku z faktem, że niektóre funkcjonalności mogą zniknąć w kolejnych wersjach, **przed wprowadzeniem jakichkolwiek zmian upewnij się, że nowa, wybrana wersja PHP jest kompatybilna ze stroną WWW.**

Istnieje kilka sposobów modyfikacji wersji PHP na Twoim hostingu:

- **w Panelu klienta**: postępuj zgodnie z instrukcjami zawartymi w sekcji niniejszego przewodnika zatytułowanej [Modyfikacja konfiguracji hostingu w Panelu klienta](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/#zmiana-konfiguracji-hostingu-w-panelu-klienta){.external};
- **modyfikując ręcznie plik na przestrzeni FTP**: to rozwiązanie wymagające wiedzy technicznej i połączenia z przestrzenią dyskową FTP.

Jeśli chcesz uzyskać więcej informacji o zmianie wersji PHP, skorzystaj z instrukcji zawartych w naszym przewodniku [Zmiana wersji PHP na hostingu OVH](https://docs.ovh.com/pl/hosting/konfiguracja_php_na_hostingu_www_ovh_2014/){.external}.

#### Silnik PHP

Wybór silnika PHP pozwala aktywować lub dezaktywować akcelerator PHP (PHP-FPM). Akcelerator został dostosowany do infrastruktury OVH w celu zwiększenia prędkości wykonywania skryptów PHP. W porównaniu do silnika phpcgi akcelerator PHP (PHP-FPM) pozwala zwiększyć wydajność do siedmiu razy. 

Istnieją dwa sposoby zmiany silnika PHP wykorzystywanego przez Twój hosting:

- **w Panelu klienta**: postępuj zgodnie z instrukcjami zawartymi w sekcji niniejszego przewodnika zatytułowanej [Modyfikacja konfiguracji hostingu w Panelu klienta](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/#zmiana-konfiguracji-hostingu-w-panelu-klienta){.external}; Aby aktywować akcelerator PHP (PHP-FPM), wybierz „php” jako silnik. Aby go dezaktywować, wybierz „phpcgi”;
- **modyfikując ręcznie plik .ovhconfig**: to rozwiązanie wymagające wiedzy technicznej i połączenia z przestrzenią dyskową FTP. Jeśli chcesz zmodyfikować plik **.ovhconfig**, postępuj zgodnie z instrukcjami zawartymi w przewodniku [Konfiguracja pliku .ovhconfig na hostingu](https://docs.ovh.com/pl/hosting/konfiguracja-pliku-ovhconfig/){.external}.

#### Tryb

Wybór trybu umożliwia zarządzanie pamięcią podręczną plików statycznych Twojej strony WWW (np. obrazów), jak również przetwarzanie błędów PHP (przydatne, gdy strona WWW wyświetla na przykład pustą stronę). Istnieją dwa tryby, które możesz aktywować:

|Tryb|Pamięć podręczna plików statycznych|Przetwarzanie błędów PHP|
|---|---|---|
|*Tryb produkcyjny*|Zwiększa do maksimum zapisywanie plików statycznych w pamięci podręcznej przeglądarek internetowych.|Błędy PHP nie wyświetlają się na Twojej stronie WWW.|
|*Tryb deweloperski*|Pamięć podręczna nie jest używana.|Błędy PHP są wyświetlane na Twojej stronie WWW.|

Zmianę trybu możesz wprowadzić na dwa sposoby:

- **w Panelu klienta**: postępuj zgodnie z instrukcjami zawartymi w sekcji niniejszego przewodnika zatytułowanej [Modyfikacja konfiguracji hostingu w Panelu klienta](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/#zmiana-konfiguracji-hostingu-w-panelu-klienta){.external};
- **modyfikując ręcznie plik .ovhconfig**: to rozwiązanie wymagające wiedzy technicznej i połączenia z przestrzenią dyskową FTP. Jeśli chcesz zmodyfikować plik **.ovhconfig**, postępuj zgodnie z instrukcjami zawartymi w przewodniku [Konfiguracja pliku .ovhconfig na hostingu](https://docs.ovh.com/pl/hosting/konfiguracja-pliku-ovhconfig/){.external}.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.