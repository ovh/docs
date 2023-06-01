---
title: "Tutorial - Chroń katalog lub interfejs administracyjny Twojej strony internetowej za pomocą plików .htaccess i .htpasswd"
slug: hosting-htaccess-w-jaki-sposob-zabezpieczyc-dostep-dostepu-do-katalogu
excerpt: "Dowiedz się, jak zabezpieczyć katalog lub dostęp do administrowania stroną WWW za pomocą uwierzytelnienia za pomocą plików .htaccess i .htpasswd"
section: Przekierowania i uprawnienia dostępu
order: 02
updated: 2023-06-01
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

**Ostatnia aktualizacja z dnia 01-06-2023**

## Wprowadzenie 

Tutorial wyjaśnia, jak wdrożyć uwierzytelnienie "użytkownik/hasło", aby uzyskać dostęp do całej lub części Twojej strony WWW za pomocą przeglądarki internetowej. 

Używając dwóch plików konfiguracyjnych (HTTP) Apache do umieszczenia w [przestrzeni FTP](/pages/web/hosting/ftp_connection/) Twojego hostingu www: 

- "**.htaccess**": aby uzyskać więcej informacji na temat funkcjonalności tego pliku, zapoznaj się z naszym tutorial ["Operacje możliwe do wykonania za pomocą pliku ".htaccess"](/pages/web/hosting/htaccess_what_else_can_you_do/).
- "**.htpasswd**": oprócz tego tutoriala, zapoznaj się z [oficjalną dokumentacją Apache](https://httpd.apache.org/docs/2.4/en/programs/htpasswd.html) dotyczącą tego pliku.

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywają na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/directory/) i/lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.
>
> Przykłady, które zostaną następnie wyświetlone, znajdują się w plikach o nazwie ".htaccess" i ".htpasswd". Uwaga, reguły, które określiłeś w tych plikach, mają bezpośrednie konsekwencje dla Twojej strony WWW. Sprawdź systematycznie dodawanie reguł przed ich wdrożeniem na Twojej stronie WWW. 
> 

**Dowiedz się, jak zabezpieczyć katalog lub dostęp do administratora Twojej strony WWW za pomocą uwierzytelnienia za pomocą plików ".htaccess" i ".htpasswd".**

## Wymagania początkowe

## W praktyce

## Sprawdź również <a name="go-further"></a>