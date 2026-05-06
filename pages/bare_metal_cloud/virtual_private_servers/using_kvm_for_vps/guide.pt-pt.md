---
title: Como utilizar a consola KVM para aceder a um VPS
excerpt: Saiba como aceder ao VPS através de um browser com a funcionalidade KVM
updated: 2025-02-07
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

A consola KVM para VPS, disponível na Área de Cliente OVHcloud, permite-lhe abrir uma ligação ao VPS no seu browser, independentemente de ter instalado um software de ligação adicional. Neste contexto, KVM significa "*keyboard, video, and mouse*", referindo-se ao método de entrada/saída emulado da ligação à distância.

> [!primary]
>
> Tenha em conta que a consola KVM não é uma solução alternativa se tiver perdido o acesso ao sistema operativo do seu VPS. Deverá então [utilizar o modo rescue do VPS para recuperar o acesso ao servidor](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password).

**Este guia explica como aceder ao VPS utilizando a consola KVM.**

## Requisitos

- Um [VPS](/links/bare-metal/vps) na sua conta OVHcloud.

<!-- CP-NAV-START:baremetal-vps -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [VPS management](/links/control-panel/baremetal-vps)
- **Caminho de navegação:** `Bare Metal Cloud`{.action} > `Servidores Privados Virtuais`{.action} > Selecione o seu VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## Instruções

### Como abrir a consola KVM através da Área de Cliente OVHcloud

No separador `Informações gerais`{.action}, clique no botão `...`{.action} junto ao nome do seu VPS na secção **O seu VPS**.

![Open KVM](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_kvm.png){.thumbnail}

### Como abrir a consola KVM através da API OVHcloud

/// details |  Expanda esta secção

Se não está familiarizado com a utilização da API OVHcloud, consulte o nosso guia "[Primeiros passos com as API OVHcloud](/pages/manage_and_operate/api/first-steps)".

Para obter o URL de acesso do KVM, abra este ponto de terminação:

> [!api]
>
> @api {v1} /vps POST /vps/{serviceName}/getConsoleUrl
>

Introduza o nome interno da sua VPS (`vps-x11x11xyy.vps.ovh.net`) no campo `serviceName`.

Clique no botão `EXECUTE`{.action}.

O URL de acesso será apresentado na secção `RESPONSE`.

///

### Utilização da consola KVM

Se aceder ao KVM a partir da Área de Cliente, ser-lhe-á exibida uma janela pendente. Para o utilizar em ecrã inteiro, clique no link `Abrir numa nova janela`{.action} no canto inferior direito. Isso geralmente abrirá uma nova aba do navegador.

![Ligação ao KVM](images/kvm_screen.png){.thumbnail}

O ecrã KVM indicado depende do sistema operativo e do estado individual do VPS. Se solicitado, faça login com as credenciais de uma conta de usuário ativa.

Também pode utilizar software cliente de terceiros para iniciar sessão.

#### Como alterar o layout do teclado

> [!primary]
>
> O teclado da consola KVM pode ser diferente do seu. Antes de introduzir uma palavra-passe, introduza alguns caracteres para verificar a disposição, por exemplo através de [esta página](https://en.wikipedia.org/wiki/Keyboard_layout#Conventional_Latin-script_keyboard_layouts).
>

Pode ativar a configuração de teclado desejada para facilitar a utilização da consola. Introduza o seguinte comando:

```bash
sudo dpkg-reconfigure keyboard-configuration
```

Se necessário, instale o pacote primeiro através do gestor de pacotes da sua distribuição (`sudo dnf install keyboard-configuration` ou `sudo apt install keyboard-configuration`).

Abre-se um menu gráfico no qual pode selecionar um modelo de teclado.

![KVM](images/kvm_vps01.png){.thumbnail}

Utilize as teclas de seta para aceder à opção mais próxima do seu hardware e prima `Enter`{.action}.

No menu seguinte, selecione o seu país.

![KVM](images/kvm_vps02.png){.thumbnail}

No terceiro menu, pode especificar o layout real do teclado.

![KVM](images/kvm_vps03.png){.thumbnail}

Em função das suas seleções, podem ser apresentadas outras opções após o terceiro menu.

De volta à linha de comandos, insira o seguinte comando para aplicar as modificações:

```bash
sudo systemctl restart keyboard-setup
```

> [!primary]
>
> Esta alteração não persistirá se o servidor for reiniciado.
>

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).