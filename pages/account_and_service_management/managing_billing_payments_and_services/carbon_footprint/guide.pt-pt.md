---
title: "Como obter a pegada de carbono dos seus serviços OVHcloud"
excerpt: "Saiba como recuperar a pegada de carbono mensal dos serviços OVHcloud graças à nossa calculadora de carbono"
updated: 2025-06-17
---

## Objetivo

No âmbito das suas atividades profissionais ou por interesse no assumpto, poderá ter de calcular a pegada de carbono dos seus serviços.

**Saiba como recuperar mensalmente a pegada de carbono dos seus serviços OVHcloud.**

## Requisitos

- Ser contacto "Faturação" serviços para os quais deseja obter a pegada de carbono. Para obter mais informações, consulte [o nosso manual sobre gestão de contactos](/pages/account_and_service_management/account_information/managing_contacts).

**O cálculo da pegada de carbono está disponível para os seguintes serviços:**

- [Servidor Dedicado](/links/bare-metal/bare-metal) (Advance, Game, Scale, High Grade, Storage)
- [Servidor Dedicado Eco](/links/bare-metal/eco) (Rise, Kimsufi, So You Start)
- [VMware on OVHcloud](/links/hosted-private-cloud/vmware)
- [Instâncias Public Cloud (Compute)](/links/public-cloud/compute)

## Instruções

Há vários pontos a ter em conta:

- Não é possível gerar balanços de contas para o mês atual.
- Quer introduza, através da API OVHcloud, uma data no início, meio ou fim de mês para o mês escolhido, o balanço terá em conta o mês completo.
- Não podem ser efetuados balanços para além dos últimos 24 meses.
- Nenhum balanço pode ser gerado para o período que precede a data de implementação da funcionalidade para cada serviço da OVHcloud (ver quadro abaixo).

| Serviço | Data de entrada em funcionamento da calculadora de pegada de carbono |
|---|---|
| Servidor Dedicado | 2023/05/01 |
| Servidor Dedicado Eco | 2023/05/01 |
| VMware on OVHcloud | 2023/08/01 |
| Instâncias Public Cloud | 2025/01/01 |

### Recuperar o balanço mensal do mês anterior através da Área de Cliente OVHcloud

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
1. Na página que é apresentada, na coluna da esquerda, aceda à secção contendo os **Links úteis** e clique no separador `A minha pegada ecológica`{.action}.
1. Na nova página que aparece, clique em `Fazer download da minha pegada de [Mês] de [Ano]`{.action}.

![Carbon footprint](/pages/assets/screens/control_panel/product-selection/right-column/carbon-footprint/my-carbon-footprint.png){.thumbnail}

Poderá recuperar todos os meses a pegada de carbono do mês anterior para os seus serviços elegíveis.

Se precisar da pegada de carbono durante um mês antes do mês anterior ao mês em curso, deverá obrigatoriamente passar pelas nossas API para a recuperar.

### Recuperar um balanço mensal anterior ao mês anterior através das nossas API

Por predefinição, as API da OVHcloud são disponibilizadas para permitir que os programadores ou os integradores associem, por exemplo, funcionalidades presentes ou não na Área de Cliente OVHcloud diretamente nas suas aplicações ou soluções.

#### Etapa 1 - Ligar-se à API OVHcloud

- Aceda ao nosso website [API OVHcloud](/links/api) (verifique se está em `https://eu.api.ovh.com` se os seus serviços estão alojados na Europa e em `https://ca.api.ovh.com` se estiverem alojados fora da Europa).
- Na página que se abrir, clique em `Explore the OVHcloud API`{.action}.
- Na nova página que surgir, e na parte esquerda da página, aceda ao formulário situado à direita do campo `v1`{.action} e selecione/introduza a escolha `/me`.
- Na lista de chamadas API que aparece em baixo, procure e clique na seguinte chamada API: **POST /me/carbonCalculator/task**. Pode também clicar diretamente na chamada API abaixo para aceder:

> [!api]
>
> @api {v1} /me POST /me/carbonCalculator/task
>

- Na parte direita da página será então apresentada a API com o seu quadro a completar.
- Clique no botão situado no canto superior direito intitulado `Authenticate`{.action} e, a seguir, no botão `Login with OVHcloud SSO`{.action}.
- Abre-se a interface de ligação ao seu [Área de Cliente OVHcloud](/links/manager).
- Ligue-se com o seu identificador de cliente e clique em `Authorize`{.action} para utilizar as API da OVHcloud com os seus serviços.
- Será de seguida automaticamente reencaminhado para a página anterior da API **POST /me/carbonCalculator/task**.

#### Etapa 2 - Solicitar a geração do balanço e recuperar o ID da tarefa solicitada

Substitua a data atual que aparece na caixa da API pela data na qual pretende parar o cálculo do balanço. Queira respeitar o seguinte formato da data:

```bash
{
  "date": "YYYY-MM-DD"
}
```

![API](/pages/assets/screens/api/post-me-carboncalculator-task.png){.thumbnail}

Depois de escolher a data e de a introduzir corretamente, clique no botão azul `EXECUTE`{.action} situado no canto inferior direito da secção previamente preenchida.

Se tudo tiver sido executado corretamente, aparecerá um `taskID` na janela `RESPONSE`{.action} quando descer para a página, abaixo do botão `EXECUTE`{.action}.

![API](/pages/assets/screens/api/post-me-carboncalculator-task-response.png){.thumbnail}

Por exemplo, se o seu identificador de cliente OVHcloud for o `aa00000-ovh` e a data escolhida anteriormente for o `31-01-2025`, então você obterá o seguinte resultado:

```bash
{
  "taskID": "aa00000-ovh_202501"
}
```

Copie apenas o valor obtido do seu lado e equivalente ao valor do nosso exemplo `aa00000-ovh_202501` (sem copiar os dois `"` situados nas extremidades).

#### Etapa 3 - Obter o ficheiro de balanço de carbono dos seus serviços em formato PDF

Graças ao valor do `taskID` anteriormente recuperado, poderá recuperar o balanço de carbono dos seus serviços em formato PDF.

Fique no nosso website [API OVHcloud](/links/api) e efetue as seguintes ações:

- No lado esquerdo da página, aceda ao formulário situado à direita do formulário `v1`{.action} e selecione/introduza a escolha `/me`{.action}.
- Na lista de chamadas API que aparece em baixo, procure e clique na seguinte chamada API: **GET /me/carbonCalculator/task/{taskID}**. Pode também clicar diretamente na chamada API abaixo para aceder:

> [!api]
>
> @api {v1} /me GET /me/carbonCalculator/task/{taskID}
>

- À direita da página será apresentada a chamada API com um formulário a preencher.

Preencha o formulário da parte `PATH PARAMETERS` assim:

- `taskID`: copie aqui o valor da taskID recuperada na etapa 2.

![API](/pages/assets/screens/api/get-me-carboncalculator-task-taskid.png){.thumbnail}

Depois de introduzir corretamente o valor do seu `taskID`, clique no botão azul `EXECUTE`{.action}.

O resultado seguinte aparece na janela `RESPONSE`{.action} quando desce à página, abaixo do botão `EXECUTE`{.action}:

![API](/pages/assets/screens/api/get-me-carboncalculator-task-taskid-response.png){.thumbnail}

```bash
{
  "link": "Find here the complete URL to download the carbon footprint in PDF format",
  "status": "SUCCESS",
  "taskID": "aa00000-ovh_202501"
}
```

Neste resultado, copie a totalidade do URL em "HTTPS" (**sem os aspas**) à direita da menção `"link":`, e cole-o na barra de pesquisa do seu browser para iniciar a transferência do balanço de carbono em formato PDF.

O browser da Internet irá transferir automaticamente o ficheiro e, em seguida, visualizá-lo.

> [!primary]
>
> Dependendo das definições do browser, é possível que a transferência e a visualização do ficheiro sejam bloqueadas. Se tal for o caso, verifique a configuração do seu browser e recarregue a página.

Quando o ficheiro estiver aberto, poderá nele encontrar os seguintes elementos:

- Um quadro recapitulativo das emissões de C02 por categoria para o mês solicitado.
- Um quadro recapitulativo das emissões de C02 por categoria entre o início do ano civil e o mês solicitado.
- Um quadro que especifique os valores por tipo de produto subscrito.
- Um gráfico com as emissões de C02 por categoria.

> [!warning]
> A ligação gerada é válida apenas durante 24 horas. Por isso, certifique-se de que descarrega o balanço de carbono a partir do seu browser, depois de abrir o link.

## Quer saber mais? <a name="go-further"></a>

[Primeiros passos com as API OVHcloud](/pages/manage_and_operate/api/first-steps)
 
Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com a nossa [comunidade de utilizadores](/links/community).