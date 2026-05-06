---
title: "Transferir ficheiros por SFTP num servidor dedicado"
excerpt: "Transfira ficheiros de e para o seu servidor dedicado utilizando SFTP com o FileZilla para uploads e downloads seguros."
updated: 2025-02-21
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

## Objetivo

Existem várias opções para transferir ficheiros entre um dispositivo local e um sistema anfitrião remoto. Para garantir a segurança da transferência, recomenda-se a utilização de um software cliente compatível com o protocolo SFTP (Secure File Transfer Protocol) na maior parte dos casos de utilização.

**Este tutorial explica como utilizar o FileZilla para transferir ficheiros via SFTP.**

> [!warning]
> A OVHcloud fornece serviços cuja configuração e gestão são da sua responsabilidade. Este tutorial explica como utilizar as soluções da OVHcloud com ferramentas externas. Talvez seja necessário adaptar algumas instruções específicas ao sistema operativo no dispositivo local ou no servidor.
>
> Recomendamos que entre em contacto com um [fornecedor de serviços especializado](/links/partner) ou entre em contacto com a [nossa comunidade](/links/community) se encontrar dificuldades.
>

## Requisitos

- Um [servidor dedicado](/links/bare-metal/bare-metal) ou um [VPS](/links/bare-metal/vps) na sua conta OVHcloud, com uma distribuição GNU/Linux instalada
- Um cliente FTP que suporte as ligações SFTP (por exemplo, [FileZilla](https://filezilla-project.org/)) instalado na estação de trabalho local
- Um acesso administrador em SSH ao seu servidor

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Acesso à Área de Cliente OVHcloud

- **Link direto:** [Servidores Dedicados](/links/control-panel/baremetal-dedicated-servers)
- **Caminho de navegação:** `Bare Metal Cloud`{.action} > `Servidores Dedicados`{.action} > Selecione o seu servidor

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Instruções

Vai precisar do endereço IP do seu servidor que pode encontrar na sua [Área de Cliente OVHcloud](/links/manager), assim como do nome da conta de utilizador a utilizar para a ligação SSH. Não hesite em consultar os nossos manuais "Primeiros passos" se deseja obter mais pormenores sobre este assumpto:

- [Servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Servidor dedicado da gama **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

Os exemplos seguintes baseiam-se em [FileZilla](https://filezilla-project.org/). Consulte o guia de utilização da sua aplicação se utilizar um cliente FTP diferente.

O processo pode precisar de etapas suplementares se o seu servidor for iniciado em **modo rescue**. Abra a secção correspondente abaixo em função do estado do servidor.

### Como aceder a um servidor através de um cliente SFTP

/// details | Expanda esta secção

Na interface do cliente FileZilla, introduza o endereço IP do servidor no campo `Host` e o seu nome de utilizador e palavra-passe nos respetivos campos. Introduza "22" no campo `Port`, a menos que tenha alterado a porta de ligação na qual o serviço SSH do seu servidor está a escuta.

Clique no botão `Quickconnect`{.action}.

> [!warning]
> Para aceder às pastas que pertencem à conta de utilizador `root` do seu SO, deve utilizar as credenciais do utilizador `root` para estabelecer a ligação SFTP. Esta conta não tem uma palavra-passe predefinida.  
> Se tiver a certeza de que deve aceder aos ficheiros do utilizador `root` através de SFTP, saiba como ativar esta ligação no nosso [guia da conta de utilizador](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

///

### Como aceder a um servidor em modo rescue através de um cliente SFTP

/// details | Expanda esta secção

Se ainda não realizou as ações necessárias para aceder aos seus ficheiros em modo rescue, consulte o guia correspondente para se ligar ao servidor e montar as partições:

- [Modo rescue para servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [Modo rescue para VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Na interface do cliente FileZilla, introduza o endereço IP do servidor no campo `Host` e "22" no campo `Port`. Introduza "root" no campo `Username` e a palavra-passe que lhe foi enviada por e-mail para o acesso em modo rescue no campo `Password`.

Clique no botão `Quickconnect`{.action}.

O sistema de ficheiros do servidor ficará localizado no diretório que definiu como ponto de montagem em modo rescue ("/mnt" neste exemplo).

![Modo de rescue sftp do local remoto](images/sftp_sd_03.png){.thumbnail}

///

### Utilização da interface FileZilla para descarregar os seus ficheiros

Uma vez estabelecida a ligação remota, será apresentada uma árvore dos ficheiros do servidor na secção `Remote Site`.

![site remoto sftp](images/sftp_sd_01.png){.thumbnail}

A parte central da interface FileZilla funciona como um explorador de ficheiros. Pode selecionar múltiplos ficheiros ou pastas, eliminá-los, arrastar e largar de um lado para o outro, etc. Os detalhes de utilização podem ser diferentes em função da versão do software e do sistema operativo local. Consulte o manual do utilizador [FileZilla](https://filezilla-project.org/) para obter mais informações.

Por exemplo, para recuperar ficheiros na pasta "/home/data" do servidor, abra esta pasta no painel da direita (`Remote Site`). Selecione os ficheiros ou as pastas que pretende transferir e arraste-os para o painel esquerdo (`Local Site`) numa pasta do seu dispositivo local.

A progressão da transferência de dados será então apresentada na fila em baixo.

![Progresso da transferência sftp](images/sftp_sd_02.png){.thumbnail}

## Quer saber mais?

[Introdução ao SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Configuração das contas de utilizador e do acesso root num servidor](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).