---
title: "Ochrona serwera gier za pomocą firewalla aplikacyjnego"
excerpt: "Dowiedz się, jak skonfigurować firewall OVHcloud GAME DDoS"
updated: 2023-12-19
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Celem tego przewodnika jest pomoc w lepszym zrozumieniu ochrony Anty-DDoS Game (firewall game) i dostarczenie instrukcji dotyczących konfiguracji skutecznej ochrony serwerów obsługujących tę ochronę.

> [!primary]
> Więcej informacji na temat ochrony Anty-DDoS GAME na naszej stronie WWW: <https://www.ovhcloud.com/pl/security/game-ddos-protection/>.
> 

Serwery dedykowane Gaming Bare Metal wyposażone są w funkcję ochrony Anty-DDoS. Dzięki temu zabezpieczają aplikacje gier przed atakami, zapewniając stabilność i dostępność gier. To dedykowane rozwiązanie ochronne jest solidne i proste w obsłudze. Dzięki temu możesz skoncentrować się na rozwoju swojej firmy, nie odwracając uwagi od ochrony przed cyberprzestępczością.

| ![global-schema](images/global_schema_focus_game.png) |
|:—:|
| Anty-DDoS - schemat infrastruktury i usług ochrony gier w OVHcloud |

## Wymagania początkowe

- An [OVHcloud **Game** dedicated server](https://www.ovhcloud.com/pl/bare-metal/prices/#filterType=range_element&filterValue=game)
- Dostęp do [OVHcloud Control Panel](/links/manager)

> [!warning]
> Ta funkcja może być niedostępna lub ograniczona na serwerach [**Eco** product line](https://eco.ovhcloud.com/pl/about/).
>
> Aby uzyskać więcej informacji, odwiedź stronę pod adresem [comparison page](https://eco.ovhcloud.com/pl/compare/).

## W praktyce

### Wprowadzenie

Infrastruktura Anty-DDoS wraz z zaporą sieciową Edge Network zabezpieczają sieć przed typowymi zagrożeniami (głównie w warstwach 3 i 4 ISO OSI). Z drugiej strony, hosting aplikacji gamingowych może stanowić wyzwanie dla bezpieczeństwa sieci. Ochrona GAME DDoS jest tutaj pomocna — jest to zapora warstwy 7 (aplikacja) służąca do ochrony określonych protokołów gier (zazwyczaj korzystających z protokołu UDP). Jego główne zalety to:

- **Odległość**: Wiemy, że czas odpowiedzi i jego stabilność są kluczowe dla gier. Rozwiązania te są dostarczane jak najbliżej serwerów i współpracują z dedykowanymi urządzeniami.
- **2-kierunkowe**: W celu lepszego zrozumienia sytuacji każdego gracza, platforma analizuje ruch przychodzący i wychodzący.
- **Natychmiastowe**: Filtr ten jest w stanie odróżniać realnych graczy od szkodliwych ataków na serwer, a nie od pierwszych pakietów sieciowych.
- **Always-on**: Wykrywanie i zatrzymywanie ataków zapewnia płynne działanie wrażliwych aplikacji gier bez zakłóceń i zmian opóźnienia.

### Włączenie ochrony DDoS GAME

> [!primary]
> Firewall GAME zabezpiecza adres IP przypisany do serwera. Jeśli dysponujesz serwerem z wieloma adresami IP (dodatkowymi adresami IP), skonfiguruj każdy z nich oddzielnie.
>

Aby skonfigurować reguły gry w firewallu GAME, zaloguj się do Panelu klienta OVHcloud i wykonaj następujące kroki:

- Kliknij kartę `Bare Metal Cloud`{.action}.
- Przejdź do `Sieć`{.action} na lewym pasku bocznym.
- Otwórz `Adres IP`{.action}.

| ![game-server](images/firewall_game_01_blur.png) |
|:—:|
| Kliknij na `...`{.action} Przycisk obok adresu IP serwera gier. |

| ![configure-game-firewall](images/firewall_game_02.png) |
|:—:|
| Kliknij pozycję `Konfiguruj firewall game`{.action}. |


| ![add-rule-btn](images/firewall_game_03.png) |
|:—:|
| Na następującym ekranie kliknij przycisk `Dodaj regułę`{.action}, aby dodać regułę do firewalla GAME. |

Możesz skonfigurować do **30 reguł dla każdego adresu IP**, aby chronić jedną lub więcej gier hostowanych na Twoim serwerze za firewallem GAME. Listę obsługiwanych profili gier można wyświetlić [here](https://www.ovhcloud.com/pl/security/game-ddos-protection/).

> [!primary]
> Domyślnie firewall GAME jest wstępnie skonfigurowany z pewnymi regułami, które OVHcloud określiło jako działające z najpopularniejszymi grami. Natomiast w przypadku klientów dzierżawiących serwer dedykowany GAME zezwalamy na kolejny krok i konfigurujemy również reguły dla portów.
> 

| ![confirm-new-rule](images/firewall_game_04.png) |
|:—:|
| Włącz porty zgodnie z potrzebami na następującym ekranie i kliknij przycisk `Potwierdź`{.action} po zakończeniu dodawania reguł. Pomyślnie skonfigurowałeś reguły firewall game. |

> [!primary]
> Pamiętaj, że ochrona Anty-DDoS Game nie wymaga konfiguracji reguł.
>
> Dodatkowo, aby zapewnić najlepszą ochronę, zalecamy ustawienie opcji "Default policy = DROP", która spowoduje odrzucenie każdego ruchu niezgodnego z określonymi regułami. W ten sposób aplikacja znajdująca się na liście będzie chroniona, a do serwera nie dotrze żadna inna aplikacja.
> 

> [!warning]
> Ochrona Anty-DDoS GAME zostanie uruchomiona po [Edge Network firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network). Aby Edge Network działało poprawnie, jego ochrona nie może być zbyt surowa i musi przekazywać ruch do ochrony DDoS GAME. Optymalnym rozwiązaniem jest skonfigurowanie reguły w firewallu Edge Network, która zezwala na cały ruch UDP, a następnie zezwolenie na filtrowanie portów UDP przez ochronę Game DDoS.
>

### Ważne informacje

#### FiveM

FiveM to mod GTA V. Aktualnie nie jest w pełni rozpoznawany przez Rockstar (wydawcę gry).

W związku z tym nie planujemy wydania publicznego profilu firewall FiveM GAME do ochrony warstwy 7.

#### Rust

Firewall GAME obsługuje Rust o profilu szczegółowym. Więcej informacji o hostingu Rust znajdziesz na serwerach OVHcloud [here](https://www.ovhcloud.com/pl/bare-metal/game/rust-server/).

#### Minecraft

Minecraft jest dobrze obsługiwany w następujących wersjach:

- Minecraft Java edition 
- Minecraft Pocket Edition
- Kwerenda Minecraft

> [!primary]
> Aktualnie, Minecraft Java edition jest chroniony w trybie "domyślnym" i nie wyświetla się żadna dodatkowa konfiguracja. Jeśli instalujesz większe serwery Minecraft lub masz specyficzne potrzeby, skontaktuj się z naszym działem obsługi klienta, korzystając z [Help Centre](https://help.ovhcloud.com/csm?id=csm_get_help) wraz ze wszystkimi szczegółami, aby ulepszyć profil aplikacji.
>

## FAQ

### Czy mogę korzystać z firewalla GAME w innych zakresach niż serwery bare metal?

Nie, firewall game jest dostępny wyłącznie dla serwerów dedykowanych bare metal.

### Czy mogę wyłączyć firewall game?

Jest to możliwe, jeśli nie jest zalecane. Można to zrobić, usuwając wszystkie reguły protokołu gier z konfiguracji i wyłączając zasady `Default: Upuść".

### Moja gra nie znajduje się na liście obsługiwanych protokołów. Co mogę zrobić?

Swoje zapotrzebowanie możesz zgłosić na stronie [infrastructure solutions roadmap on GitHub](https://github.com/orgs/ovh/projects/16/views/14). Pomoże nam to w podjęciu decyzji o ustaleniu priorytetów między kolejnymi planowanymi funkcjami.

### Po skonfigurowaniu portów i domyślnych zasad porzucania gry nadal otrzymuję ataki wpływające na działanie serwera gier. Co należy zrobić?

W tym celu należy udostępnić odpowiednie zrzuty ruchu sieciowego jako przykłady takich ataków (plik *.pcap*) i tuning ochrony żądania profilu. Można to zrobić przy użyciu [Help Centre](https://help.ovhcloud.com/csm?id=csm_get_help).

## Sprawdź również

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
