---
title: 'Intel SGX auf Ihrem Dedicated Server aktivieren'
slug: intel-sgx-aktivieren-und-verwenden
excerpt: 'SGX auf Ihrem Dedicated Server aktivieren und den Linux-SGX-Software-Stack installieren'
section: 'Fortgeschrittene Nutzung'
---

**Letzte Aktualisierung am 31.08.2022**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

Die Aktivierung der Intel Software Guard Extensions (SGX) auf Ihrem Server erlaubt es Ihnen, SGX-kompatible Anwendungen auszuführen. Intel SGX bietet erweiterte Hardware- und RAM-Verschlüsselungsfunktionen, um anwendungsspezifische Code- und Datenbereiche zu isolieren.

## Voraussetzungen

- Sie haben einen Dedicated Server aus der Reihe [Infrastruktur](https://www.ovhcloud.com/de/bare-metal/infra/) oder [Advance](https://www.ovhcloud.com/de/bare-metal/advance/) mit der Option [SGX](https://www.ovhcloud.com/de/bare-metal/intel-software-guard-extensions/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) / die [OVHcloud API](https://api.ovh.com/).
- Sie haben administrativen Zugriff (Root) auf Ihren Server über SSH.

> [!warning]
>
> Von der Advance Reihe sind nur die folgenden Server mit Intel CPU mit der Intel SGX Technologie kompatibel:
>
> - Advance-1
> - Advance-2
> - Advance-6
> - Advance-APAC

## In der praktischen Anwendung

### Über das OVHcloud Kundencenter

Loggen Sie sich im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie dann links im Menü unter **Dedicated Servers** den Server aus, auf dem Sie SGX aktivieren möchten.

#### Aktivierung der Option

Scrollen Sie bis zum Bereich "Fortgeschrittene Funktionen" und klicken Sie auf `...`{.action} bei "Sicherheit - Intel SGX (Software Guard Extensions)". Wählen Sie im `SGX aktivieren`{.action} im Dropdown-Menü aus.

![SGX Aktivierung](images/enable_sgx.png){.thumbnail}

Klicken Sie im neuen Bereich auf den Button `Aktivieren`{.action}.

![SGX Aktivierung](images/enable_sgx2.png){.thumbnail}

Sie können SGX mit einer bestimmten reservierten Speichermenge aktivieren oder Ihrem Programm erlauben, den benötigten Speicher automatisch zu reservieren. Wenn Sie Ihre Wahl getroffen haben, klicken Sie auf `Bestätigen`{.action}.

![SGX Aktivierung](images/manage_sgx.png){.thumbnail}

Es erscheint ein Fenster, um zu bestätigen, dass die Aktivierung der Intel SGX Technologie einen Neustart Ihres Servers erfordert.

![SGX Aktivierung](images/confirmation-popup_sgx.png){.thumbnail}

> [!warning]
>
> Je nach Server führt diese Aktion zu mehreren Neustarts des Servers.

#### Die Option deaktivieren

Scrollen Sie bis zum Bereich "Fortgeschrittene Funktionen" und klicken Sie auf `...`{.action} bei "Sicherheit - Intel SGX (Software Guard Extensions)". Klicken Sie auf `SGX bearbeiten`{.action} im Dropdown-Menü. Wählen Sie die Option `Deaktivieren`{.action} aus und klicken Sie dann auf `Bestätigen`{.action}.

![SGX deaktivieren](images/disable_sgx.png){.thumbnail}

> [!warning]
>
> Je nach Server führt diese Aktion zu mehreren Neustarts des Servers.

Folgen Sie der Anleitung weiter ab [Schritt 3](#sgx-softwares).

### Über die OVHcloud API

#### Schritt 1: In der API-Konsole anmelden

Klicken Sie auf der [OVHcloud API Seite](https://api.ovh.com/) auf `Login`{.action} oben rechts.  
Melden Sie sich auf der folgenden Seite mit den Logindaten Ihres OVHcloud Kunden-Accounts an.

#### Schritt 2: SGX aktivieren

Erhalten Sie den Namen Ihres Servers von der Liste, die von diesem Call zurückgegeben wird:

> [!api]
>
> @api {GET} /dedicated/server

Um zu überprüfen, ob Ihr Dienst über die SGX-Option verfügt, nutzen Sie folgenden Aufruf:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/biosSettings/sgx

![SGX deaktiviert](images/get-disabled.png){.thumbnail}

Aktivieren Sie SGX unter Verwendung des Servernamens:

> [!warning]
>
> Je nach Server führt diese Aktion zu mehreren Neustarts des Servers.

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/biosSettings/sgx/configure

![SGX aktivieren](images/post-configure.png){.thumbnail}

Überprüfen Sie den Fortschritt des Konfigurationstasks, indem Sie diesen Endpunkt mit der *taskId* aufrufen, die vom vorherigen Aufruf zurückgegeben wurde:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/task/{taskId}

![SGX Konfigurationsaufgabe abrufen](images/get-task.png){.thumbnail}

Sie können überprüfen, ob der Status jetzt aktiviert ist:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/biosSettings/sgx

![SGX aktiviert](images/get-enabled.png){.thumbnail}

### Schritt 3: Den SGX Softwarestack installieren <a name="sgx-softwares"></a>

Verwenden Sie die folgenden Befehle, um den Intel-Treiber und das Software-Kit (SDK) zu installieren, um SGX-Anwendungen entwickeln und ausführen zu können.

Installieren Sie zunächst mehrere Dependencies:

```bash
sudo apt-get install build-essential ocaml ocamlbuild automake autoconf libtool wget python libssl-dev libcurl4-openssl-dev protobuf-compiler libprotobuf-dev debhelper cmake git
```

Danach können sie den SGX Softwarestack herunterladen, erstellen und installieren:

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

Laden Sie den Treiber herunter und installieren Sie ihn:

```bash
wget https://download.01.org/intel-sgx/linux-2.6/ubuntu18.04-server/sgx_linux_x64_driver_2.5.0_2605efa.bin
chmod +x sgx_linux_x64_driver_2.5.0_2605efa.bin
sudo ./sgx_linux_x64_driver_2.5.0_2605efa.bin
```

### Schritt 4: Neu starten, um die Installation abzuschließen

Der Server muss neu gestartet werden, um fortzufahren.

### Schritt 5: Die Installation validieren (optional)

Sie können eine Beispielanwendung verwenden, um die Installation zu validieren. Erstellen Sie eine der bereitgestellten Beispiel-Apps:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/sgxsdk/SampleCode/LocalAttestation/
source $BASE_DIR/sgxsdk/environment
make SGX_DEBUG=0 SGX_MODE=HW SGX_PRERELEASE=1
```

Führen Sie die App aus:

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

## Weiterführende Informationen

Für die weiteren Schritte (Ihre eigene Anwendung entwickeln, sich für die Remote-Bestätigung registrieren, etc.) finden Sie hier weitere nützliche Ressourcen:

- [Intel SGX](https://software.intel.com/en-us/sgx){.external}
- [Intel SGX Attestation services](https://software.intel.com/en-us/sgx/attestation-services){.external}
- [Intel SGX linux-2.6 documentation](https://download.01.org/intel-sgx/linux-2.6/docs/){.external}
- [github.com/intel/linux-sgx](https://github.com/intel/linux-sgx){.external}
- [github.com/intel/linux-sgx-driver](https://github.com/intel/linux-sgx-driver){.external}
- [github.com/intel/sgx-ra-sample](https://github.com/intel/sgx-ra-sample){.external}

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
