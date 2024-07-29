---
title: "Przeniesienie strony WWW Xara do OVHcloud"
excerpt: "Dowiedz się, jak migrować Twoją stronę WWW Xara i powiązane z nią usługi do OVHcloud"
updated: 2024-07-29
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Tutorial ten krok po kroku wyjaśnia, jak migrować Twoją stronę WWW Xara i wszystkie powiązane z nią usługi do OVHcloud.

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce tutorial, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Niemniej jednak w przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego dostawcy](/links/partner) lub [oficjalna strona Xara Web designer](https://www.xara.com/webdesigner-plus/){.external}. Niestety firma OVHcloud nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) tego tutoriala.
>

**Dowiedz się, jak przenieść Twoją stronę WWW Xara i powiązane z nią usługi do OVHcloud.**

## Wymagania początkowe

- Dostęp do interfejsu administracyjnego Xaraa

## W praktyce

### Etap 1: tworzenie kopii zapasowej plików i bazy danych Twojej strony WWW z modułem Xara

Pierwszy etap polega na pobraniu wszystkich plików powiązanych z Twoją stroną WWW Xara. Dotyczy to również plików Xara oraz Twojej bazy danych, jeśli taka istnieje. Więcej informacji można znaleźć na stronie "[Exporting a Website](https://webdesigner.xara.com/bhavtest/test1/xara_desktop/product_support/web_features/exporting_website.html?rhhlterm=website){.external}" lub na etapie 3 niniejszego przewodnika "[Przeniesienie strony WWW i powiązanych z nią usług do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".

### Etap 2: przeniesienie Twojej strony WWW Xara do OVHcloud

Po wykonaniu kopii zapasowej plików oraz bazy danych Twojej strony WWW Xara prześlij je na Twój hosting WWW OVHcloud. Jeśli nie posiadasz jeszcze hostingu OVHcloud, postępuj zgodnie z etapem 1 niniejszego przewodnika "[Migracja strony WWW i powiązanych z nią usług do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".

#### Etap 2.1: transfer plików z Twojej strony WWW Xara

> [!primary]
>
> Zalecamy skorzystanie z programu [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) do przeniesienia plików Xara na Twój hosting.
>

Aby przenieść pliki związane z Twoją stroną WWW Xara, najpierw zaloguj się do [przestrzeni dyskowej FTP Twojego hostingu WWW OVHcloud](/pages/web_cloud/web_hosting/ftp_connection).

Po zalogowaniu się do przestrzeni dyskowej FTP Twojego hostingu WWW OVHcloud przejdź do katalogu głównego "www" (lub innego wcześniej utworzonego katalogu głównego). Jeśli Twoje pliki kopii zapasowych są skompresowane (przypinające), rozpakuj je do pustego folderu na komputerze, a następnie prześlij je do katalogu głównego Twojego hostingu WWW OVHcloud.

#### Etap 2.2: import bazy danych Twojej strony WWW Xara

Jeśli jeszcze nie masz kopii zapasowej, [utwórz nową bazę danych](/pages/web_cloud/web_hosting/sql_create_database), a następnie [zaimportuj kopię zapasową do nowej bazy danych](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

> [!primary]
>
> OVHcloud oferuje serwery baz danych Web Cloud Databases. Jeśli chcesz skorzystać z tej oferty na swojej stronie WWW, zapoznaj się z pełną dokumentacją dotyczącą tego produktu na [dedykowanej stronie](/links/web/databases).
>

### Etap 3: aktualizacja informacji o bazie danych

Powiąż teraz Twoją stronę WWW z bazą danych. Zmiany te należy wprowadzić w pliku konfiguracyjnym. Wszystkie operacje, które należy wykonać, znajdziesz w przewodniku "[Zmiana hasła do bazy danych na hostingu WWW](/pages/web_cloud/web_hosting/sql_change_password)".

### Migracja innych usług powiązanych z Twoją stroną WWW Xara

Właśnie przeprowadziłeś migrację plików oraz bazy danych Xara. Jeśli chcesz migrować Twoje konta e-mail, domenę lub strefy DNS, wykonaj kolejne kroki opisane w przewodniku "[Migracja witryny WWW i powiązanych z nią usług do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)", które dotyczą usług, które chcesz migrować. W przewodniku tym wykonanych zostanie już kilka kroków.

## Sprawdź również <a name="go-further"></a>

[Informacje ogólne na temat e-maili na hostingu](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

[Przeniesienie strony WWW i powiązanych z nią usług do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).

[Importuj bazę danych MySQL](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Tworzenie bazy danych na hostingu](/pages/web_cloud/web_hosting/sql_create_database).
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).