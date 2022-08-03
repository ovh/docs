---
title: 'Criar uma instância a partir da interface Horizon'
slug: criar_uma_instancia_na_interface_horizon
excerpt: 'Saiba como criar uma instância a partir da interface Horizon'
legacy_guide_number: g1772
section: Gestão a partir do Horizon
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 02/08/2022**

## Sumário

Tem a possibilidade de criar instâncias diretamente a partir da interface Horizon. Isto permite-lhe, por exemplo, criar múltiplas instâncias ou ainda configurar um grupo de segurança e aplicá-lo às suas instâncias.

**Saiba como criar uma instância a partir da interface Horizon.**

## Requisitos

- Dispor de um [projeto Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) na sua conta OVHcloud.
- [Ter acesso à interface Horizon](../horizon/){.external}. 

## Instruções

Para começar a criar uma instância, aceda à interface Horizon. Se precisar de ajuda para realizar esta operação, consulte o [nosso manual](../horizon/).

A seguir, clique em `Compute`{.action} no menu à esquerda e, de seguida, em `Instances`{.action}.

![createinstance](images/create-instance-step1.png){.thumbnail}

A nova página que aparece permite visualizar as instâncias atualmente lançadas. Para iniciar uma nova instância, clique no botão `Launch Instance`{.action}.

![createinstance](images/create-instance-step2.png){.thumbnail}

Deverá preencher as diferentes informações. Caso seja necessário, consulte a tabela abaixo para obter ajuda ao preencher os campos. Lembre-se de que esta tabela não é exaustiva. 

|Informação|Detalhes|
|---|---|
|Zona de disponibilidade|Deixe “nova” (escolha predefinida)|
|Nome da instância|Indique o nome que pretende dar à instância que vai criar|
|Tipo|Indique o tipo de instância que quer criar|
|Número de instâncias|Indique o número de instâncias que pretende criar|
|Origem de arranque da instância|Selecione a origem para a criação da instância a partir de uma imagem ou a partir de uma snapshot|
|Nome da imagem|Selecione a imagem da instância (apenas em caso de arranque a partir de uma imagem)|
|Snapshot da instância|Selecione uma snapshot de uma instância (apenas em caso de arranque a partir de uma snapshot)|
|Par de chaves|Selecione uma chave SSH para se ligar à instância (a criação de uma chave pode ser realizada clicando no símbolo “+”)|
|Grupos de segurança|Indique o grupo de segurança para a instância (autorização de abertura de portas)|
|Redes selecionadas|Selecione a(s) rede(s) para a instância que pretende criar na lista das redes disponíveis|
|Fonte de script personalizado|Indique a fonte entre uma “entrada direta” ou um “ficheiro”|
|Dados de script|Indique o código do script no campo (máximo de 16 KB)|
|Ficheiro do script|Clique em Navegar para selecionar o script de pós-instalação|
|Particionamento do disco|Escolha entre “automático” ou “manual”|
|Disco de configuração|Configure o OpenStack para escrever os metadados num disco de configuração específico que ficará associado à instância no momento do lançamento|

> [!warning]
> 
> Embora o campo "Key Pair" não seja obrigatório na interface Horizon aquando da criação de uma instância, o registo de uma chave SSH é absolutamente necessário para poder ligar-se a uma instância. Sem chave SSH, será obrigado a reiniciar a instância em modo rescue para poder criar uma palavra-passe ou adicionar uma chave SSH ao ficheiro adequado (para mais informações, consulte o guia [Alterar a chave SSH em caso de perda](../alterar_a_chave_ssh_em_caso_de_perda/#instrucoes)).
>

Assim que estiver pronto para lançar a(s) instância(s) pretendida(s), clique no botão `Launch Instance`{.action}.

![createinstance](images/create-instance-step3.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.