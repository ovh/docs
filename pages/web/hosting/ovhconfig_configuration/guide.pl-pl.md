---
title: 'Konfiguracja pliku .ovhconfig na hostingu'
slug: konfiguracja-pliku-ovhconfig
excerpt: 'Poznaj plik .ovhconfig i dowiedz się, jak go modyfikować'
section: 'Konfiguracja hostingu'
order: 03
---

**Ostatnia aktualizacja z dnia 03-01-2019**

## Wprowadzenie 

Możesz chcieć z różnych powodów zmienić konfigurację [hostingu](https://www.ovhcloud.com/pl/web-hosting/){.external}. Aby Ci to umożliwić, firma OVH udostępniła plik **.ovhconfig** pozwalający zmienić niektóre ustawienia.

**Poznaj plik .ovhconfig i dowiedz się, jak go modyfikować.**

## Wymagania początkowe

- Posiadanie [hostingu OVH](https://www.ovhcloud.com/pl/web-hosting/){.external} (z wyjątkiem Cloud Web)
- Posiadanie hasła użytkownika FTP umożliwiające dostęp do przestrzeni dyskowej 

## W praktyce

Zmieniając konfigurację pliku .ovhconfig na Twoim hostingu, zmieniasz jednocześnie konfigurację samego hostingu oraz Twojej strony WWW. Omyłkowe działanie mogłoby spowodować niedostępność Twojej strony WWW. Upewnij się, że konfiguracja wskazana w pliku jest kompatybilna z Twoją stroną WWW.

Możesz zmienić plik .ovhconfig na dwa sposoby: 

- **modyfikując ręcznie plik .ovhconfig**: to rozwiązanie wymagające wiedzy technicznej i połączenia z przestrzenią dyskową FTP. W tym przewodniku opiszemy tylko tę metodę.

- **za pomocą asystenta konfiguracji w Panelu klienta**: to rozwiązanie jest mniej techniczne i wymaga zalogowania do Panelu klienta, gdzie możesz wybrać zmiany, które chcesz przeprowadzić. Skorzystaj z instrukcji zawartych w przewodniku OVH: [Zmiana konfiguracji hostingu](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/){.external}.

Kontynuuj lekturę przewodnika, jeśli chcesz zmodyfikować ręcznie plik .ovhconfig. 

### Modyfikacja pliku .ovhconfig

#### Etap 1: zaloguj się do przestrzeni dyskowej

Przygotuj główny identyfikator FTP, hasło oraz adres serwera FTP. Następnie, przy użyciu tych informacji, zaloguj się do Twojej przestrzeni dyskowej. Jeśli potrzebujesz pomocy, skorzystaj z dokumentacji zatytułowanej [Logowanie do przestrzeni dyskowej](https://docs.ovh.com/pl/hosting/hosting_www_umieszczenie_strony_w_internecie/#2-logowanie-do-przestrzeni-dyskowej){.external}.

**Jeśli nie posiadasz wskazanych wyżej informacji**, zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i kliknij `Hosting`{.action}. Wybierz odpowiedni hosting i przejdź do zakładki `FTP - SSH`{.action}. Znajdziesz tam informacje potrzebne do zalogowania się. Jeśli nie posiadasz hasła FTP, zapoznaj się z instrukcjami zawartymi w przewodniku [Zmiana hasła do konta FTP](https://docs.ovh.com/pl/hosting/zmiana-hasla-konto-ftp/){.external}.

![ovhconfig](images/ovhconfig-step1.png){.thumbnail}

#### Etap 2: przywróć lub utwórz plik .ovhconfig

Po zalogowaniu do przestrzeni dyskowej możesz wyświetlić wszystkie aktualnie hostowane na niej pliki. Pozostań w katalogu głównym Twojego hostingu (oznaczonym „/”). Powinieneś w nim odnaleźć plik .ovhconfig.

![ovhconfig](images/ovhconfig-step2.png){.thumbnail}

Istnieją dwie możliwości:

- **plik .ovhconfig znajduje się w katalogu**: zapisz go na Twoim komputerze. Zalecamy wykonanie kopii przed przeprowadzeniem zmian w tym pliku. Kopia ta pozwoli Ci odzyskać oryginalny plik, gdybyś go potrzebował.
- **plik .ovhconfig nie znajduje się w katalogu**: utwórz plik lokalnie na komputerze i nazwij go „.ovhconfig”.

#### Etap 3: modyfikacja pliku .ovhconfig

Kiedy masz już plik .ovhconfig, możesz go edytować. W tym celu użyj programu typu edytor tekstu. Twój plik .ovhconfig powinien zawierać kod jak poniżej:

```php
app.engine=php
app.engine.version=8.0

http.firewall=none
environment=production

container.image=stable64
```

Wpisz wartości zmiennych odpowiadające konfiguracji, którą chcesz zastosować na Twoim hostingu. 

|Zmienna|Szczegóły|
|---|---|
|app.engine|Pozwala zmodyfikować silnik PHP używany przez hosting. Wpisz „php”, aby włączyć akcelerator PHP-FPM i „phpcgi”, aby go wyłączyć.|
|app.engine.version|Pozwala wybrać wersję PHP używaną przez hosting spośród [wersji oferowanych przez OVH](https://www.ovhcloud.com/pl/web-hosting/uc-programming-language/){.external}. Wpisz wybraną przez Ciebie wersję.|
|http.firewall|Pozwala włączyć lub wyłączyć [zaporę ogniową dostarczaną wraz z hostingiem OVH](https://www.ovhcloud.com/pl/web-hosting/options/){.external}. Wpisz „security”, aby go włączyć lub „none”, aby go wyłączyć.|
|environment|Pozwala zarządzać mechanizmem pamięci podręcznej dla plików statycznych Twojej strony WWW, a także przetwarzaniem błędów PHP. Wpisz „production”, aby zmaksymalizować buforowanie i ukryć błędy PHP lub „development”, aby pamięć podręczna nie była stosowana a błędy PHP były wyświetlane.|
|container.image|Pozwala modyfikować środowisko wykonawcze wykorzystywane przez hosting. Wpisz nazwę wybranego silnika. Wykaz silników możesz znaleźć w naszej dokumentacji: [Dostępne opcje konfiguracji środowiska uruchomieniowego](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/#dostepne-opcje-konfiguracji-srodowiska-uruchomieniowego_1){.external}.|

> [!warning]
>
> Jeśli wybierzesz środowisko wykonawcze "stable64", sprawdź, czy Twoja strona jest kompatybilna ze środowiskiem 64-bitowym.

Poniżej znajdziesz szczegółowe informacje dotyczące zastosowania pliku .ovhconfig:

```php
; ovhconfig
;
; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig

; __app.engine__
;
; values: php (php engine + opcache accelerator)
; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
;
;   php:
;       IMPORTANT: register_globals and magic_quotes_gpc are off for security
;       php optiones .htaccess (like php version) are ignored
;   phpcgi:
;       IMPORTANT this is a fallback to previous system
;       in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
;       (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
;   default: 8.0
; for phpcgi:
;   this options is ignored (= fallback in AUTO)
;
app.engine.version=8.0

; __http.firewall__ used to add application firewall  (filter http requests)
;
; values: none | security
; default: none
;
http.firewall=none

; __environment__
;
; values: production | development
;
;   production:
;       apache will maximise local cache
;       mod_expires will grow up TTL of js, css, pdf, images, video, audio
;       you can override it changing expiration explicitly in your .htaccess
;       feel free to look on our guide.
;   development:
;       no expiration is added, files are not locally in cache,
;       will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=production

; __container.image__
;
; values: legacy | stable | stable64
;
container.image=stable64
```

#### Etap 4: prześlij plik .ovhconfig do przestrzeni dyskowej

Gdy plik.ovhconfig zostanie zmodyfikowany, wystarczy tylko przesłać go na swoją przestrzeń dyskową. W tym celu, bez wylogowywania, pozostań w katalogu głównym Twojej przestrzeni dyskowej (oznaczonej „/”) i prześlij w to miejsce plik .ovhconfig, który właśnie zmodyfikowałeś. Jeśli plik już się tam znajduje, zastąp go.

### Zaawansowane użycie plików .ovhconfig

Jeśli zainstalowałeś na Twoim hostingu kilka stron WWW, z pewnością skonfigurowałeś kilka różnych katalogów dla domen w opcji MultiSite. Możesz chcieć z różnych powodów używać różnych wersji PHP dla różnych stron MultiSite.

W tym celu utwórz plik .ovhconfig dla jednej lub kilku stron MultiSite zawierających wybraną wersję PHP. Jeśli potrzebujesz pomocy, zapoznaj się z opisem operacji zawartym w sekcji [Modyfikacja pliku .ovhconfig](https://docs.ovh.com/pl/hosting/konfiguracja-pliku-ovhconfig/#modyfikacja-pliku-ovhconfig){.external}. Podczas pobierania i importowania pliku .ovhconfig do Twojej przestrzeni dyskowej zwróć uwagę, aby znalazł się on w katalogu głównym MultiSite. Możesz odnaleźć katalog główny Twoich stron MultiSite w Panelu klienta, w zakładce `MultiSite`{.action} wybranego hostingu.

> [!warning]
>
> Nie można określić drugiego środowiska wykonawczego. Uwzględnione jest jedynie środowisko podane w pliku .ovhconfig znajdującym się w katalogu głównym Twojej przestrzeni dyskowej.
> 

![ovhconfig](images/ovhconfig-step3.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
