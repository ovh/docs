---
title: "Tutorial - Zainstaluj ręcznie Typo3"
excerpt: "Dowiedz się, jak ręcznie zainstalować CMS Typo3"
updated: 2024-03-28
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

**CMS** (**C**ontent **M**anagement **S**ystem) Typo3 umożliwia tworzenie złożonych i skalowalnych stron WWW dla firm każdej wielkości, od instytucjonalnych stron WWW po platformy e-commerce. Dzięki dużej społeczności programistów i szerokiej gamie rozszerzeń,  oferuje potężne narzędzia do personalizacji i rozszerzania strony zgodnie z Twoimi potrzebami.

**Dowiedz się, jak ręcznie zainstalować CMS Typo3 na hostingu OVHcloud.**

## Wymagania początkowe

- Posiadanie hostingu [OVHcloud](/links/web/hosting) zawierającego co najmniej jedną bazę danych.
- Posiadanie [domeny](/links/web/domains).
- Dostęp do [panelu klienta OVHcloud](/links/manager).

## W praktyce

### Przygotowanie do instalacji

Aby zainstalować CMS **Typo3** na Twoim [hostingu](/links/web/hosting), należy wykonać kilka czynności przygotowawczych.

Postępuj zgodnie z **wszystkimi krokami** opisanymi w tutorialu [Instalacja ręczna modułu CMS](/pages/web_cloud/web_hosting/cms_manual_installation), aby przejść do kolejnego etapu.

### Zakończ instalację ręczną

> [!primary]
>
> Przed kontynuowaniem instalacji wyczyść pamięć podręczną przeglądarki internetowej, aby uniknąć problemów z jej działaniem.
>

#### Przejdź na stronę Typo3 za pomocą przeglądarki

Wpisz nazwę domeny w pasku wyszukiwania przeglądarki internetowej.

Jeśli pliki źródłowe Typo3 zostały pomyślnie umieszczone w folderze głównym, pojawi się następująca strona:

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_one.png){.thumbnail}

Jak wspomniano, utwórz pusty plik o nazwie `FIRST_INSTALL` w katalogu, w którym umieściłeś swoje pliki i foldery Typo3. Wróć do przeglądarki internetowej i odśwież stronę. Jeśli pojawią się błędy, pojawi się poniższy ekran z opisem błędów.

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_2_error.png){.thumbnail}

Usuń błędy lub kliknij przycisk `Continue with errors`{.action}.

Pojawi się drugi etap instalacji.

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_2.png){.thumbnail}

Wprowadź informacje dotyczące systemu zarządzania bazami danych, a następnie kliknij przycisk `Continue`{.action}.

Pojawi się trzeci etap instalacji.

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_3.png){.thumbnail}

Wybierz nazwę bazy danych, której chcesz użyć na Twojej stronie WWW lub [utwórz nową](/pages/web_cloud/web_hosting/sql_create_database), a następnie kliknij przycisk `Continue`{.action}.

Pojawi się czwarty etap instalacji.

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_4.png){.thumbnail}

Wpisz nazwę swojej strony www oraz informacje o użytkowniku admin.

Pojawi się piąty i ostatni etap instalacji.

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_5.png){.thumbnail}

Przeczytaj informacje wyświetlane na ekranie i wybierz odpowiednią opcję:

- `Create empty starting page` : wybierz tę opcję, aby utworzyć domyślną stronę serwisu WWW. Po zatwierdzeniu tego etapu wpisz nazwę domeny w przeglądarce internetowej, aby uzyskać dostęp do witryny Typo3.
- `Take me straight to the backend` : wybierz tę opcję, aby zostać przekierowanym do dashboardu Twojej strony WWW Typo3. Za pomocą tego dashboardu będziesz musiał samodzielnie tworzyć strony WWW, zasilać ich treści i wiele więcej. Więcej informacji znajdziesz w [oficjalnej dokumentacji Typo3](https://docs.typo3.org/Home/GettingStarted.html){.external}.

Kliknij `Open the TYPO3 Backend`{.action}, aby potwierdzić wybraną właśnie opcję.

### Zakończenie

Właśnie ręcznie zainstalowałeś CMS Typo3 na Twoim hostingu OVHcloud. Po skonfigurowaniu strony www, dodaniu spersonalizowanych treści, spersonalizowaniu szablonu i zainstalowaniu wtyczek, Twoja strona Typo3 jest dostępna online za pośrednictwem Twojej domeny.

## Sprawdź również <a name="go-further"></a>

[Tutorial - Zainstaluj ręcznie WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Zainstaluj ręcznie Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Zainstaluj ręcznie Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Zainstaluj ręcznie PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

[Tutorial - Zainstaluj ręcznie Pico](/pages/web_cloud/web_hosting/cms_manual_installation_pico)

[Tutorial - Zainstaluj ręcznie Grav](/pages/web_cloud/web_hosting/cms_manual_installation_grav)

[Tutorial - Zainstaluj ręcznie SPIP](/pages/web_cloud/web_hosting/cms_manual_installation_spip)

[Tutorial - Zainstaluj ręcznie CMS na hostingu](/pages/web_cloud/web_hosting/cms_manual_installation)

[Tworzenie bazy danych na hostingu](/pages/web_cloud/web_hosting/sql_create_database)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Dołącz do [grona naszych użytkowników](/links/community).