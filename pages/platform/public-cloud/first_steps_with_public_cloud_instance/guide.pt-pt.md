---
title: 'Primeiros passos com uma instância Public Cloud'
slug: comecar-com-uma-instancia-public-cloud
excerpt: 'Saiba como começar a utilizar uma instância Public Cloud'
section: Introdução
---

**Última atualização: 4 de dezembro de 2019**

## Sumário

Tem a possibilidade de gerir facilmente as suas instâncias Public Cloud da OVH a partir da sua [Área de Cliente OVH](https://www.ovh.pt/auth/?action=gotomanager){.external}. Aqui poderá consultar todos os seus projetos de infraestrutura (instâncias, backups, discos, chaves SSH, etc.) e de armazenamento (incluindo a lista de containers).

**Saiba como começar a utilizar uma instância Public Cloud.**

### Requisitos

- uma [instância Public Cloud OVH](https://docs.ovh.com/pt/public-cloud/criar_uma_instancia_a_partir_do_espaco_cliente_ovh/)
- uma [chave SSH](https://docs.ovh.com/pt/public-cloud/criacao-de-chaves-ssh/)

### Instruções

### Aceder à interface de gestão da instância

Comece por aceder à [Área de Cliente OVH](https://www.ovh.pt/auth/?action=gotomanager){.external}, vá até à secção “Public Cloud” e selecione o serviço Public Cloud em questão. Depois, clique no separador `Instâncias`{.action} à sua esquerda.

Nessa página, verá um resumo de todas as instâncias. Aqui poderá consultar várias informações:

- o modelo da sua instância;
- o nome e a região;
- os discos rígidos associados;
- o endereço IP da instância;
- o respetivo estado.

![public-cloud](images/compute.png){.thumbnail}

### Editar a configuração de uma instância

Na interface de gestão da instância, clique nos três pontos situados à direita da mesma e selecione a opção `Editar`{.action}.

![public-cloud](images/edit.png){.thumbnail}

Na janela que aparece, poderá:

- dar outro nome à instância;
- alterar o modelo da instância; 
- reinstalar a instância noutro sistema operativo (**atenção: os dados atuais serão eliminados durante esta operação**);
- passar de uma faturação à hora para uma faturação mensal (será então emitida uma fatura proporcional à data de mudança).

![public-cloud](images/edit1.png){.thumbnail}
![public-cloud](images/edit2.png){.thumbnail}
![public-cloud](images/edit3.png){.thumbnail}

### Criar uma cópia de segurança de uma instância

Pode criar uma cópia de segurança de uma instância a partir da página de gestão da mesma.  Para isso, clique nos três pontos situados à direita da instância e selecione a opção `Criar uma cópia de segurança`{.action}. Em seguida, visualizará uma página com toda a informação necessária: 

![public-cloud](images/backup.png){.thumbnail} .

Será depois exibida a seguinte informação: ![public-cloud](images/backup1.png){.thumbnail}.

Após confirmar, será exibida a seguinte informação: ![public-cloud](images/backup2.png){.thumbnail}.

Uma vez realizada a cópia de segurança será possível visualizá-la na secção `Cópia de segurança da instância`{.action}: ![public-cloud](images/backup3.png){.thumbnail}.

Consulte o nosso manual [Criar uma cópia de segurança de uma instância](../guardar_copia_de_seguridad_de_una_instancia/) para obter ajuda nesta operação. 

### Criar uma cópia de segurança automática da instância

Pode agendar uma cópia de segurança automática da instância a partir da página de gestão da mesma. Para isso, clique nos três pontos situados à direita da instância e selecione a opção `Criar uma cópia de segurança automática`{.action}: 

![public-cloud](images/backupauto.png){.thumbnail}

Será então exibida a seguinte página: 

![public-cloud](images/backupauto1.png){.thumbnail}.

Uma vez selecionada a informação necessária e após ter clicado em Criar, será redirecionado para a página: 

![public-cloud](images/backupauto2.png){.thumbnail}.

Poderá consultar a qualquer altura a `Gestão de workflow`{.action} para eliminar o atual processo de criação de uma cópia de segurança automática: 

![public-cloud](images/backupautodelete.png){.thumbnail}

Consulte o nosso manual [Criar uma cópia de segurança de uma instância](../guardar_copia_de_seguridad_de_una_instancia/) para obter ajuda nesta operação. 

### Obter a informação de login

Na interface de gestão da instância, clique em `Detalhes da instância` e confira a seguinte `Informação de login`{.action}. Aqui, poderá obter os comandos SSH necessários para se conectar à sua instância.

![public-cloud](images/instancedetails1.png){.thumbnail}

![public-cloud](images/instancedetails.png){.thumbnail}

### Aceder à consola VNC

A consola VNC permite-lhe aceder diretamente à sua instância. No entanto, deve ter configurado uma palavra-passe para o utilizador “root”.

Para aceder a esta consola, clique em `Consola VNC`{.action} na página de gestão da instância.

![public-cloud](images/vnc.png){.thumbnail}

A consola fica então disponível.

![public-cloud](images/vnc1.png){.thumbnail}

### Reiniciar uma instância

Existem duas formas diferentes de reiniciar uma instância:

- reboot a quente (software);
- reboot a frio (hardware).

Na interface de gestão da instância, clique nos três pontos situados à direita da mesma e selecione `reboot a quente (software)`{.action} ou `reboot a frio (hardware)`{.action}.

A seguir, confirme a reinicialização na nova janela.

![public-cloud](images/reboot.png){.thumbnail}

### Reinstalar uma instância

Pode reinstalar uma instância mantendo o mesmo sistema operativo. **Esta operação irá eliminar todos os dados atuais.**

Na interface de gestão da instância, clique nos três pontos situados à direita da mesma e selecione a opção `Reinstalar`{.action}. A seguir, confirme para iniciar o processo.

![public-cloud](images/reinstall.png){.thumbnail}

### Eliminar uma instância

Também pode eliminar uma instância. **Esta operação irá eliminar de forma definitiva a instância e os respetivos dados.**

Na interface de gestão da instância, clique no ícone de seta virada para baixo e selecione a opção `Eliminar`{.action}. A seguir, confirme para iniciar o processo. 

![public-cloud](images/delete.png){.thumbnail}

## Vá mais longe

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
