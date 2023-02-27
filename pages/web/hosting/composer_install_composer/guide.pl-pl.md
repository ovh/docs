---
title: Instalacja Composer na hostingu
slug: instalacja_oprogramowania_composer_na_hostingu_www
excerpt: Dowiedz się, jak zainstalować i zrobić pierwsze kroki w Composer.
section: PHP
order: 02
updated: 2023-02-24
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 24-02-2023**

## Wprowadzenie 

[Composer](https://getcomposer.org/){.external} jest menedżerem zależności stworzonym dla języka PHP. Pozwala deweloperom PHP na umieszczanie w programach zewnętrznych bibliotek. "Komponowanie" umożliwiło projektom PHP uproszczenie dystrybucji bibliotek i utrzymania ich kodu. Poza tym, od momentu utworzenia tego narzędzia, w ramach społeczności PHP udostępniano liczne dobre praktyki rozwoju, które poprawiły biblioteki społeczności PHP. Te dobre praktyki są dokumentowane w formie [PSR](http://www.php-fig.org/){.external}.

**Dowiedz się, jak zainstalować i zrobić pierwsze kroki z Composer**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/) i/lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego tutoriala.
> 

## Wymagania początkowe

- Posiadanie [hostingu](https://www.ovhcloud.com/pl/web-hosting/){.external} z dostępem SSH
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.


## W praktyce

Połącz się z hostingiem za pomocą SSH, korzystając z naszego przewodnika na temat [korzystanie z SSH przy pomocy hostingu www OVHcloud](https://docs.ovh.com/pl/hosting/hosting_www_ssh_na_hostingu/).

Sprawdź, czy używasz kompatybilnej wersji PHP w wierszu poleceń:


```bash
php —version
```

Jeśli nie jest to prawidłowa wersja, możesz skonfigurować alias:


```bash
alias php='/usr/local/php8.0/bin/php'
```

Zalecamy pozostanie w katalogu głównym Twojego hostingu, aby nie udostępniać publicznie plików "Composer". Należy wpisać to polecenie:


```bash
curl -sS https://getcomposer.org/installer | php
```

Gratulacje, "Composer" jest już dostępny na hostingu!


### Przykłady zastosowania

Jeśli chcesz po prostu zainstalować Symfony 2, możesz na przykład uruchomić następujące polecenie:


```bash
php composer.phar create-project symfony/framework-standard-edition my_project_name "2.7.*"
```

Możesz również korzystać z API OVHcloud z poziomu Twojego hostingu za pomocą oficjalnej werappera. W tym celu wystarczy dodać plik o nazwie composer.json, który zawiera listę zależności, których potrzebujesz. Oto przykład tego pliku za pomocą wrappera API OVHcloud:


```json
1. {
2.     "name": "Przykład Aplikacji",
3.     "opis": "This is an example of OVHcloud API wrapper use",
4.     "require": {
5.         "ovh/ovh": "1.1.*"
6.     }
7. }
```

Aby zainstalować domenę, wystarczy uruchomić następujące polecenie w tym samym katalogu:


```bash
php composer.phar install
```

Aby korzystać z tej biblioteki, zapoznaj się z dokumentacją oraz kodem dostępnymi na [github](https://github.com/ovh/php-ovh){.external}


## Sprawdź również <a name="go-further"></a>

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.