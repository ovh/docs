---
title: Prezentacja usługi Load Balancer
slug: lb-prezentacja
excerpt: Poznaj nowe rozwiązanie Load Balancer 
section: Pierwsze kroki
---

**Ostatnia aktualizacja dnia 2017-01-30**  

## Wprowadzenie

Nowa usługa **Load Balancer** umożliwiająca równoważenie obciążenia, charakteryzuje się elastycznością konfiguracji i niezawodnością. Skonfiguruj Twoje produkty z usługą Load Balancer, aby stworzyć wydajną infrastrukturę.

**Poznaj nową usługę Load Balancer.**

## Wymagania początkowe

- Brak specyficznych wymagań

## W praktyce
 
Nowa usługa opiera się na solidnych rozwiązaniach open source: Haproxy dla ruchu TCP i Nginx dla ruchu UDP.
Bez ograniczeń. Nowa usługa Load Balancer może współdziałać z różnymi protokołami:

|Typ|Opis|Zalety|Technologia|
|---|---|---|---|
|HTTP|Wszystkie typy usług WWW HTTP/HTTPS|Zoptymalizowany pod kątem przetwarzania L7 (warstwa aplikacji)|Haproxy|
|TCP|Dla wszystkich usług sieciowych innych nich HTTP|Wspiera wszystkie aplikacje TCP|Haproxy|
|UDP|Dla wszystkich typów ruchu UDP|Wspiera wszystkie aplikacje UDP|Nginx|

Nowa usługa oferuje:

- ochronę Anty-DDoS,
- wsparcie dla różnych regionów (Anycast),
- zaawansowane wsparcie HTTP/HTTPS (przekierowania, nagłówki, ACL, etc.),
- kompatybilność z Additional IP,
- kompatybilność z technologią wykorzystaną w vRack,
- redundancję: Twój Load Balancer działa na odizolowanych instancjach, które również pracują w oparciu o oddzielone i redundantne urządzenia. 

### Podstawowe części składowe usługi

- Nowa usługa Load Balancer obejmuje trzy części składowe:

![Diagram - Load Balancer](images/diag_gen.png){.thumbnail}

|Części składowe|Funkcja|
|---|---| 
|Front-end|Front-end określa typ protokołu (HTTP/TCP/UDP) zastosowanego w usłudze Load Balancer. Jest to również część zawierająca port nasłuchujący usługi.|
|Farma|Farma przyjmuje ruch pochodzący z front-endu. Jest to część odpowiedzialna za równoważenie obciążenia.|
|Serwer|Ruch dociera ostatecznie do serwerów, które odpowiadają poprzez aplikację|

Dzięki tym trzem częściom składającym się na usługę Load Balancer, możliwe jest skonfigurowanie niemal wszystkich typów równoważenia obciążenia.

### Funkcje Load Balancera

#### Równoważnie obciążenia

Podstawową funkcją Load Balancera jest równoważenie obciążenia.

![Równoważenie obciążenia](images/distribute_load.png){.thumbnail}

#### Zapewnienie ciągłości działania usług

Usługa Load Balancer wykrywa automatycznie brak odpowiedzi serwera.  W takim przypadku, jeśli to możliwe, Load Balancer przekierowuje ruch z niedostępnego serwera na kolejny serwer w farmie. Dzięki temu problem zostaje rozwiązany bez naruszenia ciągłości działania Twojej usługi.

![Eliminacja przerw w ciągłości usługi](images/eliminate_downtimes.png){.thumbnail}

#### Skalowalność Twojej infrastruktury

W ramach usługi Load Balancer możesz dodać lub usunąć farmę, front-end czy też serwer bez przerywania ciągłości działania usługi.

![Skalowalność Twojej infrastruktury](images/facilitate_maintenance.png){.thumbnail}

#### Ułatwiona konserwacja infrastruktury

W przypadku zaplanowanych prac konserwacyjnych infrastruktury możesz wyłączyć jedną z farm, aby nie przyjmowała ruchu w czasie interwencji technicznej. Po zakończeniu prac, z łatwością znowu dodasz ją do infrastuktury. 

![Ułatwiona konserwacja infrastruktury](images/scale_easily.png){.thumbnail}

#### Łączenie usług

Korzystając z rozwiązania Load Balancer, możesz łączyć ze sobą różne typy usług w ramach jednej infrastruktury np.: 

- instancje Public Cloud z Additional IP,
- serwery VPS z Additional IP,
- serwery dedykowane z Additional IP,
- vRack.

![Łączenie usług](images/mix_and_match.png){.thumbnail}

#### Anycast

Load balancer umożliwia rozłożenie ruchu na kilka stref geograficznych:

![Anycast](images/anycast.png){.thumbnail}

#### Rozdzielanie wszystkich typów ruchu

Load Balancer, oprócz ruchu HTTP, obsługuje wszystkie typu ruchu TCP i UDP.

#### Serwer poczty e-mail

Tworząc farmę serwerów, zrównoważysz obciążenie i rozłożysz ruch pomiędzy serwery poczty elektronicznej:

![Mail](images/mail.png){.thumbnail}

#### Bazy danych

Dzięki Load balancerowi, zadbasz o redundancję i zrównoważone obciążenie serwerów baz danych:

![Bazy danych](images/database.png){.thumbnail}

## Sprawdź również

[Dowiedz się więcej o Haproxy](http://www.haproxy.org/#desc){.external}.

[Dowiedz się więcej o Nginx](https://pl.wikipedia.org/wiki/Nginx){.external}.

Przyłącz się do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.