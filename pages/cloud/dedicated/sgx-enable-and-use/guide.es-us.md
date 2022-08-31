---
title: 'Intel SGX en un servidor dedicado'
slug: enable-and-use-intel-sgx
excerpt: 'Active la funcionalidad SGX en su servidor Infrastructure o Advance e instale la pila de software SGX para linux'
section: 'Uso avanzado'
---

**Última actualización: 31/08/2022**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Active Intel Software Guard Extensions en su servidor para poder ejecutar las aplicaciones SGX-ready.  
La tecnología Intel SGX proporciona funciones avanzadas de seguridad mediante el cifrado por hardware de la memoria, que permite aislar fragmentos de código y datos específicos de una aplicación.

## Requisitos

- Tener un [servidor dedicado de la gama Infrastructure](https://www.ovhcloud.com/es/bare-metal/infra/){.external} o de la [gama Advance](https://www.ovhcloud.com/es/bare-metal/advance/), con la opción [SGX](https://www.ovhcloud.com/es/bare-metal/intel-software-guard-extensions/){.external}
- Tener acceso al servidor por SSH como administrador (root)
- Tener acceso a la [API de OVHcloud](https://ca.api.ovh.com/console/){.external}
- Tener instalado Ubuntu 18.04 o similar en el servidor

> [!warning]
>
> En la gama Advance, solo los siguientes servidores, equipados con un procesador Intel, son compatibles con la tecnología Intel SGX:
>
> - Advance-1
> - Advance-2
> - Advance-6
> - Advance-APAC

## Procedimiento

### Desde el área de cliente de OVHcloud

Conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), acceda a la sección `Bare Metal Cloud`{.action} y seleccione el servidor al que quiere activar SGX en la sección **Servidores dedicados** del menú de la izquierda.

#### Activación de la opción

Descienda hasta la zona `Funcionalidades avanzadas` y haga clic en `...`{.action} en frente de "Seguridad - Intel SGX (Software Guard Extensions)". Seleccione `Activar SGX`{.action} en el menú desplegable.

![activación SGX](images/enable_sgx.png){.thumbnail}

En la siguiente pantalla, haga clic en el botón `Activar`{.action}.

![activación SGX](images/enable_sgx2.png){.thumbnail}

Puede activar o activar SGX con una cantidad específica de memoria reservada, permitiendo a su software guardar automáticamente la memoria que necesite. Una vez que haya elegido, haga clic en `Confirmar`{.action}.

![activación SGX](images/manage_sgx.png){.thumbnail}

Se mostrará una ventana de confirmación confirmando que, para activar la tecnología Intel SGX, es necesario reiniciar el servidor.

![activación SGX](images/confirmation-popup_sgx.png) {.thumbnail}

> [!warning]
>
> En función del servidor, esta acción se reiniciará de 1 a más.

#### Desactivación de la opción

Descienda hasta la zona `Funcionalidades avanzadas` y haga clic en `...`{.action} en frente de "Seguridad - Intel SGX (Software Guard Extensions)". Seleccione `Editar SGX`{.action} en el menú desplegable. Seleccione la opción `Desactivar`{.action} y haga clic en `Confirmar`{.action}.

![Desactivación de SGX](images/disable_sgx.png){.thumbnail}

> [!warning]
>
> En función del servidor, esta acción se reiniciará de 1 a más.

Siga leyendo esta guía en [el paso 3](#sgx-softwares).

### Desde la API de OVHcloud

#### Paso 1: acceder a la API

Acceda a <https://ca.api.ovh.com/console/> y, a continuación, haga clic en el botón `Login`{.action} situado en la esquina superior derecha de la página.  
Identifíquese con los datos de acceso de su cuenta de OVHcloud en la página siguiente.

#### Paso 2: Activar SGX

Obtenga el nombre de su servidor de la lista que devuelve la siguiente llamada:

> [!api]
>
> @api {GET} /dedicated/server

Compruebe que su servicio tiene la opción SGX con la siguiente llamada:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/biosSettings/sgx

![SGX disabled](images/get-disabled.png){.thumbnail}

A continuación, active la opción SGX:

> [!warning]
>
> En función del servidor, esta acción se reiniciará de 1 a más.

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/biosSettings/sgx/configure

![Configure SGX](images/post-configure.png){.thumbnail}

Compruebe el progreso de la tarea de configuración llamando al siguiente endpoint con el taskId devuelto en la llamada anterior:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/task/{taskId}

![Get SGX configuration task](images/get-task.png){.thumbnail}

Puede comprobar que el estado ahora es «Activo»:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/biosSettings/sgx

![SGX enabled](images/get-enabled.png){.thumbnail}

#### Paso 3: Instalar la pila de software SGX <a name="sgx-softwares"></a>

Ahora instalaremos el driver de Intel y SDK para poder desarrollar y ejecutar aplicaciones SGX.  

Primero, instalaremos algunas dependencias:

```bash
sudo apt-get install build-essential ocaml ocamlbuild automake autoconf libtool wget python libssl-dev libcurl4-openssl-dev protobuf-compiler libprotobuf-dev debhelper cmake git
```

Después, descargue, cree e instale la pila de software SGX:

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

Descargue e instale el driver:

```bash
wget https://download.01.org/intel-sgx/linux-2.6/ubuntu18.04-server/sgx_linux_x64_driver_2.5.0_2605efa.bin
chmod +x sgx_linux_x64_driver_2.5.0_2605efa.bin
sudo ./sgx_linux_x64_driver_2.5.0_2605efa.bin
```

#### Paso 4: Reinicie para terminar la instalación

#### Paso 5: Utilice una plantilla de aplicación para validar la instalación

Cree una aplicación con una de las plantillas proporcionadas:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/sgxsdk/SampleCode/LocalAttestation/
source $BASE_DIR/sgxsdk/environment
make SGX_DEBUG=0 SGX_MODE=HW SGX_PRERELEASE=1
```

Ejecútela:

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

## Más información

Si desea seguir avanzando (desarrollar su propia aplicación, obtener una certificación a distancia, etc), aquí tiene algunos recursos que pueden resultarle útiles:

- [Intel SGX](https://software.intel.com/en-us/sgx){.external}
- [Intel SGX Attestation services](https://software.intel.com/en-us/sgx/attestation-services){.external}
- [Intel SGX linux-2.6 documentation](https://download.01.org/intel-sgx/linux-2.6/docs/){.external}
- [github.com/intel/linux-sgx](https://github.com/intel/linux-sgx){.external}
- [github.com/intel/linux-sgx-driver](https://github.com/intel/linux-sgx-driver){.external}
- [github.com/intel/sgx-ra-sample](https://github.com/intel/sgx-ra-sample){.external}
