---
title: "Poprawa bezpieczeństwa e-maili dzięki rejestracji DMARC"
excerpt: "Dowiedz się, jak działa DMARC i jak wdrożyć go dla Twojej usługi e-mail"
updated: 2023-12-13
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Rekord **D**omain-based **M**essage **A**uthentication, **R**eporting, and **C**onformance (DMARC) to mechanizm bezpieczeństwa poczty elektronicznej. Opiera się on na wynikach weryfikacji [SPF](/pages/web_cloud/domains/dns_zone_spf) i [DKIM](/pages/web_cloud/domains/dns_zone_dkim).

**Dowiedz się, jak działa DMARC i jak wdrożyć go dla Twojej usługi e-mail.**

> [!warning]
>
> OVHcloud oferuje usługi, ale to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. Jeśli jednak napotkasz trudności, zalecamy skontaktowanie się z [wyspecjalizowanym](/links/partner) dostawcą usług hostingowych. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) tego tutoriala.
>


## Wymagania początkowe

- Dostęp do interfejsu zarządzania domeną (przypisaną do Twojego rozwiązania e-mail) w Panelu [klienta OVHcloud](/links/manager).
- Jeden z mechanizmów uwierzytelniania, [SPF](/pages/web_cloud/domains/dns_zone_spf) i/lub [DKIM](/pages/web_cloud/domains/dns_zone_dkim) musi być skonfigurowany w strefie DNS nazwy domeny usługi e-mail.

## W praktyce

DMARC pozwala właścicielowi domeny na zarządzanie bezpieczeństwem e-maili wysyłanych przy użyciu jego nazwy domeny. Jego celem jest:

- Zgłaszanie serwerowi docelowemu działań, które mają zostać podjęte w przypadku awarii mechanizmów uwierzytelniania SPF i/lub DKIM.
- Pozwala lepiej kontrolować korzystanie z domeny i wykrywać próby sfałszowania przy użyciu wysyłanych zgłoszeń w przypadku niepowodzenia uwierzytelnienia wiadomości e-mail. Dodatkowo zwiększa również bezpieczeństwo, tworząc połączenie między protokołami SPF i DKIM.

Rekord DMARC zawiera informacje o zasadach dotyczących złośliwych wiadomości e-mail próbujących sfałszować nazwę Twojej domeny.<br>
DMARC wysyła zapytania do mechanizmów uwierzytelniania [SPF](/pages/web_cloud/domains/dns_zone_spf) i [DKIM](/pages/web_cloud/domains/dns_zone_dkim), aby zweryfikować przychodzące e-maile.<br>
Wynik tych kontroli SPF i/lub DKIM jest tłumaczony przez DMARC na „elementy działania”, jeśli wiadomość e-mail nie przejdzie kontroli. Środki te mogą obejmować poddanie e-maili objętych kwarantanną lub odrzucenie ich.

### Jak działa DMARC? <a name="how-dmarc-works"></a>

Oto przykład, jak działa DMARC.

Gdy adres **contact@mydomain.ovh** wyśle wiadomość na adres docelowy **recipient@otherdomain.ovh**, serwer poczty przychodzącej odpytuje strefę DNS domeny nadawcy **mydomain.ovh**, aby zapoznać się z instrukcjami rekordu DMARC.

Rekord DMARC informuje o polityce, jaką należy przyjąć w zależności od wyników testów SPF i DKIM. Może również podać jeden lub kilka adresów e-mail (w naszym przykładzie jako adres **report@mydomain.ovh**) używanych do otrzymywania raportów o błędach e-maili wysłanych z domeny **mydomain.ovh**.

Po przeczytaniu instrukcji rejestracji DMARC domeny **mydomain.ovh** przez serwer poczty przychodzącej "**otherdomain.ovh"** wiadomości e-mail będą dostarczane na adres **recipient@otherdomain.ovh** albo oznaczone jako "SPAM" lub odrzucone.

![DMARC](/pages/assets/schemas/emails/dns-dmarc-diagram.png){.thumbnail}

### Konfiguracja DMARC

Istnieją dwa sposoby konfiguracji DMARC w strefie DNS OVHcloud:

- Za pomocą [narzędzia konfiguracyjnego DMARC](#dmarc-record). Rekord ten umożliwia uproszczoną konfigurację DMARC. Uzupełnij pola za pomocą parametrów DMARC niezbędnych do Twojej konfiguracji. Rekord ten jest odczytywany jako rekord TXT przez serwery DNS.
- Za pośrednictwem [rekordu TXT](#txt-record). Rekord standardowy może zostać wykorzystany w związku z konfiguracją DMARC w Panelu klienta OVHcloud. Umożliwi ona integrację wszystkich tagów konfiguracyjnych DMARC, w tym tych, których brakuje w rekordzie DMARC OVHcloud. Konieczne jest jednak ścisłe przestrzeganie zasad składniowych protokołu DMARC.

#### Rekord DMARC <a name="dmarc-record"></a>

Rekord DMARC możesz dodać do strefy DNS w Panelu klienta OVHcloud. W tym celu zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}. W lewej kolumnie wybierz w sekcji `Nazwy domen`{.action} odpowiednią domenę, następnie kliknij na zakładkę `Strefa DNS`{.action}, aby przejść do strefy DNS.

Po wyświetleniu strefy DNS kliknij przycisk `Dodaj rekord`{.action}, a następnie "Pola e-mail" `DMARC`{.action}.

- **Subdomena**: ten wpis musi **musi zaczynać się od** `_dmarc`. Jeśli stosujesz DMARC do całej domeny, nie wpisuj w tym polu niczego innego niż `_dmarc`. Jeśli ustawisz DMARC na subdomenę swojej domeny głównej, dodaj subdomenę po `_dmarc`. Na przykład, jeśli chcesz zastosować DMARC do subdomeny *subdomain.mydomain.ovh*, musisz wpisać `_dmarc.subdomain` w polu „subdomena” dla nazwy domeny *mydomain.ovh*.

Poniżej znajduje się wyczerpujący opis tagów używanych do **rejestracji DMARC** OVHcloud:

- **Wersja (v=)**: obowiązkowe pole określające wersję protokołu DMARC.

- **Reguła dla domeny (p=)**: zasady do przyjęcia przez adresata na wniosek właściciela domeny nadawcy. Polityka dotyczy badanej domeny i subdomen, chyba że znacznik subdomeny **sp=** wskazuje na inne instrukcje. Możliwe wartości to:
    - *none*: Właściciel domeny nie żąda żadnych konkretnych działań dotyczących dostarczania wiadomości.
    - *quarantine*: jeśli weryfikacja mechanizmu DMARC nie powiedzie się, adresaci muszą uznać e-maile za podejrzane. W zależności od możliwości serwera docelowego może to oznaczać "umieszczenie w folderze spamu" i/lub "zgłoś jako podejrzanego".
    - *reject*: odrzucanie e-maili, które nie powiodły się podczas weryfikacji mechanizmu DMARC.

> [!warning]
>
> Konfiguracja parametru `p=` może mieć duży wpływ na dostarczalność e-maili Twojej domeny. Zalecamy skonfigurowanie `p=none` i przeprowadzenie przez kilka tygodni analizy raportów o niepowodzeniach, aby usunąć ewentualne anomalie. Zmiana `p=quarantine` lub `p=reject` wymaga pełnej kontroli nad ustawieniami bezpieczeństwa e-mail dla [SPF](/pages/web_cloud/domains/dns_zone_spf) i [DKIM](/pages/web_cloud/domains/dns_zone_dkim). Zastosowanie czynnika `pct=`, przedstawionego poniżej, umożliwia stopniowe przechodzenie.

- **Procent filtrowanych wiadomości (pct=)** (wartość z zakresu od 0 do 100, wartość domyślna to 100): Procent przepływu wiadomości, do którego ma być stosowana polityka DMARC. Celem znacznika "pct" jest umożliwienie właścicielom domen powolnego wdrażania mechanizmu DMARC.

- **URI dla tworzenia globalnych raportów (rua=)**: adresy, do których mają być wysyłane raporty (zwykły tekst rozdzielany przecinkami). Można określić dowolny prawidłowy identyfikator URI. Wpis "mailto:" musi poprzedzać adres e-mail odbiorcy (na przykład: `mailto:address@example.com`).

- **Reguła dla subdomen (sp=)**: Polityka dla wszystkich subdomen, jaką ma przyjąć odbiorca. Dotyczy to tylko subdomen domeny, do której jest wysyłany zapytanie, a nie samej domeny. Jego składnia jest taka sama jak w tagu "p" zdefiniowanym powyżej. Jeśli ten znacznik nie istnieje, dla subdomen stosowana jest polityka określona przez znacznik "p".

- **Tryb wyrównania dla SPF (aspf=)** (domyślnie `r`): wskazuje tryb wyrównania SPF. Wartości są następujące:
    - `r`(relaxed) w przypadku trybu elastycznego: wiadomości e-mail mogą być na przykład wysyłane z subdomeny zadeklarowanej nazwy domeny. Mówimy tu o częściowym wyrównaniu.
    - `s`(strict) w przypadku trybu ścisłego: wiadomości e-mail powinny być wysyłane tylko z zadeklarowanej nazwy domeny. Wynik jest zatem "wyrównany".

> [!primary]
>
> W ramach mechanizmów uwierzytelniania SPF i DKIM, **wyrównanie** odnosi się do zgodności między nazwą domeny (i/lub podpisem domeny) użytą podczas przesyłania **a** nazwą domeny zarejestrowaną w tych mechanizmach.
>
> **Przykłady**
>
> - **Wyrównanie**: gdy adres *john.smith@mydomain.ovh* przekazuje wiadomość z usługi e-mail powiązanej z domeną *mydomain.ovh* i gdy mechanizmy uwierzytelniania SPF i DKIM zostały skonfigurowane, otrzymujemy wyrównany wynik.
> - **Częściowo wyrównany**: gdy adres *john.smith@subdomain.mydomain.ovh* przekazuje wiadomość z usługi e-mail powiązanej z domeną *mydomain.ovh*, ale mechanizmy uwierzytelniania SPF i DKIM zostały skonfigurowane tylko dla domeny głównej (czyli *mydomain.ovh*), otrzymujemy częściowo wyrównany wynik.
> - **Niepowodzenie mechanizmów uwierzytelniania**: nadawca próbuje wysłać wiadomość e-mail jako *john.smith@mydomain.ovh*, korzystając z innego adresu (np. *robert@example.com*) lub korzystając z usługi wysyłki e-maili, która nie jest wymieniona w SPF. W takim przypadku mechanizmy uwierzytelniania SPF i DKIM zwracają błąd jako wynik.

![DMARC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-01.png){.thumbnail}

#### Rekord TXT <a name="txt-record"></a>

Możesz dodać rekord TXT do strefy DNS w [Panelu klienta OVHcloud](/links/manager) i przejść do sekcji `Web Cloud`{.action}. Kliknij `Domeny`{.action}, następnie nazwę wybranej domeny. Teraz przejdź do zakładki `Strefa DNS`{.action}.

Po wyświetleniu strefy DNS kliknij przycisk `Dodaj rekord`{.action}, a następnie "Rozszerzone pola" `TXT`{.action}.

- **Subdomena**: ten wpis musi **musi zaczynać się od** `_dmarc`. Jeśli stosujesz DMARC do całej domeny, nie wpisuj w tym polu niczego innego niż `_dmarc`. Jeśli ustawisz DMARC na subdomenę swojej domeny głównej, dodaj subdomenę po `_dmarc`. Na przykład, jeśli chcesz zastosować DMARC do subdomeny *subdomain.mydomain.ovh*, musisz wpisać `_dmarc.subdomain` w polu „subdomena” dla nazwy domeny *mydomain.ovh*

Poniżej znajduje się lista znaczników używanych do tworzenia **rekordu TXT** z parametrami DMARC. Ta lista uzupełnia znaczniki wymienione w poprzedniej sekcji "[Rekord DMARC](#dmarc-record)".

- **adkim** (wartość domyślna to `r`): wskazuje tryb wyrównania DKIM. Wartości są następujące:
    - `r`(relaxed) w trybie elastycznym: wiadomości e-mail, których nie można uwierzytelnić przy użyciu DKIM, są oznaczane przez serwer docelowy jako "niechciane".
    - `s`(strict) dla trybu ścisłego: wiadomości e-mail, których nie powiodło się uwierzytelnienie DKIM, są odrzucane przez serwer docelowy.

- **ruf** (rozdzielana przecinkami lista zwykły tekst): adresy, dla których mają być raportowane specyficzne dla komunikatu informacje o błędzie. Jeśli ten tag jest obecny, właściciel domeny nadawcy prosi adresatów o przesyłanie szczegółowych raportów o niepowodzeniach wiadomości e-mail, które nie powiodły się w ocenie DMARC (patrz tag `fo` poniżej). Format wiadomości do wygenerowania musi być zgodny z formatem określonym dla znacznika `rf`. Wpis "mailto:" musi poprzedzać adres e-mail odbiorcy (na przykład: `mailto:address@example.com`).

- **fo** (zwykły tekst; wartość domyślna to `0`): Opcje szczegółowego raportu o niepowodzeniu. Generatory raportów mogą zdecydować się na dostosowanie do żądanych opcji. Zawartość tego tagu powinna zostać zignorowana, jeśli tag `ruf` (powyżej) nie jest również określony. Wartość tego znacznika to lista znaków oddzielonych dwukropkiem (`:`), określająca następujące opcje raportu o niepowodzeniu:
     - **0**: generuje raport o niepowodzeniu DMARC, jeśli wszystkie mechanizmy uwierzytelniania (DKIM **I** SPF) nie mogą wygenerować wyrównanego wyniku "pass".
     - **1**: Generuje raport o niepowodzeniu DMARC, jeśli mechanizm uwierzytelniania (DKIM **LUB** SPF) wygeneruje coś innego niż wyrównany wynik "success".
     - **d**: generuje raport o niepowodzeniu DKIM, jeśli mechanizm uwierzytelniania DKIM nie powiedzie się, niezależnie od jego wyrównania.
     - **s**: generuje raport o niepowodzeniu SPF, jeśli mechanizm uwierzytelniania SPF nie powiedzie się bez względu na jego wyrównanie.

- **rf** (wartości w postaci zwykłego tekstu oddzielone przecinkami, wartością domyślną jest `afrf`): Ten znacznik wskazuje oczekiwany typ formatu raportów, które podają szczegółowe informacje o błędach uwierzytelniania wiadomości. Obecnie obsługiwany jest tylko format `afrf` (Auth Failure Reporting Format).

- **ri** (32-bitowa liczba całkowita niepodpisana jako zwykły tekst; domyślnie 86400): wymagany interwał w sekundach między raportami zagregowanymi. Ten znacznik określa częstotliwość, z jaką odbiorcy wiadomości e-mail mają generować zbiorcze raporty dotyczące wyników oceny DMARC dla danej domeny.

![DMARC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-02.png){.thumbnail}

#### Przykłady rejestracji <a name="record-example"></a>

> [!warning]
>
> W naszych dwóch przykładach parametr `p=`jest używany w formie zawężającej, aby zilustrować zachowanie usługi e-mail w tym przypadku.
>
> Konfiguracja parametru `p=` może mieć duży wpływ na dostarczalność e-maili Twojej domeny. Zalecamy skonfigurowanie `p=none` i przeprowadzenie przez kilka tygodni analizy raportów o niepowodzeniach, aby naprawić ewentualne anomalie. Zmiana na `p=quarantine` lub `p=reject` wymaga pełnej kontroli nad ustawieniami bezpieczeństwa e-mail dla [SPF](/pages/web_cloud/domains/dns_zone_spf) i [DKIM](/pages/web_cloud/domains/dns_zone_dkim). Zastosowanie czynnika `pct=`, przedstawionego poniżej, umożliwia stopniowe przechodzenie.

##### Pierwszy przykład

Aby zilustrować ten pierwszy przykład, użyliśmy [rekordu DMARC](#dmarc-record) w strefie DNS i zastosowaliśmy do niego następujące ustawienia:

![DMARC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-03.png){.thumbnail}

Otrzymujemy następujący wynik:

```
"v=;p=quarantine;pct=100;rua=mailto:report@mydomain.ovh;aspf=s;"
```

Wszystkie wysłane e-maile (**pct=100**) są przetwarzane przez mechanizmy uwierzytelniania SPF i/lub DKIM. E-maile, które nie przeszły testu SPF są automatycznie odrzucane, ponieważ "**aspf=s**" (mechanizm SPF w trybie ścisłym). Raport o błędach mechanizmów uwierzytelniania SPF i/lub DKIM jest wysyłany na adres `report@mydomain.ovh` (**rua=mailto:report@mydomain.ovh**).

##### Drugi przykład

W tym drugim przykładzie użyliśmy [rekordu TXT](#txt-record), aby użyć tagów, które nie są dostępne za pośrednictwem uproszczonego [rekordu DMARC](#dmarc-record).

![DMARC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-04.png){.thumbnail}

Otrzymujemy następujący wynik:

```
"v=; p=quarantine; pct=100; ruf=mailto:report@mydomain.ovh; fo=0; adkim=r; aspf=s; adkim=r; ri=86400"
```

- **p=quarantine**: e-maile, które nie przeszły testu DMARC są traktowane jako "podejrzane".

- **pct=100**: Polityka DMARC dotyczy 50% wiadomości wysyłanych z kanałów e-mail właściciela domeny.

- **ruf=mailto:report@mydomain.ovh**: adres e-mail, na który należy wysyłać szczegółowe raporty o niepowodzeniach, korzystając z argumentu "mailto".

- **fo=0**: Opcje generowania raportów o niepowodzeniach. Wartość "0" wskazuje, że raporty o błędach DMARC powinny być generowane tylko wtedy, gdy mechanizmy uwierzytelniania SPF i DKIM nie wygenerują wyrównanego wyniku "pass".

- **adkim=r**: tryb wyrównania identyfikatora DKIM wymagany przez właściciela domeny to "relaxed" (tryb elastyczny). W tym trybie DKIM musi dostarczyć prawidłowy podpis, a identyfikator nagłówka "From" może być częściowo wyrównany.

- **aspf=s**: wymagany tryb wyrównania identyfikatora SPF to "strict". Oznacza to, że identyfikator SPF przypisanej domeny musi dokładnie odpowiadać adresowi IP nadawcy wiadomości.

- **adkim=r**: tryb wyrównania identyfikatora DKIM wymagany przez właściciela domeny to "relaxed" (tryb elastyczny). W tym trybie DKIM musi dostarczyć prawidłowy podpis, a identyfikator nagłówka "From" może być częściowo wyrównany.

- **RI=86400**: Ustawia żądany interwał między raportami zagregowanymi w sekundach. W tym przypadku zagregowany raport musi być generowany co najmniej raz na 86 400 sekund (czyli raz dziennie).

## Sprawdź również <a name="go-further"></a>

Jeśli potrzebujesz specjalistycznych usług (SEO, programowanie, etc.), skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz uzyskać wsparcie w zakresie użytkowania i konfiguracji Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami wsparcia](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).