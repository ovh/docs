---
title: 'Aktywacja protokołu HTTPS na stronie WWW za pomocą certyfikatu SSL'
slug: aktywacja-https-ssl-na-stronie-WWW
excerpt: 'Dowiedz się, jak aktywować protokół HTTPS na stronie WWW za pomocą certyfikatu SSL'
section: SSL
order: 02
---

**Ostatnia aktualizacja z dnia 04-10-2022**

## Wprowadzenie 

Jeśli wykupiłeś hosting w OVHcloud, możesz uzyskać bezpłatny certyfikat SSL. Certyfikat ten gwarantuje poufność przesyłanych danych, a Twoje strony WWW stają się dostępne za pomocą połączenia HTTPS. Aby Twoje strony WWW mogły korzystać z bezpiecznego połączenia, wykonaj wcześniej kroki opisane w niniejszej dokumentacji.

**Dowiedz się, jak aktywować protokół HTTPS na stronie WWW za pomocą certyfikatu SSL.**

## Wymagania początkowe

- Posiadanie [certyfikatu SSL](https://www.ovhcloud.com/pl/web-hosting/options/ssl/){.external} zainstalowanego na [hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external}
- Posiadanie co najmniej jednej strony WWW zainstalowanej i dostępnej na Twoim hostingu OVH
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, sekcja `Web Cloud`{.action}

## W praktyce

Bezpieczeństwo jest niezwykle istotnym aspektem korzystania z Internetu. Z pewnością przywiązujesz szczególną wagę do poufności Twoich danych oraz sposobu, w jaki są one przesyłane w Internecie. Internauci bardziej ufają stronom WWW dostępnym za pomocą bezpiecznego połączenia, szczególnie, jeśli przesyłane dane są wrażliwe. 

Kiedy odwiedzasz stronę WWW używającą bezpiecznego połączenia, na pasku adresowym Twojej przeglądarki może być to widoczne na kilka sposobów: logo (zazwyczaj kłódkę), odpowiednia informacja, nazwa firmy zaznaczoną innym kolorem lub protokół HTTPS zamiast HTTP. A zatem, czy Twoja strona WWW używa bezpiecznego połączenia czy też nie, staje się dla internautów coraz bardziej widoczny.

![https na stronie www](images/activate-https-website-ssl-step1.png){.thumbnail}

**Proces uruchomienia protokołu HTTPS na stronie WWW może być wrażliwą operacją.** Składa się on z kilku etapów wymagających zmiany konfiguracji Twojej strony WWW (a dokładniej jej kodu). Jeśli działania nie zostaną przeprowadzone prawidłowo, mogą mieć różne negatywne skutki: gorsze pozycjonowanie strony WWW w wyszukiwarkach internetowych lub nawet niedostępność Twojej strony. 

Poniższa tabela pozwoli Ci lepiej zrozumieć przebieg operacji, którą należy przeprowadzić.

|Etapy|Opis |Szczegóły|
|---|---|---|
|1|Aktywacja certyfikatu SSL na hostingu|Umożliwia aktywację certyfikatu SSL lub weryfikację, czy jest on prawidłowo zainstalowany i aktywowany na Twoim hostingu.|
|2|Weryfikacja środowiska technicznego|Umożliwia sprawdzenie przed podjęciem jakichkolwiek czynności, czy aktywacja protokołu HTTPS na Twojej stronie WWW nie będzie miała negatywnego wpływu na działanie Twojej strony.|
|3|Aktywacja HTTPS na Twojej stronie WWW.|Umożliwia Twojej stronie WWW korzystanie z protokołu HTTPS. Operacja ta nie jest powszechnie stosowana w odniesieniu do wszystkich stron WWW i będzie różniła się w zależności od strony, jakiej używasz.|
|4|Sprawdzenie prawidłowego działania Twojej strony WWW.|Ten ostatni etap pozwala Ci upewnić się po aktywacji HTTPS, czy Twoja strona WWW wyświetla się prawidłowo.|

### Etap 1: aktywacja certyfikatu SSL na hostingu

Aktywacja certyfikatu SSL na Twoim hostingu jest wykonywana w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. W tym celu przeprowadź dwie operacje:

|Operacja|Opis |
|---|---|
|Aktywacja certyfikatu SSL na hostingu|Umożliwia OVHcloud instalację certyfikatu SSL na Twoim hostingu. Wybierz jeden z typów certyfikatów. Upewnij się, że wybierasz certyfikat najbardziej odpowiedni dla Twojego projektu.|
|Aktywacja SSL na stronie w opcji MultiSite|Strona WWW, na której chcesz aktywować HTTPS musi być skonfigurowana na Twoim hostingu jako „MultiSite”. Upewnij się, że certyfikat SSL jest aktywny dla tego hostingu. |

Dokładny opis realizacji tych dwóch operacji dostępny jest w naszej dokumentacji [Zarządzanie certyfikatem SSL na hostingu](https://docs.ovh.com/pl/hosting/certyfikaty-ssl-na-hostingu/){.external}. Jeśli właśnie wykupiłeś hosting w OVHcloud, możliwe, że jest już na nim zainstalowany bezpłatny certyfikat SSL oraz że jest on już aktywny dla stron w opcji MultiSite.

Aby to sprawdzić, zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Kliknij `Hosting`{.action}, po czym wybierz odpowiedni hosting. Następnie przejdź do sekcji`Informacje ogólne`{.action}. Pod napisem „Certyfikat SSL” powinna pojawić się informacja „Tak” wskazująca, że certyfikat SSL jest zainstalowany na Twoim hostingu. 

![https na stronie www](images/activate-https-website-ssl-step2.png){.thumbnail}

Przejdź następnie do zakładki MultiSite. Tabela, która się wyświetla zawiera wszystkie nazwy domen dodanych do Twojego hostingu. W kolumnie „SSL” możesz sprawdzić stan aktywacji bezpiecznego połączenia SSL dla Twoich poszczególnych domen w opcji MultiSite. 

![https na stronie www](images/activate-https-website-ssl-step3.png){.thumbnail}

Jeśli nie udało Ci się potwierdzić, że certyfikat SSL jest zainstalowany na Twoim hostingu i/lub że jest aktywny w wybranej opcji MultiSite, skorzystaj z naszej dokumentacji: [Zarządzanie certyfikatem SSL na hostingu](https://docs.ovh.com/pl/hosting/certyfikaty-ssl-na-hostingu/){.external}.

### Etap 2: weryfikacja środowiska technicznego

Przed wprowadzeniem zmian w konfiguracji Twojej strony WWW, koniecznie upewnij się, czy jest ona przygotowana na włączenia protokołu HTTPS. Nie istnieje jeden ogólny sposób postępowania, metoda działania jest zawsze uzależniona od rodzaju strony WWW, którą zarządzasz. 

Zalecamy zatem zastosowanie podanych niżej wskazówek. Pamiętaj, że celem tych instrukcji jest zapewnienie podstawowego wsparcia, nie zastąpią one jednak pomocy webmastera. 

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak ich konfiguracja, zarządzanie oraz utrzymanie należy do Ciebie. Jesteś tym samym odpowiedzialny za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „Sprawdź również”. 
>

#### 2.1 Unikanie mieszania treści HTTP i HTTPS

Generalnie, jeśli Twoja strona wyświetla się w trybie HTTPS, powinieneś absolutnie unikać mieszania treści wyświetlanych poprzez HTTP i HTTPS zarówno na danej podstronie, jak i całej stronie WWW. W związku z powyższym, jeśli Twoja strona WWW wyświetla się w HTTPS, całość jej zawartości powinna ładować się z wykorzystaniem protokołu HTTPS.

Jeśli tak się nie dzieje, istnieje ryzyko, że udostępniasz na Twojej stronie WWW treści mieszane odczytywane przez przeglądarki internetowe jako *Mixed Content*. Przypomina to w pewnym sensie sytuację, w której udostępniałbyś treści uznawane za potencjalnie niebezpieczne na stronie WWW oznaczonej jako bezpieczna. Może to mieć dwie konsekwencje w zależności od typu mieszanych treści:

- **strona WWW wyświetla się prawidłowo, ale na pasku adresu widnieje ostrzeżenie**: może to oznaczać, że treści uznawane przez przeglądarkę internetową za statyczne (obrazy, filmy, etc.) są ładowane z niezabezpieczonego źródła;

- **niektóre części strony WWW nie wyświetlają się i na pasku adresu widoczne jest ostrzeżenie**: może to oznaczać, że treści uznawane przez przeglądarkę internetową za dynamiczne (skrypty, iframe, pliki CSS, etc.) pochodzące z niebezpiecznego źródła zostały zablokowane.

Kluczowe zatem jest upewnienie się, czy całość treści, która została załadowana z Twojej strony WWW pochodzi z zabezpieczonego źródła. 

![https na stronie www](images/activate-https-website-ssl-step4.png){.thumbnail}

Pamiętaj, że nawet jeśli na Twoim hostingu zainstalowany jest certyfikat SSL, treści hostowane na hostingu mogą być ładowane przy użyciu protokołu HTTP lub HTTPS. To zależy od sposobu, w jaki oznaczyłeś te treści w kodzie Twojej strony. Upewnij się zatem, czy treści ładowane z Twojej strony używają protokołu HTTPS.

Zwróć na przykład szczególną uwagę na adresy URL używane w kodzie Twojej strony WWW. Jeśli to możliwe:

- stosuj adresy względne, np.: `../img/header.png`;
- unikaj stosowania adresów bezwzględnych zawierających protokół HTTP, np.: `http://mypersonaldomain.ovh/img/header.png`.

Jeśli to konieczne, dostosuj odpowiednio kod Twojej strony WWW. Jeśli używasz strony zbudowanej w oparciu o gotowy system CMS (np. WordPress), struktura szablonu jest zazwyczaj przygotowana do aktywacji HTTPS. W tym przypadku nie musisz wprowadzać modyfikacji w kodzie Twojej strony WWW.

#### 2.2 Unikanie duplikowania treści 

Upewnij się również, uwzględniając sposób, w jaki zakodowana jest Twoja strona WWW, czy nie będzie ona dostępna za pośrednictwem różnych adresów: na przykład jednego używającego protokołu HTTP, drugiego używającego protokołu HTTPS. W takim przypadku te same treści byłyby dostępne z kilku różnych adresów, co przez wyszukiwarki internetowe uznawane jest za treści zduplikowane (*duplicate content*).

Zjawisko to może mieć negatywny wpływ na pozycjonowanie Twojej strony WWW. Upewnij się, że strona „wymusza” użycie HTTPS. Możesz to zrobić, tworząc regułę przepisywania w kodzie strony WWW, gdy chcesz włączyć HTTPS.

Pamiętaj, że w przypadku gdy używasz strony WWW zbudowanej w oparciu o gotowy system (np. WordPress), struktura strony automatycznie zarządza regułami przepisywania. W tym przypadku nie musisz wprowadzać modyfikacji w kodzie Twojej strony WWW.

### Etap 3: aktywacja HTTPS na Twojej stronie WWW

Jeśli zainstalowałeś i aktywowałeś certyfikat SSL na Twoim hostingu, ustanowiłeś połączenie SSL dla MultiSite i upewniłeś się, że Twoja strona WWW jest gotowa do włączenia protokołu HTTPS, możesz przystąpić do jego aktywacji.

> [!warning]
>
> Przed rozpoczęciem jakichkolwiek działań zalecamy wykonanie pełnej kopii zapasowej Twojej strony WWW zawierającej zarówno pliki zapisane na przestrzeni dyskowej, jak również pliki bazy danych, o ile strona używa bazy. 
>

Istnieje kilka sposobów aktywacji HTTPS na Twojej stronie WWW. Operacja ta wymaga przeprowadzenia zmian w konfiguracji strony WWW. Poniższe informacje mogą Ci pomóc w przeprowadzeniu aktywacji, jednak mogą również okazać się dla Ciebie niekompletne lub mogą nie mieć zastosowania w odniesieniu do Twojego konkretnego przypadku.

- **Używasz strony WWW zbudowanej w oparciu o gotowy system (np. WordPress)**: 

Aktywacja HTTPS wykonywana jest w interfejsie administracyjnym Twojej strony. Czynności, które należy przeprowadzić, aby aktywować HTTPS będą zależały od rodzaju strony, której używasz. 

Przykładowo możesz spotkać się z ustawieniem zatytułowanym „Wymuś HTTPS”, które należy aktywować lub koniecznością modyfikacji linku Twojej strony WWW poprzez dodanie „s”:**http**://mypersonaldomain.ovh zmieni się wówczas w: **https**://mypersonaldomain.ovh”.

Jeśli nie wiesz, jak przeprowadzić tę operację w interfejsie administracyjnym Twojej strony WWW lub czujesz się niepewnie, skorzystaj z oficjalnej dokumentacji producenta systemu Twojej strony. 

- **Używasz strony WWW, której kod został napisany przez Ciebie lub zewnętrznego wykonawcę**: 

Aktywacja HTTPS powinna zostać przeprowadzona bezpośrednio w kodzie Twojej strony WWW. Jeśli masz odpowiednie kompetencje techniczne, zmodyfikuj kod strony w taki sposób, aby dostosować ją do korzystania z protokołu HTTPS. Jeśli nie wiesz, jak to zrobić, skontaktuj się z webmasterem, który stworzył dla Ciebie tę stronę. 

Pomocny w przeprowadzeniu tej operacji może być przykładowy skrypt, który zamieszczamy poniżej. Należy dodać do go pliku **.htaccess**. Skrypt ten nie zastąpi jednak wsparcia webmastera. Pamiętaj, aby zastąpić informację ogólną zawartą w skrypcie nazwą Twojej domeny i dostosować ją, jeśli okaże się to konieczne.

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.mypersonaldomain.ovh/$1 [R,L]
```

> [!warning]
>
> W przypadku pakietów hostingowych [Cloud Web](https://www.ovhcloud.com/pl/web-hosting/cloud-web-offer/) użyj następującego skryptu:
> ```
> RewriteEngine On
> RewriteCond %{ENV:HTTPS} !on
> RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
> ```
>

### Etap 4: sprawdzenie prawidłowego działania Twojej strony WWW

Po aktywowaniu HTTPS na Twojej stronie WWW sprawdź, czy strona działa prawidłowo, i czy jej zawartość wyświetla się tak samo, jak przed operacją. W tym celu spróbuj uzyskać dostęp do strony, sprawdź, czy nie wyświetla się żaden komunikat lub ostrzeżenie i poświęć chwilę, aby sprawdzić layout poszczególnych części Twojej strony. 

Jeśli wykryjesz jakąś usterkę, zalecamy jak najszybsze jej usunięcie lub cofnięcie operacji poprzez dezaktywację HTTPS. W przypadku takiej potrzeby możesz również wykorzystać kopię zapasową Twojej strony WWW, którą wykonałeś podczas poprzedniego etapu.

Jeśli Twoja strona wyświetla się poprawnie i nie pojawia się żadne ostrzeżenie po włączeniu HTTPS, oznacza to, że operację wykonałeś prawidłowo. Jeśli chcesz aktywować HTTPS na innej stronie WWW, przeprowadź ponownie wszystkie operacje opisane w niniejszej dokumentacji.

## Sprawdź również

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>. 