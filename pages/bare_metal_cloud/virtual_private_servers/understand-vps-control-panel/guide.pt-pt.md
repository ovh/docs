---
title: "VPS - Gestão a partir da Área de Cliente OVHcloud"
excerpt: "Descubra como utilizar a Área de Cliente OVHcloud para gerir o seu VPS: painel de controlo, reinicialização, reinício, cópias de segurança e configuração do serviço"
updated: 2026-01-21
---

## Objetivo

- Compreender a interface de gestão dos VPS.
- Identificar as informações essenciais.
- Saber onde realizar as principais ações.

## Requisitos

- Ter uma oferta [VPS](/links/bare-metal/vps) ativa na sua Área de Cliente OVHcloud.

> [!warning]
> Algumas funcionalidades VPS mencionadas nesta página não estão disponíveis nas Local Zones OVHcloud.
>
> Visite a nossa [página Web das Local Zones](/links/bare-metal/vps-lz) para obter mais informações.

<!-- CP-NAV-START:baremetal-vps -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [VPS management](/links/control-panel/baremetal-vps)
- **Caminho de navegação:** `Bare Metal Cloud`{.action} > `Servidores Privados Virtuais`{.action} > Selecione o seu VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## Instruções

Este guia ajuda-o a **compreender a interface de gestão do seu VPS na Área de Cliente OVHcloud**, a identificar as informações essenciais e a utilizar as principais ações disponíveis (reinstalação, reinício, cópia de segurança, configuração).

**Índice:**

- [Painel de controlo](#controlpanel)
- [O seu VPS](#myvps)
- [A sua configuração](#myconf)
- [IP](#ip)
- [Backup](#save)
- [A minha oferta](#myoffer)
- [Reiniciar o seu VPS](#rebootvps)
- [Reinstalar o seu VPS](#reinstallvps)

### Painel de controlo <a name="controlpanel"></a>

O separador `Página Inicial`{.action} constitui o **painel de controlo principal** do seu VPS.

Centraliza as **informações-chave sobre o serviço** e dá acesso às **ações essenciais de gestão**.

![VPS Home](images/vpshome.png){.thumbnail}

#### O seu VPS <a name="myvps"></a>

Encontre abaixo as informações básicas sobre o seu VPS e o estado do serviço. Clique nos separadores abaixo para visualizar os detalhes.

> [!tabs]
> Nome
>>
>> Para personalizar o nome do seu VPS, clique no botão `...`{.action} e selecione `Alterar o nome`{.action}. Esta funcionalidade é útil para facilitar a navegação no espaço cliente quando gere vários serviços VPS. No entanto, o nome interno do serviço mantém-se no formato *VPS-XXXXXXX.VPS.ovh.net*.
>>
> Boot
>>
>> O modo de arranque indicado pode ser:
>>
>> - em **modo normal** (*LOCAL*), onde o servidor carrega o sistema operativo instalado.
>> - em **modo Rescue**, fornecido pela OVHcloud em caso de resolução de problemas.
>>
>> Utilize o botão `...`{.action} para [reiniciar o VPS](#rebootvps) ou para arrancar em modo Rescue, se necessário.
>>
>> Se necessário, encontre mais informações no nosso guia sobre o [modo rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).
>>
> SO / Distribuição
>>
>> Trata-se do sistema operativo atualmente instalado. Utilize o botão `...`{.action} para [reinstalar o mesmo sistema operativo ou escolher outro entre as Opções disponíveis](#reinstallvps).
>>
>> > [!warning]
>> >
>> > Uma reinstalação levará à eliminação de todos os dados atualmente alojados no VPS (com exceção dos discos adicionais).
>>
>> > [!primary]
>> >
>> > Se tiver encomendado um VPS **Windows**, só poderá escolher um sistema operativo Windows para a reinstalação. Da mesma forma, se Windows não foi selecionado no momento da encomenda, não poderá ser instalado após a entrega do VPS.
>>
>> Uma vez instalado o sistema, é da sua responsabilidade aplicar as atualizações de segurança do sistema operativo. Encontre mais informações na secção "[Reinstalar o seu VPS](#reinstallvps)" bem como no nosso guia "[Segurança de um VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)".
>> 
> Zona/Localização
>>
>> Estas secções fornecem informações sobre a localização do seu VPS. Isto pode ser útil para identificar e avaliar os possíveis impactos no seu serviço, como os mencionados nos [relatórios de incidentes ou manutenção](https://bare-metal-servers.status-ovhcloud.com/).
>>

#### A sua configuração <a name="myconf"></a>

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BbyE52W7aBo?si=mmgSmaqIxx0zzGz2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Clique nos separadores abaixo para visualizar os detalhes desta secção.

> [!tabs]
> Modelo
>>
>> Este elemento indica a referência comercial identificando o modelo de VPS, correspondente às [ofertas VPS no nosso site](/links/bare-metal/vps).
>>
> vCores/Memória/Armazenamento
>> 
>> As recursos atuais do seu VPS são apresentados aqui e podem ser atualizados separadamente ao clicar no link correspondente. Note que as atualizações são limitadas pelo modelo de VPS escolhido e só podem estar disponíveis ao passar para uma [gama superior](/links/bare-metal/vps).
>>
> Discos adicionais
>> 
>> Adicione discos adicionais ao seu VPS para aumentar a capacidade de armazenamento do seu servidor para além daquela incluída na configuração inicial. Pode, por exemplo, armazenar dados de cópia de segurança.

#### IP <a name="ip"></a>

Clique nos separadores abaixo para visualizar os detalhes desta secção.

> [!tabs]
> IPv4
>>
>> O endereço IPv4 público principal do VPS é configurado automaticamente na instalação. Encontre mais informações sobre a gestão de IPs no nosso guia "[Configurar um endereço IP em alias](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing)".
>>
> IPv6/Gateway
>> 
>> Encontre aqui o endereço IPv6 público e o endereço da gateway associado. Estes são automaticamente anexados ao VPS durante a instalação. Encontre mais informações no nosso guia "[Configurar o IPv6 num servidor VPS](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6)".
>> 
> DNS secundário
>>
>> Esta funcionalidade é útil para alojar serviços DNS. Consulte o nosso guia "[Configurar um DNS secundário OVHcloud num VPS](/pages/bare_metal_cloud/virtual_private_servers/adding-secondary-dns-on-vps)" para mais detalhes sobre este assunto.

#### Backup <a name="save"></a>

Estas Opções referem-se a serviços VPS adicionais para cópias de segurança e recuperação do seu sistema.

> [!tabs]
> Snapshot
>>
>> Um snapshot num VPS é uma cópia instantânea do estado do servidor, permitindo restaurar rapidamente o sistema em caso de problema. A opção `Snapshot` permite criar um snapshot manual como ponto de restauração único.
>>
> Backups automatizados
>>
>> Uma cópia de segurança diária do sistema (com exceção dos discos adicionais) é realizada automaticamente e mantida durante 24 horas (aplicável apenas aos serviços encomendados a partir do 7 de agosto de 2025). Ao passar para a opção "**Backup automático Premium**", terá as 7 últimas cópias de segurança diárias do seu VPS, que poderá utilizar para montagens e restaurações.  
>> Relativamente aos snapshots manuais, esta funcionalidade aumenta a segurança dos dados ao criar vários pontos de restauração em intervalos regulares.
>>

Encontre todas as informações sobre as soluções de cópia de segurança disponíveis para o seu serviço na [página do produto VPS](/links/bare-metal/vps-options) e nos [nossos guias respetivos](/products/bare-metal-cloud-virtual-private-servers-configuration).

#### A minha oferta <a name="myoffer"></a>

Esta secção apresenta as informações mais importantes sobre a faturação do seu serviço. Encontre todas as informações sobre este assunto nos [nossos guias respetivos](/products/account-and-service-management-managing-billing-payments-and-services).

<a name="hometab"></a>

### Funções VPS disponíveis no separador "Página Inicial"

> [!warning]
>
> A OVHcloud coloca à sua disposição serviços cuja configuração e gestão são da sua responsabilidade. É, portanto, da sua responsabilidade garantir o seu bom funcionamento.
>
> Este guia tem como objetivo acompanhá-lo ao máximo em tarefas comuns. No entanto, recomendamos que contacte um [fornecedor de serviços especializado](/links/partner) ou que contacte [a nossa comunidade](/links/community) se encontrar dificuldades ou dúvidas sobre a administração, utilização ou implementação de serviços num servidor.
>

#### Reiniciar o seu VPS <a name="rebootvps"></a>

Um reinício pode ser necessário para aplicar atualizações de configuração ou resolver um problema. Sempre que possível, efetue um "reinício software" a partir da interface gráfica do servidor (Windows, Plesk, etc.) ou através do seguinte comando na linha de comandos:

```bash
sudo reboot
```

No entanto, pode efetuar um reinício forçado a qualquer momento na sua [Área de Cliente OVHcloud](/links/manager). A partir do separador `Página Inicial`{.action}, clique no botão `...`{.action} ao lado de `Boot` na secção **O seu VPS**. Selecione `Reiniciar o meu VPS`{.action} e clique em `Confirmar`{.action} na janela que aparece.

![Reboot](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_reboot.png){.thumbnail}

#### Reinstalar o seu VPS <a name="reinstallvps"></a>

A reinstalação do seu VPS pode ser efetuada a partir do seu espaço cliente. Esta operação é normalmente utilizada em caso de problema no sistema, mudança de ambiente ou para começar com uma instalação limpa.

Clique no botão `...`{.action} à direita de `SO / Distribuição`{.action}, depois em `Reinstalar o meu VPS`{.action}.

![Reinstall](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_reinst.png){.thumbnail}

Na janela que aparece, escolha um sistema operativo na lista pendente. As Opções propostas são [imagens compatíveis com um VPS OVHcloud](/pages/public_cloud/compute/image-life-cycle) e são imediatamente funcionais após a instalação.

Se tiver selecionado um sistema operativo compatível, pode fornecer uma **chave pública** a instalar automaticamente. Existem duas possibilidades:

- Copie manualmente a cadeia de chave e cole-a no campo `A sua chave SSH pública`.
- Se tiver anteriormente [guardado uma chave pública](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel) na sua [Área de Cliente OVHcloud](/links/manager), selecione a chave desejada no menu pendente `Chave SSH a pré-instalar`.

![VPSnewreinstallation](images/reinstall.png){.thumbnail}

Para saber mais sobre este assunto, consulte os nossos guias:

- [Como criar e utilizar chaves de autenticação para ligações SSH aos servidores OVHcloud](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Tutorial - Como utilizar o PuTTY para ligações SSH e autenticação](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

Se tiver selecionado uma chave SSH e não precisar de palavra-passe para se ligar, ative a opção `Não quero receber os códigos de autenticação do meu VPS por e-mail`.

> [!warning]
>
> A reinstalação vai formatar todos os discos do servidor. Recomenda-se fortemente criar um snapshot do seu VPS antes de continuar, de modo a poder voltar ao estado anterior em caso de problema.
>

> [!primary]
>
> **Licenças**
>
> Certos sistemas operativos ou plataformas proprietárias, como Plesk ou cPanel, requerem licenças que geram custos adicionais. As licenças são administráveis a partir do seu espaço cliente: aceda à secção `Bare Metal Cloud`{.action}, depois clique em `Licenças`{.action} na barra de navegação à esquerda.
>
> Para ter um sistema operativo **Windows** a funcionar num VPS, é necessário tê-lo escolhido **no processo de encomenda**. Um VPS com outro sistema operativo instalado não pode ser reinstalado com Windows através do método descrito acima.
>

O processo de reinstalação pode demorar alguns minutos.

## Quer saber mais?

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Introdução ao SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Segurança de um VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Como recuperar o acesso ao servidor em caso de perda da palavra-passe do utilizador](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Fale com a nossa [comunidade de utilizadores](/links/community).