---
title: "Backup Agent - Diagnóstico e resolução de problemas"
excerpt: "Descubra como resolver problemas potenciais relacionados ao Backup Agent"
updated: 2026-01-09
---

<style>
/* ---FAQ only--- */
details {
    margin: 0.1rem 1;
    border: 1px solid transparent;
    border-radius: 4px;
    background: #ffffffff;
}
details > summary {
    padding: 0.1rem 1rem;
    font-weight: 500;
    color: #268fd4ff;
    cursor: pointer;
    list-style: none;
}
details > summary::before {
    content: '\25B6';
    display: inline-block;
    margin-right: 0.5ch;
    transition: transform 0.2s;
}
details[open] > summary::before {
    content: '\25BC';
}
details:hover {
    border: 1px solid #147DE8;
    border-radius: 4px;
    transition: border-color 0.5s ease;
}
details[open] > summary {
    background: #ffffffff;
}
details > :not(summary) {
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    list-style-position: inside;
}
.smallish-gap {
    display: block;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
}
</style>


## Objetivo

Encontre nesta página uma lista de possíveis problemas que pode encontrar no produto Backup Agent e como resolvê-los.

## Requisitos

- Um servidor Bare Metal no qual o Backup Agent está instalado. Consulte o nosso guia "[Como configurar a sua primeira cópia de segurança](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)" para mais informações.

## Lista de possíveis problemas

/// details | O meu Backup Agent não consegue ligar-se ao seu servidor.

Verifique se o seu firewall permite a comunicação com o nosso servidor `vspc-cgw1.prod01.eu-west-rbx.Backup.ovhcloud.com` (137.74.125.230) na Europa com a porta TCP e UDP 6180.

Certifique-se de que nenhum outro serviço utiliza portas que possam entrar em conflito com o seu servidor.

Pode encontrar os registos do seu Backup Agent na pasta: `C:\ProgramData\Veeam\` ou `/var/logs`.

///

/// details | O seu servidor não consegue instalar o agente de cópia de segurança no meu servidor.

O Backup Agent suporta distribuições Windows e kernels Linux nativos. Se fez alterações ao seu kernel, deve assegurar-se de que tem os pacotes corretos para permitir a instalação do agente. Encontrará a lista dos parâmetros necessários aqui: <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13>.

///

/// details | O meu Backup Agent não consegue fazer cópias de segurança, obtenho o erro: "Failed to perform Backup. Neither blksnap nor veeamsnap module was found."

O Backup Agent suporta as distribuições Windows e os kernels Linux nativos. Se fez alterações ao seu kernel, deve assegurar-se de que tem os pacotes corretos para permitir a instalação do agente. Encontrará a lista dos parâmetros necessários aqui: <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13>.

Precisa, em primeiro lugar, dos headers do kernel Linux e, em seguida, pode tentar instalar ou reconfigurar o seu pacote veeamsnap ou veeamblksnap ou blksnap, consoante o sistema operativo.

///

/// details | O meu agente não consegue fazer cópias de segurança, obtenho o erro: `POSIX: Failed to create or open file [/.veeamsnapstorage/veeamsnapstore`

Para fazer cópias de segurança, o Veeam efetua snapshots, além de conservar os dados que serão escritos na cópia de segurança, este snapshot chama-se "veeamsnapstorage".

Para resolver este problema, aumente o tamanho do snapshot através do ficheiro `/etc/veeam/veeam.ini`:

```bash
[blksnap]
 
# The minimum allowable size of the difference Storage in sectors
diffStorageMinimum = 2097152
```

Substitua o valor em bytes pelo número de GB desejado (GB dividido por 512, para 3 GB é preciso colocar 3221225472 / 512 = 6 291 456)

Por fim, reinicie o serviço veeamservice.

///

/// details | Não consigo iniciar uma cópia de segurança manual.

[Contacte o suporte OVHcloud](/links/support) que poderá investigar. Certifique-se de nos fornecer registos e capturas de ecrã.

///

/// details | A minha utilização do armazenamento não atualizou-se após a eliminação de um agente.

Conservamos os seus dados durante 14 dias após a eliminação de um agente, a utilização do armazenamento atualizar-se-á após os 14 dias e a eliminação dos dados.

///

/// details | Desinstalei o meu Veeam Agent, como o reinstalo?

[Contacte o suporte OVHcloud](/links/support) para que a nossa equipa possa ajudá-lo a reinstalar o seu agente.

///

/// details | Reinstalei o meu servidor, como reinstalo o Backup Agent?

Tem de eliminar o seu agente na secção Agents do seu vspc-tenant e, em seguida, transferir e instalar o agente no seu novo sistema operativo.

///

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).