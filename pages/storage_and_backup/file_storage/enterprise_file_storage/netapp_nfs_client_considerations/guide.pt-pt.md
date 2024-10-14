---
title: "Enterprise File Storage - Particularidades relativas a certos clientes NFS"
excerpt: "Parâmetros específicos a verificar e/ou a aplicar relativamente à oferta Enterprise File Storage"
updated: 2024-10-10
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

**Descubra como permitir o acesso de leitura/escrita à sua empresa File Storage a partir de certos clientes NFS.**

## Requisitos

- Ter um plano [Enterprise File Storage](/links/storage/enterprise-file-storage)

## Na Prática

### Clientes NFS Microsoft Windows

#### Certifique-se de que o utilizador Windows utilizado para aceder à sua Empresa File Storage dispõe de direitos suficientes

O binário UID/GID deve ser configurado para 0 (direito unix root).

Se não for o caso, terá erros de acesso à sua Entreprise File Storage pois, quando o NFS é autorizado numa máquina Windows, um utilizador UNIX é criado com o UID e o GID predefinidos a -2 (ou 4294967294).

Como solução alternativa, o UID e o GID podem ser forçados a zero na máquina Windows que acede à sua Entreprise File Storage.

- Inicie o editor de registo na máquina cliente.
- Localize `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ClientForNFS\CurrentVersion\Default`.
- Crie dois valores DWORD, nomeadamente AnonymousUid e AnonymousGid.
- Defina estes valores em UID e GID para 0.
- Reinicie o serviço NFS na máquina cliente.

> [!primary]
>
> **Documentações de referência:**
>
> - <https://techcommunity.microsoft.com/t5/running-sap-applications-on-the/installation-configuration-of-windows-nfs-client-to-enable/ba-p/367084>
> - <https://learn.microsoft.com/en-gb/archive/blogs/msdn/sfu/can-i-set-up-user-name-mapping-in-windows-vista>
> - <https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc753302(v=ws.10)?redirectedfrom=MSDN>
> - <https://kb.netapp.com/on-prem/ontap/da/NAS/NAS-KBs/Unable_to_perform_write_operations_on_an_export_mounted_on_a_Windows_machine>

#### Permita ligações de convidados não seguras para protocolos SMB2 e SMB3

Poderá ser necessário ativar as ligações de convidado para aceder ao seu Enterprise File Storage, pois este não fornece uma conta de utilizador, mas apenas um acesso de convidado.

Eis o procedimento que deve seguir para alterar a sua política de segurança em conformidade:

- Execute num prompt de comando `gpedit.msc` e selecione `Edit group policy``.
- No painel esquerdo, em `Local Computer Policy`, clique em `Computer Configuration\Administrative Templates\Network\Lanman Workstation`.
- Abra `Enable insecure guest logons`, selecione `Enabled` e selecione `OK`.

> [!primary]
>
> **Documentação de referência:**
>
> - <https://learn.microsoft.com/en-us/windows-server/storage/file-server/enable-insecure-guest-logons-smb2-and-smb3?tabs=group-policy>

#### Peça a ativação da funcionalidade "showmount" ao suporte OVHcloud

Por razões de segurança, a opção "showmount" que permite listar as partilhas disponíveis num servidor NFS está desativada por predefinição.
No entanto, se receber erros do tipo "invalid device error" durante certas operações de escrita ou se utilizar uma aplicação que deve absolutamente utilizar esta funcionalidade, abra um [ticket junto do suporte OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help) para pedir que a funcionalidade seja ativada excecionalmente.

> [!primary]
>
> **Documentação de referência:**
>
> - <https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/showmount>

## Quer saber mais?

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa [comunidade de utilizadores](/links/community).
