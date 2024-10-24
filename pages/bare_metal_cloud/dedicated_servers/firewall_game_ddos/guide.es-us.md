---
title: "Protección de un servidor de juegos con el firewall de aplicaciones"
excerpt: "Cómo configurar el OVHcloud Game DDoS Protection Firewall"
updated: 2024-10-24
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

El objetivo de esta guía es ayudarle a entender mejor nuestra protección anti-DDoS Game (también llamada *Game firewall*) y ofrecerle instrucciones sobre cómo configurar una protección eficaz.

> [!primary]
> Para más información, consulte nuestra página web [Protección anti-DDoS Game](/links/security/ddos).
>

Nuestros servidores dedicados Bare Metal Gaming incluyen una protección adicional contra los ataques de red especialmente diseñada para proteger las aplicaciones de juego contra ataques específicos, garantizando así la estabilidad y accesibilidad de los jugadores. Esta solución de protección dedicada es sólida y fácil de usar, lo que le permite centrarse en el desarrollo de su empresa sin tener que defenderse de los delitos informáticos.

| ![global-schema](images/global_schema_focus_game.png) |
|:--:|
| Esquema de los servicios de infraestructura y de protección de los juegos anti-DDoS de OVHcloud |

## Requisitos

- Un [servidor dedicado OVHcloud **Game**](/links/bare-metal/game)
- Acceso al área de cliente de [OVHcloud](/links/manager)

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los servidores de la [**gama Eco**](/links/bare-metal/eco-about).
>
> Consulte nuestra [página de comparación](/links/bare-metal/eco-compare) para obtener más información.

## Procedimiento

### Introducción

La infraestructura anti-DDoS, combinada con el cortafuegos de red perimetral, protege la red de las amenazas habituales (centradas principalmente en las capas ISO OSI 3 y 4). Sin embargo, alojar aplicaciones de juegos puede suponer un reto para la seguridad de la red. **Game DDoS Protection*** le ayuda: se trata de un firewall de nivel 7 (aplicación) que se centra en la protección de protocolos de juego específicos. Sus principales ventajas son:

- **Muy baja latencia**: Sabemos que la latencia y la estabilidad son esenciales para los juegos online. Estas soluciones se acercan a los servidores y funcionan juntas con un hardware potente.
- **Bidireccional**: La plataforma analiza el tráfico entrante y saliente para comprender mejor la situación de cada jugador.
- **Instantánea**: Permite distinguir a los jugadores reales de los ataques maliciosos en un servidor desde los primeros paquetes de la red.
- **Siempre activo**: la capacidad de detectar y detener ataques garantiza una experiencia fluida para aplicaciones de juegos sensibles, sin interrupciones ni cambios de latencia.

### Activación y configuración de la protección anti-DDoS Game

> [!primary]
> El *Firewall Game* protege la IP asociada a un servidor. Por lo tanto, si tiene un servidor con varias direcciones IP (p. ej., [direcciones Additional IP](/links/network/additional-ip)), deberá configurar cada una de ellas por separado.
>

Para configurar las reglas de protección de juegos de su servidor Bare Metal Game, conéctese al área de cliente de OVHcloud y siga estos pasos:

- Haga clic en la pestaña `Bare Metal Cloud`{.action}.
- Acceda a `Network`{.action} en la columna izquierda.
- Abra `IP`{.action}.

Puede filtrar las direcciones IP utilizando el menú desplegable `Todos los servicios`{.action}. Introduzca el nombre o la categoría del servidor correspondiente:

| ![configure-game-firewall](images/ip_listing.png) |
|:--:|
| Lista de IP : Encuentre su dirección IP por servicio correspondiente |

Acceda a la configuración del *Firewall Game* :

| ![game-server](images/firewall_game_01_blur.png) |
|:--:|
| Haga clic en el botón `...`{.action} situado junto a la dirección IP de su servidor Game. |

| ![configure-game-firewall](images/firewall_game_02.png) |
|:--:|
| Haga clic en `Configurar el firewall GAME`{.action}. |

Ahora puede configurar reglas de protección de juegos para la dirección IP seleccionada.

> [!primary]
> Es importante tener en cuenta que la protección anti-DDoS Game no tomará ninguna medida hasta que se configuren las reglas de protección del juego.
>

Para activar la protección anti-DDoS Game, solo tiene que definir las aplicaciones de juego y el rango de puertos de red (o puerto único) asociado a ellas:

| ![add-rule-btn](images/firewall_game_03.png) |
|:--:|
| En la siguiente pantalla, haga clic en el botón `Añadir una regla`{.action} para añadir una regla al *Firewall Game*. |


La protección anti-DDoS Game le permite configurar hasta **100 reglas por dirección IP** que apuntan a un servidor de juegos Bare Metal de 3ª generación (servidores comercializados en 2024 o posterior), o hasta **30 reglas por dirección IP** para las antiguas gamas de juegos Bare Metal (generalmente identificadas como RISE-GAME o SYS-GAME).

Tenga en cuenta que los protocolos de juego compatibles (títulos y versiones de juegos que se pueden proteger) pueden cambiar con el tiempo. Además, pueden ser diferentes entre las antiguas gamas de servidores Bare Metal Game y las más recientes. La lista más reciente de perfiles de juegos compatibles está disponible [aquí](/links/security/ddos).

| ![confirm-new-rule](images/firewall_game_04.png) |
|:--:|
| Configure las protecciones del juego seleccionando un **Protocolo** de la lista y definiendo el **rango de puertos** en el que la aplicación del juego recibe las conexiones (consulte la documentación de instalación del juego). Haga clic en el botón `Confirmar`{.action} para guardar. La configuración de las reglas del *firewall game* ha finalizado. |

Las reglas de protección del *Firewall Game* no deben solaparse en términos de puertos definidos.

Puede seleccionar la opción **Otros** para las aplicaciones alojadas en puertos específicos (para los que no hay protección disponible) con el fin de permitir el paso del tráfico de cliente. Tenga en cuenta que no hay mucha seguridad adicional para el tráfico que coincide con la regla **Otros** y debe utilizarse con precaución.

Además, le recomendamos que configure la regla **"Default policy = DROP"** en cada IP que apunte hacia su servidor Game. Esta opción permitirá que la protección anti-DDoS Game elimine todo el tráfico que no se ajuste a las reglas establecidas, es decir, que todas las aplicaciones de juego de la lista estarán protegidas y que ninguna otra conexión podrá llegar a su servidor.

> [!warning]
> La protección anti-DDoS Game se aplica después de las reglas establecidas en el [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network). Para que ambos funcionen correctamente, el Edge Firewall Network no puede ser demasiado estricto y debe pasar el tráfico a la protección anti-DDoS Game.
>

### Menciones específicas para determinados juegos

#### Ark Survival Evolved

- **Ark Survival Evolved**: Motor de protección básico.
- **Ark Survival Evolved v.311.78**: Motor de protección actualizado, añadido a la 3ª generación de servidores Bare Metal Game (versión 2024).

#### Counter Strike 2

- **Counter-Strike 2**: Nuevo motor de protección añadido en la tercera generación de servidores Bare Metal Game (versión 2024).

#### FiveM

- **FiveM** es un modo multijugador Grand Theft Auto V de Cfx.re reconocido ahora por el editor de juegos Rockstar. Hemos añadido la compatibilidad con FiveM a la 3ª generación de servidores Bare Metal Game (versión 2024).

#### Rust

- **Rust** es compatible con un perfil de protección dedicado en todas las generaciones de servidores Bare Metal Game. Tenga en cuenta que hemos actualizado este perfil de protección (es decir, hemos añadido la compatibilidad con las cookies RakNet) para la 3ª generación de servidores Bare Metal Game (versión 2024).
Más información sobre el alojamiento Rust en los servidores de OVHcloud [aquí](/links/bare-metal/bare-metal/game-rust).

#### Minecraft

Minecraft es compatible con los siguientes perfiles:

- **Java Minecraft**: Debería ser la mejor solución para todas las versiones de Java Minecraft. Protege el protocolo Minecraft Query y está configurado para el tráfico TCP. Se añadió en 2024, pero también está disponible para las generaciones anteriores de servidores Bare Metal Game. Atención si hay otros juegos UDP alojados en la misma IP.
- **Minecraft Query**: Protección general del protocolo Minecraft Query.
- **Minecraft Bedrock**: Protección Minecraft Bedrock (con soporte para cookies RakNet), añadida a la 3ª generación de servidores Bare Metal Game (versión 2024).
- **Minecraft Pocket Edition**: protección PE/Bedrock Minecraft.

#### Valheim

- **Valheim**: Nuevo motor de protección, añadido a la tercera generación de servidores Bare Metal Game (versión 2024).

> [!primary]
> Si aloja un servicio más grande con uno de los juegos compatibles, pero sigue viendo falsos positivos de los sistemas de infraestructura anti-DDoS, póngase en contacto con nuestro equipo de soporte mediante el [Centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help) con todos los detalles necesarios para mejorar el perfil de la aplicación.
>

### Uso de direcciones Additional IP con servidores dedicados Game

Las direcciones Additional IP ofrecen una forma flexible de gestionar sus aplicaciones en varios servidores o servicios alojados. Añaden valor a su infraestructura de alojamiento de juegos, ya que permiten gestionar la escalabilidad o las acciones de failover sin que ello afecte a las direcciones IP públicas. Las direcciones Additional IP también permiten definir diferentes localizaciones geográficas de IP o incluso explotar su propio bloque de IP (utilizando el servicio BYOIP) para los servidores Game de OVHcloud.

Aunque las direcciones Additional IP permiten una cierta flexibilidad, hay situaciones que requieren una atención adicional.

#### Configuración por IP específica para la generación de un servidor Game

Para ofrecer la mayor flexibilidad de configuración, es posible establecer diferentes reglas de protección del juego en diferentes direcciones Additional IP que apunten hacia el mismo servidor Bare Metal Game.  
El número máximo de reglas y la configuración de protección disponibles se establecen por dirección IP, pero son específicos de la generación de servidores Bare Metal Game específicos detrás del firewall.

Se pueden observar diferencias entre los servidores Game más recientes (3ª generación de servidores Game Bare Metal, lanzada en 2024) y los servidores Game más antiguos (generaciones anteriores, generalmente identificados como RISE-GAME o SYS-GAME).

###### Comprobación de las protecciones de juegos admitidas

Todos los protocolos de protección anti-DDoS Game admitidos para un servidor específico están visibles en la página de configuración `GAME firewall`{.action} para cualquier dirección IP que apunte a ese servidor, en el menú desplegable `Game protocol`{.action}:

| ![control-panel-game-protocols](images/game_protocols_list.png) |
|:--:|
| Lista de protocolos de protección compatibles |

Si prefiere la automatización, los detalles del protocolo pueden recuperarse mediante [la APIv6 de OVHcloud](/pages/manage_and_operate/api/first-steps):

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/game/{ipOnGame}
>

Ejemplo de respuesta API:

```python
{
    ipOnGame: "1.2.3.4"
    maxRules: 30
    state: "ok"
    firewallModeEnabled: true
  - supportedProtocols: [
        "arkSurvivalEvolved"
        "arma"
        "gtaMultiTheftAutoSanAndreas"
        "gtaSanAndreasMultiplayerMod"
        "hl2Source"
        "minecraftPocketEdition"
        "minecraftQuery"
        "mumble"
        "other"
        "rust"
        "teamspeak2"
        "teamspeak3"
        "trackmaniaShootmania"
    ]
}
```


#### Traslado de una Additional IP entre servidores

Aunque una configuración de conjunto de reglas estática puede ser explícita, las acciones de movimiento de direcciones Additional IP pueden requerir algunos comentarios.

- **Traslado de una IP de antigua generación a una nueva generación de servidores Bare Metal Game:**
    - El proceso es transparente y se conservarán todas las reglas de protección y los parámetros IP.

- **Traslado de una IP de nueva generación a una antigua generación de servidores Bare Metal Game:**
    - Si el servidor de destino admite menos reglas de protección que el servidor de origen, se mostrará un error y la acción se detendrá.
    - De lo contrario:
        - Se conservan las reglas de compatibilidad con versiones anteriores (el nombre del perfil de protección debe ser igual).
        - Se eliminarán las reglas no admitidas en el servidor de destino.

- **Traslado de una IP de un servidor Bare Metal Game a otros servidores o servicios:**
    - Se eliminarán todas las reglas de protección anti-DDoS Game aplicadas a la IP, ya que no son compatibles fuera de los servidores Bare Metal Game.


## FAQ

/// details | **¿Puedo utilizar la protección anti-DDoS Game en otras gamas distintas de los servidores Bare Metal Game?**

No, la protección anti-DDoS Game solo está disponible para nuestros servidores dedicados Bare Metal Game.

///

/// details | **¿Cómo puedo asegurarme de que la automatización funcione para una Additional IP entre una nueva y una antigua generación de servidores Bare Metal Game?**

Puede limitar sus reglas de protección a 30 por IP o configurar sus scripts de automatización para que puedan eliminar y añadir reglas antes y después de mover una IP hacia otro servidor. Le recomendamos que utilice la última generación de servidores Bare Metal Game, ya que se entregan con numerosas mejoras.

///

/// details | **¿Puedo desactivar la protección anti-DDoS Game?**

Es posible, pero no se recomienda. Puede hacerlo eliminando todas las reglas de protocolo de juego de la configuración y desactivando la entrada `Default policy: DROP`.

///

/// details | **Mi juego no está en la lista de protocolos compatibles, ¿qué puedo hacer?**

Puede proponer sus necesidades en nuestro [roadmap de las soluciones de infraestructura en GitHub](https://github.com/orgs/ovh/projects/16/views/14). Esto nos ayudará a determinar la prioridad de las siguientes características que se desarrollarán.

///

/// details | **Después de configurar el juego con los puertos adecuados y la directiva predeterminada que se va a eliminar, sigo recibiendo ataques que afectan a mi servidor Game. ¿Qué hago?**

Deberá compartir volcados relevantes del tráfico de red como ejemplos de tales ataques (archivo *.pcap*) para solicitar el ajuste de la protección de su perfil. Para ello, conéctese a nuestro [Centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help).

///


## Más información <a name="go-further"></a>

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra [comunidad de usuarios](/links/community).