---
title: "FAQ dotyczące OVHcloud SMS"
excerpt: "Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące usługi OVHcloud SMS"
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Wprowadzenie

Znajdź tutaj najczęściej zadawane pytania dotyczące usługi OVHcloud SMS.

## FAQ

### Konto i kredyty

/// details | Jak utworzyć konto OVHcloud SMS?

Aby utworzyć konto OVHcloud SMS, przejdź na [stronę ofert OVHcloud SMS](/links/telecom/sms) i wybierz pakiet kredytów odpowiadający Twoim potrzebom. Zamówienie automatycznie utworzy konto SMS dostępne z poziomu [Panelu klienta OVHcloud](/links/manager), w [sekcji SMS](/links/control-panel/telecom-sms). Każde konto SMS jest identyfikowane unikalną nazwą (np. `sms-xx12345-1`). Możesz posiadać wiele kont SMS na tym samym identyfikatorze klienta OVHcloud, co pozwala na rozdzielenie zastosowań (transakcyjne, marketingowe, powiadomienia wewnętrzne) i budżetów.

///

/// details | Jak działa system kredytów SMS?

Usługa OVHcloud SMS działa w systemie przedpłaconym. Jeden kredyt odpowiada standardowemu SMS-owi o długości 160 znaków (kodowanie GSM 7-bit) wysłanemu na numer francuski. Koszt kredytu zależy od:

- **Miejsca docelowego:** SMS na Francję metropolitalną zużywa 1 kredyt. Kierunki międzynarodowe zużywają więcej kredytów (patrz [cennik OVHcloud](/links/telecom/sms-prices)).
- **Długości wiadomości:** SMS przekraczający 160 znaków jest automatycznie dzielony na kilka połączonych wiadomości SMS. Wiadomość o długości 300 znaków zużywa 2 kredyty.
- **Kodowania:** jeśli Twoja wiadomość zawiera znaki specjalne lub akcenty nieobsługiwane przez GSM 7-bit, stosowane jest kodowanie Unicode (UCS-2), ograniczające każdy SMS do 70 znaków.

Stan kredytów można sprawdzić w czasie rzeczywistym z poziomu Panelu klienta OVHcloud lub za pośrednictwem API.

Więcej informacji znajdziesz w przewodniku "[Zarządzanie kredytami SMS i włączanie automatycznego doładowania](/pages/web_cloud/messaging/sms/activer_la_recharge_automatique_du_credit_sms)".

///

/// details | Jak włączyć automatyczne doładowanie kredytów SMS?

Automatyczne doładowanie pozwala na automatyczne uzupełnienie konta SMS, gdy saldo spadnie poniżej określonego progu. [Przejdź do sekcji SMS](/links/control-panel/telecom-sms) w Panelu klienta OVHcloud, wybierz konto SMS, a następnie przejdź do `Opcje`{.action} > `Automatyczne ładowanie`{.action}. Ustaw próg uruchomienia i kwotę doładowania. Na koncie musi być zarejestrowany ważny sposób płatności. Opcja ta jest niezbędna w przypadku wysyłania transakcyjnych SMS-ów, gdzie brak kredytów spowodowałby zablokowanie krytycznych powiadomień.

Więcej informacji znajdziesz w przewodniku "[Zarządzanie kredytami SMS i włączanie automatycznego doładowania](/pages/web_cloud/messaging/sms/activer_la_recharge_automatique_du_credit_sms)".

///

/// details | Jak wyświetlić historię wysłanych i odebranych SMS-ów?

[Przejdź do sekcji SMS](/links/control-panel/telecom-sms) w Panelu klienta OVHcloud, wybierz konto SMS, a następnie zakładkę `Wiadomość SMS i kampania`{.action} > `Zarządzanie SMS-ami`{.action} > `Historia wysyłki`{.action} lub `Otrzymane wiadomości SMS`{.action}. Historię można filtrować według daty, nadawcy, odbiorcy lub wiadomości. Historia jest przechowywana przez 6 miesięcy. Można ją również wyeksportować w formacie CSV do analizy.

Więcej informacji znajdziesz w przewodniku "[Zarządzanie historią SMS](/pages/web_cloud/messaging/sms/gerer_l_historique_des_sms)".

///

/// details | Jak skonfigurować alerty o progu kredytów?

Dla **użytkowników API**: [przejdź do sekcji SMS](/links/control-panel/telecom-sms), wybierz konto, a następnie `Użytkownicy API`{.action}. Kliknij `...`{.action} > `Limit`{.action} dla odpowiedniego użytkownika i skonfiguruj:

- **Próg alertu:** pozostała liczba kredytów, poniżej której wysyłane jest powiadomienie.
- **Typ powiadomienia:** e-mail, SMS lub oba.

Dla **konta globalnego** automatyczne doładowanie oferuje alternatywę: automatycznie doładowuje konto, gdy saldo spadnie poniżej progu. Oba mechanizmy są komplementarne.

Więcej informacji znajdziesz w przewodniku "[Wszystko o użytkownikach SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms)".

///

### Wysyłanie SMS-ów

/// details | Jak wysłać SMS z Panelu klienta OVHcloud?

[Przejdź do sekcji SMS](/links/control-panel/telecom-sms) w Panelu klienta OVHcloud, wybierz konto SMS, a następnie kliknij `Wyślij SMS`{.action}. Wypełnij:

- **Nadawca:** numer krótki (umożliwiający odpowiedzi, tylko Francja), niestandardowy nadawca alfanumeryczny lub wirtualny numer komórkowy.
- **Odbiorca/odbiorcy:** wpisz jeden lub więcej numerów w formacie międzynarodowym (np. `+33612345678`) lub wybierz książkę adresową/listę odbiorców.
- **Wiadomość:** napisz tekst (licznik pokazuje liczbę znaków i zużywanych wiadomości SMS).

Możesz zaplanować wysyłkę na późniejszą datę/godzinę. Przed wysłaniem wyświetlany jest podgląd kosztu w kredytach.

Więcej informacji znajdziesz w przewodniku "[Wysyłanie SMS-ów z Panelu klienta OVHcloud](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_mon_espace_client)".

///

/// details | Jak wysłać SMS przez URL (http2sms)?

Funkcja http2sms umożliwia wysyłanie SMS-a za pomocą prostego wywołania HTTP GET lub POST, bez SDK ani uwierzytelniania OAuth. Jest idealna do prostych integracji ze skryptu, narzędzia automatyzacji lub aplikacji biznesowej. Adres URL wywołania ma postać:

`https://www.ovh.com/cgi-bin/sms/http2sms.cgi?account=sms-xx12345-1&login=user&password=password&from=sender&to=+33612345678&message=Your+message`

Wymagane parametry to: `account` (nazwa konta SMS), `login` i `password` (dane logowania użytkownika API), `from` (nadawca), `to` (odbiorca w formacie międzynarodowym), `message` (treść SMS). Aby zabezpieczyć dostęp, skonfiguruj ograniczenia IP dla używanego użytkownika API. Zalecana jest metoda POST z protokołem HTTPS.

Więcej informacji znajdziesz w przewodniku "[Wysyłanie SMS-ów z adresu URL - http2sms](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_une_url_-_http2sms)".

///

/// details | Jak wysłać SMS z adresu e-mail?

OVHcloud umożliwia wysyłanie SMS-ów z dowolnego adresu e-mail, niezależnie od nadawcy. Wyślij wiadomość e-mail na adres `numer_odbiorcy@email2sms.ovh.net` (np. `0033612345678@email2sms.ovh.net`). Treść wiadomości e-mail staje się treścią SMS-a. Temat wiadomości e-mail musi zawierać dane logowania w formacie: `account:login:password`. Metoda ta jest szczególnie przydatna w przypadku automatycznych alertów z systemów obsługujących jedynie wysyłanie wiadomości e-mail (serwery monitoringu, aplikacje biznesowe).

Więcej informacji znajdziesz w przewodniku "[Wysyłanie SMS-ów z adresu e-mail](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_une_adresse_email)".

///

/// details | Jak efektywnie wysyłać masowe SMS-y za pośrednictwem API?

Aby optymalnie wysyłać masowe SMS-y za pośrednictwem API OVHcloud:

- **Używaj wysyłania wsadowego:** endpoint `POST /sms/{serviceName}/jobs` akceptuje tablicę odbiorców. Wysyłaj SMS-y w partiach (np. 500 odbiorców na wywołanie API), zamiast jednego wywołania API na SMS.
- **Obsługuj błędy i ponawiaj próby:** zaimplementuj logikę ponawiania prób z wykładniczym wycofywaniem dla błędów tymczasowych (HTTP 429 Too Many Requests, HTTP 500).
- **Używaj callbacków DLR:** skonfiguruj URL callbacku dla użytkownika API zamiast odpytywać API o każdy status.
- **Planuj wysyłki:** API obsługuje wysyłanie odroczone (`differedPeriod`).
- **Dla bardzo dużych wolumenów:** użyj protokołu SMPP.

Monitoruj zużycie kredytów podczas wysyłek masowych i upewnij się, że automatyczne doładowanie jest włączone.

///

/// details | Jak utworzyć pierwszą kampanię SMS?

[Przejdź do sekcji SMS](/links/control-panel/telecom-sms) w Panelu klienta OVHcloud, wybierz konto SMS, a następnie kliknij `Wyślij SMS`{.action}. Kroki są następujące:

1. **Wybierz nadawcę:** wybierz numer krótki, nadawcę alfanumerycznego lub VLN.
2. **Zdefiniuj odbiorców:** dodaj ręcznie, zaimportuj listę CSV lub wybierz istniejącą książkę adresową.
3. **Napisz wiadomość:** skomponuj tekst. Możesz użyć zmiennych personalizacji, jeśli zaimportowałeś listę z dodatkowymi kolumnami (imię, nazwisko itp.).
4. **Zaplanuj wysyłkę:** wybierz wysyłkę natychmiastową lub zaplanowaną na konkretną datę/godzinę.
5. **Potwierdź i wyślij:** sprawdź podsumowanie (liczba odbiorców, koszt w kredytach) i potwierdź.

Śledzenie kampanii jest dostępne w `Wiadomość SMS i kampania`{.action} > `Zarządzanie kampaniami`{.action} > `Statystyki i historia`{.action}.

Więcej informacji znajdziesz w przewodniku "[Moja pierwsza kampania SMS](/pages/web_cloud/messaging/sms/ma_premiere_campagne_sms)".

///

/// details | Jak zarządzać listami odbiorców SMS?

[Przejdź do sekcji SMS](/links/control-panel/telecom-sms) w Panelu klienta OVHcloud, wybierz konto SMS, a następnie przejdź do `Kontakty`{.action} > `Utwórz listę kontaktów`{.action}. Możesz:

- **Utworzyć listę** importując plik CSV zawierający kolumnę `number` z numerami w formacie międzynarodowym.
- **Wyczyścić listę** z deduplikacją i weryfikacją składni.
- **Usunąć** przestarzałą listę.

Więcej informacji znajdziesz w przewodniku "[Listy odbiorców SMS](/pages/web_cloud/messaging/sms/liste_de_destinataire_sms)".

///

/// details | Jak zarządzać książkami adresowymi SMS?

Książki adresowe SMS oferują bogatsze zarządzanie kontaktami (imię, nazwisko, numer). [Przejdź do sekcji SMS](/links/control-panel/telecom-sms), wybierz konto SMS, a następnie przejdź do `Kontakty`{.action} > `Książka adresowa`{.action}. Możesz:

- Utworzyć nową książkę adresową i dodać kontakty ręcznie.
- Zaimportować plik CSV z kolumnami: nazwisko, imię, numer (format międzynarodowy).
- Edytować lub usuwać kontakty pojedynczo.
- Użyć książki adresowej jako listy odbiorców podczas wysyłania SMS-ów.

Książka adresowa jest idealna do regularnych wysyłek do stałej grupy kontaktów. Do jednorazowych wysyłek na zmienne listy lepiej nadają się listy odbiorców.

Więcej informacji znajdziesz w przewodniku "[Zarządzanie książkami adresowymi SMS](/pages/web_cloud/messaging/sms/gerer_mes_carnets_dadresses_sms)".

///

/// details | Jaka jest różnica między standardowym SMS-em (160 znaków) a długim SMS-em?

Standardowy SMS w kodowaniu GSM 7-bit może zawierać do **160 znaków**. Jeśli wiadomość przekracza ten limit, jest dzielona na kilka połączonych wiadomości SMS (długi SMS), które są składane na telefonie odbiorcy. Limity wynoszą:

- **1 SMS:** do 160 znaków.
- **2 SMS-y:** od 161 do 306 znaków (153 użyteczne znaki na segment, pozostałe 7 bajtów służy jako nagłówek konkatenacji).
- **3 SMS-y:** od 307 do 459 znaków.
- I tak dalej, maksymalnie do 6 połączonych wiadomości SMS (918 znaków).

Jeśli wiadomość używa kodowania **Unicode (UCS-2)** (wymaganego dla emoji, alfabetów niełacińskich), każdy SMS jest ograniczony do **70 znaków** (67 na segment w trybie połączonym). Każdy segment zużywa 1 kredyt SMS.

///

/// details | Które znaki specjalne powodują przełączenie SMS-a na kodowanie Unicode?

Kodowanie GSM 7-bit (standardowe) obsługuje ograniczony zestaw znaków. Następujące znaki powodują przełączenie na kodowanie Unicode (UCS-2), zmniejszając pojemność SMS-a ze 160 do 70 znaków:

- Wszystkie **emoji** (bez wyjątku).
- **Znaki akcentowane nieobsługiwane przez GSM:** niektóre akcenty są obsługiwane (é, è, ê, ù, à itp.), ale inne nie (ő, ű, ā itp.).
- **Znaki alfabetów niełacińskich:** cyrylica, arabski, chiński, japoński, koreański itp.
- Niektóre **symbole typograficzne:** cudzysłowy typograficzne « », pauza — itp.

Interfejs Panelu klienta OVHcloud automatycznie wyświetla pozostałą liczbę znaków i liczbę wiadomości SMS, które zostaną użyte.

///

/// details | Jaki jest czas dostarczenia SMS-a wysłanego przez OVHcloud?

W normalnych warunkach SMS jest dostarczany w ciągu kilku sekund (zazwyczaj **poniżej 10 sekund** do operatorów francuskich). Czas ten może się różnić w zależności od:

- **Miejsca docelowego:** SMS-y międzynarodowe mogą mieć dłuższy czas dostarczenia (do 30-60 sekund).
- **Obciążenia sieci:** w godzinach szczytu (Nowy Rok, wydarzenia krajowe) operatorzy komórkowi mogą wprowadzać dodatkowe opóźnienia.
- **Statusu telefonu odbiorcy:** jeśli telefon jest wyłączony lub poza zasięgiem, SMS jest przechowywany przez operatora i dostarczany, gdy telefon stanie się ponownie dostępny (okres przechowywania: od 48 do 72 godzin w zależności od operatora).
- **Wysyłek masowych:** kampanie składające się z kilku tysięcy wiadomości SMS są wysyłane stopniowo, aby zachować zgodność z limitami przepustowości operatorów.

Raporty dostarczenia (DLR) pozwalają potwierdzić faktyczne dostarczenie wiadomości do odbiorcy.

///

/// details | Moje wiadomości SMS nie są dostarczane — jak zdiagnozować problem?

Wykonaj następujące kontrole:

1. **Sprawdź stan kredytów:** zerowe saldo natychmiast blokuje wszystkie wysyłki.
2. **Sprawdź historię wysyłek:** w `Wiadomość SMS i kampania`{.action} > `Zarządzanie SMS-ami`{.action} > `Historia wysyłki`{.action} sprawdź status każdego SMS-a. Kod PTT wskazuje przyczynę niepowodzenia.
3. **Sprawdź format numeru:** wszystkie numery muszą być w formacie międzynarodowym (`+33...`). Format lokalny (`06...`) spowoduje niepowodzenie.
4. **Sprawdź nadawcę:** nadawca alfanumeryczny oczekujący na walidację nie pozwoli na wysyłanie.
5. **Sprawdź czarną listę:** jeśli odbiorca odpowiedział STOP, jego numer znajduje się na czarnej liście.
6. **Sprawdź limit użytkownika API:** jeśli wysyłasz przez API, sprawdź, czy limit nie został wyczerpany.
7. **Sprawdź treść:** wiadomości SMS zawierające adresy URL wysyłane za pomocą numeru krótkiego są blokowane.

///

### Nadawcy i odpowiedzi

/// details | Jakich typów nadawców SMS mogę używać?

OVHcloud oferuje trzy typy nadawców:

- **Numer krótki umożliwiający odpowiedzi:** domyślny nadawca, losowo przypisany 5-cyfrowy numer krótki. Odbiorca może odpowiedzieć na SMS. Uwaga: nie jest możliwe wysłanie SMS-a zawierającego URL za pomocą numeru krótkiego.

> [!primary]
>
> Numer krótki umożliwiający odpowiedzi jest dostępny wyłącznie dla kont OVHcloud we Francji, z wyłączeniem francuskich departamentów i terytoriów zamorskich.

- **Nadawca alfanumeryczny:** niestandardowa nazwa wyświetlana jako nadawca (np. `MojaFirma`). Maksymalnie 11 znaków. Odbiorca nie może odpowiedzieć. Utworzenie wymaga dokumentów uzasadniających i jest walidowane średnio w ciągu 72 godzin.
- **Wirtualny numer komórkowy (VLN):** francuski numer komórkowy w formacie 06/07 przypisany do Twojego konta SMS. Umożliwia odpowiedzi i daje wrażenie standardowego numeru komórkowego.

Więcej informacji znajdziesz w przewodniku "[Wszystko o nadawcach SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms)".

///

/// details | Jak dodać niestandardowego nadawcę alfanumerycznego?

[Przejdź do sekcji SMS](/links/control-panel/telecom-sms) w Panelu klienta OVHcloud, wybierz konto SMS, a następnie kliknij zakładkę `Nadawcy`{.action}. Kliknij `Operacje`{.action} > `Dodaj`{.action} i wybierz "Dodaj nadawców ręcznie". Wypełnij:

- **Żądany nadawca:** maksymalnie 11 znaków alfanumerycznych (litery i cyfry, bez znaków specjalnych).
- **Opis** do użytku wewnętrznego.
- **Uzasadnienie:** wyjaśnij związek między Twoją tożsamością a żądanym nadawcą.
- **Dokumenty potwierdzające:** papier firmowy, wypis z rejestru handlowego lub dowolny dokument potwierdzający Twoje prawo do używania tej nazwy.

Walidacja jest przeprowadzana przez zespoły OVHcloud, zazwyczaj w ciągu 72 godzin. Możesz również utworzyć nadawcę na podstawie danych osobowych OVHcloud lub nazw domen OVHcloud, bez dodatkowej dokumentacji.

Więcej informacji znajdziesz w przewodniku "[Wszystko o nadawcach SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms)".

///

/// details | Dlaczego nie mogę wysłać SMS-a zawierającego URL za pomocą numeru krótkiego?

W celu zwalczania spamu i phishingu OVHcloud blokuje wiadomości SMS zawierające adresy URL (linki http/https), gdy nadawcą jest numer krótki umożliwiający odpowiedzi. Jeśli musisz umieścić URL w wiadomości SMS, użyj zwalidowanego **nadawcy alfanumerycznego**. Ponieważ Twój niestandardowy nadawca został poddany weryfikacji tożsamości, wysyłanie wiadomości SMS zawierających adresy URL jest dozwolone z tym typem nadawcy.

Więcej informacji znajdziesz w przewodniku "[Wszystko o nadawcach SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms)".

///

/// details | Co to jest wirtualny numer komórkowy (VLN) i jak go uzyskać?

Wirtualny numer komórkowy (VLN — Virtual Long Number) to francuski numer komórkowy w formacie 06 lub 07, przypisany do Twojego konta OVHcloud SMS. Oferuje on kilka zalet:

- Odbiorca widzi standardowy numer komórkowy jako nadawcę, co budzi większe zaufanie.
- Odbiorca może **odpowiedzieć** na SMS, a odpowiedzi można przeglądać w Panelu klienta OVHcloud lub pobierać za pośrednictwem API.
- Można go używać do wysyłek zawierających adresy URL.

VLN wymaga specjalnego planu SMS, który obejmuje wirtualny numer komórkowy. Nie można go dodać do istniejącego konta SMS: należy zamówić nowe konto SMS na [stronie dedykowanej wirtualnym numerom komórkowym](/links/telecom/sms-vln). VLN jest przypisywany na czas związany z subskrypcją i nie jest przenośny do innego operatora.

///

/// details | Jak działa usługa odpowiedzi SMS?

Usługa odpowiedzi SMS umożliwia wysłanie SMS-a, na który odbiorca może odpowiedzieć. Działa w następujący sposób:

1. Wysyłasz SMS, używając "Numeru krótkiego umożliwiającego odpowiedzi" jako nadawcy.
2. Odbiorca otrzymuje SMS z 5-cyfrowym numerem krótkim jako nadawcą.
3. Odbiorca może odpowiedzieć na ten numer krótki w ciągu **48 godzin**.
4. Odpowiedź można wyświetlić w Panelu klienta OVHcloud (`Wiadomość SMS i kampania`{.action} > `Zarządzanie SMS-ami`{.action} > `Otrzymane wiadomości SMS`{.action}).
5. Opcjonalnie możesz skonfigurować **automatyczną odpowiedź** (predefiniowany tekst) lub **skrypt CGI** wywoływany przy każdej otrzymanej odpowiedzi.

Usługa ta jest dostępna wyłącznie dla kont OVHcloud we Francji (z wyłączeniem francuskich departamentów i terytoriów zamorskich), a odpowiedzi są możliwe tylko od francuskich operatorów komórkowych. Każda otrzymana odpowiedź i każda wysłana automatyczna odpowiedź zużywa kredyty SMS.

///

/// details | Jak skonfigurować automatyczną odpowiedź na odebrane SMS-y?

[Przejdź do sekcji SMS](/links/control-panel/telecom-sms) w Panelu klienta OVHcloud, wybierz konto SMS, a następnie przejdź do `Opcje`{.action} > `Opcje odpowiedzi`{.action}. W sekcji "Działanie po otrzymaniu wiadomości" wybierz "Odpowiedź przy użyciu wcześniej przygotowanego tekstu" lub "Wywołanie CGI" (URL skryptu webowego wywoływanego przy każdej otrzymanej odpowiedzi, umożliwiającego dynamiczne przetwarzanie). Możesz również skonfigurować powiadomienia o otrzymaniu (e-mailem lub SMS-em).

///

/// details | Jak zarządzać żądaniami rezygnacji (STOP)?

Gdy odbiorca odpowie "STOP" na jedną z Twoich wiadomości SMS, jego numer zostaje automatycznie dodany do czarnej listy przez OVHcloud. Przyszłe wiadomości SMS wysyłane na ten numer z Twojego konta będą blokowane. Czarną listę możesz przeglądać i zarządzać nią w [Panelu klienta OVHcloud](/links/manager), w zakładce `Opcje`{.action} > `Zarządzaj adresatami czarnej listy`{.action}. Możesz:

- Wyświetlić numery, które wysłały STOP.
- Sprawdzić, czy dany numer jest na czarnej liście przed wysłaniem.

> [!warning]
>
> Usunięcie numeru z czarnej listy bez ponownej zgody odbiorcy jest sprzeczne z RODO i zasadami antyspamowymi.

Zarządzanie STOP jest obowiązkowe w przypadku marketingowych SMS-ów. W przypadku transakcyjnych SMS-ów mechanizm STOP nie ma zastosowania.

///

### Integracja techniczna

/// details | Jak tworzyć użytkowników API SMS i zarządzać nimi?

Użytkownicy API SMS umożliwiają delegowanie wysyłki SMS-ów przez API lub funkcję http2sms bez ujawniania danych logowania klienta OVHcloud. [Przejdź do sekcji SMS](/links/control-panel/telecom-sms) w Panelu klienta OVHcloud, wybierz konto SMS, a następnie kliknij `Użytkownicy API`{.action}. Dodaj nowego użytkownika, definiując nazwę użytkownika i hasło. Każdemu użytkownikowi można przypisać:

- **Limit kredytów** odliczany od globalnego salda konta.
- **Alert progowy** wysyłający powiadomienie, gdy saldo użytkownika spadnie poniżej zdefiniowanego progu.
- **Ograniczenia IP** (do 5 adresów IP) w celu zabezpieczenia dostępu do funkcji http2sms.
- **URL callbacku** do odbierania raportów dostarczenia (DLR) na niestandardowym endpoincie.

Więcej informacji znajdziesz w przewodniku "[Wszystko o użytkownikach SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms)".

///

/// details | Jak wysłać SMS za pośrednictwem API OVHcloud w PHP?

API OVHcloud umożliwia programowe wysyłanie SMS-ów. W PHP użyj oficjalnego SDK OVHcloud:

1. **Utwórz klucze API** na [stronie tworzenia tokenów API OVHcloud](https://auth.eu.ovhcloud.com/api/createToken) autoryzując endpointy `/sms/*`.
2. **Zainstaluj SDK** przez Composer: `composer require ovh/ovh`.
3. **Wyślij SMS** za pomocą endpointu `POST /sms/{serviceName}/jobs`, podając: wiadomość, odbiorców (tablica numerów w formacie międzynarodowym), nadawcę i opcje.

API zwraca identyfikator zadania umożliwiający śledzenie statusu wysyłki. Biblioteki są dostępne również w Python, Node.js, Java i C#. Pełna dokumentacja API SMS jest dostępna w [konsoli API OVHcloud](https://eu.api.ovh.com/console/?section=%2Fsms&branch=v1#/sms).

Więcej informacji znajdziesz w przewodniku "[Wysyłanie SMS-ów za pomocą API OVHcloud w PHP](/pages/web_cloud/messaging/sms/envoyer_des_sms_avec_lapi_ovh_en_php)".

///

/// details | Jakie endpointy API są dostępne dla usługi OVHcloud SMS?

API OVHcloud udostępnia liczne endpointy do programowego zarządzania usługą SMS. Główne z nich to:

- `GET /sms`: lista Twoich kont SMS.
- `GET /sms/{serviceName}`: szczegóły konta SMS (pozostałe kredyty, opcje).
- `POST /sms/{serviceName}/jobs`: wysłanie SMS-a.
- `GET /sms/{serviceName}/jobs`: lista wysyłek.
- `GET /sms/{serviceName}/outgoing`: historia SMS-ów wychodzących.
- `GET /sms/{serviceName}/incoming`: historia SMS-ów przychodzących.
- `GET /sms/{serviceName}/users`: lista użytkowników API.
- `GET /sms/{serviceName}/senders`: lista nadawców.
- `GET /sms/{serviceName}/phonebooks`: lista książek adresowych.
- `GET /sms/ptts`: opis kodu PTT (status dostarczenia).

Pełna interaktywna dokumentacja jest dostępna w [konsoli API OVHcloud](https://eu.api.ovh.com/console/?section=%2Fsms&branch=v1#/sms). Uwierzytelnianie odbywa się za pomocą kluczy API (Application Key, Application Secret, Consumer Key).

///

/// details | Jak odbierać raporty dostarczenia (DLR) SMS-ów za pomocą callbacku?

Raporty dostarczenia (Delivery Reports / DLR) potwierdzają pomyślne dostarczenie SMS-a. Aby otrzymywać je automatycznie, skonfiguruj URL callbacku dla użytkownika API. [Przejdź do sekcji SMS](/links/control-panel/telecom-sms), następnie `Użytkownicy API`{.action}, kliknij `...`{.action} > `Callback`{.action} dla odpowiedniego użytkownika. Wprowadź adres URL Twojego endpointu webowego. Przy każdej aktualizacji statusu OVHcloud wywoła ten URL z następującymi parametrami:

- `id`: identyfikator SMS.
- `ptt`: kod statusu dostarczenia (np. 1 = w toku, 4 = dostarczono, 5 = niepowodzenie).
- `date`: data DLR.
- `description`: opisowy identyfikator DLR.

Twój endpoint musi odpowiedzieć kodem HTTP 200, aby potwierdzić pomyślne odebranie callbacku.

Więcej informacji znajdziesz w przewodniku "[Wszystko o użytkownikach SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms)".

///

/// details | Jak korzystać z protokołu SMPP w OVHcloud?

SMPP (Short Message Peer-to-Peer) to protokół branżowy do wysyłania i odbierania SMS-ów masowo. [Przejdź do sekcji SMS](/links/control-panel/telecom-sms) w Panelu klienta OVHcloud, wybierz konto, a następnie przejdź do `Opcje`{.action} > `Parametry SMPP`{.action}. Uzyskasz parametry połączenia: adres serwera SMPP, port, system_id i hasło. Protokół SMPP oferuje trwałe połączenie, wyższą przepustowość wysyłki i natywną obsługę DLR w trybie push.

Więcej informacji znajdziesz w przewodniku "[Zarządzanie kontem SMS SMPP](/pages/web_cloud/messaging/sms/smpp-control-panel)".

///

/// details | Jakie są specyfikacje techniczne usługi OVHcloud SMPP?

Usługa OVHcloud SMPP jest zgodna ze specyfikacją SMPP v3.4. Główne cechy techniczne to:

- **Tryb połączenia:** Transceiver (wysyłanie i odbieranie w tej samej sesji) lub oddzielny Transmitter/Receiver.
- **Port połączenia:** podawany przy aktywacji usługi SMPP.
- **Szyfrowanie:** TLS obsługiwany i zalecany.
- **Enquire Link:** zalecany interwał 30 sekund w celu utrzymania aktywnej sesji.
- **Okno wysyłki (window size):** konfigurowalne, zazwyczaj od 1 do 10 w zależności od pożądanej przepustowości.
- **Obsługiwane kodowanie:** GSM 7-bit (data_coding=0) i UCS-2 (data_coding=8).
- **Maksymalna długość:** 160 znaków w GSM 7-bit, 70 w UCS-2, z obsługą konkatenacji przez UDH.
- **DLR:** raporty dostarczenia przesyłane w trybie push w tej samej sesji SMPP.

Połączenie SMPP jest ograniczone do określonej liczby jednoczesnych sesji zgodnie z warunkami umowy.

Więcej informacji znajdziesz w przewodniku "[Specyfikacje techniczne SMPP](/pages/web_cloud/messaging/sms/smpp-specification)".

///

/// details | Jak zintegrować wysyłkę OVHcloud SMS z moją aplikacją biznesową lub CRM?

Integrację OVHcloud SMS można przeprowadzić na kilka sposobów:

- **http2sms (najprostszy):** proste wywołanie HTTP GET/POST uruchamia wysyłkę SMS-a. Idealne do podstawowych skryptów, narzędzi automatyzacji przemysłowej lub aplikacji biznesowych obsługujących jedynie wywołania HTTP.
- **API REST OVHcloud:** pełna integracja z bezpiecznym uwierzytelnianiem (OAuth), zarządzaniem kontaktami, historią, statystykami. Dostępne SDK w PHP, Python, Node.js, Java i C#.
- **SMPP:** trwałe połączenie o wysokiej przepustowości dla platform komunikacyjnych.
- **Email2SMS:** wysyłanie e-mailem, przydatne dla systemów obsługujących jedynie wysyłanie wiadomości e-mail (alerty monitoringu, ERP).

W przypadku popularnych systemów CRM (Salesforce, HubSpot itp.) na odpowiednich marketplace'ach dostępne są konektory zewnętrzne korzystające z API OVHcloud.

///

/// details | Jakie są limity szybkości wysyłania SMS-ów?

OVHcloud stosuje limity szybkości wysyłania w celu zagwarantowania jakości usługi:

- **Za pośrednictwem Panelu klienta OVHcloud:** brak wyraźnego limitu, ale duże kampanie są rozkładane w czasie przez platformę.
- **Za pośrednictwem API REST:** przepustowość zależy od wolumenu konta i historii użytkowania.
- **Za pośrednictwem http2sms:** ograniczone do liczby żądań HTTP na sekundę akceptowanych przez infrastrukturę (zazwyczaj kilkadziesiąt na sekundę).
- **Za pośrednictwem SMPP:** przepustowość jest określona umownie i może osiągać kilkaset SMS-ów na sekundę.

Jeśli planujesz bardzo duże kampanie (ponad 100 000 SMS-ów), skontaktuj się z pomocą techniczną OVHcloud, aby zaplanować wysyłkę.

///

/// details | Czy mogę wysyłać wiadomości SMS zawierające zmienne niestandardowe?

Tak, OVHcloud obsługuje personalizację SMS-ów ze zmiennymi dynamicznymi. Z poziomu Panelu klienta, importując listę odbiorców w formacie CSV, możesz dołączyć dodatkowe kolumny (np. `first_name`, `surname`, `appointment_date`). W treści SMS-a użyj zmiennych w postaci `{first_name}`, `{surname}`, `{appointment_date}` itp. Każdy SMS zostanie automatycznie spersonalizowany danymi z odpowiedniego kontaktu. Za pośrednictwem API możesz użyć parametru `message` z placeholderami i podać dane personalizacji w ładunku wysyłki.

///

### Zgodność i dostarczalność

/// details | Jakie są obowiązki prawne dotyczące wysyłania marketingowych SMS-ów we Francji?

Wysyłanie marketingowych SMS-ów we Francji podlega przepisom RODO i francuskiemu Kodeksowi pocztowemu i łączności elektronicznej. Główne obowiązki to:

- **Uprzednia zgoda (opt-in):** odbiorca musi wyraźnie wyrazić zgodę na otrzymywanie komercyjnych SMS-ów.
- **Prawo do rezygnacji (opt-out):** każdy marketingowy SMS musi zawierać informację umożliwiającą odbiorcy rezygnację (np. "STOP na 36xxx" lub "Odpowiedz STOP").
- **Godziny wysyłki:** komercyjne SMS-y nie mogą być wysyłane między **20:00 a 8:00** w dni powszednie ani w **niedziele i święta**.
- **Identyfikacja nadawcy:** tożsamość reklamodawcy musi być rozpoznawalna.
- **Rejestr zgód:** musisz być w stanie udowodnić zgodę każdego odbiorcy w przypadku kontroli CNIL.

Nieprzestrzeganie tych obowiązków naraża na sankcje CNIL i kary w wysokości do 4% obrotu.

///

/// details | Jaka jest różnica między transakcyjnym SMS-em a marketingowym SMS-em?

- **Transakcyjny SMS:** wysyłany w odpowiedzi na konkretną akcję odbiorcy (potwierdzenie zamówienia, kod weryfikacyjny, powiadomienie o dostawie, przypomnienie o spotkaniu). Nie wymaga uprzedniej zgody marketingowej, nie podlega ograniczeniom czasowym i nie wymaga informacji o STOP.
- **Marketingowy SMS:** wysyłany w celach promocyjnych (oferty promocyjne, wyprzedaże, newslettery). Wymaga uprzedniej zgody opt-in, musi zawierać informację o rezygnacji (STOP) i podlega ograniczeniom czasowym.

Nie mieszaj obu typów wysyłek na tym samym koncie SMS, aby ułatwić zarządzanie zgodnością.

///

/// details | Jak zoptymalizować wskaźnik dostarczalności SMS-ów?

Wskaźnik dostarczalności to procent wiadomości SMS faktycznie dostarczonych do odbiorców. Aby go zoptymalizować:

- **Czyść bazy kontaktów:** usuwaj nieprawidłowe, nieaktywne lub stacjonarne numery.
- **Używaj formatów międzynarodowych:** wszystkie numery muszą być w pełnym formacie międzynarodowym (np. `+33612345678`).
- **Kontroluj długość wiadomości:** krótkie SMS-y (1 segment, maksymalnie 160 znaków) mają lepszy wskaźnik dostarczenia niż długie połączone SMS-y.
- **Unikaj treści przypominających spam:** słowa pisane wielkimi literami, nadmierna interpunkcja, podejrzane skrócone adresy URL.
- **Używaj zwalidowanego nadawcy:** zweryfikowani nadawcy alfanumeryczni budzą zaufanie.
- **Przestrzegaj godzin wysyłki:** SMS-y wysyłane w godzinach pracy mają lepszy wskaźnik otwarć.
- **Monitoruj swoje DLR:** analizuj kody PTT nieudanych SMS-ów, aby zidentyfikować powtarzające się przyczyny.

///

/// details | Jak wysyłać SMS-y do Stanów Zjednoczonych?

Wysyłanie SMS-ów do Stanów Zjednoczonych (kod kraju +1) podlega specjalnym zasadom ze względu na amerykańskie przepisy antyspamowe (TCPA / 10DLC). W przypadku OVHcloud wysyłanie do Stanów Zjednoczonych wymaga:

- Zwalidowanego **nadawcy alfanumerycznego** lub numeru krótkiego OVHcloud (użycie francuskiego wirtualnego numeru komórkowego nie jest możliwe w przypadku USA).
- Zgodności z zasadami dotyczącymi treści: SMS nie może zawierać niezamówionej treści reklamowej.
- Kosztu w kredytach wyższego niż krajowy SMS (dokładna stawka w [cenniku](/links/telecom/sms-prices)).

Wskaźnik dostarczalności może się różnić w zależności od amerykańskich operatorów i ich filtrów antyspamowych.

Więcej informacji znajdziesz w przewodniku "[Wysyłanie SMS-ów do Stanów Zjednoczonych](/pages/web_cloud/messaging/sms/envoi_de_sms_aux_etats-unis)".

///

/// details | Jakie są ograniczenia geograficzne wysyłki SMS-ów OVHcloud?

Usługa OVHcloud SMS umożliwia wysyłanie do zdecydowanej większości kierunków międzynarodowych. Jednakże:

- **Zablokowane kierunki:** niektóre kierunki o wysokim ryzyku oszustw mogą być domyślnie zablokowane.
- **Zmienne ceny:** koszt w kredytach zależy od kierunku. Stawki można sprawdzić w Panelu klienta OVHcloud lub na [stronie z cenami OVHcloud](/links/telecom/sms-prices).
- **Stany Zjednoczone:** wysyłanie do USA podlega specjalnym zasadom (patrz dedykowane FAQ powyżej).
- **SMS z odpowiedzią:** funkcja odpowiedzi SMS (numer krótki) jest dostępna wyłącznie we Francji metropolitalnej.
- **Wirtualny numer komórkowy:** francuski VLN może być używany jako nadawca wyłącznie dla kierunków francuskich.

Przed uruchomieniem kampanii międzynarodowej sprawdź cennik i dostępność kierunku w Panelu klienta OVHcloud.

///

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).
