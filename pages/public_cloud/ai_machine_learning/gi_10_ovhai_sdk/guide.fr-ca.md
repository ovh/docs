---
title: Produits IA - SDK ovhai (EN)
excerpt: Simplifiez la gestion de vos solutions IA en utilisant le SDK python ovhai
updated: 2024-05-30
---

## Objective

The purpose of this document is to present the python `ovhai` library.

The `ovhai` library is a Python client that allows developers to easily use the [OVHcloud AI API](https://gra.training.ai.cloud.ovh.net/#/). With this SDK, you can run, manage, automate your notebooks, training and deployments in the cloud using OVHcloud's AI products (AI Notebooks, AI Training, AI Deploy).

## Installation

To install the SDK, run the following command:

```bash
pip install ovhai
```

The SDK requires Python 3.8 or higher. For information about how to update your Python version, see the [official Python documentation](https://www.python.org/downloads/).

## Getting started - Example Usage

Once you've installed the AI SDK, you can import it to use OVHcloud's AI products using the [API](https://gra.training.ai.cloud.ovh.net/#/).

You can start by the client creation:

```python
from ovhai import AuthenticatedClient

client = AuthenticatedClient(
    base_url="https://gra.training.ai.cloud.ovh.net", 
    token="YOUR_AI_TOKEN",
)
```

The token used to create the client can be created via the [OVHcloud Control Panel](/links/manager) (UI), from the AI Dashboard.

Once your client is defined, you can call an endpoint:

```python
from ovhai.models import Me
from ovhai.api.me import me
from ovhai.ovhai_types import Response

with client as client:
    res: Me = me.sync(client=client)
    print(res)
    
    # or if you need more info (e.g. status_code)
    #response: Response[Me] = me.sync_detailed(client=client)
    #print(response)
```

Or do the same thing with an async version:

```python
import asyncio
from ovhai.models import Me
from ovhai.api.me import me
from ovhai.ovhai_types import Response

async def main(client):
    res: Me = await me.asyncio(client=client)
    print(res)
    
    # or if you need more info (e.g. status_code)
    #response: Response[Me] = await me.asyncio_detailed(client=client)
    #print(response)
    
# Run the main function asynchronously
asyncio.run(main(client=client))
```

In the `ovhai/api` [folder](https://github.com/ovh/ovhai-python-sdk/tree/main/ovhai/api), you will find all the endpoints you can call up. They are grouped by folder according to their purpose (`notebook`, `job`, `app`, `...`).

For example, to launch a notebook, you need to import the [`notebook_new` file](https://github.com/ovh/ovhai-python-sdk/blob/master/ovhai/api/notebook/notebook_new.py), located at `/ovhai/api/notebook`. You will also need to import the objects linked to this endpoint (those mentioned in the python file), since you will manipulate them (`Notebook` and `NotebookSpec` here, in addition to the classic `AuthenticatedClient` and `Response`). This will allow you to launch your first notebook using the `ovhai` python library, based on your specifications:

```python
from ovhai import AuthenticatedClient
from ovhai.api.notebook import notebook_new
from ovhai.models import NotebookSpec, Notebook
from ovhai.ovhai_types import Response

client = AuthenticatedClient(
    base_url="https://gra.training.ai.cloud.ovh.net",
    token="YOUR_AI_TOKEN",
)

# Define notebook parameters
editor_id = "jupyterlab"
framework_id = "conda"
framework_version = "conda-py39-cudaDevel11.8-v22-4"
nb_cpu = 2

# Create the notebook creation request
notebook_specs = {
    "env": {"editorId": editor_id, "frameworkId": framework_id, "frameworkVersion": framework_version},
    "resources": {"cpu": nb_cpu},
}

with client as client:
    response: Response[Notebook] = notebook_new.sync_detailed(
        client=client, body=NotebookSpec.from_dict(notebook_specs)
    )
    print(response)
```

The Response object returned will contain various information, including your notebook UUID.

## Things to know

Every [OVHcloud's AI API](https://gra.training.ai.cloud.ovh.net/#/) endpoint has its dedicated Python module that comes with four functions:

1. `sync`: Blocking request that returns parsed data (if successful) or `None`
2. `sync_detailed`: Blocking request that always returns a `Request`, optionally with `parsed` set if the request was successful
3. `asyncio`: Like `sync` but async instead of blocking
4. `asyncio_detailed`: Like `sync_detailed` but async instead of blocking

To implement the call you want, find the folder and then the file corresponding to your needs in the [api folder](https://github.com/ovh/ovhai-python-sdk/tree/master/ovhai/api). Then choose the method that suits you best from the four mentioned above. Then import the objects you need to use this method.

## Advanced customizations

There are more settings on the generated `AuthenticatedClient` class which let you control more runtime behavior, check out the [docstring on that class](https://github.com/ovh/ovhai-python-sdk/blob/master/ovhai/client.py) for more info. You can also customize the underlying `httpx.Client` or `httpx.AsyncClient` (depending on your use-case):

```python
from ovhai import AuthenticatedClient

def log_request(request):
    print(f"Request event hook: {request.method} {request.url} - Waiting for response")

def log_response(response):
    request = response.request
    print(f"Response event hook: {request.method} {request.url} - Status {response.status_code}")

client = AuthenticatedClient(
    base_url="https://gra.training.ai.cloud.ovh.net",
    token="YOUR_AI_TOKEN",
    httpx_args={"event_hooks": {"request": [log_request], "response": [log_response]}},
)

# Or get the underlying httpx client to modify directly with client.get_httpx_client() or client.get_async_httpx_client()
```

For example, the previous code snippet shows how to define a custom request and response event hook using the `httpx_args` parameter of the `AuthenticatedClient` class. The `httpx_args` parameter is used to pass additional arguments to the underlying `httpx.Client` or `httpx.AsyncClient`. In this case, the `event_hooks` argument is used to specify custom functions that will be called before and after each HTTP request and response.

You can even set the httpx client directly, but beware that this will override any existing settings (e.g., `base_url`).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- [Discord community](https://discord.gg/ovhcloud)
