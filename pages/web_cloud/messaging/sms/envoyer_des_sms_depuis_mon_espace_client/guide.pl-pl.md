---
title: Wysyłanie wiadomości SMS z Panelu klienta
excerpt: Dowiedz się, jak w łatwy sposób wysyłać wiadomości SMS z Panelu klienta OVHcloud
updated: 2025-10-28
---

## Wprowadzenie

Wiadomości SMS możesz wysyłać bezpośrednio z Panelu klienta. W tym przewodniku znajdziesz instrukcję krok po kroku, jak wysłać Twoje pierwsze wiadomości SMS.

## Wymagania początkowe

- Posiadanie konta SMS OVHcloud z zasileniami SMS
- Zalogowanie do[Panelu klienta OVHcloud](/links/manager), część `Telefonia`{.action}, następnie `SMS`{.action}.

![Panel klienta Telecom SMS](/pages/assets/screens/control_panel/product-selection/telecom/tpl-telecom-03-en-sms.png){.thumbnail}

## W praktyce

Zaloguj się do [Panelu klienta](/links/manager) i wybierz opcję `Telefonia`{.action}. Następnie kliknij pozycję `SMS`{.action} po lewej stronie i wybierz Twoje konto SMS.

Pole „Wyślij SMS” jest pierwszym dostępnym elementem na liście działań.

![menedżer wysyłki smsów](images/sms-send-control-panel01E.png){.thumbnail}

### Etap 1: konfigurowanie nadawcy i odbiorcy

> [!primary]
> Aby uzyskać więcej informacji na temat tworzenia i korzystania z nadawcy, zapoznaj się z naszym przewodnikiem "[Wszystko, co musisz wiedzieć o nadawcach SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms)".

Po przejściu na stronę wysyłania wiadomości SMS możesz uzupełnić różne parametry, aby jak najlepiej dostosować wysyłanie wiadomości do Twoich potrzeb.

![menedżer wysyłki smsów](images/sms-send-control-panel02E.png){.thumbnail}

Jako nadawcę wiadomości SMS (1) możesz wybrać numer skrócony umożliwiający otrzymanie odpowiedzi (dotyczy wyłącznie kont OVHcloud we Francji) lub nadawcę alfanumerycznego.
Następnie podaj numer odbiorcy (2) w formacie międzynarodowym (+48xxxxxxxx).
Więcej informacji na temat tworzenia nadawcy znajdziesz w [etapie 3: wybór nadawcy wiadomości SMS](#etap-3-wybor-nadawcy-wiadomosci-sms).

Wiadomości SMS możesz także wysyłać do wielu odbiorców. Możesz to zrobić na dwa sposoby:

- Za pośrednictwem listy odbiorców w formacie .csv przez przycisk „Zarządzaj odbiorcami”.
Więcej informacji znajdziesz w [przewodniku dotyczącym list odbiorców wiadomości SMS](/pages/web_cloud/messaging/sms/liste_de_destinataire_sms).

- Za pośrednictwem książki adresowej (3). Możesz ją utworzyć bezpośrednio w Panelu klienta lub zaimportować z pliku w formacie .csv lub .txt.
Zapoznaj się z [przewodnikiem dotyczącym książek adresowych odbiorców wiadomości SMS](/pages/web_cloud/messaging/sms/gerer_mes_carnets_dadresses_sms).

### Etap 2: tworzenie wiadomości SMS

> [!primary]
>
> Ze względów prawnych wiadomości SMS o charakterze informacji handlowej będą wysyłane **tylko w godz. 8:00-20:00, od poniedziałku do soboty**.

Po wybraniu nadawcy i wpisaniu odbiorców możesz przejść do tworzenia wiadomości.

![menedżer wysyłki smsów](images/sms-send-control-panel03E.png){.thumbnail}

Wpisz wiadomość w przeznaczonym do tego okienku (1). Widoczny jest licznik, który informuje o wykorzystanej liczbie znaków i odpowiadającej temu liczbie wiadomości SMS (2).

W dwóch poniższych tabelach wymienione są znaki dozwolone w kodowaniu 7-bitowym. Znaki z tabeli „Extensions” liczą się podwójnie. 

Maksymalny rozmiar wiadomości SMS wynosi 160 znaków w kodowaniu 7-bitowym (norma GSM 03.38).

Użycie znaków niewymienionych w tych tabelach spowoduje przejście na kodowanie Unicode i ograniczenie rozmiaru wiadomości SMS do maksymalnie 70 znaków.

![Lista znaków SMS](images/smsauthorizedcharacters.png){.thumbnail}

#### Zaawansowane opcje

![menedżer wysyłki smsów](images/sms-send-control-panel-advanced.png){.thumbnail}

W tej sekcji możesz przeprowadzić wysyłkę natychmiastową lub odroczoną (1).

Proponujemy trzy formaty wysyłki (Standard / Flash / Sim) (2), ale ta funkcja jest przestarzała.

## Sprawdź również

Dołącz do społeczności [naszych użytkowników](/links/community).
