import SystemDocLayout from "../../layout/SystemDocLayout";

const securityDataSections = [
  {
    number: "01",
    title: "Security as a Foundational Layer",
    content: (
      <>
        <p>
          Security in NexUP is not an add-on or post-deployment concern.
        </p>
        <p>
          It is a foundational layer embedded into
          system architecture, infrastructure, and workflows.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "Defense-in-Depth Architecture",
    content: (
      <>
        <p>
          NexUP applies multiple layers of security controls
          across infrastructure, services, and interfaces.
        </p>
        <p>
          No single control is relied upon
          as the sole line of defense.
        </p>
      </>
    ),
  },

  {
    number: "03",
    title: "Least Privilege by Default",
    content: (
      <>
        <p>
          Access within the system is granted
          based on strict necessity.
        </p>
        <p>
          Components, services, and operators
          receive only the minimum permissions required.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "Isolation of Critical Systems",
    content: (
      <>
        <p>
          Critical system components
          are isolated from general access paths.
        </p>
        <p>
          Isolation limits blast radius
          in the event of failure or compromise.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Secure Identity and Authentication",
    content: (
      <>
        <p>
          Identity validation and authentication
          are enforced using secure, modern mechanisms.
        </p>
        <p>
          Authentication systems are designed
          to resist unauthorized access and abuse.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Monitoring and Anomaly Detection",
    content: (
      <>
        <p>
          NexUP continuously monitors system activity
          for abnormal behavior.
        </p>
        <p>
          Anomalies are treated as signals
          for investigation, not ignored noise.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "Incident Response Readiness",
    content: (
      <>
        <p>
          Security incidents are assumed possible
          and planned for in advance.
        </p>
        <p>
          Response processes focus on containment,
          analysis, recovery, and prevention.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "Secure Development Practices",
    content: (
      <>
        <p>
          Security considerations are integrated
          into development and deployment workflows.
        </p>
        <p>
          Changes are reviewed for security impact
          before entering production environments.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "External Dependencies and Risk",
    content: (
      <>
        <p>
          External services and dependencies
          are evaluated for security risk.
        </p>
        <p>
          Trust boundaries are explicitly defined
          and continuously reassessed.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "Security as a Continuous Discipline",
    content: (
      <>
        <p>
          Security is not static or complete.
        </p>
        <p>
          It evolves with system scale,
          threat models, and operational reality.
        </p>
        <p>
          Security decisions are treated
          as long-term architectural commitments.
        </p>
      </>
    ),
  },
];

export default function Security() {
  return (
    <SystemDocLayout
      indicator="System Integrity · Security"
      title="SECURITY"
      intro="Security in NexUP is enforced through layered defenses, isolation, and continuous system awareness."
      sections={securityDataSections}
      anchorSections={["01", "03", "05", "07", "09"]}
      defaultOpen="01"
      closing="Security is not claimed. It is continuously maintained."
      cta={
  <a href="/system-docs/security" className="cta cta-primary">
    View System Security
  </a>
}
    />
  );
}
