---
title: "Hosting WWW - Ustaw HTTPS na stronie WWW"
excerpt: "Dowiedz się, jak aktywować certyfikat SSL na Twojej stronie WWW poprzez HTTPS"
updated: 2024-02-26
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Dzięki hostingowi OVHcloud możesz uzyskać [certyfikat SSL](/links/web/hosting-options-ssl). Certyfikat ten gwarantuje poufność przesyłanych danych, a Twoje strony WWW stają się dostępne za pomocą *HTTPS*. Aby Twoje strony WWW mogły korzystać z bezpiecznego połączenia, wykonaj wcześniej kroki opisane w niniejszej dokumentacji.

**Dowiedz się, jak aktywować certyfikat SSL na Twojej stronie WWW za pomocą protokołu HTTPS.**

## Wymagania początkowe

- Posiadanie [certyfikatu SSL](/links/web/hosting-options-ssl){.external} zainstalowanego na [hostingu OVHcloud](/links/web/hosting){.external}.
- Posiadanie co najmniej jednej strony WWW zainstalowanej i dostępnej na Twoim hostingu OVHcloud.
- Zalogowanie do[Panelu klienta OVHcloud](/links/manager){.external}, sekcja `Web Cloud`{.action}.

## W praktyce

Bezpieczeństwo jest niezwykle istotnym aspektem korzystania z Internetu. Z pewnością przywiązujesz szczególną wagę do poufności Twoich danych oraz sposobu, w jaki są one przesyłane w Internecie. Internauci bardziej ufają stronom WWW dostępnym za pomocą bezpiecznego połączenia, szczególnie, jeśli przesyłane dane są wrażliwe. 

Kiedy odwiedzasz stronę WWW używającą bezpiecznego połączenia, na pasku adresowym (URL) Twojej przeglądarki wskazuje to na kilka sposobów: 

- logo (zazwyczaj kłódkę);
- wiadomość;
- kod kolorowy; 
- używany protokół, *HTTPS* zamiast *HTTP*.

A zatem, czy Twoja strona WWW używa bezpiecznego połączenia czy też nie, staje się dla internautów coraz bardziej widoczny.

![httpswebsite](/pages/assets/screens/other/browsers/urls/url-not-secure.png){.thumbnail}

**Przełączenie strony WWW na *HTTPS* może być wrażliwą operacją**. Większość operacji, które należy wykonać, zostanie wykonana w kodzie źródłowym Twojej strony WWW. Jeśli działania nie zostaną przeprowadzone prawidłowo, istnieje ryzyko, że w wynikach wyszukiwania (Google, Yahoo!, bing, etc.) tracisz pozycjonowanie (SEO), a Twoja strona WWW będzie całkowicie niedostępna.

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Jeśli jednak napotkasz trudności, zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner). Niestety firma OVH nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.
>

Poniżej znajdziesz najważniejsze kroki opisane w dalszej części tego przewodnika, aby aktywować Twoją stronę WWW przy użyciu *HTTPS*:

- [Etap 1 - Aktywacja certyfikatu SSL na hostingu](#enable-ssl): umożliwia aktywację certyfikatu SSL lub weryfikację, czy jest on prawidłowo zainstalowany na Twoim hostingu/stronie WWW.
- [Etap 2 - Weryfikacja środowiska technicznego dla Twojej strony WWW](#check-environment) : umożliwia sprawdzenie przed podjęciem jakichkolwiek czynności, czy aktywacja protokołu HTTPS* na Twojej stronie WWW nie spowoduje problemów.
- [Etap 3 - Włącz *HTTPS* na Twojej stronie WWW](#https-enable): umożliwia Twojej stronie WWW korzystanie z protokołu *HTTPS*. Metoda opisana w tym przewodniku nie jest uniwersalna i będzie zależeć od używanej strony internetowej.
- [Etap 4 - sprawdzenie prawidłowego działania Twojej strony WWW](#check-your-website): umożliwia sprawdzenie, czy Twoja strona WWW wyświetla się poprawnie po aktywacji *HTTPS*.

### Etap 1 - Aktywacja certyfikatu SSL na hostingu <a name="enable-ssl"></a>

Aby aktywować certyfikat SSL na Twoim hostingu lub sprawdzić, czy certyfikat SSL jest już zainstalowany na Twojej stronie WWW, zapoznaj się z naszym przewodnikiem: "[Zarządzanie certyfikatem SSL na Twoim hostingu](/pages/web_cloud/web_hosting/ssl_on_webhosting)".

### Etap 2 - Weryfikacja środowiska technicznego dla Twojej strony WWW <a name="check-environment"></a>

Przed wprowadzeniem zmian w konfiguracji Twojej strony WWW, koniecznie upewnij się, czy jest ona przygotowana do poprawnego korzystania z protokołu *HTTPS*. Nie istnieje uniwersalne podejście, ponieważ zależy ono od strony internetowej, której używasz.

Poniższe informacje są zatem ogólne. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner).

#### 2.1 - Unikaj mieszania zawartości HTTP i HTTPS

Jeśli Twoja strona wyświetla się *HTTPS*, powinieneś unikać mieszania treści wyświetlanych poprzez *HTTP* i *HTTPS* na tej samej stronie i całej stronie WWW. Dlatego, jeśli Twoja strona WWW wyświetla się *HTTPS*, upewnij się, że cała jej zawartość ładuje się poprzez *HTTPS*.

W przeciwnym razie będziesz oferować na swojej stronie internetowej treści uznawane przez przeglądarki internetowe za mieszane (*Mixed Content*), czyli treści uznawane za potencjalnie niezabezpieczone na stronie oznaczonej jako bezpieczna.

Mogą wystąpić dwa przypadki *Mixed Content*:

- **Witryna sieci Web wyświetla się poprawnie, ale na pasku adresu** widoczne jest ostrzeżenie. Treści uznawane przez przeglądarkę internetową za pasywne (obrazy, filmy, etc.) są ładowane na stronę z niezabezpieczonego źródła.

- **Niektóre części witryny sieci Web nie są wyświetlane, a na pasku adresu** widoczne jest ostrzeżenie. Treści uznawane przez przeglądarkę internetową za aktywne (skrypty, iframe, pliki CSS, etc.) pochodzące z niezabezpieczonego źródła zostały zablokowane.

Upewnij się, że cała zawartość załadowana z Twojej witryny sieci Web pochodzi z zabezpieczonego źródła.

![httpswebsite](/pages/assets/screens/other/browsers/urls/connection-isnt-secure.png){.thumbnail}

Pamiętaj, że nawet jeśli na Twoim hostingu zainstalowany jest certyfikat SSL, treści hostowane na hostingu mogą być ładowane przy użyciu *HTTP* lub *HTTPS*. To zależy od sposobu, w jaki oznaczyłeś te treści w kodzie Twojej strony WWW. Upewnij się zatem, czy wszystkie treści ładowane z Twojej strony WWW używają protokołu *HTTPS*.

Zwróć na przykład szczególną uwagę na adresy URL używane w kodzie Twojej strony WWW. Jeśli to możliwe:

- użyj adresów względnych, takich jak:`../img/header.png`;
- unikaj stosowania adresów bezwzględnych zawierających protokół *HTTP*, np.: `http://domain.tld/img/header.png`.

W razie potrzeby dostosuj odpowiednio kod Twojej strony WWW. 

Jeśli używasz "strony zbudowanej w oparciu o gotowy system CMS" (WordPress, PrestaShop, Drupal, Joomla!), struktura tych stron jest zazwyczaj zaprojektowana tak, aby działały w oparciu o *HTTPS*. Nie musisz wprowadzać żadnych zmian w kodzie Twojej strony WWW.

#### 2.2 - Unikaj duplikowania treści

Upewnij się również, czy Twoja strona WWW jest zakodowana w zależności od tego, w jaki sposób jest zakodowana. Upewnij się, że nie będzie ona dostępna za pośrednictwem różnych adresów, na przykład jednego używającego *HTTP*, drugiego używającego *HTTPS*. W takim przypadku te same treści będą dostępne z kilku różnych adresów, co przez wyszukiwarki internetowe uznawane jest za treści zduplikowane ( *duplicate content*).

Może to spowodować obniżenie poziomu pozycjonowania (SEO) Twojej strony WWW. Upewnij się zatem, że Twój kod "wymusza" użycie *HTTPS*, za pomocą reguły przepisywania, którą należy umieścić w kodzie Twojej strony WWW, gdy chcesz włączyć *HTTPS*.

Pamiętaj, że jeśli używasz "strony WWW zbudowanej w oparciu o gotowy system", jej struktura automatycznie zarządza regułami przepisywania. W tym przypadku nie musisz wprowadzać modyfikacji w kodzie Twojej strony WWW.

### Etap 3 - Aktywacja HTTPS na Twojej stronie WWW <a name="https-enable"></a>

Jeśli Twój hosting posiada aktywny certyfikat SSL, a Twoja strona WWW korzysta z aktywnego certyfikatu [MultiSite](/pages/web_cloud/web_hosting/multisites_configure_multisite), możesz go aktywować.

> [!warning]
>
> Przed rozpoczęciem jakichkolwiek działań zalecamy wykonanie pełnej kopii zapasowej Twojej strony WWW. Kopia zapasowa powinna zawierać nie tylko pliki obecne na [przestrzeni dyskowej FTP](/pages/web_cloud/web_hosting/ftp_save_and_backup), ale także pliki [bazy danych](/pages/web_cloud/web_hosting/sql_database_export), jeśli strona internetowa używa bazy.
>
> Operacje należy wykonać bezpośrednio z plików, z których składa się strona WWW. W przypadku trudności skontaktuj się z [wyspecjalizowanym dostawcą](/links/partner).
>

Istnieje kilka sposobów aktywacji *HTTPS* na Twojej stronie WWW. Operacja ta wymaga przeprowadzenia zmian w konfiguracji strony WWW. Poniższe informacje mogą Ci pomóc w przeprowadzeniu aktywacji, jednak mogą również okazać się dla Ciebie niekompletne lub mogą nie mieć zastosowania w odniesieniu do Twojego konkretnego przypadku.

- **Używasz strony "gotowej do użycia" (WordPress, PrestaShop, Drupal, Joomla!, etc.)**:

Aktywacja *HTTPS* jest zazwyczaj wykonywana w interfejsie administracyjnym Twojej strony WWW. Czynności, które należy przeprowadzić, aby aktywować *HTTPS* różnią się w zależności od używanej przez Ciebie "strony gotowej do użycia". 

Przykładowo możesz spotkać się z ustawieniem zatytułowanym "Wymuś *HTTPS*", które należy aktywować lub koniecznością modyfikacji linku Twojej strony WWW poprzez dodanie `s`: "**http**://domain.tld" zmieni się wówczas w "**https**://domain.tld".

Jeśli nie wiesz, jak przeprowadzić tę operację w interfejsie administracyjnym Twojej "strony WWW gotowej do użycia" lub w razie wątpliwości, skorzystaj z oficjalnej dokumentacji producenta systemu Twojej strony WWW. 

- **Używasz strony zakodowanej przez siebie (lub przez dostawcę)**: 

Aktywacja *HTTPS* powinna zostać przeprowadzona bezpośrednio w kodzie Twojej strony WWW. Jeśli masz odpowiednie kompetencje techniczne, zmodyfikuj kod strony w taki sposób, aby dostosować ją do korzystania z protokołu *HTTPS*. W razie wątpliwości, jakie kroki należy wykonać, skontaktuj się z autorem strony www. 

W razie potrzeby poniżej znajdują się przykładowe skrypty do umieszczenia w pliku **.htaccess**. Nie zastąpią one jednak wsparcia webmastera. Zamień nazwę domeny `domain.tld` w pierwszym skrypcie na Twoją własną nazwę domeny i w razie potrzeby dostosuj ją.

```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://domain.tld/$1 [R,L]
```

Ten pierwszy przykład skryptu powoduje przekierowanie wszystkich adresów URL przychodzących przez port 80, *HTTP*, na bezpieczny adres *HTTPS* `https://domain.tld/`.

```bash
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Drugi przykład skryptu powoduje przekształcenie wszystkich adresów URL przychodzących przez protokół *HTTP* w *HTTPS*, przy czym pozostała część adresu URL po symbolach `://` pozostaje nienaruszona.

W tym drugim przykładzie upewnij się, że wszystkie Twoje domeny lub subdomeny docelowe mają aktywny certyfikat SSL.

**Uwaga**, w przypadku ofert hostingowych [Cloud Web](/links/web/hosting-cloud-web-offer) należy użyć następującego skryptu:

```bash
RewriteEngine On
RewriteCond %{ENV:HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
```

### Etap 4 - Sprawdź, czy Twoja strona WWW działa prawidłowo <a name="check-your-website"></a>

Po aktywacji *HTTPS* na Twojej stronie WWW sprawdź, czy strona działa prawidłowo, i czy jej zawartość wyświetla się tak samo, jak przed operacją. W tym celu spróbuj uzyskać dostęp do strony, sprawdź, czy nie wyświetla się żaden komunikat lub ostrzeżenie i poświęć chwilę, aby sprawdzić wygląd poszczególnych części Twojej strony. 

Jeśli wykryjesz jakąś usterkę, spróbuj jak najszybciej ją naprawić lub cofnij się, wyłączając *HTTPS*. W przypadku takiej potrzeby możesz również wykorzystać kopię zapasową Twojej strony WWW, którą wykonałeś podczas[etapu 3](#https-enable).

Jeśli Twoja strona wyświetla się poprawnie i nie pojawia się żadne ostrzeżenie po włączeniu *HTTPS*, oznacza to, że operację wykonałeś prawidłowo. Jeśli chcesz aktywować *HTTPS* na innej stronie WWW, przeprowadź ponownie wszystkie operacje opisane w niniejszej dokumentacji.

## Sprawdź również <a name="go-further"></a>

[Zarządzanie certyfikatem SSL na Twoim hostingu](/pages/web_cloud/web_hosting/ssl_on_webhosting)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).