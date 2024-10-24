---
title: "Ochrona serwera gier za pomocą firewalla aplikacyjnego"
excerpt: "Dowiedz się, jak skonfigurować OVHcloud Game DDoS Protection firewall"
updated: 2024-10-24
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

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Celem niniejszego przewodnika jest pomoc w lepszym zrozumieniu naszej ochrony anty-DDoS Game (zwanej również *Game firewall*) i udzieleniu wskazówek, jak skonfigurować skuteczną ochronę.

> [!primary]
> Więcej informacji na temat naszej [ochrony anty-DDoS Game na naszej stronie](/links/security/ddos).
>

Nasze serwery dedykowane Bare Metal Gaming zapewniają dodatkową ochronę przed atakami sieciowymi specjalnie zaprojektowaną, aby zabezpieczyć aplikacje gier przed atakami ukierunkowanymi, zapewniając stabilność i dostępność graczy. Rozwiązanie to jest solidne i łatwe w użyciu, dzięki czemu możesz skoncentrować się na rozwoju firmy bez konieczności obrony przed cyberprzestępczością.

| ![global-schema](images/global_schema_focus_game.png) |
|:--:|
| Schemat usług infrastruktury i ochrony gier Anty-DDoS w OVHcloud |

## Wymagania początkowe

- An [OVHcloud **Game** dedicated server](/links/bare-metal/game)
- Dostęp do [OVHcloud Control Panel](/links/manager)

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na serwerach z [**gamy Eco**](/links/bare-metal/eco-about).
>
> Więcej informacji znajdziesz na naszej [stronie porównania](/links/bare-metal/eco-compare).

## W praktyce

### Wprowadzenie

Infrastruktura anty-DDoS, w połączeniu z zaporą sieciową Edge, chroni sieć przed typowymi zagrożeniami (głównie warstwami ISO OSI 3 i 4). Hosting aplikacji do hostingu gier może jednak stanowić wyzwanie pod względem bezpieczeństwa sieci. **Game DDoS Protection*** to firewall warstwy 7 (aplikacja), który koncentruje się na ochronie określonych protokołów gier. Jego główne zalety to:

- **Bardzo krótki czas odpowiedzi**: Wiemy, że czas odpowiedzi i stabilność są kluczowe dla gier online. Rozwiązania te są umieszczane jak najbliżej serwerów i współpracują z wydajnym sprzętem.
- **Dwukierunkowy**: Platforma analizuje ruch przychodzący i wychodzący, aby lepiej zrozumieć sytuację każdego gracza.
- **Snapshot** : Umożliwia odróżnienie realnych graczy od szkodliwych ataków na serwer już od pierwszych pakietów w sieci.
- **Zawsze aktywne**: możliwość wykrywania i zatrzymywania ataków zapewnia płynne działanie aplikacji gry, bez zakłóceń i opóźnień.

## Aktywacja i konfiguracja ochrony anty-DDoS Game

> [!primary]
> *Firewall Game* chroni IP powiązane z serwerem. Jeśli posiadasz serwer z kilkoma adresami IP (na przykład: [adresy Additional IP](/links/network/additional-ip)), skonfiguruj każdy z nich oddzielnie.
>

Aby skonfigurować reguły ochrony gier dla serwera Bare Metal Game, zaloguj się do Panelu klienta OVHcloud i wykonaj następujące kroki:

- Kliknij zakładkę `Bare Metal Cloud`{.action}.
- Przejdź do `Network`{.action} na pasku bocznym po lewej stronie.
- Otwórz `IP`{.action}.

Adresy IP można filtrować za pomocą rozwijanego menu `Wszystkie usługi`{.action}. Wpisz nazwę lub kategorię odpowiadającego serwera:

| ![configure-game-firewall](images/ip_listing.png) |
|:--:|
| Lista adresów IP: znajdź adres IP dla danej usługi |

Sprawdź konfigurację *Firewall Game*:

| ![game-server](images/firewall_game_01_blur.png) |
|:--:|
| Kliknij przycisk`...`{.action} obok adresu IP Twojego serwera Game. |

| ![configure-game-firewall](images/firewall_game_02.png) |
|:--:|
| Kliknij `Skonfiguruj firewall GAME`{.action}. |

Możesz teraz skonfigurować reguły ochrony gier dla wybranego adresu IP.

> [!primary]
> Pamiętaj, że ochrona anty-DDoS Game nie podejmie żadnych działań, dopóki nie zostaną skonfigurowane reguły ochrony gier.
>

Aby włączyć ochronę DDoS Game, wystarczy zdefiniować aplikacje gier oraz przypisany do nich zakres portów sieciowych (lub pojedynczy port):

| ![add-rule-btn](images/firewall_game_03.png) |
|:--:|
| W następnym oknie kliknij przycisk `Dodaj regułę`{.action}, aby dodać regułę do *Firewall Game*. |


Ochrona anty-DDoS umożliwia skonfigurowanie do **100 reguł dla adresu IP**, które wskazują na serwer gier Bare Metal trzeciej generacji (serwery dostępne w sprzedaży w 2024 lub nowszej wersji), lub do **30 reguł dla adresu IP** w przypadku starszych gam Bare Metal (zazwyczaj identyfikowanych jako RISE-GAME lub SYS-GAME).

Obsługiwane protokoły gier (tytuły i wersje gier, które mogą być chronione) mogą ulec zmianie w czasie. Ponadto mogą się one różnić od poprzednich i najnowszych gam serwerów Bare Metal Game. Najnowsza lista obsługiwanych profilów gier jest dostępna [tutaj](/links/security/ddos).

| ![confirm-new-rule](images/firewall_game_04.png) |
|:--:|
| Skonfiguruj zabezpieczenia gry, wybierając **Protokół** z listy i ustawiając **zakres portów**, na którym aplikacja gry odbiera połączenia (zapoznaj się z dokumentacją instalacji gry). Następnie kliknij przycisk `Potwierdź`{.action}, aby zarejestrować. Konfiguracja reguł dla *firewall game* została zakończona. |

Reguły ochrony *Firewall Game* nie powinny nakładać się na siebie w zakresie zdefiniowanych portów.

Opcję **Inne** można wybrać dla aplikacji hostowanych na określonych portach (dla których nie ma dostępnej ochrony), aby przepuszczać ruch klienta. Należy pamiętać, że nie ma dodatkowego bezpieczeństwa dla ruchu zgodnego z regułą **Inne** i należy z niego korzystać ostrożnie.

Ponadto zalecamy zdefiniowanie reguły **"Default policy = DROP"** dla każdego adresu IP wskazującego na serwer Game. Opcja ta pozwoli ochronie DDoS Game na usunięcie ruchu, który nie odpowiada zdefiniowanym regułom, co oznacza, że wszystkie wymienione aplikacje gier będą chronione i żadne inne połączenia nie będą mogły dotrzeć do Twojego serwera.

> [!warning]
> Ochrona anty-DDoS Game obowiązuje po zastosowaniu reguł określonych w [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network). Aby oba działały poprawnie, Edge Firewall Network nie może być zbyt rygorystyczny i musi przełączać ruch na ochronę anty-DDoS Game.
>

### Specyficzne wzmianki dotyczące niektórych gier

### Ark Survival Evolved

- **Ark Survival Evolved**: Podstawowy silnik ochrony.
- **Ark Survival Evolved v.311.78**: Zaktualizowano silnik ochrony dodany w trzeciej generacji serwerów Bare Metal Game (wersja 2024).

#### Counter Strike 2

- **Counter Strike 2**: Nowy silnik ochrony dodany w trzeciej generacji serwerów Bare Metal Game (wersja 2024).

### FiveM

- **FiveM** to tryb gry wieloosobowej Grand Theft Auto V firmy Cfx.re, obecnie rozpoznawany przez wydawcę gier Rockstar. Dodaliśmy obsługę FiveM do trzeciej generacji serwerów Bare Metal Game (wersja 2024).

#### Rust

- **Rust** jest obsługiwany przez wszystkie generacje serwerów Bare Metal Game z dedykowanym profilem ochrony. Prosimy pamiętać, że zaktualizowaliśmy ten profil ochrony (tj. dodaliśmy obsługę plików cookie RakNet) dla serwerów Bare Metal Game trzeciej generacji (wersja 2024).
Więcej informacji o hostingu Rust znajdziesz na serwerach OVHcloud [tutaj](/links/bare-metal/bare-metal/game-rust).

### Minecraft

Minecraft jest wspierany przez następujące profile:

- **Java Minecraft**: To powinno być najlepsze rozwiązanie dla wszystkich wersji Java Minecraft. Chroni on protokół Minecraft Query i jest ustawiony na ruch TCP. Została ona dodana w 2024 roku, ale jest również dostępna dla poprzednich generacji serwerów Bare Metal Game. Uwaga, jeśli inne gry UDP są zainstalowane na tym samym IP.
- **Minecraft Query**: Ogólna ochrona protokołu Minecraft Query.
- **Minecraft Bedrock**: ochrona Minecraft Bedrock (z obsługą plików cookie RakNet), dodana w 3. generacji serwerów Bare Metal Game (wersja 2024).
- **Minecraft Pocket Edition**: ochrona przed atakami PE/Bedrock Minecraft.

### Valheim

- **Valheim**: Nowy silnik ochrony, dodany w trzeciej generacji serwerów Bare Metal Game (wersja 2024).

> [!primary]
> Jeśli hostujesz większą usługę w jednej z obsługiwanych gier, ale nadal widzisz fałszywie pozytywne wyniki z systemów infrastruktury anty-DDoS, skontaktuj się z pomocą techniczną za pośrednictwem [Centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help), podając wszystkie szczegóły potrzebne do poprawy profilu aplikacji.
>

### Korzystanie z adresów Additional IP z serwerami dedykowanymi Game

Adresy Additional IP to elastyczny sposób zarządzania aplikacjami na wielu serwerach lub hostowanych usługach. Wnoszą one wartość dodaną do infrastruktury hostingu gier, umożliwiając zarządzanie skalowalnością lub akcjami failover bez wpływu na publiczne adresy IP. Adresy Additional IP pozwalają na zdefiniowanie różnych lokalizacji geograficznych adresów IP lub na korzystanie z własnego bloku IP (przy użyciu usługi BYOIP) dla serwerów Game OVHcloud.

Adresy Additional IP zapewniają elastyczność, jednak w niektórych sytuacjach należy zwrócić na to uwagę.

### Konfiguracja na IP specyficzna dla generacji serwera Game

Aby zapewnić większą elastyczność konfiguracji, można zdefiniować różne reguły ochrony gry dla różnych adresów Additional IP wskazujących ten sam serwer Bare Metal Game.  
Maksymalna liczba reguł i dostępne ustawienia ochrony są zdefiniowane dla jednego adresu IP, ale są specyficzne dla danej generacji serwera Bare Metal Game za zaporą.

Można zaobserwować różnice między najnowszymi serwerami Game (trzecia generacja serwerów Game Bare Metal, wydana w 2024 roku) a najstarszymi serwerami Game (poprzednie generacje, zwykle określane jako RISE-GAME lub SYS-GAME).

#### Weryfikacja obsługiwanych zabezpieczeń gier

Wszystkie protokoły ochrony anty-DDoS Game obsługiwane dla danego serwera można znaleźć na stronie konfiguracyjnej `GAME firewall`{.action} dla każdego adresu IP wskazującego na ten serwer w rozwijanym menu `Game protocol`{.action}:

| ![control-panel-game-protocols](images/game_protocols_list.png) |
|:--:|
| Lista obsługiwanych protokołów ochrony |

Jeśli wybierzesz automatyzację, szczegóły protokołu można pobrać za pomocą [APIv6 OVHcloud](/pages/manage_and_operate/api/first-steps):

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/game/{ipOnGame}
>

Przykład odpowiedzi API:

```python
{
    ipOnGame: "1.2.3.4"
    maxRules: 30
    state: "ok"
    firewallModeEnabled: true
  - supportedProtocols: [
        "arkSurvivalEvolved"
        "arma"
        "gtaMultiTheftAutoSanAndreas"
        "gtaSanAndreasMultiplayerMod"
        "hl2Source"
        "minecraftPocketEdition"
        "minecraftQuery"
        "mumble"
        "other"
        "rust"
        "teamspeak2"
        "teamspeak3"
        "trackmaniaShootmania"
    ]
}
```


### Przenoszenie Additional IP między serwerami

Statyczny zestaw reguł może być jawny, jednak działania związane z przenoszeniem adresów Additional IP mogą wymagać kilku komentarzy.

- **Przeniesienie adresu IP poprzedniej generacji na serwery Bare Metal Game nowej generacji:**
    - Proces jest przejrzysty, a wszystkie reguły ochrony i parametry IP zostaną zachowane.

- **Przeniesienie adresu IP nowej generacji na serwery Bare Metal Game poprzedniej generacji:**
    - Jeśli serwer docelowy obsługuje mniej reguł ochrony niż serwer źródłowy, zostanie wyświetlony błąd i akcja zostanie zatrzymana.
    - W przeciwnym razie:
        - Zachowano reguły zgodności z poprzednimi wersjami (nazwa profilu ochrony musi być taka sama).
        - Reguły nieobsługiwane na serwerze docelowym zostaną usunięte.

- **Przenoszenie adresu IP z serwera Bare Metal Game na inne serwery lub usługi:**
    - Wszystkie reguły ochrony anty-DDoS Game dla IP zostaną usunięte, ponieważ nie są wspierane poza serwerami Bare Metal Game.


## FAQ

/// details | **Czy mogę korzystać z ochrony anty-DDoS Game w ofercie serwerów innych niż Bare Metal Game?**

Nie, ochrona anty-DDoS Game jest dostępna tylko dla naszych serwerów dedykowanych Bare Metal Game.

///

/// details | **Jak mogę się upewnić, że automatyzacja działa dla adresu Additional IP między nową i starą generacją serwerów Bare Metal Game?**

Możesz ograniczyć liczbę reguł ochrony do 30 na IP lub skonfigurować skrypty automatyzacji, aby mogły one usuwać i dodawać reguły przed i po przeniesieniu adresu IP na inny serwer. Zalecamy użycie serwerów Bare Metal Game najnowszej generacji, ponieważ są one dostarczane z wieloma ulepszeniami.

///

/// details | **Czy mogę wyłączyć ochronę DDoS Game?**

Jest to możliwe, ale nie zalecane. Możesz to zrobić, usuwając z konfiguracji wszystkie reguły protokołu gry i dezaktywując wpis `Default policy: DROP`.

///

/// details | **Moja gra nie znajduje się na liście obsługiwanych protokołów, co mogę zrobić?**

Możesz zaproponować swoje zapotrzebowanie na naszej [roadmap rozwiązań infrastruktury na GitHubie](https://github.com/orgs/ovh/projects/16/views/14). Pomoże nam to w podjęciu decyzji o priorytetach dla rozwoju kolejnych funkcjonalności.

///

/// details | **Po skonfigurowaniu mojej gry z odpowiednimi portami i domyślną zasadą do usunięcia, nadal otrzymuję ataki, które wpływają na mój serwer Game. Co zrobić?**

Aby poprosić o ustawienie ochrony profilu, należy udostępnić odpowiednie zabezpieczenia ruchu sieciowego jako przykłady takich ataków (plik *.pcap*). W tym celu zaloguj się do [Centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help).

///

## Sprawdź również

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do [grona naszych użytkowników](/links/community).
