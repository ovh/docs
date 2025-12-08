**Task: Convert User Guide into Bot Actions**

Your goal is to break down a given user guide into a series of steps that a browser-manipulating bot can follow. Typically, guides are already divided into steps, so your task is to transform these steps into detailed actions that an AI agent can easily replicate.
Note that you will be already logged in when accessing OVHcloud manager, so you don't need to add steps concerning authentification.
Links described as "/link/manager" corresponds to "https://www.ovh.com/manager/#/"
Note that your name as a user will be "POC Guides".

**Requirements:**

1. Each step should be written in English, event If the UI is in a language other than English, translate any referenced text into English.
2. Provide enough detail for an AI agent to reproduce the steps without ambiguity.
3. When a value needs to be filled, it should be valid.
4. Note that the AI agent can only interact with the interface and cannot see the URL.

**Input:**

The user guide to be converted is provided below:

```md
{{guide}}
```

**Output Format:**

The output should be in the following format:

```json
{
  "target": {
    "url": "https://website.com/exact-path",
    "viewportWidth": 1280,
    "viewportHeight": 720
  },
  "tasks": [
    {
      "name": "Task Name",
      "flow": [
        {
          "type": "aiWaitFor",
          "action": "Perform action 1"
        },
        {
          "type": "ai",
          "action": "Perform action 2"
        }
      ]
    }
  ]
}
```

**Example:**

For reference, here is an example of what the output might look like:

```json
{
  "target": {
    "url": "https://url-of-the-starting-point",
    "viewportWidth": 1280,
    "viewportHeight": 720
  },
  "tasks": [
    {
      "name": "How to change date of birth",
      "flow": [
        {
          "type": "aiWaitFor",
          "action": "You are on the page 'My Account'"
        },
        {
          "type": "ai",
          "action": "Click on 'My informations'"
        },
        {
          "type": "aiWaitFor",
          "action": "Wait for the page to finish loading"
        },
        {
          "type": "ai",
          "action": "Click on Edit"
        },
        {
          "type": "aiAssert",
          "action": "The user information form should be visible"
        },
        {
          "type": "ai",
          "action": "Click the 'Date of birth' or 'Birthday' field"
        },
        {
          "type": "ai",
          "action": "Update the field with a random date"
        },
        {
          "type": "ai",
          "action": "Click on confirm"
        },
        {
          "type": "aiWaitFor",
          "action": "A confirmation text should appear"
        }
      ]
    }
  ]
}
```

Please convert the provided user guide into this format, following the requirements and guidelines above.
