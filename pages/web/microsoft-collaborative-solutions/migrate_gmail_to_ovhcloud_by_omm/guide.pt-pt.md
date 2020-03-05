---
title: 'Migrar uma conta Gmail para uma conta de e-mail OVHcloud através do OVH Mail Migrator'
slug: migracao-de-gmail-atraves-de-ovh-mail-migrator
excerpt: 'Aprenda a migrar as suas contas Gmail para o OVHcloud graças à nossa ferramenta OVH Mail Migrator'
section: 'Migração de uma conta Exchange'
order: 3
---

**Última atualização: 03/02/2020**

## Objetivo

[OVH Mail Migrator](https://omm.ovh.net/){.external} (OMM) é uma ferramenta criada pela OVHcloud. Permite migrar as suas contas de e-mail de um serviço de alojamento para outro. O processo considera vários tipos de conteúdo, como os e-mails, os contactos, os calendários e as tarefas, desde que eles sejam compatíveis com as suas contas de e-mail OVHcloud. 

Este guia descreve como usar a OMM para importar os vários elementos da sua conta Gmail para a sua conta de e-mail OVHcloud.

**Aprenda a migrar a sua conta Gmail para uma conta de e-mail OVHcloud graças à nossa ferramenta OMM.**


## Requisitos

- Ter um serviço de e-mail no OVHcloud, como uma [oferta Exchange](https://www.ovh.pt/emails/){.external}, [E-mail Pro](https://www.ovh.pt/emails/email-pro/){.external} ou MX Plan (através da oferta MX Plan sozinha ou incluída numa [oferta de serviço de alojamento web OVHcloud](https://www.ovh.pt/alojamento-partilhado/){.external}).
- Ter dados de acesso relativos às contas de e-mail que pretende migrar (as contas de origem).
- Ter dados de acesso relativos às contas de e-mail OVHcloud que recebem os dados migrados (as contas de destino).

## Instruções

### Etapa 1: migração dos e-mails e das pastas

> [!primary]
> Para que a migração seja possível, é preciso ativar o protocolo IMAP na sua conta Gmail. Para isso, observe o guia da Google
> [como ativar o IMAP para a sua conta Gmail](https://support.google.com/mail/answer/7126229?hl=pt){.external}.

Depois de o protocolo IMAP estar ativado na sua conta Gmail, vá a [OMM](https://omm.ovh.net/){.external}.

Clique em `Migração`{.action} e, depois, em `Nova migração`{.action}.

![omm](images/OMM-gmail-step01-01.png){.thumbnail}

Surge a seguinte janela:

![omm](images/OMM-gmail-step01-02.png){.thumbnail}

Preencha os campos obrigatórios em função das indicações dos dois quadros seguintes:

**Conta de Origem**

| Informação            	| Descrição                                                                              	|
|------------------------	|------------------------------------------------------------------------------------------	|
| Tipo de servidor         	| Selecione **"IMAP"**  no menu pendente.         									|
| URL do servidor          	| Introduza **"imap.gmail.com"**.                       					 			  	|
| Nome de utilizador						| Insira o seu endereço Gmail.															|
| Palavra-passe				| Insira a palavra-passe do seu endereço Gmail.										|

**Conta de destino**

| Informação            	| Descrição                                                                              							|
|------------------------	|-------------------------------------------------------------------------------------------------------------------|
| Tipo de servidor         	| Selecione **"Hosted by OVH (Autodetect)"**  no menu pendente.   											|
| URL do servidor          	| O campo preenche-se automaticamente.                     					  		 							|
| Nome de utilizador						| Insira o seu endereço de e-mail OVHcloud.																			|
| Palavra-passe				| Clique em `detetar os parâmetros`{.action} e insira a palavra-passe do seu endereço de e-mail OVHcloud.	|

Na parte **"Opções"**, preencha apenas **"E-mails"** dado que as outras opções não estão disponíveis em IMAP. A migração dos contactos e calendários será feita nas etapas 2 e 3.

![omm](images/OMM-gmail-step01-03.png){.thumbnail}

No quadro **"Informação"**, pode inserir um endereço de e-mail onde receberá notificações sobre o progresso da migração. Este campo é facultativo. Clique então em `Iniciar a migração`{.action}

![omm](images/OMM-gmail-step01-04.png){.thumbnail}

A janela de progresso da migração (indicada a seguir) será então apresentada. Pode deixá-la aberta para acompanhar a migração em direto ou fechá-la, isso não terá qualquer efeito na migração.

![omm](images/OMM-gmail-step01-06.png){.thumbnail}

> [!warning]
> No início da migração, poderá surgir a seguinte mensagem

![omm](images/OMM-gmail-step01-05.png){.thumbnail}

Se isso acontecer, vá à caixa de entrada da sua conta Gmail e verifique se recebeu o e-mail com o assunto **"Alerta de segurança crítico"**. Trata-se de uma medida de segurança implementada pela Gmail. Para resolver esta situação, observe o guia: [Como autorizar as conexões menos seguras no Gmail](https://docs.ovh.com/pt/microsoft-collaborative-solutions/migracao-de-gmail-atraves-de-ovh-mail-migrator/seguridad_gmail){.external}

Depois de ter **autorizado as "conexões menos seguras"** no Gmail, pode reiniciar a migração.

### Etapa 2: migração dos calendários

#### 2.1 Recuperar uma salvaguarda do calendário no Gmail

Para importar o seu calendário para a sua conta OVHcloud, recupere uma salvaguarda do mesmo a partir da sua interface Gmail. Para isso, observe o guia oficial da Google:

[Como exportar os calendários para a sua conta Gmail](https://support.google.com/calendar/answer/37111?hl=pt){.external}

Se tiver vários calendários na sua conta Gmail, irá transferir um ficheiro de arquivo que terá de descomprimir. Cada calendário estará no formato **.ics**.

#### 2.2 Importar o calendário através de OMM

> [!primary]
> A migração dos calendários por OMM só é compatível para as contas Exchange.

Depois de ter recuperado a salvaguarda do seu calendário no formato **.ics**, vá a [OMM](https://omm.ovh.net/){.external}.

Vá ao separador `PST/ICS/VCF`{.action} em cima, e clique em `Nova migração PST/ICS/VCF`{.action}.

![omm](images/OMM-gmail-step23-01.png){.thumbnail}

Preencha os campos solicitados de acordo com o seguinte quadro, e clique em `Iniciar a migração`{.action}:

| Informação            	| Descrição                                                                              	|
|------------------------	|------------------------------------------------------------------------------------------	|
| Nome de utilizador                  	| Indique o endereço de e-mail OVHcloud para o qual deseja migrar o seu calendário.           	|
| Palavra-passe           	| Insira a palavra-passe do endereço de e-mail de destino.                          	|
| E-mail de comunicação 	| Insira um endereço de e-mail que servirá para comunicar sobre o progresso da migração e permitirá retomar a transferência de um ficheiro.	|

![omm](images/OMM-gmail-step23-02.png){.thumbnail}

 Clique em `Escolher um ficheiro`{.action} para recuperar, no seu computador, o ficheiro **.ics** do seu calendário, e clique em `Upload`{.action}.

![omm](images/OMM-gmail-step23-03.png){.thumbnail}

Insira então a palavra-passe da sua conta de e-mail de destino, e clique em `Iniciar a migração`{.action}.

![omm](images/OMM-gmail-step23-04.png){.thumbnail}

A janela de progresso da migração (indicada a seguir) será então apresentada. Pode deixá-la aberta para acompanhar a migração em direto ou fechá-la, isso não terá qualquer efeito na migração.

![omm](images/OMM-gmail-step02.png){.thumbnail}


### Etapa 3: migração dos contactos

> [!primary]
> A migração dos contactos por OMM só é compatível para as contas Exchange.

Para importar os seus contactos para a sua conta OVHcloud, recupere uma salvaguarda destes últimos a partir da sua interface Gmail. Para isso, observe o guia oficial da Google:

[Como exportar os contactos para a sua conta Gmail](https://support.google.com/contacts/answer/7199294?hl=pt){.external}

> [!warning]
> A exportação deve realizar-se no formato vCard (**.vcf**) através da interface Gmail. Esta opção é-lhe proposta no fim da exportação.

![omm](images/OMM-gmail-step23-01.png){.thumbnail}

Preencha os campos solicitados de acordo com o seguinte quadro, e clique em `Iniciar a migração`{.action}:

| Informação            	| Descrição                                                                              	|
|------------------------	|------------------------------------------------------------------------------------------	|
| Nome de utilizador                  	| Indique o endereço de e-mail OVHcloud para o qual migra os seus contactos.            	|
| Palavra-passe           	| Insira a palavra-passe do endereço de e-mail de destino.                          	|
| E-mail de comunicação 	| Insira um endereço de e-mail que servirá para comunicar sobre o progresso da migração e permitirá retomar a transferência de um ficheiro.	|

![omm](images/OMM-gmail-step23-02.png){.thumbnail}

Clique em `Escolher um ficheiro`{.action} para recuperar, no seu computador, o ficheiro **.vcf** dos seus contactos, e clique em `Upload`{.action}.

![omm](images/OMM-gmail-step23-03.png){.thumbnail}

Insira então a palavra-passe da sua conta de e-mail de destino, e clique em `Iniciar a migração`{.action}.

![omm](images/OMM-gmail-step23-04.png){.thumbnail}

A janela de progresso da migração aparece. Pode deixá-la aberta para acompanhar a migração em direto ou fechá-la, isso não terá qualquer efeito na migração.

![omm](images/OMM-gmail-step03.png){.thumbnail}


## Quer saber mais?

[Como autorizar as conexões menos seguras no Gmail](https://docs.ovh.com/pt/microsoft-collaborative-solutions/migracao-de-gmail-atraves-de-ovh-mail-migrator/seguridad_gmail){.external}.

Fale com a nossa comunidade de utilizadores: [](https://community.ovh.com/en/){.external}.

