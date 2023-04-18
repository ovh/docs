---
title: 'Configurar o vRack entre o Public Cloud e um servidor dedicado'
excerpt: 'Saiba como configurar uma rede privada entre uma instância Public Cloud e um servidor dedicado'
updated: 2021-10-15
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 20/02/2023**

## Sumário

O [vRack](https://www.ovh.pt/solucoes/vrack/){.external} da OVHcloud é uma rede privada que lhe permite configurar o direcionamento entre dois ou mais [servidores dedicados](https://www.ovhcloud.com/pt/bare-metal/) da OVHcloud. Além disso, permite-lhe também adicionar [instâncias Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) à sua rede privada para criar uma infraestrutura de recursos físicos e virtuais.

**Este manual explica-lhe como configurar uma rede privada entre uma instância Public Cloud e um servidor dedicado.**


## Requisitos

* Ter criado uma [instância Public Cloud](/pages/platform/public-cloud/public-cloud-first-steps)
* Ter ativado um serviço [vRack](https://www.ovh.pt/solucoes/vrack/){.external}
* Dispor de um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/) compatível com o vRack
* Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)
* Um intervalo de endereços IP privados à sua escolha

> [!warning]
> Esta funcionalidade pode estar indisponível ou limitada nos [servidores dedicados **Eco**](https://eco.ovhcloud.com/pt/about/).
>
> Para mais informações, consulte o nosso [comparativo](https://eco.ovhcloud.com/pt/compare/).

## Instruções

### Adicionar um projeto Public Cloud ao vRack

Depois de configurar o seu [projeto Public Cloud](/pages/platform/public-cloud/create_a_public_cloud_project), deverá adicioná-lo ao vRack. Isto pode ser feito de duas formas:

1. Ao encomendar um serviço vRack, caso não tenha nenhum, este produto é gratuito e a disponibilização demorará alguns minutos.

No menu `Bare Metal Cloud`{.action}, clique no botão `Encomendar`{.action}. Neste menu, clique na opção `vRack`{.action}.

![Encomendar o vrack](images/orderingvrack.png){.thumbnail}

Será reencaminhado para outra página para validar a encomenda, a operação demorará alguns minutos.

Uma vez o serviço vRack entregue na sua conta, pode agora adicionar o seu projeto.

Clique no menu `Bare Metal Cloud`{.action}, depois em `Network`{.action} e depois em `vRack`{.action}. Selecione o seu vRack na lista.

Na lista dos serviços elegíveis, selecione o projeto que deseja adicionar ao vRack e clique no botão `Adicionar`{.action}.

![adicionar um projeto ao vrack](images/addprojectvrack.png){.thumbnail}

<ol start="2">
  <li>Ao <a href="/pages/platform/network-services/getting-started-07-creating-vrack#etapa-1-ativar-e-gerir-um-vrack">criar ou adicionar um serviço vRack existente</a> na secção Public Cloud.</li>
</ol>

### Integrar uma instância no vRack

Existem duas situações:

- A instância ainda não existe.
- A instância já existe e deve adicioná-la ao vRack.

#### Caso de uma nova instância

Se precisar de ajuda, consulte o guia: [Criar uma instância Public Cloud](/pages/platform/public-cloud/public-cloud-first-steps#3o-passo-criacao-de-uma-instancia){.external}. Ao criar uma instância, poderá especificar, na etapa 4, uma rede privada na qual poderá integrar a sua instância. Escolha, no menu pendente apresentado, o seu vRack criado anteriormente.

#### Caso de uma instância já existente

Pode associar uma instância existente a uma rede privada. Para mais informações, consulte [esta secção](/pages/platform/network-services/getting-started-07-creating-vrack#caso-de-uma-instancia-existente_2) do guia correspondente.

### Criar uma VLAN ID

Para que os dois serviços possam comunicar entre si, devem ser « etiquetados » com a mesma **VLAN ID**. 

#### Utilização da VLAN ID por predefinição

Nos servidores dedicados, por predefinição, está na VLAN **0**. Se deseja utilizar este ID, será necessário « etiquetar » a rede privada associada à sua instância com a VLAN **0**. Para o fazer, terá de passar pela [OVHcloud APIv6 (EN)](/pages/platform/network-services/getting-started-07-creating-vrack-apiv6/#step-3-creating-a-vlan-in-the-vrack_1).


> [!primary]
> No Public Cloud, define uma VLAN ID única por rede privada.
>
> Não pode definir a mesma VLAN ID em duas redes privadas diferentes.

#### Utilização de uma VLAN ID diferente

Se decidir utilizar uma VLAN ID diferente:

- A rede privada associada à instância Public Cloud deve ser « etiquetada » com este ID.
- No ficheiro de configuração de rede do servidor dedicado, a interface de rede privada deve ser « etiquetada » com esta identificação.

Neste caso, se selecionar a opção `Definir um ID de VLAN`, deverá selecionar um número de ID de VLAN entre 2 e 4000.

Se não selecionar esta opção, o sistema atribuirá um número de VLAN aleatório à sua rede privada.

> [!primary]
> 
> Ao contrário dos servidores dedicados, não é necessário « etiquetar » a VLAN directamente no ficheiro de configuração de rede da instância Public Cloud, depois de o ID da VLAN ser definido na Área de Cliente OVHcloud.
>

Por exemplo: se definiu a rede privada associada à sua instância com VLAN 2, a interface de rede privada do seu servidor dedicado deve ser « etiquetada » com VLAN 2. Para mais informações consulte o seguinte guia: [Criar várias VLAN no vRack](/pages/cloud/dedicated/creating-multiple-vlans-in-a-vrack).

### Configurar as interfaces de rede

De seguida, configure as interfaces de rede na nova instância Public Cloud e no seu servidor dedicado através deste guia: [Configurar vários servidores dedicados no vRack](/pages/cloud/dedicated/vrack_configuring_on_dedicated_server){.external}.

## Quer saber mais?
 
Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.