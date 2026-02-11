const { Document, Packer, Paragraph, TextRun, HeadingLevel } = require('docx');
const fs = require('fs');
const path = require('path');

const doc = new Document({
  sections: [{
    children: [
      new Paragraph({
        text: 'ALEJANDRO BALAM MOTA CARRILLO',
        heading: HeadingLevel.TITLE,
        bold: true,
        spacing: { after: 80 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: '(725) 260 – 6690 · balam_mota@berkeley.edu · San Francisco, CA · LinkedIn: https://www.linkedin.com/in/alejandro-balam-mota-carrillo-666a23152' }),
        ],
        spacing: { after: 400 },
      }),
      new Paragraph({
        text: 'PROFESSIONAL SUMMARY',
        heading: HeadingLevel.HEADING_1,
        bold: true,
        spacing: { before: 200, after: 200 },
      }),
      new Paragraph({
        text: 'Process, data, and product professional in semiconductor manufacturing. Took a deliberate step into SaaS to build project management and C-level negotiation skills, with the goal of returning to the semiconductor industry in a project or product management role. Every initiative is driven by business decisions and framed by holistic impact on processes, compliance, and stakeholder outcomes.',
        spacing: { after: 400 },
      }),
      new Paragraph({
        text: 'PROFESSIONAL EXPERIENCE',
        heading: HeadingLevel.HEADING_1,
        bold: true,
        spacing: { before: 200, after: 200 },
      }),
      new Paragraph({
        text: 'Solutions Engineer',
        heading: HeadingLevel.HEADING_2,
        bold: true,
        spacing: { after: 100 },
      }),
      new Paragraph({
        text: 'Mapistry Inc., Berkeley, CA',
        bold: true,
        spacing: { after: 50 },
      }),
      new Paragraph({
        text: 'Aug 2025 – Jan 2026',
        italics: true,
        spacing: { after: 100 },
      }),
      new Paragraph({
        text: 'Intentional step into SaaS to build project management and C-level negotiation skills; objective: return to semiconductors in a PM/Product capacity.',
        italics: true,
        spacing: { after: 200 },
      }),
      new Paragraph({
        text: '• Owned end-to-end customer implementations as technical and project lead; aligned internal and C-level stakeholder expectations with delivery, enabling deployments across 700+ sites nationwide with ~30% faster time-to-go-live and >95% data completeness at launch.',
        spacing: { after: 80 },
      }),
      new Paragraph({
        text: '• To reduce implementation risk and manual errors, drove the business decision to invest in REST API integrations; designed and executed automated data ingestion and validation (1000+ records/month), resulting in ~40% less manual effort, ~60% fewer data errors, and scalable onboarding.',
        spacing: { after: 80 },
      }),
      new Paragraph({
        text: '• Translated platform capabilities into compliance and business outcomes for decision-makers; led technical evaluations, demos, and proof-of-value engagements, contributing to ~45% PoV-to-contract conversion and $500K USD in qualified pipeline.',
        spacing: { after: 80 },
      }),
      new Paragraph({
        text: '• Treated onboarding as a change-management lever; delivered training and enablement for 200+ end users and 50+ site administrators, increasing monthly active usage from ~35% to ~75% within 90 days and reducing post-launch support tickets by ~25%.',
        spacing: { after: 200 },
      }),
      new Paragraph({
        text: 'Automation Engineer – Def Met',
        heading: HeadingLevel.HEADING_2,
        bold: true,
        spacing: { after: 100 },
      }),
      new Paragraph({
        text: 'Intel Corporation, Hillsboro, OR',
        bold: true,
        spacing: { after: 50 },
      }),
      new Paragraph({
        text: 'Jan 2025 – Aug 2025',
        italics: true,
        spacing: { after: 200 },
      }),
      new Paragraph({
        text: '• Aligned metrology strategy with operational goals: shifted defect resolution from multi-day automation queues to near-real-time insights via Python-based analytics (4M+ records), improving operational efficiency by ~30% and enabling faster fab-wide response.',
        spacing: { after: 80 },
      }),
      new Paragraph({
        text: '• Owned Statistical Process Control strategy to support quality and yield objectives; improved early detection of process deviations across fab operations.',
        spacing: { after: 80 },
      }),
      new Paragraph({
        text: '• To scale defect classification and free engineering capacity for higher-value work, led the decision to deploy ML; designed, trained, and deployed Random Forest models for automated wafer defect classification, improving labeling accuracy and reducing manual review by ~40%.',
        spacing: { after: 200 },
      }),
      new Paragraph({
        text: 'Process Engineer',
        heading: HeadingLevel.HEADING_2,
        bold: true,
        spacing: { after: 100 },
      }),
      new Paragraph({
        text: 'Intel Corporation, Hillsboro, OR',
        bold: true,
        spacing: { after: 50 },
      }),
      new Paragraph({
        text: 'July 2023 – Jan 2025',
        italics: true,
        spacing: { after: 200 },
      }),
      new Paragraph({
        text: '• In response to reporting gaps affecting maintenance decisions and EPA compliance, designed and owned automated SQL pipelines to track 800+ tools, reducing reporting time by 50% and enabling data-driven maintenance decisions across the organization.',
        spacing: { after: 80 },
      }),
      new Paragraph({
        text: '• To give operations and leadership a single source of truth for maintenance KPIs, built and deployed interactive Power BI dashboards with full fleet coverage; contributed to 40% fewer unmaintained machines reported to EPA and standardized process reporting.',
        spacing: { after: 80 },
      }),
      new Paragraph({
        text: '• Led root cause analyses and trend detection that eliminated tool downtime in Q4; connected data insights to operational and compliance outcomes.',
        spacing: { after: 80 },
      }),
      new Paragraph({
        text: '• Identified knowledge-access as a bottleneck for technicians; led design and deployment of an AI-powered chatbot for SOPs and tool documentation, improving technician efficiency and standardizing practices.',
        spacing: { after: 80 },
      }),
      new Paragraph({
        text: '• Led a cross-functional initiative to optimize maintenance spend; through process monitoring and inventory optimization, delivered 30% maintenance cost reduction ($1.2M/year savings) while maintaining compliance and uptime.',
        spacing: { after: 80 },
      }),
      new Paragraph({
        text: '• Aligned with corporate sustainability and regulatory strategy by partnering with Berkeley researchers on REACH-compliant chemical alternatives.',
        spacing: { after: 200 },
      }),
      new Paragraph({
        text: 'Consulting · Circular economy & sustainability',
        heading: HeadingLevel.HEADING_2,
        bold: true,
        spacing: { after: 100 },
      }),
      new Paragraph({
        text: 'SEW-EURODRIVE (master\'s project), UC Berkeley',
        bold: true,
        spacing: { after: 50 },
      }),
      new Paragraph({
        text: '2022–2023',
        italics: true,
        spacing: { after: 200 },
      }),
      new Paragraph({
        text: '• Applied Design Thinking to reframe the client ask into a broader circular-economy strategy: modular inverter redesign, post-consumer return logistics, and industry–academia collaboration.',
        spacing: { after: 80 },
      }),
      new Paragraph({
        text: '• Delivered modular redesign proposal for component reuse; designed conceptual return system (bins at client sites, reverse logistics to plant in Germany); built collaboration map and governance for open innovation; supported by expert interviews and qualitative/quantitative analysis.',
        spacing: { after: 200 },
      }),
      new Paragraph({
        text: 'Consulting · Market research & product development',
        heading: HeadingLevel.HEADING_2,
        bold: true,
        spacing: { after: 100 },
      }),
      new Paragraph({
        text: 'Bespoke Biotherapeutics (student consulting), UC Berkeley',
        bold: true,
        spacing: { after: 50 },
      }),
      new Paragraph({
        text: '2022–2023',
        italics: true,
        spacing: { after: 200 },
      }),
      new Paragraph({
        text: '• Market and stakeholder analysis for breast cancer immunotherapy; developed interactive panel prototype and key messages with oncology experts; user and message testing with physicians and patients; workshops and impact evaluation; partnership development with medical institutions.',
        spacing: { after: 200 },
      }),
      new Paragraph({
        text: 'EDUCATION',
        heading: HeadingLevel.HEADING_1,
        bold: true,
        spacing: { before: 200, after: 200 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'University of California, Berkeley', bold: true }),
          new TextRun({ text: ' · May 2023' }),
        ],
        spacing: { after: 80 },
      }),
      new Paragraph({
        text: 'M.S. Chemical Engineering, Product Development Program — combines advanced technical depth in semiconductor materials with business and new product development (NPD) training.',
        spacing: { after: 200 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Autonomous Metropolitan University', bold: true }),
          new TextRun({ text: ' · June 2021' }),
        ],
        spacing: { after: 80 },
      }),
      new Paragraph({
        text: 'B.Sc. Chemical Engineering — capstone: "Polymeric cathodes for Lithium-ion electrochemical supercapacitors process design."',
        spacing: { after: 200 },
      }),
      new Paragraph({
        text: 'SKILLS',
        heading: HeadingLevel.HEADING_1,
        bold: true,
        spacing: { before: 200, after: 200 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Analytics & BI: ', bold: true }),
          new TextRun({ text: 'SQL, Power BI, Python, Data Modeling, Data Pipelines, Root Cause Analysis' }),
        ],
        spacing: { after: 80 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Machine Learning: ', bold: true }),
          new TextRun({ text: 'Model Training, Automatic Defect Classification (ADC), Supervised Learning' }),
        ],
        spacing: { after: 80 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Tools & Platforms: ', bold: true }),
          new TextRun({ text: 'REST APIs, SaaS Implementations, AWS (basic), Git, Azure DevOps' }),
        ],
        spacing: { after: 80 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Web & product: ', bold: true }),
          new TextRun({ text: 'HTML, CSS, JavaScript, front-end development, static site deployment, UI/UX, product design' }),
        ],
        spacing: { after: 80 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Strategy & Delivery: ', bold: true }),
          new TextRun({ text: 'Stakeholder Communication, C-level Negotiation, Business Case Presentation, Project Management' }),
        ],
        spacing: { after: 80 },
      }),
    ],
  }],
});

Packer.toBuffer(doc).then((buffer) => {
  const outPath = path.join(__dirname, 'Alejandro-Balam-Mota-Carrillo-Resume.docx');
  fs.writeFileSync(outPath, buffer);
  console.log('Resume guardado en:', outPath);
});
