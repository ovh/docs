---
title: "VPS - Ativar os registos de arranque do Windows"
excerpt: "Descubra como ativar os registos de arranque do Windows para facilitar o diagnóstico e a resolução de problemas de arranque do seu VPS"
updated: 2026-01-21
---

## Objetivo

Os registos de arranque do Windows permitem identificar os controladores e serviços carregados durante o arranque do sistema.  
São particularmente úteis para o **diagnóstico de problemas de arranque**, **ecrãs azuis** ou **bloqueios do sistema**.

**Este guia explica como ativar os registos de arranque num servidor Windows para facilitar a análise e a resolução de problemas do seu VPS.**

## Requisitos

- Ter uma oferta [VPS](/links/bare-metal/vps) ativa na sua área de cliente OVHcloud.

## Instruções

### Ativação dos registos de arranque do Windows

Os registos de arranque do Windows podem ser úteis para diagnósticos de erros do servidor.

Para os ativar, siga os passos abaixo, navegando pelos separadores:

> [!tabs]
> 1. **Ligar-se ao servidor**
>>
>> Ligue-se ao seu servidor através de um ambiente de trabalho remoto ou uma [sessão KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).
>>
> 2. **Abrir o utilitário "Executar"**
>>
>> Abra o menu `Iniciar` do Windows e clique em `Executar`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}
>>
> 3. **Abrir `msconfig`**
>>
>> Introduza `msconfig` e clique em `OK`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}
>>
> 4. **Ativar os registos**
>>
>> Na nova janela, ative a opção de registos ao lado de `Boot log`. Clique depois em `OK`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}
>>

No próximo arranque do seu servidor, os registos serão guardados num ficheiro `.txt`. O caminho de acesso ao ficheiro é: `C:\Windows\ntbtlog.txt`.

Para aceder ao ficheiro de registo em modo rescue, siga as instruções do guia "[Ativar e utilizar o modo rescue num VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)".

## Quer saber mais?

[Alterar a palavra-passe do administrador num servidor Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[O que é o SSH?](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Segurança de um VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Como recuperar o acesso ao servidor em caso de perda da palavra-passe do utilizador](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Fale com a nossa [comunidade de utilizadores](/links/community).