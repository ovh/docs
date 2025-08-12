---
title: FAQ VPS OVHcloud
updated: 2025-08-07
---

## FAQ VPS

### O que é e para que serve um VPS?

Um servidor privado virtual (VPS) permite alojar websites (lojas online, sites de e-commerce, conteúdos, media) e aplicações de software (portais, Extranet, soluções de trabalho colaborativo, wikis, CRM). Ao contrário do alojamento partilhado, os dados são isolados numa máquina virtual dedicada ao utilizador.

Os nossos VPS são o compromisso ideal entre o alojamento web e um servidor físico, combinando a fiabilidade e o desempenho de um servidor dedicado, sem as limitações associadas ao hardware.

### Qual a melhor opção: VPS ou alojamento web?

Depois de um alojamento web, o VPS é a evolução lógica como solução de alojamento. Os VPS oferecem mais possibilidades e uma maior liberdade em matéria de configuração, acesso e funcionalidade (root, Apache, PHP.init). Também poderá instalar um certificado SSL ou qualquer outro software à sua escolha.

Neste sentido, recomendamos que preste especial atenção no momento de escolher o seu VPS, uma vez requererá uma configuração adaptada às necessidades das aplicações alojadas assim como o crescimento da sua atividade.

### Quais são as vantagens de um VPS relativamente a um servidor dedicado?

Os VPS têm a vantagem de o libertar da gestão de hardware, como o acompanhamento do estado dos discos rígidos, da memória viva (RAM) e da CPU. Esta solução é adaptada à maior parte das utilizações web, em projetos de dimensão controlada.  
Um servidor dedicado é a solução ideal para os utilizadores que pretendem gerir eles próprios a paret de hardware, construir arquiteturas mais elaboradas, criar uma infraestrutura que inclua uma rede privada (vRack) ou ainda implementar soluções complexas diferentes dos serviços web.

Em geral, quando a atividade web dos clientes cresce, estes só evoluem para soluções de servidores dedicados e Public Cloud, já que oferecem infraestruturas mais complexas e flexíveis, capazes de se adaptar a um forte crescimento.

### Quais são as diferenças entre VPS e Public Cloud?

O VPS é uma solução adaptada aos ambientes de pré-produção e produção, que não requerem desempenhos constantes.  
O Public Cloud da OVHcloud oferece uma infraestrutura multiservidor com uma alta disponibilidade das máquinas. Além disso, o vRack (uma rede privada) também está disponível com esta solução.

### Como escolher o meu VPS OVHcloud?

Para escolher um VPS adaptado às suas necessidades, convidamo-lo a verificar os seguintes aspetos:

- a quantidade de recursos necessária (processadores, memória, espaço em disco, largura de banda...) ;
- o sistema operativo necessário (Linux ou Windows);
- os requisitos técnicos essenciais para o bom funcionamento da aplicação (por exemplo, uma base de dados requer velocidade de leitura/escrita).

Isto permitir-lhe-á escolher entre as nossas soluções VPS:

- **VPS Starter**: máquina de entrada de gama para testar a nossa oferta (com uma distribuição Linux apenas);
- **VPS Value, Essential e Comfort**: ideais para o alojamento de websites, de serviços de e-commerce ou de sistemas de monitorização;
- **VPS Elite**: adaptado aos sites de e-commerce e aplicações mais exigentes em recursos CPU e memória.
- **VPS Limited Edition** (quantidades limitadas): estes VPS oferecem desempenhos acrescidos, um trunfo importante para o alojamento de sites complexos, de aplicações exigentes em recursos ou mesmo de servidores de jogo. Esta oferta é válida até ao esgotamento das existências.

> [!primary]
> Pode fazer evoluir uma VPS Limited Edition para outra VPS da mesma gama mas, por razões técnicas, é impossível fazer evoluir uma VPS Limited Edition para uma VPS de outra gama (Starter, Value, Essential ou Comfort).

### Quem pode usar um VPS?

Gerir um VPS requer conhecimentos básicos de administração de servidores. Estas noções são essenciais para gerir o sistema operativo (Linux ou Windows) instalado na máquina e configurar as aplicações. Acha que precisa de um VPS, mas considera não possuir as competências necessárias? Convidamo-lo a contactar um dos nossos [parceiros](/links/partner).

Se deseja usufruir de recursos garantidos sem conhecimentos em administração de servidores, aconselhamos os nossos [alojamentos web Performance](/links/web/hosting-performance-offer).

### Como aceder ao meu VPS?

Pode ligar-se remotamente ao seu VPS graças aos identificadores fornecidos por e-mail após a entrega do serviço.  
O método de ligação depende dos sistemas operativos utilizados.

Para mais informações, consulte o manual ["VPS - primeira utilização"](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).

### É possível alojar vários websites num VPS?

Sim. Um VPS pode ser particionado e organizado em função das suas necessidades. Assim, poderá alojar vários sites ou projetos, atribuindo a cada um deles um espaço privado com um determinado volume. Para simplificar estas operações, pode instalar um painel de gestão de websites, como Plesk ou cPanel.

### São realizados backups do meu VPS?

É aconselhável implementar uma estratégia de backup adequada, de acordo com a sensibilidade dos seus dados.  
Visite a nossa [página web da VPS](/links/bare-metal/vps-options) para saber mais sobre as opções disponíveis.

### Como proteger o meu VPS?

Por predefinição, o VPS é fornecido "nu", não existindo nenhuma configuração de segurança neste último. Portanto, esta é a primeira coisa que têm de fazer quando recebem.  
Para isso, não hesite em consultar o guia ["Proteger um VPS"](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps).

### Qual é a largura de banda atribuída ao meu VPS? Ela está garantida?

A largura de banda apresentada na página das nossas ofertas é garantida. Trata-se da velocidade mínima que lhe é atribuída.

### Qual é o SLA aplicado ao meu VPS?

No conjunto das gamas VPS, a OVHcloud propõe um SLA de 99,9%.

### Como aceder ao backup storage a partir de um endereço de IP diferente do meu serviço? <a name="backupstorage"></a>

O acesso ao seu backup FTP pode ser restringido ao serviço a que está associado através da Área de Cliente OVHcloud.

Para autorizar endereços IP suplementares a partir dos quais deseja aceder ao Backup Storage, pode utilizar a API OVHcloud.  
Isto permite-lhe recuperar os seus backups de dados de um serviço diferente através de diferentes protocolos (FTP, NFS, CIFS).

> [!warning]
> Apenas os endereços IP OVHcloud podem ser autorizados.
>

Aceda à [consola API OVHcloud](/links/api) com os identificadores da sua conta de cliente e utilize a seguinte chamada:

> [!api]
>
> @api {v1} /vps POST /vps/{serviceName}/backupftp/access
>

Modifique as configurações da seguinte forma:

- `serviceName`: indique o nome interno do seu VPS (`vps-x11x11xyy.vps.ovh.net`).
- `cifs`: defina este parâmetro como `true` se utilizar este protocolo.
- `ftp`: defina este parâmetro como `true` se utilizar este protocolo.
- `ipBlock`: indique o endereço IP que terá acesso, sob a forma `203.0.113.100/32`.
- `nfs`: defina este parâmetro como `true` se utilizar este protocolo.

Clique no botão `EXECUTE`{.action}.

Para verificar se o seu endereço IP está corretamente autorizado, utilize a seguinte chamada:

> [!api]
>
> @api {v1} /vps GET /vps/{serviceName}/backupftp/access
>


## Quer saber mais?

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).