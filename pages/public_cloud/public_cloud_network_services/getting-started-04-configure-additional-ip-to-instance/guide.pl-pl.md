---
title: Konfiguracja Additional IP
excerpt: Dowiedz się, jak dodawać adresy Additional IP do konfiguracji Twojej instancji
updated: 2025-12-17
---

> [!primary]
> Ten artykuł dotyczy konfiguracji adresów Additional IPv4 w interfejsie publicznym. Możesz również skonfigurować adresy IPv6 dla instancji Public Cloud, korzystając z [tego przewodnika](/pages/public_cloud/public_cloud_network_services/configuration-02-how-to-configure-ipv6).
>
> Pamiętaj, że adresy Additional IP można również skonfigurować w sieci vRack (sieć prywatna), co pozwala na połączenie w ramach szerokiej gamy usług OVHcloud, oferując więcej elastyczności.
>
> Więcej informacji na temat konfigurowania adresów Additional IP w sieci vRack do użytku z instancjami Public Cloud znajdziesz w następujących przewodnikach:
>
> - [Konfiguracja bloku IP w sieci vRack w instancji Public Cloud (EN)](/pages/public_cloud/public_cloud_network_services/configuration-06-configure-ip-block-vrack-to-instance).
> - [Konfiguracja bloku IPv6 w sieci vRack (EN)](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack).
>

## Wprowadzenie

Być może będziesz musiał skonfigurować adresy Additional IP na Twoich instancjach, na przykład, jeśli hostujesz dużą liczbę stron WWW na Twojej instancji lub hostujesz projekty międzynarodowe. Adresy Additional IP OVHcloud umożliwiają przypisanie kilku adresów IP do jednego interfejsu sieciowego.

**Niniejszy przewodnik wyjaśnia, jak dodawać adresy Additional IP do Twojej konfiguracji sieci.**

> [!warning]
> OVHcloud świadczy usługi, za które jesteś odpowiedzialny w związku z ich konfiguracją i zarządzaniem. Jesteś więc odpowiedzialny za ich prawidłowe funkcjonowanie.
>
> Niniejszy przewodnik ma na celu pomoc w wykonywaniu bieżących zadań. W przypadku trudności lub wątpliwości związanych z administrowaniem, użytkowaniem lub wdrażaniem usług na serwerze zalecamy kontakt z wyspecjalizowanym dostawcą usług.
>

## Wymagania początkowe

- instancji [Public Cloud](/links/public-cloud/public-cloud) na Twoim koncie OVHcloud
- adresu [Additional IP](/links/bare-metal/ip) lub bloku Additional IP
- dostęp administratora (sudo) przez SSH lub GUI do Twojej instancji
- podstawowa wiedza o sieciach i ich administrowaniu

> [!warning]
> Ta funkcja nie jest aktualnie dostępna dla instancji Metal.
>

## W praktyce

Niniejszy przewodnik zawiera najpopularniejsze konfiguracje dystrybucji/systemów operacyjnych. Pierwszy etap polega zawsze na logowaniu się do Twojej instancji przez SSH lub poprzez sesję logowania do interfejsu graficznego użytkownika (VNC dla instancji Windows). Poniższe przykłady zakładają, że jesteś zalogowany jako użytkownik z dużymi uprawnieniami (administrator/sudo).

> [!primary]
>
Jeśli chodzi o różne wersje dystrybucji, należy pamiętać, że można zmodyfikować odpowiednią procedurę konfiguracji Twojego interfejsu sieciowego oraz nazw plików. W przypadku trudności zalecamy zapoznanie się z dokumentacją dotyczącą systemu operacyjnego.
>

**Należy wziąć pod uwagę następującą terminologię, która zostanie użyta w przykładach kodu i instrukcjach zawartych w tym przewodniku:**

|Nazwa|Opis|Przykłady|
|---|---|---|
|ADDITIONAL_IP|Adres Additional IP przypisany do Twojej usługi|169.254.10.254|
|NETWORK_INTERFACE|Nazwa interfejsu sieciowego|*eth0*, *ens3*|
|ID|ID aliasu IP, zaczynające się od *0* (w zależności od liczby dodatkowych adresów IP do skonfigurowania)|*0*, *1*|

> [!primary]
>
> Konfiguracja Additional IP w instancji Public Cloud nie wymaga bramy (gateway) ani maski podsieci.
>

> [!success]
> Wybierz zakładkę odpowiadającą Twojemu systemowi operacyjnemu.

> [!tabs]
> **Debian 11**
>> Debian 11
>>
>> **Krok 1: wyłącz automatyczną konfigurację sieci**
>>
>> Otwórz ścieżkę dostępu do następującego pliku z edytorem tekstu:
>>
>> ```bash
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> Wprowadź następującą linię, następnie zapisz i wyjdź z edytora.
>>
>> ```bash
>> network: {config: disabled}
>> ```
>>
>> Utworzenie tego pliku konfiguracyjnego zapobiega automatycznemu wprowadzaniu zmian w konfiguracji Twojej sieci.
>>
>> **Krok 2: zmień plik konfiguracyjny sieci**
>>
>> Nazwy interfejsu sieciowego możesz sprawdzić za pomocą polecenia:
>>
>> ```bash
>> ip a
>> ```
>>
>> Otwórz plik konfiguracyjny sieci, aby go zmienić za pomocą następującego polecenia:
>>
>> ```bash
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> Następnie dodaj następujące wiersze:
>>
>> ```bash
>> auto NETWORK_INTERFACE:ID
>> iface NETWORK_INTERFACE:ID inet static
>> address ADDITIONAL_IP
>> netmask 255.255.255.255
>> ```
>>
>> **Krok 3: uruchom ponownie interfejs**
>>
>> Zastosuj zmiany za pomocą polecenia:
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
> **Debian 12+, Ubuntu 22.04+**
>> Debian 12, Ubuntu 22.04 i nowsze wersje
>>
>> Plik konfiguracyjny adresów Additional IP znajduje się w katalogu `/etc/netplan/`. 
>> W tym przykładzie nosi nazwę "50-cloud-init.yaml". Zanim wprowadzisz zmiany, sprawdź w tym folderze nazwę rzeczywistego pliku. Każdy adres Additional IP wymaga własnej linii w pliku.
>>
>> **Krok 1: wyłącz automatyczną konfigurację sieci**
>>
>> Otwórz ścieżkę dostępu do następującego pliku z edytorem tekstu:
>>
>> ```bash
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> Wprowadź następującą linię, następnie zapisz i wyjdź z edytora.
>>
>> ```bash
>> network: {config: disabled}
>> ```
>>
>> Utworzenie tego pliku konfiguracyjnego zapobiega automatycznemu wprowadzaniu zmian w konfiguracji Twojej sieci.
>>
>> **Krok 2: zmień plik konfiguracyjny**
>>
>> Nazwy interfejsu sieciowego możesz sprawdzić za pomocą polecenia:
>>
>> ```bash
>> ip a
>> ```
>>
>> Otwórz plik konfiguracyjny sieci, aby go zmienić za pomocą następującego polecenia:
>>
>> ```bash
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> Nie zmieniaj istniejących linii w pliku. Dodaj adres Additional IP, postępując zgodnie z poniższym przykładem:
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         NETWORK_INTERFACE:
>>             dhcp4: true
>>             match:
>>                 macaddress: fa:xx:xx:xx:xx:63
>>             set-name: NETWORK_INTERFACE
>>             addresses:
>>             - ADDITIONAL_IP/32
>> ```
>>
>> > [!warning]
>> >
>> > Ważne jest przestrzeganie wyrównania każdego elementu tego pliku, jak pokazano w powyższym przykładzie. Nie używaj przycisku tabulacji do tworzenia odstępów.
>> >
>>
>> Zapisz i zamknij plik.
>>
>> **Krok 3: zastosować nową konfigurację sieci**
>>
>> Możesz przetestować konfigurację za pomocą polecenia:
>>
>> ```bash
>> sudo netplan try
>> ```
>>
>> Jeśli jest poprawna, zastosuj ją za pomocą następującego polecenia:
>>
>> ```bash
>> sudo netplan apply
>> ```
>>
>> Powtórz tę procedurę dla każdego adresu Additional IP.
>>
> **AlmaLinux (8/9) / Rocky Linux (8/9) / CloudLinux (8/9)**
>> AlmaLinux (8/9) / Rocky Linux (8/9) / CloudLinux (8/9)
>>
>> **Krok 1: zmień plik konfiguracyjny sieci**
>>
>> Nazwy interfejsu sieciowego możesz sprawdzić za pomocą polecenia:
>>
>> ```bash
>> ip a
>> ```
>>
>> Otwórz plik konfiguracyjny sieci, aby go zmienić:
>>
>> ```bash
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE:ID
>> ```
>>
>> Dodaj te linie:
>>
>> ```bash
>> DEVICE=NETWORK_INTERFACE:ID
>> BOOTPROTO=static
>> IPADDR=ADDITIONAL_IP
>> NETMASK=255.255.255.255
>> BROADCAST=ADDITIONAL_IP
>> ONBOOT=yes
>> ```
>>
>> **Krok 2: uruchom ponownie interfejs**
>>
>> Zastosuj zmiany za pomocą polecenia:
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
> **Fedora / AlmaLinux (10) / Rocky Linux (10)**
>> Fedora, AlmaLinux 10 & Rocky Linux 10
>>
>> Te systemy używają plików kluczy. NetworkManager przechowywał wcześniej profile sieciowe w formacie ifcfg w tym katalogu: `/etc/sysconfig/network-scripts/`. Jednak format iffg jest teraz przestarzały. Domyślnie program NetworkManager nie tworzy już profilów w tym formacie. Plik konfiguracyjny znajduje się teraz w `/etc/NetworkManager/system-connections/`.
>>
>> **Krok 1: edycja pliku konfiguracyjnego**
>>
>> > [!primary]
>> > Pamiętaj, że nazwa pliku sieciowego w naszym przykładzie może się różnić od Twojej. Dostosuj polecenia do nazwy pliku.
>> >
>>
>> ```bash
>> sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
>> ```
>>
>> Nie zmieniaj istniejących linii w pliku konfiguracyjnym, dodaj Additional IP do pliku w następujący sposób, zastępując `ADDITIONAL_IP/32` własnymi wartościami:
>>
>> ```console
>> [IPv4]
>> method=auto
>> may-fail=false
>> address1=ADDITIONAL_IP/32
>> ```
>>
>> Jeśli masz dwa dodatkowe adresy IP do skonfigurowania, konfiguracja powinna wyglądać następująco:
>>
>> ```console
>> [IPv4]
>> method=auto
>> may-fail=false
>> address1=ADDITIONAL_IP1/32
>> address2=ADDITIONAL_IP2/32
>> ```
>>
>> **Krok 2: restart interfejsu**
>>
>> Uruchom ponownie interfejs:
>>
>> ```bash
>> systemctl restart Network Manager
>> ```
>>
> **Plesk**
>> Plesk
>>
>> **Krok 1: dostęp do interfejsu zarządzania adresami IP Plesk**
>>
>> W panelu konfiguracyjnym Plesk wybierz `Tools & Settings`{.action} na pasku bocznym po lewej stronie.
>>
>> ![dostęp do zarządzania adresami IP](images/pleskip1.png){.thumbnail}
>>
>> Kliknij `IP Addresses`{.action} w **Tools & Settings**.
>>
>> **Krok 2: dodaj dodatkowe informacje IP**
>>
>> W tej sekcji kliknij przycisk `Add IP Address`{.action}.
>>
>> ![dodaj informacje IP](images/pleskip2-2.png){.thumbnail}
>>
>> Wprowadź adres Additional IP w formie `xxx.xxx.xxx.xxx/32` w polu "IP address and subnet mask", a następnie kliknij `OK`{.action}.
>>
>> ![dodaj informacje IP](images/pleskip3-3.png){.thumbnail}
>>
>> **Krok 3: sprawdź aktualną konfigurację IP**
>>
>>  W sekcji "IP Addresses" sprawdź, czy adres Additional IP został poprawnie dodany.
>>
>> ![aktualna konfiguracja IP](images/pleskip4-4.png){.thumbnail}
>>
> **Windows Server**
>> Windows Server
>>
>> W sekcji Public Cloud otwórz `Instances`{.action} w menu po lewej stronie i kliknij nazwę instancji. Przejdź do zakładki `Console VNC`{.action}.
>>
>> **Krok 1: sprawdź konfigurację sieci**
>>
>> Kliknij prawym przyciskiem myszy przycisk `Menu Start`{.action} i otwórz `Uruchom`{.action}.
>>
>> Wpisz `cmd` i kliknij `OK`{.action}, aby otworzyć aplikację wiersza poleceń.
>>
>> ![cmdprompt](images/pci_win07.png){.thumbnail}
>>
>> Aby pobrać aktualną konfigurację IP, wprowadź `ipconfig` w wierszu poleceń.
>>
>> ![sprawdź główną konfigurację IP](images/image1-1.png){.thumbnail}
>>
>> **Krok 2: zmień właściwości IPv4**
>>
>> Teraz zmodyfikuj właściwości IP w konfigurację statyczną.
>>
>> Otwórz parametry adaptera w Panelu konfiguracyjnym Windows, a następnie otwórz `Właściwości`{.action} protokołu `Internet Protocol Version 4 (TCP/IPv4)`{.action}.
>>
>> ![zmień konfigurację IP](images/image2.png){.thumbnail}
>>
>> W oknie Właściwości IPv4 wybierz `Użyj następującego`{.action} adresu IP. Wpisz adres IP, który otrzymałeś w pierwszym etapie, po czym kliknij `Zaawansowane`{.action}.
>>
>> **Krok 3: dodać adres Additional IP do zaawansowanych ustawień TCP/IP**
>>
>> W nowym oknie kliknij `Dodaj...`{.action} pod "Adresy IP". Wpisz adres Additional IP i maskę podsieci (255.255.255.255).
>>
>> ![sekcja konfiguracji zaawansowanej](images/image4-4.png){.thumbnail}
>>
>> Potwierdź klikając `Dodaj`{.action}.
>>
>> ![Konfiguracja migracji IP](images/image5-5.png){.thumbnail}
>>
>> **Krok 4: uruchom ponownie interfejs sieciowy**
>>
>> Wróć do panelu konfiguracyjnego (`Połączenia sieciowe`{.action}), kliknij prawym przyciskiem myszy interfejs sieciowy, a następnie wybierz `Wyłącz`{.action}.
>>
>> ![dezaktywacja sieci](images/image6.png){.thumbnail}
>>
>> Aby go ponownie uruchomić, kliknij prawym przyciskiem myszy, a następnie wybierz `Aktywuj`{.action}.
>>
>> ![aktywacja sieci](images/image7.png){.thumbnail}
>>
>> **Krok 5: sprawdź nową konfigurację sieci**
>>
>> Otwórz wiersz poleceń (cmd) i wprowadź `ipconfig`. Konfiguracja musi teraz zawierać nowy adres Additional IP.
>>
>> ![sprawdź aktualną konfigurację sieci](images/image8-8.png){.thumbnail}
>>

### Diagnostyka

Po pierwsze, zrestartuj Twoją instancję za pomocą systemu operacyjnego instancji lub [Panelu client OVHcloud](/links/manager). Jeśli nadal nie możesz utworzyć połączenia między siecią publiczną a Additional IP i podejrzewasz problem z siecią, zrestartuj instancję w [trybie rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode). Następnie możesz skonfigurować adres Additional IP bezpośrednio na instancji.

Po zalogowaniu się do trybu Rescue przez SSH wprowadź następującą komendę:

```bash
ifconfig ens3:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP up
```

Aby przetestować połączenie, wystarczy wysłać ping na adres Additional IP z zewnątrz. Jeśli odpowiada w trybie Rescue, prawdopodobnie oznacza to, że wystąpił błąd w konfiguracji. Jeśli jednak adres IP nadal nie działa, poinformuj o tym zespół pomocy technicznej OVHcloud, wysyłając zgłoszenie serwisowe w [Panelu client OVHcloud](/links/manager).

## Sprawdź również

[Importuj Additional IP](/pages/public_cloud/public_cloud_network_services/additional-ip-import)

[Przenieś Additional IP](/pages/public_cloud/public_cloud_network_services/additional-ip-migrate)

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do [grona naszych użytkowników](/links/community).