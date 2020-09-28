---
title: Zone Check de un dominio
excerpt: 'Esta guía explica cómo realizar un [i]zone check[/i] de un dominio.'
slug: zone_check_de_un_dominio
legacy_guide_number: g1980
section: DNS (servidor y zona)
---


## Cumplimentar los campos
La herramienta de [zone check](https://zonemaster.net/) de la AFNIC le permite comprobar que la configuración de los DNS primario y secundario que quiere realizar funcionará correctamente. 

Para ello, acceda a la web de [Zonemaster](https://zonemaster.net/), haga clic en «Pre-delegated domain» y cumplimente los campos como se indica a continuación:


- «Domain name»: Indique el nombre de dominio que quiera probar.
- «Nameservers»: Haga clic en el «+» tantas veces como necesite en función del número de servidores DNS que quiera probar e indique los servidores junto con las IP correspondientes.
- A continuación, haga clic en el botón «Run test» para ver el resultado.



![zonecheck tool domain](images/img_3213.jpg){.thumbnail}


## Resultado
Unos instantes después de haber iniciado la prueba, se mostrará el resultado:


- Si aparece todo en verde: La zona es correcta. Puede realizar el cambio de DNS desde el área de cliente.

- Si aparece algún elemento en rojo: Consulte el detalle para realizar las correcciones necesarias.

Atención: Si aparecen elementos en rojo, no actualice los servidores DNS a menos que esté seguro de que es lo que desea, ya que la operación podría bloquearse y los servicios asociados a los dominios podrían dejar de funcionar.


![zonecheck tool domain](images/img_3211.jpg){.thumbnail}


## Información útil
Si tiene alguna duda sobre Zonemaster y sus funcionalidades, consulte el apartado «FAQ» de la herramienta.

![zonecheck tool domain](images/img_3212.jpg){.thumbnail}

