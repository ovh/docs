---
title: "Instalar o agente Prometheus numa instância Public Cloud"
excerpt: "Descubra como instalar Prometheus Node Exporter ou Windows Exporter numa instância Public Cloud OVHcloud para recolher métricas"
updated: 2026-01-28
---

## Objetivo

Prometheus é um sistema de supervisão e uma base de dados de séries temporais. Pode instalar e utilizar o seu agente em instâncias Public Cloud OVHcloud para recolher métricas a partir dos seus servidores e aplicações.

**Descubra como instalar Prometheus Node Exporter ou Windows Exporter numa instância Public Cloud OVHcloud.**

> [!warning]
> 
> A OVHcloud coloca à sua disposição serviços cuja responsabilidade é sua. De fato, não tendo acesso a estas máquinas, não somos os seus administradores e não poderemos prestar assistência. É, portanto, da sua responsabilidade gerir e assegurar a segurança do software diariamente.
>
> Colocamos à sua disposição este guia para o ajudar no melhor possível com tarefas correntes. No entanto, recomendamos que contacte um [fornecedor especializado](/links/partner) se tiver dificuldades ou dúvidas em relação à administração, utilização ou segurança de um servidor. Não hesite em visitar o nosso [fórum comunitário](/links/community) para trocar informações com outros utilizadores.
>

## Requisitos

- [Criar uma instância a partir da Área de Cliente OVHcloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
- [Dispor de um acesso administrador à instância](/pages/public_cloud/compute/public-cloud-first-steps).
- Um servidor Prometheus em funcionamento e acessível a partir da instância.

## Instruções

Siga estes passos para instalar o agente Prometheus **Node Exporter** ou **Windows Exporter** na sua instância Public Cloud OVHcloud para recolher métricas.

### Passo 1: Conectar-se à sua instância

Conecte-se à sua instância via SSH:

```bash
ssh root@<INSTANCE_IP>
```

Substitua `<INSTANCE_IP>` pelo endereço IP público da sua instância.

> [!primary]
>
> Em Windows, utilize o PowerShell com SSH ou um cliente SSH como [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) se preferir utilizar uma interface de linha de comandos.
>
> Para Windows Server com interface gráfica, também pode utilizar o RDP (Remote Desktop).
>

### Passo 2: Atualizar o sistema

Certifique-se de que os pacotes do seu sistema estão atualizados:

> [!tabs]
> Para Debian / Ubuntu
>>
>> ```bash
>> sudo apt update && sudo apt upgrade -y
>> ```
>>
> Para CentOS / RHEL
>>
>> ```bash
>> sudo yum update -y
>> ```
>>
> Para Windows
>>
>> Não é necessária nenhuma atualização específica para Windows Exporter. Pode eventualmente garantir que o sistema está atualizado através do Windows Update.
>>

### Passo 3: Criar um utilizador Prometheus (opcional)

A criação de um utilizador dedicado para Node Exporter melhora a segurança em Linux, mas é opcional para Windows Exporter em Windows.

> [!tabs]
> Para Linux
>>
>> ```bash
>> sudo useradd --no-create-home --shell /bin/false prometheus
>> ```
>>
>> - Isto cria um utilizador com permissões limitadas para executar Node Exporter.
>> - Recomendado em produção para reduzir os riscos de segurança.
>> - Pode, em seguida, iniciar Node Exporter sob este utilizador através do systemd.
>>
> Para Windows
>>
>> > [!primary]
>> >
>> > **Nota**: Execute estes comandos PowerShell dentro da VM através de SSH.
>> >
>>
>> ```powershell
>> New-LocalUser "prometheus" -NoPassword -Description "User for Windows Exporter"
>>
>> Add-LocalGroupMember -Group "Users" -Member "prometheus"
>> ```
>>
>> **Nota**: Windows Exporter pode ser executado com o utilizador atual. A criação de um utilizador dedicado é opcional para um controlo de acesso mais estrito.
>>

### Passo 4: Transferir Node Exporter / Windows Exporter

> [!tabs]
> Para Linux
>>
>> ```bash
>> # Substitua VERSION pela versão mais recente, por exemplo 1.10.2
>> VERSION="1.10.2"
>> wget https://github.com/prometheus/node_exporter/releases/download/v$VERSION/node_exporter-$VERSION.linux-amd64.tar.gz
>> tar xvf node_exporter-$VERSION.linux-amd64.tar.gz
>> cd node_exporter-$VERSION.linux-amd64
>> ```
>>
> Para Windows (através de SSH / PowerShell na VM)
>>
>> > [!primary]
>> >
>> > `Invoke-WebRequest` requer PowerShell 3.0 ou superior.
>> >
>>
>> ```powershell
>> mkdir C:\windows_exporter
>> cd C:\windows_exporter
>>
>> Invoke-WebRequest -Uri "https://github.com/prometheus-community/windows_exporter/releases/download/v0.31.3/windows_exporter-0.31.3-amd64.msi" -OutFile "windows_exporter.msi"
>> ```
>>
>> Tudo é feito diretamente dentro da VM, não sendo necessário transferir ficheiros a partir da sua máquina local.
>>

### Passo 5: Iniciar Node Exporter / Windows Exporter

> [!tabs]
> Para Linux
>>
>> ```bash
>> ./node_exporter
>> ```
>>
>> - **Opcional**: configure um serviço systemd para executar Node Exporter automaticamente.
>> - Se utilizar o utilizador dedicado prometheus, certifique-se de que o serviço é executado sob esta conta.
>>
> Para Windows (através de SSH / PowerShell)
>>
>> ```powershell
>> msiexec /i windows_exporter.msi ENABLED_COLLECTORS=cpu,cs,logical_disk,net,os,service,system,textfile /qn
>> ```
>>
>> Em Windows Desktop ou Core, pode executá-lo diretamente no PowerShell ou configurá-lo como um serviço Windows.
>> 
>> É possível personalizar os collectors; consulte a [documentação oficial](https://github.com/prometheus-community/windows_exporter#collectors) para obter a lista completa.
>>

### Passo 6: Verificar Node Exporter / Windows Exporter

> [!primary]
>
> Node Exporter escuta por padrão na porta 9100.
>
> Windows Exporter escuta por padrão na porta 9182.
>
> Substitua `<PORT>` por 9100 para Linux ou 9182 para Windows.
>

O comando seguinte permite observar métricas como a utilização da CPU, memória, disco e rede:

```bash
curl http://<INSTANCE_IP>:<PORT>/metrics
```

> [!primary]
>
> Em Windows Desktop, também pode abrir um navegador para verificar. No entanto, através de SSH / PowerShell, utilize `curl` ou `Invoke-WebRequest`.
>

### Passo 7: Regras de firewall / segurança (OVHcloud)

Certifique-se de que a porta utilizada pelo exporter está aberta tanto no firewall da VM como no seu Security Group OVHcloud.

Limite o acesso apenas ao servidor Prometheus para maior segurança.

> [!tabs]
> Para Linux (Debian / Ubuntu com UFW)
>>
>> ```bash
>> sudo ufw allow 9100/tcp
>> sudo ufw status
>> ```
>>
>> **Nota**: se UFW indicar **Status: inactive**, isso significa que o firewall não está ativado na VM. A regra da porta é adicionada mas não aplicada.
>>
>> A segurança é principalmente gerida pelo seu Security Group OVHcloud.
>>
>> Se quiser ativar UFW, comece por autorizar SSH para evitar bloquear a sua ligação:
>>
>> ```bash
>> sudo ufw allow ssh
>> sudo ufw enable
>> sudo ufw status
>> ```
>>
> Para Windows
>>
>> Abra a porta 9182 no firewall do Windows:
>>
>> ```powershell
>> netsh advfirewall firewall add rule name="Windows Exporter" dir=in action=allow protocol=TCP localport=9182
>> ```
>>
>> Também pode verificar as regras com:
>>
>> ```powershell
>> netsh advfirewall firewall show rule name=all | findstr "9182"
>> ```
>>

### Passo 8: Conectar Node Exporter / Windows Exporter a Prometheus

1\. Edite o ficheiro de configuração de Prometheus no seu servidor Prometheus (prometheus.yml):

```yaml
scrape_configs:
  - job_name: 'node_exporter' # ou 'windows_exporter'
    static_configs:
      - targets: ['<INSTANCE_IP>:9100'] # ou 9182 para Windows Exporter
```

2\. Recarregue Prometheus:

> [!tabs]
> Para Linux
>>
>> ```bash
>> sudo systemctl reload prometheus
>> ```
>>
> Para Windows
>>
>> ```powershell
>> sc stop prometheus
>> sc start prometheus
>> ```
>>

3\. As métricas Node Exporter ou Windows Exporter da sua instância OVHcloud devem agora aparecer em Prometheus.

## Quer saber mais?

[Documentação oficial de Node Exporter](https://github.com/prometheus/node_exporter)

[Criar e configurar um grupo de segurança no Horizon](/pages/public_cloud/compute/setup_security_group)

Fale com a nossa [comunidade de utilizadores](/links/community).