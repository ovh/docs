---
title: "Serwer dedykowany - Konfiguracja Game DDoS Protection"
excerpt: "Skonfiguruj OVHcloud Game DDoS Protection, aby chronić serwer gier dedykowany przed atakami DDoS."
updated: 2026-03-24
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

Celem niniejszego przewodnika jest pomoc w lepszym zrozumieniu naszej ochrony anty-DDoS Game (zwanej również *Game firewall*) i udzieleniu wskazówek, jak skonfigurować skuteczną ochronę.

> [!primary]
> Więcej informacji na temat naszej [ochrony anty-DDoS Game na naszej stronie](/links/security/ddos).
>

Nasze serwery dedykowane Bare Metal Gaming zapewniają dodatkową ochronę przed atakami sieciowymi specjalnie zaprojektowaną, aby zabezpieczyć aplikacje gier przed atakami ukierunkowanymi, zapewniając stabilność i dostępność graczy. Rozwiązanie to jest solidne i łatwe w użyciu, dzięki czemu możesz skoncentrować się na rozwoju firmy bez konieczności obrony przed cyberprzestępczością.

| ![global-schema](images/global_schema_focus_game_new.png) |
|:--:|
| Schemat usług infrastruktury i ochrony gier Anty-DDoS w OVHcloud |

## Wymagania początkowe

- An [OVHcloud **Game** dedicated server](/links/bare-metal/game)

<!-- CP-NAV-START:network-public-ip -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Public IP](/links/control-panel/network-public-ip)
- **Ścieżka nawigacji:** `Network`{.action} > `Publiczne adresy IP`{.action}

---
<!-- CP-NAV-END:network-public-ip -->

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

### Aktywacja i konfiguracja ochrony anty-DDoS Game

> [!warning]
> *Game Firewall* chroni adresy IP powiązane z serwerem. Jeśli posiadasz serwer z kilkoma adresami IP (np. [adresy Additional IP](/links/network/additional-ip)), musisz skonfigurować każdy z nich oddzielnie.
>
> Każdy z adresów, który chcesz chronić za pomocą Game Firewall, **musi mieć** status Game Firewall ustawiony na `Skonfigurowany`, aby reguły ochrony były stosowane.
>

Aby skonfigurować reguły ochrony gier dla serwera Bare Metal Game, wykonaj następujące kroki:

- Kliknij `Network`{.action} w menu po lewej stronie ekranu.
- Kliknij `Publiczne adresy IP`{.action}.

Możesz filtrować adresy IP, korzystając z menu rozwijanego `Wszystkie typy usług`{.action}, lub bezpośrednio wpisać żądany adres IP w pasku wyszukiwania. Wpisz nazwę lub kategorię odpowiedniego serwera:

#### Lista adresów IP przypisanych do serwera Game

> [!tabs]
> Ze strony **Serwery dedykowane**
>> - Otwórz sekcję `Bare Metal Cloud`{.action} w menu po lewej stronie.
>> - Wybierz `Serwery dedykowane`{.action}.
>> - Kliknij serwer Game, który chcesz skonfigurować.
>> - W sekcji `Sieć` zakładki `Informacje ogólne` znajdź sekcję "Game DDoS Protection".
>> - Kliknij przycisk `...`{.action} i wybierz `Skonfiguruj Anty-DDoS Game`{.action}. Zostaniesz przekierowany do listy adresów IP przypisanych do Twojego serwera.
> Ze strony **Publiczne adresy IP**
>> - Otwórz sekcję `Network`{.action} w menu po lewej stronie.
>> - Wybierz `Publiczne adresy IP`{.action}.
>> - W menu rozwijanym `Wszystkie typy usług`{.action} znajdź i wybierz serwer Bare Metal Game, który chcesz skonfigurować.
>> - Pojawi się lista adresów IP przypisanych do Twojego serwera.

#### Aktywacja i konfiguracja reguł Game Firewall

Dla każdego adresu przypisanego do Twojego serwera wymagającego ochrony sprawdź, czy status *Game Firewall* jest ustawiony na `Dostępny`{.action}. Reguły *Game Firewall* musisz skonfigurować osobno dla każdego adresu.

- Kliknij przycisk `⁝`{.action} po prawej stronie tabeli i wybierz `Skonfiguruj Game Firewall`{.action}.
- Dodaj reguły określające protokół i zakres portów dla każdej aplikacji gry, która będzie dostępna pod wybranym adresem IP. Więcej informacji znajdziesz w sekcji [Specyficzne wzmianki dotyczące niektórych gier](#game_specific).
- Ze względów bezpieczeństwa zdecydowanie zalecamy włączenie opcji `Zastosuj politykę „Blokuj pozostałe"`{.action} w prawym górnym rogu tabeli reguł. Opcja ta blokuje cały ruch, który nie odpowiada regułom zdefiniowanym dla Game Firewall — wszystkie wymienione aplikacje gier będą chronione i żadne inne połączenia nie będą mogły dotrzeć do Twojego serwera. Opcja ta znacząco zmniejsza powierzchnię ataku narażoną na potencjalnych złośliwych aktorów.

Ochrona Game DDoS pozwala skonfigurować do **100 reguł na adres IP** wskazujący na najnowsze serwery Bare Metal Game GAME-1 i GAME-2 (2024 i nowsze) lub do **30 reguł na adres IP** dla starszych serwerów gier Bare Metal (zwykle oznaczonych jako RISE-GAME lub SYS-GAME).

Obsługiwane protokoły gier (tytuły i wersje gier, które mogą być chronione) mogą ulec zmianie w czasie. Ponadto mogą się one różnić między starszymi i nowszymi gamami serwerów Bare Metal Game. Najnowsza lista obsługiwanych profilów gier jest dostępna na [stronie Game DDoS Protection](/links/security/ddos).

Reguły ochrony *Game Firewall* nie mogą nakładać się na siebie w zakresie zdefiniowanych portów.

Opcję **Inne** można wybrać dla aplikacji hostowanych na określonych portach (dla których nie ma dostępnej ochrony), aby przepuszczać ruch klienta. Należy pamiętać, że nie ma dodatkowego bezpieczeństwa dla ruchu zgodnego z regułą **Inne** i należy z niego korzystać ostrożnie.

Kilka minut po zakończeniu konfiguracji Game Firewall dla adresu IP wszystkie nowo utworzone reguły zostaną zastosowane, a status *Game Firewall* tego adresu IP zmieni się z `Dostępny` na `Skonfigurowany`.

> [!warning]
> Ochrona anty-DDoS Game obowiązuje po zastosowaniu reguł określonych w [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network). Aby oba działały poprawnie, Edge Network Firewall nie może być zbyt rygorystyczny i musi przepuszczać ruch do ochrony anty-DDoS Game.
>

#### Weryfikacja konfiguracji

Po zakończeniu konfiguracji sprawdź, czy Twój serwer jest chroniony przez Game Firewall:

- Na stronie **Publiczne adresy IP** każdy adres IP przypisany do Twojego serwera Bare Metal Game i wymagający ochrony musi mieć status Game Firewall ustawiony na `Skonfigurowany`.
- Na stronie zarządzania serwerem Bare Metal Game, w sekcji `Sieć` zakładki `Informacje ogólne`, status ochrony Game Anti-DDoS musi wynosić `All IP addresses are protected` lub `Some IP addresses are protected`. W tym drugim przypadku upewnij się, że skonfigurowano wszystkie odpowiednie adresy IP.

### Specyficzne wzmianki dotyczące niektórych gier <a name="game_specific"></a>

### Ark Survival Evolved

- **Ark Survival Evolved**: Podstawowy silnik ochrony.
- **Ark Survival Evolved v.311.78**: Zaktualizowany silnik ochrony, dodany do najnowszych serwerów gier GAME-1 i GAME-2 Bare Metal (2024 i nowsze).

#### Counter Strike 2

- **Counter Strike 2**: Nowy silnik ochrony dodany do najnowszych serwerów gier GAME-1 i GAME-2 Bare Metal (2024 i nowsze).

### FiveM

- **FiveM** to mod do trybu wieloosobowego gry Grand Theft Auto V autorstwa Cfx.re, który obecnie jest uznawany przez wydawcę gry, firmę Rockstar. Dodaliśmy obsługę FiveM do najnowszych serwerów gier GAME-1 i GAME-2 Bare Metal (2024 i nowsze).

#### Rust

- **Rust** jest obsługiwany dzięki dedykowanemu profilowi ochronnemu na wszystkich generacjach serwerów Bare Metal Game. Należy pamiętać, że zaktualizowaliśmy ten profil ochronny (tj. dodaliśmy obsługę plików cookie RakNet) dla serwerów Bare Metal Game trzeciej generacji (2024, oparte na EPYC).

### Minecraft

Minecraft jest wspierany przez następujące profile:

- **Java Minecraft**: To powinno być najlepsze rozwiązanie dla wszystkich wersji Java Minecraft. Chroni on protokół Minecraft Query i jest ustawiony na ruch TCP. Została ona dodana w 2024 roku, ale jest również dostępna dla poprzednich generacji serwerów Bare Metal Game. Uwaga, jeśli inne gry UDP są zainstalowane na tym samym IP.
- **Minecraft Query**: Ogólna ochrona protokołu Minecraft Query.
- **Minecraft Bedrock**: ochrona Minecraft Bedrock (z obsługą plików cookie RakNet), dodana do najnowszych serwerów gier GAME-1 i GAME-2 Bare Metal (2024 i nowsze).
- **Minecraft Pocket Edition**: ochrona Minecraft PE/Bedrock, taka sama jak Bedrock, zachowana ze względu na kompatybilność.

### Valheim

- **Valheim**: Nowy silnik ochrony, dodany do najnowszych serwerów gier GAME-1 i GAME-2 Bare Metal (2024 i nowsze).

> [!primary]
> Jeśli hostujesz większą usługę w jednej z obsługiwanych gier, ale nadal widzisz fałszywie pozytywne wyniki z systemów infrastruktury anty-DDoS, skontaktuj się z pomocą techniczną za pośrednictwem [Centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help), podając wszystkie szczegóły potrzebne do poprawy profilu aplikacji.
>

### Korzystanie z adresów Additional IP z serwerami dedykowanymi Game

Adresy Additional IP to elastyczny sposób zarządzania aplikacjami na wielu serwerach lub hostowanych usługach. Wnoszą one wartość dodaną do infrastruktury hostingu gier, umożliwiając zarządzanie skalowalnością lub akcjami failover bez wpływu na publiczne adresy IP. Adresy Additional IP pozwalają na zdefiniowanie różnych lokalizacji geograficznych adresów IP lub na korzystanie z własnego bloku IP (przy użyciu usługi BYOIP) dla serwerów Game OVHcloud.

Adresy Additional IP zapewniają elastyczność, jednak w niektórych sytuacjach należy zwrócić na to uwagę.

### Konfiguracja na IP specyficzna dla generacji serwera Game

Aby zapewnić większą elastyczność konfiguracji, można zdefiniować różne reguły ochrony gry dla różnych adresów Additional IP wskazujących ten sam serwer Bare Metal Game.  
Maksymalna liczba reguł i dostępne ustawienia ochrony są zdefiniowane dla jednego adresu IP, ale są specyficzne dla danej generacji serwera Bare Metal Game za zaporą.

Można zaobserwować różnice między nowszymi serwerami Game (serwery Game Bare Metal trzeciej generacji – 2024, oparte na procesorach EPYC) a starszymi serwerami Game (poprzednie generacje, zazwyczaj oznaczane jako RISE-GAME lub SYS-GAME).

#### Weryfikacja obsługiwanych zabezpieczeń gier

Wszystkie protokoły ochrony anty-DDoS Game obsługiwane dla danego serwera można znaleźć na stronie konfiguracyjnej `GAME firewall`{.action} dla każdego adresu IP wskazującego na ten serwer w rozwijanym menu `Game protocol`{.action}:

| ![control-panel-Game-protocols](images/game_protocols_list_new.png) |
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

- [Serwer dedykowany - Panel bezpieczeństwa sieci](/pages/bare_metal_cloud/dedicated_servers/network_security_dashboard)
Dołącz do [grona naszych użytkowników](/links/community).
