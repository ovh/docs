---
title: Information System Security Policy (ISSP)
updated: 2023-09-29
---

## Objective

The Information System Security Policy (ISSP) provides the reference framework in cybersecurity for OVHcloud. ISSP defines the concepts necessary to understand OVHcloud's approach to security and links the context of operations with the means and resources used to ensure security. It defines:

- The context of OVHcloud operations to understand the main security risks of OVHcloud.
- Security commitments to OVHcloud stakeholders and the principles for implementing and maintaining the security of information systems.
- How these principles are operated within OVHcloud.

OVHcloud operates within a dynamic ecosystem in a context that is constantly evolving. Security practices must therefore evolve rapidly to remain relevant. ISSP is the sign of a management commitment over time. It aims to define the criteria for risk assessment, the principles guiding the establishment of security measures to be implemented and the management of security within OVHcloud.

ISSP is under the responsibility of the CISO which consults with the Executive Committee (ComEx) on its content and suitability for the strategic objectives of OVHcloud. It is reviewed annually. It comes in a set of security policies and detailed implementation guides. These documents have their own life cycles, adapted to their contents.

ISSP applies to all companies in the group, employees, suppliers, providers, subcontractors and users of the information system, regardless of their activities.

## Implementation context of the ISSP

### What is information security?

Security is the protection of the availability, integrity and confidentiality of a system. Within OVHcloud, managing security consists in defining, implementing, operating and improving all human, organisational, technical and legal means to protect OVHcloud's information systems and services against these criteria. Protecting data confidentiality in all circumstances is at the heart of OVHcloud's security approach. Ensuring the availability and integrity of services and data is OVHcloud's first mission and is beyond the scope of the ISSP. On those last two criterias, the security approach focuses on risks of malicious origin.

In accordance with OVHcloud's security commitments, the criteria of traceability and respect for privacy are also formally taken into account in our security approach.

The security criteria covered by the ISSP are therefore availability (A), integrity (I), confidentiality (C), traceability (T) and privacy (P). These criteria are used to highlight the security needs of protected assets, and the impacts associated with a security risk or incident.

### What assets do we protect?

#### Infrastructure, platforms, applications

OVHcloud operates a global infrastructure. This infrastructure consists of a set of data centres, equipment and servers hosted on it as well as a global network of interconnection. OVHcloud also operates an information system that supports this infrastructure. This information system supports operations, automation and ensures collaborative work within OVHcloud. It also includes the tools available to customers for the administration of their services and communication with OVHcloud teams.

OVHcloud offers infrastructure services (IaaS), platform services (PaaS) and application services (SaaS) as well as telecommunication services. Each of these services is based on OVHcloud's infrastructure, information system and possibly other services provided by OVHcloud or partners.

#### Information

The data considered most sensitive by OVHcloud is the data belonging to the clients. For this data hosted as part of the services, the client is responsible for processing and OVHcloud is a subcontractor. OVHcloud employees generally do not know the type of data hosted and do not access it. The client, as a processing manager, must ensure that the level of service offered is appropriate to the sensitivity of the data. OVHcloud, as a subcontractor, acts on instructions from the customer in the contractual framework of the services.

OVHcloud also protects internal data in support of operations. In this context, OVHcloud is the processing manager. This covers the technical and administrative data necessary for the provision of the service, the commercial relationship and compliance with legal obligations. OVHcloud's internal data used for business management and development are also covered. This data may be directly or indirectly related to OVHcloud's customers, employees, service providers and partners. They may be transmitted to third parties in accordance with the regulations in force. As a processing manager, OVHcloud defines the security measures adapted to each type of data for each stage of their life cycle, in line with their sensitivity.

### What threats are we facing?

As a company, OVHcloud is affected by the attacks that any company is subjected to: data theft, resource theft, blackmail, fraud, extortion, malware, compromising exposed systems, etc. These attacks, whether targeted or not, can jeopardise the data managed by OVHcloud and impact operations.

As a major player in the cloud, OVHcloud operates Internet-wide infrastructure. This positioning exposes OVHcloud to specific threats whose motivations may be to reach the reputation of a high visibility player in a dynamic competitive environment, to challenge innovative technologies or their specific implementation by OVHcloud for technical interest or to reach wide and highly connected infrastructure in an attempt to use computing power and connectivity resources for malicious purposes.

Finally, as providers of infrastructure, platforms, and solutions, we must also anticipate threats that target our customers or third parties:

- Attacks on our customers' data and processing through our infrastructure
- Attacks that exploit a weakness in the logical or physical isolation between the environments of different clients related to resource pooling
- The use of resources made available by OVHcloud as a third-party attack vector

The motivations and paths of attack to target our clients' infrastructure are as varied as the types of systems they operate. They cannot be listed completely. So we need to be prepared for any possible attack targeting one of our customers or OVHcloud.

The threats targeting OVHcloud are primarily of external origin. However, our teams are numerous, deployed internationally and growing rapidly. In addition to the possibility of human errors in operations, we must include the risk of insider threat in our risk management approach.

### Who is concerned by security?

#### Customers and partners

OVHcloud is responsible for operating infrastructure, platforms and software within our data centers, on behalf of our customers and partners. The proper functioning of these services is key for their information systems and digital activities. OVHcloud's customers operate their own services to third parties in a rich and complex ecosystem. The players involved in this supply chain and the end users expect OVHcloud to have the expertise and operational control of the services provided.

#### Industry specific authorities and regulators

The authorities define the framework for the protection of citizens and businesses under their jurisdiction. This protection extends to data and processing of citizens and businesses. OVHcloud takes these requirements into account in all geographies where the service is operated to ensure a service adapted to local ecosystems. Industry specific regulators also set requirements for the hosting of certain types of data and treatments, associated with particular risks. OVHcloud can offer services specifically adapted to these requirements. In this case, OVHcloud is committed to covering industry-specific requirements and risks.

#### Employees, management of OVHcloud and shareholders

OVHcloud employees design, maintain and operate systems and processes in support of OVHcloud services. Any security incident has a direct negative impact on operations, but also challenge the value of the services, the expertise and professionalism of teams. Operating secure information systems enhances OVHcloud's innovation, passion, team engagement and service quality.

OVHcloud, as an alternative cloud provider in a very competitive environment, must ensure strong growth to support innovation and development internationally strengthening its credibility. Our customers' confidence, the main driver of this growth, is directly linked to OVHcloud's ability to protect their data workloads. Cyber-security is therefore one of the pillars in support of the development strategy carried out by the management and shareholders of OVHcloud.

#### Subcontractors and outsourcing

OVHcloud is managing certain processes and projects with the assistance of subcontractors accessing OVHcloud information systems and OVHcloud premises. Moreover, OVHcloud Information System is also composed with outsourced applications and systems interconnected to its core. Those actors and systems are in support of OVHcloud operations and are importantly linked to the security.

## OVHcloud security commitments

OVHcloud's services are built on a human, physical, technological and organisational cybersecurity framework that supports all the company’s activities in support of OVHcloud services. The guiding principles are industrialisation, in-depth knowledge of technologies and team's accountability.

Our security approach targets to primarily protect customers data and workloads, but also to protect OVHcloud's information system that continuously evolves to support OVHcloud's business. Our efforts are prioritised according to a structured model balanced between a long term approach and efficient operations at tactical level.

### Build trustable cloud services

#### Consistent foundations managed with an industrial approach

Our approach is based on standardised secure building blocks and security measures, in-depth secure architectures by design and formal, proven, highly automated processes. We want this security approach to be an enabler for information system efficiency and consistency, so we build a set of tools and processes to be used by every team to ease security adoption.

We build our systems:

- On robust proven technologies, either open source or proprietary to meet our very demanding needs for performance and resiliency. Our systems in support for productions shall be as deterministic as possible, and configured to optimize security. We seek this goal by developing for every technology we use strong expertise by a progressive adoption and in-depth testing, a high level of automation with "as-code" operational model, and life-cycle management to ensure the software is maintained and supported.
- On internally built software assets, developed according to strict processes to meet specific needs in terms of functionalities, performances or in-depth controls in OVHcloud's context.

Security is not the only outcome of this very structured approach. However, it is a strong enabler for security by design and capability to manage security consistently over time.

#### Support every type of customer in their growth in the cloud

OVHcloud's products use open-source technologies and proven technology standards to facilitate adoption and reversibility for our customers when managing their systems in the cloud.

Security is integrated into the life cycle of product development. The security team is constantly involved in challenging and assisting all decisions that may have an impact on security. Our product security approach is risk-driven, based on deployment scale and adoption pace. We take into account the security culture of our customer's persona to meet common uses cases associated to each product. This way, we enrich our standard security framework with specific security measures adapted to technologies specificities and customer use cases.

Implementing configuration best practices and security lifecycle management for the technologies in support of our products is key in the value delivered to our customer and a strong incentive for them to move to cloud. This duty is fully embedded in the product lifecycle.

While the security posture may vary depending on the products specificities, the management of events, incidents, vulnerabilities, threats and gathering of security information remains standardised within a unified approach. Moreover, we are building a compliance program to unify and standardise security assurance to ease appropriation by customers.

#### Support every customer to manage their own specific risks

OVHcloud offers its solutions to any type of customer in all fields of activity: startup, SME, large business, administration, multinational. Every OVHcloud customer has a particular security approach, depending on its business or operation context that we need to take into account.

The security of a system in the cloud is a shared responsibility between the cloud provider and the customer. Our customers are ultimately responsible for the security of their information systems in the cloud. We clearly define their areas of operational responsibilities to avoid any vulnerability arising from insufficient awareness.

OVHcloud provides and develops a set of tools, features and configurations to improve the security of client systems in the cloud. Most security features are included for all customers. Additional security features are also available to help our customers to reduce the specific risks they face.

Customers should be able to add their own security solutions and tools. We develop a wide range of security solutions and services within our solutions catalog. This catalog is completed with a large range of technological means or services provided by OVHcloud partners within a rich ecosystem. Our products are designed to facilitate the use of third parties or community solutions to help our customers to customise their risk mitigation means.

### Cybersecurity in support of information systems and transformation

Building a production environment for our customers and their systems in the cloud is at the center of our cybersecurity commitment. This approach should be consistently cascaded into every OVHcloud information system, even if not directly in support to the service delivered to our customers.

We follow the same methodology for any information systems under the responsibility of OVHcloud. Security of all IT assets is a key to ensure the data related to our customer and OVHcloud data and information are protected.

OVHcloud security teams implement a structured program of reviews, controls and audits, both internal and external to constantly challenge our security. We challenge our security implementation against commonly used security compliance schemes. Continuous improvement is strictly followed by a dedicated team in direct support of systems owners to ensure the adequate implementation of improvement to increase security level continuously to ensure risks mitigation and compliance to our commitments.

Security teams provide security tools to project teams and system owners to ease implementation of security practices in the systems, ensuring consistency across the systems on most critical security topics.

We manage the security of all production systems in support of operations with a strong support of security teams:

- Improving the coverage of security controls to cover all sensitive data and workloads at OVHcloud.
- Ensuring security is included in the full lifecycle of our information systems and specifically taken into account during projects gates.
- The security teams work permanently with all systems owners to ensure the coordination is built over time and to ensure the follow-up of decisions related to security.

As OVHcloud is evolving in a very dynamic context, information system transformation is a permanent challenge to address all the issues related to our market positioning.
Within the objective to grow geographically, technically and in terms of customer base, we integrate into our security posture the strategic decision of OVHcloud to ensure the necessary information system transformations are planned and deploy in respect of the security principles we follow.

### An operational security culture

OVHcloud's security framework is constantly evolving to align with our operating model and services on one side and to adapt to the threat environment and new attack methods on the other side.

OVHcloud operates a permanent threat analysis framework linked to continuous monitoring system. This way, we systematically adapt operational practices to immediate risks and respond effectively to security incidents. The organisation of the security teams allows the rapid mobilisation of experts to investigate and resolve security incidents. In this way, we minimise potential impacts and implement corrective actions as quickly as possible sustainably.

OVHcloud’s security team and technical experts maintain strong operational relationships with security expert communities, authorities, software publishers, and hardware manufacturers. This way, we anticipate new threats and vulnerabilities and mitigate the associated risks. We share our innovations and knowledge with the security community and promote responsible disclosure. We are running a public bug bounty program to leverage security community expertise to improve our systems.

Tactical and ad-hoc decisions to mitigate risks in day-to-day operations are consolidated within our management framework to extend best practices across the company and build an effective continuous improvement cycle.

OVHcloud's teams are regularly trained to the security framework and to adopt the best practices in every situation that could generate a security risk, immediate or future in their work. OVHcloud's security team is continuously monitoring critical systems to detect misbehaviour and to ensure a quick response to deviation.

## How does OVHcloud commit?

OVHcloud's commitment to its customers and partners is primarily driven by the contractual relationship that formalises and articulates it. We document and communicate security roles and responsibility matrixes for our services.

OVHcloud respects the laws and regulations applicable in the provision of services in each country. OVHcloud is also committed to compliance with specific industry specific regulations, for example for health and financial information systems.

Our security management organisation is based on internationally recognised standards, in particular ISO/IEC 27001 which highlights these principles. We regularly evaluate our security features using trusted third parties and recognised audit benchmarks, and we communicate the compliance reports and certificates to our customers when appropriate.

Beyond contractual links, OVHcloud engages with its ecosystem, its customers and prospects, ensuring clarity and transparency of messages in all circumstances.

## OVHcloud security implementation

OVHcloud is maintaining its own security framework in support of the ISMS federating all requirements from our interested parties. This framework is based on different industry standards, and adapted to OVHcloud organisation and operations.

1. Define and maintain security governance (Security Governance)
2. Maintain consistent security principles and documentation (Security Model)
3. Provide to customer appropriate security features to manage their risks (Customer Security Features)
4. Implement appropriate data protection for any data managed or hosted (Data Protection)
5. Demonstrate compliance with OVHcloud commitments (Security Compliance)
6. Promote risk-based decisions (Security Risks Management)
7. Build, develop and maintain relationship with security ecosystem (Security Ecosystem)
8. Protect customer's cloud usage (Security Protection for Customer)
9. Protect OVHcloud technical reputation (External Technical Reputation)
10. Assess security and implement continuous improvement (Audits and Controls)
11. Assets management
12. Ensure alignment of resources with security objectives and develop a security culture (Human Resources, Awareness and Training)
13. Identity, authentication and access Management
14. Protect end user information system (End User Information System)
15. Supply chain and service provider management
16. Support IT and product developments (Project Management)
17. Manage security in IS evolution (Change Management)
18. Secure continuous delivery
19. Use strong cryptography (Cryptography)
20. Deploy and maintain secure configuration and hardening (Configuration and Hardening)
21. Ensure network security (Network Security)
22. Operations and maintenance in security conditions
23. Logging, security monitoring and detection
24. Vulnerability and patch management
25. Security incident management
26. Datacenter security
27. Office security
28. Resilience
