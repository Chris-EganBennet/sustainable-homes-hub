import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";

// Simplified Search icon component
const Search = () => (
  <svg 
    className="w-4 h-4 mr-1" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default function SustainableHomesHub() {
    return (
      <main className="p-8 space-y-10">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Delivering Sustainable Homes Hub</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Your go-to knowledge platform for delivering modern, sustainable, offsite homes using MMC.
          </p>
          <div className="max-w-md mx-auto flex items-center gap-2">
            <Input placeholder="Search the hub..." />
            <Button><Search className="w-4 h-4 mr-1" /> Search</Button>
          </div>
        </section>
  
        <Tabs defaultValue="mmc" className="space-y-6">
          <TabsList className="grid grid-cols-7 gap-2">
            <TabsTrigger value="mmc">Introduction</TabsTrigger>
            <TabsTrigger value="planning">Planning & Design</TabsTrigger>
            <TabsTrigger value="delivery">Delivery & Procurement</TabsTrigger>
            <TabsTrigger value="build">Build & Operate</TabsTrigger>
                    <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
                                      <TabsTrigger value="learning">Learning & Events</TabsTrigger>
            <TabsTrigger value="media">Media Hub</TabsTrigger>
          </TabsList>
  
          <TabsContent value="mmc">
    <Card>
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p>The construction industry is under increasing pressure to deliver more homes, faster and more sustainably. The climate crisis, tightening budgets, and growing housing demand are challenging how we build—and for whom. Clients, developers, and housing providers need trusted guidance, practical tools, and collaborative frameworks to navigate this evolving landscape.</p>
  
        <p>The <strong>Delivering Sustainable Homes Hub</strong> was developed by the Offsite Alliance, in partnership with its members and wider industry collaborators, to meet this need. It supports the aims of the Affordable Homes Programme and responds to the growing demand for better education, clarity, and collaboration around Modern Methods of Construction (MMC).</p>
  
        <p>This platform turns lessons learned into practical advice, helping clients and project teams deliver high-quality, sustainable homes using MMC. All content is presented in clear, non-technical language tailored for clients, developers, housing associations, local authorities, and construction professionals.</p>
  
        <h3 className="text-xl font-semibold">What This Hub Aims to Do</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Increase Knowledge:</strong> Centralise information on MMC, offsite manufacturing, and housing sector innovation to empower better decision-making.</li>
          <li><strong>Support Sustainable Housing:</strong> Provide guidance, case studies, and best practices to help stakeholders adopt greener and more efficient construction methods.</li>
          <li><strong>Foster Collaboration:</strong> Enable cross-sector learning, connect clients with delivery partners, and support industry-wide engagement.</li>
          <li><strong>Share Best Practices:</strong> Make success repeatable by showcasing proven delivery strategies, tools, and real-world case studies.</li>
        </ul>
  
        <Accordion type="multiple" className="space-y-6 pt-6">
          <AccordionItem value="strategic-drivers">
    <AccordionTrigger>Strategic Drivers</AccordionTrigger>
    <AccordionContent className="space-y-4">
            <h3 className="text-xl font-semibold">Policy Drivers</h3>
              <p>Government policies continue to shape the future of housing delivery. Key policies influencing offsite and sustainable construction include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Future Homes Standard</li>
                <li>Affordable Homes Programme</li>
                <li>Construction Playbook & MMC Mandate</li>
                <li>Levelling Up White Paper</li>
                <li>Net Zero Strategy & Building Regulations Uplift</li>
                <li>Local Authority Climate Declarations</li>
              </ul>
  
              <h4 className="text-lg font-semibold mt-6">Market Growth Trends</h4>
              <p>The MMC sector is rapidly evolving, with several key trends driving adoption and innovation:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Increased investment in volumetric and panelised factories</li>
                <li>Rising demand for net zero and energy-efficient homes</li>
                <li>Procurement reform to favour MMC-friendly frameworks</li>
                <li>Greater engagement from institutional investors and housing associations</li>
                <li>Innovation in product platforms and component integration</li>
                <li>Skills development focused on digital, offsite, and collaborative delivery</li>
              </ul>
  
              <h3 className="text-xl font-semibold">Strategic Drivers Overview</h3>
            <p className="text-base">Government policy, funding criteria, ESG strategies, productivity targets, health & safety, and demographic trends all shape the strategic framework within which projects operate. Early clarity on these factors helps guide appropriate system selection, delivery models, and success metrics.</p>
              <h3 className="text-xl font-semibold">Project Drivers</h3>
            <p className="text-base">At the project level, decision-making must consider site constraints, transport logistics, supply chain access, regulatory requirements, planning context, legacy factors, and tenure models. Aligning these elements with strategic intent ensures project viability and performance.</p>
              <img src="/mnt/data/4d42ab6e-b16a-4648-bf70-541800ad3bd5.png" alt="Strategic Drivers Diagram" className="w-full rounded border border-gray-300" />
              <p className="text-sm text-gray-600">This diagram highlights the complexity of aligning strategic and project-level drivers with appropriate construction methods, reinforcing the importance of early-stage value definition.</p>
  
              
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="what-is-mmc">
    <AccordionTrigger>What is MMC?</AccordionTrigger>
    <AccordionContent>
      <p>Offsite construction, as one of many modern methods of construction, has the potential to change the way the construction industry builds and operates. It could also address some of the UK industry’s most pressing challenges such as low productivity, skills and people shortages and to tackle the climate crisis.</p>
  
      <p>A culture of “lowest cost wins” has plagued the construction sector for decades, leading to poor quality, dog-eat-dog insolvencies and low levels of component reuse. When construction projects are procured against a framework of strategic and project drivers in tandem within a well-defined scope, results can be achieved that are not just economical but deliver quality buildings with long-term benefits to clients and project teams.</p>
  
      <p>Standardisation and pre-assembly (often referred to as MMC) are not new practices or concepts within the construction sector, but technologies such as BIM along with modern supply chain capabilities and management practices make their application even more valuable to modern construction projects. As project teams collaborate deeper with supply chains and build more standardisation and pre-assembly into construction projects, the re-usability of their effort, design data and project metrics will become increasingly more reliable and valuable.</p>
  
      <p>Modern Methods of Construction (MMC) encompass a wide range of offsite manufacturing and onsite assembly techniques. Use of MMC can vary from a kitchen or bathroom pod assembled offsite in a factory and transported to the site –to fully factory-built volumetric modules.</p>
  
      <p>Other terms, as well as MMC, are often used interchangeably – including Modular Construction, Offsite Construction and Offsite Manufacture (OSM). Industrialised construction and optimised construction.</p>
  
      <p>The key idea behind MMC is to shift construction away from traditional, labour-intensive, and often wasteful methods to more streamlined and controlled processes. In modern construction, components or entire building modules are manufactured in a factory or offsite facility and then transported to the construction site for assembly. This approach offers several advantages, including faster construction timelines, reduced waste, improved quality control, and often, better energy efficiency in the final building.</p>
  
      <p>Modern Methods of Construction (MMC) or offsite construction refers to the building or part of the building being constructed in a factory, and assembled on-site.</p>
  
      <p>In April 2019, the government published the new Modern Methods of Construction (MMC) Definition Framework. This document is one of the outputs of the Ministry of Housing, Communities and Local Government MMC Working Group.</p>
  
      <p>The framework sets out seven categories of offsite starting with structural building systems or elements, through to non-structural assemblies and elements, through to category 6 which refers to material innovation that reduces site labour and finally 7 referring to process innovation that reduces site labour.</p>
  
      <p>This document will provide guidance on Categories 1, 2 and 5 as the main systems used for residential buildings. The guide will also identify some Category 3 commonly utilised components already used as standard in the industry.</p>
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="mmc-categories">
    <AccordionTrigger>MMC Categories</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Category 1: Volumetric Systems</strong> – Fully formed modules assembled offsite.</li>
                <li><strong>Category 2: Panelised Systems</strong> – Flat-packed structural panels assembled onsite.</li>
                <li><strong>Category 5: Non-structural Assemblies</strong> – Pre-assembled pods and MEP components.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="dfma">
            <AccordionTrigger>DfMA Principles</AccordionTrigger>
            <AccordionContent>
              <p>Design for Manufacture and Assembly (DfMA) simplifies the construction process by prioritizing standardization, repeatability, and coordinated early design. These principles are core to making MMC efficient and scalable.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  </TabsContent>
  
  <TabsContent value="planning">
    <Card>
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Plan for Success</h2>
        <Accordion type="multiple" className="space-y-4">
          
          <AccordionItem value="adoption">
            <AccordionTrigger>MMC Adoption</AccordionTrigger>
            <AccordionContent>
              <p>Explore the drivers and barriers to MMC adoption including market readiness, perceived risk, lack of familiarity, and contractual limitations. Learn how early engagement and aggregation of demand can unlock efficiencies.</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="value">
            <AccordionTrigger>The Value Toolkit</AccordionTrigger>
            <AccordionContent>
              <p>The Value Toolkit helps you structure decisions around social, environmental, and economic impact—not just cost. Use it to evaluate options through a value lens and guide early design and procurement choices.</p>
              <p>It offers structured pathways to define value profiles, align objectives with stakeholder priorities, and embed measurable outcomes in procurement and delivery models. Visit the Value Toolkit resource page to access templates and examples.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="design-freeze">
            <AccordionTrigger>Design Freeze & Programme</AccordionTrigger>
            <AccordionContent>
              <p>MMC delivery relies on locked design early in the process. Introducing design freeze points helps clarify scope, assign responsibility, and avoid costly late changes. Activities must be stacked and sequenced to reflect offsite manufacturing lead times.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="optioneering">
            <AccordionTrigger>Optioneering & Suitability</AccordionTrigger>
            <AccordionContent>
              <p>Not all MMC solutions suit all sites. Use optioneering to test MMC categories against site constraints, building height, access, and planning context. Resources include feasibility checklists and system selection matrices.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="insurance-annex">
            <AccordionTrigger>Insurance Considerations (PAS 8700 Annex A)</AccordionTrigger>
            <AccordionContent>
              <p>To secure finance and warranty cover, engage early with insurers using guidance in Annex A of PAS 8700. Discuss:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>MMC category risk profiles</li>
                <li>Inspection and certification routes</li>
                <li>Interfaces and factory QA systems</li>
                <li>Completion documentation required</li>
              </ul>
              <p>Use our downloadable insurance engagement checklist to guide these discussions.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="insurance">
            <AccordionTrigger>Warranty & Insurance Considerations</AccordionTrigger>
            <AccordionContent>
              <p>MMC may require specialist warranties or advance engagement with lenders and insurers. Address system certification, inspection points, and quality assurance to support underwriting confidence and resident protection.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="roles">
            <AccordionTrigger>MMC Delivery Roles</AccordionTrigger>
            <AccordionContent>
              <p>PAS 8700 outlines key appointments required to ensure MMC success. These include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>MMC Adviser:</strong> Advises on system selection, supply chain engagement, and integration across RIBA stages.</li>
                <li><strong>Principal Designer:</strong> Ensures design safety and compliance, collaborating closely with manufacturers and installers.</li>
                <li><strong>Principal Contractor:</strong> Coordinates site readiness, interfaces, and installation, while managing warranties and inspections.</li>
              </ul>
              <p>Define roles early and use our downloadable responsibility matrix to allocate duties across the team.</p>
              <Button className="mt-4">Download Responsibility Matrix</Button>
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="briefing">
            <AccordionTrigger>Briefing Checklist (PAS 8700 Annex B)</AccordionTrigger>
            <AccordionContent>
              <p>Use this checklist to ensure your MMC project is properly scoped and aligned with PAS 8700 from the outset. It includes prompts on:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Value definition and outcome priorities</li>
                <li>System compatibility and interfaces</li>
                <li>Early-stage roles and responsibilities</li>
                <li>Information exchange and regulatory reviews</li>
              </ul>
              <p>Download and adapt it to guide your strategic briefing process.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="toolkit">
            <AccordionTrigger>Planning Toolkit Resources</AccordionTrigger>
            <AccordionContent>
              <p>Access downloadable templates, guides, and checklists including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Optioneering Decision Matrix</li>
                <li>MMC Suitability Checklist</li>
                <li>Design Responsibility Matrix</li>
                <li>Value Profile Template</li>
                <li>Engagement and Stakeholder Map</li>
              </ul>
              <p>These tools support consistent and collaborative planning across MMC projects, ensuring better outcomes from the start.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button className="mt-4">Download Full Planning Toolkit</Button>
      </CardContent>
    </Card>
  </TabsContent>
  
          <TabsContent value="delivery">
    <Card>
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Delivery & Procurement</h2>
        <Accordion type="multiple" className="space-y-4">
          <AccordionItem value="delivery-intro">
            <AccordionTrigger>Introduction to MMC Delivery</AccordionTrigger>
            <AccordionContent>
              <p>Successful MMC delivery requires early contractor involvement, coordination across the supply chain, and scheduling aligned to manufacturing lead times. This section introduces foundational delivery principles for MMC.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="procurement-models">
            <AccordionTrigger>Procurement Models & Frameworks</AccordionTrigger>
            <AccordionContent>
              <p>Explore available MMC procurement routes including two-stage design & build, construction management, and manufacturing-led contracts. Learn how to use existing frameworks and develop bespoke contracts with integrated risk profiles.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="payment-profile">
            <AccordionTrigger>Payment Profiles & Offsite Contracting</AccordionTrigger>
            <AccordionContent>
              <p>Understand how MMC affects payment structures—factory-stage milestones, inspection points, and value certification processes. Learn how to align financial flows with manufacturing delivery using visual cash flow models.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="inspection-and-assurance">
            <AccordionTrigger>Inspection & Quality Assurance</AccordionTrigger>
            <AccordionContent>
              <p>MMC demands rigorous QA processes. Explore the use of digital tools like SnagR, factory witness plans, photographic evidence, and sign-off checkpoints for insurance and warranty compliance.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="supplier-relationships">
            <AccordionTrigger>Working with Suppliers & Manufacturers</AccordionTrigger>
            <AccordionContent>
              <p>MMC delivery often relies on long-term supplier relationships. Learn how to assess supplier capability, secure production slots, manage interfaces, and develop performance-linked partnerships.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="delivery-resources">
            <AccordionTrigger>Delivery Toolkit Resources</AccordionTrigger>
            <AccordionContent>
              <p>Access templates and tools including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Offsite Risk Register Template</li>
                <li>Delivery Programme Planner</li>
                <li>MMC Payment Profile Charts</li>
                <li>QA & Inspection Checklist</li>
                <li>Manufacturer Due Diligence Guide</li>
              </ul>
              <p>These resources help you manage delivery complexity and align procurement with performance outcomes.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button className="mt-4">Download Full Delivery Toolkit</Button>
      </CardContent>
    </Card>
  </TabsContent>
  
          <TabsContent value="build">
    <Card>
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Build & Operate</h2>
        <Accordion type="multiple" className="space-y-4">
          <AccordionItem value="build-logistics">
            <AccordionTrigger>Site Readiness & Logistics</AccordionTrigger>
            <AccordionContent>
              <p>Ensure sites are prepared for precision MMC installation. This includes groundworks, tolerances, crane access, delivery route planning, and receiving zones for modules or panels.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="installation">
            <AccordionTrigger>Installation & Interfaces</AccordionTrigger>
            <AccordionContent>
              <p>Effective coordination of installation crews and seamless connection between factory-built and site-built elements is essential. Access sequencing guides and interface coordination templates here.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="handover">
            <AccordionTrigger>Handover & Commissioning</AccordionTrigger>
            <AccordionContent>
              <p>Digital handover packages, commissioning schedules, and sign-off tools ensure buildings are delivered ready for occupancy. Learn best practices for structured walkthroughs and building readiness certification.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="aftercare">
            <AccordionTrigger>Aftercare, Maintenance & Adaptability</AccordionTrigger>
            <AccordionContent>
              <p>Offsite homes can deliver long-term value with well-planned aftercare. Discover maintenance schedules, responsive repair systems, and the potential for future adaptability and upgradeability.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="handover-completion">
            <AccordionTrigger>Completion Information & Occupier Handover</AccordionTrigger>
            <AccordionContent>
              <p>PAS 8700 requires clear output standards at completion. Ensure your O&M manuals include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Product/system specification and warranties</li>
                <li>Photographic and digital build records</li>
                <li>Commissioning and test data</li>
                <li>User-friendly occupier handover packs</li>
              </ul>
              <p>Align these with your QA process to enable compliance, insurance support, and a better resident experience.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="build-resources">
            <AccordionTrigger>Build Toolkit Resources</AccordionTrigger>
            <AccordionContent>
              <p>Download practical tools including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Site Readiness Checklist</li>
                <li>Installation Coordination Flowchart</li>
                <li>Handover Sign-Off Template</li>
                <li>Maintenance & Warranty Schedule</li>
                <li>Adaptability Assessment Guide</li>
              </ul>
              <p>These resources help support a seamless transition from build to occupancy and long-term building performance.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button className="mt-4">Download Full Build Toolkit</Button>
      </CardContent>
    </Card>
  </TabsContent>
                <TabsContent value="case-studies">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold">Case Studies</h2>
                <p>Explore real-world examples of how MMC has been used to deliver sustainable homes across the UK. These case studies highlight challenges, solutions, and outcomes that demonstrate the value of modern construction approaches.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Project A – Modular Housing for Social Rent (London):</strong> Delivered 100 units using Category 1 MMC with reduced programme by 30% and EPC A ratings across all homes.</li>
                  <li><strong>Project B – Rural Passivhaus Scheme (North Yorkshire):</strong> Panelised system with integrated DfMA principles; design freeze achieved within 6 weeks.</li>
                  <li><strong>Project C – Urban Infill with Category 5 Pods (Birmingham):</strong> Bathroom and kitchen pods integrated into traditional structures, saving £1.2m through defect reduction and quality assurance protocols.</li>
                  <li><strong>Project D – Mixed-tenure Estate Regeneration (Manchester):</strong> Aggregation of demand enabled volume discounts and repeatable designs across phases.</li>
                </ul>
                <Button className="mt-4">Download Full Case Study Pack</Button>
              </CardContent>
            </Card>
          </TabsContent>
                <TabsContent value="learning">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold">Learning & Events</h2>
                <p>Stay up to date with industry webinars, training workshops, and roundtable events hosted by the Offsite Alliance and partners. Learn from live sessions or explore recordings at your own pace.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>📅 Upcoming Webinar: Scaling MMC for Affordable Housing – 12 May 2025</li>
                  <li>🎓 CPD Workshop: DfMA in Design Practice – On-demand access</li>
                  <li>💬 Roundtable Replay: Risk and Reward in MMC Procurement</li>
                </ul>
                <Button className="mt-4">Register for Events</Button>
              </CardContent>
            </Card>
          </TabsContent>
  
          <TabsContent value="media">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold">Media Hub</h2>
                <p>Dive into our growing library of interviews, podcasts, and videos. Get insights from MMC pioneers, policy makers, and project leaders shaping the future of housing delivery.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>🎙️ Podcast: Making Offsite Work – with Gaynor Tennant & guests</li>
                  <li>🎥 Video: Walkthrough of a Volumetric Housing Project</li>
                  <li>📚 Deep Dive: The Future of Affordable Sustainable Homes (PDF)</li>
                </ul>
                <Button className="mt-4">Browse All Media</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
    </main>
  );
}