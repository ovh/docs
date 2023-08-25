---
title: Cloud Archive Swift - Gerir os seus arquivos a partir de um cliente SFTP/SCP
excerpt: Saiba como gerir e administrar os seus arquivos Public Cloud.
updated: 2022-05-13
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>


## Objetivo

O Public Cloud Archive é uma solução de armazenamento que pode ser utilizada com as API OpenStack. No entanto, é possível que não esteja familiarizado com esta forma de gerir um espaço de armazenamento. Assim, desenvolvemos uma gateway que lhe permite aceder ao seu PCA através de um cliente SFTP.


## Requisitos

- Um cliente SFTP: [WinSCP](https://winscp.net/eng/download.php){.external}
- Login & Password OpenStack
- Nome do projeto

## Instruções

### O cliente SFTP

Neste exemplo, o WinSCP é utilizado como cliente SFTP. Existem outras soluções, a sua configuração é semelhante à que vos vamos apresentar.


### Identificador OpenStack

Pode gerar o seu login e password OpenStack seguindo este [guia](/pages/public_cloud/compute/create_and_delete_a_user).


### O TenantName

O TenantName corresponde ao nome do seu projeto no Horizon. Para recuperar o TenantName, deverá ligar-se ao manager OpenStack através dos acessos gerados anteriormente: [https://horizon.cloud.ovh.net/](https://horizon.cloud.ovh.net/){.external}. Uma vez ligado, o TenantName pode ser acedido no topo da página.


![horizon](images/image1.png){.thumbnail}


### Ligação

- Host Name: gateways.storage. < região > .cloud.ovh.net
- User Name: pca
- Password: < TenantName > . < Username_Openstack > . < Password_Openstack >


![ligação](images/image2.png){.thumbnail}


### Exemplo

Se criou um container PCA em SBG:

- Host Name: gateways.storage.sbg.cloud.ovh.net
- User Name: pca
- Password: 971891XXXX1214.f6nBXXXXXAmcv.SfPeASYfuWeqBZgXXXXX2XhF3DY12RkD


![ligação](images/image3.png){.thumbnail}


### Parametrização WinSCP
Nesta parte, vamos desativar duas opções do WinSCP:

**Transfer Resume / Transfer to Temporary Filename:** Esta opção deverá ser desativada, pois a retoma não é possível com PCA, e o WinSCP pode reenviar-lhe um erro. Queira consultar a captura de ecrã abaixo.

- Na secção `Endurance`{.action}, selecione `Disable`{.action}.


![ligação](images/conf1.png){.thumbnail}

**Preserve Timestamp:** O TimeStamp corresponde à data de modificação do ficheiro, desativamo-lo pois no PCA substituímos este dado pela data de upload do ficheiro. Queira consultar as capturas dos ecrãs abaixo.

- Na categoria `Transfer`{.action}, clique em `Edit...`{.action}.


![ligação](images/conf2.png){.thumbnail}

- Desmarque o `Preserve timestamp`{.action}.


![ligação](images/conf3.png){.thumbnail}


### Recuperação de dados
A recuperação de dados está sujeita a um desbloqueio prévio do objeto. É necessário um pedido GET sobre o objeto em questão. Se esta operação não for efetuada previamente, o seu cliente SFTP irá devolver uma mensagem de erro durante uma tentativa de download do ficheiro. Consultar o nosso guia sobre o desbloqueio dos seus objetos [aqui](/pages/storage_and_backup/object_storage/pca_unlock).

## Quer saber mais?

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.