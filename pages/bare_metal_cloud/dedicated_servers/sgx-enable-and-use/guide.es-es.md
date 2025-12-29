---
title: "Cómo gestionar Intel SGX en un servidor dedicado"
excerpt: "Descubra cómo activar la opción SGX en su servidor dedicado e instalar la pila de software SGX para Linux"
updated: 2025-11-20
---

## Objetivo

La activación de las Intel Software Guard Extensions (SGX) en su servidor le permite ejecutar aplicaciones compatibles con SGX. Intel SGX proporciona funciones avanzadas de cifrado de seguridad de hardware y memoria RAM, para aislar partes específicas del código y los datos para cada aplicación.

**Este guía explica cómo activar la función SGX, a través del área de cliente de OVHcloud o a través de la API de OVHcloud.**

## Requisitos

- Tener acceso al [área de cliente de OVHcloud](/links/manager) o a la [API de OVHcloud](/links/api)
- Tener un servidor dedicado compatible con la [opción SGX](/links/bare-metal/sgx) en su cuenta de OVHcloud
- Disponer de las credenciales recibidas por correo electrónico tras la instalación
- Tener instalado Ubuntu 24.04 o equivalente en el servidor

## Procedimiento

### Activar SGX

La activación de SGX es posible desde el área de cliente de OVHcloud, la API de OVHcloud o el BIOS de su servidor.

> [!tabs]
> **A través del área de cliente de OVHcloud**
>>
>> **1 - Conexión al área de cliente de OVHcloud**
>>
>> Inicie sesión en el [área de cliente de OVHcloud](/links/manager), vaya a la sección `Bare Metal Cloud`{.action} y haga clic en `Servidores dedicados`{.action}. Seleccione a continuación el servidor en el que desea activar SGX.
>>
>> **2 - Activar SGX**
>>
>> Desde la pestaña `Información general`{.action}, en el marco **Funcionalidades avanzadas**, haga clic en `...`{.action} junto a la mención **Seguridad - Intel SGX (Software Guard Extensions)** y seleccione `Activar SGX`{.action} en el menú desplegable.
>>
>> ![Activación SGX](images/enable_sgx.png){.thumbnail}
>>
>> En la pantalla siguiente, haga clic en el botón `Activar`{.action}.
>>
>> ![Activación SGX](images/enable_sgx2.png){.thumbnail}
>>
>> Puede elegir activar SGX con una cantidad específica de memoria reservada o permitiendo que su aplicación reserve automáticamente la memoria que necesita. Una vez realizado su elección, haga clic en `Confirmar`{.action}.
>>
>> ![Gestión SGX](images/manage_sgx.png){.thumbnail}
>>
>> Aparecerá una ventana de confirmación. Confirme que ha entendido que la activación de la tecnología Intel SGX provocará un reinicio de su servidor.
>>
>> ![Activación SGX](images/confirmation-popup_sgx.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Esto provocará uno o varios reinicios de su servidor, según su modelo.
>>
> **A través de la API de OVHcloud**
>>
>> **1 - Conexión a la consola API**
>>
>> En la página de las [API de OVHcloud](/links/console):
>>
>> - Haga clic en `Authentication`{.action} en la esquina superior izquierda.
>> - Haga clic a continuación en `Login with OVHcloud SSO`{.action}.
>> - Introduzca sus credenciales de OVHcloud.
>> - Haga clic en el botón `Authorize`{.action} para autorizar las llamadas a las API desde este sitio.
>>
>> **2 - Activar SGX**
>>
>> Recupere el nombre de su servidor en la lista devuelta por la llamada siguiente:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server
>>
>> Compruebe que su servicio dispone de la opción SGX utilizando esta llamada:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/biosSettings/sgx
>>
>> ![SGX desactivado](images/get-disabled.png){.thumbnail}
>>
>> Active SGX utilizando el nombre del servidor:
>>
>> > [!warning]
>> >
>> > Esto provocará uno o varios reinicios de su servidor, según su modelo.
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/biosSettings/sgx/configure
>>
>> ![Configuración SGX](images/post-configure.png){.thumbnail}
>>
>> Compruebe el progreso de la tarea de configuración llamando a este punto de finalización con el *taskId* devuelto por la llamada anterior:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/task/{taskId}
>>
>> ![Obtener la tarea de configuración SGX](images/get-task.png){.thumbnail}
>>
>> Puede comprobar que el estado está activado:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/biosSettings/sgx
>>
>> ![SGX activado](images/get-enabled.png){.thumbnail}
>>
> **Configuración manual en el BIOS**
>>
>> **1 - Iniciar una sesión Remote KVM**
>>
>> Inicie sesión en el [área de cliente de OVHcloud](/links/manager), vaya a la sección `Bare Metal Cloud`{.action} y haga clic en `Servidores dedicados`{.action}. Seleccione a continuación el servidor en el que desea activar SGX.
>>
>> Desde la pestaña `IPMI / KMV`{.action}, inicie una sesión Remote KVM:
>>
>> ![Iniciar una sesión Remote KVM](images/manager.png){.thumbnail}
>>
>> **2 - Activar SGX**
>>
>> A continuación, desde el KVM, inicie un reinicio del servidor y entre en el BIOS (normalmente pulsando la tecla `DEL`{.action} o `F2`{.action}).
>>
>> En el BIOS, vaya a la parte `Advanced` > `Processor Configuration`.
>>
>> Active las opciones TME y SGX y configure el tamaño PRMRR deseado:
>>
>> ![Activar SGX](images/sgx_bios.png){.thumbnail}
>>
>> Guarde los cambios pulsando la tecla `F10`{.action}. Aparecerá una ventana de confirmación, confirme con la opción `Yes`.
>>
>> Su servidor reiniciará a continuación en su sistema operativo.
>>

### Instalar la pila de software SGX

Utilice los siguientes comandos para instalar el SDK de Intel para poder desarrollar y ejecutar aplicaciones SGX.

En primer lugar, instale algunas dependencias:

```bash
sudo apt update
sudo apt install autoconf automake build-Essential cmake debhelper git libcurl4-openssl-dev libprotobuf-dev libssl-dev libtool lsb-release ocaml ocamlbuild protobuf-compiler python-is-python3 reprepro wget perl unzip pkgconf libboost-dev libboost-system-dev libboost-thread-dev libsystemd0
```

A continuación, descargue el código fuente y prepare los submódulos y los binarios listos para usar:

```bash
BASE_DIR=/opt/intel
[[ -d $BASE_DIR ]] || sudo mkdir -p $BASE_DIR && sudo chown `whoami` $BASE_DIR
cd $BASE_DIR
 
git clone https://github.com/intel/linux-sgx.git
 
cd linux-sgx
git checkout sgx_2.26
make preparation
```

Construya e instale el SDK SGX:

```bash
make sdk_install_pkg
$ ./linux/installer/bin/sgx_linux_x64_sdk_2.26.100.0.bin --prefix=$BASE_DIR/
```

### Probar la aplicación de ejemplo en modo simulador

Para construir y ejecutar el código de ejemplo *LocalAttestation* en modo simulador:

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

### Construir e instalar el PSW Intel SGX

El software Intel SGX Platform Software (PSW) proporciona bibliotecas de software que permiten ejecutar aplicaciones SGX en modo hardware. Para crear el repositorio local Debian que aloje los paquetes, ejecute los siguientes comandos:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/linux-sgx
make deb_local_repo
```

Cree el siguiente archivo para añadir el repositorio local de paquetes Debian al sistema de configuración de repositorios:

```bash
$ cat /etc/apt/sources.list.d/sgx.sources
Types: deb
URIs: file:/opt/intel/linux-sgx/linux/installer/deb/sgx_debian_local_repo
Suites: noble
Components: main
trusted: yes
```

A continuación, instale los siguientes paquetes:

```bash
sudo apt update
sudo apt-get install libsgx-epid libsgx-quote-ex libsgx-dcap-ql
```

### Probar la aplicación de ejemplo en modo hardware (opcional)

Para construir y ejecutar el código de ejemplo *LocalAttestation* en modo hardware:

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

## Más información

Para ir más lejos (desarrollar su propia aplicación, registrarse en la atestación remota, etc.), aquí hay algunas fuentes útiles:

- [Intel SGX](https://software.intel.com/en-us/sgx)
- [Intel SGX Attestation services](https://software.intel.com/en-us/sgx/attestation-services)
- [Intel SGX linux-2.26 documentation](https://download.01.org/intel-sgx/sgx-linux/2.26/docs/)
- [github.com/intel/linux-sgx](https://github.com/intel/linux-sgx)