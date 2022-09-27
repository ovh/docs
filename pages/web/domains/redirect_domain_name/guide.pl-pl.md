---
title: "Przekierowanie domeny zarządzanej w OVHcloud"
slug: przekierowanie-domeny
excerpt: "Poznaj rodzaje przekierowań i dowiedz się, jak utworzyć przekierowanie dla domeny zarządzanej w OVHcloud"
section: Informacje ogólne
order: 01
---

**Ostatnia aktualizacja z dnia 27-09-2022**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

## Wprowadzenie

Przekierowanie domeny polega na przekierowaniu jej na nową docelową stronę. Istnieją różne rodzaje przekierowań, z których każdy odpowiada konkretnej potrzebie.

**Sprawdź różne sposoby przekierowania domeny**

## Wymagania początkowe

- Posiadanie [domeny](https://www.ovhcloud.com/pl/domains/)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Połączenie z hostingiem (przekierowanie za pomocą pliku [.htaccess](#htaccess_rewrite))

## W praktyce

### Poznaj przekierowanie domeny

Funkcja ta pozwala na przekierowanie domeny/subdomeny na:

- inna już istniejąca domena/subdomena:
    - **Przykład**: `domain.tld
- adres URL (Uniform Resource Locator):
    - **Przykłady**: `http://www.domain.tld/welcome/` lub `https://www.domain.tld/welcome/` (jeśli domena docelowa posiada kompatybilny certyfikat SSL).

Działania te mogą być przeprowadzane na kilka sposobów:

- **Z poziomu[Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)**, gdzie asystent konfiguracji pozwala na ustawienie przekierowania.
- **Za pomocą metody wymagającej programowania**. Musisz samodzielnie utworzyć przekierowanie w pliku (zazwyczaj [.htaccess](#htaccess_rewrite)).

> [!warning]
>
> Uruchomienie przekierowania może mieć wpływ na pozycjonowanie Twojej strony WWW. 
> Bądź czujny nad operacjami, które zamierzasz wykonać lub skontaktuj się z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/) w celu pozycjonowania strony, jeśli to konieczne.
>
> Uwaga: przekierowanie utworzone w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) nie pozwala na przekierowanie adresu URL na `https://` na inną domenę lub adres URL. 
> Aby utworzyć ten rodzaj przekierowania, należy obowiązkowo przejść przez [wpisanie adresu URL](https://docs.ovh.com/pl/hosting/hosting_www_htaccess_-_generowanie_adresow_za_pomoca_mod_rewrite/), na przykład przez plik ".htaccess".

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.