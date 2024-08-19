---
title: "Primeiros passos com um servidor dedicado Kimsufi, So You Start ou Rise"
excerpt: "Descubra como gerir um servidor dedicado na sua Área de Cliente e como começar com a configuração e a segurança de um servidor Kimsufi, So You Start ou Rise"
updated: 2024-04-10
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em “Contribuir” nesta página.
>

## Objetivo

Um servidor dedicado é um servidor físico ("bare metal") situado num dos nossos datacenters. Ao contrário das ofertas de alojamento web (também chamadas "shared hosting"), que são tecnicamente geridas pela OVHcloud, é inteiramente responsável pela administração do seu servidor dedicado.

**Este guia fornece-lhe todas as informações necessárias aos seus primeiros passos com um servidor dedicado Kimsufi, So You Start ou Rise.**

## Requisitos

- Ter um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/) das gamas Kimsufi, So You Start ou Rise na sua conta OVHcloud.
- Estar conectado em SSH em Linux ou enquanto administrador em Windows.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

### Índice

- [Instalação ou reinstalação de um sistema operativo](#install)
- [Ligação ao seu servidor](#connect)
- [Reinicialização do seu servidor dedicado](#reboot)
- [Segurança do seu servidor dedicado](#secure)
- [Monitorização OVHcloud](#monitoring-server)
- [Configuração de rede](#network)
- [Modo rescue](#rescue)
- [Acesso à ajuda do IPMI](#console)
- [Backup Storage](#backup)

<a name="install"></a>

### Instalação ou reinstalação de um sistema operativo

> [!success]
>
> Encontre mais informações sobre os sistemas operativos dos servidores em [nossa página web](https://www.ovhcloud.com/pt/bare-metal/os/).
>

Pode facilmente reinstalar o seu servidor ou escolher outra imagem de SO a instalar na sua [Área de Cliente OVHcloud](/links/manager). No separador `Informações gerais`{.action}, clique em `...`{.action} em frente do sistema operativo e, a seguir, em `Instalar`{.action}.

![Botão Reinstalar](images/reinstalling-your-server-01.png){.thumbnail}

Na nova janela, selecione uma das opções de instalação:

- `Instalar a partir de um template OVHcloud`{.action}: pode selecionar o sistema operativo e personalizar a configuração do seu servidor.
- `Instalar um dos seus templates`{.action}: para poder aplicar um template personalizado, deve ter previamente registado, pelo menos, uma configuração de servidor. Para isso, é necessário selecionar a opção "Registar esta instalação" na etapa 4 do processo de instalação.
- `Instalar a partir de uma imagem personalizada`{.action}: esta opção permite-lhe instalar uma imagem externa no servidor. Para mais informações, consulte o [guia sobre a funcionalidade Bring Your Own Image](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image).

> [!primary]
>
> Certos sistemas operativos ou plataformas proprietárias, como o Plesk ou o Windows, requerem licenças que geram custos suplementares. Pode comprar licenças [junto da OVHcloud](https://www.ovhcloud.com/pt/bare-metal/os/) ou junto de um revendedor externo. De seguida, deverá aplicar a sua licença no sistema operativo ou através da Área de [Cliente OVHcloud](/links/manager).
>
> Pode gerir todas as licenças na secção `Bare Metal Cloud`{.action} sob `Licenças`{.action}. Nesta secção, também pode encomendar licenças ou adicionar licenças existentes através do botão `Ações`{.action}.
>

Clique em `Seguinte`{.action} para continuar.

![Seleção de templates](images/reinstalling-your-server-02.png){.thumbnail}

Depois de escolher `Instalar a partir de um template OVHcloud`{.action}, pode selecionar o sistema operativo nos menus pendentes.

![Seleção operacional](images/reinstalling-your-server-03.png){.thumbnail}

Se necessitar de alterar o esquema de particionamento do seu sistema operativo, selecione a opção "Personalizar a configuração das partições" antes de clicar em `Seguinte`{.action}.

![Personalizar a configuração das partições](images/reinstalling-your-server-04.png){.thumbnail}

Este passo permite-lhe configurar o tipo de RAID e a partição, dentro dos limites do hardware e do sistema operativo.

Uma vez os ajustamentos concluídos, clique em `Seguinte`{.action} para aceder à página de resumo.

Encontrará questões complementares específicas ao sistema operativo selecionado.          

Por exemplo, se instalar um sistema operativo GNU/Linux, pode adicionar a sua chave SSH.

Para obter uma explicação detalhada sobre a geração de chaves SSH, consulte o nosso [guia](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).     

![configuração SSH](images/reinstalling-your-server-05.png){.thumbnail}

Por fim, clique em `Confirmar`{.action} para lançar a instalação do sistema operativo no seu servidor dedicado.

<a name="connect"></a>

### Ligação ao servidor

> [!warning]
> A OVHcloud oferece-lhe serviços cuja configuração e gestão são da sua responsabilidade. Por isso, é da responsabilidade do cliente assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. Contudo, recomendamos que contacte um [fornecedor de serviços especializado](https://partner.ovhcloud.com/pt/directory/) se tiver dificuldades ou dúvidas relativamente à administração, utilização ou implementação de serviços num servidor.
>

### Linux

Se instalou um modelo de SO OVHcloud no seu servidor, é criado automaticamente um utilizador com autorizações elevadas. Este utilizador será nomeado em função do sistema operativo, por exemplo « ubuntu » ou « rocky ».

Receberá um e-mail com as informações necessárias para estabelecer a primeira ligação em SSH. O SSH é um protocolo de comunicação segura que é utilizado para estabelecer ligações encriptadas com um host remoto. Para mais informações, consulte o nosso guia: [Primeiros passos em SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

A maior parte dos sistemas operativos atuais dispõem de um cliente **Open SSH** instalado nativamente. Isto significa que as credenciais de acesso lhe permitem aceder rapidamente ao servidor a partir da estação de trabalho através da aplicação de linha de comandos adequada (`Terminal`, `Command prompt`, `Powershell`, etc.). Introduza o seguinte comando:

```bash
ssh username@IPv4
```

**Exemplo:**

```bash
ssh ubuntu@203.0.113.1
```

Também pode utilizar qualquer aplicação de terceiros compatível com **Open SSH**.

Uma vez ligado, pode alterar a palavra-passe predefinida do utilizador atual para uma frase secreta melhorada (*passphrase*) utilizando este comando:

```bash
passwd
```

Numa distribuição GNU/Linux, **uma indicação de palavra-passe não apresentará as suas entradas de teclado**.

Introduza a sua palavra-passe atual e prima "Enter"{.action}. Introduza a nova frase secreta e introduza-a novamente no seguinte prompt para a confirmar.

```console
Changing password for ubuntu.
Current password:
New password: 
Retype new password: 
passwd: password updated successfully
```

> [!warning]
> 
> **Ativação da conta de utilizador root**
>
> Não é necessário utilizar a conta de utilizador "root" para iniciar a administração do seu servidor. Essa conta deve ser ativada primeiro no sistema operativo do servidor para poder usá-la. Como medida de segurança, as ligações SSH com o utilizador "root" estão **desativadas** por predefinição.
> 
> Salvo indicação em contrário, todas as ações administrativas descritas na nossa documentação podem ser realizadas através da conta de utilizador predefinida, ou seja, introduzindo `sudo` seguido pelo comando correspondente. Saiba mais sobre este assumpto no nosso guia sobre [configuração das contas de utilizadores e do acesso root num servidor](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

Consoante as suas necessidades em termos de segurança, mobilidade e comodidade, as chaves SSH podem servir como método de ligação adicional ou até substituir uma identificação através de um nome de utilizador e de uma palavra-passe. Saiba como utilizá-las no nosso guia: [Criar e utilizar chaves SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

### Windows

Terminada a instalação, irá receber uma mensagem de correio eletrónico com as credenciais do Windows. Pode de seguida ligar-se ao seu servidor através de RDP (**R**emote **D**esktop **P**rotocol). No seu dispositivo Windows local, abra a aplicação `Remote Desktop Connection`.

![Windows remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Insira o endereço IPv4 do seu servidor, depois o seu nome de utilizador e a sua passphrase. Normalmente, é apresentada uma mensagem a avisar-lhe para confirmar a ligação devido a um certificado desconhecido. Clique em `Sim`{.action} para iniciar sessão.

Também pode utilizar qualquer aplicação de terceiros compatível com RDP. Esta condição é necessária se o Windows não estiver instalado no seu dispositivo local.

> [!primary]
>
> Se tiver problemas com este método, verifique se são permitidas ligações remotas (RDP) na sua estação de trabalho através da inspeção das definições do sistema, regras da firewall e possíveis restrições de rede.
> 

Como solução de recurso, pode utilizar a [consola IPMI na sua Área de Cliente OVHcloud](#console) para estabelecer ligação.

##### Ativação dos logs de arranque do Windows (facultativo)

Os logs de inicialização do Windows podem ser úteis para os diagnósticos de erros do servidor.

Para os ativar, percorra os separadores abaixo:

> [!tabs]
> 1. **Ligar ao servidor**
>>
>> Ligue-se ao servidor através de RDP ou [IPMI](#console).<br>
>>
> 2. **Abrir utilitário "Run"**
>>
>> Abra o Menu Iniciar do Windows e clique em `Executar`{.action}.<br><br>
>>![IPMI](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}<br>
>>
> 3. **Abrir "msconfig"**
>>
>> Introduza "msconfig" e clique em `OK`{.action}.<br><br>
>>![IPMI](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}<br>
>>
> 4. **Ativar os logs**
>>
>> Na nova janela, ative a opção logs ao lado de `Boot log`. Clique em `OK`{.action}.<br><br>
>>![IPMI](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}<br>
>>

Na próxima vez que iniciar o seu servidor, os logs serão guardados num ficheiro `.txt`. O caminho para o ficheiro é: `C:\Windows\ntbtlog.txt`.

Para aceder ao ficheiro de logs em modo rescue, siga as instruções do [manual do modo rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

<a name="reboot"></a>

### Reinicialização do seu servidor dedicado

Pode ser necessário um reboot para aplicar configurações atualizadas ou para resolver um problema. Na medida do possível, faça o "soft reboot" do servidor através da seguinte linha de comando:

```bash
reboot
```

No entanto, pode efetuar um "hard reboot" a qualquer momento na sua [Área de Cliente OVHcloud](/links/manager). No separador `Informações gerais`{.action}, clique em `...`{.action} em face de "Estado" na zona **Estado dos serviços** e, a seguir, em `Reiniciar`{.action} e `Validar`{.action} na janela contextual.

![Reiniciar](images/rebooting-your-server.png){.thumbnail}

<a name="secure"></a>

### Segurança do seu servidor dedicado

Como explicado acima, o cliente é o administrador do seu servidor dedicado. Enquanto tal, é responsável pelos seus dados e pela sua segurança. Para saber mais sobre a segurança do seu servidor, consulte o nosso guia [Proteger um servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server).

Se utilizar um servidor Windows, consulte [este guia](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win).

<a name="monitoring-server"></a>

### Monitorização OVHcloud

Pode ativar ou desativar o monitoring de um servidor dedicado a partir do separador `Informações gerais`{.action} da sua [Área de Cliente OVHcloud](/links/manager). A opção situa - se na secção `Estado dos serviços`.

![Monitoring](images/monitoring-your-server.png){.thumbnail}

Clique no botão `Configurar`{.action}. Na janela que aparece, tem três opções para o comportamento de vigilância:

- **Desativado**: Esta opção interrompe as mensagens de alerta e as intervenções da OVHcloud. Escolha esta opção se executar ações de administração pertinentes no servidor que impedem uma resposta ICMP.
- **Ativado com intervenção proactiva**: Se o servidor deixar de responder, ser-lhe-á enviado um e-mail de alerta e o servidor será verificado por um técnico.
- **Ativado sem intervenção proactiva**: No caso de o servidor deixar de responder, receberá uma mensagem de alerta por e-mail. Para dar início a uma intervenção, é necessário criar um pedido de assistência.

![Monitoring](images/monitoring-your-server2.png){.thumbnail}

Clique em `Confirmar`{.action} para atualizar a sua configuração de vigilância.

Para mais informações sobre o sistema de monitorização, consulte [este manual](/pages/bare_metal_cloud/dedicated_servers/network_ip_monitoring).

<a name="network"></a>

### Configuração de rede

> [!primary]
>
> Tenha em conta que os endereços IP [suplementares](https://www.ovhcloud.com/pt/bare-metal/ip/) não são compatíveis com a gama **Kimsufi**.
>

#### Modo bridge IP

O modo bridge é a ação empreendida pelo equipamento de rede para criar uma rede agregada a partir de várias redes de comunicação ou de vários segmentos de rede. O modo bridge é distinto do roteamento, que permite que as redes comuniquem de forma independente, mantendo-se separadas.

Trata-se de uma configuração frequentemente utilizada no contexto da virtualização, para permitir que cada máquina virtual tenha o seu próprio endereço IP público.

Para mais informações sobre o modo bridge, consulte o nosso manual: [Modo bridge IP](/pages/bare_metal_cloud/dedicated_servers/network_bridging).

#### Alias IP

O modo alias IP associa dois endereços IP ou mais a uma interface de rede. Isto permite que o seu servidor estabeleça várias ligações a uma rede, cada uma delas com um objetivo diferente.

Para obter instruções detalhadas sobre a configuração do alias IP, consulte o manual [Configurar o endereço IP em alias](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).

#### Configuração IPv6

> [!primary]
>
> Os servidores da gama **Kimsufi** só dispõem de um endereço IPv4 e de um endereço IPv6. Os endereços serão configurados automaticamente aquando da instalação do sistema operativo.
>

Todos os servidores dedicados OVHcloud são entregues com um bloco /64 IPv6. Para utilizar os endereços deste bloco, deve introduzir modificações na configuração da rede. Consulte o nosso guia [Configuração IPv6](/pages/bare_metal_cloud/dedicated_servers/network_ipv6).

<a name="rescue"></a>

### Modo rescue

Para todo o tipo de problema, a primeira etapa de reparação consiste em reiniciar o seu servidor em modo de rescue a partir da sua [Área de Cliente OVHcloud](/links/manager). É importante identificar os problemas do servidor neste modo, de forma a excluir os problemas relacionados com os softwares antes de contactar as nossas equipas de suporte.

Consulte o manual "[Ativar e utilizar o modo rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)".

<a name="console"></a>

### Acesso à ajuda do IPMI

> [!primary]
>
> Atenção, esta opção não está disponível para a gama **Kimsufi**.
>

A OVHcloud implementa todos os servidores dedicados com uma consola IPMI (Intelligent Platform Management Interface) que é executada no seu browser ou a partir de uma applet Java, e permite-lhe aceder diretamente ao seu servidor, mesmo que não tenha uma ligação de rede. Isto faz dele uma ferramenta útil para resolver problemas que possam ter colocado o seu servidor fora da linha.

Para mais informações, consulte o nosso manual "[Utilização do IPMI com servidores dedicados](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers)".

<a name="backup"></a>

### Backup Storage

> [!primary]
>
> Atenção, esta opção não está disponível para a gama **Kimsufi**.
>

Os servidores dedicados da OVHcloud incluem um espaço de armazenamento com controlo de acesso e fornecido como opção gratuita. É preferível utilizá-la como opção de backup complementar se o próprio servidor sofrer uma perda de dados.

Para ativar e utilizar a opção Backup Storage, consulte [este guia](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage).

## Quer saber mais?

[Configuração das contas de utilizadores e acesso root num servidor](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

[Proteger um servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

[Ativar e utilizar o modo rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[OVHcloud API & OS installation](/pages/bare_metal_cloud/dedicated_servers/api-os-installation) (EN)

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
