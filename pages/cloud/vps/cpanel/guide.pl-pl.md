---
title: Instalacja cPanel na serwerze VPS
slug: cpanel
excerpt: 'Dowiedz się, jak utworzyć instancję VPS przy użyciu wstępnie zainstalowanej aplikacji cPanel'
section: 'Poziom zaawansowany'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 14-10-2021**

## Wprowadzenie

cPanel to panel konfiguracyjny zaprojektowany dla dostawców hostingu WWW. Składa się z interfejsu graficznego umożliwiającego automatyzację parametrów, co ułatwia hostowanie witryny internetowej.

**Dowiedz się, jak wdrożyć cPanel przy użyciu wstępnie zainstalowanych aplikacji na serwerze VPS.**

## Wymagania początkowe

- [aktualne rozwiązanie VPS](https://www.ovhcloud.com/pl/vps/) (Value, Essential, Comfort lub Elite).
- Zalogowanie do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

## W praktyce

Aby zainstalować serwer cPanel, należy najpierw zamówić VPS z dystrybucją cPanel.

![cPanel](images/cpanel_order.png){.thumbnail}

Gdy VPS jest gotowy, otrzymasz wiadomość e-mail dającą dostęp do logowania do serwera cPanel:

```
 |    Twoje aplikacje:
 |    Możesz zalogować się do cpanel ze strony https://<ip>:2087/<session_parameters>
```

Jeśli posiadasz już VPS i chcesz zainstalować cPanel, możesz wykonać reinstalację serwera VPS z [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), używając szablonu "CentOS 7 - cPanel" (dostępny tylko z kompatybilną ofertą VPS).

> [!warning]
>
> Jeśli ponownie zainstalujesz serwer VPS, wszystkie dane przechowywane na serwerze VPS zostaną utracone.
> 

### Pierwsze logowanie

Po otrzymaniu wiadomości e-mail z unikalnym linkiem kliknij ten link, aby przeprowadzić wstępną konfigurację.

> [!primary]
>
> Jeśli link już wygasł, proszę połączyć się z VPS przez SSH używając użytkownika CentOS i wykonać polecenie « sudo whmlogin », aby wygenerować nowy link.
>

Podany wyżej URL umożliwia zalogowanie się do interfejsu WHM bez danych identyfikacyjnych (użytkownika i hasła).

#### Etap 1: przeczytać warunki korzystania z cPanel

Przeczytaj i zaakceptuj warunki korzystania z cPanel

![cPanel](images/license_validation.png){.thumbnail}

#### Etap 2: uzupełnij wymagane pola

Wskaż serwery poczty elektronicznej i nazwy (nameservers), które chcesz skonfigurować na serwerze VPS.

![cPanel](images/setup_config_cpanel.png){.thumbnail}

#### Etap 3: zdefiniuj hasło root

![cPanel](images/change_root.png){.thumbnail}

Należy teraz mieć możliwość logowania się do WHM i SSH, używając użytkownika root z hasłem, które zostało właśnie zdefiniowane.

### Bezpieczeństwo

Zalecamy podjęcie wszelkich niezbędnych kroków w celu zabezpieczenia WHM i VPS. W tym celu zalecamy zapoznanie się z zaleceniami [cPanel tutaj](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/).

Zapoznaj się również z naszym przewodnikiem dotyczącym [zabezpieczenia serwera VPS](../porady-zabezpieczenie-vps/#tworzenie-kopii-zapasowej-systemu-i-danych), korzystania z [naszych rozwiązań do tworzenia kopii zapasowych](../) oraz konfiguracji [Network Firewall](../../dedicated/network-firewall/).

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.