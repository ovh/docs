---
title: 'Saiba como carregar ou descarregar dados num servidor dedicado através de SFTP'
slug: carregar-e-descarregar-dados-através-de-sftp
excerpt: 'Transfira informações do servidor dedicado para o computador pessoal, e vice-versa'
section: Tutoriais
---

## Introdução

Se precisar de migrar os seus dados, é possível que tenha de os descarregar do seu servidor dedicado para os guardar noutra máquina. Existem diferentes formas de realizar esta operação, nomeadamente o protocolo SFTP (Secure File Transfert Protocol) que permite transferir de forma fácil e rápida ficheiros através de uma ligação segura por SSH.

**Este tutorial explica como carregar e descarregar dados num servidor dedicado através de SFTP.**

> [!warning]
>
Este tutorial explica a utilização de uma ou várias soluções da OVH através de ferramentas externas e descreve as operações realizadas num contexto preciso. Deverá adaptá-las consoante a sua situação. Se necessitar de ajuda, recomendamos que entre em contacto com um fornecedor especializado ou que partilhe as suas dúvidas com o resto da nossa comunidade: <https://community.ovh.com/en/>. A OVH não lhe poderá fornecer assistência.
>


## Requisitos


### O que precisa de saber

*     Ter conhecimentos de gestão em Linux.
*     Saber ligar-se através de SSH.
*     Poder instalar uma distribuição (neste tutorial, utilizaremos uma distribuição Debian 9.4).


### O que precisa de ter

*     Dispor de, pelo menos, um servidor dedicado da OVH.
*     Dispor de um software compatível com SFTP (neste tutorial, utilizaremos [FileZilla](https://filezilla-project.org/)).


## Instruções


### 1 - Descarregar os dados

Por predefinição, um servidor instalado num sistema Linux dispõe de um acesso SSH através da porta 22.

O protocolo SFTP (Secure File Transfert Protocol) permite transferir ficheiros através de uma ligação segura SSH. Explicaremos como utilizar este protocolo em duas situações: quando o utilizador dispõe de um acesso ao servidor e quando o servidor está em modo Rescue.


#### Quando o utilizador dispõe de um acesso ao servidor

Em FileZilla, indique o seu IP no campo “Host” e, a seguir, utilize o seu nome de utilizador e palavra-passe “root”. No campo “Port”, indique o número “22” ou a porta do seu serviço SSH caso a tenha modificado.

A ligação fica assim estabelecida e a estrutura em árvore é apresentada na rubrica “Remote site”.

 
![Remote site sftp](images/sftp_ds_01.png)
 

Poderá arrastar e largar os dados que pretende descarregar a partir da janela da direita (`remote site`) para a janela da esquerda (`Local site`), para os guardar no seu computador pessoal. No nosso exemplo, os dados estão no ficheiro “/home/data”, visível a partir da janela da direita (`remote site`).

Poderá seguir o progresso da transferência na parte inferior da janela.

 
![Progresso da transferência sftp](images/sftp_ds_02.png)


#### Quando o servidor está em modo Rescue 

Em modo Rescue, deverá começar por montar a sua partição. Para isso, deve seguir os passos descritos no manual [Ativar e utilizar o modo rescue](https://docs.ovh.com/pt/dedicated/rescue_mode/).

Depois de montar a partição, volte a aceder ao software (FileZilla, neste caso) na porta 22.


> [!primary]
>
> As credenciais que deve utilizar são as que foram enviadas por e-mail no momento da passagem para o modo Rescue.
>


Se realizou o ponto de montagem corretamente, os dados estarão presentes no diretório “/mnt” (“/mnt/data/” no nosso exemplo).

 ![Remote site sftp modo Rescue](images/sftp_ds_03.png)

 
### 2 - Carregar os dados para o servidor

Para importar os dados para o servidor, deverá seguir o mesmo procedimento: ligar-se à porta 22 por SFTP com o nome de utilizador root e seguir os passos abaixo.

Depois de se ligar ao servidor no qual pretende carregar os dados, poderá voltar a arrastar e largar os dados. No entanto, desta vez deverá fazê-lo a partir da janela da esquerda (`Local site`) para a janela da direita (`Remote site`), de forma a transferir as informações do seu computador pessoal para o servidor.

## Conclusão

Já sabe como carregar e descarregar dados num servidor dedicado através de SFTP.

Para obter mais informações, não hesite em partilhar a sua experiência com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>