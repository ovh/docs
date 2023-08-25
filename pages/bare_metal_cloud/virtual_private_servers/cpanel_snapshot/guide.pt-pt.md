---
title: 'Backup automático - Kernel panic (cPanel)'
excerpt: 'Saiba como resolver os problemas de bloqueio dos servidores cPanel durante o backup automático OVHcloud'
updated: 2023-06-06
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>


## Objetivo

Quando utiliza a função de backup automático para um VPS que executa o cPanel, poderá encontrar casos em que o seu VPS está bloqueado no estado de backup durante demasiado tempo e fica inacessível. A causa principal está ligada aos utilizadores do cPanel que utilizam o acesso Jailed Shell. que cria um "virtfs" no seu sistema de ficheiros. 

Ao criar um backup do seu VPS (no caso de subscrição dos backups automáticos ou das snapshots), o hypervisor comunica com o seu VPS por intermédio do QEMU Guest Agent para fiar o sistema de ficheiros no VPS, antes de proceder ao backup. Este mecanismo permite garantir que não é efetuada nenhuma escrita no seu disco durante a execução do backup e garante, portanto, a coerência do backup.
<br>No entanto, quando permite o acesso ao Jailed Shell, o cPanel cria um "virtfs" que não pode ser bloqueado desta forma. Então, o kernel é bloqueado e provoca um kernel panico.
<br>Existem três métodos para evitar esta situação:

1. Desativar o QEMU Guest Agent
2. Não autorizar Jailed Shell
3. Desativar a segurança da partição /tmp (não recomendada pelo cPanel, mas esta é uma opção disponível)

## Requisitos

- Ter um [VPS](https://www.ovhcloud.com/pt/vps/) (VPS Value, Essential, Comfort ou Elite) na sua conta OVHcloud
- cPanel deve ser instalado no seu servidor

## Instruções

Escolha entre as 3 opções acima e siga a secção do guia correspondente à sua escolha. Só precisa de seguir uma.
Escolha cuidadosamente porque cada uma tem as suas vantagens e desvantagens.

### Desativar o QEMU Guest Agent

Em primeiro lugar, deve verificar se o QEMU Guest Agent está a ser executado no seu servidor. Para o verificar, utilize o seguinte comando:

```bash
systemctl status qemu-guest
```

O estado do serviço é indicado junto de "Ative:". Se estiver ativo ou em execução, o serviço deverá ser interrompido e desativado, de modo a evitar que o mesmo volte a ser ativado no futuro. Para isso, utilize os seguintes comandos:

```bash
systemctl stop qemu-guest-agent
systemctl disable qemu-guest-agent;
```

### Passar de Jailed Shell para Normal Shell

Descubra as diferenças entre Jailed Shell e Normal Shell [aqui](https://support.cpanel.net/hc/en-us/articles/360051992634-Differences-Between-Normal-and-Jailed-Shell)

Para desativar um ambiente Jailed Shell para todos os utilizadores, deve desativar a opção jailshell por predefinição na interface "WHM’s Tweak Settings" (WHM >> Home >> Server Configuration >>Tweak Settings).

Esta opção permite ativar/desativar a utilização de um Jailed Shell para as novas contas e as utilizadas nas seguintes interfaces:

1. A interface "WHM’s Modify an Account" (WHM >> Home >> Account Functions >> Modify An Account).
2. A interface "WHM’s Upgrade/Downgrade an Account" (WHM >> Home >> Account Functions >>Upgrade/Downgrade An Account).

Esta opção não afeta as contas que já existem no servidor mas que não alterou nestas interfaces.

Para desativar o ambiente Jailed Shell de um utilizador específico, utilize a interface "WHM's Manage Shell Access" (WHM >> Home >> Account Functions >> Manage Shell Access).

Pode encontrar todas estas informações na [documentação oficial cPanel](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#disable-or-remove-a-jailed-shell-environment).

> [!warning]
>
> Tal como indicado pelo cPanel, algumas funcionalidades podem continuar a utilizar os dossieres criados pelo Jailed Shell. Assim, e apesar da desativação do ambiente Jailed Shell, pode continuar a experimentar dificuldades na gestão dos seus backups.
>
> Se pretender mesmo assim desativar a funcionalidade Jailed Shell e eliminar as pastas "virtfs" criadas, tenha cuidado pois a eliminação do diretório "virtfs" pode levar à perda de dados dos utilizadores.
>
> Certifique-se de que efetuou todas as cópias de segurança necessárias.

### Desativar a segurança da partição /tmp para cPanel

Tenha em conta que este método não é recomendado pelo cPanel. A sua utilização está ao seu risco. Se pretender continuar com esta opção, pode ler os passos exatos a partir da [documentação cPanel](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#harden-your-tmp-partition).

## Saiba mais

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
