---
title: 'Intel SGX auf einem Infrastrukturserver'
slug: intel-sgx-aktivieren-und-verwenden
excerpt: 'SGX auf Ihrem Infrastrukturserver aktivieren und den Linux-SGX-Software-Stack installieren'
section: 'Fortgeschrittene Nutzung'
---

**Letzte Aktualisierung am 17\. Oktober 2019**

## Ziel

Intel Software Guard Extensions auf Ihrem Server aktivieren, um SGX-fähige Anwendungen ausführen zu können  
Intel SGX bietet fortschrittliche Hardware- und RAM-Sicherheitsverschlüsselungsfunktionen, um Teile des Codes und der Daten, die für jede Anwendung spezifisch sind, zu isolieren

## Anforderungen

- Ein [für die Infrastruktur dedizierter Server](https://www.ovh.co.uk/dedicated_servers/infra/){.external}, mit der Option [SGX](https://www.ovh.co.uk/dedicated_servers/software-guard-extensions/){.external}
- Administrativer (Root-) Zugriff auf den Server über SSH
- Zugriff auf die [OVH API](https://api.ovh.com/console/){.external}
- Ubuntu 18.04 oder ähnliches auf dem Server installiert

## Anleitung

### Schritt 1 - Sich bei der API-Konsole anmelden

Gehen Sie auf <https://api.ovh.com/console/>und klicken Sie auf die `Login`{.action} oben rechts auf der Seite.  
Melden Sie sich auf der folgenden Seite mit den Anmeldeinformationen Ihres OVH-Kontos an.

### Schritt 2 - SGX aktivieren

Rufen Sie den Namen Ihres Servers in der Liste ab, die von diesem Aufruf zurückgegeben wird:

> [!api]
>
> @api {GET} /dedicated/server

Um zu überprüfen, ob Ihr Dienst über die SGX-Option verfügt, rufen Sie folgendes auf: 

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/biosSettings/sgx

![SGX deaktiviert](images/get-disabled.png){.thumbnail}

Als nächstes aktivieren wir SGX:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/biosSettings/sgx/configure

![SGX aktivieren](images/post-configure.png){.thumbnail}

Überprüfen Sie den Fortschritt der Konfigurationsaufgabe, indem Sie diesen Endpunkt mit der Aufgaben-ID aufrufen, die vom vorherigen Aufruf zurückgegeben wurde:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/task/{taskId}

![SGX Konfigurationsaufgabe abrufen](images/get-task.png){.thumbnail}

Sie können überprüfen, ob der Status jetzt aktiviert ist:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/biosSettings/sgx

![SGX aktiviert](images/get-enabled.png){.thumbnail}

### Schritt 3 - Das System neu starten, um die neuen BIOS-Einstellungen zu übernehmen

### Schritt 4 - Das SGX Softwaremodul installieren

Jetzt installieren wir den Intel-Treiber und das SDK, um SGX-Anwendungen entwickeln und ausführen zu können.  

Zuerst installieren wir einige Abhängigkeiten:
```bash
sudo apt-get install build-essential ocaml ocamlbuild automake autoconf libtool wget python libssl-dev libcurl4-openssl-dev protobuf-compiler libprotobuf-dev debhelper cmake git
```

Danach können sie das SGX-Softwaremodul herunterladen, erstellen und installieren:
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

Laden Sie den Treiber herunter und installieren ihn:
```bash
wget https://download.01.org/intel-sgx/linux-2.6/ubuntu18.04-server/sgx_linux_x64_driver_2.5.0_2605efa.bin
chmod +x sgx_linux_x64_driver_2.5.0_2605efa.bin
sudo ./sgx_linux_x64_driver_2.5.0_2605efa.bin
```

### Schritt 5 - Neu starten, um die Installation abzuschließen

### Schritt 6 - Mithilfe einer Beispielanwendung die Installation validieren

Erstellen Sie eine der bereitgestellten Beispielanwendungen:
```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/sgxsdk/SampleCode/LocalAttestation/
source $BASE_DIR/sgxsdk/environment
make SGX_DEBUG=0 SGX_MODE=HW SGX_PRERELEASE=1
```

Führen Sie sie aus:
```bash
ovh@nsXXXX:/opt/intel/sgxsdk/SampleCode/LocalAttestation$ ./app 

Verfügbare Enklaven
Enclave1 - EnclaveID 2
Enclave2 - EnclaveID 3
Enclave3 - EnclaveID 4

Sicherstellen, dass Einrichtung von Kanälen zwischen Quell- (E1) und Ziel- (E2) Enklaven erfolgreich ist!!!

Enklave-zu-Enklave-Aufruf zwischen Quell- (E1) und Ziel- (E2) Enklaven erfolgreich !!!

Nachrichtenaustausch schließen zwischen Quell- (E1) und Ziel- (E2) Enklaven erfolgreich !!!

Sicherstellen, dass Einrichtung von Kanälen zwischen Quell- (E1) und Ziel- (E3) Enklaven erfolgreich ist!!!

Enklave-zu-Enklave-Aufruf zwischen Quell- (E1) und Ziel- (E3) Enklaven erfolgreich !!!

Nachrichtenaustausch schließen zwischen Quell- (E1) und Ziel- (E3) Enklaven erfolgreich !!!

Sicherstellen, dass Einrichtung von Kanälen zwischen Quell- (E2) und Ziel- (E3) Enklaven erfolgreich ist!!!

Enklave-zu-Enklave-Aufruf zwischen Quell- (E2) und Ziel- (E3) Enklaven erfolgreich !!!

Nachrichtenaustausch schließen zwischen Quell- (E2) und Ziel- (E3) Enklaven erfolgreich !!!

Sicherstellen, dass Einrichtung von Kanälen zwischen Quell- (E3) und Ziel- (E1) Enklaven erfolgreich ist!!!

Enklave-zu-Enklave-Aufruf zwischen Quell- (E3) und Ziel- (E1) Enklaven erfolgreich !!!

Nachrichtenaustausch schließen zwischen Quell- (E3) und Ziel- (E1) Enklaven erfolgreich !!!

Sitzung schließen zwischen Quell- (E1) und Ziel- (E2) Enklaven erfolgreich !!!

Sitzung schließen zwischen Quell- (E1) und Ziel- (E3) Enklaven erfolgreich !!!

Sitzung schließen zwischen Quell- (E2) und Ziel- (E3) Enklaven erfolgreich !!!

Sitzung schließen zwischen Quell- (E3) und Ziel- (E1) Enklaven erfolgreich !!!

Eine Taste drücken...
```

### Schritt 7 - Weitere Schritte

Für die weiteren Schritte (Ihre eigene Anwendung entwickeln, sich für die Remote-Bestätigung registrieren, ...) finden Sie hier weitere nützliche Ressourcen:

- [Intel SGX](https://software.intel.com/en-us/sgx){.external}
- [Intel SGX Attestierungsdienste](https://software.intel.com/en-us/sgx/attestation-services){.external}
- [Intel SGX linux-2.6 Dokumentation](https://download.01.org/intel-sgx/linux-2.6/docs/){.external}
- [github.com/intel/linux-sgx](https://github.com/intel/linux-sgx){.external}
- [github.com/intel/linux-sgx-driver](https://github.com/intel/linux-sgx-driver){.external}
- [github.com/intel/sgx-ra-sample](https://github.com/intel/sgx-ra-sample){.external}