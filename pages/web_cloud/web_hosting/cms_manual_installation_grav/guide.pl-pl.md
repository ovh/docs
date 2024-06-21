---
title: "Tutorial - Ręczna instalacja modułu Grav"
excerpt: "Dowiedz się, jak zainstalować CMS Grav na hostingu OVHcloud"
updated: 2024-03-28
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>
  
## Wprowadzenie

**CMS** (**C**ontent **M**anagement **S**ystem) Grav umożliwia szybkie tworzenie stron WWW. Grav, zaprojektowany z myślą o zoptymalizowanym zarządzaniu treścią za pomocą plików Markdown, doskonale nadaje się do tworzenia prywatnych stron WWW lub projektów dla małych firm, bez uszczerbku dla jakości i personalizacji.

**Dowiedz się, jak ręcznie zainstalować CMS Grav na hostingu OVHcloud.**

## Wymagania początkowe

- Posiadanie hostingu [OVHcloud](/links/web/hosting).
- Posiadanie [domeny](/links/web/domains).
- Dostęp do [panelu klienta OVHcloud](/links/manager).

## W praktyce

### Przygotowanie do instalacji

Aby zainstalować CMS **Grav** na Twoim [hostingu](/links/web/hosting), należy wykonać kilka czynności przygotowawczych.

Postępuj zgodnie z **wszystkimi krokami** opisanymi w tutorialu [Instalacja ręczna modułu CMS](/pages/web_cloud/web_hosting/cms_manual_installation), aby przejść do kolejnego etapu.

### Zakończ instalację ręczną

> [!primary]
>
> Przed kontynuowaniem instalacji wyczyść pamięć podręczną przeglądarki internetowej, aby uniknąć problemów z jej działaniem.
>

#### Przejdź do strony WWW Grav za pomocą przeglądarki

Wpisz nazwę domeny w pasku wyszukiwania przeglądarki internetowej.

Jeśli pliki źródłowe Grav zostały poprawnie umieszczone w katalogu głównym, pojawi się strona `your-domain/admin`:

![Grav installation](/pages/assets/screens/other/cms/grav/first_page_config.png){.thumbnail}

Wypełnij formularz, aby utworzyć użytkownika administracyjnego, a następnie kliknij przycisk `Create User`{.action}, aby potwierdzić.

Po zalogowaniu do interfejsu administracyjnego Grav rozpocznij personalizację Twojej strony WWW.

### Personalizacja strony WWW Grav

Po zalogowaniu się jako administrator na pulpicie nawigacyjnym Grav możesz skorzystać z wielu opcji konfiguracji i personalizacji witryny sieci Web.

#### Ogólna konfiguracja strony www

##### Konfiguracja systemu

W menu głównym Grav kliknij przycisk `Configuration`{.action}, a następnie w zakładce `Site`{.action} zmień nazwę swojej strony www, ustaw język domyślny lub skonfiguruj kilka ustawień związanych ze swoją stroną www.

Włącz pamięć podręczną, aby zwiększyć wydajność witryny internetowej. Kliknij zakładkę `System`{.action}, a następnie `Caching`{.action}. Zidentyfikuj linię `Caching`{.action} i zaznacz `Yes`{.action}.

![Grav installation](/pages/assets/screens/other/cms/grav/activate_cache.png){.thumbnail}

##### Konfiguracja multimediów

W menu głównym Grav wybierz opcję `Configuration`{.action}, a następnie w zakładce `System`{.action} kliknij `Media`{.action}. Na tej stronie określ zachowanie multimediów Twojej strony WWW, takich jak obrazy, filmy lub dokumenty.

#### Zarządzanie treścią

##### Stron

W menu głównym Grav kliknij przycisk `Pages`{.action}, aby wyświetlić listę wszystkich stron Twojej strony WWW. Twórz nowe strony, edytuj istniejące oraz porządkuj strukturę witryny.

Aby wyświetlić i edytować zawartość strony, kliknij jej nazwę na liście. Na przykład kliknij przycisk `Home`{.action}, aby zmienić tytuł strony głównej i jej zawartość.

![Grav installation](/pages/assets/screens/other/cms/grav/list_pages.png){.thumbnail}

##### Motywów

W menu głównym Grav kliknij na `Theme`{.action}, aby zmienić wygląd swojej strony www. Zainstaluj nowe motywy lub wybierz już zainstalowany jako aktywny motyw.

Aby zmienić aktywny motyw, kliknij motyw z etykietą `Active Theme`.

![Grav installation](/pages/assets/screens/other/cms/grav/theme_active.png){.thumbnail}

Na stronie, która się wyświetla spersonalizuj swój aktywny motyw.

#### Kopie zapasowe i aktualizacja

##### kopii zapasowej

Zapisanie strony WWW pozwala na przywrócenie jej do wcześniejszego stanu w przypadku awarii.

W menu głównym Grav kliknij `Tools`{.action}, wybierz `Backup Now`{.action} na górze po prawej stronie ekranu, a następnie `Download Backup`{.action}, aby pobrać kopię zapasową strony www na Twój komputer. Po odświeżeniu strony `Backup` kopia zapasowa pojawi się na liście `Backup History`{.action}.

![Grav installation](/pages/assets/screens/other/cms/grav/backup_history.png){.thumbnail}

##### Aktualizacja

Aktualizacja systemu jest kluczowa dla bezpieczeństwa i wydajności Twojej strony WWW. W menu głównym Grav kliknij `Check for Updates`{.action}, aby wyświetlić dostępne aktualizacje.

### Zakończenie

Właśnie ręcznie zainstalowałeś CMS Grav na Twoim hostingu OVHcloud. Po skonfigurowaniu strony www, dodaniu spersonalizowanych treści, spersonalizowaniu szablonu i zainstalowaniu wtyczek, Twoja strona WWW Grav jest dostępna online za pośrednictwem Twojej domeny.

## Sprawdź również <a name="go-further"></a>

[Tutorial - Ręczna instalacja modułu WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Ręczna instalacja modułu Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Ręczna instalacja modułu Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Ręczna instalacja modułu PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

[Tutorial - Ręczna instalacja modułu Pico](/pages/web_cloud/web_hosting/cms_manual_installation_pico)

[Tutorial - Ręczna instalacja modułu Typo3](/pages/web_cloud/web_hosting/cms_manual_installation_typo3)

[Tutorial - Ręczna instalacja modułu SPIP](/pages/web_cloud/web_hosting/cms_manual_installation_spip)

[Tutorial - Ręczna instalacja modułu CMS na hostingu](/pages/web_cloud/web_hosting/cms_manual_installation)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Dołącz do [grona naszych użytkowników](/links/community).