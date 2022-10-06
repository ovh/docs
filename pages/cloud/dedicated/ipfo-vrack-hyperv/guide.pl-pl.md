---
title: "Korzystanie z Hyper-V z adresów Additional IP w sieci vRack"
excerpt: "Dowiedz się, jak skonfigurować wirtualną maszynę z Additional IP i Hyper-V w sieci vRack"
slug: ipfo-vrack-hyperv
section: vRack 
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 26-04-2021**

## Wprowadzenie

Postępuj zgodnie z instrukcjami procesu instalacji Hyper-V, połączenia wirtualnego switcha i konfiguracji wirtualnej maszyny, aby działać z Additional IP w sieci vRack.

**Dowiedz się, jak skonfigurować wirtualną maszynę z adresami Additional IP i Hyper-V w sieci vRack.**

## Wymagania początkowe

- Serwer dedykowany (kompatybilny z [vRack](https://www.ovh.pl/rozwiazania/vrack/)), na którym zainstalowany jest Windows Server.
- Obraz ISO systemu operacyjnego, który zostanie zainstalowany na Twojej wirtualnej maszynie (CentOS 7 zostanie użyty jako przykład w tym przewodniku).
- vRack dostarczony na Twoje konto OVHcloud.
- Blok IP 4 adresów IP lub więcej.
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](https://eco.ovhcloud.com/pl/about/).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](https://eco.ovhcloud.com/pl/compare/).

## W praktyce

Ten przewodnik zakłada, że zainstalowałeś już Windows Server, jesteś zalogowany przez zdalny pulpit i przypisałeś już Twój serwer dedykowany oraz blok IP do sieci vRack. Więcej informacji na temat tych kroków znajdziesz w przewodniku od 1 do 4: [Konfiguracja kilku serwerów dedykowanych w sieci vRack](../konfiguracja-kilku-serwerow-dedykowanych-vrack/).

### Instalacja Hyper-V

Pierwszy etap polega na zainstalowaniu Hyper-V.

W panelu zarządzania serwerami kliknij `Add roles and features`{.action}

![Installing hyper-v](images/add-roles-features.png){.thumbnail}

W Kreatorze kliknij `Next`{.action}, aby przejść do następnej strony.

![Installing hyper-v](images/add-roles-features-2.png){.thumbnail}

Sprawdź, czy wybrano opcję "Role-Based or feature-based" i kliknij `Next`{.action}.

![Installing hyper-v](images/add-roles-features-3.png){.thumbnail}

Sprawdź, czy wybrana jest opcja "Select a server from the server pool" oraz serwer, nad którym pracujesz na liście poniżej. Następnie kliknij `Next`{.action}.

![Installing hyper-v](images/add-roles-features-4.png){.thumbnail}

Na liście kół zaznacz opcję "Hyper-V", następnie kliknij `Next`{.action}.

![Installing hyper-v](images/add-roles-features-5.png){.thumbnail}

Na następnej stronie ("Features") kliknij `Next`{.action}.

![Installing hyper-v](images/add-roles-features-9.png){.thumbnail}

Wyszukaj połączenie sieciowe Twojego serwera, którego chcesz użyć do wirtualnego switcha.

Aby go zidentyfikować, otwórz Command Prompt lub PowerShell i wprowadź komendę `ipconfig /all`.

W naszym przykładzie `Ethernet drugi` to interfejs używany w sieci vRack. Możliwe jest jednak, że karta sieciowa vRack używa innego interfejsu. Korzystaj z interfejsu, który nie posiada głównego adresu IP serwera lub który używa przypisanego do siebie adresu IP (169.254.x.x).

![check-interface](images/ipconfig.png){.thumbnail}

Po uzyskaniu tych informacji wróć do okna `Add Roles and Features Wizard`{.action} i kliknij `Next`{.action}.

![Installing hyper-v](images/add-roles-features-6.png){.thumbnail}

Wybierz adapter vRack, który zidentyfikowałeś w Command Prompt lub PowerShell, następnie kliknij `Next`{.action}.

![Installing hyper-v](images/add-roles-features-7.png){.thumbnail}

Na dwóch kolejnych stronach możesz wybrać opcje migracji i przechowywania danych. Możesz je dowolnie skonfigurować.

Po dotarciu do strony z potwierdzeniem zaznacz kratkę "Restart the destination automatically if required", kliknij `Yes`{.action}, a następnie `Install`{.action}.

![Installing hyper-v](images/add-roles-features-8.png){.thumbnail}

Hyper-V się zainstaluje i serwer powinien zrestartować.

### Tworzenie i konfigurowanie wirtualnej maszyny

Po zrestartowaniu serwera zaloguj się i otwórz Hyper-V Manager.

Wybierz serwer po lewej stronie, kliknij `New`{.action} i wybierz "Virtual Machine".

![create-vm](images/create-vm.png){.thumbnail}

W sekcji "New Virtual Machine Wizard" skonfiguruj wirtualną maszynę zgodnie z potrzebami. Po przejściu do etapu "Configuration Networking" wybierz wirtualny switch. Po wybraniu domeny kliknij `Next`{.action}, aby kontynuować.

![create-vm](images/create-vm-2.png){.thumbnail}

Po dotarciu do sekcji "Instalacja Opcje" dodaj obraz ISO dla systemu operacyjnego, który chcesz zainstalować. Kliknij `Next`{.action}, aby kontynuować.

![create-vm](images/create-vm-3.png){.thumbnail}

Po wejściu na stronę "Summary" sprawdź, czy parametry wirtualnego switcha i systemu operacyjnego są poprawne, po czym kliknij `Finish`{.action}.

![create-vm](images/create-vm-4.png){.thumbnail}

### Zainstaluj system operacyjny i skonfiguruj IP

Uruchom wirtualną maszynę. Instalacja systemu operacyjnego musi zostać uruchomiona automatycznie. Jeśli nie, wyświetli się następujący komunikat błędu:

> "The unsigned image's hash is not allowed (DB)"

W tym przypadku wyłącz opcję "Secure Boot".

Wyłącz wirtualną maszynę i kliknij `Settings`{.action}.

![disable-secure-boot](images/disable-secure-boot.png){.thumbnail}

Kliknij `Security`{.action}, usuń zaznaczenie i kliknij `Apply`{.action}.

![disable-secure-boot](images/disable-secure-boot-2.png){.thumbnail}

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

![konfiguracja](images/configured.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
