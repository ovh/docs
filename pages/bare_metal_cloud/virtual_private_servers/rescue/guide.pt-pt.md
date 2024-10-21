---
title: Ativar e utilizar o modo rescue num VPS
excerpt: Descubra como utilizar o modo rescue OVHcloud para solucionar problemas com o seu VPS e efetuar verificações do sistema
updated: 2024-02-19
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O modo de segurança (*rescue*) é uma ferramenta fornecida pela OVHcloud para iniciar o seu VPS num sistema operativo temporário. Em seguida, você pode acessar seu sistema para executar tarefas de diagnóstico e resolver vários problemas, como por exemplo:

- [Redefinição da palavra-passe do utilizador para recuperar o acesso](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)
- Diagnóstico de Problemas de Rede
- Reparar um sistema operativo com falha
- Reparar uma firewall de software mal configurada
- Teste das performances do disco

Se encontrar um problema com o seu sistema, efetuar verificações em modo rescue permite determinar se ele está associado a um software instalado no VPS ou se existe uma causa mais profunda. Antes de contactar as nossas equipas de suporte, recomendamos que utilize o modo rescue para recolher os resultados dos testes e excluir os erros de software.

> [!warning]
>
> Se alguns dos seus serviços ainda estiverem online, o modo rescue irá interrompê-los quando o servidor for reiniciado no ambiente de backup auxiliar.
>

**Este guia explica como ativar o modo rescue a partir da Área de Cliente OVHcloud e como utilizá-lo para aceder ao sistema de ficheiros VPS.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)
- Ter o seu [VPS OVHcloud](https://www.ovhcloud.com/pt/vps/){.external} já configurado.

> [!warning]
> A OVHcloud fornece serviços cuja configuração e gestão são da sua responsabilidade. É da sua responsabilidade assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. Contudo, se encontrar dificuldades ou dúvidas relativamente à administração, utilização ou implementação de serviços num servidor, recomendamos que contacte um [fornecedor de serviços especializado](https://partner.ovhcloud.com/pt/directory/) ou que contacte a [nossa comunidade](https://community.ovh.com/en/).
>

## Instruções

### Ativação do modo rescue

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), vá à secção `Bare Metal Cloud`{.action} e selecione o seu servidor na secção `Servidor privado virtual`{.action}.

No separador `Acolhimento`{.action}, clique em `...`{.action} junto de "Boot" na zona **O seu VPS**.

![configuração do modo rescue](images/rescue_new.png){.thumbnail}

Selecione `Reiniciar em modo de rescue`{.action} no menu.

Se a sua Área de Cliente for diferente, consulte o nosso guia [Gerir um VPS legacy](/pages/bare_metal_cloud/virtual_private_servers/vps_legacy_control_panel).

### Utilização do modo rescue

Uma vez que a reinicialização tiver sido iniciada, será apresentada uma barra de progresso indicando a duração da tarefa. Tenha em atenção que isto pode demorar alguns minutos.

> [!primary]
>
> Receberá um e-mail automático com as informações de identificação SSH para aceder ao modo rescue. Aguarde a receção do e-mail antes de prosseguir com qualquer ação. Este e-mail também está disponível na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Para o encontrar, clique no seu nome de utilizador OVHcloud na barra de menus no canto superior direito e, em seguida, selecione `E-mails de serviço`{.action}.
>

De seguida, deverá [aceder ao servidor através de SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction), utilizando a palavra-passe temporária gerada para o modo rescue.

Exemplo:

```bash
ssh root@vps-x11x11xyy.vps.ovh.net
```

```console
root@vps-x11x11xyy.vps.ovh.net's password:
```

> [!warning]
>
> O seu cliente SSH poderá bloquear a ligação inicialmente devido a uma incompatibilidade da impressão digital ECDSA. Isto é normal porque o modo rescue utiliza o seu próprio servidor SSH temporário.
>
> Uma forma de contornar este problema é "comentar" impressão digital do seu VPS adicionando um `#` na frente da linha no ficheiro `known_hosts`. Não se esqueça de cancelar esta alteração antes de passar o netboot de volta ao modo "normal".<br>Pode também eliminar a linha do ficheiro. O cliente SSH adicionará uma nova entrada digital ao VPS quando a ligação for estabelecida. Se precisar de mais instruções, consulte o guia [Introdução ao SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction#login).
>

Para efetuar a maior parte das modificações no seu servidor através de SSH em modo rescue, deverá montar a partição do sistema.

Depois de ligado, verifique os discos ligados com este comando:

```bash
lsblk
```

O resultado será semelhante ao seguinte exemplo de saída:

```console
NAME    MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda       8:0    0   2.9G  0 disk
└─sda1    8:1    0   2.9G  0 part /
sdb       8:16   0   160G  0 disk
├─sdb1    8:17   0 159.9G  0 part
├─sdb14   8:30   0     4M  0 part
└─sdb15   8:31   0   106M  0 part
```

No modo rescue, `sda` é o disco em modo rescue e `sda1` é a partição de backup principal montada em `/`.

Neste exemplo, o disco principal do VPS é `sdb` e a partição do sistema é `sdb1` (indicada pelo tamanho).

Monte esta partição com o seguinte comando:

```bash
mount /dev/sdb1 /mnt/
```

Os seus ficheiros estão agora acessíveis a partir do ponto de montagem `/mnt`:

```bash
cd /mnt
```

```bash
ls
```

Nesse caso, deverá ver o sistema de ficheiros:

```console
bin  boot  dev  etc  home  lib  lib32  lib64  libx32  lost+found  media  mnt  opt  proc  root  run  sbin  snap  srv  sys  tmp  usr  var
```

No entanto, antes de poder manipular esta partição, deve abri-la para um acesso de escrita, o que pode fazer com o seguinte comando:

```bash
chroot /mnt
```

Agora já pode aplicar alterações ao seu sistema, por exemplo [redefinir palavras-passe e chaves SSH](#gofurther).

Depois de concluir as suas ações em modo rescue, reinicie o VPS em modo normal a partir da Área de Cliente.

![rescue mode control panel](images/rescue_exit.png){.thumbnail}

### Resolver problemas de arranque

Se ocorrer um erro ao reiniciar um VPS, efetue estes passos:

- Verifique o KVM na Área de Cliente para obter informações pertinentes sobre as razões pelas quais o VPS não pode iniciar. Consulte o nosso [guia KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps) para obter ajuda para esta funcionalidade.
- Se o KVM indicar que o VPS se encontra bloqueado durante o arranque ou não consegue encontrar o disco, certifique-se de que [os logs de arranque estão ativados](/pages/bare_metal_cloud/virtual_private_servers/bootlog_display_kvm). Transfira os logs pertinentes para as nossas equipas de suporte para mais investigações em [criar um pedido de assistência](https://help.ovhcloud.com/csm?id=csm_get_help).

<a name="gofurther"></a>

## Quer saber mais?

[Introdução ao SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Recuperar o acesso ao servidor em caso de perda da palavra-passe de utilizador](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

[Substituir um par de chaves SSH](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)

[Verificar o sistema de ficheiros num VPS](/pages/bare_metal_cloud/virtual_private_servers/check-filesystem)

Junte-se à nossa comunidade de utilizadores <https://community.ovh.com/en/>.
