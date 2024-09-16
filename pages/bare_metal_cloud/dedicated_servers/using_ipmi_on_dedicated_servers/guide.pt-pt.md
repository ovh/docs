---
title: "Como utilizar a consola IPMI com um servidor dedicado"
excerpt: "Saiba como aceder ao servidor a partir da Área de Cliente sem usar outro software"
updated: 2024-07-23
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A consola IPMI (Intelligent Platform Management Interface) permite estabelecer uma ligação direta ao seu servidor dedicado, sem depender do estado de conectividade do sistema operativo. Este manual explica-lhe como iniciar esta consola.

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

> [!warning]
> Esta funcionalidade pode estar indisponível ou limitada nos [servidores dedicados **Eco**](/links/bare-metal/eco-about).
>
> Para mais informações, consulte o nosso [comparativo](/links/bare-metal/eco-compare).

<a name="procedure"></a>

## Instruções

A ligação ao IPMI pode ser efetuada através de vários métodos¹. As chaves SSH armazenadas no servidor não serão utilizadas para estas ligações. Aqui está um quadro recapitulativo:

|Nome Método|Outro Nome|Descrição|Copiar-Colar|Unidade ISO Virtual²|Exemplos de casos de uso|
|---|---|---|---|---|---| 
|**KVM**³ via **browser da Web**|**KVM HTML**|Emulação do ecrã de vídeo através de um **padrão HTML**, tal como se estivesse a ligar fisicamente um teclado/rato em USB e um monitor de vídeo em VGA ao seu servidor dedicado.|❌|⚠️⁴|- Diagnosticar um problema de boot do servidor dedicado.|
|**KVM**³ via **applet Java**|**KVM Java**|Idem apenas para o KVM HTML, exceto que a emulação se efetua através de um **applet Java** em vez de uma placa de expansão HTML.|❌|✅| Diagnosticar um problema de boot do servidor dedicado. <br />- Efetuar uma instalação de um SO específico (exceto [catálogo](/links/bare-metal/os)) manualmente⁵.|
|**SoL**⁶ via **browser da Web**|**SoL JavaScript**|Emulação de ligação série através do browser da Web, tal como se estivesse a ligar uma consola série fisicamente em RS-232 ao seu servidor dedicado.|✅|❌| Diagnosticar um problema de rede: recuperar os logs e manipular os ficheiros de configuração.|
|**SoL**⁶ via **SSH**|**SoL SSH**|O mesmo que para o SoL JavaScript, exceto que a emulação é realizada através de gateway SSH. Conecte-se com o seu cliente SSH favorito a um servidor distante em SSH, que transpõe os comandos em ligação série ao servidor dedicado.|✅|❌|- Idem SoL JavaScript mas a partir de uma máquina que não tem uma interface gráfica.|

¹ Consoante a compatibilidade material do seu servidor dedicado (certos métodos não serão apresentados na [Área de Cliente OVHcloud](/links/manager)).<br />
² Funcionalidade que permite montar uma imagem ISO armazenada localmente na sua máquina ao servidor dedicado remoto e, assim, instalar um SO através do IPMI.<br />
³ KVM = Keyboard Video and Mouse<br />
⁴ De acordo com a compatibilidade material do seu servidor dedicado : utilizar o KVM Java em vez disso se incompatível.<br />
⁵ Se o SO que deseja instalar não estiver disponível no [catálogo de sistemas operativos disponíveis nos servidores dedicados OVHcloud](/links/bare-metal/os), tenha em conta que também pode utilizar uma imagem personalizada: consulte [Comparação entre Bring Your Own Image (BYOI) e Bring Your Own Linux (BYOLinux)](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image-versus-bring-your-own-linux) para mais pormenores.<br />
⁶ SoL = Serial over Lan

Para ativar um destes métodos, aceda à [Área de Cliente OVHcloud](/links/manager). Na parte `Bare Metal Cloud`{.action}, clique em `Servidores dedicados`{.action} e selecione o seu servidor, em seguida, clique no separador `IPMI/KVM`{.action}.

### Abrir um KVM através de applet Java <a name="applet-java"></a>

Para que a applet Java funcione, é necessário que o Java esteja instalado no seu computador. Se ainda não o fez, aceda à [página oficial](https://www.java.com/en/download/){.external}.

Na secção "Remote KVM" {.action} da Área de Cliente OVHcloud, clique em `A partir de applet Java (KVM)`{.action}:

![Acesso KVM Java](images/ipmi-kvm-java-01.png){.thumbnail}

Faça o download do ficheiro `kvm.jnlp` quando for convidado a fazê-lo, e depois lance-o:

![Abertura KVM Java](images/ipmi-kvm-java-02.png){.thumbnail}

De seguida, aceda à página de ligação. Introduza as suas credenciais `root`, como durante uma ligação através de um terminal ou de um software externo:

![Visão geral KVM Java](images/ipmi-kvm-java-03.png){.thumbnail}

Pode desde já gerir o seu servidor.

### Abrir um KVM através do browser da Web <a name="kvm-browser"></a>

Na secção "Remote KVM" {.action} da Área de Cliente OVHcloud, clique em `A partir do seu browser (KVM)`{.action}:

![Acesso KVM HTML](images/ipmi-kvm-html-01.png){.thumbnail}

A ativação demora alguns segundos. Receberá uma mensagem informando-o da disponibilidade da ligação via IPMI.

![Abertura KVM HTML](images/ipmi-kvm-html-02.png){.thumbnail}

A seguir, clique em `Aceder à consola (KVM)`{.action} para abrir a consola no seu browser.

![Visão geral KVM HTML](images/ipmi-kvm-html-03.png){.thumbnail}

### Abrir SoL via SSH <a name="sol-ssh"></a>

Para mais informações sobre a criação de pares de chaves SSH, consulte [esta página](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#create-ssh-key).

Na secção `Serial over LAN (SoL)`{.action} da sua Área de Cliente OVHcloud, clique em `Adicionar chave SSH`{.action}.

![Acesso SoL SSH](images/ipmi-sol-sshkey-01.png){.thumbnail}

Será aberto um pop-up para que possa introduzir a chave pública SSH com a qual pretende autenticar-se para estabelecer a ligação. De seguida, clique em `Lançar a sessão SoL através de SSH`{.action}.

![SoL SSH chave pública SSH](images/ipmi-sol-sshkey-02.png){.thumbnail}

Quando a sessão está pronta, é apresentada uma mensagem de confirmação e um URI para que possa estabelecer uma ligação série ao servidor dedicado através de SSH. Copie este URI para a área de transferência.

![Abertura SoL SSH](images/ipmi-sol-sshkey-03.png){.thumbnail}

Para mais informações sobre a utilização de uma chave SSH para estabelecer a ligação em SSH, consulte [esta página](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#multiplekeys).

### Abrir SoL através do browser <a name="sol-browser"></a>

Na secção `Serial over LAN (SoL)`{.action} da sua Área de Cliente OVHcloud, clique em `A partir do seu browser (SoL)`{.action}.

![Acesso SoL JavaScript](images/ipmi-sol-html-01.png){.thumbnail}

> [!primary]
> Se o failover para o popup não for feito automaticamente, pode sempre clicar no botão `Aceder à consola (SoL)`{.action}.

![Abertura SoL JavaScript](images/ipmi-sol-html-02.png){.thumbnail}

### Testar e reiniciar o IPMI <a name="ipmi-test-reboot"></a>

É possível que o IPMI não responda mais. Se não conseguir aceder, pode efetuar um teste clicando em `Testar o IPMI`{.action} e visualizar o resultado do diagnóstico:

![Test IPMI](images/ipmi-test.png){.thumbnail}

Se tudo é normal, como no nosso exemplo, poderá defrontar-se com um problema local (ligação à Internet, correio local). Se o problema com o IPMI persistir, pode reiniciá-lo clicando em `Reiniciar o IPMI`{.action}.

![Reboot IPMI](images/ipmi-reboot.png){.thumbnail}

A reinicialização do IPMI demora alguns minutos.

> [!primary]
> Esta operação não afeta o funcionamento do servidor.
>

### Instalação de um sistema operativo com o IPMI v1

> [!warning]
> A OVHcloud não garante a funcionalidade dos sistemas operativos instalados através do IPMI. Este método só deve ser considerado por um administrador de servidores experiente.
>
> As versões 64 bits de Java podem impedir a abertura dos menus `Redirect ISO`/`Redirect CDROM` e provocar o bloqueio do JViewer.

Para começar, abra o [IPMI a partir de uma applet Java](#applet-java) através da sua [Área de Cliente OVHcloud](/links/manager). A seguir, clique em `Device`{.action} na barra de menus e selecione `Redirect ISO`{.action} no menu pendente.

![Redirect_ISO](images/RedirectISO.jpg){.thumbnail}

De seguida, selecione a norma ISO que deseja utilizar no sistema de ficheiros do seu computador local. Depois de selecionar a sua norma ISO, prima o botão `Ctrl Alt Del`{.action} no canto superior direito do ecrã para reiniciar o servidor. Carregue na tecla `F` para aceder às opções de arranque.

> [!primary]
> Poderá ter de utilizar o teclado de software para registar as entradas no IPMI. Para aceder, clique na opção `Keyboard`{.action} na barra de menus no topo da janela. De seguida, selecione `Soft Keyboard` no menu pendente e clique em `Show`{.action}.
>

Selecione a opção `UEFI Virtual CDROM 1.00` no menu de arranque (Boot) para iniciar o servidor a partir da ISO previamente associada.

![UEFI_Virt](images/UEFIVirt.jpg){.thumbnail}

Siga os passos necessários para instalar o sistema operativo. Não se esqueça de eliminar a norma ISO da opção "Redirect ISO".

### Instalação de um sistema operativo com o IPMI v2

> [!warning]
> A OVHcloud não garante a funcionalidade dos sistemas operativos instalados através do IPMI. Este método só deve ser considerado por um administrador de servidores experiente.
>

Para começar, abra o [IPMI a partir de uma applet Java](#applet-java) através da sua [Área de Cliente OVHcloud](/links/manager). A seguir, clique em `Virtual Media`{.action} e, a seguir, em `Virtual Storage`{.action}.

![Virtual storage](images/virtual_storage.png){.thumbnail}

Na nova janela, selecione a opção `ISO File` na lista pendente "Logical Drive Type". A seguir, clique em `Open Image`{.action} e navegue até ao seu ficheiro ISO. Finalmente, clique em `Plug-in`{.action} e `OK`{.action}.

![ISO_file](images/iso_file.png){.thumbnail}

Para começar a partir do seu ficheiro ISO, deve aceder à BIOS e alterar as opções de arranque. Para isso, clique em `Power Control`{.action} e, a seguir, em `Set Power Reset`{.action}.

![Power_Reserver](images/power_reset.png){.thumbnail}

> [!primary]
> Poderá ter de utilizar o teclado de software para registar as entradas no IPMI. Para aceder, clique na opção `Virtual Media`{.action} na barra de menus no topo da janela. De seguida, selecione `Virtual Keyboard`{.action} no menu pendente.
>

Durante o processo de arranque, prima a tecla `SUPR` quando for convidado a aceder à BIOS. Também pode carregar na tecla `F11` e aceder à BIOS selecionando a opção `Enter Setup`{.action}.

![Menu_arranque](images/boot_menu.png){.thumbnail}

Na BIOS, navegue até ao separador `Boot`{.action} e substitua `UEFI Boot Order #1` por `UEFI USB CD/DVD:UEFI: CDROM virtual ATEN YSOJ`.

![Bios](images/bios.png){.thumbnail}

Por fim, carregue na tecla `F4` para registar as suas modificações e reiniciar o servidor.

### Instalar um SO utilizando o browser KVM (apenas para os servidores mais recentes)

> [!warning]
> A OVHcloud não garante a funcionalidade dos sistemas operativos instalados através do IPMI. Este método só deve ser considerado por um administrador de servidores experiente.
>

Na sua [Área de Cliente OVHcloud](/links/manager), abra a [consola KVM](#kvm-browser).

Aqui, tem acesso às mesmas informações e funcionalidades que nos módulos IPMI baseados em Java.

> [!primary]
>
> Certifique-se de que executa os próximos passos a um bom ritmo. O processo pode ser anulado se houver pausas mais longas entre as ações.
>

Clique no botão `Browse File`{.action} e selecione o seu ficheiro de imagem.

![Instalação do KVM](images/kvm_install01.png){.thumbnail}

Clique em `Start Media`{.action}. Isto preparará a ISO para o processo de instalação.

![Instalação do KVM](images/kvm_install02.png){.thumbnail}

O tamanho do ficheiro apresentado não é o tamanho real. É normal, porque o ficheiro não é completamente descarregado nesta etapa.

![Instalação do KVM](images/kvm_install03.png){.thumbnail}

Clique em `Power`{.action} e selecione `Reset Server`{.action} (reinicializar o servidor) no menu pendente.

![Instalação do KVM](images/kvm_install04.png){.thumbnail}

Esperem que o ecrã de seleção de arranque seja apresentado e carreguem a tecla apropriada para entrar no menu de Boot (neste exemplo, `F11`).

![Instalação do KVM](images/kvm_install05.png){.thumbnail}

No menu boot, selecione o leitor óptico (`UEFI: AMI Virtual CDROM0` neste exemplo) e prima a `Entrada`.

![Instalação do KVM](images/kvm_install06.png){.thumbnail}

O ficheiro ISO vai agora ser telecarregado e o servidor vai começar a partir do ficheiro.

![Instalação do KVM](images/kvm_install07.png){.thumbnail}

<a name="bios"></a>

### Reiniciar um servidor no menu BIOS

Você pode entrar no BIOS enquanto estiver configurando ou solucionando problemas com seu servidor. Uma forma prática de o fazer é utilizar a ferramenta `ipmiutil` (ver [página do projeto](https://ipmiutil.sourceforge.net/) para mais informações).

Quando o servidor estiver em [modo rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) e quando estiver ligado, instale-o com o seguinte comando:

```bash
apt install ipmiutil
```

De seguida, reinicie o servidor com este comando:

```bash
ipmiutil reset -b
```

Aceda à [consola IPMI](#procedure) na [Área de Cliente OVHcloud](/links/manager). O menu BIOS do servidor deve ser exibido.

![KVM BIOS](images/kvm_bios.png){.thumbnail}

## Quer saber mais?

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa [comunidade de utilizadores](/links/community).
