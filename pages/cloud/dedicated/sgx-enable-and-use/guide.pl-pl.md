---
title: 'Włączenie Intel SGX na serwerze dedykowanym'
slug: wlaczanie_i_uzywanie_intel_sgx
excerpt: 'Włącz opcję SGX na serwerze Infrastructure lub Advance i zainstaluj stos oprogramowania SGX na Linux'
section: 'Poziom zaawansowany'
---

**Ostatnia aktualizacja: 03-06-2022**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>


## Wprowadzenie

Włączenie rozwiązania Intel Software Guard Extensions na serwerze pozwala na uruchamianie aplikacji obsługujących rozszerzenia SGX.  
Rozszerzenie Intel SGX zapewnia zaawansowane funkcje szyfrowania sprzętowego oraz zabezpieczenia pamięci RAM, które umożliwiają izolowanie części kodu i danych poszczególnych aplikacji.

## Wymagania początkowe

- Dedykowany serwer [Infrastructure](https://www.ovh.pl/serwery_dedykowane/infra/){.external} lub z [gamy Advance](https://www.ovhcloud.com/pl/bare-metal/advance/) z opcją [SGX](https://www.ovhcloud.com/pl/bare-metal/intel-software-guard-extensions/){.external}
- Dostęp administracyjny (uprawnienia użytkownika root) do serwera za pośrednictwem protokołu SSH
- Dostęp do [interfejsów API OVHcloud](https://api.ovh.com/console/){.external}
- Zainstalowana na serwerze dystrybucja Ubuntu 18.04 lub podobna

> [!warning]
>
> Spośród gamy Advance tylko poniższe serwery wyposażone w procesor Intel są kompatybilne z technologią Intel SGX:
>
> - Advance-1
> - Advance-2
> - Advance-6
> - Advance-APAC

## W praktyce

### W Panelu klienta OVHcloud

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz serwer, na którym chcesz włączyć SGX w sekcji **Serwery Dedykowane** w menu po lewej stronie.

#### Włączenie opcji

Przejdź do strefy `Zaawansowane funkcje` funkcje i kliknij `...`{.action} naprzeciwko "Bezpieczeństwo - Intel SGX (Software Guard Extensions)". Wybierz `Włącz SGX`{.action} z rozwijanego menu.

![activation SGX](images/enable_sgx.png){.thumbnail}

Na następnym ekranie kliknij przycisk `Włącz`{.action}.

![activation SGX](images/enable_sgx2.png){.thumbnail}

Możesz aktywować SGX z określoną ilością pamięci zarezerwowanej lub włączyć ją, pozwalając programowi na automatyczne zarezerwowanie pamięci. Po dokonaniu wyboru kliknij `Zatwierdź`{.action}.

![activation SGX](images/manage_sgx.png){.thumbnail}

#### Wyłączenie opcji

Przejdź do strefy `Zaawansowane funkcje` funkcje i kliknij `...`{.action} naprzeciwko "Bezpieczeństwo - Intel SGX (Software Guard Extensions)". Wybierz `Zmień SGX`{.action} z rozwijanego menu. Wybierz opcję `Wyłącz`{.action}, następnie kliknij `Zatwierdź`{.action}.

![Wyłączenie funkcji SGX](images/disable_sgx.png){.thumbnail}

Spowoduje to ponowne uruchomienie serwera. Potwierdź w oknie kontekstowym i odczekaj kilka minut, zanim ponownie zaloguj się do Twojego serwera.

Przejdź do etapu czwartego [poniżej, aby przeczytać ten przewodnik](./#krok-4-zainstalowanie-zestawu-oprogramowania-sgx).

### Za pośrednictwem API OVHcloud

#### Krok 1\. Logowanie do konsoli API

Przejdź do strony <https://api.ovh.com/console/> i kliknij przycisk `Login`{.action} (Zaloguj) w prawym górnym rogu.  
Na następnej stronie zaloguj się przy użyciu danych logowania do konta OVHcloud.

#### Krok 2\. Włączenie funkcji SGX

Uzyskaj nazwę swojego serwera z listy zwróconej po wywołaniu następującej procedury:

> [!api]
>
> @api {GET} /dedicated/server

Sprawdź, czy usługa ma włączoną opcję SGX, wywołując następującą procedurę: 

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/biosSettings/sgx

![SGX disabled](images/get-disabled.png){.thumbnail}

Następnie włącz funkcję SGX:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/biosSettings/sgx/configure

![Configure SGX](images/post-configure.png){.thumbnail}

Sprawdź postęp zadania konfiguracji, wywołując następujący punkt końcowy przy użyciu identyfikatora zadania (taskid) zwróconego przez poprzednie wywołanie:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/task/{taskId}

![Get SGX configuration task](images/get-task.png){.thumbnail}

Teraz można sprawdzić, że status to “włączono” (enabled):

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/biosSettings/sgx

![SGX enabled](images/get-enabled.png){.thumbnail}

#### Krok 3\. Ponowne uruchomienie w celu zastosowania nowych ustawień systemu BIOS

#### Krok 4\. Zainstalowanie zestawu oprogramowania SGX

Teraz zostaną zainstalowane sterownik i zestaw SDK Intel, które umożliwiają tworzenie oraz uruchamianie aplikacji SGX.  

Najpierw zainstaluj zależności:

```bash
sudo apt-get install build-essential ocaml ocamlbuild automake autoconf libtool wget python libssl-dev libcurl4-openssl-dev protobuf-compiler libprotobuf-dev debhelper cmake git
```

Następnie pobierz, zbuduj i zainstaluj zestaw oprogramowania SGX:

```bash
BASE_DIR=/opt/intel
[[ -d $BASE_DIR ]] || sudo mkdir -p $BASE_DIR && sudo chown `whoami` $BASE_DIR
cd $BASE_DIR

git clone https://github.com/intel/linux-sgx.git

cd linux-sgx
git checkout sgx_2.6
./download_prebuilt.sh
make -j 6
make sdk_install_pkg -j 6
make deb_pkg -j 6
$BASE_DIR/linux-sgx/linux/installer/bin/sgx_linux_x64_sdk_2.6.100.51363.bin --prefix=$BASE_DIR/

sudo dpkg -i $BASE_DIR/linux-sgx/linux/installer/deb/libsgx-urts_2.6.100.51363-bionic1_amd64.deb $BASE_DIR/linux-sgx/linux/installer/deb/libsgx-enclave-common_2.6.100.51363-bionic1_amd64.deb
```

Pobierz i zainstaluj sterownik:

```bash
wget https://download.01.org/intel-sgx/linux-2.6/ubuntu18.04-server/sgx_linux_x64_driver_2.5.0_2605efa.bin
chmod +x sgx_linux_x64_driver_2.5.0_2605efa.bin
sudo ./sgx_linux_x64_driver_2.5.0_2605efa.bin
```

#### Krok 5\. Ponowne uruchomienie w celu ukończenia instalacji

#### Krok 6\. Sprawdzenie poprawności instalacji przy użyciu przykładowej aplikacji

Zbuduj jedną z udostępnionych przykładowych aplikacji:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/sgxsdk/SampleCode/LocalAttestation/
source $BASE_DIR/sgxsdk/environment
make SGX_DEBUG=0 SGX_MODE=HW SGX_PRERELEASE=1
```

Uruchom ją:

```bash
ovh@nsXXXX:/opt/intel/sgxsdk/SampleCode/LocalAttestation$ ./app 

Available Enclaves
Enclave1 - EnclaveID 2
Enclave2 - EnclaveID 3
Enclave3 - EnclaveID 4

Secure Channel Establishment between Source (E1) and Destination (E2) Enclaves successful !!!

Enclave to Enclave Call between Source (E1) and Destination (E2) Enclaves successful !!!

Message Exchange between Source (E1) and Destination (E2) Enclaves successful !!!

Secure Channel Establishment between Source (E1) and Destination (E3) Enclaves successful !!!

Enclave to Enclave Call between Source (E1) and Destination (E3) Enclaves successful !!!

Message Exchange between Source (E1) and Destination (E3) Enclaves successful !!!

Secure Channel Establishment between Source (E2) and Destination (E3) Enclaves successful !!!

Enclave to Enclave Call between Source (E2) and Destination (E3) Enclaves successful !!!

Message Exchange between Source (E2) and Destination (E3) Enclaves successful !!!

Secure Channel Establishment between Source (E3) and Destination (E1) Enclaves successful !!!

Enclave to Enclave Call between Source (E3) and Destination (E1) Enclaves successful !!!

Message Exchange between Source (E3) and Destination (E1) Enclaves successful !!!

Close Session between Source (E1) and Destination (E2) Enclaves successful !!!

Close Session between Source (E1) and Destination (E3) Enclaves successful !!!

Close Session between Source (E2) and Destination (E3) Enclaves successful !!!

Close Session between Source (E3) and Destination (E1) Enclaves successful !!!

Hit a key....
```

## Idź dalej

Oto kilka zasobów przydatnych do dalszych działań (utworzenia własnej aplikacji, rejestracji w usłudze zdalnego zaświadczania itd.):

- [Rozwiązanie Intel SGX](https://www.intel.pl/content/www/pl/pl/architecture-and-technology/software-guard-extensions.html){.external}
- [Usługi Intel SGX Attestation](https://software.intel.com/en-us/sgx/attestation-services){.external}
- [Dokumentacja Intel SGX linux-2.6](https://download.01.org/intel-sgx/linux-2.6/docs/){.external}
- [github.com/intel/linux-sgx](https://github.com/intel/linux-sgx){.external}
- [github.com/intel/linux-sgx-driver](https://github.com/intel/linux-sgx-driver){.external}
- [github.com/intel/sgx-ra-sample](https://github.com/intel/sgx-ra-sample){.external}
