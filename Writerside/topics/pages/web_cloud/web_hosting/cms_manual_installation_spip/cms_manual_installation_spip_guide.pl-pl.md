---
title: "Tutorial - Zainstaluj ręcznie SPIP"
excerpt: "Dowiedz się, jak ręcznie zainstalować CMS SPIP"
updated: 2024-03-28
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

**CMS** (**C**ontent **M**anagement **S**ystem) SPIP to rozwiązanie odpowiednie dla stron redakcyjnych, takich jak czasopisma internetowe, gazety i witryny instytucjonalne. Dzięki modułowej architekturze i konfigurowalnym systemom szkieletów SPIP umożliwia projektowanie stron WWW o wielu funkcjach, oferując jednocześnie dużą dowolność personalizacji.

**Dowiedz się, jak ręcznie zainstalować CMS Spip na hostingu OVHcloud.**

## Wymagania początkowe

- Posiadanie hostingu [OVHcloud](hosting.) zawierającego co najmniej jedną bazę danych.
- Posiadanie [domeny](domains.).
- Dostęp do [panelu klienta OVHcloud](manager.).

## W praktyce

### Przygotowanie do instalacji

Aby zainstalować CMS **Spip** na Twoim [hostingu](hosting.), należy wykonać kilka czynności przygotowawczych.

Postępuj zgodnie z **wszystkimi krokami** opisanymi w tutorialu [Instalacja ręczna modułu CMS](cms_manual_installation1.), aby przejść do kolejnego etapu.

### Zakończ instalację ręczną

> [!primary]
>
> Przed kontynuowaniem instalacji wyczyść pamięć podręczną przeglądarki internetowej, aby uniknąć problemów z jej działaniem.
>

#### Przejdź do strony WWW Spip za pomocą przeglądarki

Wpisz `your_domain/ecrire` w pasku wyszukiwania przeglądarki internetowej, aby rozpocząć instalację strony www Spip. Pojawi się następująca strona:

![Spip installation](installation_first_step.png){.thumbnail}

Wybierz język Twojej strony WWW Spip i kliknij na `Next`{.action}, aby potwierdzić. Pojawi się następujący ekran:

![Spip installation](installation_second_step.png){.thumbnail}

Wpisz informacje, aby zalogować się do Twojego DBMS (np. MySQL). Po pomyślnym zalogowaniu się do bazy danych zostanie wyświetlony następujący ekran:

![Spip installation](installation_third_step.png){.thumbnail}

Wybierz bazę danych, której chcesz użyć na Twojej stronie WWW lub [utwórz nową](sql_create_database1.). Wybierz prefiks dla tabel w bazie danych. Domyślnie używany jest prefiks `spip`. Kliknij na `Next`{.action}, aby potwierdzić informacje. Pojawi się następujący ekran:

![Spip installation](installation_fourth_step.png){.thumbnail}

Wprowadź wymagane informacje i kliknij na `Next`{.action}, aby potwierdzić. Pojawi się następujący ekran:

![Spip installation](installation_fifth_step.png){.thumbnail}

Ekran wyświetla listę dostępnych wtyczek do Twojej strony WWW i informuje, że instalacja Spip przebiegła pomyślnie.

### Zakończenie

Właśnie ręcznie zainstalowałeś CMS Spip na Twoim hostingu OVHcloud. Twoja strona WWW Spip jest dostępna online za pośrednictwem Twojej domeny. Aby zalogować się do panelu administratora witryny Spip, wpisz `your_domain/ecrire` w pasku wyszukiwania przeglądarki internetowej.

## Sprawdź również <a name="go-further"></a>

[Tutorial - Zainstaluj ręcznie WordPress](cms_manual_installation_wordpress1.)

[Tutorial - Zainstaluj ręcznie Joomla!](cms_manual_installation_joomla1.)

[Tutorial - Zainstaluj ręcznie Drupal](cms_manual_installation_drupal1.)

[Tutorial - Zainstaluj ręcznie PrestaShop](cms_manual_installation_prestashop1.)

[Tutorial - Zainstaluj ręcznie Pico](cms_manual_installation_pico1.)

[Tutorial - Zainstaluj ręcznie Typo3](cms_manual_installation_typo31.)

[Tutorial - Zainstaluj ręcznie Grav](cms_manual_installation_grav1.)

[Tutorial - Zainstaluj ręcznie CMS na hostingu](cms_manual_installation1.)

[Tworzenie bazy danych na hostingu OVHcloud](sql_create_database1.)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](partner.).
 
Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.