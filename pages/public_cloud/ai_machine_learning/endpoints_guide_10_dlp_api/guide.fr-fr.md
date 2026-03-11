---
title: AI Endpoints - Prévention de la perte de données (EN)
excerpt: Découvrez comment utiliser l'API de prévention de la perte de données (DLP) sur AI Endpoints pour détecter, classifier et anonymiser vos données sensibles.
updated: 2026-03-11
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Introduction

[AI Endpoints](/links/public-cloud/ai-endpoints) is a serverless platform provided by OVHcloud that offers easy access to a selection of world-renowned, pre-trained AI models. The platform is designed to be simple, secure, and intuitive, making it an ideal solution for developers who want to enhance their applications with AI capabilities without extensive AI expertise or concerns about data privacy.

The **Data Loss Prevention (DLP)** API helps organizations detect, classify, and anonymize sensitive information found in textual documents. It addresses common risks related to data leaks, regulatory non-compliance, and poor data governance.

Under the hood, the DLP API leverages a combination of **Named Entity Recognition (NER) models** and **regex-based detection** to provide optimized and accurate identification of sensitive content.

The DLP API is designed to identify sensitive content such as **Personally Identifiable Information (PII)**, **Protected Health Information (PHI)**, financial data, administrative information, and credentials, enabling compliance with regulations including **[GDPR](https://fcn-data.fr/blog/rgpd-definition-perimetre-principes)**, **[HIPAA](https://www.hhs.gov/hipaa/for-individuals/guidance-materials-for-consumers/index.html)**, and **[PCI-DSS](https://www.ovhcloud.com/fr/compliance/pci-dss/)**.

PII refers to data that can be used to identify an individual, either directly, such as a name, email address, or social security number, or indirectly, such as a phone number, postal address, date of birth, or any combination of data that can be linked to a specific person.

PHI refers to health-related data associated with an identifiable individual. This includes medical records, test results, diagnoses, treatments, prescriptions, and any information related to a person’s physical or mental health. These data are highly sensitive and are subject to strict regulations, such as HIPAA, to ensure their confidentiality, integrity, and security.


## Objective

This documentation provides an overview of the **DLP API** available on [AI Endpoints](/links/public-cloud/ai-endpoints).

It explains how to configure detectors, submit documents for analysis, and interpret the results returned by the API.

Visit the [Catalog](/links/public-cloud/ai-endpoints-catalog) to discover supported models and features related to data protection and document analysis.

The examples provided during this guide can be used with one of the following environments:


> [!tabs]
> **Python**
>> 
>> A [Python](https://www.python.org/) environment 
>>
>> 
> **JavaScript**
>> 
>> A [Node.js](https://nodejs.org/en) environment with the [request](https://www.npmjs.com/package/request) library.
>> Request can be installed using [NPM](https://www.npmjs.com/):
>> 
>> ```sh
>> npm install request
>> ```
>> 
> **cURL**
>> 
>> A standard terminal, with [cURL](https://cURL.se/) installed on the system.
>> 

*All examples in this guide use the DLP API with the **NuNER_Zero** model.*

## Authentication & Rate Limiting

Most examples provided in this guide are authenticated and expect the `OVH_AI_ENDPOINTS_ACCESS_TOKEN` to be set in order to avoid rate limiting issues.
If you wish to enable authentication using your own token, specify your own API key in the environment (`export OVH_AI_ENDPOINTS_ACCESS_TOKEN='your_api_key'`).

Follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide for more information on authentication.

## Request Body

### Parameters Overview

The DLP detection endpoint expects a JSON payload with the following top-level fields:

| Parameter                | Required | Type          | Allowed Values / Format                                                                 | Default | Description                                                                                                                                                                                                 |
|--------------------------|----------|---------------|---------------------------------------------------------------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **model**                       | Yes      | `string`      | -                                    | -       | The model to use for detection (e.g., `NuNER_Zero`).                                                                                                                                                     |
| **payload**                     | Yes      | string[]      | -                                    | -       | List of documents (plain text) to analyze. Each entry is processed independently.                                                                                                                                                     |
| **detection_config**        | Yes       | `object`   | -                                                                                     | null    | Configuration object defining the detectors to apply. More details [here](#detection-configuration).                                                                                                                                                     |

### Detection configuration

The `detection_config` is a list of detector objects. Each detector includes:

| Parameter                | Required | Type          | Allowed Values / Format                                                                 | Default | Description                                                                                                                                                                                                 |
|--------------------------|----------|---------------|---------------------------------------------------------------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **name**                     | Yes      | `string`      | -                                    | -       | Unique identifier for the detector                                                                                                                 |
| **type**                     | Yes      | `string`      | `builtin`, `regex`, `word_list`                                    | -       | Type of the detector used                                                                                                                                                     |
| **confidence**                     | Conditional      | string      | `very_unlikely`,`unlikely`, `possible`,`likely`,`very_likely`                                    | `possible`       | Minimum confidence level required to return a finding (for builtin detectors)                                                                                                                                                     |
| **filter**                     | Conditional      | `object`      | -                                    | -       | Filter configuration for builtin detectors                                                                                                                                                     |
| **pattern**                     | Conditional      | `string`      | -                                    | -       | Regular expression pattern (for regex detectors)                                                                                                                                                     |
| **words**                     | Conditional      | `string[]`      | -                                    | -       | List of sensitive words (for word_list detectors)                                                                                                                                                     |
| **is_case_sensitive**                     | No      | `boolean`      | -                                    | `false`       | Flag to indicate if the matching is case sensitive (for regex and word_list detectors)                                                                                                                                                     |

### filter object (for builtin detectors)

| Parameter                | Required | Type          | Allowed Values / Format                                                                 | Default | Description                                                                                                                                                                                                 |
|--------------------------|----------|---------------|---------------------------------------------------------------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **type**                     | Yes      | `string`      | `entity`, `category`                                    | -       | Type of filter                                                                                                                 |
| **entities**                     | Conditional      | `string[]`      | -                                    | -       | List of entity types to detect (when type is `entity`)                                                                                                                                                     |
| **categories**                     | Conditional      | `string[]`      | -                                    | -       | List of categories to detect (when type is `category`)                                                                                                                                                     |

### Example Usage

Now that you know which parameters are available, let's look at how to put them into practice. Below are sample requests in **Python**, **cURL** and **JavaScript**:

> [!tabs]
> **Python**
>> 
>> ```python
>> import os
>> import requests
>>
>> url = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/detect"
>> 
>> headers = {
>>    "accept": "application/json",
>>    "Authorization": f"Bearer {os.getenv('OVH_AI_ENDPOINTS_ACCESS_TOKEN')}",
>> }
>> 
>> data = {
>>   "model": "NuNER_Zero",
>>   "detection_config": [
>>     {
>>       "type": "builtin",
>>       "name": "person_detector",
>>       "confidence": "very_unlikely",
>>       "filter": {
>>         "type": "entity",
>>         "entities": ["PERSON"]
>>       }
>>     }
>>   ],
>>   "payload": "Mr Dupont Yves and Mrs Dupont Marie are attending a meeting with Freddy. Contact Yves Dupont for more information."
>> }
>> 
>> response = requests.post(url, headers=headers, json=data)
>> 
>> if response.status_code == 200:
>>     # Handle response
>>     print(response.json())
>> else:
>>     print("Error:", response.status_code, response.text)
>> ```
>> 
> **cURL**
>> 
>> ```sh
>> curl -X POST "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/detect" \
>>   -H "Content-Type: application/json" \
>>   -H "Authorization: Bearer $OVH_AI_ENDPOINTS_ACCESS_TOKEN" \
>>   -d '{
>>     "model": "NuNER_Zero",
>>     "detection_config": [
>>       {
>>         "type": "builtin",
>>         "name": "person_detector",
>>         "confidence": "very_unlikely",
>>         "filter": {
>>           "type": "entity",
>>           "entities": ["PERSON"]
>>         }
>>       }
>>     ],
>>     "payload": "Mr Dupont Yves and Mrs Dupont Marie are attending a meeting with Freddy. Contact Yves Dupont for more information."
>>   }'
>> ```
>>
> **JavaScript**
>>
>> ```javascript
>> const url = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/detect";
>>
>> const headers = {
>>   "accept": "application/json",
>>   "Content-Type": "application/json",
>>   "Authorization": `Bearer ${process.env.OVH_AI_ENDPOINTS_ACCESS_TOKEN}`,
>> };
>>
>> const data = {
>>   model: "NuNER_Zero",
>>   detection_config: [
>>     {
>>       type: "builtin",
>>       name: "person_detector",
>>       confidence: "very_unlikely",
>>       filter: {
>>         type: "entity",
>>         entities: ["PERSON"]
>>       }
>>     }
>>   ],
>>   payload: "Mr Dupont Yves and Mrs Dupont Marie are attending a meeting with Freddy. Contact Yves Dupont for more information."
>> };
>>
>> const response = await fetch(url, {
>>   method: "POST",
>>   headers: headers,
>>   body: JSON.stringify(data)
>> });
>>
>> if (response.ok) {
>>   console.log(await response.json());
>> } else {
>>   console.log("Error:", response.status, await response.text());
>> }
>> ```
>>

**Output example**

The API returns a list of detected entities for each processed document. Each detected entity includes the following information:

- The name of the detector that identified the entity  
- The extracted entity text  
- The confidence score associated with the detection  
- The position of the entity within the document, expressed as:
  - Byte offsets (UTF-8)
  - Unicode code points

```json
{
  "findings": [
    [
      {
        "text": "Mr Dupont Yves",
        "detector": "person_detector",
        "confidence": "VERY_LIKELY",
        "location": {
          "byte_range": {
            "start": 0,
            "end": 14
          },
          "code_point_range": {
            "start": 0,
            "end": 14
          }
        }
      },
      {
        "text": "Mrs Dupont Marie",
        "detector": "person_detector",
        "confidence": "VERY_LIKELY",
        "location": {
          "byte_range": {
            "start": 19,
            "end": 35
          },
          "code_point_range": {
            "start": 19,
            "end": 35
          }
        }
      },
      {
        "text": "Freddy",
        "detector": "person_detector",
        "confidence": "VERY_LIKELY",
        "location": {
          "byte_range": {
            "start": 65,
            "end": 71
          },
          "code_point_range": {
            "start": 65,
            "end": 71
          }
        }
      }
    ],
    [
      {
        "text": "Yves Dupont",
        "detector": "person_detector",
        "confidence": "VERY_LIKELY",
        "location": {
          "byte_range": {
            "start": 8,
            "end": 19
          },
          "code_point_range": {
            "start": 8,
            "end": 19
          }
        }
      }
    ]
  ]
}
```


### Advanced Requests – Custom Detectors

Depending on your **business needs** or your **data protection objectives**, the standard detectors provided by the DLP API may not be sufficient.  
The DLP API therefore allows you to define **custom detectors** to precisely identify sensitive data that is specific to your context.

Two types of custom detectors are available:
- **Regular expression (regex) detectors**: suitable when the data format is known in advance.
- **Word list detectors**: useful for detecting explicit sensitive values (names, internal identifiers, projects, etc.).

It is also possible to **combine multiple detectors** (both standard and custom) within a single request.

---

## Regular Expression Detector (Regex Detector)

In some cases, sensitive data follows a **well-defined pattern** (e.g., year, contract number, formatted identifier).  
The `regex` detector allows you to identify such information using regular expressions.

### Example

In the following example, we detect a **graduation year** contained in a text.

> [!tabs]
> **Python**
>>
>> ```python
>> import os
>> import requests
>>
>> url = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/detect"
>>
>> headers = {
>>   "accept": "application/json",
>>   "Content-Type": "application/json",
>>   "Authorization": f"Bearer {os.getenv('OVH_AI_ENDPOINTS_ACCESS_TOKEN')}",
>> }
>>
>> data = {
>>   "model": "NuNER_Zero",
>>   "detection_config": [
>>     {
>>       "type": "regex",
>>       "name": "year_of_diplomation",
>>       "pattern": "graduated in (\\d{4})",
>>       "is_case_sensitive": False
>>     }
>>   ],
>>   "payload": "I graduated in 2026 from university."
>> }
>>
>> response = requests.post(url, headers=headers, json=data)
>>
>> if response.status_code == 200:
>>     print(response.json())
>> else:
>>     print("Error:", response.status_code, response.text)
>> ```
>
> **cURL**
>>
>> ```sh
>> curl -X POST "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/detect" \
>>   -H "Content-Type: application/json" \
>>   -H "Authorization: Bearer $OVH_AI_ENDPOINTS_ACCESS_TOKEN" \
>>   -d '{
>>     "model": "NuNER_Zero",
>>     "detection_config": [
>>       {
>>         "type": "regex",
>>         "name": "year_of_diplomation",
>>         "pattern": "graduated in (\\d{4})",
>>         "is_case_sensitive": false
>>       }
>>     ],
>>     "payload": "I graduated in 2026 from university."
>>   }'
>> ```
>
> **JavaScript**
>>
>> ```javascript
>> const url = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/detect";
>>
>> const headers = {
>>   accept: "application/json",
>>   "Content-Type": "application/json",
>>   Authorization: `Bearer ${process.env.OVH_AI_ENDPOINTS_ACCESS_TOKEN}`,
>> };
>>
>> const data = {
>>   model: "NuNER_Zero",
>>   detection_config: [
>>     {
>>       type: "regex",
>>       name: "year_of_diplomation",
>>       pattern: "graduated in (\\d{4})",
>>       is_case_sensitive: false
>>     }
>>   ],
>>   payload: "I graduated in 2026 from university."
>> };
>>
>> const response = await fetch(url, {
>>   method: "POST",
>>   headers,
>>   body: JSON.stringify(data)
>> });
>>
>> if (response.ok) {
>>   console.log(await response.json());
>> } else {
>>   console.log("Error:", response.status, await response.text());
>> }
>> ```

---

## Word List Detector

When sensitive data is **known in advance** (e.g., names, internal projects, confidential references), a **word list detector** is more appropriate.

This type of detector compares the analyzed content against an explicit list of sensitive terms.

### Example

In this example, we detect members of the **Dupont** family in a text.

> [!tabs]
> **Python**
>>
>> ```python
>> import os
>> import requests
>>
>> url = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/detect"
>>
>> headers = {
>>   "accept": "application/json",
>>   "Content-Type": "application/json",
>>   "Authorization": f"Bearer {os.getenv('OVH_AI_ENDPOINTS_ACCESS_TOKEN')}",
>> }
>>
>> data = {
>>   "model": "NuNER_Zero",
>>   "detection_config": [
>>     {
>>       "type": "word_list",
>>       "name": "Dupont_family",
>>       "words": [
>>         "Dupont Yves",
>>         "Dupont Marie",
>>         "Dupont Jean"
>>       ],
>>       "is_case_sensitive": False
>>     }
>>   ],
>>   "payload": "Mr Dupont Yves and Mrs Dupont Marie are attending a meeting with Freddy."
>> }
>>
>> response = requests.post(url, headers=headers, json=data)
>>
>> if response.status_code == 200:
>>     print(response.json())
>> else:
>>     print("Error:", response.status_code, response.text)
>> ```
>
> **cURL**
>>
>> ```sh
>> curl -X POST "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/detect" \
>>   -H "Content-Type: application/json" \
>>   -H "Authorization: Bearer $OVH_AI_ENDPOINTS_ACCESS_TOKEN" \
>>   -d '{
>>     "model": "NuNER_Zero",
>>     "detection_config": [
>>       {
>>         "type": "word_list",
>>         "name": "Dupont_family",
>>         "words": [
>>           "Dupont Yves",
>>           "Dupont Marie",
>>           "Dupont Jean"
>>         ],
>>         "is_case_sensitive": false
>>       }
>>     ],
>>     "payload": "Mr Dupont Yves and Mrs Dupont Marie are attending a meeting with Freddy."
>>   }'
>> ```
>
> **JavaScript**
>>
>> ```javascript
>> const url = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/detect";
>>
>> const headers = {
>>   accept: "application/json",
>>   "Content-Type": "application/json",
>>   Authorization: `Bearer ${process.env.OVH_AI_ENDPOINTS_ACCESS_TOKEN}`,
>> };
>>
>> const data = {
>>   model: "NuNER_Zero",
>>   detection_config: [
>>     {
>>       type: "word_list",
>>       name: "Dupont_family",
>>       words: ["Dupont Yves", "Dupont Marie", "Dupont Jean"],
>>       is_case_sensitive: false,
>>     },
>>   ],
>>   payload: "Mr Dupont Yves and Mrs Dupont Marie are attending a meeting with Freddy.",
>> };
>>
>> const response = await fetch(url, {
>>   method: "POST",
>>   headers,
>>   body: JSON.stringify(data),
>> });
>>
>> if (response.ok) {
>>   console.log(await response.json());
>> } else {
>>   console.log("Error:", response.status, await response.text());
>> }
>> ```

---

## Combined Detectors (Custom + Built-in)

For advanced use cases, you can **combine multiple detectors** within a single request:
- standard detectors (`builtin`)
- custom detectors (`regex`, `word_list`)

This approach provides **comprehensive coverage** of sensitive data in a single API call.

### Example

The example below detects:
- people (standard detector),
- members of the Dupont family (word list),
- a graduation year (regex).

> [!tabs]
> **Python**
>>
>> ```python
>> import os
>> import requests
>>
>> url = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/detect"
>>
>> headers = {
>>   "accept": "application/json",
>>   "Content-Type": "application/json",
>>   "Authorization": f"Bearer {os.getenv('OVH_AI_ENDPOINTS_ACCESS_TOKEN')}",
>> }
>>
>> data = {
>>   "model": "NuNER_Zero",
>>   "detection_config": [
>>     {
>>       "type": "word_list",
>>       "name": "Dupont_family",
>>       "words": [
>>         "Dupont Yves",
>>         "Dupont Marie",
>>         "Dupont Jean"
>>       ],
>>       "is_case_sensitive": False
>>     },
>>     {
>>       "type": "builtin",
>>       "name": "person_detector",
>>       "confidence": "very_unlikely",
>>       "filter": {
>>         "type": "entity",
>>         "entities": ["PERSON"]
>>       }
>>     },
>>     {
>>       "type": "regex",
>>       "name": "year_of_diplomation",
>>       "pattern": "graduated in (\\d{4})",
>>       "is_case_sensitive": False
>>     }
>>   ],
>>   "payload": "Mr Dupont Yves and Mrs Dupont Marie are attending a meeting with Freddy. Contact Yves Dupont for more information. I graduated in 2026 from university."
>> }
>>
>> response = requests.post(url, headers=headers, json=data)
>>
>> if response.status_code == 200:
>>     print(response.json())
>> else:
>>     print("Error:", response.status_code, response.text)
>> ```
>
> **cURL**
>>
>> ```sh
>> curl -X POST "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/detect" \
>>   -H "Content-Type: application/json" \
>>   -H "Authorization: Bearer $OVH_AI_ENDPOINTS_ACCESS_TOKEN" \
>>   -d '{
>>     "model": "NuNER_Zero",
>>     "detection_config": [
>>       {
>>         "type": "word_list",
>>         "name": "Dupont_family",
>>         "words": [
>>           "Dupont Yves",
>>           "Dupont Marie",
>>           "Dupont Jean"
>>         ],
>>         "is_case_sensitive": false
>>       },
>>       {
>>         "type": "builtin",
>>         "name": "person_detector",
>>         "confidence": "very_unlikely",
>>         "filter": {
>>           "type": "entity",
>>           "entities": ["PERSON"]
>>         }
>>       },
>>       {
>>         "type": "regex",
>>         "name": "year_of_diplomation",
>>         "pattern": "graduated in (\\d{4})",
>>         "is_case_sensitive": false
>>       }
>>     ],
>>     "payload": "Mr Dupont Yves and Mrs Dupont Marie are attending a meeting with Freddy. Contact Yves Dupont for more information. I graduated in 2026 from university."
>>   }'
>> ```
>
> **JavaScript**
>>
>> ```javascript
>> const url = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/detect";
>>
>> const headers = {
>>   accept: "application/json",
>>   "Content-Type": "application/json",
>>   Authorization: `Bearer ${process.env.OVH_AI_ENDPOINTS_ACCESS_TOKEN}`,
>> };
>>
>> const data = {
>>   model: "NuNER_Zero",
>>   detection_config: [
>>     {
>>       type: "word_list",
>>       name: "Dupont_family",
>>       words: ["Dupont Yves", "Dupont Marie", "Dupont Jean"],
>>       is_case_sensitive: false,
>>     },
>>     {
>>       type: "builtin",
>>       name: "person_detector",
>>       confidence: "very_unlikely",
>>       filter: {
>>         type: "entity",
>>         entities: ["PERSON"],
>>       },
>>     },
>>     {
>>       type: "regex",
>>       name: "year_of_diplomation",
>>       pattern: "graduated in (\\d{4})",
>>       is_case_sensitive: false,
>>     },
>>   ],
>>   payload:
>>     "Mr Dupont Yves and Mrs Dupont Marie are attending a meeting with Freddy. Contact Yves Dupont for more information. I graduated in 2026 from university.",
>> };
>>
>> const response = await fetch(url, {
>>   method: "POST",
>>   headers,
>>   body: JSON.stringify(data),
>> });
>>
>> if (response.ok) {
>>   console.log(await response.json());
>> } else {
>>   console.log("Error:", response.status, await response.text());
>> }
>> ```

## De-identification

De-identification (or anonymization) allows for the automatic transformation of sensitive data detected in a text to protect privacy while preserving the document's structure.
This feature is configurable for each detector via the `deidentification_config` field.
When this field is present, the API response includes an additional `redacted_text` field containing the modified text.

### Supported Operations

Our API supports several types of de-identification operations:

| Operation   | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| **mask**    | Masks all or part of the detected data with a character (e.g., `****`)      |
| **replace** | Replaces the detected data with a fixed value (e.g., `[EMAIL]`)             |
| **redaction** | Completely removes the detected data                                       |
| **hash**    | Replaces the detected data with a cryptographic hash                        |
| **detector**| Replaces the detected data with the name of the detector used               |

### Request Payload Examples

**Masking (mask)**
```json
{
  "model": "NuNER_Zero",
  "detection_config": [
    {
      "type": "builtin",
      "name": "credit_card_detector",
      "filter": { "type": "entity", "entities": ["CREDIT_CARD_NUMBER"] },
      "deidentification_config": {
        "type": "mask",
        "num_chars_to_mask": 12,
        "masking_char": "*",
        "from_end": true
      }
    }
  ],
  "payload": "Card: 4111 1111 1111 1234"
}
```

**Replacement (replace)**
```json
{
  "model": "NuNER_Zero",
  "detection_config": [
    {
      "type": "builtin",
      "name": "email_detector",
      "filter": { "type": "entity", "entities": ["EMAIL"] },
      "deidentification_config": {
        "type": "replace",
        "new_value": "[EMAIL]"
      }
    }
  ],
  "payload": "Contact: john.doe@example.com"
}
```

**Redaction (redaction)**
```json
{
  "model": "NuNER_Zero",
  "detection_config": [
    {
      "type": "builtin",
      "name": "ssn_detector",
      "filter": { "type": "entity", "entities": ["SOCIAL_SECURITY_NUMBER"] },
      "deidentification_config": { "type": "redaction" }
    }
  ],
  "payload": "SSN: 123-45-6789"
}
```

**Hashing (hash)**
```json
{
  "model": "NuNER_Zero",
  "detection_config": [
    {
      "type": "builtin",
      "name": "phone_detector",
      "filter": { "type": "entity", "entities": ["PHONE_NUMBER"] },
      "deidentification_config": {
        "type": "hash",
        "hash_type": "sha256"
      }
    }
  ],
  "payload": "Téléphone: 0612345678"
}
```

**Replacement by detector name (detector)**
```json
{
  "model": "NuNER_Zero",
  "detection_config": [
    {
      "type": "builtin",
      "name": "person_detector",
      "filter": { "type": "entity", "entities": ["PERSON"] },
      "deidentification_config": { "type": "detector" }
    }
  ],
  "payload": "Yves Dupont participe à la réunion."
}
```

## Endpoint Limitations

### Language Compatibility and Performance

The DLP API may support multiple languages depending on the underlying model used. Please refer to the model specifications in the [Catalog](/links/public-cloud/ai-endpoints-catalog) to check which languages are available for your chosen model. Detection accuracy depends on language quality, structure, and content.

### Payload size

Very large documents or large batches may increase processing time. For optimal performance, consider splitting large inputs into smaller logical units.

## Conclusion

In this guide, we have explained how to use the Data Loss Prevention API available on [AI Endpoints](/links/public-cloud/ai-endpoints). We have provided a comprehensive overview of the features that can help you integrate the DLP API into your own application.

## Go Further

Browse the full [AI Endpoints documentation](/products/public-cloud-ai-and-machine-learning-ai-endpoints) to further understand the main concepts and get started.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Échangez avec notre [communauté d'utilisateurs](/links/community).

## Feedback

Please send us your questions, feedback, and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud).