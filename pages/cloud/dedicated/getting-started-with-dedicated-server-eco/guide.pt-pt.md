---
title: 'Primeiros passos com um servidor dedicado Kimsufi, So You Start ou Rise'
slug: getting-started-dedicated-server-eco
routes:
    canonical: 'https://docs.ovh.com/pt/dedicated/primeiros-passos-servidor-dedicado/'
excerpt: 'Saiba como utilizar o seu novo servidor dedicado Kimsufi, So You Start ou Rise'
section: Introdução
order: 2
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em “Contribuir” nesta página.
>

**Última atualização: 14/03/2022**

## Objetivo

Um servidor dedicado é um servidor físico situado num dos nossos datacenters. Ao contrário das soluções de alojamento web (descritas como "partilhadas"), que são geridas tecnicamente pela OVHcloud, é totalmente responsável pela administração no seu servidor dedicado.

**Saiba como utilizar o seu novo servidor dedicado Kimsufi, So You Start ou Rise.**

## Requisitos

- Ter um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/) das gamas Kimsufi, So You Start ou Rise na sua conta OVHcloud.
- Estar conectado em SSH (acesso root) em Linux ou enquanto administrador em Windows.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

Quando o seu servidor dedicado for configurado pela primeira vez durante o processo de encomenda, pode selecionar o sistema operativo a instalar.

### Instalação ou reinstalação do servidor dedicado

Pode facilmente reinstalar o seu servidor e escolher outra imagem de OS na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). No separador `Informações gerais`{.action}, clique em `...`{.action} em frente do sistema operativo e, a seguir, em `Instalar`{.action}.

![Botão Reinstalar](images/reinstalling-your-server-00.png){.thumbnail}

No ecrã seguinte, selecione `Instalar a partir de um template OVH`{.action} ou `Instalar um dos seus templates`{.action} para utilizar um template de instalação.

Para poder instalar uma imagem personalizada no servidor, escolha a terceira opção `Instalar a partir de uma imagem personalizada`{.action}. Consulte o manual "[Utilizar a funcionalidade Bring Your Own Image](../bringyourownimage/)" para saber mais sobre os parâmetros desta funcionalidade.

> [!primary]
>
> Certos sistemas operativos ou plataformas proprietárias, como o Plesk ou o Windows, requerem licenças que geram custos suplementares. Pode comprar licenças [junto da OVHcloud](https://www.ovhcloud.com/pt/bare-metal/os/) ou junto de um revendedor externo. De seguida, deverá aplicar a sua licença no sistema operativo ou através da Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
>
> Pode gerir todas as licenças na secção `Bare Metal Cloud`{.action} sob `Licenças`{.action}. Nesta secção, também pode encomendar licenças ou adicionar licenças existentes através do botão `Ações`{.action}.
>

Clique em `Seguinte`{.action} para continuar.

![Seleção de templates](images/reinstalling-your-server-02.png){.thumbnail}

Depois de escolher `Instalar a partir de um template OVHcloud`{.action}, pode selecionar o sistema operativo nos menus pendentes.

![Seleção operacional](images/reinstalling-your-server-03.png){.thumbnail}

Se tiver de alterar o esquema de particionamento do seu sistema operativo, selecione a opção "Personalizar a configuração das partições" antes de clicar em `Seguinte`{.action}.

![Personalizar a configuração das partições](images/SSH_02.png){.thumbnail}

Depois de finalizar os ajustamentos, clique em `Seguinte`{.action} para aceder à página de resumo.

#### Adicionar uma chave SSH (facultativo)

Se instalar um sistema operativo GNU/Linux, pode adicionar a sua chave SSH à última etapa do processo de instalação.

![Personalizar a configuração da partição](images/SSH_03.png){.thumbnail}

Se uma chave SSH já estiver registada, aparecerá no menu pendente em "Chaves SSH" na parte inferior. Caso contrário, terá de adicionar uma na secção "Serviços".

Para isso, abra a barra lateral ao clicar no canto superior direito e utilize o atalho `Gestão dos serviços`{.action}.

![Personalizar a configuração da partição](images/SSH_13.1.png){.thumbnail}

Em "Os meus serviços", passe para o separador `Chaves SSH`{.action} e clique em `Adicionar uma chave SSH`{.action}.

![Personalizar a configuração da partição](images/SSH_14.png){.thumbnail}

Uma vez que se trata da instalação de um servidor dedicado, tenha o cuidado de selecionar "Dedicado" no menu pendente (compatível com um VPS também).

Na nova janela, introduza um ID (nome da sua escolha) e a própria chave (do tipo RSA, ECDSA ou Ed25519) nos campos correspondentes.

![Personalizar a configuração da partição](images/SSH_12.png){.thumbnail}

Para obter uma explicação detalhada sobre a geração de chaves SSH, consulte o nosso [guia](../criar-chaves-ssh-dedicadas/).

> [!warning]
>A OVHcloud fornece-lhe serviços pelos quais é responsável em termos de configuração e gestão. Assim, é responsável pelo seu bom funcionamento.
>
>Este guia foi concebido para o ajudar o mais possível nas tarefas mais comuns. No entanto, se encontrar dificuldades ou dúvidas relativamente à administração, utilização ou implementação dos serviços num servidor, recomendamos que contacte um fornecedor especializado.
>

### Ligação ao seu servidor

#### Linux

Uma vez terminada a instalação, receberá um e-mail com as instruções de acesso administrativo. Pode ligar-se ao seu servidor através de um terminal de comando ou com um cliente terceiro utilizando SSH, que é um protocolo de comunicação segura.

Para se ligar ao servidor, utilize os exemplos abaixo e substitua as informações de identificação pelos seus próprios identificadores (o endereço IP e o nome de referência do servidor são permutáveis).

**Exemplo com root:**

```bash
ssh root@IPv4_do_servidor
```

**Exemplo com um utilizador pré-configurado:**

```bash
ssh root@nome_de_referência_do_servidor
```

Para saber mais sobre SSH, consulte o nosso guia [Introdução ao SSH](../ssh-introducao/).

#### Windows

Uma vez terminada a instalação, receberá um e-mail com a sua palavra-passe de acesso administrador (root). Deve utilizar estas informações de identificação para se ligar ao servidor através de RDP (**R**emote **D**esktop **P**rotocol). Uma vez ligado, o Windows irá guiá-lo durante a instalação inicial.

Consulte também o nosso guia [Configurar uma nova instalação do Windows Server](https://docs.ovh.com/pt/dedicated/windows-first-config/).

### Reinicialização do seu servidor dedicado <a name="reboot"></a>

Pode ser necessário um reboot para aplicar configurações atualizadas ou para resolver um problema. Na medida do possível, faça o "soft reboot" do servidor através da seguinte linha de comando:

```bash
reboot
```

No entanto, pode efetuar um "hard reboot" a qualquer momento na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). No separador `Informações gerais`{.action}, clique em `...`{.action} em face de "Estado" na zona **Estado dos serviços** e, a seguir, em `Reiniciar`{.action} e `Validar`{.action} na janela contextual.

![Reiniciar](images/rebooting-your-server.png){.thumbnail}

### Segurança do seu servidor dedicado

Como explicado acima, o cliente é o administrador do seu servidor dedicado. Enquanto tal, é responsável pelos seus dados e pela sua segurança. Para saber mais sobre a segurança do seu servidor, consulte o nosso guia [Proteger um servidor dedicado](../proteger-um-servidor-dedicado/).

### Monitorização OVHcloud

Pode ativar ou desativar o monitoring de um servidor dedicado a partir do separador `Informações gerais`{.action} da sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). A opção situa - se na secção `Estado dos serviços`.

![monitoring](images/monitoring-your-server-alt.png){.thumbnail}

Se a **Monitorização** estiver `Ativado`, será alertado por e-mail cada vez que o servidor agir de forma inesperada. Pode desativar estas mensagens através do botão `...`{.action}.

Para mais informações sobre o sistema de monitorização, consulte [este manual](https://docs.ovh.com/pt/dedicated/monitoring-ip-ovh/).

### Configuração de rede

> [!primary]
>
> Tenha em conta que os endereços IP [suplementares](https://www.ovhcloud.com/pt/bare-metal/ip/) não são compatíveis com a gama **Kimsufi**.
>

#### Modo bridge IP

O modo bridge é a ação empreendida pelo equipamento de rede para criar uma rede agregada a partir de várias redes de comunicação ou de vários segmentos de rede. O modo bridge é distinto do roteamento, que permite que as redes comuniquem de forma independente, mantendo-se separadas.

Trata-se de uma configuração frequentemente utilizada no contexto da virtualização, para permitir que cada máquina virtual tenha o seu próprio endereço IP público.

Para mais informações sobre o modo bridge, consulte o nosso manual: [Modo bridge IP](../network-bridging/).

#### Alias IP

O modo alias IP associa dois endereços IP ou mais a uma interface de rede. Isto permite que o seu servidor estabeleça várias ligações a uma rede, cada uma delas com um objetivo diferente.

Para obter instruções detalhadas sobre a configuração do alias IP, consulte o manual [Configurar o endereço IP em alias](../network-ipaliasing).

#### Configuração IPv6

> [!primary]
>
> Os servidores da gama **Kimsufi** só dispõem de um endereço IPv4 e de um endereço IPv6. Os endereços serão configurados automaticamente aquando da instalação do sistema operativo.
>

Todos os servidores dedicados OVHcloud são entregues com um bloco /64 IPv6. Para utilizar os endereços deste bloco, deve introduzir modificações na configuração da rede. Consulte o nosso guia [Configuração IPv6](../rede-ipv6/).

### Modo rescue

Para todo o tipo de problema, a primeira etapa de reparação consiste em reiniciar o seu servidor em modo de rescue a partir da sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). É importante identificar os problemas do servidor neste modo, de forma a excluir os problemas relacionados com os softwares antes de contactar as nossas equipas de suporte.

Consulte o manual "[Ativar e utilizar o modo rescue](../rescue_mode/)".

### Acesso à ajuda do IPMI

> [!primary]
>
> Atenção, esta opção não está disponível para a gama **Kimsufi**.
>

A OVHcloud implementa todos os servidores dedicados com uma consola IPMI (Intelligent Platform Management Interface) que é executada no seu browser ou a partir de uma applet Java, e permite-lhe aceder diretamente ao seu servidor, mesmo que não tenha uma ligação de rede. Isto faz dele uma ferramenta útil para resolver problemas que possam ter colocado o seu servidor fora da linha.

Para mais informações, consulte o nosso manual "[Utilização do IPMI com servidores dedicados](../usar-ipmi-servidores-dedicados/)".

### Backup Storage

> [!primary]
>
> Atenção, esta opção não está disponível para a gama **Kimsufi**.
>

Os servidores dedicados da OVHcloud incluem um espaço de armazenamento com controlo de acesso e fornecido como opção gratuita. É preferível utilizá-la como opção de backup complementar se o próprio servidor sofrer uma perda de dados.

Para ativar e utilizar a opção Backup Storage, consulte [este guia](../servicos-backup-storage/).

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
