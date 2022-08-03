---
title: "Co zrobić, jeśli moja strona jest niedostępna?"
slug: blad-serwer-niedostepny
excerpt: "Zdiagnozuj przyczyny niedostępności Twojej strony WWW"
section: Diagnostyka
Order: 1
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 02/08/2022**

## Wprowadzenie

W przypadku niedostępności Twojej strony możesz wyświetlić w przeglądarce kilka zwrotów błędów. Poniższe przykłady wskazują na nieprawidłową konfigurację Twoich [DNS](../../domains/hosting_www_informacje_na_temat_serwerow_dns/#zrozumienie-pojecia-dns) lub domeny zawieszonej (jeśli Twoja strona nie wyświetla żadnego z komunikatów o błędzie opisanych tutaj, sprawdź sekcję [Sprawdź również](#gofurther)):

|Przeglądarka|Komunikat błędu|
|-|---|
|Chrome:<br>"Ta witryna jest nieosiągalna"|![cantbereachd_chrome](images/cantbereached_chrome.png){.thumbnail}|
|Firefox:<br>"Niestety, nie udało się odnaleźć tej strony"|![cantbereached_firefox](images/cantbereached_firefox.png){.thumbnail}|
|Edge:<br>"Niestety… nie można przejść do tej strony"|![cantbereachd_edge](images/cantbereached_edge.png){.thumbnail}|
|Safari:<br>"Safari nie może znaleźć serwera"|![cantbereachd_safari](images/cantbereached_safari.png){.thumbnail}|

**Dowiedz się, jak usunąć błędy związane z plikiem "Ta witryna jest nieosiągalna"**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#gofurther) ten przewodnik.
>

## Wymagania początkowe

- Zarządzanie serwerami i [strefą DNS](../../domains/hosting_www_jak_edytowac_strefe_dns/#zrozumienie-pojecia-dns) domeny
- Zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Aktualizacja w [płatności](https://docs.ovh.com/pl/billing/zarzadzanie-fakturami-ovhcloud/#pay-bills) i [odnowienie](https://docs.ovh.com/pl/billing/przewodnik_dotyczacy_opcji_automatycznego_odnawiania_uslug_w_ovh/#renewal-management) powiązanych usług (domena i hosting)

## W praktyce

### Etap 1: sprawdź ważność Twojej domeny

> [!warning]
>
> Odnowienie usług należy do Ciebie.<br>
> OVHcloud, jako dostawca hostingu, ma obowiązek definitywnie usunąć usługi (domeny, hosting, e-maile, itp.), które nie zostały odnowione na czas, jak również wszystkie zawarte w nich dane.
>
> W związku z tym zalecamy włączenie automatycznego[ ](../../billing/przewodnik_dotyczacy_opcji_automatycznego_odnawiania_uslug_w_ovh/#w-praktyce) odnowienia wszystkich Twoich subskrypcji OVHcloud.
>

Aby sprawdzić poprawność subskrypcji Twojej domeny, w prawym górnym rogu Panelu klienta kliknij Twoją nazwę, aby wyświetlić menu PPM, następnie `Produkty i usługi`{.action}.

![control-panel](images/control-panel.png){.thumbnail}|

Odnów Twoją domenę, jeśli to konieczne, za pomocą przycisku `...`{.action}. po prawej stronie ekranu, a następnie `Odnów usługę`{.action}.

![renew-service-button](images/renew-service-button.png){.thumbnail}

Po odnowieniu domeny Twoja strona będzie dostępna w ciągu 48 godzin.

### Etap 2: sprawdź serwery DNS

Aby sprawdzić poprawność Twoich [serwerów DNS](../../domains/hosting_www_informacje_na_temat_serwerow_dns/), w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) kliknij `Domeny`{.action}, a następnie domenę na Twojej stronie.

#### Scenariusz 1: brak anomalii na serwerach DNS

Sprawdź serwery podane w zakładce `Serwery DNS`{.action}:

![srv-dns-ok2](images/srv-dns-ok2.png){.thumbnail}

Jeśli są identyczne z celami wpisów typu `NS` w `Strefa DNS`{.action}, przejdź do [Etap 3](#step3):

![srv-dns-ok](images/srv-dns-ok.png){.thumbnail}

#### Scenariusz 2: nad strefą DNS pojawi się ostrzeżenie

Ostrzeżenie w zakładce `Strefa DNS`{.action} wskazuje, że serwery DNS używane przez Twoją domenę nie są serwerami pokazywanymi w Twojej strefie. Możliwe są dwa scenariusze:

- Pod frazą "Aktualnie korzystasz z następujących serwerów DNS:", wskazane serwery są typu "ns **?** ovh.net" i "dns **?** ovh.net" (zastąp "**?**" na dowolny numer):

![warning_other_ovh_dns_srv](images/warning_other_ovh_dns_srv.png){.thumbnail}

Zmień serwery DNS zgodnie z instrukcjami zawartymi w [tym przewodniku](../../domains/hosting_www_informacje_na_temat_serwerow_dns/#zmien-serwery-dns), aby były one identyczne z celami wpisów typu `NS` w `Strefa DNS`{.action}.

Twoja strona będzie dostępna w ciągu maksymalnie 48 godzin.

- Pod frazą "Aktualnie korzystasz z następujących serwerów DNS:", wskazane serwery nie są typu "ns **?** ovh.net" i "dns **?** ovh.net".

![warning_external_dns_srv](images/warning_external_dns_srv.png){.thumbnail}

> [!warning]
>
> W takiej sytuacji przed przystąpieniem do jakichkolwiek czynności, należy skontaktować się z dostawcą usług hostowanych w strefie DNS, webmasterem lub [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/).
>
> Możliwe, że serwery DNS używane przez Twoją domenę działają i że problem z dostępem do Twojej strony jest związany z brakującym lub nieprawidłowym wpisem w [strefie DNS](../../domains/hosting_www_jak_edytowac_strefe_dns/#zrozumienie-pojecia-dns). Każda zmiana serwerów DNS może spowodować niedostępność Twoich kont e-mail lub innych aplikacji online.
>

#### Scenariusz 3: w strefie DNS nie pojawia się żaden wpis typu NS

W `Strefa DNS`{.action} Twojej domeny nie ma wpisu typu `NS`:

![srv_dns_missing](images/srv_dns_missing.png){.thumbnail}

Wykonaj kopię zapasową aktualnej strefy, klikając przycisk `Modyfikacja w trybie tekstowym`{.action} po prawej stronie ekranu:

![change_DNS_zone_change_text_format](images/change_DNS_zone_change_text_format.png){.thumbnail}

Następnie skopiuj/wklej zawartość `Strefa DNS`{.action} do dokumentu tekstowego. Zapisz lokalnie ten dokument.

Następnie kliknij `Zresetuj strefę DNS`{.action} i wybierz `Nie, ale chcę zresetować strefę DNS.`{.action}, wskaż serwery e-mail i hosting, a następnie kliknij `Zatwierdź`{.action}.

![change_DNS_zone_reset](images/change_DNS_zone_reset.png){.thumbnail}

Twoja strona będzie dostępna w ciągu maksymalnie 24 godzin.

### Etap 3: sprawdź strefę DNS <a name="step3"></a>

Na tym etapie odnajdziesz adres IP Twojego hostingu, po czym dodaj go do Twojej `Strefa DNS`{.action}.

Jeśli Twoja strona nie jest hostowana w infrastrukturze OVHcloud lub jest zarządzana przez innego dostawcę, skontaktuj się z odpowiednią pomocą techniczną.

Jeśli Twoja strona jest zainstalowana w jednej z naszych [ofert Web Cloud](https://www.ovhcloud.com/pl/web-hosting/), kliknij zakładkę `Hosting`{.action}, a następnie wybierz odpowiednią ofertę.

W zakładce `Informacje ogólne`{.action} skopiuj adres IPV4 i/lub IPV6 Twojej domeny.

![ipv4-6](images/ipv4-6.png){.thumbnail}

Następnie przenieś domenę do [strefy DNS](../../domains/hosting_www_jak_edytowac_strefe_dns/#modyfikacja-strefy-dns-domeny_1), modyfikując lub dodając jeden lub więcej rekordów typu `A`.

![ipv4-DNSzone](images/ipv4-DNSzone.png){.thumbnail}

Twoja strona będzie dostępna w ciągu maksymalnie 24 godzin.

## Sprawdź również <a name="gofurther"></a>

[Usunięcie błędu “Strona nie została zainstalowana”](../hosting_www_blad_dotyczacy_nie_zainstalowanej_strony/)

[Przyczyny wyświetlania się “białej strony”](../hosting_www_jak_sprawdzic_przyczyne_wyswietlania_sie_bialej_strony/)

[Co zrobić w przypadku błędu 500 Internal Server Error?](../błąd-500-internal-server-error/)

[Rozwiąż najczęstsze błędy związane z modułami za pomocą 1 kliknięcia](../bledy-frameworki-moduly-za-1-kliknieciem/)

Skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, sprawdź naszą [ofertę wsparcia](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
