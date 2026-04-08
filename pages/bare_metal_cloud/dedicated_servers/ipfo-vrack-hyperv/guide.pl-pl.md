---
title: "Konfiguracja VM Hyper-V z Additional IP w sieci vRack na serwerze dedykowanym"
excerpt: "Korzystaj z Hyper-V z Additional IP przez vRack na serwerze dedykowanym OVHcloud."
updated: 2025-07-22
---

> [!primary]
> Ten artykuł dotyczy konfiguracji dodatkowych adresów Additional IPv4 w sieci vRack. Możesz również skonfigurować adresy Additional IPv6 w sieci vRack, korzystając z [tego przewodnika](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack).
>

## Wprowadzenie

Postępuj zgodnie z instrukcjami procesu instalacji Hyper-V, połączenia wirtualnego switcha i konfiguracji wirtualnej maszyny, aby działać z Additional IP w sieci vRack.

**Dowiedz się, jak skonfigurować wirtualną maszynę z adresami Additional IP i Hyper-V w sieci vRack.**

## Wymagania początkowe

- Serwer dedykowany (kompatybilny z [vRack](/links/network/vrack)), na którym zainstalowany jest Windows Server.
- Obraz ISO systemu operacyjnego, który zostanie zainstalowany na Twojej wirtualnej maszynie (CentOS 7 zostanie użyty jako przykład w tym przewodniku).
- vRack dostarczony na Twoje konto OVHcloud.
- Blok IP 4 adresów IP lub więcej.
- Dostęp do [Panelu klienta OVHcloud](/links/manager).

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](/links/bare-metal/eco-about).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](/links/bare-metal/eco-compare).

## W praktyce

Ten przewodnik zakłada, że zainstalowałeś już Windows Server, jesteś zalogowany przez zdalny pulpit i przypisałeś już Twój serwer dedykowany oraz blok IP do sieci vRack. Więcej informacji na temat tych kroków znajdziesz w przewodniku od 1 do 4: [Konfiguracja kilku serwerów dedykowanych w sieci vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server).

### Instalacja Hyper-V

Pierwszy etap polega na zainstalowaniu Hyper-V.

W panelu zarządzania serwerami kliknij `Add roles and features`{.action}

![Panel Menedżera serwera z linkiem Dodaj role i funkcje](images/add-roles-features.png){.thumbnail}

W Kreatorze kliknij `Next`{.action}, aby przejść do następnej strony.

![Strona powitalna kreatora Dodaj role](images/add-roles-features-2.png){.thumbnail}

Sprawdź, czy wybrano opcję "Role-Based or feature-based" i kliknij `Next`{.action}.

![Wybór typu instalacji z opcją Instalacja oparta na rolach](images/add-roles-features-3.png){.thumbnail}

Sprawdź, czy wybrana jest opcja "Select a server from the server pool" oraz serwer, nad którym pracujesz na liście poniżej. Następnie kliknij `Next`{.action}.

![Wybór puli serwerów z zaznaczonym bieżącym serwerem](images/add-roles-features-4.png){.thumbnail}

Na liście kół zaznacz opcję "Hyper-V", następnie kliknij `Next`{.action}.

![Lista ról serwera z zaznaczonym Hyper-V](images/add-roles-features-5.png){.thumbnail}

Na następnej stronie ("Features") kliknij `Next`{.action}.

![Strona funkcji w kreatorze Dodaj role](images/add-roles-features-9.png){.thumbnail}

Wyszukaj połączenie sieciowe Twojego serwera, którego chcesz użyć do wirtualnego switcha.

Aby go zidentyfikować, otwórz Command Prompt lub PowerShell i wprowadź komendę `ipconfig /all`.

W naszym przykładzie `Ethernet 2` to interfejs używany w sieci vRack. Możliwe jest jednak, że karta sieciowa vRack używa innego interfejsu. Korzystaj z interfejsu, który nie posiada głównego adresu IP serwera lub który używa przypisanego do siebie adresu IP (169.254.x.x).

![Wynik ipconfig pokazujący interfejs vRack z automatycznym IP](images/ipconfig.png){.thumbnail}

Po uzyskaniu tych informacji wróć do okna `Add Roles and Features Wizard`{.action} i kliknij `Next`{.action}.

![Strona tworzenia przełącznika wirtualnego Hyper-V](images/add-roles-features-6.png){.thumbnail}

Wybierz adapter vRack, który zidentyfikowałeś w Command Prompt lub PowerShell, następnie kliknij `Next`{.action}.

![Wybór karty sieciowej vRack dla przełącznika wirtualnego](images/add-roles-features-7.png){.thumbnail}

Na dwóch kolejnych stronach możesz wybrać opcje migracji i przechowywania danych. Możesz je dowolnie skonfigurować.

Po dotarciu do strony z potwierdzeniem zaznacz kratkę "Restart the destination automatically if required", kliknij `Yes`{.action}, a następnie `Install`{.action}.

![Strona potwierdzenia z opcją automatycznego restartu i przyciskiem Zainstaluj](images/add-roles-features-8.png){.thumbnail}

Hyper-V się zainstaluje i serwer powinien zrestartować.

### Tworzenie i konfigurowanie wirtualnej maszyny

Po zrestartowaniu serwera zaloguj się i otwórz Hyper-V Manager.

Wybierz serwer po lewej stronie, kliknij `New`{.action} i wybierz "Virtual Machine".

![Menedżer Hyper-V z opcją Nowa maszyna wirtualna](images/create-vm.png){.thumbnail}

W sekcji "New Virtual Machine Wizard" skonfiguruj wirtualną maszynę zgodnie z potrzebami. Po przejściu do etapu "Configuration Networking" wybierz wirtualny switch. Po wybraniu domeny kliknij `Next`{.action}, aby kontynuować.

![Krok konfiguracji sieci z wybranym przełącznikiem wirtualnym](images/create-vm-2.png){.thumbnail}

Po dotarciu do sekcji "Instalacja Opcje" dodaj obraz ISO dla systemu operacyjnego, który chcesz zainstalować. Kliknij `Next`{.action}, aby kontynuować.

![Opcje instalacji z wybranym plikiem ISO systemu](images/create-vm-3.png){.thumbnail}

Po wejściu na stronę "Summary" sprawdź, czy parametry wirtualnego switcha i systemu operacyjnego są poprawne, po czym kliknij `Finish`{.action}.

![Podsumowanie tworzenia maszyny wirtualnej z ustawieniami sieci i systemu](images/create-vm-4.png){.thumbnail}

### Zainstaluj system operacyjny i skonfiguruj IP

Uruchom wirtualną maszynę. Instalacja systemu operacyjnego musi zostać uruchomiona automatycznie. Jeśli nie, wyświetli się następujący komunikat błędu:

> "The unsigned image's hash is not allowed (DB)"

W tym przypadku wyłącz opcję "Secure Boot".

Wyłącz wirtualną maszynę i kliknij `Settings`{.action}.

![Okno ustawień maszyny wirtualnej w Menedżerze Hyper-V](images/disable-secure-boot.png){.thumbnail}

Kliknij `Security`{.action}, usuń zaznaczenie i kliknij `Apply`{.action}.

![Ustawienia zabezpieczeń z odznaczonym Bezpiecznym rozruchem](images/disable-secure-boot-2.png){.thumbnail}

Po zakończeniu zrestartuj wirtualną maszynę.

Skonfiguruj system operacyjny zgodnie z Twoimi potrzebami.

W przypadku parametrów sieci konieczne będzie zdefiniowanie statycznego adresu IP.

W naszym przykładzie blok IP przypisany do sieci vRack to 192.xxx.xxx.80/29. Oto rozkład bloku:

<br>
192.xxx.xxx.80 - Adres sieci (Zarezerwowany - Niewykorzystany)<br>
192.xxx.xxx.81 - Pierwszy możliwy do użycia adres IP<br>
192.xxx.xxx.82<br>
192.xxx.xxx.83<br>
192.xxx.xxx.84<br>
192.xxx.xxx.85 - Ostatni możliwy do użycia adres IP<br>
192.xxx.xxx.86 - Domyślna brama (Zarezerwowana - niezdatna)<br>
192.xxx.xxx.87 - Adres broadcastu (Zarezerwowany - Niemożliwy do użycia)<br>
<br>

W naszym przykładzie użyjemy 192.xxx.xxx.81. Konfiguracja powinna wyglądać następująco:

<br>
Address: 192.168.xxx.81<br>
Subnet Mask: 255.255.255.248<br>
Gateway: 192.xxx.xxx.86<br>
DNS: 213.186.33.99 (Możesz, jeśli chcesz, umieścić inny DNS)<br>
<br>

Po zainstalowaniu systemu operacyjnego. Powinien już być połączony.

Poniższy przykład pokazuje, w jaki sposób powinien pojawić się plik `ifcfg-eth0`.

![Plik CentOS ifcfg-eth0 ze statyczną konfiguracją IP vRack](images/configured.png){.thumbnail}

## Sprawdź również

- [Konfiguracja sieci Hyper-V na serwerach dedykowanych HG/Scale](/pages/bare_metal_cloud/dedicated_servers/hyperv-network-HG-Scale)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
