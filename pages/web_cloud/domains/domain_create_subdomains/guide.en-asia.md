---
title: "How to create a subdomain?"
excerpt: "Find out how to define a subdomain, and how to create one at OVHcloud"
updated: 2023-11-28
---

## Objective <a name="goal"></a>

The internet is made up of *servers* and *devices* that interact with each other via a global network. When these *servers* and their *devices* are connected to the internet, they are assigned a *public IP address* (equivalent to a postal address). With this *IP address*, you can connect to a server or device remotely. As a result, a user can access a website by entering this *IP address* using the web browser installed on their computer.

**Domain names** were introduced to make it easier for users of the internet to access a website. Indeed, it is easier to remember a name composed of a string of chosen characters (example: ovhcloud.com), rather than a series of numbers that make up an *IP address* (example: 54.39.46.56).

A **domain name** is made up of levels. These levels are usually separated by a `.` (with the exception of some **extensions** of the *first level* such as the *.co.uk*, *.gouv.fr* or *.notaires.fr*):

- **T**op **L**evel **D**omain (**TLD**): represents the *top level* domains. We call them **extensions**. There are currently 4 types of top-level domains: 

    - The **c**ountry **c**ode **T**op **L**evel **D**omains (**ccTLDs**): composed of two characters, they correspond to the different countries of the world. For example, the extensions *.ie*, *.es*, *.it* or *.pl* are ccTLDs;
    - The **g**eneric **T**op **L**evel **D**omains (**gTLDs**): consisting of at least three characters, they represent more general themes or business areas. For example, the extensions *.com*, *.net*, *.org* or *.info* are gTLDs;
    - The **new** **g**eneric **T**op **L**evel **D**omains (**new gTLDs**):
    New extensions created in 2012 by the **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) in order to meet the sharp increase in domain name applications. They can correspond to generic themes, brands, regions or cities. For example, the extensions *.love*, *.ovh* or *.paris* are new gTLDs;
    - The **Corp**oration **T**op **L**evel **D**omains (**CorpTLDs**): this is actually a sub-category of the new GTLDs. Upon request to the **ICANN**, companies or organizations can request the creation of their own TLD. For example, the *.ovh* extension is a CorpTLD created by OVHcloud a few years ago.

- **S**econd **L**evel **D**omain (**SLD**): represents *second level* domains. We call them **labels**. When you order a domain name, you can freely set the **label** (provided that it has not already been registered by another user on the same extension and within the limit of 63 characters). For example, *ovhcloud* corresponds to the domain name label *ovhcloud.com*.

- Third Level Domain (**subdomain**): it is from this third level that we speak *subdomain*. In this guide, we will describe its definition, and explain how you can implement it with your various services.

![URL content](images/url-composition.png){.thumbnail}
  
**Find out more about sub-domains and how to create one with OVHcloud.**