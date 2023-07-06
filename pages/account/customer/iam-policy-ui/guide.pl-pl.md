---
title: Jak korzystać z polityki IAM w Panelu klienta
excerpt: Dowiedz się, jak przypisać użytkownikom uprawnienia dostępu do konta OVHcloud
updated: 2023-07-06
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

> [!warning]
>
> Ta funkcja jest aktualnie dostępna w wersji beta. Więcej informacji na temat <https://labs.ovhcloud.com/en/>
>

## Wprowadzenie

Niniejszy przewodnik wyjaśnia, jak zapewnić użytkownikom konta OVHcloud prawa dostępu.

Zarządzanie dostępami OVHcloud opiera się na systemie zarządzania polityką. Istnieje możliwość tworzenia różnych polityk, które dają użytkownikom dostęp do określonych funkcji dotyczących produktów powiązanych z kontem OVHcloud.

W szczegółach polityka zawiera:

- Jedna lub więcej **tożsamości** objętych tą polityką. 
    - Mogą to być identyfikatory kont, użytkowników lub grup użytkowników (np. używane w [Federation](/pages/account/customer/ovhcloud-account-connect-saml-adfs) - dostępne są inne przewodniki SSO). 
- Jedna lub więcej **zasobów* objętych tą polityką. 
    - Zasób to produkt OVHcloud, którego dotyczy niniejsza polityka (nazwa domeny, serwer Nutanix, Load Balancer, etc.).
- Jedna lub więcej **akcja* dozwolona lub wyłączona przez tę politykę.
    - Działania to uprawnienia szczególne, których dotyczy ta polityka (restart serwera, utworzenie konta e-mail, rezygnacja z abonamentu, itp.)
 
Na przykład, możemy stworzyć politykę pozwalającą użytkownikowi o nazwie John, na serwerze VPS, uzyskać dostęp do akcji "restartuj".

**Niniejszy przewodnik wyjaśnia, jak zadeklarować te polityki w Panelu klienta OVHcloud i jak wyświetlić dane identyfikacyjne, zasoby oraz operacje dostępne dla tych danych.**

![polityka IAM](images/iam_policies.png){.thumbnail}

## Wymagania początkowe

- Posiadanie [konta OVHcloud](/pages/account/customer/ovhcloud-account-creation)
- [zarządzanie użytkownikami konta](/pages/account/customer/ovhcloud-users-management)
- Jeden lub więcej produktów OVHcloud powiązanych z tym kontem OVHcloud (Load Balancer, domena, VPS, itp.)

## W praktyce

### Dostęp do menu IAM

Kliknij nazwę konta w prawym górnym rogu, a następnie ponownie nazwę użytkownika na pasku bocznym.

![Dostęp do menu IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Możesz uzyskać dostęp do menu IAM za pomocą wpisu w Panelu klienta.

![Dostęp do menu IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

W menu wyświetla się listę wszystkich polityk utworzonych na Twoim koncie.

![Dostęp do menu IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Każda polityka jest wyświetlana wraz z jej nazwiskiem, liczbą powiązanych z nią tożsamości oraz liczbą działań, które zawiera.

> [!primary]
>
> Kliknij na przycisk "Tryb zaawansowany", aby wyświetlić listę wszystkich dziedzin polityki OVHcloud. Polityki te są automatycznie tworzone przez OVHcloud w celu przekształcenia istniejącej wcześniej delegacji domen `NIC Tech` (kontakt techniczny) i `NIC Admin` (kontakt administracyjny) w nową funkcję IAM. 
>
> Klienci nie mogą modyfikować ani usuwać tych polityk.

### Zarządzanie polityką

#### Tworzenie polityki

Kliknij przycisk 'Tworzenie polityki{.action}.

Pojawi się następujący formularz:

![Tworzenie polityki](images/create_a_policy_01.png){.thumbnail}

- **Nazwa polityki** (obowiązkowe): to nazwa, która pojawi się w interfejsach. Nazwa musi być unikalna i nie może zawierać spacji.
- **Rodzaje produktów**: wybierz rodzaje produktów, aby określić zakres polityki. Do tej samej polityki można włączyć jeden lub więcej rodzajów produktu.
- **Zasoby**: dodaj zasoby lub grupy zasobów do pokrycia w ramach polityki. Dostępne zasoby są filtrowane według uprzednio wybranego typu produktu.
- **Działania**.

Istnieją 3 sposoby dodawania operacji:

- Po włączeniu opcji `Zezwalaj na wykonywanie wszystkich operacji`{.action}

![Tworzenie polityki](images/create_a_policy_02.png){.thumbnail}

Podczas aktywacji tej opcji zatwierdzisz wszystkie operacje związane z wybranymi produktami. Obejmuje to wszystkie istniejące działania oraz przyszłe działania dodane do tych kategorii produktów.

- Ręcznie dodając operacje

Jeśli znasz nazwę działania, możesz dodać ją ręcznie.

![Tworzenie polityki](images/create_a_policy_03.png){.thumbnail}

Można użyć *wildcard* na początku lub na końcu nazwy działania z `*`.

Na przykład, dodanie `vps:apiovh:ips/*` przyznaje następujące uprawnienia:

vps:apiovh:ips/edit <br>
vps:apiovh:ips/delete <br>
vps:apiovh:ips/get <br>

- Wybierając działania z listy

Działania mogą być wybrane z listy.

![Tworzenie polityki](images/create_a_policy_04.png){.thumbnail}

Dostępne działania zależą od rodzaju zasobów i należą do jednej z pięciu następujących kategorii:

- **Read**: wymienia produkty i wyświetla informacje o nich (*np.: lista adresów IP VPS*).
- **Create**: działanie umożliwiające tworzenie czegoś na produkcie (*np.: utworzyć zgłoszenie pomocy*).
- **Delete**: działanie pozwalające na usunięcie czegoś z produktu (*np.: usuń instancję Public Cloud*).
- **Edit**: działanie mające na celu zmianę istniejącego elementu produktu (*np.: zmienić trasę TCP Load Balancera*).
- **Operate**: wprowadzenie zmian w infrastrukturze związanej z produktem (*ex: restart serwera dedykowanego*).

Pole wyszukiwania jest dostępne, aby pomóc Ci zidentyfikować konkretne działanie na liście.

#### Zmień politykę

Aby zmienić istniejącą politykę, kliknij przycisk `...`{.action} po prawej stronie polityki a następnie kliknij `Zmień politykę`{.action}.

![Zmień politykę](images/editing_a_policy.png){.thumbnail}

Następnie można zmienić zakres polityki.

#### Usuń politykę

Aby usunąć istniejącą politykę, kliknij przycisk `...`{.action} po prawej stronie polityki, a następnie kliknij na `Usuń politykę`{.action}.

W oknie podręcznym zostanie wyświetlona prośba o potwierdzenie usunięcia hosta.

### Przypisz tożsamość do polityki

Aby powiązać tożsamość z polityką, kliknij przycisk `...`{.action} po prawej stronie polityki a następnie kliknij `Zarządzanie powiązanymi tożsamościami`{.action}.

![Zmień politykę](images/editing_a_policy.png){.thumbnail}

Dzięki temu będziesz mógł dodawać i usuwać użytkowników lub grupy, do których ma zastosowanie polityka.

![Przypisz tożsamość](images/link_identity_to_policy.png){.thumbnail}

### Zarządzanie tożsamością

Tożsamość dostępna dla polityk jest zarządzana w zakładce `Zarządzanie użytkownikami`{.action} w menu `Moje konto`{.action}.

Zakładka `Identifier`{.action} z menu IAM przekierowuje Cię do tego menu.

Szczegóły zarządzania użytkownikami znajdziesz w [dokumentacji dedykowanej](/pages/account/customer/ovhcloud-users-management).

### Zarządzanie grupami zasobów

Polityka może być ukierunkowana na grupy zasobów (zamiast bezpośredniego ukierunkowywania zasobów). Te grupy zasobów mogą łączyć zasoby z różnych produktów, na przykład w celu skonfigurowania środowiska testowego.

#### Utwórz grupę zasobów

Aby utworzyć grupę zasobów, przejdź do zakładki poświęconej menu IAM:

![Resource Group](images/resource_groups.png){.thumbnail}

Kliknij polecenie Utwórz grupę zasobów{.action}.

![Resource Group](images/resource_groups_form.png){.thumbnail}

- **Nazwa grupy zasobów**: to nazwa, która pojawi się w interfejsach. Nazwa musi być unikalna i nie może zawierać spacji.
- **Rodzaje produktów**: wykaz rodzajów produktów, których dotyczy ta grupa zasobów.
- **Zasoby**: wykaz zasobów, które grupa będzie zawierać.

#### Zmień grupę zasobów

Aby zmienić grupę zasobów, kliknij na jej nazwę na liście.

#### Usuń grupę zasobów

Aby usunąć istniejącą grupę zasobów, kliknij przycisk `...`{.action} po prawej stronie grupy, a następnie kliknij `Usuń grupę zasobów`{.action}.

W oknie podręcznym zostanie wyświetlona prośba o potwierdzenie usunięcia hosta.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na <https://community.ovh.com/en/>.
