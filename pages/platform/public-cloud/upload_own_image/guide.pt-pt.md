---
title: Importe a sua própria imagem
slug: importar-a-sua-propria-imagem
excerpt: Saiba como importar a sua própria imagem para o Public Cloud
section: Gestão via OpenStack
order: 10
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 26/10/2020**

## Objetivo

A OVHcloud oferece aos clientes Public Cloud imagens prontas a usar, mas também a possibilidade de utilizar as suas próprias imagens.

**Saiba como importar as suas próprias imagens para o seu projeto Public Cloud.**

## Requisitos

- uma [instância Public Cloud](../criar_uma_instancia_a_partir_do_espaco_cliente_ovh/) na sua Área de Cliente OVHcloud
- imagem RAW/QCOW2 (formatos recomendados) 
- um utilizador [OpenStack](../criar-e-eliminar-um-utilizador-openstack/) 
- um ambiente [OpenStack CLI ready](../prepare_the_environment_for_using_the_openstack_api/) (se utilizar CLI)

## Instruções

### Antes de começar

É aconselhável utilizar imagens compatíveis com o Cloud fornecidas pelo distribuidor ou criar a sua própria imagem através de soluções como o [Packer OpenStack builder](https://docs.ovh.com/gb/en/public-cloud/packer-openstack-builder/).

As imagens cloud compatíveis estão disponíveis aqui:

- https://cloud.centos.org/centos/
- https://cloud.debian.org/images/cloud/
- https://cloud-images.ubuntu.com/releases/
- https://alt.fedoraproject.org/cloud/

Outros sistemas operativos também oferecem imagens ISO que são igualmente aplicáveis aquando da [criação de imagens com a Packer](https://www.packer.io/docs/builders), como a QEMU e a VirtualBox.

Certifique-se de que os seguintes elementos estão instalados nas suas imagens para que sejam integráveis no ambiente cloud:

- *QEMU Guest Agent*\: esta operação permite beneficiar de uma melhor experiência de backup, pois permite ao host comunicar com a instância para os backups em direto. Nem todos os sistemas operativos são compatíveis com este pacote.
- *cloud-init*\: isto permitir-lhe-á iniciar a sua instância no primeiro arranque, com a adição de chaves SSH e a configuração da rede. A maioria dos sistemas operativos são compatíveis com esta funcionalidade.

Recomendamos a utilização de imagens em formato RAW ou QCOW2. Otimize a dimensão da imagem para que seja a mais pequena possível, de forma a minimizar o custo de faturação mensal e reduzir o tempo de geração das suas instâncias.

### Importar a sua imagem

Com OpenStack, existem dois métodos para importar a sua própria imagem. Pode fazê-lo através da interface em linha de comandos OpenStack, ou através [da interface Horizon](https://horizon.cloud.ovh.net/auth/login/).

#### Em linha de comandos OpenStack

Quando a sua imagem estiver pronta, siga os passos abaixo para lançar a importação com a ajuda do CLI OpenStack:

1\. Faça o download do seu ficheiro openrc.sh para o seu utilizador OpenStack a partir da Área de Cliente OVHcloud (selecione a região para a qual deseja efetuar o download).

![openrc](images/openrc_file.png){.thumbnail}

2\. Carregue o ficheiro openrc:

```sh
fonte openrc.sh
```

3\. Depois de carregar o ficheiro, deverá introduzir a palavra-passe do utilizador OpenStack.

4\. Agora pode importar a sua imagem. O exemplo de comando abaixo efetua as seguintes operações:

- O formato de disco é "RAW"
- Descarregue uma imagem a partir do caminho atual chamado "debian9.raw"
- Chama-se "Debian 9 - A minha imagem"
- Define a imagem no estado privado
- Define as propriedades recomendadas. Uma configuração ótima permite a utilização de funcionalidades tais como o *live-snapshot* e o *cloud-init* (necessita do nome de utilizador)

```sh
openstack imagem create —disk formato raw —container-de-formato bare —file debian9.raw "Debian 9 - A minha imagem" —private —property distribution=debian —property hw_disk_bus=scsi —property hw_scsi_model=virtio-scsi —property hw_qemu_guest_agent=yagent; es —property image_original_user=debian
```

#### A partir da interface Horizon

Quando a sua imagem estiver pronta para ser importada, siga os passos abaixo para a importar a partir da interface Web OpenStack Horizon:

1\. Ligue-se à [interface Horizon](https://horizon.cloud.ovh.net/auth/login/).

2\. Selecione, no canto superior esquerdo, a região para a qual pretende descarregar a sua imagem.

![horizon_1](images/horizon_1.png){.thumbnail}

3\. Dirija-se à secção `Imagens` e clique em `Create Image`{.action}.

![horizon_2](images/horizon_2.png){.thumbnail}

4\. Introduza os detalhes da sua imagem e selecione o ficheiro a partir do seu computador.

![horizon_3](images/horizon_3.png){.thumbnail}

5\. Introduza os metadados da instância (pode também introduzir os metadados personalizados à sua escolha) e depois clique em `Create Image`{.action}.

![horizon_4](images/horizon_4.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
