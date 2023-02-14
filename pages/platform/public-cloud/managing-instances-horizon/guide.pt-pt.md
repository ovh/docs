---
title: Gerir as suas instâncias Public Cloud através do Horizon
slug: gerir-instancias-public-cloud
excerpt: Saiba como gerir as suas instâncias através da interface Horizon
section: Gestão a partir do Horizon
order: 04
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 03/02/2022**

## Objetivo

Além da Área de Cliente OVHcloud, também pode gerir os seus projetos Public Cloud da OVHcloud a partir da [interface Horizon](https://horizon.cloud.ovh.net/auth/login/). Nesta interface, poderá consultar todos os seus projetos de infraestrutura (instâncias, backups, discos, chaves SSH, etc.) e de armazenamento (incluindo a lista dos seus containers).

**Este guia explica pormenorizadamente como gerir as suas instâncias Public Cloud através da interface Horizon.**

## Requisitos

- Ter criado uma instância Public Cloud a partir da [Área de Cliente OVHcloud](../public-cloud-primeiros-passos/) ou através da [interface Horizon](https://docs.ovh.com/pt/public-cloud/criar_uma_instancia_na_interface_horizon/).
- [Ter criado uma chave SSH](https://docs.ovh.com/pt/public-cloud/public-cloud-primeiros-passos/#1o-passo-criacao-de-chaves-ssh/).

## Prática

### Aceder à interface de gestão da instância

Em primeiro lugar, aceda à [interface Horizon](https://horizon.cloud.ovh.net/auth/login/).

Ao contrário da Área de Cliente OVHcloud, o Horizon separa os seus serviços em função da sua região. Pode escolher a região a partir do menu no canto superior esquerdo:

![public-cloud](images/region2021.png){.thumbnail}

Clique no menu `Compute`{.action} à esquerda e selecione `Instances`{.action}. Na nova página, poderá consultar um resumo de todas as suas instâncias. Várias informações aparecerão aqui:

  * o modelo da sua instância (*Flavor*)
  * o seu nome, estado de alimentação (Power State) e tempo decorrido desde a sua criação (*Time since created*)
  * o endereço IPv4 e IPV6 da sua instância
  * a sua rede privada associada e o seu endereço IPv4 privado
  * estado (*Status*)
  * a imagem utilizada para a instalação da instância (se aplicável)

![public-cloud](images/options2022.png){.thumbnail}

**Launch Instance** 

Esta opção permite-lhe criar uma instância. Para mais informações, consulte [este guia](https://docs.ovh.com/pt/public-cloud/criar_uma_instancia_na_interface_horizon/).

**Delete Instance**

Esta opção permite eliminar várias instâncias ao mesmo tempo, basta assinalar a casa à esquerda do nome da instância.

**More Actions**

Este menu permite-lhe executar as seguintes ações numa ou várias instâncias. Em primeiro lugar, certifique-se de que a opção à esquerda é a seguinte:

- Start Instances: esta opção permite reiniciar uma ou várias instâncias em estado *shutoff* ou *off*.
- Shut Off Instances: esta opção permite suspender uma ou várias instâncias.
- Soft Reboot Instances: esta opção permite-lhe efetuar um reboot de software numa ou várias instâncias.

**Create Snapshot**: Esta opção permite criar uma snapshot (instantânea) da sua instância. Para mais informações, consulte [este guia](https://docs.ovh.com/pt/public-cloud/gestao_de_snapshots_de_uma_instancia_na_interface_horizon/).

### Modificar uma instância

Na interface de gestão da instância, selecione a opção desejada na lista pendente.

![public-cloud](images/list2022.png){.thumbnail}

- Attach Interface: esta opção permite adicionar uma ou várias interfaces privadas à sua instância através da VLAN. Para mais informações, consulte [esta parte](https://docs.ovh.com/pt/public-cloud/public-cloud-vrack/#adicao-de-uma-interface-privada) do guia correspondente.
- Detach Interface: esta opção permite eliminar uma interface associada a uma instância. Para mais informações, consulte [esta parte](https://docs.ovh.com/pt/public-cloud/public-cloud-vrack/#eliminacao-de-uma-interface-privada) do guia correspondente.
- Edit Instance: esta opção permite alterar o nome da instância e os [grupos de segurança](https://docs.ovh.com/pt/public-cloud/configure-security-group-horizon/).

> [!warning]
> As opções a vermelho indicam a possibilidade de perda de dados durante o processo. Certifique-se de que possui sempre um backup dos seus dados antes de efetuar alterações na sua instância.
>

### Redimensionar uma instância

Graças ao Public Cloud, pode aumentar os recursos de que a sua instância dispõe, e isto em apenas alguns cliques.

> [!warning]
>
> Apenas o redimensionamento para um modelo superior é possível para os modelos clássicos.
> Além disso, esta operação provoca um corte da instância durante o tempo da operação.
> 

> [!success]
>
> As instâncias do tipo *flex* permitem o redimensionamento para modelos superiores ou inferiores graças a um tamanho de disco único.
> 

Selecione a `Resize Instance`{.action} no menu pendente à direita da instância em questão.

![Resize instance](images/resizeinstance2022.png){.thumbnail}

* Escolha do template (*Flavor Choice*): esta secção indica o template atual (*old flavor*) e permite-lhe selecionar um novo template (*new flavor*) para o recurso da instância.

![public-cloud](images/flavorchoice.png){.thumbnail}

* Detalhes do template (*Flavor Details*). Nesta secção apresentam-se os recursos associados ao template escolhido. 
* Limites de Projeto (*Project Limits*). Visite aqui os recursos ocupados em comparação com os recursos totais atribuídos ao projeto.

> [!warning]
> Tenha em conta que só pode redimensionar uma instância de um modelo Linux para outro modelo Linux e de um modelo Windows para outro modelo Windows.
>

* Opções avançadas (*Advanced Options*). Esta secção permite gerir o particionamento do disco (*Disk Partition*) e o grupo de servidores (*Server Group*).

![public-cloud](images/resize_advanced.png){.thumbnail}

Concluída a configuração, clique em `Resize`{.action}.

**Redimensionamento do disco sob Windows**

Atenção, aquando de um redimensionamento para uma Instância Windows, o tamanho da partição não é automaticamente atualizado, será necessário ampliá-la ao utilizar o **gestor de disco**:

Clique com o botão direito do rato no menu `Iniciar`{.action} e lance o gestor de disco ao clicar em `Gestão do disco`{.action}.

![public-cloud](images/2980.png){.thumbnail}

Clique com o botão direito do rato na partição principal e, a seguir, em `Estender o volume`{.action}.

![public-cloud](images/2981a.png){.thumbnail}

Clique em `Seguinte`{.action} para aceder à secção "Autenticação do volume". Escolha os recursos do disco a expandir e clique em `Seguinte`{.action}. 

![public-cloud](images/2978a.png){.thumbnail}

A seguir, clique em `Terminar`{.action} para validar a sua escolha.

![public-cloud](images/wizard2021.png){.thumbnail}

A nova dimensão do disco será então apresentada no gestor de disco.

![public-cloud](images/2979.png){.thumbnail}

### Reconstruir uma instância

Esta opção permite-lhe reconfigurar a sua instância numa nova base, ou simplesmente mudar de sistema operativo.

> [!alert]
> Esta operação leva à eliminação dos dados da instância.
> 

Selecione `Rebuild Instance`{.action} na lista pendente correspondente à instância.

![public-cloud](images/rebuildinstance.png){.thumbnail}

Selecione a imagem para a reconstrução.<br>
Selecione o tipo de particionamento ("Automático" ou "Manual"). Isto é facultativo.<br>
Finalmente, clique em `Rebuild Instance`{.action}. Esta operação pode demorar alguns minutos.

### Suspender ou colocar em pausa uma instância (Shelve or pause an instance)

Para saber como suspender ou colocar em pausa uma instância, clique [aqui](https://docs.ovh.com/pt/public-cloud/suspender_ou_colocar_em_pausa_uma_instancia/) para consultar o guia específico deste método.

### Aceder à consola da instância <a name="console"></a>

Em caso de perda de acesso à sua instância, devido a uma configuração incorreta ou a um corte no serviço SSH, é sempre possível reconfigurar a instância com a ajuda da consola VNC.

> [!primary]
>
> Pode aceder diretamente à sua instância através da consola VNC. No entanto, deverá configurar previamente uma palavra-passe para o utilizador root.
> Para mais informações, consulte [este guia](https://docs.ovh.com/pt/public-cloud/tornar-se_root_e_definir_uma_palavra-passe/).
> A consola VNC pode também servir de primeira aproximação em caso de avaria, de forma a estabelecer um diagnóstico graças à análise da fase de arranque da sua instância.
> 

Na lista pendente correspondente à instância, selecione a opção `Console`{.action}.

![public-cloud](images/accessconsole.png){.thumbnail}

A consola da instância aparece.

> [!success]
>
> Se a consola deixar de responder às entradas de teclado, clique na barra de estado.
> Para sair do modo pleno de ecrã, clique no botão de retorno do browser.
> 

**Consola da instância**

![public-cloud](images/console.png){.thumbnail}

### Reiniciar uma instância

Existem dois métodos para reiniciar uma instância:

- Reinício a quente  (software) (Soft Reboot Instance)
- Reinício a frio (hardware) (Hard Reboot Instance)

Na lista pendente correspondente à instância, selecione a `Soft Reboot Instance`{.action} ou a `Hard Reboot Instance`{.action}.

![public-cloud](images/rebootinstance.png){.thumbnail}

De seguida, confirme o seu pedido na janela que aparece.

### Eliminar uma instância

Se já não precisa de uma das suas instâncias, pode eliminá-la a qualquer momento.

> [!alert]
>
> Os dados presentes na instância serão eliminados.
> Também pode criar um backup desta instância se deseja conservar os dados e relançar uma instância idêntica mais tarde.
> 

Na lista pendente correspondente à instância, selecione a `Delete Instance`{.action}. 

![public-cloud](images/deleteinstance.png){.thumbnail}

A seguir, clique em `Confirm`{.action} para lançar o processo.

> [!success]
>
> Uma vez eliminada, a sua instância não lhe será faturada e não poderá recuperá-la.
> 

## Quer saber mais?

Fale com a nossa comunidade de utilizadores <https://community.ovh.com/en/>.