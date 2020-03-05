---
title: 'Primeiros passos com uma instância Windows'
excerpt: 'Fique a saber como terminar a instalação de uma instância Windows e iniciar a primeira ligação'
slug: primeiros-passos-com-uma-instancia-windows
legacy_guide_number: 1995
---

**Última atualização: 25/11/2019**

## Objetivo

É possível utilizar a Public Cloud se pretender alojar sites Web em IIS ou, ainda, as suas aplicações compatíveis apenas com Windows. As nossas instâncias podem ser instaladas em distribuições [Windows Desktop](https://www.ovhcloud.com/pt/public-cloud/prices/){.external}.

Depois de criada a sua instância, será necessário terminar a instalação da mesma através da consola VNC.

**Este guia explica-lhe o procedimento a seguir para poder aceder à sua instância Windows após a instalação da mesma.**

## Requisitos

- Ter criado um projeto Public Cloud.
- Ter criado [uma instância na Área de Cliente](https://docs.ovh.com/pt/public-cloud/criar_uma_instancia_a_partir_do_espaco_cliente_ovh/) numa distribuição Windows Desktop.

## Instruções

### Etapa 1: configurar a sua palavra-passe

Contrariamente a uma instância Linux, uma instância Windows não é instalada com uma chave SSH pré-configurada. 

Por isso, é necessário terminar a instalação através da consola VNC:

- Clique nas `...`{.action} à direita da sua instância, e em `Pormenor da instância`{.action}:

![windowsinstance](images/firststepswindows1.png){.thumbnail}

- Vá ao separador `Consola VNC`{.action}

![windowsinstance](images/firststepswindows2.png){.thumbnail}

- Selecione as informações de idioma e teclado, e insira a palavra-passe que escolheu:

![windowsinstance](images/firststepswindows3.png){.thumbnail}

> [!primary]
>
> Algumas teclas do teclado da consola VNC não correspondem obrigatoriamente ao teclado AZERTY. Não hesite em verificar várias vezes a sua palavra-passe antes de a validar.
>

![windowsinstance](images/firststepswindows4.png){.thumbnail}

### Etapa 2: aceder ao ambiente de trabalho remoto

Depois de definida a palavra-passe, pode aceder à sua instância Windows através de uma ligação ao ambiente de trabalho remoto.

A partir de um computador com Windows:

![windowsinstance](images/firststepswindows5.png){.thumbnail}

Para efetuar a ligação a partir de um computador com Linux, introduza o comando seguinte:

```
rdesktop 12.34.56.789 -u administrator
```
 
### Etapa 3: melhorar a navegação na Internet

Por defeito, a segurança reforçada do Internet Explorer está ativada. Durante a sua navegação, surgirá várias vezes uma mensagem de aviso para alertar e bloquear as transferências:

![windowsinstance](images/firststepswindows6.png){.thumbnail}

Para evitar este comportamento, pode desativar a segurança reforçada a partir da sua gestão do servidor.

- Abra a **Gestão do servidor** e selecione o separador `Servidor local`{.action} (1).

![windowsinstance](images/firststepswindows7.png){.thumbnail}

- Clique em `Ativo`{.action} (2) junto a **Configuração de segurança reforçada do Internet Explorer** para poder desativar a opção.

![windowsinstance](images/firststepswindows8.png){.thumbnail}

## Quer saber mais?

[Acesso e segurança na interface Horizon](https://docs.ovh.com/pt/public-cloud/acesso_e_seguranca_na_interface_horizon/){.external}

[Aceder à consola de uma instância na interface Horizon](https://docs.ovh.com/pt/public-cloud/aceder_a_consola_de_uma_instancia_na_interface_horizon/){.external}

[Adicionar um crédito Cloud](https://docs.ovh.com/pt/public-cloud/adicionar-um-credito-cloud/){.external}

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>