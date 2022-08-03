---
title: 'Crear y conectarse a una instancia de Public Cloud'
slug: public-cloud-primeros-pasos
excerpt: 'Cómo empezar a utilizar el servicio Public Cloud tras haber creado un proyecto'
section: 'Primeros pasos'
order: 04
---

**Última actualización: 02/08/2022**

## Objetivo

Las instancias del servicio Public Cloud de OVHcloud requieren un enfoque diferente al de los VPS o los servidores dedicados.

**Esta guía explica cómo crear y conectarse por primera vez a una instancia de Public Cloud.**

## Requisitos

- Tener un proyecto de [Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/) en su cuenta de OVHcloud.
- Tener acceso al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).


## Procedimiento

### 1. Crear claves SSH

El protocolo SSH garantiza una comunicación encriptada entre el cliente y el servidor. La utilización de claves SSH le permitirá aumentar la seguridad en su servicio al impedir cualquier conexión desde un dispositivo que no disponga de la clave correspondiente. Al crear un conjunto de claves SSH recibirá una clave pública y otra privada.

- La **clave pública** se añadirá a su instancia de Public Cloud durante la instalación.

- La **clave privada**, almacenada en el dispositivo cliente, le permitirá acceder a su instancia sin solicitarle la contraseña de usuario. 

> [!primary]
>
Tenga en cuenta que es obligatorio disponer de un par de claves SSH para conectarse a sus instancias de Public Cloud, salvo en aquellas que funcionan con sistemas operativos Windows. Las claves SSH públicas que añada en su área de cliente de OVHcloud estarán disponibles para sus servicios de Public Cloud, en todas las regiones y en todos los datacenters. Solo es posible almacenar claves encriptadas **RSA** y **ECDSA**. Las claves ED25519 no son compatibles. 
>
Para autenticarse en instancias Windows solo necesitará el nombre de usuario y la contraseña.
>

#### Creación de una clave SSH en Linux o Mac

En primer lugar, abra la aplicación de línea de comandos (Terminal). Compruebe que dispone de una carpeta «.ssh» en el directorio «$HOME». Si la carpeta no existe, créela:

```bash
$ mkdir ~/.ssh
$ chmod 700 ~/.ssh
```

Utilice el siguiente comando para crear una clave RSA de 4096 bits:

```bash
$ ssh-keygen -b 4096
```
El uso del parámetro «-t» con este comando permite especificar un método de cifrado diferente, por ejemplo:

```bash
$ ssh-keygen -t ecdsa -a 256
```

El comando le pedirá que guarde la clave que acaba de crear en un archivo estándar:

```bash
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Puede aceptar el archivo por defecto haciendo clic en «↩». A continuación, tendrá la opción de introducir una frase de contraseña para proteger la clave SSH. Se recomienda usar una frase de contraseña para mayor seguridad. Para acceder a su instancia de Public Cloud desde un dispositivo de trabajo solo necesitará la clave privada correspondiente. Así pues, le recomendamos que aplique medidas adicionales de seguridad. Cada vez que se establezca una conexión con la instancia, deberá introducir la frase de contraseña.

Las claves SSH deben almacenarse en la carpeta «.ssh». Se añadirá la extensión «.pub» al nombre del archivo («filename») de la clave pública.

```ssh
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:MRk+Y0zCOoOkferhkTvMpcMsYspj212lK7sEauNap user@hostname
The key's randomart image is:
+---[RSA 4096]----+
|     .. o        |
|    . .= o       |
|   o o  X        |
|. . . .          |
|. .=.o .S.       |
| =o.o.  .   .    |
|o +   .  . o ..  |
|.. .  .   oEoo . |
|o.        .o+oo  |
+----[SHA256]-----+
```

> [!warning]
>
> La clave privada debe guardarse de forma segura y el acceso a la misma debe limitarse estrictamente a las personas autorizadas.
> 

Para visualizar y exportar su clave pública, utilice el comando «cat» en el archivo de la clave «.pub» y copie el resultado:

```bash
$ cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

> [!primary]
>
>En Terminal de MacOS también es posible añadir los comandos «pbcopy» and «pbpaste» para administrar las cadenas. Por ejemplo, para copiar la clave desde el archivo «id_rsa.pub» al portapapeles, puede utilizar el siguiente comando:
>

```bash
$ pbcopy < ~/.ssh/id_rsa.pub
```

#### Creación de una clave SSH en Windows

[PuTTY](https://putty.org/){.external}, disponible en Windows y otros sistemas operativos, es un cliente SSH open source con una interfaz de usuario gráfica que permite conectarse de forma remota a un servidor Linux. Su software complementario, PuTTY Key Generator (PuTTYgen), puede utilizarse para crear claves SSH.

En primer lugar, descargue PuTTY desde el [sitio web oficial](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html). El paquete de instalación estándar recomendado incluye PuTTYgen, pero este último también esta disponible como archivo independiente. Puede comprobar si el programa está disponible accediendo al menú de programas o utilizando Windows Search.

A continuación, abra puTTYgen y seleccione un algoritmo de encriptación. En nuestro ejemplo hemos seleccionado RSA. Introduzca 4096 como número de bits y haga clic en el botón `Generate`{.action}.

![generate key](images/puttygen_01.png){.thumbnail}

A continuación, mueva el cursor de forma aleatoria en el espacio que aparece debajo de la barra de progreso.

![generated key](images/puttygen_02.gif){.thumbnail}

La clave estará lista cuando se complete la barra de progreso. 

![save key](images/puttygen_03a.png){.thumbnail}

Puede seleccionar y copiar la clave pública desde esta ventana para guardarla en su área de cliente de OVHcloud ([paso 2](./#2-guardar-las-claves-publicas-en-el-area-de-cliente-de-ovhcloud_1)).

Guarde ambas claves como archivo y cree una frase de contraseña. Para acceder a su instancia de Public Cloud desde un dispositivo de trabajo solo necesitará la clave privada correspondiente. Así pues, le recomendamos que aplique medidas adicionales de seguridad. Cada vez que se establezca una conexión con la instancia, deberá introducir la frase de contraseña.

### 2. Guardar las claves públicas en el área de cliente de OVHcloud

Una vez creadas las claves SSH por cualquiera de los métodos anteriormente descritos, ya puede añadir una clave pública a su instancia de Public Cloud. Asimismo, puede almacenar sus claves públicas en la sección Public Cloud del área de cliente de OVHcloud. De este modo, estarán disponibles cada vez que cree una instancia.

> [!primary]
>
Guardar sus claves SSH le permitirá crear sus instancias más rápidamente. Para modificar los pares de claves y añadir usuarios posteriormente, consulte nuestra guía [Configurar llaves SSH adicionales](../configurar_llaves_ssh_adicionales/).
>

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda a la sección `Public Cloud`{.action} y seleccione el proyecto correspondiente. Haga clic en `SSH Keys`{.action}, en la sección «Project Management» del menú de la izquierda.

Por último, haga clic en el botón `Añadir una llave SSH`{.action}. Aparecerá una nueva ventana en la que deberá introducir el nombre de la clave y pegarla en el campo correspondiente. Puede copiar la clave desde el archivo de la clave pública o la ventana de PuTTYgen, tal como explicamos en el [paso 1](./#1-crear-claves-ssh). Haga clic en `Añadir`{.action}.

![add key](images/puttygen-04.png){.thumbnail}


### 3. Crear una instancia

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YP92y1rAVdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda a la sección `Public Cloud`{.action} y seleccione el proyecto correspondiente. Desde la página de inicio, haga clic en el botón `Crear una instancia`{.action}. También puede crear su instancia desde el menú `Instancias`{.action}, en la sección «Compute» del menú de la izquierda.

![instance select](images/instance-creation-01-2021.png){.thumbnail}

En primer lugar, seleccione el modelo que mejor se adapta a sus necesidades. Podrá consultar las características de las diferentes instancias y los modelos de servidor disponibles de entre las siguientes categorías:

| Tipo de servidor | Recursos garantizados | Uso |
| :---         |     :---:      |          :--- |
| General Purpose   | ✓     | Servidores de desarrollo, aplicaciones web o comerciales    |
| CPU     | ✓       | Codificación de vídeo o alta computación      |
| RAM   | ✓     | Bases de datos, análisis y cálculos en memoria    |
| GPU     | ✓       | Procesamiento de tareas masivamente paralelas para aplicaciones especializadas (renderizado, big data, deep learning, etc.)       |
| Sandbox    | -       | Alojado en recursos compartidos para entornos de testeo y desarrollo      |
| Discovery    | -       | Alojado en recursos compartidos para entornos de testeo y desarrollo      |
| IOPS   | ✓     | Optimizado para transferencia de datos en disco    |


> [!primary]
>
Por motivos de seguridad, los recursos totales de su proyecto de Public Cloud estarán limitados. Puede consultar sus límites y aumentar estos recursos directamente desde el área de cliente de OVHcloud. Para ello, acceda al menú `Quota and Regions`{.action}, en la sección «Project Management» del menú de la izquierda.
>
Tenga en cuenta que es posible mejorar las características de una instancia, pero no pasar a un modelo inferior (excepto si ha seleccionado la opción «Flex» en el paso 4 del proceso de creación). Puede consultar a continuación más información sobre este punto.
>

En el próximo paso, deberá seleccionar un datacenter para su instancia de Public Cloud.

En tercer lugar, deberá seleccionar un sistema operativo para su instancia. Las imágenes disponibles en este paso dependerán de las opciones que haya seleccionado en los pasos anteriores (p. ej., la compatibilidad con el tipo de servidor y la localización). También hay disponibles sistemas operativos con aplicaciones preinstaladas.

![image select](images/instance-creation-02.png){.thumbnail}

> [!primary]
>
Si selecciona un sistema operativo con licencia de pago, el coste se incluirá automáticamente en su facturación mensual o por horas.
>

En este paso también deberá añadir una clave SSH (salvo en instancias Windows). Para ello, puede copiar la clave directamente haciendo clic en `Añadir una llave`{.action} o seleccionar una clave de la lista de llaves disponibles (tal y como explicamos en el [paso 2](./#2-guardar-las-claves-publicas-en-el-area-de-cliente-de-ovhcloud_1), deberá haber añadido su clave previamente al área de cliente de OVHcloud).

![key select](images/instance-creation-03.png){.thumbnail}

En el cuarto paso deberá configurar algunas opciones adicionales:

![options select](images/instance-creation-04.png){.thumbnail}

- desplegar múltiples instancias con la configuración seleccionada, siempre y cuando no supere el límite inicial;
- crear una instancia flexible para poder pasar posteriormente a un modelo inferior (o incluso cambiar de modelo). Esta opción limitará el **almacenamiento incluido** de la instancia a 50 GB, independientemente de cualquier migración a un modelo superior o inferior;
- cambiar el nombre de su instancia;
- añadir un script de post-instalación;
- conectar instancias a una red privada asociada (vRack);
- permitir el backup automatizado de instancias (puede consultar el precio y el tipo de rotación en esa misma sección).

Una vez que hay seleccionado las opciones deseadas, haga clic en `Siguiente`{.action} y, por último, elija el tipo de facturación.

![billing select](images/instance-creation-05.png){.thumbnail}

Si tiene dudas sobre el período de uso, le recomendamos que elija la opción de facturación por horas, ya que no podrá modificar esta opción más adelante. Para pasar a la opción de facturación mensual, debe esperar a que su instancia esté disponible en la página «Instancias».

> [!warning]
>
>Si elige la opción de facturación por horas, esta se mantendrá hasta que se elimine la instancia, independientemente de si la está o no utilizando.
>

Una vez que haya confirmado que todos los datos introducidos son correctos, haga clic en `Crear una instancia`{.action} para finalizar el proceso. Su instancia podría tardar unos minutos en estar disponible.

### 4. Conectarse a una instancia <a name="connect-to-instance"></a>

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda a la sección `Public Cloud`{.action} y seleccione el proyecto correspondiente. Haga clic en `Instances`{.action}, en la sección «Compute» del menú de la izquierda. Su instancia estará activada cuando se muestre el estado «Activa». Para comprobarlo, haga clic en el botón «Refrescar» que aparece en la parte superior, junto al buscador.

![instances page](images/instance-connect-01.png){.thumbnail}

Se creará automáticamente un usuario con permisos superiores en la instancia. El nombre de usuario refleja la imagen elegida: «ubuntu», «debian», «fedora», «arch», etc. Puede consultar esta y otra información haciendo clic en el botón `...`{.action} y seleccionando `Detalles de la instancia`{.action}.

> [!primary]
>
Si tiene problemas con la conexión a través de sus claves SSH, consulte nuestra guía [Modificar su llave SSH en caso de pérdida](../modificar_su_llave_ssh_en_caso_de_perdida/).
>

> [!primary]
>
Si ha creado una instancia sin llave SSH, a través de la API OVHcloud o la interfaz Openstack Horizon, solo podrá añadir una llave SSH a su instancia a través del [modo de rescate](https://docs.ovh.com/es/public-cloud/poner_una_instancia_en_modo_de_rescate/) siguiendo las instrucciones descritas en [esta sección de la guía adecuada](../modificar_su_llave_ssh_en_caso_de_perdida/#procedimiento).
>

#### Conexión a una instancia Linux en Linux o Mac

Puede acceder a su instancia en línea de comandos (Terminal) por SSH. Para ello, sustituya el «username» en los siguientes ejemplos por su nombre de usuario. También puede copiar el comando de acceso completo desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). Para ello, acceda al «Panel de Control» de la instancia y copie los datos de conexión en su terminal.

![instances page](images/instance-connect-02.png){.thumbnail}

Introduzca la frase de contraseña de su clave privada. 

```bash
ssh username@IPv4_of_your_instance
Enter passphrase for key '/Users/username/.ssh/id_rsa':
```
Al estar conectado con permisos root («sudo user»), podrá ejecutar comandos para realizar tareas administrativas. Le recomendamos que, en primer lugar, modifique su contraseña:

```bash
$ sudo passwd username
New password:
Retype new password:
passwd: password updated successfully
```
Ya puede utilizar estas claves para conectarse a través de la `consola VNC`{.action} de su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). A continuación, todavía como usuario «root», establezca una contraseña. Una vez hecho esto, vuelva al usuario anterior.

```bash
$ sudo su -
# passwd
New password:
Retype new password:
passwd: password updated successfully
# su - username
```
Tenga en cuenta que, en general, no será necesario utilizar el usuario «root». Si necesita realizar tareas administrativas que requieren privilegios «root», le recomendamos que se conecte y ejecute los comandos como un usuario incluido en el grupo «sudo».

#### Conexión a una instancia Linux en Windows

Una vez que haya creado y guardado sus claves SSH ([paso 1](./#1-crear-claves-ssh)) y que haya instalado su instancia con la clave pública ([paso 3](./#3-crear-una-instancia)), ya puede utilizar [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) y su clave privada para conectarse a la instancia.

Para ello, abra PuTTY y despliegue «SSH» en el menú de la izquierda. A continuación, haga clic en «Auth» para ver las opciones de autenticación.

![using putty](images/puttyconnect-01.png){.thumbnail}

Haga clic en el botón `Browse`{.action} para seleccionar la carpeta en la que almacenó su archivo de clave privada (.ppk) y abrirlo. A continuación, acceda a la sección «Session» en el menú de la izquierda y seleccione sus claves de acceso (usuario@dirección_IPv4). Sustituya «ubuntu», en el ejemplo, por el usuario por defecto que aparezca en el panel de control de su instancia, en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). Para abrir este panel, haga clic en `Instances`{.action}, en la sección «Compute» del menú de la izquierda, y vuelva a hacer clic en el nombre de su instancia.

Le recomendamos que guarde esta sesión para poder utilizarla en futuras conexiones. Introduzca una descripción en el campo «Saved Sessions» y haga clic en `Save`{.action} para guardarla.

![using putty](images/puttyconnect-02.png){.thumbnail}

A continuación, haga clic en `Open`{.action} e introduzca la frase de contraseña de la clave.

![using putty](images/puttyconnect-03.png){.thumbnail}


> [!primary]
>
Las instrucciones que se incluyen más arriba explican cómo conectarse a una instancia de Public Cloud de forma segura. Por motivos de seguridad y practicidad, le recomendamos que utilice un gestor de contraseñas, como la solución gratuita y open source **KeePass**.
>


#### Conexión a una instancia Windows

Una vez creada su instancia, deberá completar la instalación de Windows (_sysprep_). Para ello, haga clic en el botón `...`{.action} y seleccione `Detalles de la instancia`{.action}. Acceda a la pestaña `Consola VNC`{.action}. La consola deberá mostrar la interfaz de post-instalación.

![windows sysprep](images/windows-connect-01.png){.thumbnail}

En primer lugar, seleccione el país, el idioma y la distribución del teclado. A continuación, haga clic en `Siguiente`{.action}.

![windows sysprep](images/windows-connect-02.png){.thumbnail}

En segundo lugar, deberá configurar la cuenta del administrador por defecto. Introduzca su contraseña y, por último, haga clic en `Finalizar`{.action} para completar el proceso de instalación. Puede utilizar el icono con forma de ojo para comprobar que los caracteres introducidos en el campo de la contraseña coinciden con la distribución de su teclado.

La instancia se reiniciará y podrá conectarse utilizando sus claves desde un cliente de escritorio remoto. 

##### **En Windows**

Si lo necesita, utilice el cuadro de búsqueda de Windows y abra la aplicación de «Conexión a Escritorio remoto».

![windows remote](images/windows-connect-03.png){.thumbnail}

Indique la dirección IPv4 de su instancia y el usuario administrador y, a continuación, introduzca su frase de contraseña. Al tratarse de un certificado desconocido, es probable que aparezca un mensaje de aviso pidiéndole que confirme la conexión. Confirme que quiere conectarse a la instancia.

> [!primary]
>
Si tiene problemas para conectarse, compruebe que el dispositivo permite las conexiones remotas (RDP). Para ello, consulte la configuración de su sistema, las reglas de firewall y las posibles restricciones de red.
>

##### **En Linux**

Es posible acceder a las instancias de Public Cloud desde la consola VNC del [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). Desde su dispositivo local, deberá conectarse mediante una aplicación cliente compatible con el protocolo RDP.

Por ejemplo, Remmina Remote Desktop Client es una aplicación compatible que debe incluirse en cualquier instalación Ubuntu Desktop. Si no encuentra la aplicación Remmina en su entorno, puede descargarla desde el [sitio web oficial](https://remmina.org/).

![linux remote](images/linux-connect-01.png){.thumbnail}

Abra Remmina y asegúrese de que el protocolo de conexión es «RDP». Introduzca la dirección IPv4 de su instancia de Public Cloud y haga clic en el botón «↩».

![linux remote](images/linux-connect-02.png){.thumbnail}

Si aparece un mensaje de certificado, acéptelo. A continuación, introduzca el usuario y la contraseña de la instancia. Haga clic en `OK`{.action} para establecer la conexión.

![linux remote](images/linux-connect-03.png){.thumbnail}


## Más información

[Guardar una copia de seguridad de una instancia](../guardar_copia_de_seguridad_de_una_instancia/)

[Aumentar el límite de Public Cloud](../aumentar_el_limite_de_public_cloud/)

[Cambiar de facturación por horas a mensual](../cambiar-modalidad-facturacion-public-cloud/)

[Configurar llaves SSH adicionales](../configurar_llaves_ssh_adicionales/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
