---
title: Jak korzystać z polityki IAM w Panelu klienta
excerpt: Dowiedz się, jak przypisać użytkownikom uprawnienia dostępu do konta OVHcloud
updated: 2025-10-27
---

## Wprowadzenie

Niniejszy przewodnik wyjaśnia, jak zapewnić użytkownikom konta OVHcloud prawa dostępu.

Zarządzanie dostępami OVHcloud opiera się na systemie zarządzania polityką. Istnieje możliwość tworzenia różnych polityk, które dają użytkownikom dostęp do określonych funkcji dotyczących produktów powiązanych z kontem OVHcloud.

W szczegółach polityka zawiera:

- Jedna lub więcej **tożsamości** objętych tą polityką. 
    - Mogą to być identyfikatory kont, użytkowników lub grup użytkowników (np. używane w [Federation](/pages/account_and_service_management/account_information/ovhcloud-account-connect-saml-adfs) - dostępne są inne przewodniki SSO). 
- Jedna lub więcej **zasobów* objętych tą polityką. 
    - Zasób to produkt OVHcloud, którego dotyczy niniejsza polityka (nazwa domeny, serwer Nutanix, Load Balancer, etc.).
- Jedna lub więcej **akcja* dozwolona lub wyłączona przez tę politykę.
    - Działania to uprawnienia szczególne, których dotyczy ta polityka (restart serwera, utworzenie konta e-mail, rezygnacja z abonamentu, itp.)
 
Na przykład, możemy stworzyć politykę pozwalającą użytkownikowi o nazwie John, na serwerze VPS, uzyskać dostęp do akcji "restartuj".

**Niniejszy przewodnik wyjaśnia, jak zadeklarować te polityki w Panelu klienta OVHcloud i jak wyświetlić dane identyfikacyjne, zasoby oraz operacje dostępne dla tych danych.**

![polityka IAM](images/iam_policies.png){.thumbnail}

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/g6qvskdFwy8?si=51mbyM6affEFknxv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Wymagania początkowe

- Posiadanie [konta OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- [zarządzanie użytkownikami konta](/pages/account_and_service_management/account_information/ovhcloud-users-management)
- Jeden lub więcej produktów OVHcloud powiązanych z tym kontem OVHcloud (Load Balancer, domena, VPS, itp.)

## W praktyce

### Dostęp do menu IAM

Na pasku bocznym kliknij na `Tożsamość, bezpieczeństwo i operacje`{.action} i na `Polityki`{.action}.

![Dostęp do menu IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Jeśli przejdziesz do tego menu po raz pierwszy, pojawi się następująca strona:

![Dostęp do menu IAM](/pages/assets/screens/control_panel/product-selection/right-column/identity-and-access-management-iam/tab-first-access.png){.thumbnail}

Kliknij bezpośrednio [Tworzenie polityki](#create-policy) lub [Tworzenie użytkowników](#create-users), w zależności od tego, co chcesz zrobić.

> [!primary]
>
> Kliknij na przycisk "Tryb zaawansowany", aby wyświetlić listę wszystkich dziedzin polityki OVHcloud. Polityki te są automatycznie tworzone przez OVHcloud w celu przekształcenia istniejącej wcześniej delegacji domen `NIC Tech` (kontakt techniczny) i `NIC Admin` (kontakt administracyjny) w nową funkcję IAM. 
>
> Klienci nie mogą modyfikować ani usuwać tych polityk.

Jeśli masz już utworzone reguły lub użytkowników, znajdziesz je w pierwszej zakładce `Moje zasady`{.action}. W zakładce `Polityka OVHcloud`{.action} znajdują się nieedytowalne reguły tworzone automatycznie przez OVHcloud.

![Dostęp do menu IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Każda polityka jest wyświetlana wraz z jej nazwiskiem, liczbą powiązanych z nią tożsamości oraz liczbą działań, które zawiera.

### Zarządzanie polityką

<a name="create-policy"></a>

#### Tworzenie polityki

Kliknij przycisk 'Tworzenie polityki{.action}.

Pojawi się następujący formularz:

![Tworzenie polityki](images/create_a_policy_01.png){.thumbnail}

- **Nazwa polityki** (obowiązkowe): to nazwa, która pojawi się w interfejsach. Nazwa musi być unikalna i nie może zawierać spacji.
- **Tożsamości** : Wybierz tożsamości, których dotyczą te zasady. Można wybrać więcej niż jeden typ tożsamości.
- **Rodzaje produktów**: wybierz rodzaje produktów, aby określić zakres polityki. Do tej samej polityki można włączyć jeden lub więcej rodzajów produktu.
- **Zasoby**: dodaj zasoby lub grupy zasobów do pokrycia w ramach polityki. Dostępne zasoby są filtrowane według uprzednio wybranego typu produktu.
- **Działania**.

**Istnieją 4 sposoby dodawania operacji:**

##### 1 - Włącz opcję "Zezwalaj na wykonywanie wszystkich operacji"

![Tworzenie polityki](images/create_a_policy_02.png){.thumbnail}

Podczas aktywacji tej opcji zatwierdzisz wszystkie operacje związane z wybranymi produktami. Obejmuje to wszystkie istniejące działania oraz przyszłe działania dodane do tych kategorii produktów.

##### 2 - Wybierz grupę zarządzanych uprawnień

Udostępniamy wstępnie skonfigurowane grupy uprawnień zarządzane przez OVHcloud.
Możesz wybrać jedną lub kilka grup, wybierając je z dostępnej listy.

![Utwórz politykę](images/create_a_policy_05.png){.thumbnail}

Szczegółowe informacje na temat zawartości grup uprawnień zarządzanych można znaleźć w [powiązanej dokumentacji](/pages/account_and_service_management/account_information/iam-permission-groups).

Zarządzane grupy akcji mogą być używane jako uzupełnienie akcji jednostkowych.

##### 3 - Dodaj działania ręcznie

Jeśli znasz nazwę działania, możesz dodać ją ręcznie.

![Tworzenie polityki](images/create_a_policy_03.png){.thumbnail}

Można użyć *wildcard* na początku lub na końcu nazwy działania z `*`.

Na przykład, dodanie `vps:apiovh:ips/*` przyznaje następujące uprawnienia:

- **vps:apiovh:ips/edit**
- **vps:apiovh:ips/delete**
- **vps:apiovh:ips/get**

##### 4 - Wybierz działania z listy

Działania mogą być wybrane z listy.

![Tworzenie polityki](images/create_a_policy_04.png){.thumbnail}

Dostępne działania zależą od rodzaju zasobów i należą do jednej z pięciu następujących kategorii:

- **Read**: wymienia produkty i wyświetla informacje o nich (*np.: lista adresów IP VPS*).
- **Create**: działanie umożliwiające tworzenie czegoś na produkcie (*np.: utworzyć zgłoszenie pomocy*).
- **Delete**: działanie pozwalające na usunięcie czegoś z produktu (*np.: usuń instancję Public Cloud*).
- **Edit**: działanie mające na celu zmianę istniejącego elementu produktu (*np.: zmienić trasę TCP Load Balancera*).
- **Operate**: wprowadzenie zmian w infrastrukturze związanej z produktem (*ex: restart serwera dedykowanego*).

Pole wyszukiwania jest dostępne, aby pomóc Ci zidentyfikować konkretne działanie na liście.

> [!primary]
> Działania związane z zamówieniami i fakturami nie są jeszcze dostępne w IAM OVHcloud.

#### Warunki dla zasad

Można dodać warunki do zasad IAM.

Zasada z warunkami jest ważna tylko wtedy, gdy wszystkie warunki są zweryfikowane.

Można dodać warunki dotyczące:

- tagu zasobu;
- nazwy zasobu;
- typu produktu;
- adresu IP żądania;
- dnia tygodnia;
- daty;
- godziny.

![Utwórz zasadę](images/conditions.png){.thumbnail}

Po dodaniu warunki są wyświetlane zgodnie z [składnią używaną w API](/pages/account_and_service_management/account_information/iam-policies-api).

#### Zmień politykę

Aby zmienić istniejącą politykę, kliknij przycisk `...`{.action} po prawej stronie polityki a następnie kliknij `Zmień politykę`{.action}.

![Zmień politykę](images/editing_a_policy.png){.thumbnail}

Następnie można zmienić zakres polityki.

#### Usuń politykę

Aby usunąć istniejącą politykę, kliknij przycisk `...`{.action} po prawej stronie polityki, a następnie kliknij na `Usuń politykę`{.action}.

W oknie podręcznym zostanie wyświetlona prośba o potwierdzenie usunięcia hosta.

<a name="create-users"></a>

#### Polityki kierowane do innego konta klienta OVHcloud

Polityka dostępu może być skierowana do innego konta klienta OVHcloud.
Konto docelowe tych zasad będzie mogło zarządzać prawami uzyskanymi w ten sposób zgodnie z jego własnymi zasadami, ale nigdy nie będzie mogło zastąpić praw ustawionych w zasadach dostępu.

Na przykład konto **xx111-ovh** dające uprawnienia na koncie "vps:apiovh:ips/*" **xx222-ovh**.
Konto **xx222-ovh** będzie mogło przyznać prawo `vps:apiovh:ip/delete` swoim użytkownikom, ale nigdy nie będzie mogło przyznać prawa `vps:apiovh:reboot`.

Dostęp do pomocy technicznej będzie zawsze zarezerwowany dla właściciela zasobu.

### Zarządzanie tożsamością

Aby zarządzać tożsamościami dostępnymi dla polityk, przejdź do menu `Tożsamość, bezpieczeństwo i operacje`{.action}, a następnie do sekcji `Tożsamości`{.action}.

Szczegóły zarządzania użytkownikami znajdziesz w [dokumentacji dedykowanej](/pages/account_and_service_management/account_information/ovhcloud-users-management).

### Zarządzanie grupami zasobów

Polityka może być ukierunkowana na grupy zasobów (zamiast bezpośredniego ukierunkowywania zasobów). Te grupy zasobów mogą łączyć zasoby z różnych produktów, na przykład w celu skonfigurowania środowiska testowego.

#### Utwórz grupę zasobów

Aby utworzyć grupę zasobów, przejdź do sekcji `Polityki`{.action} i kliknij zakładkę `Grupy zasobów`{.action}:

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

Dołącz do [grona naszych użytkowników](/links/community).