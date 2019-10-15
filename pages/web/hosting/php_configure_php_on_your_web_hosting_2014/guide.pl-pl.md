---
title: 'Zmiana wersji PHP na hostingu'
slug: konfiguracja_php_na_hostingu_www_ovh_2014
excerpt: 'Dowiedz się, jak zmienić wersję PHP na hostingu OVH'
id: '1207'
section: PHP
---

**Ostatnia aktualizacja z dnia 04-10-2018**

## Wprowadzenie

W sieci istnieje bardzo wiele stron WWW. Twój [hosting](https://www.ovh.pl/hosting/){.external} umożliwia Ci hostowanie wybranej strony WWW, o ile jest ona kompatybilna z [konfiguracją infrastruktury OVH](https://cluster028.hosting.ovh.net/infos/){.external}. Istnieje możliwość, że będziesz chciał zmodyfikować wersję PHP używaną przez Twój hosting.

**Dowiedz się, jak zmienić wersję PHP na hostingu OVH.**

## Wymagania początkowe

- Posiadanie [hostingu OVH](https://www.ovh.pl/hosting/){.external} (z wyjątkiem Cloud Web)
- W zależności od wybranej metody zmiany wersji PHP, posiadanie dostępu do interfejsu zarządzania usługą hostingu WWW w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager) lub posiadanie informacji umożliwiających zalogowanie do przestrzeni dyskowej 

## W praktyce

Aktualnie istnieje kilka wersji języka programowania PHP. Kolejne wersje zawierają różne poprawki, ponadto dodawane są nowe lub znikają stare funkcjonalności. OVH udostępnia najnowsze główne wersje PHP, których listę znajdziesz pod linkiem:<https://www.ovh.pl/hosting/php.xml>. 

W związku z faktem, że niektóre funkcjonalności mogą zniknąć w kolejnych wersjach, **przed wprowadzeniem jakichkolwiek zmian upewnij się, że nowa, wybrana wersja PHP jest kompatybilna ze stroną WWW.**

### Etap 1: sprawdzenie kompatybilności strony WWW z wersją PHP

OVH zapewnia instalację najnowszych wersji PHP na swoich serwerach, jednak to klient, jako webmaster, zobowiązany jest do sprawdzenia, czy jego strona WWW jest aktualna i kompatybilna z najnowszymi wersjami PHP. W zależności od rodzaju Twojej strony WWW, istnieją dwie metody weryfikacji jej kompatybilności:

**Używasz strony zbudowanej w oparciu o Content Management System (CMS)**, np. WordPress lub Joomla! : 

- skorzystaj z oficjalnej dokumentacji stworzonej przez producenta używanego przez Ciebie CMS; 
- uzyskaj informacje dotyczące wymagań technicznych niezbędnych do prawidłowego działania Twojego CMS oraz instrukcję przeprowadzenia jego aktualizacji;
- jeśli jest to konieczne, zaktualizuj CMS i upewnij się, czy nowa wersja jest kompatybilna z hostingiem OVH.

**Używasz strony zbudowanej w oparciu o spersonalizowane rozwiązanie**: 

- skontaktuj się z webmasterem, który zbudował stronę;
- znajdź więcej informacji o migracji do nowych wersji w oficjalnej dokumentacji PHP dostępnej pod tym linkiem: <http://php.net/manual/en/appendices.php>;
- jeśli jest to konieczne, zaktualizuj kod Twojej strony WWW i upewnij się, czy jest kompatybilny z hostingiem OVH.

Możesz również sprawdzić wersję PHP aktualnie używaną przez Twój hosting. W tym celu wykorzystaj jedną z dwóch możliwych metod: 

|Metoda|Opis |
|---|---|
|Za pośrednictwem Panelu klienta|Zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}, kliknij `Hosting`{.action} na pasku usług po lewej stronie, następnie wybierz odpowiedni hosting. Przejdź do zakładki `Informacje ogólne`{.action} i sprawdź wersję PHP w sekcji **Ogólna wersja PHP**. Jeśli pojawiło się niebieskie kółko aktualizacji, odczekaj kilka minut, aż aktualizacja wersji się zakończy.|
|Za pomocą skryptu|Utwórz skrypt **.php** zawierający jedynie kod `<?php phpinfo(); ?>`. Następnie umieść go na Twojej przestrzeni dyskowej w katalogu WWW a następnie wywołaj go za pomocą adresu URL.|

![phpversion](images/change-php-version-step1.png){.thumbnail}

Jeśli nie jesteś w stanie sprawdzić, czy Twoja strona WWW jest kompatybilna z nową wersją PHP, możesz spróbować cofnąć aktualną wersję do wersji poprzedniej chociaż **co do zasady tego nie polecamy**. Wybierając to rozwiązanie, podejmujesz bowiem ryzyko spowodowania usterki w działaniu Twojej strony WWW. Należy również pamiętać, że nawet jeśli strona wyświetla się po tej zmianie, usterce może ulec jedna z funkcjonalności. 

Kiedy jesteś gotowy do zmiany wersji PHP, przejdź do kolejnego etapu.

### Etap 2: zmiana wersji PHP na hostingu OVH

Istnieją dwa sposoby modyfikacji wersji PHP na Twoim hostingu:

- **za pomocą asystenta konfiguracji w Panelu klienta**: to rozwiązanie jest mniej techniczne i wymaga zalogowania do Panelu klienta, gdzie możesz wybrać nową wersję PHP. Skorzystaj z instrukcji zawartych w przewodniku OVH: [Zmiana konfiguracji hostingu](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/){.external}, aby przeprowadzić tę operację;

- **modyfikując ręcznie plik na przestrzeni dyskowej**: to rozwiązanie wymagające wiedzy technicznej i połączenia z przestrzenią dyskową FTP w celu zmodyfikowania pliku „ovhconfig”. Skorzystaj z instrukcji zawartych w przewodniku OVH: [Konfiguracja pliku .ovhconfig na hostingu WWW](https://docs.ovh.com/pl/hosting/konfiguracja-pliku-ovhconfig/){.external}.

Modyfikacja wersji PHP za pomocą pliku .htaccess nie jest już możliwa w najnowszych ofertach [hostingu WWW OVH](https://www.ovh.pl/hosting//){.external}. Komenda umożliwiająca zmianę wersji PHP w pliku .htaccess nie pozwala używać najnowszych wersji PHP w naszej infrastrukturze. Aby zmienić wersję PHP, należy zatem użyć pliku „.ovhconfig”. Jeśli potrzebujesz wsparcia, skorzystaj z dokumentacji OVH [Konfiguracja pliku .ovhconfig na hostingu WWW](https://docs.ovh.com/pl/hosting/konfiguracja-pliku-ovhconfig/){.external}.

## Sprawdź również

[Zmiana konfiguracji hostingu](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/){.external}

[Konfiguracja pliku .ovhconfig na hostingu WWW](https://docs.ovh.com/pl/hosting/konfiguracja-pliku-ovhconfig/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.