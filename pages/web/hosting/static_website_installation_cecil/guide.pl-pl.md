---
title: "Tutorial - Instalacja i konfiguracja Cecil, generatora stron statycznych (SSG) w PHP"
slug: install-configure-cecil
excerpt: "Dowiedz się, jak Cecil pozwala na tworzenie strony statycznej przy użyciu nowoczesnego silnika szablonu (Jamstack)"
section: 'Tutoriale'
order: 04
---

**Ostatnia aktualizacja z dnia 19-01-2023**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

## Wprowadzenie

Tutorial wyjaśnia, jak zainstalować i skonfigurować [Cecil](https://cecil.app/){.external}. Jest to aplikacja napisana w PHP pozwalająca na generowanie i administrowanie statycznymi stronami WWW.

Strona www zawierająca statyczne strony internetowe gwarantuje lepszy czas ładowania się strony i większe bezpieczeństwo. Bez dynamicznych treści twoje strony są mocniejsze w obliczu ataków komputerowych. Wygenerowanie strony statycznej daje większą swobodę tworzenia wybranej strony www. Zyskujesz również czas, ponieważ nie będziesz musiał zaczynać od zera.

**Dowiedz się, jak Cecil pozwala na tworzenie strony statycznej za pomocą nowoczesnego silnika szablonu (Jamstack).**

## Wymagania początkowe

- Posiadanie [hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/) z dostępem SSH Dostęp ten pozwala na zainstalowanie w wierszu poleceń jednego lub kilku rozwiązań alternatywnych wobec tych oferowanych domyślnie w naszych pakietach hostingowych.
- Zapoznanie się z wprowadzaniem wiersza poleceń.
- Możliwość przesyłania plików przez FTP z klientem, takim jak [FileZilla](https://docs.ovh.com/pl/hosting/hosting_www_przewodnik_dotyczacy_korzystania_z_programu_filezilla/).
- Ustawienie strefy DNS w celu przekierowania domeny (lub subdomeny) na hosting. Jest to przydatne, jeśli chcesz hostować kilka stron WWW na [MultiSite](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu/) na Twoim hostingu.
- Zainstaluj wcześniej [Composer](https://getcomposer.org/){.external} z plikiem `composer.phar` w katalogu głównym hostingu lub w katalogu docelowym Twojej domeny.

## W praktyce

[hosting współdzielony](https://www.ovhcloud.com/pl/web-hosting/) pozwala na zgłaszanie domen lub subdomen w opcji MultiSite. Do wdrożenia Twojej strony WWW z systemem **Cecil** konieczna jest domena lub subdomena.

Aby pomóc Ci w zadeklarowaniu domeny lub subdomeny w opcji MultiSite na Twoim hostingu, wejdź na naszą stronę "[Udostępnienie hostingu między kilkoma stronami](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu/)".

### Utwórz katalog, w którym będą Twoje pliki

Po zalogowaniu się przez SSH do hostingu, utwórz katalog w katalogu głównym za pomocą polecenia:

```sh
mkdir mystaticwebsite
```

Zastąp `mystaticwebsite` wybraną przez Ciebie nazwą katalogu (bez akcentów i spacji).

Następnie przejdź do tego katalogu:

```sh
cd mystaticwebsite
```

Zastąp `mystaticwebsite` nazwą katalogu.

### Do pobrania

W katalogu, który właśnie utworzyłeś, pobierz Cecil:

```sh
curl -OL https://github.com/Cecilapp/Cecil/releases/latest/download/cecil.phar
```

### Instalacja

Uruchom instalację Cecila za pomocą następującego polecenia:

```sh
php cecil.phar new:site
```

Wpisz wymagane elementy:

- nazwa Twojej strony _(title)_
- _baseline_
- adres strony internetowej (np. `https://mywebsite.ovh`)
- opis strony

![Instalacja Cecil](images/static_website_installation_cecil01.png){.thumbnail}

Po wprowadzeniu tych elementów uruchom stronę, wpisując następujące polecenie:

```sh
php cecil.phar build
```

Wyświetlając zawartość katalogu, zobaczysz obecność katalogu `_site`. Katalog ten będzie zawierał wszystkie pliki HTML i assets:

![Instalacja Cecil](images/static_website_installation_cecil02.png){.thumbnail}

Teraz możesz zobaczyć wynik wyświetlając nazwę Twojej domeny:

![Instalacja Cecil](images/static_website_installation_cecil03.png){.thumbnail}

#### Konfiguracja wskazania domeny lub subdomeny

Aby zobaczyć wynik Twojej strony w przeglądarce, zmień wskazanie Twojej domeny lub subdomeny w katalogu `_site` utworzonym poprzednio podczas instalacji **Cecil**.

Jeśli Twoja domena lub subdomena jest zainstalowana w OVHcloud, zapoznaj się z naszymi przewodnikami dotyczącymi [konfiguracji DNS](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/) i uruchomienia [MultiSite na Twoim hostingu](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu/).

### Konfiguracja strony

Ogólne informacje dotyczące Twojej strony mogą być skonfigurowane w pliku `config.yml`:

```sh
nano config.yml
```

Zastąp Twoje domyślne informacje i zapisz plik.

![Plik konfiguracji YAML](images/static_website_installation_cecil04.png){.thumbnail}

### Utwórz nową stronę

Tworzenie stron zawierających dane strony odbywa się poprzez pliki w formacie _Markdown_. Te strony można spersonalizować. **Cecil** zawiera silnik _template_ [Twig](https://twig.symfony.com/){.external} który jest używany domyślnie z _framework_ [Symfony](https://symfony.com/){.external}.

foldery i pliki są zorganizowane w następujący sposób:

- `assets`: zawiera elementy graficzne, audio i video, skrypty JavaScript i style (CSS, Sass) 
- `layouts` : katalog, w którym będą _templates_
- `strona`: miejsce, gdzie będą Twoje pliki _Markdown_
- `_site`: katalog, który zawiera wygenerowane pliki i który jest wskazywany przez Twoją domenę
- `static`: wszystkie pliki statyczne typu PDF

#### Utwórz plik _Markdown_ w wierszu poleceń

W katalogu głównym strony wpisz następujące polecenie:

```sh
php cecil.phar new:page mypage.md
```

Następnie plik `mypage.md` jest tworzony w katalogu `/pages`.

Zastąp `mypage` nazwą swojej strony.

![Instalacja Cecil](images/static_website_installation_cecil05.png){.thumbnail}

#### Wygeneruj pliki statyczne

Wpisz następujące polecenie w katalogu głównym:

```sh
php cecil.phar build
```

Twój plik znajduje się w katalogu `_site/mypage/`:

![Instalacja Cecil](images/static_website_installation_cecil06.png){.thumbnail}

Możesz wyświetlić go na Twoim serwerze, wpisując adres URL strony, a następnie `/mypage/`:

![Wynik przeglądarki](images/static_website_installation_cecil07.png){.thumbnail}

### Personalizacja plików strony

#### Zmiana dla serwera

Edycja plików _Markdown_ może odbywać się bezpośrednio na serwerze hostingowym. W ofercie [hosting Performance](https://www.ovhcloud.com/pl/web-hosting/performance-offer/) dostęp SSH pozwala na korzystanie z protokołu [GNU nano](https://nano-editor.org/){.external}, [vi](https://ex-vi.sourceforge.net/){.external} lub [vim](https://www.vim.org/){.external}.
Zrzuty ekranu z niniejszego tutoriala przeprowadzono w **GNU nano**.

Edytuj plik `mypage.md` znajdujący się w katalogu `pages`, wpisując następujące polecenie, jeśli znajdujesz się w katalogu głównym Twojej strony:

```sh
 nano pages/mypage.md
```

Zastąp `mypage` nazwą swojej strony.

![Edycja pliku w GNU nano](images/static_website_installation_cecil08.png){.thumbnail}

Dodaj kilka linii zgodnie z składnią _Markdown_:

![Dodaj zawartość do pliku](images/static_website_installation_cecil09.png){.thumbnail}

Usuń pliki w cache za pomocą polecenia:

```sh
php cecil.phar clear
```

Zbuduj swoje strony po wykonaniu kopii zapasowej pliku:

```sh
php cecil.phar build
```

Następnie wróć na stronę, aby zobaczyć wynik:

[Strona zaktualizowana](images/static_website_installation_cecil10.png){.thumbnail}

#### Zmiana dla Twojego stanowiska pracy

Jeśli wolisz używać Twojego zwykłego edytora kodu, zaloguj się z klientem FTP do Twojego serwera, aby pobrać pliki na komputerze:

![Do pobrania z FileZilla](images/static_website_installation_cecil11.png){.thumbnail}

Teraz możesz edytować pliki I.D.E. w swoim repozytorium:

![Wyświetlanie w Visual Studio Code](images/static_website_installation_cecil12.png){.thumbnail}

Wystarczy przesłać na serwer pliki zmienione lub nowe pliki i *rebuilder*, aby móc udostępniać swoje strony online.

### Dodaj stronę wygenerowaną w menu swojej strony

Aby dodać tę nową stronę do menu strony internetowej, ręcznie zmodyfikuj nagłówek pliku `.md`, dodając następujący wiersz:

```sh
menu: main
```

### Podsumowanie

**Cecil** jest narzędziem, które pozwala na skuteczne tworzenie strony statycznej z plików *Markdown*, języka znacznika prostszego do wdrożenia niż HTML. Organizacja plików Markdown warunkuje hierarchię Twoich stron www.<br/>
Korzystanie z silnika szablonu, bardzo popularnego wśród deweloperów WWW, pozwoli Ci łatwo znaleźć wiele źródeł w Internecie, aby zaprojektować profesjonalny interfejs graficzny.

## Sprawdź również

[Oficjalna strona aplikacji Cecil](https://cecil.app/){.external}

Un [przewodnik na temat formatu Markdown](https://www.markdownguide.org/){.external}

Nasz [Przewodnik dotyczący korzystania z FileZilla](https://docs.ovh.com/pl/hosting/hosting_www_przewodnik_dotyczacy_korzystania_z_programu_filezilla/)
