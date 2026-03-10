---
title: Primeiros passos com um VPS
excerpt: "Descubra como gerir um VPS na sua Área de Cliente OVHcloud e descubra as primeiras etapas da sua utilização, incluindo as ligações remotas e as medidas de segurança"
updated: 2026-01-21
---

## Objetivo

Um servidor privado virtual (VPS) é um servidor que você administra totalmente.

Ao contrário de um alojamento web gerido, você é responsável pelos seguintes elementos:

- Configuração: gerir e configurar o seu servidor.
- Segurança: proteger o seu VPS contra ataques.
- Manutenção: manter o servidor atualizado e operacional.
- Backups: testar regularmente os seus backups para garantir a restauração dos dados.

## Requisitos

- Dispor de uma oferta [VPS](/links/bare-metal/vps) ativa na sua Área de Cliente OVHcloud.

<!-- CP-NAV-START:baremetal-vps -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [VPS management](/links/control-panel/baremetal-vps)
- **Caminho de navegação:** `Bare Metal Cloud`{.action} > `Servidores Privados Virtuais`{.action} > Selecione o seu VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## Instruções

Para compreender a interface de gestão do seu VPS e as ações disponíveis na Área de Cliente OVHcloud, consulte o nosso [guia dedicado à utilização da Área de Cliente OVHcloud para VPS](/pages/bare_metal_cloud/virtual_private_servers/understand-vps-control-panel).

**Índice:**

- [Passo 1: Ligação inicial](#initial-connection)
    - [Distribuição GNU/Linux](#linuxconnect)
    - [Distribuição Windows](#winconnect)
- [Passo 2: Utilização da conta root](#rootaccount)
- [Passo 3: Segurança do seu VPS](#secure)
- [Passo 4: Associar um nome de domínio](#domain)

### Passo 1: Ligação inicial <a name="initial-connection"></a>

#### Linux: <a name="linuxconnect"></a>

Quando se liga ao seu VPS pela primeira vez, note que **a conta com que se liga não é root**.

Na OVHcloud, por razões de segurança e para proteger os serviços dos nossos clientes, criamos automaticamente um **nome de utilizador ligado ao sistema operativo escolhido** no momento da sua encomenda.

O nome de utilizador exato a utilizar para a ligação é claramente indicado no seu e-mail de entrega do VPS.

Por exemplo:

- Para **Debian**, o nome de utilizador será **debian**.
- Para **Ubuntu**, o nome de utilizador será **ubuntu**.
- Para **Rocky Linux**, o nome de utilizador será **rocky**.

A palavra-passe temporária associada a esta conta é enviada através de um link seguro no seu e-mail de entrega.

> [!primary]
> **Nota importante**: quando efetuar a sua **primeira ligação**, será solicitado que **mude esta palavra-passe temporária**.
>
> Após a alteração da palavra-passe, **a sessão será automaticamente encerrada**. Este é um comportamento normal. Terá de **ligar-se novamente com a nova palavra-passe**.

```bash
ssh username@IPv4_VPS
```

- Substitua "username" pelo utilizador correspondente ao seu SO.
- Substitua "IPv4_de_votre_VPS" pelo endereço IP indicado no e-mail de entrega.

#### Windows: <a name="winconnect"></a>

##### Finalizar a instalação de Windows

Após a instalação do sistema operativo Windows, recebe um e-mail com o nome de conta do utilizador predefinido `Windows user`.

Deverá então terminar o processo de instalação de Windows definindo a sua linguagem de exibição, a sua disposição do teclado e a sua palavra-passe de administrador.

Isto é feito na consola VPS KVM: Na aba `Página Inicial`{.action}, clique no botão `...`{.action} ao lado do nome do seu VPS na seção **Seu VPS** e selecione `KVM`{.action}.

Encontre mais informações sobre esta ferramenta no nosso "[guia KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps)".

Para finalizar a configuração inicial do seu VPS Windows, siga os passos abaixo navegando pelos separadores:

> [!tabs]
> 1. **Definições regionais**
>>
>> Uma vez estabelecida a sessão KVM, termine a configuração inicial de Windows configurando o seu **país/região**, a **linguagem de Windows** preferida e a sua **disposição do teclado**. Clique depois no botão `Seguinte`{.action} em baixo à direita.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}
>>
> 2. **Palavra-passe de administrador**
>>
>> Defina uma palavra-passe para a sua conta Windows `Administrator`/`admin`, confirme-a, e clique em `Terminar`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}
>>
> 3. **Ecrã de ligação**
>>
>> Windows aplicará as suas definições, depois mostrará o ecrã de ligação. Clique no botão `Send CtrlAltDel`{.action} em cima à direita para se ligar.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}
>>
> 4. **Login de administrador**
>>
>> Introduza a palavra-passe `Administrator` que criou no passo anterior e clique na `seta`.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}
>>

##### Ligar-se ao servidor com RDP

No seu equipamento Windows local, pode utilizar a aplicação cliente "Ligar ao ambiente de trabalho remoto" para se ligar ao VPS.

![Windows remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Introduza o endereço IPv4 do seu VPS, depois o seu identificador e a sua palavra-passe. Normalmente, aparece uma mensagem de aviso, pedindo-lhe para confirmar a ligação devido a um certificado desconhecido. Clique em `Sim`{.action} para se ligar.

Também pode utilizar outra aplicação de terceiros compatível com RDP. Esta condição é necessária se o Windows não estiver instalado no seu dispositivo local.

> [!primary]
>
Se encontrar dificuldades com este procedimento, verifique se as ligações remotas (RDP) estão permitidas no seu dispositivo verificando as definições do sistema, as regras do firewall e as restrições de rede possíveis.
>

Para facilitar o diagnóstico em caso de problema, recomendamos **ativar os registos de arranque Windows** seguindo o nosso [guia dedicado](/pages/bare_metal_cloud/virtual_private_servers/windows-boot-logs).

### Passo 2: Utilização da conta root (opcional mas recomendado) <a name="rootaccount"></a>

O utilizador root está desativado por predefinição para a segurança do seu produto.

Para tarefas de administração, utilize sudo a partir do seu utilizador principal:

```bash
sudo comando
```

Se quiser ativar root:

```bash
sudo passwd root
```

### Passo 3: Segurança do seu VPS <a name="secure"></a>

Se quiser proteger o seu VPS, recomendamos seguir o nosso guia "[Segurança de um VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)". Este guia acompanha-o passo a passo e detalha, entre outras, as seguintes ações:

- Atualizar o sistema.
- Alterar a porta de escuta SSH predefinida.
- Configurar o firewall interno.
- Instalar fail2ban para bloquear tentativas de ligação repetidas.
- Fazer backup do seu sistema e dados.

### Passo 4: Associar um nome de domínio (opcional mas recomendado) <a name="domain"></a>

A publicação do seu VPS passa normalmente pela utilização e configuração de um nome de domínio. 

Para isso, recomendamos que execute as seguintes ações:

- [Editar a zona DNS](/pages/web_cloud/domains/dns_zone_edit) adicionando as entradas necessárias para apontar o domínio para o endereço IPv4 do seu VPS.
- [Ativar um certificado SSL gratuito (Let's Encrypt)](/pages/bare_metal_cloud/virtual_private_servers/install-ssl-certificate) para proteger o acesso aos seus sites web através de HTTPS.

## Quer saber mais?

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Apresentação do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Segurança de um VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Como recuperar o acesso ao servidor em caso de perda da palavra-passe do utilizador](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Fale com a nossa [comunidade de utilizadores](/links/community).