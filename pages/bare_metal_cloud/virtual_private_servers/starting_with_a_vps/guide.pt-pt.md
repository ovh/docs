---
title: Primeiros passos com um VPS
excerpt: Aprenda a gerir um VPS na sua Área de Cliente e descubra as primeiras etapas da sua utilização, nomeadamente as ligações remotas e as medidas de segurança
updated: 2024-10-01
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>
 
## Objetivo

Um servidor privado virtual (VPS) é um servidor dedicado virtualizado que lhe oferece uma grande flexibilidade e um controlo acrescido em relação às soluções de alojamento web tradicionais. Ao contrário das ofertas de alojamento geridas pela OVHcloud, em que as tarefas de gestão são tomadas em conta, a administração de um VPS é da inteira responsabilidade do cliente. Como administrador de sistemas, é responsável pela configuração, manutenção e segurança do servidor para garantir que este funcione corretamente e seja fiável.

**Descubra as informações necessárias para dar os primeiros passos num VPS.**

## Requisitos

- Ter um [VPS](/links/bare-metal/vps) na Área de Cliente OVHcloud
- Ter acesso à [Área de Cliente OVHcloud](/links/manager)

## Instruções

### Índice

- [Interface da Área de Cliente](#controlpanel)
- [Funções VPS disponíveis no separador Página Inicial](#hometab)
- [Ligação ao seu VPS](#connect)
    - [Distribuição GNU/Linux](#linuxconnect)
    - [Distribuição do Windows](#winconnect)
- [Como proteger o VPS](#secure)
- [Associar um nome de domínio](#domain)

Aceda à sua [Área de Cliente OVHcloud](/links/manager), vá à secção `Bare Metal Cloud`{.action} e selecione o seu servidor na secção `Servidores privados virtuais`{.action}.

<a name="controlpanel"></a>

### Interface da Área de Cliente

O separador `Página`{.action} inicial contém informações importantes sobre o serviço e permite-lhe realizar operações essenciais.

![VPS Home](images/vpshome.png){.thumbnail}

#### O seu VPS <a name="yourvps"></a>

Encontre aqui as informações de base sobre o seu VPS e o estado do serviço. Clique nas guias abaixo para ver os detalhes.

> [!tabs]
> Nome
>>
>> Para personalizar o nome do seu VPS, clique no botão `..`{.action} e selecione `Alterar nome`{.action}. Esta funcionalidade é útil para facilitar a navegação na Área de Cliente quando gere vários serviços VPS. No entanto, o nome interno do serviço permanece no formato *vps-XXXXX.vps.ovh.net*.
>>
> Boot
>>
>> O modo de arranque indicado está em **modo normal**, em que o servidor carrega o sistema operativo instalado (*LOCAL*), ou em **modo rescue**, que a OVHcloud fornece em caso de deteção e resolução de problemas. Utilize o botão `...`{.action} para [reiniciar o VPS](#reboot-current-range) ou inicie-o em modo rescue, se necessário.
>>
>> Se necessário, consulte o nosso guia sobre [modo rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).
>>
> OS / Distribuição
>>
>> Trata-se do sistema operativo atualmente instalado. Utilize o botão `...`{.action} para [reinstalar o mesmo sistema operativo ou selecionar outro de entre as opções disponíveis](#reinstallvps).
>>
>> > [!warning]
>> >
>> > Uma reinstalação levará à eliminação de todos os dados alojados no VPS (com exceção dos discos adicionais).
>>
>> > [!primary]
>> >
>> > Se encomendou um VPS **Windows**, só pode escolher um SO Windows para a reinstalação. Do mesmo modo, se o Windows não for selecionado durante a encomenda, não poderá ser instalado após a entrega do VPS.
>>
>>
>> Depois de instalar o sistema, deverá implementar as atualizações de segurança. Encontrará mais informações [abaixo](#reinstallvps), bem como no nosso guia [Proteger um VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps).
>> 
> Zona / Localização
>>
>> Estas secções fornecem informações sobre a localização do seu VPS. Isto pode ser útil para identificar e avaliar eventuais impactos no seu serviço, como os mencionados nos [relatórios de incidentes ou de manutenção](https://bare-metal-servers.status-ovhcloud.com/).
>>

#### A sua configuração

Clique nas guias abaixo para ver os detalhes da secção.

> [!tabs]
> Modelo
>>
>> Este elemento indica a referência comercial que identifica o modelo de VPS correspondente aos [ofertas VPS no nosso site](/links/bare-metal/vps).
>>
> vCores / memória / armazenamento
>> 
>> Os recursos atuais do seu VPS são apresentados aqui e podem ser atualizados separadamente clicando no botão correspondente. Tenha em conta que as atualizações são limitadas pelo modelo de VPS escolhido e só podem estar disponíveis quando se muda para uma [gama superior](/links/bare-metal/vps).
>>
> Discos adicionais
>>
>> Adicione discos suplementares ao seu VPS para aumentar a capacidade de armazenamento do seu servidor para além da que está incluída na configuração inicial. É possível armazenar dados de backup.

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

#### Backup

Estas opções referem-se a serviços VPS suplementares que podem ser encomendados na Área de Cliente.

> [!tabs]
> Snapshot
>>
>> A snapshot num VPS é uma cópia de segurança instantânea do estado do servidor, que permite restaurar rapidamente o sistema em caso de problema. A opção "Snapshot" permite criar uma snapshot manual como ponto de restauro único.
>>
> Backup automatizado
>>
>> A opção `Backup automatizado` permite programar backups regulares do seu VPS. Ao contrário das snapshots manuais, esta funcionalidade conserva vários pontos de restauro ao longo do tempo, oferecendo-lhe uma proteção contínua e automática dos seus dados (exceto discos adicionais).

Encontre todas as informações sobre as soluções de backup disponíveis para o seu serviço na [página do produto VPS](/links/bare-metal/vps-options) e nos nossos [guias respetivos](/products/bare-metal-cloud-virtual-private-servers-backups).

### Assinatura

Estas secções apresentam as informações mais importantes sobre a faturação do serviço. Encontre todas as informações sobre este assumpto na [documentação correspondente](/products/account-and-service-management-managing-billing-payments-and-services).

<a name="hometab"></a>

### Funções VPS disponíveis no separador « Página Inicial»

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração e gestão é da sua responsabilidade. É da sua responsabilidade assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. Contudo, recomendamos que entre em contacto com um [fornecedor especializado](/links/partner) ou entre em contacto com a [nossa comunidade](/links/community) se encontrar dificuldades ou dúvidas relativamente à administração, utilização ou implementação de serviços num servidor.
>

#### Reinstalar o VPS <a name="reinstallvps"></a>

A reinstalação do VPS pode ser efetuada a partir da Área de Cliente. Clique no botão `...`{.action} à direita de `OS / Distribuição`{.action}, depois em `Reinstalar o meu VPS`{.action}.

![VPSnewreinstallation](images/2023panel_01.png){.thumbnail}

Na janela que aparece, escolha um sistema operativo da lista suspensa. As opções são [imagens compatíveis com um VPS OVHcloud](/pages/public_cloud/compute/image-life-cycle) e são imediatamente funcionais após a instalação.

Também pode selecionar uma **chave SSH** a instalar no sistema, se já tiver armazenado uma no seu [Área de Cliente OVHcloud](/links/manager). Para saber tudo sobre este assumpto, consulte o guia « [Criar e utilizar chaves SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) ».  
Se tiver selecionado uma chave SSH e não precisar de um nome de utilizador e de uma palavra-passe para aceder, selecione a caixa de verificação "Não quero receber por e-mail os códigos de autenticação do meu VPS."

> [!warning]
>
> A reinstalação irá formatar todos os discos do servidor. Recomendamos vivamente que crie uma snapshot do seu VPS antes de prosseguir, para que possa voltar ao estado anterior em caso de problema.
>

> [!primary]
>
> **Licenças**
>
> Alguns sistemas operativos ou plataformas proprietárias, como o Plesk ou cPanel, requerem licenças que implicam custos adicionais. As licenças são administradas a partir da Área de Cliente: aceda à secção `Bare Metal Cloud`{.action} e clique em `Licenças`{.action} na barra à esquerda.
>
> Para ter um sistema operativo **Windows** a correr num VPS, é preciso **selecionar no processo de encomenda**. Um VPS com outro SO instalado não pode ser reinstalado com Windows da forma descrita acima.
>

O processo de reinstalação pode levar alguns minutos.

#### Reiniciar o VPS <a name="reboot-current-range"></a>

Pode ser necessário reiniciar para aplicar configurações de atualização ou resolver uma falha. Sempre que possível, execute uma « de reinício de software » a partir da interface gráfica do servidor (Windows, Plesk, etc.) ou através da linha de comandos:

```bash
sudo reboot
```

No entanto, pode efetuar um « de reinício de hardware » a qualquer momento a partir da sua [Área de Cliente OVHcloud](/links/manager). No separador `Página Inicial`{.action}, clique em `...`{.action} junto de `Boot` na secção **O seu VPS**. Selecione `Reiniciar o meu VPS`{.action} e clique em `Validar`{.action} na janela que se abrir.

![Reboot](images/reboot-vps01.png){.thumbnail}

<a name="connect"></a>

### Ligar-se ao VPS

> [!warning]
>
> Por razões de segurança, ao aceder pela primeira vez ao VPS, é necessário alterar a palavra-passe recebida por e-mail para uma nova palavra-passe forte. Depois de fazer a alteração, a interface que está a utilizar (por exemplo, Putty) pode ser fechada automaticamente para que possa efetuar o logout. De seguida, volte a registar-se utilizando a sua nova palavra-passe.
>

Durante a primeira instalação ou ao reinstalar a partir do Painel de controle, um usuário com altas permissões é criado automaticamente. Este utilizador será nomeado em função do sistema operativo, por exemplo « ubuntu » ou « rocky ».

Receberá um e-mail com o nome de utilizador e a palavra-passe necessários para aceder ao seu VPS por SSH. O SSH é um protocolo de comunicação segura que é utilizado para estabelecer ligações encriptadas com um host remoto.

A maioria dos sistemas operativos de desktop atuais terão um cliente **Open SSH** instalado nativamente. Isto significa que as credenciais de acesso lhe permitem aceder rapidamente ao VPS através da aplicação de linha de comandos adequada (`Terminal`, `Command prompt`, `Powershell`, etc.). Introduza o seguinte comando:

```bash
ssh username@IPv4_VPS
```

Por exemplo:

```bash
ssh ubuntu@203.0.113.101
```

Também pode utilizar qualquer aplicação de terceiros compatível com **Open SSH**.

<a name="linuxconnect"></a>

#### Distribuição GNU/Linux

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

#### VPS Windows

##### Etapa 1: finalizar a instalação do Windows

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

##### Etapa 2: ligar-se ao servidor com RDP

No seu equipamento Windows local, pode utilizar a aplicação cliente `Remote Desktop Connection` para se ligar ao VPS.

![Windows remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Introduza o endereço IPv4 do seu VPS, depois o seu identificador e a sua palavra-passe. Normalmente, é apresentada uma mensagem a avisar-lhe para confirmar a ligação devido a um certificado desconhecido. Clique em `Sim`{.action} para iniciar sessão.

Também pode utilizar outra aplicação de terceiros compatível com RDP. Esta condição é necessária se o Windows não estiver instalado no seu dispositivo local.

> [!primary]
>
Se encontrar problemas com este procedimento, verifique se as ligações remotas (RDP) são permitidas no seu dispositivo verificando as definições do sistema, as regras da firewall e as restrições de rede possíveis.
>

##### Ativação dos logs de inicialização do Windows (facultativo)

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

Para um processo mais automatizado, a OVHcloud propõe igualmente a solução SSL Gateway. Consulte a [página do produto](/links/web/ssl-gateway) ou a [documentação de apoio](/products/web-cloud-ssl-gateway) para obter mais informações.

## Quer saber mais?

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Introdução ao SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Como proteger um VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
