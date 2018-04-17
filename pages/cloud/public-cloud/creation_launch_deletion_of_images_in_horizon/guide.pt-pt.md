---
title: 'Criação, dar inicio e eliminar imagens no Horizon'
excerpt: 'Criação, dar inicio e eliminar imagens no Horizon'
slug: criacao_dar_inicio_e_eliminar_imagens_no_horizon
legacy_guide_number: g1784
---


## 
A adição de imagens personalizadas é possível através do manager OpenStack Horizon
Esta operação permite-lhe, por exemplo, importar as suas imagens das antigas máquinas virtuais para o Public Cloud, com a condição que o seu formato ser compatível.

Este guia explica as diferentes etapas para a criação, para dar inicio e eliminar imagens na interface Horizon onde gere os seus serviços Cloud OVH


## Pré-requisitos

- [Criar um acesso ao Horizon]({legacy}1773)
- Uma instância



![](images/img_2661.jpg){.thumbnail}


## 

- De forma padrão, se nenhuma imagem foi criada, a lista das imagens públicas será apresentada.



![](images/img_2662.jpg){.thumbnail}

- é agora possível iniciar uma imagem a partir de um URL ou criar uma através do botão "Criar uma imagem", o que abrirá o seguinte menu:



![](images/img_2720.jpg){.thumbnail}

## Diferentes campos terão de ser preenchidos e alguns deles são obrigatórios (*) e outros facultativos:

- Nome da imagem (*)
- Descrição da imagem
- Ficheiro da Imagem (Envio a partir do seu computador local)
- Formato da Imagem (*) :

|AKI|Amazon Kernel Image|
|AMI|Amazon Machine Image|
|ARI|Amazon Ramdisk Image|
|ISO|ISO 9660|
|QCOW2|Emulateur QEMU|
|RAW|
|VDI|
|VHD|
|VMDK|



- Arquitetura: x86_64
- Espaço de disco mínimo (em GB) : se não for especificado, o valor padrão será 0.
- RAM mínima (em MB): se não for especificado, o valor padrão será 0.


É igualmente possível definir se a imagem será pública e se estará protegida contra eliminação.
Uma vez efetuada a validação da escolha, a imagem é colocada na fila de espera para criação:

![](images/img_2664.jpg){.thumbnail}
Ao clicar no nome da imagem, obteremos detalhes sobre a mesma:

![](images/img_2665.jpg){.thumbnail}
Na coluna Ações será possível:

- iniciar a imagem selecionada a fim de criar uma instância e obteremos, então, no menu:



![](images/img_2666.jpg){.thumbnail}

- editar os detalhes da imagem (apenas para as imagens criadas por si);
- eliminar a imagem (apenas as imagens que foram criadas por si). Uma confirmação será solicitada:



![](images/img_2667.jpg){.thumbnail}


## 
[Voltar ao índice dos guias Cloud]({legacy}1785)

