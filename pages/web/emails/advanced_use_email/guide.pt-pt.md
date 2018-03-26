---
title: Utilização avançada dos e-mails OVH
excerpt: Utilização avançada dos e-mails OVH
slug: utilizacao_avancada_dos_e-mails_ovh
legacy_guide_number: g2117
---


## Como alterar a password dos meus endereços de e-mail?

- Num primeiro tempo é necessário selecionar a sua plataforma e aceder a "Email" -- "Alterar a password" ao clicar na roda dentada à direita do endereço de e-mail que deseja modificar.



![](images/img_3916.jpg){.thumbnail}

- Introduza de novo a password e confirme-a.

A antiga password não é necessária.


Atenção, a password deve respeitar as seguintes condições:


- Mínimo 9 caracteres.
- Máximo 30 caracteres.
- Nenhum caractere acentuado.


Clique em "Validar" para terminar a modificação da sua password.

A modificação da sua password pode levar alguns minutos a ficar efetiva.


## Como configurar os meus endereços de e-mail?
Vários guias estão à sua disposição para o ajudar a configurar o seu endereço de e-mail nos diferentes softwares de e-mail.
Pode consultá-los no seguinte guia:


- [Guias de configuração de e-mail](https://www.ovh.pt/g1474.generalidades-mails-partilhados-ovh).




## Como configurar as mailing lists?
Uma mailing-list é um endereço de e-mail que reenvia as mensagens recebidas para uma lista de endereços de e-mail que pode estar na OVH ou noutro prestador.

O funcionamento de uma mailing-list é um pouco mais complexa que os outros tipos de endereços de -mail.

Para saber como administrar uma mailing-list:


- []({legacy}1596).




## Como consultar os e-mails de uma conta?
Tem duas possibilidades:


- Passar pelas nossas interfaces webmail. Para tal, aceda ao [Webmail](https://webmail.ovh.pt/), escolha a interface RoundCube, introduza o seu endereço de e-mail completo e a sua password (consulte o nosso [guia relativo ao RoundCube](https://www.ovh.pt/g1302.webmail-roundcube) para o ajudar).

- Utilizar um software de e-mails. Para saber como configurar o seu software de e-mails aceda ao seguinte guia:
- []({legacy}1474).




## Como criar um reencaminhamento de e-mail?
Deseja reencaminhar os seus endereços de e-mail para outros?

Eis um guia que o ajudará nesse tipo de reencaminhamentos:


- []({legacy}2001).




## Como implementar ou eliminar uma resposta automática?
Deseja criar uma resposta automática para os seus endereços de e-mail?

Eis um guia para o ajudar:


- [Criação de uma resposta automática](http://guides.ovh.com/CreerRepondeur).




## Como configurar os filtros de e-mail?
Deseja criar filtros para os seus endereços de e-mail?

Eis um guia para o ajudar:


- []({legacy}1973).




## Como gerir os meus registos SPF?
Deseja gerir os seus registos SPF para os seus endereços de e-mail?

Eis um guia para o ajudar:


- []({legacy}2028).


## O que devo verificar em caso de problemas com os meus e-mails?
Em caso de problemas nos envios ou na receção dos seus e-mails, vejamos alguns pontos a verificar:


- A minha oferta de e-mail está ativa? Para que os seus e-mails estejam funcionais, deverá dispor de uma oferta de e-mail ativa. Se possui e-mails associados a uma oferta de alojamento, queira certificar-se de que ela não expirou. É possível verificar essa informação diretamente no seu Espaço Cliente. Deve ainda verificar que o seu nome de domínio está igualmente ativo.

- Os e-mails funcionam a partir do webmail? De forma a verificar que o problema não está associado a um erro de configuração, efetue um teste de envio e receção a partir do webmail OVH. Se tudo funcionar corretamente, queira verificar a configuração do seu software através dos guias que temos à sua disposição.

- Não se consegue ligar ao webmail? Confirme que a password é a correta, e se necessário altere-a no seu Espaço Cliente. Para tal, consulte as questões anteriores neste guia.

- Existe um incidente em curso para o meu serviço? É possível verificar os diferentes trabalhos que estão atualmente em curso [nesta página](http://estado.ovh.pt/).

- O apontamento do meu domínio está correto?Verifique se o seu nome de domínio utiliza corretamente os servidores de e-mail (registos do tipo MX) da oferta de e-mail da OVH. Consulte [este guia](https://www.ovh.pt/g2003.mail_partilhado_generalidades_sobre_os_servidores_mx).




## Gestão de spam OVH

## A saber
É possível que receba diretamente na sua caixa de receção de spam.
Neste caso, verifique os seguintes pontos:


- Os servidores de e-mail do meu domínio estão [configurados com anti-spam](#enregistrement_mx)?

- Os e-mails possuem uma tag de spam?

Se os seus e-mails tem no título [spam] significa que foram classificados corretamente pelo nosso filtro anti-spam, e permitem-lhe então criar uma regra para os reencaminhar para a pasta de spam, por exemplo.

Mesmo com a tag de spam ou vírus, os e-mails não são automaticamente eliminados dos nossos servidores para que possamos evitar falsos positivos (e-mails com a tag de spam que podem ser, conforme os seus critérios, legítimos).


## Valores
Se utiliza a oferta de e-mails partilhado compreendido no seu alojamento, ou através da oferta MxPlan, deverá utilizar os seguintes MX OVH:


- mx1.mail.ovh.net
- mx2.mail.ovh.net
- mx3.mail.ovh.net



## Informação:
Para já, os antigos servidores MX permanecerão funcionais para os serviços de e-mails criados antes de 23/05/2016, mas convidamo-lo a utilizar estes servidores MX para atualizar a informação MX.
Deve modificar estes registos na sua zona DNS.


-  Se os seus servidores DNS são geridos por um prestador externo, deverá contactar esse prestador para efetuar a modificação destes campos. .


Se os servidores DNS utilizados são os servidores DNS partilhados OVH, nesse caso será possível modificar os campos no espaço cliente.
Para tal, aceda ao seu Espaço Cliente.


## Generalidades
Estes diferentes limites podem ser ultrapassados para necessidades profissionais graças à [oferta Exchange](https://www.ovh.pt/emails/hosted-exchange/).

Limites de envio 

200 e-mails / hora / conta e 300 e-mails / hora / IP.

Quota das caixas de e-mails

Cada endereço de email tem uma quota limite de 5GB.

Tamanho máximo dos anexos

Os anexos dos seus e-mails tem um anexo máximo de 20 MB com o webmail, 100 MB através de um software de e-mails.

Máximo de pessoas em cópia de um e-mail

Cada e-mail enviado poderá ter em cópia no máximo 100 endereços de e-mail.Um email enviado a 100 destinatários, conta como se fossem enviados 100 emails.

A saber


- Ao subscrever o serviço MX Plan, não terá uma adição de contas, mas uma substituição do número de contas que pode criar..

Exemplo: Se tem um alojamento perso2014 (que permite ter 10 contas de email) e subscrever um serviço "MxPlan 100", passará a poder criar 100 contas de email e não 110..

-  Todos os serviços MxPlan são entregues com um endereço "postmaster@". Este endereço não pode ser alterado e não é contabilizado no número total de contas de e-mail.

Exemplo : Se subscrever um serviço MxPlan 5 poderá, além da conta postmaster@ , criar 5 contas de e-mail personalizáveis.



## Oferta MxPlan?
Temos à sua disposição um guia relativo à oferta MxPlan: []({legacy}1864)


## Como aumentar a quota do meu endereço de e-mail?
Para todo o alojamento partilhado, ou para as ofertas MxPlan, poderá aumentar o tamanho das suas contas de e-mail de 25MB a 5GB.

É possível no seu [Espaço Cliente](https://www.ovh.com/manager/web/) aumentar a quota do seu endereço de e-mail.


- Para tal, e num primeiro tempo, aceda ao domínio por baixo da secção "Email" -- "Modificar a conta" ao clicar na roda dentada do lado direito da conta de e-mail que deseja modificar. 



![](images/img_3915.jpg){.thumbnail}

- Selecione a quota desejada para a conta de e-mail em questão.

- Clique em "Validar" para confirmar o seu pedido.



![](images/img_3914.jpg){.thumbnail}
Aparecerá uma notificação que indicará que a modificação está atualmente em curso.

A operação pode levar entre 5 a 10 minutos.
O que é a quota?
A sua conta de e-mail dispõe de um tamanho específico. Quando falamos de quota trata-se do espaço alocado pela sua conta de e-mail no nosso servidor de e-mail.

Onde posso consultar a quota?
Diretamente no servidor de e-mail, por exemplo através do [webmail](https://ssl0.ovh.net).
Esta interface dá-lhe acesso direto ao servidor, onde poderá consultar a quota. Quando consulta o seu e-mail, o seu software de e-mails retira os e-mails do servidor e armazena-os no seu computador local. As pessoas que utilizam exclusivamente softwares de e-mail como o Outlook ficam muito raramente em "overquota", a menos que deixem a opção "deixar uma cópia do e-mail no servidor" ativa.

O que é um overquota?
Quando ultrapassa o tamanho alocado à sua conta, o servidor de e-mail deixa de ter capacidade para receber os seus e-mails. Ele recusará então novos e-mails, enviando ao remetente a informação: "user is over quota".

Como baixar a minha quota?
Eliminando: Basta que elimine ficheiros que armazena no seu servidor de e-mail através do [webmail](https://ssl0.ovh.net). Se o faz na interface do webmail, não se esqueça de limpar igualmente a lixeira. As mensagens eliminadas são retiras na lixeira para evitar que elimine um e-mail sem querer.

