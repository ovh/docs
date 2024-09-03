---
title: 'Tworzenie instancji w interfejsie Horizon'
excerpt: 'Dowiedz się, jak utworzyć instancję w interfejsie Horizon'
updated: 2024-09-03
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Istnieje możliwość tworzenia instancji bezpośrednio w interfejsie Horizon. Możesz utworzyć wiele instancji lub skonfigurować grupę zabezpieczeń i użyć jej w instancjach.

**Dowiedz się, jak utworzyć instancję w interfejsie Horizon.**

## Wymagania początkowe

- Utworzenie [projektu Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project) na Twoim koncie OVHcloud
- [Dostęp do interfejsu Horizon](/pages/public_cloud/compute/introducing_horizon)

## W praktyce

### Utwórz prywatną sieć

Zalecamy utworzenie prywatnej sieci przed utworzeniem instancji. Będziesz mógł później przypisać tę sieć do Twojej instancji.

Zaloguj się do interfejsu Horizon, aby rozpocząć. Jeśli potrzebujesz pomocy w przeprowadzeniu tej operacji, zapoznaj się z [naszą dokumentacją](/pages/public_cloud/compute/introducing_horizon).

Następnie kliknij `Network`{.action} w menu po lewej stronie, po czym kliknij `Networks`{.action}.

![network](images/create-network.png){.thumbnail}

Kliknij `Create Network`{.action}

![network](images/create-network-1.png){.thumbnail}


> [!tabs]
> 1. **Network (Sieć)**
>>
>> **Network Name:** Wprowadź nazwę sieci.<br>
>> **Enable Admin State:** Pozostaw zaznaczoną opcję, aby włączyć sieć.<br>
>> **Create Subnet:** Pozostaw zaznaczoną opcję, aby utworzyć podsieć.<br>
>> **Availability Zone Hints:** Pozostaw opcję domyślną.<br><br>
>>![network](images/network_information.png){.thumbnail}<br>
>>
> 2. **Subnet (Podsieć)**
>>
>> **Subnet Name:** Wprowadź nazwę podsieci.<br>
>> **Network Address:** Wybierz zakres sieci prywatnej. Na przykład: `192.168.0.0/24`.<br>
>> **IP Version:** Pozostaw tę wartość dla adresu IPv4.<br>
>> **Gateway IP:** Opcjonalnie. Jeśli adres Gateway IP nie jest zdefiniowany, jest on automatycznie wybierany.<br>
>> **Disable Gateway:** Pozostaw tę opcję wyłączoną.<br><br>
>>![subnet](images/subnet_information.png){.thumbnail}<br>
>>
> 3. **Subnet Szczegóły (Szczegóły podsieci)**
>>
>> **Enable DHCP:** Pozostaw tę opcję włączoną.<br>
>> **Allocation Pools:** Opcjonalnie. Możesz określić zakres, w którym wybrane są adresy IP.<br>
>> **DNS Name Server:** Opcjonalnie. Możesz określić dowolny serwer nazw DNS.<br>
>> **Host Routes:** Opcjonalnie. Możesz wybrać dowolną trasę hosta.<br><br>
>>![KVM](images/subnetdetails_information.png){.thumbnail}<br>
>>

### Tworzenie instancji

W interfejsie Horizon kliknij `Compute`{.action} w menu po lewej stronie, następnie `Instances`{.action}.

![createinstance](images/create-instance-step1.png){.thumbnail}

Otworzy się strona, na której zobaczysz tworzone aktualnie instancje. Aby utworzyć nową, kliknij przycisk `Launch Instance`{.action}.

![createinstance](images/create-instance-step2.png){.thumbnail}

Wprowadź następnie odpowiednie dane. W razie potrzeby skorzystaj z poniższej tabeli, aby uzupełnić pola. Lista danych w tabeli nie jest wyczerpująca.

**Details**

![createinstance](images/create-instance-step3.png){.thumbnail}

|Informacja|Szczegóły|
|---|---|
|Instance name|Określ nazwę wystąpienia, które zostanie uruchomione.|
|Description|Opcjonalnie. W razie potrzeby dodaj opis.|
|Availability zone*|Pozostaw "nova" (wybór domyślny).|
|Count|Określ liczbę wystąpień do utworzenia.|

**Source**

![createinstance](images/create-instance-step4.png){.thumbnail}

|Informacje|Szczegóły|
|---|---|
|Select Boot Source|Kliknij strzałkę rozwijaną, aby wybrać źródło uruchomienia wystąpienia (na przykład "Image" lub "Instance snapshot").|
|Create New Volume|Możesz zaznaczyć tę opcję, jeśli chcesz utworzyć wolumin, do którego skopiowany jest określony obraz systemu operacyjnego.|
|Volume size (GB)|Jeśli wybrano opcję utworzenia wolumenu, system określa rozmiar.|
|Delete Volume on Instance Delete|Możesz zachować opcję domyślną **No**. Jeśli wybrano opcję **Yes**, po usunięciu instancji również jest usuwany wolumin.|
|Image name|Wybierz obraz wystąpienia (wyłącznie w przypadku uruchamiania instancji z obrazu), klikając strzałkę w górę obok wybranego obrazu. W naszym przykładzie używamy wyboru CentOS 7.|
|Instance snapshot|Wybierz zrzut instancji (wyłącznie w przypadku uruchamiania instancji ze snapshota), klikając strzałkę w górę obok wybranego obrazu zrzutu instancji.|

**Flavor**

![createinstance](images/create-instance-step5.png){.thumbnail}

Wstępnie zbudowane *flavor* są dostępne dla Ciebie. Wybierz *flavor* w zakładce `Available`.

**Networks**

![createinstance](images/create-instance-step6.png){.thumbnail}

|Informacje|Szczegóły|
|---|---|
|Network|Z listy dostępnych sieci wybierz sieć (sieci)(y) dla wystąpienia, które chcesz utworzyć |
|Ext-Net|Reprezentuje sieć publiczną.|
|Mynewnetwork|Reprezentuje prywatną sieć utworzoną na początku tego przewodnika.|

**Security Groups (Grupy zabezpieczeń)**

![createinstance](images/create-instance-step7.png){.thumbnail}

Aby uzyskać więcej informacji, zapoznaj się z [tym przewodnikiem](/pages/public_cloud/compute/setup_security_group).


**Key Pairs (Para kluczy)**

> [!warning] 
> 
> Chociaż pole "Key Pair" nie jest obowiązkowe w interfejsie Horizon podczas tworzenia instancji, rejestracja klucza SSH jest absolutnie konieczna, aby móc połączyć się z instancją. Bez klucza SSH będziesz musiał zrestartować instancję w trybie Rescue, aby móc utworzyć hasło lub dodać klucz SSH do odpowiedniego pliku (aby uzyskać więcej informacji, zapoznaj się z przewodnikiem [Zmiana klucza SSH w przypadku utraty](/pages/public_cloud/compute/replacing_lost_ssh_key#w-praktyce)).
>

![createinstance](images/create-instance-step8.png){.thumbnail}

W tej sekcji można utworzyć parę kluczy, zaimportować parę kluczy lub użyć istniejącej pary kluczy.

Aby uzyskać więcej informacji na temat tworzenia klucza SSH, zapoznaj się z [tym przewodnikiem](/pages/public_cloud/compute/public-cloud-first-steps#create-ssh).

> [!tabs]
> **+ Create Key Pair**
>>
>> Aby utworzyć parę kluczy, kliknij przycisk `+ Create Key Pair`{.action}. Pamiętaj, że z tą opcją przed zalogowaniem się do instancji muszą zostać wykonane dodatkowe czynności, zwłaszcza jeśli logujesz się do instancji za pomocą oprogramowania Putty. Sprawdź [tę sekcję](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) w odpowiednim przewodniku.
>>
>> **Key Pair Name:** Wprowadź nazwę dla klucza.<br>
>> **Key Type:** Kliknij `strzałkę rozwijaną`{.action} i wybierz `SSH Key`{.action}.<br>
>> Następnie kliknij `Create Keypair`{.action}, aby rozpocząć tworzenie klucza.<br>
>>
>> Po utworzeniu pary kluczy kliknij `Copy Private Key to Clipboard`{.action}, a następnie `Done`{.action}.<br><br>
>>![create ssh key](images/create-ssh-key-1.png){.thumbnail}<br>
>>
>> Po wykonaniu tej czynności nowo utworzony klucz zostanie automatycznie wybrany. Kliknij `Launch Instance`{.action}, aby rozpocząć tworzenie instancji.<br><br>
>>
>>![create instance](images/launch-instance.png){.thumbnail}<br>
>>
> **Import Key Pair (Importuj parę kluczy)**
>>
>> Jeśli wolisz zaimportować klucz SSH utworzony wcześniej, kliknij przycisk `Import Key Pair`{.action}.
>>
>> **Key Pair Name:** Wprowadź nazwę dla klucza.<br>
>> **Key Type (Typ klucza):** Kliknij strzałkę rozwijaną` i wybierz `SSH Key`.<br>
>> **Load Public Key from a file (Załaduj klucz publiczny z pliku):** Kliknij `Browse`{.action}, aby określić lokalizację klucza publicznego na komputerze.<br>
>> **Public Key:** Skopiuj i wklej tutaj klucz publiczny.<br>
>> Kliknij przycisk `Import Key Pair`{.action}, aby zaimportować klucz.<br><br>
>>![Import klucza równorzędnego](images/import-ssh-key.png){.thumbnail}<br>
>>
>> Po zakończeniu zaimportowany klucz zostanie automatycznie wybrany. Kliknij `Launch Instance`{.action}, aby rozpocząć tworzenie instancji.<br><br>
>>
>>![create instance](images/launch-instance.png){.thumbnail}<br>

**Inne opcje**

Uwaga: te opcje nie są wymagane do utworzenia podstawowej instancji. Jeśli chcesz zgłębić więcej opcji, zapoznaj się z [oficjalną dokumentacją OpenStack](https://docs.openstack.org/horizon/latest/user/launch-instances.html){.external}.

|Informacje|Szczegóły|
|---|---|
|Custom script source|Określ źródło między "direct entry" lub "file".|
|Script data|Wprowadź kod skryptu w polu wejściowym (maksymalnie 16 KB).|
|Script file|Kliknij `Browse`{.action}, aby wybrać skrypt po-instalacyjny.|
|Disk partitioning|Wybierz między "automatic" i "manual".|
|Configuration disk|Skonfiguruj OpenStack, aby zapisać metadane na dysku konfiguracyjnym, który zostanie dołączony do wystąpienia podczas uruchamiania.|

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
