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

**Ostatnia aktualizacja z dnia 16/07/2021**

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
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź](#gofurther) ten przewodnik.
>

## Wymagania początkowe

- Posiadanie [domeny](https://www.ovh.com/fr/domaines/)
- Zarządzanie serwerami i [strefą DNS](../../domains/editer-ma-zone-dns/#zrozumienie-pojecia-dns) domeny
- Zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## W praktyce

### Etap 1: sprawdź ważność Twojej domeny

> [!warning]
>
> Odnowienie usług należy do Ciebie.<br>
> OVHcloud, jako dostawca hostingu, ma obowiązek definitywnie usunąć usługi (domeny, hosting, e-maile, itp.), które nie zostały odnowione na czas, jak również wszystkie zawarte w nich dane.
>
> W związku z tym zalecamy włączenie automatycznego[ ](../../billing/renouvellement-automatique-ovh/#en-pratique) odnowienia wszystkich Twoich subskrypcji OVHcloud.
>

Aby sprawdzić poprawność subskrypcji Twojej domeny, w prawym górnym rogu Panelu klienta kliknij Twoją nazwę, aby wyświetlić menu PPM, następnie `Produkty i usługi`{.action}.

![control-panel](images/control-panel.png){.thumbnail}|

Odnów Twoją domenę, jeśli to konieczne, za pomocą przycisku `..`{.action}. po prawej stronie ekranu, a następnie `Odnów usługę`{.action}.

![renew-service-button](images/renew-service-button.png){.thumbnail}

Odczekaj maksymalnie 48 godziny (czas propagacji po zmianach związanych z [serwerami DNS](../../domains/hosting_www_informacje_na_temat_serwerow_dns/#zrozumienie-pojecia-dns)).

### Etap 2: sprawdź serwery DNS

Aby sprawdzić poprawność Twoich [serwerów DNS](../../domains/hosting_www_informacje_na_temat_serwerow_dns/), w lewym górnym rogu [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) kliknij `Domeny`{.action}, a następnie domenę na Twojej stronie.

#### Scenariusz 1: brak anomalii na serwerach DNS

Sprawdź serwery podane w zakładce `Serwery DNS`{.action}:

![srv-dns-ok2](images/srv-dns-ok2.png){.thumbnail}

Jeśli są identyczne z celami wpisów typu `NS` w `strefie DNS`{.action}, przejdź do [etapu trzeciego](#step3):

![srv-dns-ok](images/srv-dns-ok.png){.thumbnail}

#### Scenariusz 2: nad strefą DNS pojawi się ostrzeżenie

Ostrzeżenie w zakładce `Strefa DNS`{.action} wskazuje, że serwery DNS używane przez Twoją domenę nie są serwerami pokazywanymi w Twojej strefie. Możliwe są dwa scenariusze:

- Pod frazą "Aktualnie korzystasz z następujących serwerów DNS: ", wskazane serwery są typu "ns **?** ovh.net" i "dns **?** ovh.net" (zastąp "**?** " na dowolny numer):

![warning_other_ovh_dns_srv](images/warning_other_ovh_dns_srv.png){.thumbnail}

Zmień serwery DNS zgodnie z instrukcjami zawartymi w [tym przewodniku](../../domains/hosting_www_informacje_na_temat_serwerow_dns/#modifier-les-serveurs-dns), aby były one identyczne z celami wpisów typu `NS` w `strefie DNS`{.action}.

Odczekaj maksymalnie 48 godziny (czas propagacji zmian `serwerów DNS`{.action}).

- Pod frazą "Aktualnie korzystasz z następujących serwerów DNS: ", wskazane serwery nie są typu "ns **?** ovh.net" i "dns **?** ovh.net".

![warning_external_dns_srv](images/warning_external_dns_srv.png){.thumbnail}

> [!warning]
>
> W takiej sytuacji przed podjęciem jakichkolwiek działań skontaktuj się z webmasterem lub [partnerami OVHcloud](https://partner.ovhcloud.com/fr/).
>
> Możliwe, że serwery DNS używane przez Twoją domenę działają i że problem z dostępem do Twojej strony jest związany z brakującym lub nieprawidłowym wpisem w [strefie DNS](../../domains/editer-ma-zone-dns/#zrozumienie-pojecia-dns). Każda zmiana serwerów DNS może spowodować niedostępność Twoich kont e-mail lub innych aplikacji online.
>

#### Scenariusz 3: w strefie DNS nie pojawia się żaden wpis typu NS

W `strefie DNS`{.action} Twojej domeny nie ma wpisu typu `NS`:

![srv_dns_missing](images/srv_dns_missing.png){.thumbnail}

Wykonaj kopię zapasową aktualnej strefy, klikając przycisk `Zmień w trybie tekstowym`{.action} po prawej stronie ekranu:

![change_DNS_zone_change_text_format](images/change_DNS_zone_change_text_format.png){.thumbnail}

Następnie skopiuj/wklej zawartość `strefy DNS`{.action} do dokumentu tekstowego. Zapisz lokalnie ten dokument.

Następnie kliknij `Zresetuj strefę DNS`{.action} i wybierz `Nie, ale chcę zresetować strefę DNS`{.action}, wskaż serwery e-mail i hosting, a następnie kliknij `Zatwierdź`{.action}.

![change_DNS_zone_reset](images/change_DNS_zone_reset.png){.thumbnail}

Odczekaj maksymalnie 24 godziny (czas propagacji zmian w `strefie DNS`{.action}).

### Etap 3: sprawdź strefę DNS <a name="step3"></a>

Na tym etapie odnajdziesz adres IP Twojego hostingu, po czym dodaj go do Twojej `strefy DNS`{.action}.

Jeśli Twoja strona jest zainstalowana poza infrastrukturą OVHcloud lub przez osobę trzecią, skontaktuj się z dostawcą lub dostawcą usług hostingowych.

Jeśli Twoja strona jest zainstalowana w jednej z naszych [ofert Web Cloud](https://www.ovh.com/fr/hebergement-web/), kliknij zakładkę `Hosting`{.action} po lewej stronie ekranu, a następnie wybierz odpowiednią ofertę.

W zakładce `Informacje ogólne`{.action} skopiuj adres IPV4 i/lub IPV6 Twojej domeny.

![ipv4-6](images/ipv4-6.png){.thumbnail}

Następnie przenieś domenę do [strefy DNS](../../domains/editer-ma-zone-dns/#editer-la-zone-dns-ovhcloud-de-votre-nom-domaine_1), modyfikując lub dodając jeden lub więcej rekordów typu `A`.

![ipv4-DNSzone](images/ipv4-DNSzone.png){.thumbnail}

Odczekaj maksymalnie 24 godziny (czas propagacji zmian w `strefie DNS`{.action}).

## Sprawdź również <a name="gofurther"></a>

[Usunięcie błędu "Strona nie została zainstalowana"](../erreur-site-non-installe/)

[Jak zdiagnozować białą stronę?](../comment-diagnostiquer-page-blanche/)

[Co zrobić w przypadku błędu 500 Internal Server Error?](../erreur-500-internal-server-error/)

[Rozwiąż najczęstsze błędy związane z modułami za pomocą 1 kliknięcia](../erreurs-frequentes-modules-en-1-clic/)

Skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/fr/), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, sprawdź naszą [ofertę wsparcia](https://www.ovhcloud.com/fr/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
