---
title: Zarządzanie usługą Private Cloud OVH
slug: manager-ovh-private-cloud
excerpt: Poznaj opcje zarządzania usługą Private Cloud w Panelu klienta
section: Pierwsze kroki
---

**Ostatnia aktualizacja dnia 2018-01-16**

## Wprowadzenie

Panel klienta oferuje liczne opcje zarządzania ustawieniami infrastruktury Private Cloud.

**Niniejszy przewodnik pomoże Ci odkryć wiele z jego możliwości.**

## Wymagania początkowe

- Połączenie z [Panelem klienta OVH](https://www.ovh.com/auth/?action=gotomanager){.external} w części `Dedykowane`{.action}, a następnie `Private Cloud`{.action}.
- Posiadanie produktu [Private Cloud](https://www.ovh.pl/private-cloud/){.external}.


## W praktyce

### Strona główna

Przechodząc w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} do części `Dedykowane`{.action}, a następnie `Private Cloud`{.action} masz widok ogólny swojej usługi Private Cloud:

![Informacje ogólne](images/manager_general.png){.thumbnail}

Na samej górze,`na zdjęciu ozn. 1`, znajduje się nazwa i opis Twojej Private Cloud. Możesz ją dowolnie personalizować, co jest szczególnie przydatne, gdy posiadasz kilka infrastruktur. 

Po prawej stronie, `na zdjęciu ozn. 2` znajduje się kilka przycisków:

- zamówienie bloku IP przekierowujące do zakładki `IP`{.action};
- zamówienie licencji (cPanel, Plesk itp) przekierowujące do zakładki `Licencje`{.action};
- zmiana trybu naliczania opłaty za wszystkie zasoby na stałą opłatę miesięczną (jeśli ten tryb wybrano wcześniej, nic się nie wyświetli);
- dołączenie do listy mailingowej poświęconej Private Cloud;
- zlecenie kończenia dzierżawy usługi: w celu zatwierdzenia takiego wniosku zostanie wysłany e-mail.


### Informacje ogólne

W tej części znajdziesz informacje ogólne o swojej Private Cloud.

![Informacje ogólne](images/general_information.png){.thumbnail}


- Wersja oprogramowania Private Cloud.
- Model produktu.
- Datacenter, a dokładniej strefa, w której zainstalowana jest Twoja infrastruktura.
- Rodzaj zabezpieczeń dostępu do Twojej infrastruktury (`Otwarty` lub `Ograniczony`) z ograniczeniami dla adresów IP.
- Gwarantowana przepustwość, ta funkcja będzie dostępna wkrótce.
- Liczba dostępnych w Twojej infrastrukturze wirtualnych data center.
- Liczba bloków IP.


### Opcje

Następnie będziesz miał widok stanu opcji NSX i vRops.

![Opcje](images/options.png){.thumbnail}

W podanym przykładzie opcje NSX i vRops są aktywne i masz możliwość ich dezaktywowania, jeśli nie są potrzebne.

W celu włączenia jednej z tych opcji wystarczy kliknąć odpowiedni przycisk.

![Włączanie opcji](images/options_activation.png){.thumbnail}

Po kliknięciu `Poznaj szczegóły`{.action} wyświetli się przewodnik opisujący każdą z opcji.


### Datacenters

W tej zakładce znajdziesz krótki opis wirtualnych data center w swojej ofercie Private Cloud:

![Data center](images/datacenter.png){.thumbnail}

Poniżej znajdziesz wszystkie informacje dotyczące data center.

> [!primary]
>
> Na tej stronie możesz bez dodatkowych kosztów dodać kolejne data center.
> 



### Użytkownicy

Wszyscy użytkownicy mogący połączyć się z vSphere są widoczni w tej części:

![Użytkownicy](images/users.png){.thumbnail}

Klikając przycisk `Utwórz użytkownika`{.action} po prawej stronie, można utworzyć użytkownika.

Znajdziesz tu informacje o każdym z użytkowników: 

- login;
- adres e-mail (opcjonalnie);
- numer telefonu (opcjonalnie);
- token zatwierdzający;
- status.

Prezentowane w tej części uprawnienia można dowolnie ustawiać dla różnych użytkowników. Umożliwiają zarządzanie funkcjami w zakładce `OVH Network`{.action}  w vSphere, w przypadku pierwszego pola oraz zarządzanie adresami IP Failover, w przypadku drugiego.
Po kliknięciu na koło zębate z prawej strony tabeli, pojawi się wiele możliwości wyboru:

- zmiana trybu dostępu;
- widok i zmiana uprawnień danego użytkownika w data center;
- zmiana hasła użytkownika;
- usunięcie użytkownika.

Poniżej bardziej szczegółowe przedstawienie zmiany uprawnień w poszczególnych data center:

![Uprawnienia użytkowników w poszczególnych data center](images/rights_user_datacenters.png){.thumbnail}

- `Dostęp do vSphere`{.action} - dotyczy ogólnych uprawnień użytkownika w vSphere:

|Uprawnienia|Opis|
|---|---|
|No|Brak dostępu|
|Read only|Dostęp tylko do odczytu|
|Read/Write|Dostęp do odczytu/zapisu|
|Provider|Ograniczony dostęp dla administratorów OVH|

- `Dodawanie zasobów`{.action} - ten przycisk umożliwia przyznanie (lub nie) uprawnień do zamawiania dodatkowych zasobów przez plugin OVH w kliencie vSphere.

- `Dostęp do VM Network`{.action} - dotyczy zarządzania uprawnieniami w części publicznej sieci (w interfejsie vSphere o nazwie `VM Network`):

|Uprawnienia|Opis|
|---|---|
|brak|Brak dostępu|
|read only|Dostęp tylko do odczytu|
|provider|Umożliwia konfigurację maszyn wirtualnych (VM) w sieci publicznej|

- `Dostęp do V(X)LAN`{.action} - opcja zarządzania uprawnieniami w części prywatnej sieci VXLAN dla Dedicated Cloud lub sieci VLAN dla SDDC:

|Uprawnienia|Opis|
|---|---|
|No|brak dostępu|
|Read only|tylko do odczytu|
|Provider|umożliwia konfigurację maszyn wirtualnych (VM) w sieci prywatnej|
|Administrator|umożliwia zarządzanie przełącznikiem wirtualnym dla grup (tworzenie, zmiany, usuwanie itd.)| 

> [!warning]
>
> Dla uprawnień w trakcie zmian, wyświetlane informacje ulegną zmianie.
> 


### Bezpieczeństwo

W tej zakładce można zmieniać ustawienia polityki dostępu do vCenter:

![Parametry bezpieczeństwa](images/security.png){.thumbnail}

Powyższe elementy oraz zawartość tabeli można konfigurować przyciskami po prawej stronie. Możesz ustawić:

- limit połączenia dla sesji; 
- dopuszczalną liczbę połączeń jednoczesnych;
- politykę dostępu, w trybie ograniczonym lub nieograniczonym wraz z zezwoleniem dla poszczególnych adresów IP. IP zostaną przedstawione w tabeli.

Polityka odłączania polega na odłączaniu pierwszego lub ostatniego podłączonego użytkownika.
W prezentowanym przykładzie, jeśli podłączonych jest 50 użytkowników, to w chwili, gdy podłącza się 51 użytkownik, pierwszy użytkownik, który ustanowił połączenie zostaje odłączony.
Jeśli ustawisz politykę dostępu w trybie ograniczonym i nie wprowadzisz żadnego adresu IP, nikt nie będzie mógł połączyć się z klientem vSphere. Jednak maszyny wirtualne pozostaną w dalszym ciągu dostępne.


### Operacje

W tej ostatniej zakładce znajdziesz operacje w toku wykonywane w Twojej infrastrukturze:

![Operacje](images/operations.png){.thumbnail}

Możesz sprawdzić, czy operacja nie zawiera błędu, czy zaplanowana jest konserwacja itd.

Jeśli nie masz dostępu do klienta vSphere, może to oznaczać, że konserwacja jest w toku, w tej zakładce można to sprawdzić.


### Widok "data center"

W Private Cloud można mieć kilka data center. Klikając na Private Cloud znajdziesz je w:

![Widok Data center](images/datacenter_view.png){.thumbnail}

Klikając na ołówek możesz nadać swojemu data center własną nazwę oraz dodać własny opis.
Znajdziesz tu podstawowe informacje o swoim data center, o gamie (SDDC lub DC), liczbie hostów i datastores.
Posiadając Dedicated Cloud i Software-Defined Data Center, w tej samej ofercie Private Cloud można korzystać z kilku data center.


### Hosty

Tutaj przedstawiony jest `Host` w Twoim data center:

![Hosty](images/hosts.png){.thumbnail}

W tej części znajdziesz:

- nazwy hostów;
- model (M, L, L+ itd.) ;
- sposób naliczania opłat: jeśli rozliczasz się godzinowo, możesz przejść na rozliczanie miesięczne;
- status hosta;
- liczbę wykorzystanych godzin (tylko przy zasobach godzinowych).

Po prawej stronie, można zamówić nowy host z miesięcznym okresem płatności.


### Datastores

Tabela `Datastores` jest podobna do tabeli hostów:

![Datastores](images/datastores.png){.thumbnail}

W tej części znajdziesz:

- nazwy zasobów dyskowych datastore;
- informacje o ich rozmiarze;
- sposób naliczania opłat;
- status datastore;
- liczbę wykorzystanych godzin (tylko przy zasobach godzinowych).

Po prawej stronie, można zamówić nowy datastore z miesięcznym okresem płatności. 


### Backup

W zakładce `Backup` można aktywować rozwiązanie `Veeam backup`, klikając przycisk `Włącz backup`{.action} :

![Backup](images/backup.png){.thumbnail}

Więcej informacji o opcji w tym [przewodniku](https://docs.ovh.com/fr/private-cloud/veeam-backup-as-a-service/){.external}.


### Licencje Windows

W zakładce `Licencje Windows`{.action} można aktywować w data center licencje SPLA Windows, klikając przycisk po prawej:

![Licencja SPLA Windows](images/windows_licence.png){.thumbnail}

Stronę z cennikiem znajdziesz [tutaj](https://www.ovh.pl/private-cloud/opcje/obrazy-licencje.xml){.external}.


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com>.