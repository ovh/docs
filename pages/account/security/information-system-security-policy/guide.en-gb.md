---
title: Information System Security Policy (ISSP)
slug: issp
section: Security policies
---

**Last updated 21st July 2022**

## Objective

The Information System Security Policy (ISSP) provides the reference framework in cybersecurity for OVHcloud. ISSP defines the concepts necessary to understand OVHcloud's approach to security and links the context of operations with the means and resources used to ensure security. It defines:

- The context of OVHcloud operations to understand the main security risks of OVHcloud
- Security commitments to OVHcloud stakeholders and the principles for implementing and maintaining the security of information systems
- How these principles are operated within OVHcloud

OVHcloud operates within a dynamic ecosystem in a context that is constantly evolving. Security practices must therefore evolve rapidly to remain relevant. ISSP is the sign of a management commitment over time. It aims to define the criteria for risk assessment, the principles guiding the establishment of security measures to be implemented and the management of security within OVHcloud.

ISSP is under the responsibility of the CISO which consults with the Executive Committee (ComEx) on its content and suitability for the strategic objectives of OVHcloud. It is reviewed annually. It comes in a set of security policies and detailed implementation guides. These documents have their own life cycles, adapted to their contents.

ISSP applies to all companies in the group, employees, suppliers, providers, subcontractors and users of the information system, regardless of their activities.

## Implementation context of the ISSP

### What is information security ?

Security is the protection of the availability, integrity and confidentiality of a system. Within OVHcloud, managing security consists in defining, implementing, operating and improving all human, organizational, technical and legal means to protect OVHcloud's information systems and services against these criteria. Protecting data confidentiality in all circumstances is at the heart of OVHcloud's security approach. Ensuring the availability and integrity of services and data is OVHcloud's first mission and is beyond the scope of the ISSP. On those last two criterias, the security approach focuses on risks of malicious origin.

In accordance with OVHcloud's security commitments, the criteria of traceability and respect for privacy are also formally taken into account in our security approach.

The security criteria covered by the ISSP are therefore availability (A), integrity (I), confidentiality (C), traceability (T) and privacy (P). These criteria are used to highlight the security needs of protected assets, and the impacts associated with a security risk or incident.

### What assets do we protect ?

#### Infrastructure, platforms, applications

OVHcloud operates a global infrastructure. This infrastructure consists of a set of data centers, equipment and servers hosted on it as well as a global network of interconnection. OVHcloud also operates an information system that supports this infrastructure. This information system supports operations, automation and ensures collaborative work within OVHcloud. It also includes the tools available to customers for the administration of their services and communication with OVHcloud teams.

OVHcloud offers infrastructure services (IaaS), platform services (PaaS) and application services (SaaS) as well as telecommunication services. Each of these services is based on OVHcloud's infrastructure, information system and possibly other services provided by OVHcloud or partners.

#### Information

The data considered most sensitive by OVHcloud is the data belonging to the clients. For this data hosted as part of the services, the client is responsible for processing and OVHcloud is a subcontractor. OVHcloud employees generally do not know the type of data hosted and do not access it. The client, as a processing manager, must ensure that the level of service offered is appropriate to the sensitivity of the data. OVHcloud, as a subcontractor, acts on instructions from the customer in the contractual framework of the services.

OVHcloud also protects internal data in support of operations. In this context, OVHcloud is the processing manager. This data shall cover the technical and administrative data necessary for the provision of the service, the commercial relationship and compliance with legal obligations. OVHcloud's internal data used for business management and development are also covered. This data may be directly or indirectly related to OVHcloud's customers, employees, service providers and partners. They may be transmitted to third parties in accordance with the regulations in force. As a processing manager, OVHcloud defines the security measures adapted to each type of data for each stage of their life cycle, in line with their sensitivity.

### What threats are we facing ?

As a company, OVHcloud is affected by the attacks that any company is subjected to: data theft, resource theft, blackmail, fraud, extortion, malware, compromising exposed systems, etc. These attacks, whether targeted or not, can jeopardize the data managed by OVHcloud and impact operations.

As a major player in the cloud, OVHcloud operates Internet-wide infrastructure. This positioning exposes OVHcloud to specific threats whose motivations may be to reach the reputation of a high visibility player in a dynamic competitive environment, to challenge innovative technologies or their specific implementation by OVHcloud for technical interest or to reach wide and highly connected infrastructure in an attempt to use computing power and connectivity resources for malicious purposes.

Finally, as providers of infrastructure, platforms, and solutions, we must also anticipate threats that target our customers or third parties:

- Attacks on our customers' data and processing through our infrastructure,
- Attacks that exploit a weakness in the logical or physical isolation between the environments of different clients related to resource pooling,
- The use of resources made available by OVHcloud as a third-party attack vector.

The motivations and paths of attack to target our clients' infrastructure are as varied as the types of systems they operate. They cannot be listed completely. So we need to be prepared for any possible attack targeting one of our customers or OVHcloud.

The threats targeting OVHcloud are primarily of external origin. However, our teams are numerous, deployed internationally and growing rapidly. In addition to the possibility of human errors in operations, we must include the risk of insider threat in our risk management approach.

### Who is concerned by security ?

#### Customers and Partners

OVHcloud is responsible for operating infrastructure, platforms and software within our data centers, on behalf of our customers and partners . The proper functioning of these services is key for their information systems and digital activities. OVHcloud's customers operate their own services to third parties in a rich and complex ecosystem. The players involved in this supply chain and the end users expect OVHcloud to have the expertise and operational control of the services provided.

#### Industry specific authorities and regulators

The authorities define the framework for the protection of citizens and businesses under their jurisdiction. This protection extends to data and processing of citizens and businesses. OVHcloud takes these requirements into account in all geographies where the service is operated to ensure a service adapted to local ecosystems. Industry specific regulators also set requirements for the hosting of certain types of data and treatments, associated with particular risks. OVHcloud can offer services specifically adapted to these requirements. In this case, OVHcloud is committed to covering industry-specific requirements and risks.

#### Employees, management of OVHcloud and shareholders

OVHcloud employees design, maintain and operate systems and processes in support of OVHcloud services. Any security incident as a direct negative impact on operations, but also challenge the value of the services, the expertise and professionalism of teams. Operating secure information systems enhances OVHcloud's innovation, passion, team engagement and service quality.

OVHcloud, as an alternative cloud provider in a very competitive environment, must ensure strong growth to support innovation and development internationally strengthening its credibility. Our customers' confidence, the main driver of this growth, is directly linked to OVHcloud's ability to protect their data workloads. Cyber-security is therefore one of the pillars in support of the development strategy carried out by the management and shareholders of OVHcloud.

#### Subcontractors and outsourcing

OVHcloud is managing certain processes and projects with the assistance of subcontractors accessing OVHcloud information systems and OVHcloud premises. Moreover, OVHcloud Information System is also composed with outsourced applications and systems interconnected to its core. Those actors and systems are in support of OVHcloud operations and are importantly linked to the security.

## OVHcloud Security Commitments

### Deploy a Large-Scale Industrial Approach to Security

OVHcloud teams are committed to innovating continuously to meet the ever-changing needs of customers in terms of technology, functionality and performance. Security is integrated into the life cycle of product development. The security team is constantly involved in challenging and assisting all decisions that may have an impact on security.

OVHcloud's security is based on the responsibility of each employee for data security. Our developers and administrators are chosen for their technological expertise. The security team ensures the consistency of security tools, processes and knowledge with OVHcloud's security policy.

We implement and operate appropriate security measures to prevent and reduce security risks. We want this approach to be straightforward and transparent in order to strengthen the confidence of our clients and partners. We design and operate a wide range of systems. Our approach is based on standardized security measures, secure architectures from the outset and formal, proven, highly automated processes. These security measures are based on OVHcloud's experience, our contractual commitments, legal and regulatory obligations and recognized good business practices. They allow us to ensure security at the OVHcloud scale.

Formal management of security risks allows to take into account the specificity of each project. In this way, we complement our standard security measures with measures specific to these projects. The management of events, incidents, vulnerabilities, threats and gathering of security information remains standardized within a unified approach.

Finally, OVHcloud operates a permanent threat analysis framework linked to continuous monitoring system. This way, we systematically adapt operational practices to immediate risks and respond effectively to security incidents. The organization of the security teams allows the rapid mobilization of experts to investigate and resolve security incidents. In this way, we minimize potential impacts and implement corrective actions as quickly as possible in a sustainable way.

### Position OVHcloud as a trusted player within the ecosystem

As a global cloud provider, OVHcloud has a great responsibility in fighting security threats. We deploy protection tools on a large scale. We automate the protection of our customers’ systems from these threats. We detect vulnerable systems. We share our innovations and knowledge with the security community. We manage millions of public IP addresses on behalf of our customers. These addresses are essential assets of information systems in the cloud and their reputations are one of our concerns.

OVHcloud’s security team and technical experts maintain strong operational relationships with security expert communities, authorities, software publishers, and hardware manufacturers. This way, we anticipate new threats and vulnerabilities. This way, we reduce the associated risks. We share our innovations and knowledge with the security community and promote responsible disclosure.

We are constantly challenging our security. We implement a structured program of reviews, tests and controls, both internal and external. Our security management organization is based on internationally recognized standards, in particular ISO/IEC 27001 which highlights these principles. We regularly evaluate our security features using trusted third parties and recognized audit benchmarks.

### Operate a Trusted Cloud for All

OVHcloud offers its solutions to any type of client in all fields of activity: startup, SME, large business, administration, multinational. Every OVHcloud client has a particular security approach, depending of its business or sovereignty context that we need to take into account. Security is one of the pillars in support of our customers trust.

The security of a system in the cloud is a shared responsibility between the cloud provider and the client. OVHcloud provides security measures on the services provided and the underlying infrastructures. Our customers are ultimately responsible for the security of their information systems in the cloud. We offer them a high level of transparency on the security measures implemented by OVHcloud to support them in their global security risk mitigation plan. We clearly define their areas of responsibility in order to avoid any vulnerability arising from insufficient awareness.

OVHcloud provides and develops a set of tools, features and configurations to improve the security of client systems in the cloud. Most security features are included for all customers. Additional security features are also available to help our customers reduce the specific risks they face.

OVHcloud is also committed to privacy protection, as a data controller for our customers’ data and as a data processor in the event that our customers are themselves data controllers. Information systems security policy includes this commitment by defining, implementing and improving security features that ensure the protection of hosted personal data.

OVHcloud products use open source technologies and/or proven technology standards. The adoption and reversibility of the product are facilitated. This strategic choice ensures that our customers can deploy standard systems in the cloud. They can add their own security solutions, take advantage of their teams' common skills and tools. A wide range of security solutions and services is available with OVHcloud partners and other vendors.

### How does OVHcloud commits?

OVHcloud's commitment to its customers and partners is primarily driven by the contractual relationship that formalizes and articulates it.

OVHcloud respects the laws and regulations applicable in the provision of services in each country. OVHcloud is also committed to compliance with specific industry specific regulations, for example for health and financial information systems.

Beyond contractual links, OVHcloud engages with its ecosystem, its customers and prospects, ensuring clarity and transparency of messages in all circumstances.
