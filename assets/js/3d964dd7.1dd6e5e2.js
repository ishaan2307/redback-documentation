"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[3780],{4529:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=i(4848),t=i(8453);const r={sidebar_position:7},o="Virus Outbreak Incident Response Playbook",a={id:"cybersecurity/purple team/playbooks/Virus Outbreak Incident Response Playbook",title:"Virus Outbreak Incident Response Playbook",description:"Virus-Outbreak Incident Response Playbook for Blue Team",source:"@site/docs/cybersecurity/purple team/playbooks/Virus Outbreak Incident Response Playbook.md",sourceDirName:"cybersecurity/purple team/playbooks",slug:"/cybersecurity/purple team/playbooks/Virus Outbreak Incident Response Playbook",permalink:"/redback-documentation/docs/cybersecurity/purple team/playbooks/Virus Outbreak Incident Response Playbook",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/cybersecurity/purple team/playbooks/Virus Outbreak Incident Response Playbook.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Malware-Outbreak Incident Response Playbook",permalink:"/redback-documentation/docs/cybersecurity/purple team/playbooks/Malware Outbreak Incident Response Playbook"},next:{title:"Incident Documents",permalink:"/redback-documentation/docs/category/incident-documents"}},l={},c=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1\tOverview",id:"11overview",level:3},{value:"1.2 Purpose",id:"12-purpose",level:3},{value:"1.3 Attack Definition",id:"13-attack-definition",level:3},{value:"1.4\tScope",id:"14scope",level:3},{value:"2. Attack Types",id:"2-attack-types",level:2},{value:"2.1 File Infector Viruses",id:"21-file-infector-viruses",level:3},{value:"2.2 Macro Viruses",id:"22-macro-viruses",level:3},{value:"2.3 Boot Sector Viruses",id:"23-boot-sector-viruses",level:3},{value:"2.4 Polymorphic Viruses",id:"24-polymorphic-viruses",level:3},{value:"2.5 Resident Viruses",id:"25-resident-viruses",level:3},{value:"2.6 Multipartite Viruses",id:"26-multipartite-viruses",level:3},{value:"2.7 Network Viruses",id:"27-network-viruses",level:3},{value:"2.8 Stealth Viruses",id:"28-stealth-viruses",level:3},{value:"3. Stakeholders",id:"3-stakeholders",level:2},{value:"3.1 IT Security Team",id:"31-it-security-team",level:3},{value:"3.2 Incident Response Team",id:"32-incident-response-team",level:3},{value:"3.3 Communication Team",id:"33-communication-team",level:3},{value:"3.4 Customers",id:"34-customers",level:3},{value:"3.5 Third-Party Vendors",id:"35-third-party-vendors",level:3},{value:"4. Flow Diagram",id:"4-flow-diagram",level:2},{value:"5. Incident Response Stages",id:"5-incident-response-stages",level:2},{value:"5.1 Preparation",id:"51-preparation",level:3},{value:"5.2 Detection",id:"52-detection",level:3},{value:"5.3 Analysis",id:"53-analysis",level:3},{value:"5.4 Containment",id:"54-containment",level:3},{value:"5.5 Eradication",id:"55-eradication",level:2},{value:"5.6 Recovery",id:"56-recovery",level:3},{value:"5.7 Post- Incident Review",id:"57-post--incident-review",level:3},{value:"6. Terminology",id:"6-terminology",level:2}];function d(e){const n={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"virus-outbreak-incident-response-playbook",children:"Virus Outbreak Incident Response Playbook"}),"\n",(0,s.jsx)(n.p,{children:"Virus-Outbreak Incident Response Playbook for Blue Team"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Effective Date:"})," 29 April 2024. ",(0,s.jsx)(n.strong,{children:"Last Edited:"})," 28 April 2024. ",(0,s.jsx)(n.strong,{children:"Authors:"})," Devika Sivakumar ",(0,s.jsx)(n.strong,{children:"Document Reference:"})," VOIRP-1. ",(0,s.jsx)(n.strong,{children:"Expiry Date:"})," 29 April 2025. ",(0,s.jsx)(n.strong,{children:"Version:"})," 1.0."]})}),"\n",(0,s.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,s.jsx)(n.p,{children:"The security of data, the continuity of operations, and the reputation of the organisation are all seriously threatened by virus outbreaks. To reduce damage and guarantee company resilience, virus attacks must be promptly identified, contained, and mitigated. This playbook outlines roles, duties, and processes for a successful response, providing an organised method for handling viral epidemics."}),"\n",(0,s.jsx)(n.h3,{id:"11overview",children:"1.1\tOverview"}),"\n",(0,s.jsx)(n.p,{children:"There is a methodical structure available in the Virus Outbreak Incident Response Playbook for identifying, stopping, eliminating, and recovering from virus attacks. It seeks to expedite reaction efforts and lessen the impact of viral outbreaks on organisational assets and stakeholders by developing defined standards and communication channels."}),"\n",(0,s.jsx)(n.h3,{id:"12-purpose",children:"1.2 Purpose"}),"\n",(0,s.jsx)(n.p,{children:"This playbook's goals are to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create a standardised procedure for handling viral outbreaks to guarantee efficacy and uniformity in event handling."}),"\n",(0,s.jsx)(n.li,{children:"Make it easier to quickly identify and confine viruses to stop their spread and reduce harm."}),"\n",(0,s.jsx)(n.li,{children:"Reduce the effect of viral outbreaks on the functioning of organisations and the resulting financial losses."}),"\n",(0,s.jsx)(n.li,{children:"During incident response efforts, encourage cooperation, coordination, and communication amongst response teams, stakeholders, and other relevant parties."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"13-attack-definition",children:"1.3 Attack Definition"}),"\n",(0,s.jsx)(n.p,{children:"Malicious software, such as viruses, are created with the intent to harm, interfere with, or get unauthorised access to computer systems, networks, and data. They cover a wide range of dangers, such as ransomware, worms, trojans, and spyware, among others. Numerous routes, including malicious websites, email attachments, infected files, and software flaws, can allow viruses to enter a system."}),"\n",(0,s.jsx)(n.h3,{id:"14scope",children:"1.4\tScope"}),"\n",(0,s.jsx)(n.p,{children:"Events related to virus outbreaks that impact the computers, networks, and endpoints of the company are covered in this playbook. It covers viral occurrences that affect stakeholders, data assets, and company procedures from both external and internal sources. This playbook is applicable to any situation that calls for a coordinated response, regardless of the type of virus or mode of distribution."}),"\n",(0,s.jsx)(n.h2,{id:"2-attack-types",children:"2. Attack Types"}),"\n",(0,s.jsx)(n.p,{children:"There are several ways that virus outbreaks might appear, and each one poses different difficulties for incident response teams. The subsequent assault types are frequently linked to viral outbreaks:"}),"\n",(0,s.jsx)(n.h3,{id:"21-file-infector-viruses",children:"2.1 File Infector Viruses"}),"\n",(0,s.jsx)(n.p,{children:"When executable files are opened, file infector viruses cling to them, multiply, and spread to other files, causing extensive harm."}),"\n",(0,s.jsx)(n.p,{children:"Signs of File Infector Virus Activity:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Unknown corruption or alteration of executable files."}),"\n",(0,s.jsx)(n.li,{children:"Unexpected variations in checksums or file sizes."}),"\n",(0,s.jsx)(n.li,{children:"Reports of malicious file alarms from antivirus software."}),"\n",(0,s.jsx)(n.li,{children:"Unexpected rise in system resource consumption brought on by viral propagation."}),"\n",(0,s.jsx)(n.li,{children:"Suspicious network traffic coming from machines that have been compromised."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"22-macro-viruses",children:"2.2 Macro Viruses"}),"\n",(0,s.jsx)(n.p,{children:"Macro viruses propagate by infecting spreadsheets and documents that include macros. The macros are subsequently performed when the file is accessed, potentially leading to data loss or system interruption."}),"\n",(0,s.jsx)(n.p,{children:"Signs of Macro Viruses Activity:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Unusual actions or error messages while attempting to open spreadsheets or documents."}),"\n",(0,s.jsx)(n.li,{children:"Emails with links to malicious documents or attachments that seem suspicious."}),"\n",(0,s.jsx)(n.li,{children:"Reports of unforeseen modifications to the layout or substance of documents."}),"\n",(0,s.jsx)(n.li,{children:"Infected papers are found and quarantined by antivirus software."}),"\n",(0,s.jsx)(n.li,{children:"Increased network traffic because of the transmission or sharing of infected documents."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"23-boot-sector-viruses",children:"2.3 Boot Sector Viruses"}),"\n",(0,s.jsx)(n.p,{children:"The master boot record (MBR) or boot sector of storage devices can get infected with boot sector viruses, which impair the system's ability to start correctly and may result in data loss or system failure."}),"\n",(0,s.jsx)(n.p,{children:"Signs of Boot Sector Viruses Activity:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Anomalous errors during the boot process or the system's inability to boot up. Reports of system files being damaged or missing."}),"\n",(0,s.jsx)(n.li,{children:"Notifications from antivirus software that boot sector viruses are present."}),"\n",(0,s.jsx)(n.li,{children:"Adjustments to disc partitions or partition tables that are not explained."}),"\n",(0,s.jsx)(n.li,{children:"Suspicious behaviour on the network coming from devices that are infected and trying to propagate the infection."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"24-polymorphic-viruses",children:"2.4 Polymorphic Viruses"}),"\n",(0,s.jsx)(n.p,{children:"With every infection, polymorphic viruses alter their look and coding structure, making antivirus software's job of detecting and eliminating them more difficult."}),"\n",(0,s.jsx)(n.p,{children:"Signs of Polymorphic Viruses Activity:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Files with often changing signatures are identified by antivirus software and placed in quarantine."}),"\n",(0,s.jsx)(n.li,{children:"Random crashes or problems on compromised devices that are not explained."}),"\n",(0,s.jsx)(n.li,{children:"Reports of unusual or unpredictable behaviour from files or apps."}),"\n",(0,s.jsx)(n.li,{children:"A rise in network traffic as the virus looks to infect other machines."}),"\n",(0,s.jsx)(n.li,{children:"System logs demonstrating many attempts to run malicious code with different characteristics."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"25-resident-viruses",children:"2.5 Resident Viruses"}),"\n",(0,s.jsx)(n.p,{children:"Because resident viruses lodge themselves in system memory, they can continue to function even after the system is restarted."}),"\n",(0,s.jsx)(n.p,{children:"Signs of Resident Virus Activity:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Unexpected system lag or deterioration in performance."}),"\n",(0,s.jsx)(n.li,{children:"Antivirus software that looks for infections in RAM."}),"\n",(0,s.jsx)(n.li,{children:"Persistence in task management or process monitor of processes linked to viruses."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"26-multipartite-viruses",children:"2.6 Multipartite Viruses"}),"\n",(0,s.jsx)(n.p,{children:"Multipartite viruses combine the traits of boot sector and file infector viruses to infect executable files as well as boot sectors, hence increasing their effect and spread."}),"\n",(0,s.jsx)(n.p,{children:"Signs of Multipartite Viruses Activity:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Several antivirus notifications pointing to viruses in the boot sector and files."}),"\n",(0,s.jsx)(n.li,{children:"System instability or crashes that happen when apps are running, or the system is booting up."}),"\n",(0,s.jsx)(n.li,{children:"Reports pertaining to damaged or lost data in the impacted files and storage devices."}),"\n",(0,s.jsx)(n.li,{children:"Adjustments to system setups or settings that are not explained."}),"\n",(0,s.jsx)(n.li,{children:"Network behaviour suggestive of the spread of viruses via network drives or shared data."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"27-network-viruses",children:"2.7 Network Viruses"}),"\n",(0,s.jsx)(n.p,{children:"By exploiting holes in network protocols or services, network viruses propagate via network connections."}),"\n",(0,s.jsx)(n.p,{children:"Signs of Network Viruses Activity:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Abnormal trends in network traffic or sudden increases in network utilisation."}),"\n",(0,s.jsx)(n.li,{children:"Warnings from antivirus software that viruses are proliferating over network sharing."}),"\n",(0,s.jsx)(n.li,{children:"Identification of questionable behaviour on servers or network equipment."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"28-stealth-viruses",children:"2.8 Stealth Viruses"}),"\n",(0,s.jsx)(n.p,{children:"To avoid being discovered by antivirus software, stealth viruses hide their existence and carry out their operations. They frequently use sophisticated strategies to stay undetected."}),"\n",(0,s.jsx)(n.p,{children:"Signs of Stealth Viruses Activity:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Abnormal trends in network traffic or sudden increases in network utilisation."}),"\n",(0,s.jsx)(n.li,{children:"Suspicious behaviour or symptoms, yet antivirus scans show no viruses."}),"\n",(0,s.jsx)(n.li,{children:"Unusual modifications to file properties or timestamps that suggest manipulation."}),"\n",(0,s.jsx)(n.li,{children:"Anomalies that point to possible illegal access or manipulation in system logs or event data."}),"\n",(0,s.jsx)(n.li,{children:"Unusual activity on the network coming from devices that are compromised."}),"\n",(0,s.jsx)(n.li,{children:"Reports of anomalous activity or decreased system performance on infected systems."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"3-stakeholders",children:"3. Stakeholders"}),"\n",(0,s.jsx)(n.p,{children:"Many stakeholders inside and outside the organisation must work together to respond to viral outbreaks effectively. Important roles are played by the following parties in the incident response process:"}),"\n",(0,s.jsx)(n.h3,{id:"31-it-security-team",children:"3.1 IT Security Team"}),"\n",(0,s.jsx)(n.p,{children:"The IT security team oversees defending the company's digital assets against virus attacks, spotting security issues, and putting preventative and remedial measures in place. Among their responsibilities and roles are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Evaluating the impact and reach of viral outbreaks through the analysis of security event data."}),"\n",(0,s.jsx)(n.li,{children:"Putting security measures in place to stop more illegal access and stop the spread of infections."}),"\n",(0,s.jsx)(n.li,{children:"Working together with the incident response team to control and reduce the effects of viral outbreaks."}),"\n",(0,s.jsx)(n.li,{children:"Carrying out forensic investigations to find the underlying cause of viral occurrences and stop them from happening again."}),"\n",(0,s.jsx)(n.li,{children:"Suggesting security improvements and offering incident response procedure advice to high management and other stakeholders."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"32-incident-response-team",children:"3.2 Incident Response Team"}),"\n",(0,s.jsx)(n.p,{children:"The incident response team oversees managing the organization's response to viral outbreaks and organising cleaning activities. Among their responsibilities and roles are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Determining the extent and intensity of viral epidemics and carrying out the required corrective actions."}),"\n",(0,s.jsx)(n.li,{children:"Assembling staff and resources to lessen and mitigate the effects of viral assaults."}),"\n",(0,s.jsx)(n.li,{children:"Carrying out forensic investigations to ascertain the origin and scope of viral outbreaks and collect data for prospective legal actions."}),"\n",(0,s.jsx)(n.li,{children:"Notifying top management, outside contractors, and clients on crisis response strategies and recovery initiatives."}),"\n",(0,s.jsx)(n.li,{children:"Documenting best practices and lessons gained from viral occurrences will improve the organization's ability to respond to issues."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"33-communication-team",children:"3.3 Communication Team"}),"\n",(0,s.jsx)(n.p,{children:"Regarding viral outbreaks, the communication team oversees making sure that all internal and external stakeholders are informed in a clear and consistent manner. Among their responsibilities and roles are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Creating and carrying out communication strategies to alert relevant parties\u2014such as staff members, clients, and outside suppliers\u2014about viral outbreaks."}),"\n",(0,s.jsx)(n.li,{children:"Creating and distributing communication materials to answer queries and Concerns from stakeholders, including as statements, news releases, and FAQs."}),"\n",(0,s.jsx)(n.li,{children:"Taking part in public relations and media relations campaigns to safeguard the organization's image and lessen the damaging effects of viral outbreaks."}),"\n",(0,s.jsx)(n.li,{children:"Delivering frequent reports on stakeholder engagement and communication activities to the senior leadership and incident response team."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"34-customers",children:"3.4 Customers"}),"\n",(0,s.jsx)(n.p,{children:"Clients are people or organisations who depend on the company's goods or services and might be impacted by viral pandemics. Among their responsibilities and roles are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Notifying the company of any unauthorised or questionable conduct pertaining to their accounts or transactions."}),"\n",(0,s.jsx)(n.li,{children:"Supplying pertinent data or proof to support the incident response team's viral outbreak investigation."}),"\n",(0,s.jsx)(n.li,{children:"Following the advice and directives of the organisation to safeguard personal data and lessen the effects of virus outbreaks."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"35-third-party-vendors",children:"3.5 Third-Party Vendors"}),"\n",(0,s.jsx)(n.p,{children:"Third-party vendors are outside companies that supply the company with products, services, or assistance; they may also have access to its networks, data, and systems. Among their responsibilities and roles are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Working along with the company's incident response team to find and fix security flaws or breaches pertaining to their goods or services."}),"\n",(0,s.jsx)(n.li,{children:"Giving the company help and support while it investigates and fixes any viruses that are damaging its networks or systems."}),"\n",(0,s.jsx)(n.li,{children:"Observing the duties imposed by law and contracts on data security and privacy, including the reporting of security breaches and assistance with incident response."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"4-flow-diagram",children:"4. Flow Diagram"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Virus Outbreak Incident Response Flowchart",src:i(7513).A+"",width:"633",height:"314"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Preparation (Prep): Yellow"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Notify Incident Response Team: This phase is the first of getting ready to deal with a viral epidemic. As soon as a viral epidemic is detected, the incident response team is informed. We use the colour yellow to represent this stage of preparation."}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Identification (Identify): Red"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Contain the Outbreak; Isolate Affected Systems: This phase entails locating the viral outbreak and containing it right away. Measures are implemented to segregate compromised systems and restrict the virus's dissemination. Red is used to represent the vital and urgent nature of this stage."}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Notification (Notif): Violet"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Review and update antivirus definitions; perform full system scans: Notifying pertinent parties and putting initial mitigation measures in place are the main goals of this stage. Various measures are implemented to lessen the influence of the outbreak, including altering login passwords, and doing malware assessments. Malicious activity is also examined, and stakeholders are informed so they may organise a response. This notice and early reaction step are represented by the colour violet."}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Containment (Contain): Sky Blue"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Error-unable to isolate; Escalate to senior management: At this point, attempts are being done to stop the outbreak's spread. Senior management is informed so that the affected systems may be resolved if they cannot be effectively isolated. The containment measures meant to stop the virus's spread are symbolised by the colour sky blue."}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Eradication (Erad): Light Green"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Eradicate Virus; patch vulnerabilities used inn outbreak: The objectives of this step are to eradicate the infection and record incident information. Procedures for removing malware are followed, and incident details are recorded for later use. Light green is used to represent the process of getting rid of the infection and making sure the organization's systems are safe."}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Recovery (Recover): Brown"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Monitor for Further Activity; Initiate Recovery Procedures: At this point, attempts are being undertaken to recover from the viral outbreak and get everything back to normal. Recovery processes are started, and continual surveillance is done to find any new virus activity. The recovery phase, which aims to resume regular operations, is symbolised by the colour brown."}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Post-Incident Actions (Post): Light pink"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Continue Monitoring for Threats; Conduct Periodic system scans: In the last phase, post-event activities are carried out to assess the effectiveness of the reaction and pinpoint areas that require improvement. A post-event evaluation is carried out to evaluate the organization's reaction to the viral epidemic, and ongoing threat monitoring is maintained. The post-event steps intended to improve future response efforts and learn from the occurrence are indicated by the colour light pink."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"5-incident-response-stages",children:"5. Incident Response Stages"}),"\n",(0,s.jsx)(n.h3,{id:"51-preparation",children:"5.1 Preparation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Objective"}),": Putting in place the tools, processes, and regulations required to control virus outbreaks."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Activities"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Putting up a team dedicated to incident response with specific duties."}),"\n",(0,s.jsx)(n.li,{children:"Creating strategies and processes for crisis response, such as escalation routes and communication guidelines."}),"\n",(0,s.jsx)(n.li,{children:"Ensuring preparedness via consistent training and event response practice."}),"\n",(0,s.jsx)(n.li,{children:"Putting security measures and surveillance systems in place to identify and contain viral outbreaks."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Outcome"}),": A well-prepared company that can react to virus outbreaks fast and efficiently."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"52-detection",children:"5.2 Detection"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Objective"}),": The goal of the detection stage is to look for indications of malware outbreaks or illegal access to the networks and systems of the company."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Activities"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Keeping an eye out for questionable behaviour, such strange access patterns, or unauthorised file transfers."}),"\n",(0,s.jsx)(n.li,{children:"Using security information and event management (SIEM) and intrusion detection systems (IDS) to find and stop threats."}),"\n",(0,s.jsx)(n.li,{children:"Separating malicious from genuine activities by analysing anomalies and alarms."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Outcome"}),": Rapid reaction and mitigating actions are made possible by early virus outbreak identification."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"53-analysis",children:"5.3 Analysis"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Objective"}),": Recognising the characteristics and extent of the virus an outbreak."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Activities"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Gathering information and carrying out forensic investigation to determine the origin and severity of the virus infestation."}),"\n",(0,s.jsx)(n.li,{children:"Examining networks and systems that have been infiltrated to identify attack strategies and the impact on compromised data."}),"\n",(0,s.jsx)(n.li,{children:"Recognising the tactics, methods, and procedures (TTPs) of threat actors and indicators of compromise (IOCs)."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Outcome"}),": A thorough comprehension of the virus outbreak, considering its origins, consequences, and sources."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"54-containment",children:"5.4 Containment"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Objective"}),": Help lessen the effect of the virus outbreak and prevent more illegal access or data leaks."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Activities"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dividing up susceptible machines and networks to stop intruders from moving laterally."}),"\n",(0,s.jsx)(n.li,{children:"Putting access restrictions and protections in place to stop illegal access to sensitive information."}),"\n",(0,s.jsx)(n.li,{children:"Limiting or preventing harmful data, software, or network flow to stop more damage."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Outcome"}),": Efficient handling of the virus outbreak, reducing harm to the company's information and infrastructure."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"55-eradication",children:"5.5 Eradication"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Objective"}),": Removing all threats and vulnerabilities from the company's networks and IT systems, including those that still pose a threat."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Activities"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Deleting dangerous files and software and putting hacked computers back in a safe configuration."}),"\n",(0,s.jsx)(n.li,{children:"Upgrading or patching susceptible systems and software to stop further exploitation."}),"\n",(0,s.jsx)(n.li,{children:"Examining and amending security guidelines and policies to fix any flaws or vulnerabilities found."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Outcome"}),": Eradication of all evidence of the virus breakout incident and mitigation of susceptibilities to avoid recurrence."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"56-recovery",children:"5.6 Recovery"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Objective"}),": To restart company operations and return impacted systems and data to normal."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Activities"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Restoring damaged systems and data backups to guarantee the integrity and accessibility of data."}),"\n",(0,s.jsx)(n.li,{children:"Rebuilding or rearranging networks and systems to improve security and stop such incidents in the future."}),"\n",(0,s.jsx)(n.li,{children:"Putting user awareness and education programmes into action to stop virus breakouts in the future."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Outcome"}),": Full restoration of operations and services, together with strengthened security measures to lessen the chance of recurrence."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"57-post--incident-review",children:"5.7 Post- Incident Review"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Objective"}),": Evaluating and pinpointing areas for improvement and lessons gained in the company's reaction to the virus outbreak issue."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Activities"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Evaluating the incident response procedure in-depth to find its advantages, disadvantages, and potential areas for development."}),"\n",(0,s.jsx)(n.li,{children:"Recording best practices and lessons discovered to improve incident response skills in the future."}),"\n",(0,s.jsx)(n.li,{children:"Modifying security setups, rules, and incident response protocols considering review results."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Outcome"}),": Improved incident response capacities and preparedness against virus outbreaks in the future."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"6-terminology",children:"6. Terminology"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Virus Outbreak"}),": A circumstance in which malicious software quickly spreads throughout the computers, networks, or devices of an organisation, usually with the goal of stealing, interfering with, or breaching data."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Incident Response"}),": A methodical and organised procedure designed to locate, contain, and lessen the harm a virus outbreak does to an organization's IT infrastructure to minimise interruption and get things back to normal."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Forensic Analysis"}),": The methodical analysis and assessment of digital data associated with the virus outbreak, such as malware samples, system artefacts, and network logs, to determine the source of the attack, estimate its extent, and supply proof for legal or investigative needs."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Polymorphic Virus"}),": A kind of virus that is challenging for antivirus software to identify and neutralise as it can alter its appearance or signature with every infection. During virus outbreaks, polymorphic viruses are renowned for their capacity to spread quickly and elude detection by conventional security measures."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Endpoint Security"}),": A thorough method for protecting mobile, laptop, and desktop computer systems\u2014known as network endpoints\u2014against online dangers including viruses. To prevent virus outbreaks, endpoint security solutions include host-based intrusion detection systems (HIDS), antivirus software, and endpoint detection and response (EDR) technologies."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Infection Vector"}),": The process or avenue via which a virus enters a network or organisation and infects systems. Email attachments, malicious websites, portable media (like USB drives), and software flaws are frequently used as entry points for virus outbreaks."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Cyber Threat Hunting"}),": Initiative-taking monitoring and scanning of networks and systems for indications of malicious behaviour or possible virus outbreaks. Cyber threat hunting is the process of identifying and eliminating threats before they become widespread viral outbreaks by examining network traffic, system behaviour, and records."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7513:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/voirp1-flowchart-f7df55147c2b2b645316ff72155b5274.jpg"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);