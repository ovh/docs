---
title: "Jak zarządzać Intel SGX na serwerze dedykowanym"
excerpt: "Odkryj, jak aktywować opcję SGX na swoim serwerze dedykowanym i zainstalować stos oprogramowania SGX dla systemu Linux"
updated: 2025-11-20
---

## Wprowadzenie

Włączenie Intel Software Guard Extensions (SGX) na Twoim serwerze umożliwia uruchamianie aplikacji kompatybilnych z SGX. Intel SGX zapewnia zaawansowane funkcje szyfrowania bezpieczeństwa sprzętu i pamięci RAM, aby izolować określone części kodu i danych dla każdej aplikacji.

**Ten przewodnik wyjaśnia, jak włączyć funkcję SGX za pomocą Panelu klienta OVHcloud lub za pomocą API OVHcloud.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](/links/manager) lub do [API OVHcloud](/links/api)
- Serwer dedykowany kompatybilny z [opcją SGX](/links/bare-metal/sgx) w Twoim koncie OVHcloud
- Dane logowania otrzymane e-mailem po instalacji
- Na serwerze zainstalowany jest Ubuntu 24.04 lub równoważny system

## W praktyce

### Włączenie SGX

Aktywacja SGX jest możliwa za pośrednictwem Panelu Klienta OVHcloud, API OVHcloud lub BIOS serwera.

> [!tabs]
> **Za pomocą Panelu klienta OVHcloud**
>>
>> **1 - Logowanie do Panelu klienta OVHcloud**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Bare Metal Cloud`{.action} i kliknij `Serwery dedykowane`{.action}. Następnie wybierz serwer, na którym chcesz włączyć SGX.
>>
>> **2 - Włączenie SGX**
>>
>> W zakładce `Informacje ogólne`{.action}, w ramce **Zaawansowane funkcje**, kliknij `...`{.action} obok wpisu **Bezpieczeństwo - Intel SGX (Software Guard Extensions)** i wybierz `Włącz SGX`{.action} z menu rozwijanego.
>>
>> ![Włączenie SGX](images/enable_sgx.png){.thumbnail}
>>
>> Na następnym ekranie kliknij przycisk `Włącz`{.action}.
>>
>> ![Włączenie SGX](images/enable_sgx2.png){.thumbnail}
>>
>> Możesz wybrać opcję włączenia SGX z określoną ilością zastrzeżonej pamięci lub pozwolić aplikacji automatycznie rezerwować potrzebną pamięć. Po dokonaniu wyboru kliknij `Potwierdź`{.action}.
>>
>> ![Zarządzanie SGX](images/manage_sgx.png){.thumbnail}
>>
>> Wyświetlony zostanie ekran potwierdzenia. Potwierdź, że rozumiesz, iż włączenie technologii Intel SGX spowoduje ponowne uruchomienie Twojego serwera.
>>
>> ![Włączenie SGX](images/confirmation-popup_sgx.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Spowoduje to jedno lub więcej ponownych uruchomień serwera, w zależności od jego modelu.
>>
> **Za pomocą API OVHcloud**
>>
>> **1 - Logowanie do konsoli API**
>>
>> Na stronie [API OVHcloud](/links/console):
>>
>> - Kliknij `Authentication`{.action} w lewym górnym rogu.
>> - Następnie kliknij `Login with OVHcloud SSO`{.action}.
>> - Wprowadź swoje dane logowania do OVHcloud.
>> - Kliknij przycisk `Authorize`{.action}, aby zezwolić na wywoływanie API z tego miejsca.
>>
>> **2 - Włączenie SGX**
>>
>> Pobierz nazwę swojego serwera z listy zwróconej przez następujące wywołanie:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server
>>
>> Sprawdź, czy Twój serwis obsługuje opcję SGX, korzystając z tego wywołania:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/biosSettings/sgx
>>
>> ![SGX wyłączony](images/get-disabled.png){.thumbnail}
>>
>> Włącz SGX, korzystając z nazwy serwera:
>>
>> > [!warning]
>> >
>> > Spowoduje to jedno lub więcej ponownych uruchomień serwera, w zależności od jego modelu.
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/biosSettings/sgx/configure
>>
>> ![Konfiguracja SGX](images/post-configure.png){.thumbnail}
>>
>> Sprawdź postęp zadania konfiguracji, wywołując ten punkt końcowy z *taskId* zwróconym w poprzednim wywołaniu:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/task/{taskId}
>>
>> ![Pobierz zadanie konfiguracji SGX](images/get-task.png){.thumbnail}
>>
>> Możesz sprawdzić, czy stan jest włączony:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/biosSettings/sgx
>>
>> ![SGX włączony](images/get-enabled.png){.thumbnail}
>>
> **Ręczna konfiguracja w BIOS-ie**
>>
>> **1 - Uruchom sesję Remote KVM**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Bare Metal Cloud`{.action} i kliknij `Serwery dedykowane`{.action}. Następnie wybierz serwer, na którym chcesz włączyć SGX.
>>
>> W zakładce `IPMI / KMV`{.action} uruchom sesję Remote KVM:
>>
>> ![Uruchom sesję Remote KVM](images/manager.png){.thumbnail}
>>
>> **2 - Włączenie SGX**
>>
>> Następnie, z poziomu KVM, uruchom ponownie serwer i wejdź do BIOS-u (zazwyczaj naciskając klawisz `DEL`{.action} lub `F2`{.action}).
>>
>> W BIOS-ie przejdź do sekcji `Advanced` > `Processor Configuration`.
>>
>> Włącz opcje TME i SGX oraz skonfiguruj pożądaną wielkość PRMRR:
>>
>> ![Włączenie SGX](images/sgx_bios.png){.thumbnail}
>>
>> Zapisz zmiany, naciskając klawisz `F10`{.action}. Wyświetlony zostanie ekran potwierdzenia, potwierdź opcję `Yes`.
>>
>> Twój serwer ponownie uruchomi się na systemie operacyjnym.
>>

### Instalacja oprogramowania SGX

Użyj poniższych poleceń, aby zainstalować SDK firmy Intel, dzięki czemu będziesz mógł tworzyć i uruchamiać aplikacje SGX.

Najpierw zainstaluj kilka zależności:

```bash
sudo apt update
sudo apt install autoconf automake build-Essential cmake debhelper git libcurl4-openssl-dev libprotobuf-dev libssl-dev libtool lsb-release ocaml ocamlbuild protobuf-compiler python-is-python3 reprepro wget perl unzip pkgconf libboost-dev libboost-system-dev libboost-thread-dev libsystemd0
```

Następnie pobierz kod źródłowy i przygotuj podmoduły oraz gotowe binarki:

```bash
BASE_DIR=/opt/intel
[[ -d $BASE_DIR ]] || sudo mkdir -p $BASE_DIR && sudo chown `whoami` $BASE_DIR
cd $BASE_DIR
 
git clone https://github.com/intel/linux-sgx.git
 
cd linux-sgx
git checkout sgx_2.26
make preparation
```

Skompiluj i zainstaluj SDK SGX:

```bash
make sdk_install_pkg
$ ./linux/installer/bin/sgx_linux_x64_sdk_2.26.100.0.bin --prefix=$BASE_DIR/
```

### Testowanie przykładowej aplikacji w trybie symulacji

Aby skompilować i uruchomić przykładowy kod *LocalAttestation* w trybie symulacji:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/sgxsdk/SampleCode/LocalAttestation/
source $BASE_DIR/sgxsdk/environment
 
make clean
SGX_MODE=SIM make
cd bin
./app
succeed to load enclaves.
succeed to establish secure channel.
Succeed to exchange secure message...
Succeed to close Session...
```

### Budowanie i instalowanie oprogramowania PSW Intel SGX

Oprogramowanie Intel SGX Platform Software (PSW) dostarcza bibliotek, które umożliwiają uruchamianie aplikacji SGX w trybie sprzętowym. Aby utworzyć lokalny repozytorium Debian, które będzie hostować pakiety, uruchom poniższe polecenia:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/linux-sgx
make deb_local_repo
```

Utwórz następujący plik, aby dodać lokalne repozytorium pakietów Debian do systemu konfiguracji repozytoriów:

```bash
$ cat /etc/apt/sources.list.d/sgx.sources
Types: deb
URIs: file:/opt/intel/linux-sgx/linux/installer/deb/sgx_debian_local_repo
Suites: noble
Components: main
trusted: yes
```

Następnie zainstaluj poniższe pakiety:

```bash
sudo apt update
sudo apt-get install libsgx-epid libsgx-quote-ex libsgx-dcap-ql
```

### Testowanie przykładowej aplikacji w trybie sprzętowym (opcjonalnie)

Aby skompilować i uruchomić przykładowy kod *LocalAttestation* w trybie sprzętowym:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/sgxsdk/SampleCode/LocalAttestation/
source $BASE_DIR/sgxsdk/environment
 
make clean
SGX_MODE=HW make
cd bin
./app
succeed to load enclaves.
succeed to establish secure channel.
Succeed to exchange secure message...
Succeed to close Session...
```

## Sprawdź również

Aby dowiedzieć się więcej (np. jak opracować własną aplikację, zarejestrować się do zdalnej attestacji itp.), oto przydatne zasoby:

- [Intel SGX](https://software.intel.com/en-us/sgx)
- [Intel SGX Attestation services](https://software.intel.com/en-us/sgx/attestation-services)
- [Intel SGX linux-2.26 documentation](https://download.01.org/intel-sgx/sgx-linux/2.26/docs/)
- [github.com/intel/linux-sgx](https://github.com/intel/linux-sgx)