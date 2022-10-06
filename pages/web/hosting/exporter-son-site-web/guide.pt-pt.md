---
title: 'Exportar o seu website'
slug: exportar-o-seu-website
excerpt: 'Descubra como exportar o seu website OVHcloud'
section: Primeiros passos
order: 04
---

**Última atualização: 03/02/2022**

## Sumário

Este guia mostra-lhe as etapas para exportar todos os elementos do seu website para o formato padrão, a partir de um [alojamento web OVHcloud.](https://www.ovhcloud.com/pt/web-hosting/){.external}.

**Descubra como exportar o seu website OVHcloud.**

## Requisitos

- Ter um [plano de alojamento web OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}.
- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

### Etapa 1: recuperação dos ficheiros do seu espaço de armazenamento FTP

#### 1.1 Aceder ao espaço de armazenamento

Para se ligar ao seu espaço de armazenamento, deve dispor dos seguintes elementos:

- o nome de utilizador FTP ou SSH ativo;
- a palavra-passe associada ao nome de utilizador FTP ou SSH;
- o endereço do servidor;
- a porta de ligação ao servidor.

Estes elementos foram-lhe enviados no e-mail enviado após a instalação do seu alojamento web. Se não possuir estas informações, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção “Web”, e clique em `Alojamentos`{.action}. De seguida, selecione o nome do alojamento correspondente e aceda ao separador `FTP - SSH`{.action}. 

![export-website](images/export-website-step1-1.png){.thumbnail}

Aparecerá a informação relativa ao seu espaço de armazenamento e terá a possibilidade de encontrar os elementos necessários para aceder mesmo. Caso seja necessário, consulte o nosso manual: [“Aceder ao espaço de armazenamento do alojamento web”](../aceder-espaco-de-armazenamento-ftp-alojamento-web/){.external}. Caso tenha perdido a palavra-passe, consulte o manual ["Modificar a palavra-passe de um utilizador FTP"](../alterar-palavra-passe-utilizador-ftp/){.external}.

Quando tiver obtido todos os elementos, a recuperação dos seus ficheiros no espaço de armazenamento pode ser realizado de duas formas:

- **Utilizar um programa compatível com o protocolo FTP ou SFTP**: terá de instalar no seu computador um programa compatível, como o [ FileZilla ](../partilhado_guia_de_utilizacao_do_filezilla/). Sugerimos que contacte o editor do programa instalado caso deseje obter ajuda na sua utilização, OVHcloud não criou esse programa;

- **Utilizar um acesso SSH**: terá de utilizar comandos a partir de um terminal para interagir com o seu espaço de armazenamento. Este tipo de acesso requer conhecimentos mais avançados, bem como um [plano de alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external} específica. Para mais informações, pode consultar o nosso guia  ["Utilizar o acesso SSH do seu alojamento web"](../partilhado_o_ssh_nos_alojamentos_partilhados/){.external}. 

#### 1.2 Transferir os ficheiros a partir do seu espaço de armazenamento

Depois de aceder ao espaço de armazenamento, apenas precisará de transferir os ficheiros do seu site. **Preste especial atenção ao diretório no qual instalou o seu site.** Num caso de utilização clássica, o site deve ser carregado para a pasta “www”. No entanto, se utiliza o seu alojamento web para alojar vários sites, deverá utilizar a opção **Multi-site**.

Para verificar a pasta onde deve colocar o site, clique no separador `Multi-site`{.action} a partir da Área de Cliente OVHcloud. Aparecerá uma tabela onde poderá consultar a `Pasta raiz`{.action} do domínio pretendido.

![export-website](images/export-website-step1-2.png){.thumbnail}

### Etapa 2: recuperar o backup da sua base de dados (opcional) 

> [!primary]
>
> Esta etapa é opcional se o seu website não utiliza uma base de dados.
>

Para recuperar um backup da sua base de dados, consulte o nosso guia:
["Recuperar o backup da base de dados de um alojamento web"](../partilhado_guia_de_exportacao_de_uma_base_de_dados_mysql/){.external}.

Se utiliza uma base de dados **CloudDB** para o seu website, consulte a secção dedicada ao backup no nosso guia:
[Backup e exportação de uma base de dados no servidor de bases de dados](https://docs.ovh.com/pt/hosting/backup-exportacao-base-de-dados/).

### Etapa 3: recuperar os logs do seu alojamento OVHcloud

Se deseja guardar o histórico dos logs do seu website, pode aceder aos logs no seu alojamento.

Depois, clique em `Alojamentos`{.action} e selecione o plano correspondente. Clique no separador `Estatísticas e logs`{.action}. A seguir, clique na ligação sob a menção `Ver logs`{.action}:

![export-website](images/export-website-step3-1.png){.thumbnail}

Aparece uma janela com os diferentes tipos de logs disponíveis.  Estão classificados por mês:

| Tipo  	| Descrição                                                                                                                                                                                         	|
|-------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Web   	| Encontre aqui os diferentes logs de consulta do seu site, assim como as diferentes ações realizadas a partir do seu site. Isto permite, por exemplo, detetar tentativas de pirataria. 	|
| FTP   	| as várias ligações FTP serão guardadas e armazenadas nestes logs.                                                                                                                     	|
| Error 	| os vários erros gerados pelo seu site.                                                                                                                                                    	|
| CGI   	| as várias chamadas para os scripts do cgi.bin que foram feitas.                                                                                                                                     	|
| out   	| as estatísticas do seu alojamento sobre as várias chamadas externas efetuadas.                                                                                                                  	|
| ssh   	| estes logs indicam as diferentes ligações feitas com o protocolo SSH.                                                                                                                      	|
| cron  	| o resultado da execução das suas tarefas planeadas.                                                                                                                                                	|

![export-website](images/export-website-step3-3.png){.thumbnail}

Quando seleciona o tipo de logs para o mês que mais lhe interessa, estes são arquivados por dia:

![export-website](images/export-website-step3-4.png){.thumbnail}

## Quer saber mais?

[Aceder ao espaço de armazenamento do alojamento web](../aceder-espaco-de-armazenamento-ftp-alojamento-web/)

[Alterar a palavra-passe de um utilizador FTP](../alterar-palavra-passe-utilizador-ftp/)

[Utilização do programa FileZilla com o seu alojamento](../partilhado_guia_de_utilizacao_do_filezilla/)

[Utilizar o acesso SSH do seu alojamento web](../partilhado_o_ssh_nos_alojamentos_partilhados/)

[Recuperar o backup da base de dados de um alojamento web](../partilhado_guia_de_exportacao_de_uma_base_de_dados_mysql/)

[CloudDB - primeira utilização](https://docs.ovh.com/pt/clouddb/comecar-com-clouddb/)

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
