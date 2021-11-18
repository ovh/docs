---
title: Co zrobić w przypadku strony « Index of »?
excerpt: Dowiedz się, jak przywrócić Twoją stronę WWW online, gdy wyświetla ona stronę « Index of »
slug: diagnostyka-index-of
section: Diagnostyka
order: 6
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 25/06/2021**
 
## Wprowadzenie

Jeśli konfiguracja `MultiSite` nie jest poprawnie skonfigurowana, Twoja strona może wyświetlić stronę **« Index of »**.

![index_of](images/index_of.png){.thumbnail}

**Dowiedz się, jak naprawić wyświetlanie strony « Index of ».**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#gofurther) ten przewodnik.
>

## Wymagania początkowe

- Posiadanie [hostingu](https://www.ovhcloud.com/pl/web-hosting/)
- Zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

### Zrozumieć pochodzenie strony « Index of »

Twoja domena jest podłączona do katalogu (« `Katalog główny` ») na Twoim serwerze `FTP` za pomocą MultiSite[ ](../logowanie-przestrzen-dyskowa-ftp-hosting-web/).

Strona **Index of** wskazuje, że dany katalog nie zawiera pliku **index.php** lub **index.html**. Plik ten to "punkt wejścia" Twojej strony.

Aby wyświetlić Twoją stronę WWW, w sekcji `MultiSite` powiąż domenę z `Katalog główny` zawierającym ten plik **index.php** lub **index.html**.

> [!primary]
>
> Jeśli chcesz tymczasowo powiązać domenę z `Katalog główny` niezawierającym pliku **index.php** lub **index.html**, możesz zabronić wyświetlania listy katalogów na Twojej stronie, postępując zgodnie z tym [przewodnikiem](../hosting_www_htaccess_-_inne_operacje/#blokada-listowania-zawartosci-katalogu). Możesz również chronić dostęp do Twoich katalogów za pomocą [hasła](https://docs.ovh.com/gb/en/hosting/how_to_password_protect_a_directory_on_your_website/).
>
> W przypadku trudności z wdrożeniem tej konfiguracji zalecamy skorzystanie z [pomocy specjalisty](https://partner.ovhcloud.com/pl/directory/). Zespół pomocy technicznej OVH nie będzie w stanie udzielić wsparcia w przypadku jakichkolwiek zmian w wewnętrznym programowaniu Twojej strony WWW.

### Rozwiąż najczęstszy przypadek na stronie « Index of »

Przeprowadziłeś pliki strony **mydomain.ovh** do katalogu `www` hostingu przez [FTP](../logowanie-przestrzen-dyskowa-ftp-hosting-web/). Poza tym Twoja domena nie jest powiązana z tym folderem w kolumnie `Katalog główny` Twojej strony w opcji `MultiSite`.

![index_of_multisite](images/index_of_multisite.png){.thumbnail}

Zmień `Katalog główny` klikając przycisk `...`{.action} po prawej stronie tabeli, a następnie `Zmień domenę`{.action}:

![modify_domain](images/modify_domain.png){.thumbnail}

Zaznacz kratkę `Zmień również ustawienia subdomeny www.mydomain.ovh` i wskaż katalog zawierający plik **index.php** lub **index.html** swojej strony jako `Katalog główny`.

> [!primary]
>
> Używanie katalogu `www` jako `Katalog główny` nie jest w żadnym wypadku obowiązkowe. Możesz zainstalować Twoją stronę WWW w innym katalogu [serwera FTP](../logowanie-przestrzen-dyskowa-ftp-hosting-web/).

Kliknij `Dalej`.

![change_root_folder](images/change_root_folder.png){.thumbnail}

Następnie kliknij `Zatwierdź`{.action}.

![modify_root_folder_confirm](images/modify_root_folder_confirm.png){.thumbnail}

Otrzymasz następujący wynik:

![multisite_modified](images/multisite_modified.png){.thumbnail}

## Sprawdź również <a name="gofurther"></a>

[Rozwiąż najczęstsze błędy związane z modułami za pomocą 1 kliknięcia](../bledy-frameworki-moduly-za-1-kliknieciem/)

[Usunięcie błędu “Strona nie została zainstalowana”](../hosting_www_blad_dotyczacy_nie_zainstalowanej_strony/)

[Instalacja kilku stron WWW na jednym hostingu](../konfiguracja-multisite-na-hostingu/)

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, sprawdź naszą [ofertę pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
