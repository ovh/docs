---
title: Orquestar un cluster de servidores Docker con Shipyard
excerpt: ''
slug: orquestar_un_cluster_de_servidores_docker_con_shipyard
legacy_guide_number: g1762
section: Uso avanzado
---


## 
Shipyard es una aplicación desarrollada por la comunidad de usuarios de Docker. Puede ser una buena alternativa a Swarm y dispone de interfaz gráfica para gestionar un cluster de máquinas Docker, permitiendo el ordenamiento de las tareas y la asignación de recursos por contenedor dentro del pool de recursos de las máquinas.

En primer lugar, vamos a encargarnos de generar en la máquina maestra las claves y certificados que nos permitirán autenticarnos en nuestras distintas máquinas y tener intercambios seguros por TLS entre ellas para así evitar que nuestros nodos puedan ser controlados por una persona malintencionada (la máquina o máquinas que dispongan de los certificados serán las únicas que podrán conectarse a los clientes Docker de nuestras máquinas remotas).

Para ello, puede consultar la documentación oficial de Docker:

[https://docs.docker.com/articles/https/](https://docs.docker.com/articles/https/)

Una vez generados los certificados, pasamos a las máquinas cliente (nodos). En nuestro ejemplo, el cluster estará formado por tres máquinas con las IP 1.1.1.1, 2.2.2.2 y 3.3.3.3.

Copiamos las claves y certificados generados en la carpeta /etc/docker/certs/ de nuestros nodos con el siguiente comando: 


```
scp ca.pem server-cert.pem server-key.pem user@1.1.1.1:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@2.2.2.2:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@3.3.3.3:/etc/docker/certs/
```


Para mayor seguridad en nuestro cluster, vamos a crear reglas de iptables en la máquina maestra y en los nodos. A continuación se ofrece un ejemplo de las reglas de iptables que es posible aplicar.


En los nodos:

Instalamos las reglas de iptables:


```
# Conservar las conexiones establecidas 
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT 

# Autorizar loopback 
iptables -t filter -A INPUT -i lo -j ACCEPT 

# ICMP (ping) 
iptables -t filter -A INPUT -p icmp -j ACCEPT 

# SSH In 
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 22 -j ACCEPT 

# /!\ ATENCIÓN: Asegúrese de que la dirección IP introducida aquí es su IP de conexión o la dirección IP de la máquina maestra, por ejemplo, que serán las únicas que podrán conectarse por SSH a los nodos.

# HTTP In 
iptables -t filter -A INPUT -p tcp --dport 80 -j ACCEPT 

# SSL In
iptables -t filter -A INPUT -p tcp --dport 443 -j ACCEPT

# Docker In 
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 2375 -j ACCEPT 

# /!\ ATENCIÓN: Asegúrese de que la dirección IP introducida aquí es la dirección IP de la máquina maestra, que será la única que podrá conectarse al puerto 2375.

# Prohibir cualquier conexión entrante
iptables -P INPUT DROP 
iptables -P FORWARD DROP
```


Una vez establecidas las reglas, las guardamos para que se ejecuten al iniciar:


```
apt-get install iptables-persistent
```


Y seleccionamos «sí» cuando nos pregunte si queremos guardar las reglas de iptables IPv4.

ATENCIÓN: Le recomendamos que compruebe que las reglas funcionan correctamente antes de guardarlas. Así, si hubiera algún problema, solo tendrá que reiniciar las máquinas para resetear las reglas si estas no están guardadas.

En cualquier momento es posible añadir reglas de iptables y guardarlas con el siguiente comando:


```
iptables-persistent save
```



En la máquina maestra:

Instalamos las reglas de iptables:


```
# Conservar las conexiones establecidas 
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT 

# Autorizar loopback 
iptables -t filter -A INPUT -i lo -j ACCEPT 

# ICMP (ping) 
iptables -t filter -A INPUT -p icmp -j ACCEPT 

# Shipyard web In 
iptables -t filter -A INPUT -s «IP pública de su conexión o su VPN» -p tcp --dport 8080 -j ACCEPT 

# /!\ ATENCIÓN: Asegúrese de que la dirección IP introducida aquí es su IP de conexión o la IP de su VPN, por ejemplo, que serán las únicas que podrán conectarse a la interfaz de Shipyard.

# SSH In 
iptables -t filter -A INPUT -s «IP pública de su conexión o su VPN» -p tcp --dport 22 -j ACCEPT 

# /!\ ATENCIÓN: Asegúrese de que la dirección IP introducida aquí es su IP de conexión o la IP de su VPN, por ejemplo, que serán las únicas que podrán conectarse por SSH a la máquina maestra.

# Prohibir cualquier conexión entrante
iptables -t filter -P INPUT DROP 
iptables -t filter -P FORWARD DROP
```


Una vez establecidas las reglas, las guardamos para que se ejecuten al iniciar:


```
apt-get install iptables-persistent
```


Y seleccionamos «sí» cuando nos pregunte si queremos guardar las reglas de iptables IPv4.

ATENCIÓN: Le recomendamos que compruebe que las reglas funcionan correctamente antes de guardarlas. Así, si hubiera algún problema, solo tendrá que reiniciar las máquinas para resetear las reglas si estas no están guardadas.

En cualquier momento es posible añadir reglas de iptables y guardarlas con el siguiente comando:


```
iptables-persistent save
```




## 
Después de haber instalado Docker en las tres máquinas (ver la guía de [instalación de Docker](http://www.ovh.es/g1708.optimizar_el_alojamiento_de_un_sitio_web_wordpress_en_un_vps_gracias_a_docker) —también es posible disponer de instancias RunAbove aprovisionadas con Docker Machine, para más información puede consultar [esta guía](https://community.runabove.com/kb/en/instances/docker-in-5-minutes-on-runabove-with-docker-machine.html)—), vamos a activar la escucha del demonio Docker en un puerto (por ejemplo, el puerto 2375, que es el puerto oficial asignado por la [IANA](http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?search=docker)) para que dichas máquinas puedan dialogar con la máquina maestra. 

Para ello, vamos a empezar por detener Docker en cada una de nuestras máquinas con el siguiente comando:


```
service docker stop
```


A continuación, accedemos a la carpeta en la que están almacenados nuestros certificados:


```
cd /etc/docker/certs
```


Ahora iniciamos Docker utilizando la comunicación en el puerto 2375 con autenticación TLS, ejecutando el siguiente comando en cada uno de los nodos:


```
docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node1 

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node2 

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node3
```


ATENCIÓN: Estas opciones no son persistentes: si la máquina se reinicia será necesario volver a iniciar Docker con las opciones. Lo ideal es especificarlas en la variable de entorno $DOCKER_OPTS. En Ubuntu, podemos indicarla fácilmente en /etc/default/docker.

Arriba podemos observar la presencia de --label name=node1, que nos permite nombrar a cada uno de los nodos con una etiqueta única (esto nos permitirá iniciar un contenedor Docker en un nodo concreto mediante un sistema de restricciones).

A continuación, pasamos a instalar Shipyard en la máquina de gestión.


## 
Para empezar, ejecutamos una instancia de volumen de datos de RethinkDB:


```
docker run -it -d --name shipyard-rethinkdb-data --entrypoint /bin/bash shipyard/rethinkdb -l
```



Ejecutamos RethinkDB utilizando el volumen de datos previamente creado:


```
docker run -it -P -d --name shipyard-rethinkdb --volumes-from shipyard-rethinkdb-data shipyard/rethinkdb
```



ATENCIÓN: Si su servidor está abierto a internet, tenga en cuenta que RethinkDB escuchará públicamente en los puertos 49153 (instancia local), 49154 (cluster) y 49155 (interfaz web).

A continuación iniciamos el controlador Shipyard conectándolo a la base de datos mediante --link shipyard-rethinkdb:rethinkdb:


```
docker run -it -p 8080:8080 -d --name shipyard --link shipyard-rethinkdb:rethinkdb shipyard/shipyard
```



Shipyard creará por defecto un usuario «admin» con la contraseña «shipyard». 

Antes de acceder a la interfaz web, es recomendable cambiar la contraseña de acceso a Shipyard.

Empezamos ejecutando un contenedor que nos permitirá acceder a la interfaz de línea de comandos de Shipyard:


```
docker run -it shipyard/shipyard-cli
```


Nos identificamos:


```
shipyard cli> shipyard login
URL:http://<SU_MAQUINA>:8000
Username: admin
Password: shipyard
```


Cambiamos la contraseña:


```
shipyard cli> shipyard change-password
Password: <SU_CONTRASEÑA>
Confirm: <REPETIR_CONTRASEÑA>
```


Una vez realizada esta operación, utilizamos Ctrl+D para salir de la interfaz de línea de comandos. 

Ahora podrá acceder a la interfaz de Shipyard desde http://<your-host-ip>:8080 identificándose con el usuario «admin» y la contraseña que haya indicado.

Cuando se haya conectado, podrá proceder a registrar los nodos (engines) desde la interfaz web de Shipyard, en la pestaña «Engines »:

![](images/img_2612.jpg){.thumbnail}
No olvide copiar y pegar los certificados de seguridad generados previamente en los campos «SSL certificate», «SSL key» y «CA certificate».

A continuación, repita la operación para cada uno de los nodos (preste atención para indicar un «label» específico para cada uno de los nodos).

![](images/img_2613.jpg){.thumbnail}
También es posible añadir «engines» mediante la interfaz de línea de comandos. Para ello, ejecutamos el contenedor CLI de Shipyard:


```
docker run -it -v /etc/docker/certs/:/home/ shipyard/shipyard-cli
```


Arriba podemos observar la presencia de -v /etc/docker/certs/:/home/, que nos permite crear una carpeta común entre nuestra máquina host (la máquina maestra) y el contenedor CLI de Shipyard que se ejecuta en esa misma máquina, para que el contenedor pueda acceder a los certificados previamente generados.

Nos identificamos:


```
shipyard cli> shipyard login
URL:http://<SU_MAQUINA>:8000
Username: admin
Password: su_contraseña
```


Y ejecutamos el comando:


```
shipyard add-engine --id node1 --addr https://1.1.1.1:2375 --label node1 --ssl-cert /home/client-cert.pem --ssl-key /home/client-key.pem --ca-cert /home/ca.pem
```


Una vez realizada esta operación, utilizamos Ctrl+D para salir de la interfaz de línea de comandos.


## 
En la pestaña «Containers», podemos visualizar y gestionar todos los contenedores desplegados en los diferentes nodos:

![](images/img_2614.jpg){.thumbnail}

![](images/img_2615.jpg){.thumbnail}
Por último, haciendo clic en «DEPLOY» podremos ejecutar contenedores en todos nuestros nodos o en algunos de ellos (seleccionando el «label» correspondiente a los nodos en los que queremos desplegar el contenedor):

![](images/img_2616.jpg){.thumbnail}
Ya dispone de un sistema de orquestación de sus distintas máquinas Docker y puede aprovisionar sus aplicaciones/contenedores dentro de su cluster fácil y rápidamente, y disponiendo de una interfaz gráfica. Además, si quiere probar Docker, no olvide nuestra alfa Sailabove disponible en [https://labs.runabove.com/docker/](https://labs.runabove.com/docker/). Asimismo, acabamos de crear una plantilla Ubuntu 14.04 con Docker (preinstalado) en VPS Cloud y VPS Classic (disponible en todos nuestros VPS, excepto en los VPS Classic 1, que no disponen de suficiente espacio en disco). Con ella podrá disponer directamente de una máquina lista para ejecutar contenedores, beneficiándose de las ventajas inherentes a los VPS de OVH.

