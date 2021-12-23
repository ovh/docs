---
title: 'Restaurar o espaço de armazenamento do alojamento web'
slug: restauracao-ftp-filezilla-area-de-cliente
excerpt: 'Saiba como restaurar um ficheiro ou a totalidade do espaço de armazenamento do seu alojamento web'
section: 'FTP e SSH'
---

**Última atualização: 24/09/2018**

## Sumário

A sua solução de alojamento web da OVH dá-lhe acesso a um espaço de armazenamento no qual pode alojar os seus websites. Por várias razões (para eliminar ou alterar um ficheiro que torna o seu site inacessível, por exemplo), poderá ter de restaurar os dados do seu espaço de armazenamento ou simplesmente um ficheiro guardado nesse mesmo espaço.

**Saiba como restaurar um ficheiro ou a totalidade do espaço de armazenamento do seu alojamento web.**

## Requisitos

- Ter um [alojamento web](https://www.ovhcloud.com/pt/web-hosting/){.external} (não funciona com um alojamento Cloud Web).
- Consoante o método utilizado, ter acesso à gestão do alojamento web a partir da [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} ou dispor da palavra-passe do utilizador FTP que lhe permite aceder ao seu espaço de armazenamento. 

## Instruções

Antes de começar, certifique-se de que as datas de restauração propostas permitem-lhe restaurar o espaço de armazenamento do seu alojamento web à data pretendida:

- no mesmo dia, às 00h01 da manhã;
- no dia anterior, às 00h01 da manhã;
- dois dias antes, às 00h01 da manhã;
- no domingo anterior, à 01h00 da manhã;
- no domingo, duas semanas antes, à 01h00 da manhã.

A OVH não poderá fornecer uma cópia de segurança mais antiga. Nesse caso, deverá utilizar uma cópia de segurança do website que realizou no passado. 

Da mesma forma, deverá definir o método de restauração que vai utilizar:

|Método de restauração|Descrição|
|---|---|
|Restauração a partir da Área de Cliente|Restaura na íntegra o conteúdo do espaço de armazenamento. O conteúdo atual será totalmente substituído pelo da cópia de segurança selecionada.|
|Restauração a partir de um programa ou uma interface|Permite-lhe aceder em modo só de leitura a uma cópia de segurança do espaço de armazenamento. Este método, embora mais técnico, permite restaurar um ou vários ficheiros numa data anterior sem apagar todo o conteúdo do espaço de armazenamento.|

Aceda à informação correspondente ao método de restauração escolhido.

- “[Restaurar o espaço de armazenamento a partir da Área de Cliente](https://docs.ovh.com/pt/hosting/restauracao-ftp-filezilla-area-de-cliente/#restaurar-o-espaco-de-armazenamento-a-partir-da-area-de-cliente){.external}”.

- “[Restaurar um ficheiro a partir de um programa ou uma interface](https://docs.ovh.com/pt/hosting/restauracao-ftp-filezilla-area-de-cliente/#restaurar-um-ficheiro-a-partir-de-um-programa-ou-uma-interface){.external}”.

### Restaurar o espaço de armazenamento a partir da Área de Cliente

Aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique em `Alojamentos`{.action} na barra à esquerda e escolha o nome do alojamento correspondente. Aceda à janela `FTP - SSH`{.action} e clique no botão `Restaurar um backup`{.action}.

![backupftp](images/backupftp-step1.png){.thumbnail}

Na janela que vai aparecer, terá de selecionar a data de restauração pretendida no menu pendente:

|Data apresentada|Data técnica da cópia de segurança|
|---|---|
|d-1|No mesmo dia, às 00h01 da manhã.|
|d-2|No dia anterior, às 00h01 da manhã.|
|d-3|Dois dias antes, às 00h01 da manhã.|
|1 semana|No domingo anterior, à 01h00 da manhã.|
|2 semanas|No domingo, duas semanas antes, à 01h00 da manhã.|

Depois de selecionar a data, clique no botão `Seguinte`{.action}. 

![backupftp](images/backupftp-step2.png){.thumbnail}

Certifique-se de que não perdeu nenhum ficheiro no processo de restauração (por exemplo, qualquer ficheiro que guardou no seu espaço de armazenamento após a data de restauração selecionada). Tal como indicado, a restauração vai apagar todos os dados atuais para os substituir pelos dados da cópia de segurança.

De seguida, clique no botão `Validar`{.action}.

### Restaurar um ficheiro a partir de um programa ou uma interface

Esta operação realiza-se em vários passos. Certifique-se de que tem a palavra-passe do utilizador FTP para aceder ao seu espaço de armazenamento. 

> [!warning]
>
> Para realizar as seguintes ações, deve ter conhecimentos sobre o programa ou a interface que vai utilizar. A seguir, propomos-lhe algumas indicações sobre como realizá-las. No entanto, se encontrar dificuldades, recomendamos que recorra a um prestador de serviços especializado e/ou que contacte o editor do programa ou da interface. Não poderemos proporcionar-lhe assistência técnica.
>

#### 1 - Escolher o programa ou a interface que vai utilizar

Em primeiro lugar, deve decidir qual o programa ou interface que vai utilizar para aceder à cópia de segurança do seu espaço de armazenamento. Se já decidiu, passe para o passo 2. Caso contrário, recomendamos que utilize uma destas três soluções:

- **FileZilla**: deverá descarregar este programa no website oficial. Para mais informações, consulte o manual [“Guia de utilização do FileZilla”](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_filezilla/){.external}. Este manual não substitui a documentação oficial do editor.

- **Cyberduck**: deverá descarregar este programa no website oficial. Para mais informações, consulte o manual [“Guia de utilização do Cyberduck (MAC)”](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_cyberduck_mac/){.external}. Este manual não substitui a documentação oficial do editor.

- **FTP Explorer**: deverá aceder previamente através da [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Para aceder, basta iniciar sessão, clicar em `Alojamentos`{.action} na barra à esquerda e, em seguida, selecionar o alojamento correspondente. Aceda à janela `FTP - SSH`{.action} e clique no botão `Explorador FTP`{.action}.

Assim que estiver pronto para continuar a operação, avance para o passo seguinte.

![backupftp](images/backupftp-step3.png){.thumbnail}

#### 2 - Ligar-se à cópia de segurança

A partir da interface ou do programa selecionado, deverá ligar-se ao seu espaço de armazenamento para aceder aos dados da cópia de segurança que pretende recuperar. Para isso, deverá ter um nome de utilizador FTP, a respetiva palavra-passe e o nome de host do seu servidor FTP.

Pode consultar estas informações na janela `FTP - SSH`{.action} do seu alojamento. Caso não tenha a palavra-passe do utilizador FTP, consulte o manual [“Modificar a palavra-passe de um utilizador FTP”](https://docs.ovh.com/gb/en/hosting/modify-ftp-user-password/){.external} (versão em inglês).

![backupftp](images/backupftp-step4.png){.thumbnail}

Deverá adicionar um sufixo ao seu nome de utilizador (ou “login”) FTP principal, especificando a cópia de segurança à qual quer aceder. A seguir, poderá encontrar alguns exemplos sobre como aceder à cópia de segurança desejada.

|Data da cópia de segurança|Sufixo que deve adicionar|Exemplo de nome de utilizador completo|
|---|---|---|
|No mesmo dia, às 00h01 da manhã.|-snap0|utilizadorftp**-snap0**
|No dia anterior, às 00h01 da manhã.|-snap1|utilizadorftp**-snap1**
|Dois dias antes, às 00h01 da manhã.|-snap2|utilizadorftp**-snap2**
|No domingo anterior, à 01h00 da manhã.|-snap3|utilizadorftp**-snap3**
|No domingo, duas semanas antes, à 01h00 da manhã.|-snap4|utilizadorftp**-snap4**

Substitua a informação genérica “utilizadorftp” pelo seu nome de utilizador FTP principal. Mantenha o sufixo que define a cópia de segurança à qual pretende aceder.

A forma de se ligar ao espaço de armazenamento varia em função da interface ou do programa que utiliza. Abaixo, poderá ver uma imagem da janela de ligação da interface FTP Explorer.

![backupftp](images/backupftp-step5.png){.thumbnail}

#### 3 - Recuperar os ficheiros

Uma vez ligado, deve descarregar os ficheiros que pretende restaurar. Para isso, navegue pelo conteúdo do seu espaço de armazenamento e descarregue os ficheiros. A operação varia em função da interface ou do programa que utiliza.

Antes de avançar para o passo seguinte, certifique-se de que recuperou todos os ficheiros que pretende restaurar e, em seguida, termine a sessão no seu espaço de armazenamento.

#### 4 - Restaurar os ficheiros

Depois de descarregar os ficheiros, ligue-se novamente ao seu espaço de armazenamento. Mas desta vez, não adicione nenhum sufixo ao utilizador FTP. Desta forma, acederá ao conteúdo atual do seu espaço de armazenamento e não a uma cópia de segurança anterior.

Uma vez ligado, só precisará de restaurar os ficheiros. Para isso, navegue pelo conteúdo do seu espaço de armazenamento até localizar os ficheiros e descarregue-os substituindo os ficheiros anteriores.

## Quer saber mais?

[Guia de utilização do FileZilla](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_filezilla/){.external}.

[Guia de utilização do Cyberduck (MAC)](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_cyberduck_mac/){.external}.

Fale com a nossa comunidade de utilizadores: [Comunidade OVH](https://community.ovh.com/en/){.external}