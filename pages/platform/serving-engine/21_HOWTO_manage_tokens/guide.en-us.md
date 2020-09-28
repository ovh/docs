---
title: Manage tokens
slug: manage-tokens
excerpt: Learn how to manage OVHcloud ML Serving Tokens
section: How to
order: 1
---
*Last updated 10th January, 2020.*

## Objective

Managing a **ML Serving namespace** through the **OVHcloud manager**
make you an admin of that namespace. However you probably want to
delegate access rights and restrictions to other people inside your
organization.

This guide guides you through the process of creating tokens for your
users.

## Requirements

-   Having previously created a **ML Serving namespace**. Steps are
    described in section [Initializing
    namespace](../initialize-namespace)

## Creating a token

### Step 1 - Reach token page

Inside your **ML Serving namespace** page there is a dedicated tab for
managing tokens : `Tokens`.

![Tokens page](images/00_token_page.png){.thumbnail}

You can start the creation of a new token by clicking the `New Token`
button.

### Step 2 - Fill token information

Creating a token requires completing the following information :

-   The authorized `resource(s)` of the token
-   The `user groups` of the token

![Token creation pop-up](images/01_create_token.png){.thumbnail}

You can validate the creation of your token by clicking the `Create`
button.

### Step 3 - Copy and save your token

A green box indicates that your token has been created correctly. You
will find it displayed underneath.

![Token created page](images/02_token_created.png){.thumbnail}

You can choose to give this token to your user or use it yourself to
interact with the **ML Serving** platform.

> [!warning]
>
> This is the only moment that the token is diplayed to you. We strongly
> advise you to save it and store it otherwise you will need to renew
> it.

## Renewing a token

In the case that a token has been lost or compromised, you can
regenerate it directly on the `Token` interface by clicking the `...`
button and then `Regenerate`.

![Tokens custom paramaters](images/03_regenerate_token.png){.thumbnail}

## Going Further

-   You can check the official documentation of the open source **ML
    Serving** product about
    [Tokens](https://serving-doc-mlg.ai.ovh.net/component/tokens.html)
