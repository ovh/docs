---
title: "Utilizar snapshots num alojamento VPS"
excerpt: "Saiba como ativar e utilizar a opção Snapshot na Área de Cliente OVHcloud"
updated: 2024-09-18
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Sumário

Criar um snapshot é uma forma simples e rápida de garantir o funcionamento de um sistema antes de proceder a alterações que podem ter consequências indesejadas e imprevisíveis como, por exemplo, testar uma nova configuração ou software. Não constitui, no entanto, uma estratégia completa de backup do sistema.

**Este guia explica-lhe como utilizar snapshots no seu alojamento OVHcloud VPS.**

> [!primary]
>
Antes de aplicar as opções de backup, recomendamos que consulte as [páginas e perguntas frequentes do produto](https://www.ovhcloud.com/pt/vps/options/) para obter uma comparação de preços e outras informações.
>

## Requisitos

- acesso à [Área de Cliente OVHcloud](/links/manager)
- um [serviço VPS](https://www.ovhcloud.com/pt/vps/) OVHcloud já instalado

## Instruções

Ligue-se à sua [Área de Cliente OVHcloud](/links/manager), vá à secção `Bare Metal Cloud`{.action} e selecione o seu servidor na secção `Servidor privado virtual`{.action}.

### Passo 1: Subscrever a opção snapshot

No separador `Inicial`{.action}, procure a caixa **Sumário de opções**.  
Se "Snapshot" já estiver no estado "Ativada", passe diretamente para a etapa 2. Se "Snapshot" ainda não estiver ativado, clique em `...`{.action} ao lado da opção "Snapshot" e no respetivo menu clique em `Encomendar`{.action}.

![snapshotvps](images/snapshot_vps_step1b.png){.thumbnail}

Na etapa seguinte, tome nota da informação relativa ao preço e depois clique em `Encomendar`{.action}. Será então guiado através do processo de encomenda que será confirmado com o envio de um e-mail.

Para rescindir a opção de serviço, clique no botão `...`{.action} ao lado de "Snapshot" e escolha `Rescindir`{.action} no menu contextual.

![snapshotvps](images/snapshot_vps_cancel.png){.thumbnail}

### Passo 2: Obter um snapshot

Uma vez ativada esta opção, clique em `...`{.action} junto à opção "Snapshot" e no respetivo menu clique em `Obter snapshot`{.action}. Pode introduzir uma descrição que será associada à sua snapshot. A duração da criação da snapshot depende do espaço de armazenamento utilizado. No final, o tempo de duração será indicado na caixa “Sumário de opções”.

### Passo 3: Apagar/restaurar um snapshot

Uma vez que apenas é permitido ter um snapshot ativado de cada vez, o snapshot existente terá de ser apagado antes de criar um novo. Para o fazer, selecione `Apagar snapshot`{.action} no respetivo menu.

![snapshotvps](images/snapshot_vps_step2.png){.thumbnail}

Se tem a certeza que pretende restaurar o estado do seu alojamento VPS de acordo com o snapshot, clique em `Restaurar snapshot`{.action} e confirme na janela de pop-up.

> [!alert]
>
> Tenha em atenção que quando restaurar um VPS a partir de um instantâneo, este será eliminado. Se deseja conservar a mesma imagem, deve tomar uma nova antes de efetuar modificações no sistema restaurado.
>
> Se a função snapshot é demasiado limitada para o seu projeto, a opção [Backups automatizados](/pages/bare_metal_cloud/virtual_private_servers/using-automated-backups-on-a-vps) é uma alternativa.
>

### Descarregar uma snapshot

A snapshot em curso pode ser recuperada através de um link de download. Clique no botão `...`{.action} junto à opção `Snapshot` e escolha `Fazer o download do Snapshot`{.action} no menu contextual.

![snapshotvps](images/snapshot_vps03.png){.thumbnail}

> [!primary]
>
> Se o seu VPS é de uma gama antiga, é possível que receba uma mensagem de erro, pois a opção não está disponível nos VPS antigos. O seu VPS é de uma gama antiga se o seu modelo de atribuição for semelhante a: *vpsXXXX.ovh.net* (em que *X* representa um número). Pode verificar esta referência de servidor no separador `Página Inicial`{.action} da [Área de Cliente OVHcloud](/links/manager).
>

Na nova janela, clique em `Gerar o link de download`{.action}.

![snapshotvps](images/snapshot_vps04.png){.thumbnail}

Depois de alguns segundos, surge uma mensagem de sucesso. Abaixo, pode copiar o comando completo de download num clique.

![snapshotvps](images/snapshot_vps05.png){.thumbnail}

O tamanho da snapshot e a data de expiração do link também serão apresentados.

Note que o link de download expirará após **24 horas**.

O comando de download utiliza um `curl` no seguinte formato:

```bash
curl "https://storage.sbg.cloud.ovh.net/v1/AUTH_f5fgh4674dd706f15f6ffgf4z667d3f4g5f05/glance/5ceg3f93-8b49-436b-aefe-4185f9fc3f78?
temp_url_sig=f508cacda60256d5f211ddddf3f81130e935f0e4&temp_url_expires=1678247579" --output vps-x11x11xyy.vps.ovh.net --fail
```

Este comando deve funcionar a partir de qualquer terminal de linha de comando. No entanto, quando utilizar o Windows *PowerShell*, deverá ajustar o comando da seguinte forma:

```powershell
curl -Uri "https://storage.sbg.cloud.ovh.net/v1/AUTH_f5fgh4674dd706f15f6ffgf4z667d3f4g5f05/glance/5ceg3f93-8b49-436b-aefe-4185f9fc3f78?
temp_url_sig=f508cacda60256d5f211ddddf3f81130e935f0e4&temp_url_expires=1678247579" -OutFile vps-x11x11xyy.vps.ovh.net
```

![snapshotvps](images/snapshot_vps06.png){.thumbnail}

> [!primary]
>
> Para evitar o consumo de espaço de armazenamento excessivo, desaconselhamos o download das snapshots diretamente para o VPS.
>
> O ficheiro descarregado pode ser importado para um Projeto Public Cloud enquanto imagem (QCOW2) via [OpenStack](products/public-cloud-compute-instance-management). (Consulte um exemplo de utilização em [este manual](/pages/public_cloud/compute/upload_own_image).)
>

### Boas práticas para a criação de uma snapshot

#### Configuração do agente QEMU num VPS

As snapshots são imagens instantâneas do seu sistema em execução (“live snapshots”). Para garantir a disponibilidade do seu sistema aquando da criação da snapshot, o agente QEMU é utilizado para preparar o sistema de ficheiros ao processo.

O *qemu-guest-agent* necessário não está instalado por predefinição na maioria das distribuições. Além disso, as restrições de licença podem impedir a OVHcloud de o incluir nas imagens de SO disponíveis. Por consequente, recomenda-se que verifique e instale o agente caso não esteja ativo no seu VPS. Ligue-se ao seu VPS em SSH e siga as instruções abaixo, em função do seu sistema operativo.

##### **Distribuições Debian (Debian, Ubuntu)**

Utilize o seguinte comando para verificar se o sistema está corretamente configurado para as snapshots:

```bash
file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Se o resultado for diferente (“No such file or directory”), instale a última versão do pacote:

```bash
sudo apt-get update
sudo apt-get install qemu-guest-agent
```

Inicie o serviço para garantir que está a ser executado:

```bash
sudo service qemu-guest-agent start
```

##### **Distribuições Redhat (CentOS, Fedora)**

Utilize o seguinte comando para verificar se o sistema está corretamente configurado para as snapshots:

```bash
file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Se o resultado for diferente (“No such file or directory”), instale e ative o agente:

```bash
sudo yum install qemu-guest-agent
sudo chkconfig qemu-guest-agent on
```

Inicie o agente e verifique que está a ser executado:

```bash
sudo service qemu-guest-agent start
sudo service qemu-guest-agent status
```

##### **Windows**

Pode instalar o agente através de um ficheiro MSI, disponível no site do projeto Fedora: <https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-qemu-ga/>

Verifique que o serviço está a ser executado graças ao seguinte comando *PowerShell*:

```powershell
PS C:\Users\Administrator> Get-Service QEMU-GA

Status   Name               DisplayName
------   ----               -----------
Running  QEMU-GA            QEMU Guest Agent
```

## Saiba mais

[Utilizar backups automáticos num alojamento VPS](/pages/bare_metal_cloud/virtual_private_servers/using-automated-backups-on-a-vps)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
