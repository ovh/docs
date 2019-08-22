---
title: 'O que fazer se um alojamento for desativado por segurança'
slug: site-desativado-por-hack
excerpt: 'Saiba o que fazer se o seu alojamento web for desativado por razões de segurança'
section: Diagnóstico
order: 1
---

**Última atualização: 02/07/2019**

## Sumário

Se possui um website num alojamento da OVH, poderá ter recebido um e-mail informando-o de que realizámos uma operação relacionada com a segurança do seu serviço. Esta operação pode ter impedido o acesso ao seu website ou limitado algumas das suas funcionalidades. A OVH efetua este tipo de ações quando existe uma atividade suspeita, geralmente maliciosa, no alojamento web. 

**Saiba o que fazer se o seu alojamento web for desativado por razões de segurança.**

## Requisitos

- Ter um serviço de [alojamento web da OVH](https://www.ovh.pt/alojamento-partilhado/){.external}.
- Dispor das credenciais necessárias para aceder ao espaço de armazenamento do alojamento.
- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, na secção `Web`{.action}.

## Instruções

Atualmente, existem inúmeros sites na rede, que podem ser baseados numa solução “chave na mão” (também conhecido como CMS pelas suas siglas em inglês) ou numa estrutura personalizada (ou seja, desenvolvida pelo próprio utilizador ou por terceiros). Em ambos os casos, a tecnologia na qual se baseiam evolui com o tempo. 

Assim, **é necessário manter os websites atualizados**. As atualizações podem incluir novas funcionalidades, melhorias de estabilidade, mas também correções de segurança para corrigir possíveis falhas.

As falhas de segurança que um website pode ter são variadas. Embora uma falha de segurança não permita penetrar nos servidores da OVH, estas falhas podem pôr em perigo os dados alojados e, como um efeito bola de neve, comprometer a estabilidade da nossa infraestrutura em caso de exploração massiva.

Uma falha de segurança num website pode permitir que uma pessoa utilize o alojamento para fins maliciosos, por exemplo para enviar spam ou para alojar websites fraudulentos, sem o seu conhecimento.   

Para evitar estas situações, e assim garantir a sua segurança e a de todos os nossos clientes, a OVH pode desativar temporariamente o alojamento ou algumas das suas funcionalidades. Nesse caso, será necessário realizar várias operações para solucionar o problema. Embora não exista um único procedimento, este manual disponibiliza informações sobre as medidas que deve tomar se o seu alojamento web for desativado por razões de segurança. 

> [!warning]
>
> Este manual não substitui a ajuda de webmaster ou outro profissional. Se precisar de ajudar, recomendamos que recorra a um fornecedor especializado e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica.
>

### 1 - Recolher informações

Antes de realizar qualquer operação no seu website, deverá recolher toda a informação possível para perceber o que aconteceu. Deixamos-lhe aqui alguns conselhos: 

#### 1.1. Leia atentamente as mensagens enviadas pela OVH

A OVH deve lhe ter enviado uma mensagem informando-o de que realizou uma ação relativa à segurança do alojamento. Leia atentamente a informação presente nessa mensagem. Esta informação pode variar em função da situação, mas, em qualquer caso, permitir-lhe-á:

- determinar o momento exato em que o website foi desativado;
- conhecer o motivo pelo qual o website foi desativado.

Estas informações poderão ajudá-lo nas pesquisas e operações que terá de realizar mais à frente.

#### 1.2. Avaliar a segurança do website

Quer se baseie num CMS (como WordPress), quer utilize uma estrutura personalizada, **é necessário atualizar o website regularmente**.
 

Isto é especialmente importante no caso dos CMS, pois são personalizados com temas e módulos (o plugins) adicionais. Estes últimos, embora tenham um lado prático, alteram ou adicionam novos fragmentos no código do website, e o utilizador nem sempre conhece a proveniência e o nível de segurança desse novo código.

Assim, deverá colocar as seguintes perguntas: 

- **Atualizou recentemente o seu website?** 

Tanto o website como os seus temas ou módulos adicionais devem ser atualizados com regularidade (por si ou um webmaster).  Se não o fizer, é possível que o seu website tenha falhas de segurança que já tenham sido solucionadas em versões posteriores do CMS no qual se baseia. 

Desta forma, verifique que tanto o website como os elementos que instalou no mesmo tenham a última versão e, se for necessário, atualize-os.

- **Adicionou recentemente um novo tema ou módulo adicional ao website?**

Neste caso, é possível que o tema ou módulo tenha uma falha de segurança e que este último tenha sido explorado com fins maliciosos. No entanto, poderá dever-se a outro motivo e não ter necessariamente origem neste novo elemento instalado.

Assim, certifique-se de que os diferentes elementos adicionais do seu website sejam seguros ou tenham uma boa reputação.

#### 1.3. Consulte a atividade e os logs do alojamento

Isto irá permitir-lhe conhecer de forma mais detalhada as ações que foram realizadas no serviço e website para poder determinar o que pode ter motivado a desativação do alojamento.

Para consultar a atividade e os logs do alojamento, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, na secção `Web`{.action}. Na coluna à esquerda, clique em `Alojamentos`{.action} e selecione o alojamento correspondente. A seguir, poderá realizar duas ações diferentes em função da informação à qual pretende aceder:

- **Consultar a atividade do alojamento**

Pode consultar a evolução da atividade do serviço num determinado período de dias, semanas ou meses. Isto irá permitir-lhe identificar se houve ou se está a haver uma atividade anormal antes que a OVH a detete e desative o alojamento. 

Para isso, no separador `Informações gerais`{.action}, consulte a secção `Atividades do alojamento`, situado no final da página.

![hostingdeactivation](images/hosting-deactivation-step1.png){.thumbnail}

- **Consultar os logs do alojamento**

Também pode consultar os logs detalhados do serviço, incluindo, entre outros, todos os pedidos web que tenham sido enviadas a partir do alojamento. Desta forma, poderá identificar o(s) ficheiro(s) que permitiram que outra pessoa utilize o alojamento com fins maliciosos. Este tipo de análise pode ser uma tarefa bastante complexa. Se precisar, peça a ajuda de um webmaster.

Para aceder aos logs, clique no separador `Mais +`{.action} e em `Estatísticas e logs`{.action}. De seguida, clique no ligação correspondente para consultar os logs de acesso do seu website. 

![hostingdeactivation](images/hosting-deactivation-step2.png){.thumbnail}

Consulte os logs “web” da data que considera mais oportuna (o momento em que desativou o website ou aquele em que começou a atividade anormal).

A partir dessa hora, vá ampliando progressivamente o campo de pesquisa em horários anteriores. O objetivo consiste em encontrar atividades anormais ou diferentes das outras, que provenham geralmente de pedidos “POST”. Novamente, esta análise pode ser bastante complexa. Se precisar, peça a ajuda de um webmaster.

### 2 - Realizar as operações pertinentes no website

Uma vez que dispõe da informação sobre o sucedido, deverá poder realizar as ações oportunas no website ou, pelo menos, saber que tipo de medidas deve tomar. 

Estas medidas podem englobar-se em duas categorias complementares:

- **A correção da(s) falha(s) de segurança**: isto evitará que alguém possa voltar a explorá-las.

- **A eliminação de qualquer código malicioso**: é possível que uma pessoa maldosa se tenha aproveitado da falha de segurança para introduzir um código no seu website e, por exemplo, criar uma porta das traseiras para assim aceder ao website e ao alojamento sem o seu conhecimento. Desta forma, deve verificar se o código malicioso foi adicionado e eliminá-lo, quando aplicável.

> [!warning]
>
> Estas duas categorias são complementares.
> 
> Se corrigir a falha de segurança sem eliminar o código malicioso do alojamento, o hacker continuará a ter acesso a este último e poderá continuar a utilizá-lo com fins maliciosos.
>
> Se eliminar o código malicioso sem corrigir a falha de segurança, o hacker poderá voltar a aproveitar-se dessa falha e voltar a introduzir um código maliciosa no alojamento, e poderá até mesmo criar uma nova porta das traseiras.
>

Estas operações não são iguais em todos os casos, uma vez que dependem do próprio website. No entanto, oferecemos mais abaixo algumas orientações, que deverá adaptar em função do seu caso específico. No entanto, se encontrar dificuldades, recomendamos que recorra a um prestador de serviços especializado e/ou que contacte o editor do serviço. 

#### 2.1. Restaurar o website a uma data anterior

As cópias de segurança permitem restaurar o website para o estado em que se encontrava a uma data anterior, antes de ser alterado por terceiros. É importante que a cópia de segurança utilizada não contenha nenhum código malicioso, uma vez que, nesse caso, o restauro não servirá de nada. 

> [!warning]
>
> O restauro só permite eliminar o código malicioso que possa estar no seu alojamento sem o seu conhecimento, **mas não corrige a(s) falha(s) de segurança.**
>

Existem várias possibilidades de realizar um restauro do seu site.

- **Se tiver uma cópia de segurança do website**: 

Só precisa de restaurar a cópia de segurança no alojamento, substituindo o conteúdo do espaço de armazenamento e da base de dados pelo conteúdo da cópia de segurança. Se precisar de ajuda, consulte o nosso manual “[Importar um backup para a base de dados de um alojamento web](https://docs.ovh.com/pt/hosting/partilhado_guia_de_importacao_de_uma_base_de_dados_mysql/){.external}”.

- **Se a OVH tiver uma cópia de segurança do website (espaço de armazenamento e base de dados)**:

Consoante a data na qual pretende restaurar o website, é possível que a OVH tenha uma cópia de segurança deste último. Se precisar de ajuda, consulte os nossos manuais “[Restaurar o espaço de armazenamento do alojamento web](https://docs.ovh.com/pt/hosting/restauracao-ftp-filezilla-area-de-cliente/){.external}”, “[Recuperar a cópia de segurança da base de dados de um alojamento web](https://docs.ovh.com/pt/hosting/partilhado_guia_de_exportacao_de_uma_base_de_dados_mysql/){.external}” e “[Importar um backup para a base de dados de um alojamento web](https://docs.ovh.com/pt/hosting/partilhado_guia_de_importacao_de_uma_base_de_dados_mysql/){.external}”. Sempre que possível, certifique-se de que as datas da cópia de segurança coincidem.

- **Se nem a OVH nem você tiver uma cópia de segurança do seu website**: 

Nesse caso, deverá [intervir manualmente no código do seu site](https://docs.ovh.com/pt/hosting/site-desativado-por-hack/#23-corrigir-manualmente-o-codigo-do-website){.external} e realizar as correções necessárias. 

#### 2.2. Atualizar o website

Para realizar esta operação, é necessário ter em conta várias considerações técnicas. Em primeiro lugar, antes de realizar uma atualização, certifique-se de que tem acesso ao website. 

> [!primary]
>
> Se a ação realizada pela OVH indisponibilizou o acesso ao website, não poderá realizar a atualização. Nesse caso, consulte o passo “[3 - Reativar o alojamento web](https://docs.ovh.com/pt/hosting/site-desativado-por-hack/#3-reativar-o-alojamento-web_1){.external} para recuperar o acesso. Uma vez que acedeu ao website, poderá atualizá-lo.
>

Aceda à interface de administração do website (diferente da Área de Cliente da OVH). Verifique o seguinte:

- o website está corretamente atualizado;
- todos os temas e módulos adicionais (ou plugins) instalados estão atualizados.

Se não for o caso, deverá atualizá-los. Para isso, siga as instruções da interface de administração do seu site. 

> [!warning]
>
> **Antes de realizar esta operação, recomendamos vivamente que siga todas as indicações relativas à atualização** provenientes tanto do editor ou do criador do website, como dos programadores dos temas e módulos adicionais utilizados.
>

Estas indicações podem fazer referência a elementos que poderão bloquear a atualização. Por exemplo:

- certifique-se de que a nova versão do seu CMS (como o WordPress) é compatível com a versão de PHP configurada no seu alojamento. Se tiver de a alterar, consulte o nosso manual “[Mudar a versão de PHP do alojamento web](https://docs.ovh.com/pt/hosting/configurar_o_php_num_alojamento_web_alojamentos_2014_ovh/){.external}”;
- certifique-se de que os temas e módulos adicionais são compatíveis com a nova versão do CMS. Se não for o caso, não os poderá utilizar e deverá arranjar uma alternativa.

#### 2.3. Corrigir manualmente o código do website

Se não utilizar um website baseado num CMS (como o WordPress) ou se não tiver uma cópia de segurança para o restaurar, deverá realizar as correções necessárias manualmente. **Dada a sua dificuldade técnica, recomendamos que solicite a ajuda de um especialista para realizar esta operação.** 

Não existe um procedimento válido para todos os casos, uma vez que dependem do próprio website. No entanto, pode utilizar os logs do alojamento para localizar com maior facilidade o ficheiro ou os ficheiros afetados que deve corrigir.

### 3 - Reativar o alojamento web

Para reativar o alojamento web, é necessário realizar uma operação no espaço de armazenamento que consiste em atribuir autorizações (ou direitos) “705” à raiz (ou “/”) do referido espaço de armazenamento.

> [!primary]
>
> Se o e-mail enviado pela OVH especificar que não pode reativar o alojamento, siga os passos indicados nessa mensagem.
>

Se tiver a possibilidade de reativar você mesmo o alojamento, reúna as informações necessárias para aceder ao espaço de armazenamento (ou seja, o servidor FTP e a respetiva palavra-passe).

Para isso, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} e clique em `Alojamentos`{.action} na barra à esquerda. De seguida, selecione o nome do alojamento correspondente e aceda à janela `FTP - SSH`{.action}. Nessa página, poderá [alterar a palavra-passe de um utilizador FTP](https://docs.ovh.com/pt/hosting/alterar-palavra-passe-utilizador-ftp/){.external}, caso seja necessário. 

![hostingdeactivation](images/hosting-deactivation-step3.png){.thumbnail}

Quando tiver a informação necessária, existem diversas possibilidades consoante o programa ou interface que pretende utilizar.

#### 3.1. Reabrir o alojamento com FileZilla

Abra o FileZilla e ligue-se ao espaço de armazenamento. No menu superior, clique em `Servidor`{.action} e selecione `Introduzir comando personalizado`{.action} (o nome desta opção pode variar em função da versão do FileZilla). Na nova janela, introduza o seguinte comando e valide:

```
SITE CHMOD 705 /
```

Se a operação tiver sido realizada corretamente, receberá a resposta “OK”. Para o verificar, tente aceder ao seu website. Se tiver de o atualizar, volte para a secção “[2.2\. Atualizar o website](https://docs.ovh.com/pt/hosting/site-desativado-por-hack/#22-atualizar-o-website){.external}” deste manual.

![hostingdeactivation](images/hosting-deactivation-step4.png){.thumbnail}

#### 3.2. Reabrir o alojamento com o Explorador FTP “net2ftp”

Ainda no separador `FTP - SSH`{.action} da Área de Cliente OVH, clique no botão `Explorador FTP`{.action} e aceda ao espaço de armazenamento. De seguida, clique no botão `Avançado`{.action} e em `Go`{.action} junto de “Send arbitrary FTP commands to the FTP server” (enviar comandos FTP arbitrários ao servidor FTP).

![hostingdeactivation](images/hosting-deactivation-step5.png){.thumbnail}

Introduza o seguinte comando na área de texto superior e clique no botão de “v” verde. 

```
SITE CHMOD 705 /
```

Se a operação tiver sido realizada corretamente, receberá uma resposta. Para o verificar, tente aceder ao seu website. Se tiver de o atualizar, volte para a secção “[2.2\. Atualizar o website](https://docs.ovh.com/pt/hosting/site-desativado-por-hack/#22-atualizar-o-website){.external}” deste manual.

![hostingdeactivation](images/hosting-deactivation-step6.png){.thumbnail}

#### 3.3. Reabrir o alojamento em SSH

Ligue-se ao espaço de armazenamento por SSH e execute o seguinte comando:

```
chmod 705 .
```

Para verificar que dispõe das autorizações necessárias, execute o seguinte comando:

```
ls -la
```

Também pode tentar aceder ao website a partir de um navegador. Se tiver de o atualizar, volte para a secção “[2.2\. Atualizar o website](https://docs.ovh.com/pt/hosting/site-desativado-por-hack/#22-atualizar-o-website){.external}” deste manual.

### 4 - Manter a segurança do website

Agora que o seu website já não tem falhas de segurança nem códigos maliciosos, é importante continuar a zelar pela sua segurança. Para isso, aconselhamos o seguinte:

- atualize regularmente o website, incluindo os temas e módulos adicionais;

- instale conteúdos de confiança: quanto mais personalizar um website instalando temas e módulos, mais código alterará ou adicionará ao site. Preste especial atenção à opinião e aos comentários dos utilizadores sobre os temas e módulos que deseja instalar.

Resumidamente, o objetivo é atualizar o website com regularidade e ter atenção com o que instala nele.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com>.