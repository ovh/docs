---
title: "Tutorial - Zainstaluj ręcznie Pico"
excerpt: "Dowiedz się, jak ręcznie zainstalować CMS Pico"
updated: 2024-03-21
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Szybkie tworzenie stron WWW możliwe jest dzięki systemowi Pico **CMS** (**C**ontent **M**anagement **S**ystem). Zaprojektowany z myślą o tworzeniu i zarządzaniu treścią w prosty sposób za pomocą plików Markdown, Pico jest idealny do tworzenia osobistych stron WWW, portfolio lub projektów małych firm.

**Dowiedz się, jak ręcznie zainstalować CMS Pico na hostingu OVHcloud.**

## Wymagania początkowe

- Posiadanie hostingu [OVHcloud](/links/web/hosting).
- Posiadanie [domeny](/links/web/domains).
- Dostęp do [panelu klienta OVHcloud](/links/manager).

## W praktyce

### Przygotowanie do instalacji

Aby zainstalować CMS **Pico** na Twoim [hostingu](/links/web/hosting), należy wykonać kilka czynności przygotowawczych.

Postępuj zgodnie z**wszystkimi krokami** opisanymi w tutorialu [Instalacja ręczna modułu CMS](/pages/web_cloud/web_hosting/cms_manual_installation), aby przejść do kolejnego etapu.

### Zakończ instalację ręczną

> [!primary]
>
> Przed kontynuowaniem instalacji wyczyść pamięć podręczną przeglądarki internetowej, aby uniknąć błędów.
>

#### Przejdź do strony internetowej Pico za pomocą przeglądarki

Wpisz nazwę domeny w pasku wyszukiwania przeglądarki internetowej.

Jeśli pliki źródłowe Pico zostały pomyślnie umieszczone w folderze głównym, pojawi się następująca strona:

![Pico installation](/pages/assets/screens/other/cms/pico/welcome_page.png){.thumbnail}

Pico to CMS oparty na plikach, co oznacza, że cała konfiguracja i tworzenie treści odbywa się bezpośrednio poprzez modyfikację plików na serwerze. Poniżej przedstawiamy kroki, które należy wykonać, aby skonfigurować i spersonalizować stronę WWW Pico.

#### Zrozum strukturę katalogów Pico

Po zakończeniu instalacji w katalogu głównym Pico znajdziesz kilka folderów i plików. Najważniejsze z nich:

- `content/` : zawiera pliki Markdown
- `config/` : zawiera plik konfiguracyjny `config.yml` Pico
- `themes/` : zawiera szablony strony www
- `assets/` : zawiera zasoby statyczne takie jak obrazy, arkusze stylów CSS, skrypty JavaScript, etc.
- `plugins/` : zawiera wtyczki, których chcesz użyć

#### Konfiguracja podstawowa

**1. Konfiguracja strony WWW** : otwórz plik `config/config.yml` w edytorze tekstu. Skonfiguruj tutaj podstawowe ustawienia Twojej witryny sieci Web, takie jak tytuł, opis, adres URL lub motywy.

**2. Zmień tytuł i opis swojej strony www** : poszukaj w pliku `config/config.yml` linii dla `site_title:` i `site_description:`, aby zaktualizować tytuł i opis swojej strony www.

**3. Zmień tytuł i opis swojej strony www** : jeśli posiadasz określoną nazwę domeny, wyszukaj w pliku `config/config.yml` wiersz dla `base_url:`, aby zaktualizować nazwę domeny Twojej strony www. W przeciwnym razie pozostaw wartość `~` domyślną.

#### Dodaj zawartość

**1. Tworzenie stron** : Aby dodać nową stronę do serwisu WWW, utwórz nowy plik Markdown (.md) w folderze `content/`. Nazwa pliku określa adres URL strony. Na przykład `about.md` będzie dostępne pod adresem http://yourdomain.tld/about.

**2. Zapisz zawartość**: Otwórz plik Markdown w edytorze tekstu i zacznij zapisywać zawartość. Składnia Markdown służy do formatowania tekstu, tworzenia łączy, wstawiania obrazów itp. Na przykład, jeśli chcesz edytować stronę główną (home) serwisu WWW, otwórz plik `index.md` i wstaw dowolną zawartość.

**3. Sprawdź zawartość**: pliki programu Markdown muszą mieć prawidłowy nagłówek YAML. Jeśli nagłówek nie istnieje lub jest nieprawidłowo sformatowany, Pico może nie rozpoznać go jako prawidłowej strony. Przykładowy prawidłowy nagłówek YAML:

```bash
---
title: About
---
Your content here
```

#### Personalizacja szablonu

**1. Wybierz motyw**: Szablon Pico jest instalowany z szablonem domyślnym, ale możesz go pobrać z [oficjalnej strony Pico](https://picocms.org/themes/) lub utworzyć własny.

**2. Zmień motyw** : aby zmienić motyw, zaktualizuj sekcję `theme:` w pliku `config/config.yml` na nazwę folderu kompozycji, której chcesz użyć.

**3. Dostosuj motyw** : możesz edytować pliki kompozycji w `themes/yourtheme/`, aby dostosować wygląd Twojej strony WWW. Może to obejmować edycję plików HTML, Twig, CSS i JavaScript.

#### Dodawanie wtyczek

Pico pozwala na rozszerzenie swoich funkcji za pomocą wtyczek.

**1. Znajdź wtyczki** : sprawdź listę dostępnych wtyczek na [oficjalnej stronie Pico](https://picocms.org/plugins/).

**2. Zainstaluj wtyczkę** : pobierz wtyczkę i umieść ją w folderze `plugins/` Twojej instalacji Pico.

**3. Konfiguracja wtyczki**: niektóre wtyczki wymagają dodatkowej konfiguracji w `config/config.yml`. Postępuj zgodnie z instrukcjami dostarczonymi z wtyczką.

### Zakończenie

Właśnie ręcznie zainstalowałeś CMS Pico na Twoim hostingu OVHcloud. Po skonfigurowaniu strony www, dodaniu spersonalizowanych treści, spersonalizowaniu szablonu i zainstalowaniu wtyczek, Twoja strona www Pico jest dostępna online za pośrednictwem Twojej domeny.

## Sprawdź również <a name="go-further"></a>

[Tutorial - Zainstaluj ręcznie WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Zainstaluj ręcznie Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Zainstaluj ręcznie Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Zainstaluj ręcznie PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

[Tutorial - Zainstaluj ręcznie Typo3](/pages/web_cloud/web_hosting/cms_manual_installation_typo3)

[Tutorial - Zainstaluj ręcznie Grav](/pages/web_cloud/web_hosting/cms_manual_installation_grav)

[Tutorial - Zainstaluj ręcznie SPIP](/pages/web_cloud/web_hosting/cms_manual_installation_spip)

[Tutorial - Zainstaluj ręcznie CMS na hostingu](/pages/web_cloud/web_hosting/cms_manual_installation)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Dołącz do [grona naszych użytkowników](/links/community).