import SystemDocLayout from "../../layout/SystemDocLayout"; 

const helpCenterSections = [
  {
    number: "01",
    title: "Getting Started",
    content: (
      <>
        <p>
          This section provides an overview of NexUP
          and how to begin using the system.
        </p>
        <p>
          It explains core concepts such as environments,
          navigation, and supported platforms.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "Accounts & Access",
    content: (
      <>
        <p>
          Information related to account creation,
          sign-in, and access continuity is documented here.
        </p>
        <p>
          This includes session behavior,
          access restrictions, and recovery basics.
        </p>
      </>
    ),
  },

  {
    number: "03",
    title: "Worlds & Environments",
    content: (
      <>
        <p>
          This section explains how NexUP environments operate.
        </p>
        <p>
          Topics include public and private worlds,
          persistence, state, and environment boundaries.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "Creation & Tools",
    content: (
      <>
        <p>
          Guidance related to creating and interacting
          with tools and environments within NexUP.
        </p>
        <p>
          This section outlines what can be created,
          publishing boundaries, and ownership basics.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Safety, Trust & Privacy",
    content: (
      <>
        <p>
          NexUP safety, trust, and privacy are enforced
          through system architecture and documentation.
        </p>
        <p>
          Detailed explanations are available in
          dedicated system pages.
        </p>
        <p>
          Refer to the Approach, Trust, Privacy & Data,
          Transparency, and Guidelines pages for clarity.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Billing & Plans",
    content: (
      <>
        <p>
          Information about billing, plans,
          and pricing models will be published here.
        </p>
        <p>
          During early stages, access may be provided
          without active billing.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "Troubleshooting",
    content: (
      <>
        <p>
          This section addresses common issues
          related to access, performance, and behavior.
        </p>
        <p>
          Known limitations and temporary issues
          are documented where applicable.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "System Status",
    content: (
      <>
        <p>
          Real-time system availability
          and incident information are provided here.
        </p>
        <p>
          For live updates, refer to the DNS Status page.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "Contact Support",
    content: (
      <>
        <p>
          Contact support if your issue cannot be resolved
          through system documentation or troubleshooting.
        </p>
        <p>
          Support requests are reviewed
          with context and system integrity in mind.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "Help Center Updates",
    content: (
      <>
        <p>
          The Help Center evolves alongside the NexUP system.
        </p>
        <p>
          Documentation is updated as features,
          constraints, and processes change.
        </p>
      </>
    ),
  },
];


export default function HelpCenter() {
  return (
    <SystemDocLayout
      indicator="Support · Help Center"
      title="HELP CENTER"
      intro="The Help Center provides documentation and guidance for understanding and using NexUP systems."
      sections={helpCenterSections}
      anchorSections={["01", "03", "05" , "09"]}
      defaultOpen="01"
      closing="Most issues can be resolved through system understanding. Support is available when needed."
      cta={
  <a href="/contact" className="cta cta-primary">
   Contact US
  </a>
}
    />
  );
}
