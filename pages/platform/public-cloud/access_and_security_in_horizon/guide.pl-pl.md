---
title: Parametry dostępu i bezpieczeństwa w interfejsie Horizon
excerpt: Dowiedz się, jak zarządzać dostępem do instancji i zabezpieczyć dostęp do nich
slug: access_and_security_in_horizon
section: Zarządzanie w interfejsie Horizon
order: 4
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 26-05-2021**

## Wprowadzenie

Interfejs OpenStack Horizon umożliwia konfigurację dostępu do Twoich instancji i innych usług.<br>
Możesz na przykład skonfigurować grupy zabezpieczeń, aby filtrować połączenia przychodzące i wychodzące, lub pobrać plik OpenRC zawierający dane identyfikacyjne, aby korzystać z API OpenStack.

**Dowiedz się, jak zarządzać dostępem do instancji i zabezpieczyć dostęp do nich**

## Wymagania początkowe

- [Dostęp do interfejsu Horizon](../horizon/)

## W praktyce

Zaloguj się do [interfejsu Horizon](https://horizon.cloud.ovh.net/auth/login/).

Parametry dostępu i bezpieczeństwa składają się z następujących sekcji dostępnych z menu po lewej stronie:

- **API Access** (pod `Project`{.action})

Panel dostępu do API zawiera listę punktów API OpenStack.

![horizon - dostęp API](images/api_access.png){.thumbnail}

Aby sprawdzić wartości dostępu do interfejsu API, kliknij `View Credentials`{.action}.

Kliknij przycisk `Download OpenStack RC File`{.action}, aby otworzyć rozwijane menu, w którym możesz wybrać odpowiedni plik RC do pobrania.

- **Key Pairs** (w `Projekcie`{.action} i `Compute`{.action})

W tej sekcji możesz przechowywać pary kluczy SSH i zarządzać nimi. Możesz po prostu utworzyć i dodać klucz publiczny i prywatny klikając przycisk `Create Key Au Pair`{.action}.

![horizon - klucze SSH](images/key_pairs.png){.thumbnail}

Jeśli chcesz dodać istniejący klucz, kliknij przycisk `Import Public Key`{.action}. W oknie, które się wyświetla możesz wprowadzić klucz lub wybrać plik klucza.

Ta część interfejsu zawiera podstawowe instrukcje. Więcej informacji na temat kluczy SSH znajdziesz w [tym przewodniku](../tworzenie-kluczy-ssh/).

- **Security Groups** (w `ramach projektu`{.action}, a następnie `Network`{.action})

Grupy zabezpieczeń to zbiory reguł filtrowania stosowanych do interfejsów sieciowych. Można z nich korzystać, aby ograniczyć dostęp do instancji do adresów IP i portów.

![horyzont - grupy bezpieczeństwa](images/security_groups.png){.thumbnail}

Dodaj grupę zabezpieczeń, klikając `Create Security Group`{.action}, następnie zastosuj w tabeli spersonalizowane lub wstępnie zdefiniowane reguły za pomocą przycisku `Manage Rules`{.action}.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
