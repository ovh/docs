---
title: 'Wdrażanie aplikacji cPanel w centOS 7'
slug: cpanel
excerpt: 'Dowiedz się, jak utworzyć instancję VPS przy użyciu wstępnie zainstalowanej aplikacji cPanel'
section: 'Poziom zaawansowany'
---

**Ostatnia aktualizacja z dnia 15-05-2020**

## Wprowadzenie

cPanel to panel konfiguracyjny zaprojektowany dla dostawców hostingu WWW. Składa się z interfejsu graficznego umożliwiającego automatyzację parametrów, co ułatwia hostowanie witryny internetowej.

**Dowiedz się, jak za pomocą jednego kliknięcia wdrożyć cPanel przy użyciu wstępnie zainstalowanych aplikacji na serwerze VPS.**


## Wymagania początkowe

Abu utworzyć serwer cPanel, najpierw należy zamówić VPS z dystrybucją cPanel.

![horizon](images/cpanel_order.png)

Gdy VPS jest gotowy, otrzymasz wiadomość e-mail dającą dostęp do logowania do serwera cPanel:

```
 |    Twoje aplikacje:
 |    Możesz zalogować się do cpanel ze strony https://<ip>:2087/<session_parameters>
```

Twój serwer cPanel jest gotowy do użytku.

## W praktyce

### Pierwsze logowanie

Poniższy adres URL umożliwia zalogowanie się do menedżera cPanel bez loginu i hasła.
W pierwszej kolejności należy zatwierdzić licencję i skonfigurować hasło użytkownika root, aby następnie zalogować się do tego interfejsu.

![horizon](images/license_validation.png)

Wygenerowany adres URL jest tymczasowy, co ma na celu zabezpieczenie dostępu. Jeśli po kliknięciu tego linku widzisz prośbę o zalogowanie się, oznacza to, że wygasł token dla tego adresu URL.

Możesz wygenerować ten adres URL za pomocą narzędzia dostępnego w wierszu poleceń Twojego serwera VPS. Procedura została wyjaśniona [poniżej](./#regenerer-votre-url-de-connexion).

Na następnej stronie zostanie wyświetlona prośba o podanie Twojego adresu e-mail i serwerów nazw, których chcesz użyć.

![horizon](images/setup_config_cpanel.png)

### Ponowne wygenerowanie adresu URL do logowania

Zaloguj się przez SSH za pomocą danych dostarczonych w e-mailu z danymi dostępowymi i wykonaj następujące polecenie:

```sh
sudo whmlogin
```

Teraz możesz kliknąć wygenerowany link, aby uzyskać dostęp do Twojego interfejsu administracyjnego i skonfigurować hasło root.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
