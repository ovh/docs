---
title: "O essencial para começar com o Public Cloud"
excerpt: "Descubra as noções de base úteis para começar no ambiente Public Cloud"
updated: 2024-04-24
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O Public Cloud da OVHcloud é um ambiente que reúne um grande número de produtos cloud, disponíveis em todo o mundo, compatíveis entre si e cuja utilização pode ser prevista por um período curto (uma hora, alguns dias..) ou mais longo (vários meses, anos).

A disponibilização é quase instantânea e a faturação é diretamente adaptada à sua utilização, o que traz simplicidade e flexibilidade às suas práticas.

Este guia permite-lhe descobrir as noções essenciais para uma boa exploração dos produtos.
<br>Apresentamos-lhe em primeiro lugar uma [abordagem global do Public Cloud](#global-approach) e algumas noções gerais, e depois uma [abordagem concreta](#concrete-approach) com os benefícios fornecidos pelo Public Cloud, bem como as primeiras etapas de arranque.
<br>Enfim, propomos-lhe recursos para [ir mais longe](#gofurther).

Se já está familiarizado com estes conceitos, pode continuar a descoberta do Public Cloud da OVHcloud através dos seguintes guias:

- [Abrir uma conta OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- [Criar o seu primeiro projeto Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project)
- [Familiarizar-se com a interface Public Cloud](/pages/public_cloud/compute/03-public-cloud-interface-walk-me)
- [Criar a primeira instância](/pages/public_cloud/compute/public-cloud-first-steps)
- [Gerir as quotas](/pages/public_cloud/compute/increasing_public_cloud_quota)

## Abordagem global <a name="global-approach"></a>

### Um ecossistema de recursos a pedido

Todos os produtos disponíveis no Public Cloud (como os servidores, os clusters Kubernetes, os volumes de disco...) formam um ecossistema.
<br>Cada elemento corresponde a uma função e responde a uma necessidade, podendo ser utilizado isoladamente ou em complemento de outros elementos do catálogo.
<br>Por exemplo, uma instância (um servidor on demand) pode ser utilizada como complemento de elementos de armazenamento como o object storage. Se a sua aplicação necessita de uma base de dados, existe também um elemento para responder a esta necessidade.

Todos estes componentes estão integrados num ambiente para facilitar a implantação e a utilização desses recursos.
<br>Assim, é muito fácil iniciar recursos como uma instância ou um cluster Kubernetes. A implementação faz-se em alguns segundos.
<br>Também pode eliminar estes recursos algumas horas mais tarde e assim pagar apenas este tempo de utilização. É o que chamamos de "recursos a pedido".

![Public Cloud Ecosystem](images/ecosystem.png){.thumbnail}

### Recursos disponíveis em todo o lado

O catálogo Public Cloud oferece recursos de baixo nível como instâncias ou redes privadas ou recursos geridos nas camadas mais elevadas, como uma base de dados.
<br>Estes recursos são fornecidos como um serviço, no sentido em que o utilizador não precisa de comprar os elementos, utiliza-os durante algum tempo (como uma locação) e paga simplesmente o preço correspondente ao tempo de utilização.
<br>A maior parte das vezes, a utilização destes recursos não é um compromisso com uma duração (exceto no caso de uma faturação mensal destinada a reduzir os seus custos).

Quando o recurso proposto é "gerido", fala-se geralmente de um recurso nas camadas altas, já próximo da aplicação, como um cluster de base de dados, um cluster Kubernetes, uma solução de treino de modelo para a IA...
<br>Por "gerida" entende-se o facto de a plataforma ser implementada, monitorizada, mantida (upgrade) pela OVHcloud. Não precisa de se preocupar com toda esta gestão e beneficia diretamente do serviço.

Estes recursos estão disponíveis nos nossos diferentes datacenters espalhados pelo mundo. A OVHcloud oferece serviços Public Cloud na Europa, América do Norte, Ásia e Oceânia.
<br>É possível iniciar um recurso em cada um destes locais selecionando apenas a localização pretendida.

![Public Cloud geolocation](images/geolocation.png){.thumbnail}

### Um fornecedor de serviços cloud num mercado maduro

O Public Cloud da OVHcloud posiciona-se ao lado de fornecedores cloud bem conhecidos como AWS (Amazon Web Services), GCP (Google Cloud Platform), Azure (da Microsoft) ou ainda Alibaba Cloud. A nossa oferta distingue-se por tarifas particularmente vantajosas [e pela utilização](https://www.ovhcloud.com/pt/public-cloud/prices/) das APIs standard, que permitem que os nossos utilizadores sejam livres de mudar, sem aderência a uma ou outra tecnologia proprietária.

## Abordagem concreta <a name="concrete-approach"></a>

### Casos práticos: alguns exemplos concretos e suas vantagens

- **Mais flexibilidade**: *Tem uma aplicação que funciona atualmente num alojamento clássico como um (ou vários) servidor dedicado e deseja mais flexibilidade na utilização.* A utilização das instâncias Public Cloud é muito semelhante à de um servidor dedicado, mas oferece a possibilidade de redimensionar facilmente o seu servidor, seguir as evoluções de hardware, adicionar espaço de armazenamento a quente, configurar a arquitetura de rede como o desejar, programar backups ou clonar o seu servidor em algumas ações simples.
- **Mais escalabilidade**: *Está a desenvolver uma aplicação cloud nativa e deseja uma infraestrutura capaz de suportar grandes variações de carga.* Os clusters Kubernetes podem reagir e adaptar-se dinamicamente em função da carga. Podem adicionar nós ao cluster de forma automática quando a pressão na infraestrutura aumenta.
- **Mais controlo dos custos**: *Tem uma aplicação em produção sujeita a sazonalidades e deseja transferir a carga de cálculo no momento dos picos, sem manter custos de infraestrutura importantes ao longo de todo o ano.* As instâncias faturadas à hora podem efetuar as tarefas em pouco tempo e ser destruídas uma vez que as necessidades tenham passado.
- **Mais serenidade**: *Necessita de uma base de dados mas não deseja gerir o motor e assegurar a sua manutenção.* As bases de dados geridas estão disponíveis em alguns segundos e são totalmente geridas pela OVHcloud. Pode utilizar diretamente o serviço de base de dados sem ter de se preocupar com a instalação, a manutenção, as atualizações..

### A utilização: uma interface simples e API standard

Existem várias formas de manipular os recursos Public Cloud. Quer descubra os produtos Public Cloud ou seja um utilizador avançado, a utilização é simples.

- Para descobrir os produtos, a Área de Cliente acompanha-o na criação de recursos ao levá-lo a escolher o desempenho do produto, a sua localização, a personalização que deseja ou ainda outros parâmetros como o seu modo de faturação.

- Para automatizar as implementações e industrializar as suas arquiteturas, pode também utilizar as ferramentas do mercado ao ligar-se diretamente às API standard como a API S3, as API da OpenStack ou mesmo a Kubernetes.

### Início: tomada na mão

#### O projeto

Para começar, precisará de uma [conta de cliente OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).

De seguida, terá de [criar um projeto Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project). Um projeto é um ambiente que vão dedicar a um contexto.

Por exemplo, pode optar por separar os seus ambientes de teste e de produção em dois projetos.
<br>Ou pode utilizar diferentes projetos para as suas diferentes aplicações (site público, loja online, aplicação profissional, gestão de documentos, etc..).

Para iniciar um projeto, terá necessariamente de registar um método de pagamento aquando da criação do projeto.

#### A faturação

> [!primary]
> Especificamente para as instâncias *Virtual Machines*, o contador de faturação começa quando uma instância atinge o estado `ACTIVE` (apresentado como `Ativada` no espaço cliente da OVHcloud). Por outras palavras, o período durante o qual a instância se encontra no estado `BUILD` não é faturado.
>

Com o seu método de pagamento registado, este servirá para debitar o montante calculado para a sua [faturação no final do mês](/pages/public_cloud/compute/analyze_billing). Este cálculo é feito com base no tempo de utilização de cada recurso, em função do preço dos recursos.

Por exemplo: Neste mês, utilizou 1 instância d2-8 durante todo o mês e 3 instâncias b2-60 que contabilizam 32 horas.
<br>A sua fatura será de 720 (número de horas por mês) x 0,0325€ + IVA (preço por hora de um d2-8) + 32 x 0,4589€ + IVA (preço por hora de um b2-60). Ou seja, 38,08€ + IVA.

#### Gestão das quotas

Poderá ser levado a gerir a questão das quotas.
<br>O limite Public Cloud define o máximo de recursos que pode iniciar. Depende de determinados parâmetros (antiguidade da conta, faturas anteriores...).
<br>Estas quotas são atribuídas por localização (região no sentido OpenStack). Por isso, é possível que atinja o máximo de recursos possíveis no seu projeto e que seja necessário [aumentar estas quotas](/pages/public_cloud/compute/increasing_public_cloud_quota).

![Public Cloud quota](images/quota.png){.thumbnail}

#### Gestão dos utilizadores

Pode ter necessidade de gerir vários utilizadores que irão intervir no seu projeto.
<br>Terá então duas possibilidades:

- Se deseja utilizar as APIs OpenStack ou S3, ou a interface Horizon, terá de [criar utilizadores](/pages/public_cloud/compute/create_and_delete_a_user) para isso. Os utilizadores podem ter permissões limitadas para proteger os perímetros de ação.
- Se não tem necessidade de aceder às API ou ao Horizon, pode [associar uma outra conta de cliente OVHcloud](/pages/public_cloud/compute/delegate_projects) em complemento ao seu projeto.

## Quer saber mais? <a name="gofurther"></a>

Veja aqui alguns recursos gerais que o ajudarão no arranque do Public Cloud:

|Documentação|Detalhes|
|---|---|
|[FAQ](/pages/public_cloud/compute/faq_pci)|As questões mais frequentes sobre o Public Cloud.|
|[Léxico](/pages/public_cloud/compute/introduction_about_instances)|Os conceitos e definições de que necessitará para avançar.|
|[Disponibilidade dos serviços por localização](https://www.ovhcloud.com/pt/public-cloud/regions-availability/)|Os quadros de disponibilidade dos serviços através das diferentes localizações.|
|[Muelog das imagens](/pages/public_cloud/compute/image_changelog)|Alterações nas imagens de sistema disponíveis publicamente.|

Na prática, pode consultar os seguintes manuais:

|Documentação|Detalhes|
|---|---|
|[Criar a primeira instância](/pages/public_cloud/compute/public-cloud-first-steps)|Primeiro guia prático para iniciar um servidor cloud a partir da Área de Cliente OVHcloud.|
|[Utilização de uma chave SSH](/pages/public_cloud/compute/creating-ssh-keys-pci)| Para se ligar a uma instância Linux, terá de passar por uma ligação SSH, este manual explica-lhe a utilização.|
|[Configuração da rede privada](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack)|Na OVHcloud, as redes privadas são suportadas pela tecnologia vRack. Este guia acompanha-o nesta implementação.|
|[Associar um disco suplementar a uma instância](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)|Este manual fornece instruções para adicionar espaço de armazenamento adicional à primeira instância.|
|[Aceder à interface Horizon](/pages/public_cloud/compute/introducing_horizon)|A interface Horizon da OpenStack permite algumas ações avançadas. Aqui está como conectá-lo.|
|[Criar um cluster Kubernetes](/pages/public_cloud/containers_orchestration/managed_kubernetes/creating-a-cluster) (EN)|Este guia acompanha-o passo a passo na criação do seu primeiro cluster Kubernetes.|
|[Configurar um Additional IP](/pages/public_cloud/public_cloud_network_services/getting-started-04-configure-additional-ip-to-instance)|Os endereços Additional IP permitem-lhe transferir o tráfego de uma instância para outra, este guia explica-lhe como configurar isto.|
|[Usando a interface Horizon](/pages/public_cloud/compute/introducing_horizon)|Horizon é a interface clássica do OpenStack, e este guia explicará como acessá-la.|
|[Instalação da CLI OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)|OpenStack pode também ser utilizado em linha de comandos: eis como instalar as ferramentas.|

Uma das grandes vantagens de utilizar tecnologias standard e abertas, como OpenStack ou Kubernetes, é beneficiar de toda a documentação já disponível.

|Documentação|Detalhes|
|---|---|
|[OpenStack CLI](https://docs.openstack.org/python-openstackclient/stein/#using-openstackclient) (EN)|A documentação exaustiva do incontornável cliente em linha de comandos 'openstack'. Documentação para a versão Stein, consulte a [tabela de disponibilidade](https://www.ovhcloud.com/pt/public-cloud/regions-availability/) para saber quais os serviços disponíveis.|
|[APIs OpenStack](https://docs.openstack.org/stein/api/) (EN)|A documentação exaustiva das API do OpenStack. Documentação para a versão Stein, consulte a [tabela de disponibilidade](https://www.ovhcloud.com/pt/public-cloud/regions-availability/) para saber quais os serviços disponíveis.|
|[End user Documentation](https://docs.openstack.org/stein/user/) (EN)|A documentação completa para o utilizador do OpenStack, em versão Stein.|
|[Desenvolver documentação](https://developer.openstack.org/) (EN)|A documentação para os programadores que desejem ligar a sua aplicação às API do OpenStack utilizando as bibliotecas/SDK disponíveis.|
|[Kubernetes CLI Overview](https://kubernetes.io/docs/reference/kubectl/overview/) (EN)| A documentação do incontornável cliente em linha de comandos 'kubectl'.|
|[Kubernetes APIs Overview](https://kubernetes.io/docs/reference/using-api/) (EN)| A documentação da API de Kubernetes, útil para obter uma visão de conjunto das possibilidades.|

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
