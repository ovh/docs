---
title: Primeiros passos com um VPS
excerpt: Aprenda a gerir um VPS na sua Área de Cliente e descubra as primeiras etapas da sua utilização, nomeadamente as ligações remotas e as medidas de segurança
updated: 2024-04-05
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>
 
## Objetivo

Um servidor privado virtual (VPS) é um servidor dedicado virtualizado. Ao contrário das ofertas de alojamento web da OVHcloud, que são geridas pela OVHcloud, a configuração e a manutenção de um sistema VPS são da sua responsabilidade enquanto administrador de sistemas.

**Descubra as informações necessárias para dar os primeiros passos num VPS.**

## Requisitos

- Ter um [VPS](https://www.ovhcloud.com/pt/vps/) na Área de Cliente OVHcloud
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

## Instruções

### Índice

- [Interface da Área de Cliente](#controlpanel)
- [Funções VPS disponíveis no separador Página Inicial](#hometab)
- [Ligação ao seu VPS (OS GNU/Linux)](#connect)
- [Ligação ao seu VPS Windows](#winconnect)
- [Como proteger o VPS](#secure)
- [Associar um nome de domínio](#domain)

Aceda à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), vá à secção `Bare Metal Cloud`{.action} e selecione o seu servidor na secção `Servidores privados virtuais`{.action}.

<a name="controlpanel"></a>

### Interface da Área de Cliente

O separador `Página`{.action} inicial contém informações importantes sobre o serviço e permite-lhe realizar operações essenciais.

![VPS Home](images/vpshome.png){.thumbnail}

#### O seu VPS <a name="yourvps"></a>

Encontre nesta parte as informações de base sobre o VPS e o estado do serviço. Clique nas guias abaixo para ver os detalhes.

> [!tabs]
> Nome
>>
>> Se clicar em `...`{.action} e selecionar `Alterar nome`{.action}, poderá introduzir um nome diferente para este VPS. Esta funcionalidade é útil para facilitar a navegação na Área de Cliente quando gere vários serviços VPS. O nome do serviço interno permanece no formato *vps-XXXXXXX.vps.ovh.net*.
>>
> Boot
>>
>> The boot mode displayed here is either the "normal" mode, in which the system loads the installed operating system (*LOCAL*) or the **rescue mode** provided by OVHcloud for troubleshooting purposes. Use the `...`{.action} button to [restart the VPS](#reboot-current-range) or boot it into rescue mode.
>>
>> Pode encontrar mais informações no nosso guia sobre o [modo rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).
>>
> SO / Distribuição
>>
>> Trata-se do sistema operativo atualmente instalado. Utilize o botão `...`{.action} para [reinstalar o mesmo sistema operativo ou selecione outro de entre as opções disponíveis](#reinstallvps).
>>
>> Tenha em conta que uma reinstalação levará à eliminação de todos os dados alojados no VPS (com exceção dos discos adicionais).
>>
>> > [!primary]
>> >
>> > Se adquiriu uma VPS **Windows**, só pode escolher um SO Windows para a reinstalação. Do mesmo modo, se o Windows não for selecionado durante a encomenda, não poderá ser instalado após a entrega do VPS.
>>
>>
>> Uma vez instalado, o sistema deverá implementar as atualizações de segurança. Encontrará mais informações [abaixo](#reinstallvps) e no nosso guia Como [Proteger um VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps).
>> 
> Zona / Localização
>>
>> Estas secções fornecem informações sobre a localização do VPS. Isto pode ser útil, por exemplo, para identificar os impactos no seu serviço mencionados no [status reports](https://bare-metal-servers.status-ovhcloud.com/).
>>
 
#### A sua configuração

Clique nas guias abaixo para ver os detalhes da secção.

> [!tabs]
> Modelo
>>
>> Este elemento indica a referência comercial que identifica o modelo de VPS correspondente às [ofertas VPS no nosso site](https://www.ovhcloud.com/pt/vps).
>>
> vCores / Memória / Armazenamento
>> 
>> Os recursos atuais do seu VPS são apresentados aqui e podem ser atualizados separadamente clicando no botão correspondente. As atualizações são limitadas pelo modelo de VPS selecionado e só podem estar disponíveis com a mudança para uma [gama superior](https://www.ovhcloud.com/pt/vps).

#### IP

Clique nas guias abaixo para ver os detalhes da secção.

> [!tabs]
> IPv4
>>
>> O endereço IPv4 público principal do VPS é configurado automaticamente durante a instalação. Encontre mais informações sobre a gestão dos IP no nosso guia [Configuring IP aliasing](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
>>
> IPv6 / Gateway
>> 
>> Pode ver aqui o endereço IPv6 público e o endereço do gateway associado. Estes são automaticamente associados ao VPS aquando da instalação. Para mais informações, consulte [este guia](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>> 
> DNS secundário
>>
>> Esta funcionalidade é útil para alojar serviços DNS. O nosso guia [Configurar o DNS secundário da OVHcloud num VPS](/pages/bare_metal_cloud/virtual_private_servers/adding-secondary-dns-on-vps) descreve-o em pormenor.


#### Resumo das opções

Estas opções referem-se a serviços VPS suplementares que podem ser encomendados na Área de Cliente.

- A opção `Snapshot` permite-lhe criar uma snapshot manual como ponto único de restauro.
- A opção `Backups automatizados` permite-lhe conservar várias snapshots do seu VPS (exceto discos adicionais).
- A opção `Discos adicionais` permite associar espaço de armazenamento ao seu VPS, por exemplo, para armazenar dados de backup.

Encontrará na [página do produto](https://www.ovhcloud.com/pt/vps/options/) e nos respetivos [manuais informações sobre as soluções de backup disponíveis para o serviço](/products/bare-metal-cloud-virtual-private-servers-backups).

#### Subscrição

Estas secções apresentam as informações mais importantes sobre a faturação do serviço. Encontre todas as informações sobre este assumpto na [documentação correspondente](/products/account-and-service-management-managing-billing-payments-and-services).

<a name="hometab"></a>

### Funções VPS disponíveis no separador Página Inicial

> [!warning]
>
> A OVHcloud fornece-lhe serviços cuja configuração e gestão são da sua responsabilidade. É da sua responsabilidade assegurar o seu bom funcionamento.
>
> Este guia tem como objetivo ajudá-lo a realizar as tarefas mais habituais. No entanto, se encontrar dificuldades ou dúvidas relativamente à administração, utilização ou implementação de serviços num servidor, recomendamos que contacte um [fornecedor de serviços especializado](https://partner.ovhcloud.com/pt/directory/) ou que contacte a [nossa comunidade](https://community.ovh.com/en/).
>

#### Reinstalação do seu VPS <a name="reinstallvps"></a>

As reinstalações podem ser efetuadas a partir da Área de Cliente. Clique em `...`{.action} junto a **SO / Distribuição**, e em `Reinstalar o meu VPS`{.action}.

![VPSnewreinstall](images/2023panel_01.png){.thumbnail}

Na janela que aparece, escolha um sistema operativo da lista suspensa. As opções propostas são imagens [compatíveis com um VPS OVHcloud](/pages/public_cloud/compute/image-life-cycle) e são imediatamente funcionais após a instalação.

Pode também selecionar uma **chave SSH** a instalar no sistema, se tiver armazenado uma anteriormente na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Para saber tudo sobre este assumpto, consulte o guia [Criar e utilizar chaves SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

> [!primary]
>
> **Licenças**
>
> Alguns sistemas operativos ou plataformas proprietárias, como o Plesk ou cPanel, requerem licenças que implicam custos adicionais. As licenças são administradas a partir da Área de Cliente: aceda à secção `Bare Metal Cloud`{.action} e clique em `Licenças`{.action} na barra à esquerda.
>
> Para ter um sistema operativo **Windows** a correr num VPS, é preciso **selecionar no processo de encomenda**. Um VPS com outro SO instalado não pode ser reinstalado com Windows da forma descrita acima.
>

Aparece uma barra de progresso da instalação na Área de Cliente. Tenha em conta que este processo pode demorar até 30 minutos.

#### Reinicialização do VPS <a name="reboot-current-range"></a>

Pode ser necessário reiniciar para aplicar configurações atualizadas ou resolver um problema. Sempre que possível, execute uma « de reinício de software » a partir da interface gráfica do servidor (Windows, Plesk, etc.) ou através da linha de comandos:

```bash
sudo reboot
```

No entanto, pode efetuar um « de reinício de hardware » a qualquer momento a partir da sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). No separador `Página Inicial`{.action}, clique em `...`{.action} junto de `Boot` na secção **O seu VPS**. Selecione `Reiniciar o meu VPS`{.action} e clique em `Validar`{.action} na janela que se abrir.

![Reboot](images/reboot-vps01.png){.thumbnail}

<a name="connect"></a>

### Ligação ao seu VPS (OS GNU/Linux)

Durante a primeira instalação ou ao reinstalar a partir do Painel de controle, um usuário com altas permissões é criado automaticamente. Este utilizador será nomeado em função do sistema operativo, por exemplo « ubuntu » ou « rocky ».

Receberá um e-mail com o nome de utilizador e a palavra-passe necessários para aceder ao seu VPS por SSH. O SSH é um protocolo de comunicação segura que é utilizado para estabelecer ligações encriptadas com um host remoto.

A maioria dos sistemas operativos de desktop atuais terão um cliente **Open SSH** instalado nativamente. Isto significa que as credenciais de acesso lhe permitem aceder rapidamente ao VPS através da aplicação de linha de comandos adequada (`Terminal`, `Command prompt`, `Powershell`, etc.). Introduza o seguinte comando:

```bash
ssh username@IPv4_VPS
```

Por exemplo:

```bash
ssh ubuntu@169.254.10.250
```

Também pode utilizar qualquer aplicação de terceiros compatível com **Open SSH**.

Uma vez ligado, pode alterar a palavra-passe predefinida do utilizador atual para uma forte frase secreta utilizando este comando:

```bash
passwd
```

Numa distribuição GNU/Linux, **uma indicação de palavra-passe não apresentará as suas entradas de teclado**.

Digite a sua palavra-passe atual e prima `Enter`{.action}. Introduza a nova frase secreta e introduza-a novamente no seguinte prompt para a confirmar.

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
Salvo indicação em contrário, todas as ações administrativas descritas na nossa documentação podem ser realizadas pela conta de utilizador predefinida, ou seja, introduzindo `sudo` seguido pelo comando correspondente. Saiba mais sobre este assumpto no guia "[Configuração das contas de utilizadores e acesso root num servidor](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)".
>

**Recomendamos que efetue o seguinte procedimento**:

- Familiarizar-se com as ligações SSH consultando o guia [Introdução ao SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
- Considere a utilização de chaves SSH como um método avançado e mais prático para as ligações remotas através do nosso manual [Criar e utilizar chaves SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).
- Utilize o nosso guia [Tornar seguro um VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps) para proteger o seu sistema contra ataques automatizados de *brute force* e outras ameaças comuns.

> [!primary]
>
Tenha em conta que se selecionou uma **distribuição com aplicação** (Plesk, cPanel, Docker), as medidas de segurança genéricas podem não se aplicar ao seu sistema. Sugerimos que consulte os nossos manuais [Primeiros passos com as aplicações pré-instaladas](/pages/bare_metal_cloud/virtual_private_servers/apps_first_steps) e [Implementar o cPanel num VPS](/pages/bare_metal_cloud/virtual_private_servers/cpanel), assim como a documentação oficial do editor em causa.
>

<a name="winconnect"></a>

### Ligação ao VPS Windows

#### Etapa 1: finalizar a instalação do Windows

Após a instalação do sistema operativo Windows, receberá um e-mail com o nome de conta do utilizador predefinido `Windows user`.

A seguir, terá de concluir o processo de instalação do Windows definindo o idioma, layout do teclado e palavra-passe de administrador.

Isto é feito na consola VPS KVM: clique no botão `...`{.action} ao lado do nome do seu VPS na secção [O seu VPS](#yourvps) e selecione `KVM`{.action}. Pode encontrar mais informações sobre esta ferramenta no nosso [guia KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).

Para finalizar a configuração inicial do seu VPS Windows, consulte os separadores abaixo:

> [!tabs]
> 1. **Regionais**
>>
>> Depois de estabelecida a sessão KVM, pode concluir a configuração inicial do Windows configurando o seu **país/região**, o **idioma do Windows** preferido e a **configuração do teclado**. A seguir, clique no botão `Seguinte`{.action} no canto inferior direito.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}<br>
>>
> 2. **Palavra-passe de administrador**
>>
>> Defina uma palavra-passe para a sua conta Windows `Administrator` / `admin` e confirme-a e clique em `Finish`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}<br>
>>
> 3. **Ecrã de ligação**
>>
>> O Windows aplicará as suas configurações e, em seguida, exibirá a tela de login. Clique no botão `Send CtrlAltDel`{.action} no canto superior direito para iniciar sessão.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}<br>
>>
> 4. **Login de administrador**
>>
>> Introduza a palavra-passe `Administrator` que criou no passo anterior e clique na `seta`.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}<br>
>>

#### Etapa 2: ligar-se ao servidor com RDP

No seu equipamento Windows local, pode utilizar a aplicação cliente `Remote Desktop Connection` para se ligar ao VPS.

![Windows remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Introduza o endereço IPv4 do seu VPS, depois o seu identificador e a sua palavra-passe. Normalmente, é apresentada uma mensagem a avisar-lhe para confirmar a ligação devido a um certificado desconhecido. Clique em `Sim`{.action} para iniciar sessão.

Também pode utilizar outra aplicação de terceiros compatível com RDP. Esta condição é necessária se o Windows não estiver instalado no seu dispositivo local.

> [!primary]
>
Se encontrar problemas com este procedimento, verifique se as ligações remotas (RDP) são permitidas no seu dispositivo verificando as definições do sistema, as regras da firewall e as restrições de rede possíveis.
>

#### Ativação dos logs de inicialização do Windows (facultativo)

Os registos de inicialização do Windows podem ser úteis para diagnósticos de erros do servidor.

Para os ativar, percorra os separadores abaixo:

> [!tabs]
> 1. **Ligar ao servidor**
>>
>> Ligar-se ao seu servidor através de um ambiente de trabalho remoto ou de uma sessão [KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).<br>
>>
> 2. **Abrir utilitário "Executar"**
>>
>> Abra o Menu Iniciar do Windows e clique em `Executar`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}<br>
>>
> 3. **Abrir "msconfig"**
>>
>> Introduza "msconfig" e clique em `OK`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}<br>
>>
> 4. **Ativar os logs**
>>
>> Na nova janela, ative a opção logs ao lado de `Boot log`. Clique em `OK`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}<br>
>>

Na próxima vez que iniciar o seu servidor, os logs serão guardados num ficheiro `.txt`. O caminho para o ficheiro é: `C:\Windows\ntbtlog.txt`.

Para aceder ao ficheiro de registo em modo rescue, siga as instruções do manual do [modo rescue do VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue).

<a name="secure"></a>

### Como proteger o VPS

Enquanto administrador do seu VPS, é responsável pela segurança das aplicações e dos dados alojados.

Consulte o nosso manual sobre Como [proteger um VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps) para obter conselhos essenciais sobre como proteger o seu sistema.

> [!primary]
>
Tenha em conta que se selecionou uma **distribuição com aplicação** (Plesk, cPanel, Docker), as medidas de segurança genéricas podem não se aplicar ao seu sistema. Sugerimos que consulte os nossos manuais [Primeiros passos com as aplicações pré-instaladas](/pages/bare_metal_cloud/virtual_private_servers/apps_first_steps) e [Implementar o cPanel num VPS](/pages/bare_metal_cloud/virtual_private_servers/cpanel), assim como a documentação oficial do editor em causa.
>

<a name="domain"></a>

### Associar um nome de domínio

A passagem do seu VPS na web passa geralmente pela atribuição de um nome de domínio e a sua configuração DNS. Se gere o seu domínio na OVHcloud, pode consultar o nosso guia [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit) para obter instruções.

#### Proteger um nome de domínio com um certificado SSL

Depois de configurar o VPS, pode querer proteger o seu domínio e o seu website. Isto requer um certificado SSL, que permite o acesso à Internet do VPS através de *HTTPS* em vez de *HTTP* não seguro.

O certificado SSL pode ser instalado manualmente no VPS. Consulte a documentação oficial da sua distribuição VPS.

Para um processo mais automatizado, a OVHcloud propõe igualmente a solução SSL Gateway. Consulte a [página do produto](https://www.ovh.pt/ssl-gateway/) ou a [documentação de apoio](/products/web-cloud-ssl-gateway) para obter mais informações.

## Quer saber mais?

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Introdução ao SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Como proteger um VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
