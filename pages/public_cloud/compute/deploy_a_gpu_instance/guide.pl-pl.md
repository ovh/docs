---
title: 'Uruchomienie instancji GPU'
excerpt: 'Dowiedz się, jak uruchomić instancję GPU z systemem Linux lub Windows'
updated: 2026-04-07
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Instancje GPU są technicznie podobne do instancji z oferty 2017, ale mają też kartę graficzną (procesor graficzny, GPU — Graphic Processing Unit). Zastosowana technologia (*pci_passthrough*) umożliwia systemowi operacyjnemu instancji sterowanie procesorem graficznym dokładnie tak samo, jak w przypadku komputera fizycznego.

> [!warning]
>
> Obecnie większość starych instancji GPU (Tesla V100 and V100s) jest dostępna tylko w regionach GRA7, GRA9, i BHS5. Najnowsze modele (A100, H100, L4 and L40s) są obecnie dostępne tylko w regionie.
> 

**Dowiedz się, jak uruchomić instancję GPU w systemie Linux lub Windows**

## Wymagania początkowe

- Projekt Public Cloud z dostępem do regionów, w których dostępna jest większość GPU (GRA7, GRA9, GRA11 i BHS5).
- [Klucz SSH](/pages/public_cloud/compute/creating-ssh-keys-pci) utworzony w celu wdrożenia instancji GPU Linux.

<!-- CP-NAV-START:publiccloud-projects -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Ścieżka nawigacji:** `Public Cloud`{.action} > Wybierz projekt

---
<!-- CP-NAV-END:publiccloud-projects -->

## W praktyce

Poniżej znajdują się informacje niezbędne do uruchomienia instancji GPU w systemie Linux lub Windows.

Na stronie `Szybki dostęp`{.action} kliknij przycisk `Utwórz instancję`{.action}. Następnie wybierz kompatybilny model instancji GPU odpowiadający instancjom **Cloud GPU**, aby korzystać z zasobów dostosowanych do graficznych lub intensywnych obciążeń obliczeniowych.

Następnie wykonaj pozostałe etapy zgodnie z instrukcjami zawartymi w [tym przewodniku](/pages/public_cloud/compute/public-cloud-first-steps#create-instance). Może to potrwać kilka minut.

> [!tabs]
> Linux
>> Wszystkich oferowanych obrazów można użyć w instancji GPU.
>>
>> Na etapie wyboru obrazu otwórz kartę `Dystrybucje Unix`{.action} i wybierz obraz UNIX odpowiadający Twoim potrzebom.
>>
>> > [!primary]
>> >
>> > Jeśli ręczne skompilowanie modułu jądra stanowi problem, zalecamy użycie dystrybucji wspieranej przez firmę Nvidia, do której są udostępnione *gotowe* sterowniki: <https://developer.nvidia.com/cuda-downloads>.
>> >
>>
>> Po dostarczeniu instancji możesz się do niej zalogować i sprawdzić, czy zainstalowana jest karta graficzna:
>>
>> ```bash
>> lspci | grep -i nvidia
>> 00:05.0 VGA compatible controller: NVIDIA Corporation Device 1c03 (rev a1)
>> 00:06.0 Audio device: NVIDIA Corporation Device 10f1 (rev a1)
>> ```
>>
>> Karta graficzna jest dostępna, ale jeszcze nie można jej użyć. Aby to było możliwe, najpierw trzeba zainstalować sterownik NVIDIA. Lista pakietów jest dostępna pod tym adresem: [Lista dostępnych pakietów do systemu Linux](https://developer.download.nvidia.com/compute/cuda/repos/).
>>
>> Wprowadź następujące polecenia:
>>
>> ```sh
>> wget URL_of_packet_to_download
>> sudo dpkg -i cuda-repo-XXXX-XXXXXX
>> sudo apt-get update
>> sudo apt-get upgrade
>> sudo apt-get install cuda
>> sudo apt-get install -y cuda-drivers
>> sudo apt-get install linux-headers-$(uname -r)
>> sudo reboot
>> ```
>>
>> > [!primary]
>> >
>> > Polecenia systemu Linux są różne w zależności od dystrybucji. W razie wątpliwości należy się zapoznać z przewodnikiem do danej wersji systemu Linux.
>> >
>>
>> Po restarcie instancji karta graficzna będzie widoczna w programie narzędziowym NVIDIA:
>>
>> ```sh
>> nvidia-smi
>> Wed Apr 26 13:05:25 2017
>> +-----------------------------------------------------------------------------+
>> | NVIDIA-SMI 375.51                 Driver Version: 375.51                    |
>> |-------------------------------+----------------------+----------------------+
>> | GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
>> | Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
>> |===============================+======================+======================|
>> |   0  GeForce GTX 106...  Off  | 0000:00:05.0     Off |                  N/A |
>> |  0%   22C    P0    26W / 120W |      0MiB /  6072MiB |      0%      Default |
>> +-------------------------------+----------------------+----------------------+
>>
>> +-----------------------------------------------------------------------------+
>> | Processes:                                                       GPU Memory |
>> |  GPU       PID  Type  Process name                               Usage      |
>> |=============================================================================|
>> |  No running processes found                                                 |
>> +-----------------------------------------------------------------------------+
>> ```
>>
>> Instancja GPU działa i jest gotowa do użycia.
>>
> Windows
>> Istnieją problemy ze zgodnością sterownika NVIDIA i rozwiązania wirtualizacji *KVM/pci_passthrough*. **Standardowe obrazy systemu Windows nie działają.**
>>
>> Oferujemy specjalne obrazy oparte na wirtualnym systemie BIOS **UEFI**, dzięki którym sterownik może poprawnie funkcjonować.
>>
>> > [!warning]
>> >
>> > Oferujemy możliwość instalacji specjalnych obrazów na wybranych modelach (T1-45, T1-90, T1-180, T2-45, T2-90, T2-180). Ponadto, w zależności od wybranego regionu, te specjalne obrazy mogą być niedostępne.
>> >
>>
>> Na etapie wyboru obrazu otwórz kartę `Dystrybucje Windows`{.action} i wybierz obraz systemu Windows kompatybilny z wybranym modelem instancji.
>>
>> > [!warning]
>> >
>> > Nie możemy zagwarantować, że rozwiązanie będzie działało ze wszystkimi przyszłymi wersjami sterownika NVIDIA.
>> >
>> > Przed przeprowadzeniem aktualizacji sterownika NVIDIA zdecydowanie zaleca się wykonanie kopii zapasowej instancji. Pozwoli to na ewentualne cofnięcie decyzji.
>> >
>>
>> **Połączenie z instancją z systemem Windows**
>>
>> Po utworzeniu instancji należy przeprowadzić do końca instalację systemu Windows (proces przygotowania systemu — _sysprep_). W tym celu kliknij ikonę `...`{.action} i następnie pozycję `Dane dotyczące instancji`{.action}. Przejdź na kartę `Konsola VNC`{.action}. W konsoli powinien zostać wyświetlony interfejs zadań po instalacji.
>>
>> W pierwszym kroku zdefiniuj ustawienia lokalizacji, wybierając region, język i układ klawiatury. Kliknij przycisk `Dalej`{.action}, aby kontynuować.
>>
>> W kolejnym kroku trzeba skonfigurować domyślne konto “Administrator”. Dwukrotnie wpisz hasło i kliknij przycisk `Zakończ`{.action}, aby ukończyć proces instalacji. Klikając symbol oka sprawdź, czy wszystkie znaki wpisane w polu są zgodne z faktycznym układem klawiatury.
>>
>> Instancja zostanie ponownie uruchomiona i będzie możliwe zalogowanie się za pomocą klienta pulpitu zdalnego przy użyciu ustawionych poświadczeń.
>>
>> **System Windows**
>>
>> Otwórz natywną aplikację kliencką “Podłączanie pulpitu zdalnego” (w razie potrzeby znajdź ją przy użyciu usługi Windows Search).
>>
>> Podaj adres IPv4 swojej instancji i nazwę użytkownika “Administrator”, a następnie wpisz hasło. Zwykle jest wyświetlany komunikat ostrzegawczy z monitem o potwierdzenie połączenia, ponieważ certyfikat jest nieznany. Kliknij przycisk `Tak`{.action}, aby zalogować się do instancji.
>>
>> > [!primary]
>> >
>> > Jeśli wystąpią problemy z wykonaniem tej procedury, sprawdź, czy na urządzeniu są dozwolone połączenia zdalne (RDP). W tym celu przejrzyj ustawienia systemu, reguły zapory i ewentualne ograniczenia sieci.
>> >
>>
>> Po uruchomieniu instancji GPU należy zainstalować sterownik NVIDIA z [oficjalnej strony internetowej](https://www.nvidia.com/Download/index.aspx).
>>
>> Po instalacji sterownik pojawi się w **Menedżer urządzeń > Karty graficzne**, umożliwiając weryfikację, że karta GPU jest prawidłowo rozpoznana i działa. Następnie możesz zacząć używać swojej instancji do aplikacji wymagających akceleracji GPU.
>>

## Sprawdź również

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.