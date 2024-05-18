"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[8128],{3122:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(4848),s=t(8453);const a={sidebar_position:3},r="Data-Theft Incident Response Playbook",o={id:"cybersecurity/purple team/playbooks/Data Theft Incident Response Playbook",title:"Data-Theft Incident Response Playbook",description:"Data-Theft Incident Response Playbook for Blue Team",source:"@site/docs/cybersecurity/purple team/playbooks/Data Theft Incident Response Playbook.md",sourceDirName:"cybersecurity/purple team/playbooks",slug:"/cybersecurity/purple team/playbooks/Data Theft Incident Response Playbook",permalink:"/redback-documentation/docs/cybersecurity/purple team/playbooks/Data Theft Incident Response Playbook",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/cybersecurity/purple team/playbooks/Data Theft Incident Response Playbook.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Denial of Service Incident Response Playbook",permalink:"/redback-documentation/docs/cybersecurity/purple team/playbooks/Denial of Service Incident Response Playbook"},next:{title:"Malware-Outbreak Incident Response Playbook",permalink:"/redback-documentation/docs/cybersecurity/purple team/playbooks/Malware Outbreak Incident Response Playbook"}},c={},d=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1\tOverview",id:"11overview",level:3},{value:"1.2 Purpose",id:"12-purpose",level:3},{value:"1.3 Attack Definition",id:"13-attack-definition",level:3},{value:"1.4\tScope",id:"14scope",level:3},{value:"2. Attack Types",id:"2-attack-types",level:2},{value:"2.1 Insider Threat",id:"21-insider-threat",level:3},{value:"2.2 External Attack",id:"22-external-attack",level:3},{value:"2.3 Data Breaches",id:"23-data-breaches",level:3},{value:"2.4 Phishing Attacks",id:"24-phishing-attacks",level:3},{value:"2.5 Ransomware Attacks",id:"25-ransomware-attacks",level:3},{value:"2.6 Credential Theft",id:"26-credential-theft",level:3},{value:"3. Stakeholders",id:"3-stakeholders",level:2},{value:"3.1 IT Security Team",id:"31-it-security-team",level:3},{value:"3.2 Incident Response Team",id:"32-incident-response-team",level:3},{value:"3.3 Communication Team",id:"33-communication-team",level:3},{value:"3.4 Customers",id:"34-customers",level:3},{value:"3.5 Third-Party Vendors",id:"35-third-party-vendors",level:3},{value:"4. Flow Diagram",id:"4-flow-diagram",level:2},{value:"5. Incident Response Stages",id:"5-incident-response-stages",level:2},{value:"5.1 Preparation",id:"51-preparation",level:3},{value:"5.2 Detection",id:"52-detection",level:3},{value:"5.3 Analysis",id:"53-analysis",level:3},{value:"5.4 Containment",id:"54-containment",level:3},{value:"5.5 Eradication",id:"55-eradication",level:3},{value:"5.6 Recovery",id:"56-recovery",level:3},{value:"5.7 Post- Incident Review",id:"57-post--incident-review",level:3},{value:"6. Terminology",id:"6-terminology",level:2}];function l(e){const n={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"data-theft-incident-response-playbook",children:"Data-Theft Incident Response Playbook"}),"\n",(0,i.jsx)(n.p,{children:"Data-Theft Incident Response Playbook for Blue Team"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Effective Date:"})," 29 April 2024. ",(0,i.jsx)(n.strong,{children:"Last Edited:"})," 13 April 2024. ",(0,i.jsx)(n.strong,{children:"Author:"})," Devika Sivakumar ",(0,i.jsx)(n.strong,{children:"Document Reference:"})," DTIRP-1. ",(0,i.jsx)(n.strong,{children:"Expiry Date:"})," 29 April 2025. ",(0,i.jsx)(n.strong,{children:"Version:"})," 1.0."]})}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,i.jsx)(n.p,{children:"An organization's reputation may be harmed, confidential data may be compromised, and financial losses may ensue from data theft occurrences. To minimise the effects of data theft events and protect organisational assets, this playbook offers methods and principles for doing so."}),"\n",(0,i.jsx)(n.h3,{id:"11overview",children:"1.1\tOverview"}),"\n",(0,i.jsx)(n.p,{children:"A structured approach for identifying, containing, mitigating, and recovering from data theft events is described in the data theft incident response playbook. To enable a well-coordinated and efficient response effort, it sets roles, duties, and protocols."}),"\n",(0,i.jsx)(n.h3,{id:"12-purpose",children:"1.2 Purpose"}),"\n",(0,i.jsx)(n.p,{children:"This playbook's goals are to:\r\n-Establish a uniform framework for handling situations involving data theft.\r\n-Make sure that data breaches are promptly detected and contained.\r\n-Reduce the negative effects that data theft events have on the stakeholders, the organization's operations, and its reputation.\r\n-Encourage response teams and stakeholders to collaborate, coordinate, and communicate with one another."}),"\n",(0,i.jsx)(n.h3,{id:"13-attack-definition",children:"1.3 Attack Definition"}),"\n",(0,i.jsx)(n.p,{children:"Unauthorised access to, exfiltration of, or exposure of confidential company information is referred to as data theft. This can contain financial information, confidential information, intellectual property, and personally identifiable information (PII). Incidents of data theft can be caused by several techniques, including as malware, social engineering, phishing, external assaults, and insider threats."}),"\n",(0,i.jsx)(n.h3,{id:"14scope",children:"1.4\tScope"}),"\n",(0,i.jsx)(n.p,{children:"Any incidences of data theft affecting the systems, apps, networks, and data assets of the company are covered by this playbook. It includes events that have an impact on both internal and external stakeholders, such as partners, customers, staff members, and outside vendors. Regardless of the origin or mode of attack, instances involving both purposeful and accidental data theft are included in the scope."}),"\n",(0,i.jsx)(n.h2,{id:"2-attack-types",children:"2. Attack Types"}),"\n",(0,i.jsx)(n.p,{children:"The different types of Data-Theft attacks include:"}),"\n",(0,i.jsx)(n.h3,{id:"21-insider-threat",children:"2.1 Insider Threat"}),"\n",(0,i.jsx)(n.p,{children:"An insider threat is when someone steals data from an organisation by using contractors, business partners, or employees."}),"\n",(0,i.jsx)(n.p,{children:"Signs of Insider Threat:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Abnormal access patterns: Workers accessing private data after hours or on the weekends, in addition to their regular duties."}),"\n",(0,i.jsx)(n.li,{children:"Illegal data access: Workers gaining access to systems or files for which they are not normally authorised."}),"\n",(0,i.jsx)(n.li,{children:"Unauthorised information sharing: Workers disclosing private information to outside parties or persons they are not authorised to."}),"\n",(0,i.jsx)(n.li,{children:"Behavioural or performance changes: Workers displaying abrupt behavioural shifts, such heightened confidentiality or attempts to avoid discovery."}),"\n",(0,i.jsx)(n.li,{children:"Employee discontent or unhappiness: When staff members voice their unhappiness with their jobs or the company, it may spark aggressive behaviour."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"22-external-attack",children:"2.2 External Attack"}),"\n",(0,i.jsx)(n.p,{children:"Data theft carried out by external parties, such as nation-state enemies, hackers, or cybercriminals, is referred to as an external attack."}),"\n",(0,i.jsx)(n.p,{children:"Signs of External Attack:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Illegal entry attempts: Brute force attacks or suspicious login attempts directed at the networks or systems of the company."}),"\n",(0,i.jsx)(n.li,{children:"Unusual patterns of network traffic: Distinctive communication patterns or massive amounts of data being moved to other sites are examples of anomalies in network traffic."}),"\n",(0,i.jsx)(n.li,{children:"Malicious software or malware presence: Finding malware problems, including ransomware, trojans, or keyloggers, on the company's networks or systems."}),"\n",(0,i.jsx)(n.li,{children:"Phishing attempts: Getting shady emails or communications that try to fool staff members into disclosing private information or installing malicious software."}),"\n",(0,i.jsx)(n.li,{children:"Exploitation of applications or system vulnerabilities: Identification of attempted or accomplished exploitation of known weaknesses in the infrastructure of the company, such as improperly configured systems or unpatched software."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"23-data-breaches",children:"2.3 Data Breaches"}),"\n",(0,i.jsx)(n.p,{children:"Data breaches happen when unapproved parties obtain entry to confidential data that is kept on file by a company."}),"\n",(0,i.jsx)(n.p,{children:"Signs of Data Breaches:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Unexpected modifications to a user's rights or access authorisation."}),"\n",(0,i.jsx)(n.li,{children:"Unauthorised access attempts indicated by anomalies in system logs."}),"\n",(0,i.jsx)(n.li,{children:"Abnormal network activity patterns, such massive data transfers to other addresses."}),"\n",(0,i.jsx)(n.li,{children:"Conditions in user behaviour, including accessing private information after hours."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"24-phishing-attacks",children:"2.4 Phishing Attacks"}),"\n",(0,i.jsx)(n.p,{children:"Phishing attacks include sending people false emails or messages with the intention of fooling them into disclosing private information, including login passwords or bank account information."}),"\n",(0,i.jsx)(n.p,{children:"Signs of Phishing Attacks:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Getting faked or unknown sender emails that raise red flags."}),"\n",(0,i.jsx)(n.li,{children:"Email or message requests for private information, including account numbers or passwords."}),"\n",(0,i.jsx)(n.li,{children:"Links in emails that take recipients to phoney websites intended to steal login information."}),"\n",(0,i.jsx)(n.li,{children:"Sent with bad grammar or poor writing quality."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"25-ransomware-attacks",children:"2.5 Ransomware Attacks"}),"\n",(0,i.jsx)(n.p,{children:"Ransomware attacks entail the introduction of software into a victim's computer or network, encrypting files and requesting payment for the key to unlock them."}),"\n",(0,i.jsx)(n.p,{children:"Signs of Ransomware Attacks:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Unable to access folders or files because they are encrypted."}),"\n",(0,i.jsx)(n.li,{children:"The appearance of messages requesting money in order to unlock the ransom."}),"\n",(0,i.jsx)(n.li,{children:"Abnormal network behaviour as the malware propagates."}),"\n",(0,i.jsx)(n.li,{children:"The existence of files or processes connected to ransomware on compromised computers."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"26-credential-theft",children:"2.6 Credential Theft"}),"\n",(0,i.jsx)(n.p,{children:"Theft of login credentials, which include usernames and passwords, from people or organisations is known as credential theft. The goal is to obtain unauthorised access to accounts or systems."}),"\n",(0,i.jsx)(n.p,{children:"Signs of Credential Theft:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Notifications of illegal access to systems or user accounts."}),"\n",(0,i.jsx)(n.li,{children:"Unusual locations or a pattern of unsuccessful login attempts are examples of anomalies in login behaviour."}),"\n",(0,i.jsx)(n.li,{children:"Malware that is intended to intercept keystrokes or steal passwords that have been stored."}),"\n",(0,i.jsx)(n.li,{children:"Using credentials that have been stolen to gain access to private data or carry out unauthorised activities."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3-stakeholders",children:"3. Stakeholders"}),"\n",(0,i.jsx)(n.h3,{id:"31-it-security-team",children:"3.1 IT Security Team"}),"\n",(0,i.jsx)(n.p,{children:"The IT security team oversees overseeing and maintaining the company's security infrastructure, keeping an eye out for any security risks, and handling instances of data theft. Among their duties and functions are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Examining and assessing security events to ascertain the scope of identity theft."}),"\n",(0,i.jsx)(n.li,{children:"Putting security measures and controls in place to stop more illegal access."}),"\n",(0,i.jsx)(n.li,{children:"Working together with the incident response team to control and lessen the effects of occurrences involving data theft."}),"\n",(0,i.jsx)(n.li,{children:"Using forensic analysis to find the source of security vulnerabilities and stop such situations in the future."}),"\n",(0,i.jsx)(n.li,{children:"Informing top management and other relevant parties on procedure upgrades for incident response and suggesting security enhancements."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"32-incident-response-team",children:"3.2 Incident Response Team"}),"\n",(0,i.jsx)(n.p,{children:"The incident response team oversees overseeing the incident response procedure and organising the organization's reaction to occurrences involving data theft. Among their duties and functions are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Identifying the extent and consequences of data theft occurrences and taking the necessary remedial measures."}),"\n",(0,i.jsx)(n.li,{children:"Organising staff and resources to limit and lessen the impact of instances of data theft."}),"\n",(0,i.jsx)(n.li,{children:"Carrying out forensic investigations to ascertain the origin and scope of data theft and collect proof for prospective legal proceedings."}),"\n",(0,i.jsx)(n.li,{children:"Keeping customers, third-party vendors, senior management, the IT security team, and other stakeholders at all levels informed about incident response procedures and recovery activities."}),"\n",(0,i.jsx)(n.li,{children:"Recording best practices and lessons gained from data theft events to strengthen the company's incident response skills."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"33-communication-team",children:"3.3 Communication Team"}),"\n",(0,i.jsx)(n.p,{children:"The communication team oversees overseeing both internal and outside communications about cases of data theft and making sure that messages are clear and consistent. Among their duties and functions are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Creating and carrying out communication strategies to notify stakeholders, including staff members, clients, and outside suppliers, about instances of data theft."}),"\n",(0,i.jsx)(n.li,{children:"Writing and distributing communication materials to respond to questions and concerns from stakeholders, including as statements, news releases, and FAQs."}),"\n",(0,i.jsx)(n.li,{children:"Organising public relations and media relations campaigns to safeguard the company's image and lessen the negative effects of data theft occurrences on its reputation."}),"\n",(0,i.jsx)(n.li,{children:"Regularly updating upper leadership and the incident response team on the state of stakeholder engagement and communication initiatives."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"34-customers",children:"3.4 Customers"}),"\n",(0,i.jsx)(n.p,{children:"Customers are people or organisations that may be impacted by instances of data theft and have a stake in the goods or services offered by the company. Among their duties and functions are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Notifying the organisation of any unauthorised or questionable activity pertaining to their accounts or transactions."}),"\n",(0,i.jsx)(n.li,{children:"Participating in the investigation of data theft occurrences by offering pertinent data or proof to the organization's incident response team."}),"\n",(0,i.jsx)(n.li,{children:"Adhering to the organization's recommendations and instructions about how to safeguard their personal data and lessen the effects of data theft occurrences."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"35-third-party-vendors",children:"3.5 Third-Party Vendors"}),"\n",(0,i.jsx)(n.p,{children:"Third-party vendors are outside companies that supply the company with goods, services, or support; they may also have access to its networks, systems, or data. Among their duties and functions are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Working in tandem with the company's incident response team to locate and fix security flaws or breaches pertaining to their goods or services."}),"\n",(0,i.jsx)(n.li,{children:"Offering the company help and support as it investigates and handles data theft issues that impact its networks or systems."}),"\n",(0,i.jsx)(n.li,{children:"Honouring contractual commitments and legal mandates pertaining to privacy and data security, including disclosing security breaches, and assisting with incident response."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4-flow-diagram",children:"4. Flow Diagram"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Data Theft Incident Response Flowchart",src:t(5996).A+"",width:"601",height:"304"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Preparation (Prep): Yellow"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Notify IT Security Analyst: The IT security analyst is instantly contacted to begin incident response preparations upon detection of data theft."}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Identification (Identify): Red"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Contain the Incident; Isolate Systems: Containment procedures, such as isolating impacted systems to prevent additional unauthorised access, are put in place if the issue is continuing."}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Notification (Notif): Violet"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Change Credentials; Malware Scan: Changing passwords and running malware scans are two urgent steps that should be taken after a successful isolation to lessen the effect of the occurrence."}),"\n",(0,i.jsx)(n.li,{children:"Review Malicious Activities; Notify Relevant Teams: Malicious activity is found through additional analysis, and teams who need to respond are alerted so that they may plan accordingly."}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Containment (Contain): Sky Blue"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Error - Unable to Isolate; Escalate: Senior analysts are notified to resolve the issue and the incident is escalated if the impacted systems cannot be isolated."}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Eradication (Erad): Light Green"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Document Incident; Eradicate: To eliminate any last hazards and return to regular operations, the occurrence is recorded, and eradication procedures are put in place."}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Recovery (Recover): Brown"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Monitor for Further Activities; Recover: To guarantee the organization's resilience, recovery actions are started and ongoing monitoring for additional activities is carried out."}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Post-Incident Actions (Post): Light pink"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Continue Monitoring; Post-Incident Review: Continuous observation persists, and a post-event assessment is carried out to appraise the efficacy of the reaction and pinpoint opportunities for enhancement."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"5-incident-response-stages",children:"5. Incident Response Stages"}),"\n",(0,i.jsx)(n.h3,{id:"51-preparation",children:"5.1 Preparation"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Objective"}),": Establishing the rules, processes, and resources required to properly handle cases of data theft is the main goal of the preparation phase."]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Activities"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Forming an incident response group with clearly defined duties."}),"\n",(0,i.jsx)(n.li,{children:"Creating processes and strategies for incident response that include escalation routes and communication protocols."}),"\n",(0,i.jsx)(n.li,{children:"Regularly providing incident responders with training and drills to guarantee preparedness."}),"\n",(0,i.jsx)(n.li,{children:"Putting security measures and monitoring systems in place to identify and stop instances of data theft."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Outcome"}),": A well-equipped company capable of reacting to instances of data theft swiftly and efficiently."]}),"\n",(0,i.jsx)(n.h3,{id:"52-detection",children:"5.2 Detection"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Objective"}),": Finding signs of illegal access or data theft within the organization's networks and systems is the task of the detection stage."]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Activities"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Keeping an eye out for suspicious activities, such as strange access patterns or unauthorised file transfers, by monitoring system logs and network traffic."}),"\n",(0,i.jsx)(n.li,{children:"Putting in place security information and event management (SIEM) and intrusion detection system (IDS) solutions to find any attacks."}),"\n",(0,i.jsx)(n.li,{children:"Examining abnormalities and alarms to differentiate between harmful and legitimate activity."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Outcome"}),": Early data theft event identification allows for quick response and mitigation actions."]}),"\n",(0,i.jsx)(n.h3,{id:"53-analysis",children:"5.3 Analysis"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Objective"}),": The investigation and comprehension of the type and extent of the data theft occurrence are the main objectives of the analysis stage."]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Activities"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Gathering information and determining the origin and scope of the data theft through forensic analysis."}),"\n",(0,i.jsx)(n.li,{children:"Examining hacked networks and systems to ascertain the attack strategies and the effects on compromised data."}),"\n",(0,i.jsx)(n.li,{children:"Recognising threat actors' tactics, methods, and procedures (TTPs) and indications of compromise (IOCs)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Outcome"}),": A thorough comprehension of the data theft occurrence, considering its attribution, consequences, and underlying reasons."]}),"\n",(0,i.jsx)(n.h3,{id:"54-containment",children:"5.4 Containment"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Objective"}),": To stop more unauthorised access or data exfiltration, the containment step entails reducing the incident's effect and spread."]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Activities"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Separating hacked networks and systems to stop attackers from moving laterally."}),"\n",(0,i.jsx)(n.li,{children:"Putting in place limits and access controls to stop unwanted individuals from accessing private information."}),"\n",(0,i.jsx)(n.li,{children:"Putting harmful files, programmes, or network traffic in quarantine or blocking it to stop further damage."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Outcome"}),": Successful management of the data theft event, reducing the damage it caused to the systems and data of the company."]}),"\n",(0,i.jsx)(n.h3,{id:"55-eradication",children:"5.5 Eradication"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Objective"}),": The goal of the eradication step is to eradicate any remaining risks or vulnerabilities as well as the attackers' presence from the company's IT infrastructure and networks."]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Activities"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Deleting harmful software and data from hacked computers and returning them to a safe condition."}),"\n",(0,i.jsx)(n.li,{children:"Upgrading or patching susceptible systems and software to stop further exploitation."}),"\n",(0,i.jsx)(n.li,{children:"Examining and revising security rules and practices to fix any flaws or vulnerabilities found."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Outcome"}),": Eradicating all evidence of the data theft event and reducing vulnerabilities to stop such ones in the future."]}),"\n",(0,i.jsx)(n.h3,{id:"56-recovery",children:"5.6 Recovery"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Objective"}),": Restoring impacted systems and information to regular functioning and carrying on business as usual are the objectives of the recovery stage."]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Activities"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Restoring systems and data backups that were hacked to guarantee data availability and integrity."}),"\n",(0,i.jsx)(n.li,{children:"Rebuilding or reorganising networks and systems to increase security and stop such events."}),"\n",(0,i.jsx)(n.li,{children:"Implementing user education and awareness campaigns to stop data theft in the future."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Outcome"}),": Complete resumption of operations and services together with more robust security measures to reduce the likelihood of a repeat."]}),"\n",(0,i.jsx)(n.h3,{id:"57-post--incident-review",children:"5.7 Post- Incident Review"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Objective"}),": In the post-incident review phase, the organization's reaction to the data theft incident is assessed, and opportunities for improvement and lessons learned are noted."]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Activities"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Carrying out a comprehensive examination of the incident response procedure, considering its advantages, disadvantages, and room for development."}),"\n",(0,i.jsx)(n.li,{children:"Recording best practices and lessons learned to improve incident response skills in the future."}),"\n",(0,i.jsx)(n.li,{children:"Adjusting incident response protocols, guidelines, and security measures considering the review's conclusions."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u2022\t",(0,i.jsx)(n.strong,{children:"Outcome"}),": Constant enhancement of incident response capacities and preparedness for upcoming data theft events."]}),"\n",(0,i.jsx)(n.h2,{id:"6-terminology",children:"6. Terminology"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Data Theft"}),": The illicit procurement, duplication, or elimination of private or sensitive information from a company's networks or systems."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Insider Threat"}),": A security risk brought on by employees of a company who may, whether on deliberately or accidentally, abuse or divulge sensitive information for nefarious or personal benefit."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"External Attack"}),": An attempt to steal confidential information through a cyberattack carried out by people or organisations not connected to its internal network, such as hackers, cybercriminals, or nation-state enemies."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Incident Response"}),": A methodical strategy for dealing with and handling security events, such as data theft incidents, with the objectives of minimising harm, restarting operations, and averting such occurrences."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Indicators of Compromise (IOCs)"}),": Observable indicators, such as strange network traffic patterns, unauthorised access attempts, or questionable file alterations, that point to the existence of malicious activity or a security breach."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Security Controls"}),": Procedures put in place to guard against security risks, such as instances of data theft, and to safeguard networks, systems, and data. Intrusion detection systems (IDS), encryption, access restrictions, and security awareness training are a few examples of security controls."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Forensic Analysis"}),": The methodical inspection of digital evidence connected to a security event, such data theft, to collect and examine data for legal or investigative needs, including figuring out the incident's cause and consequences."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Vulnerability"}),": Vulnerabilities or weaknesses in networks, apps, or systems that an attacker may use to get unauthorised access, steal information, or interfere with normal operations. Inadequate security measures, incorrect setups, and software defects can all lead to vulnerabilities."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},5996:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/dtirp1-flowchart-d7441d853bb6a86a87657bcdd3cb86be.jpg"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);