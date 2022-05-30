---
title: 'Reinicializar uma palavra-passe Windows'
slug: reinicializar-uma-palavra-passe-windows
excerpt: "Guia de reinicialização de uma palavra-passe em Windows"
section: Diagnóstico e Modo Rescue
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 26/11/2020**

## Objetivo

É possível que tenha de repor uma palavra-passe no seu VPS em Windows. Este manual permite-lhe reinicializar facilmente uma palavra-passe e restabelecer a ligação ao seu VPS.

## Requisitos

- O VPS deve estar em modo rescue (para mais informações consulte [Ativar o modo rescue num VPS](../rescue)).

## Instruções

Ligue-se ao VPS através do VNC da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) com os dados de acesso que recebeu por e-mail.

Introduza os seguintes comandos para montar o sistema de ficheiros distante:

```sh
ntfsfix /dev/sdb2
mount-t ntfs-3g /dev/sdb2 /mnt
```

Agora, inicie o procedimento de recuperação da password:

```sh
cd /mnt/Windows/System32/config
chntpw -l SAM
```

Vão ver uma lista de utilizadores. Queira tomar nota da conta de administrador (ou de uma conta cuja palavra-passe deve reinicializar). Neste exemplo, vamos utilizar a conta `Administrator`. Tenha em conta que as encomendas são sensíveis ao desmantelamento.

```sh
chntpw -u Administrator SAM
```

Carregue em `1`{.action} e `Enter`{.action} para apagar a palavra-passe. Carregue em `q`{.action} para sair da linha de comandos de alteração da palavra-passe. De seguida, carregue `y`{.action} para escrever as alterações.

Agora pode tirar o VPS do modo rescue. (para mais informações, consulte o guia [Ativar o modo rescue num VPS](../rescue))

Na sua próxima ligação, não será obrigado a introduzir uma palavra-passe para a sessão cuja palavra-passe alterou.

> [!warning]
>
> É extremamente arriscado deixar a conta de administrador (ou qualquer conta com direitos elevados) com uma palavra-passe vazia. Conecte-se imediatamente à sua instalação do Windows para reinicializar a sua palavra-passe.
> 

Depois de aceder à sua sessão, prima o `CTRL`{.action} + `ALT`{.action} + `DELETE`{.action} e, a seguir, clique em `Alterar palavra-passe`{.action}. Se utilizar o VNC, clique no botão situado no canto superior direito, intitulado `Send CtrlAltDel`{.action}.

Deixe o campo `Antigo password` vazio e escreva a sua nova password duas vezes. Assegure-se de que a sua password é idêntica.

## Saiba mais

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
