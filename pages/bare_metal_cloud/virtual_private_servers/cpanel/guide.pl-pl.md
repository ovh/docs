---
title: "Instalacja cPanel na serwerze VPS"
excerpt: "Dowiedz się, jak utworzyć instancję VPS przy użyciu wstępnie zainstalowanej aplikacji cPanel"
updated: 2024-01-12
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

cPanel to panel konfiguracyjny ułatwiający zarządzanie hostingiem WWW. Ułatwia dostęp do złożonych zadań, również nowym użytkownikom. Posiada wiele funkcji, takich jak na przykład zarządzanie: 

- kont email
- domeny
- bazy danych
- bezpieczeństwa
- itp.

Dzięki interfejsowi graficznemu umożliwiającemu automatyzację parametrów, hosting stron WWW stał się prostszy.

**Dowiedz się, jak zainstalować cPanel za pomocą wstępnie zainstalowanych aplikacji na serwerze VPS.**

## Wymagania początkowe

- Wykupienie usługi [VPS](https://www.ovhcloud.com/pl/vps/){.external} (oferty Value, **Essential**, **Comfort** lub **Elite**).
- zalogowanie do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

## W praktyce

Aby zainstalować serwer cPanel, zamów VPS z dystrybucją cPanel.

![cPanel](images/cpanel_order.png){.thumbnail}

Gdy VPS jest gotowy, otrzymasz wiadomość e-mail dającą dostęp do logowania do serwera cPanel:

```
 |    Twoje aplikacje:
 |    aplikacja: cpanel
 |    Możesz zalogować się do cpanel ze strony https://<ip>:2087/<session_parameters>
```

Jeśli posiadasz już serwer VPS i chcesz na nim zainstalować cPanel, możesz wykonać reinstalację serwera VPS z poziomu [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) przez [OS kompatybilny z cPanelem](https://www.ovhcloud.com/pl/vps/os/).

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

Zapoznaj się również z naszym przewodnikiem dotyczącym [zabezpieczenia serwera VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps#tworzenie-kopii-zapasowej-systemu-i-danych), korzystania z [naszych rozwiązań do tworzenia kopii zapasowych](/products/bare-metal-cloud-virtual-private-servers) oraz konfiguracji [Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network).

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.