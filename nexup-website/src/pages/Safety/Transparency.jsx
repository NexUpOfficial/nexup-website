import SystemDocLayout from "../../layout/SystemDocLayout";

const transparencySections = [
  {
    number: "01",
    title: "Transparency as a Design Principle",
    content: (
      <>
        <p>
          Transparency in NexUP is not limited to publishing statements
          or responding to inquiries.
        </p>
        <p>
          It is treated as a design principle embedded into
          system architecture and documentation.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "What the System Does",
    content: (
      <>
        <p>
          NexUP documents its core capabilities, system boundaries,
          and operational intent.
        </p>
        <p>
          Users are informed about how environments operate,
          what actions are supported, and where system control exists.
        </p>
      </>
    ),
  },

  {
    number: "03",
    title: "What the System Does Not Do",
    content: (
      <>
        <p>
          Transparency includes clearly stating limitations.
        </p>
        <p>
          NexUP documents behaviors and actions
          that the system intentionally does not perform.
        </p>
        <p>
          Absence of capability is treated as a feature,
          not an omission.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "Visibility of Constraints",
    content: (
      <>
        <p>
          System constraints are made visible where possible.
        </p>
        <p>
          Limits on automation, intelligence, access,
          and modification are documented explicitly.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Decision-Making Boundaries",
    content: (
      <>
        <p>
          NexUP distinguishes between automated decisions,
          assisted decisions, and human decisions.
        </p>
        <p>
          Users are informed when system behavior
          is influenced by automated processes.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Data Handling Transparency",
    content: (
      <>
        <p>
          Data usage within NexUP follows documented purposes
          and defined retention boundaries.
        </p>
        <p>
          The system avoids opaque data flows
          where clarity can be provided.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "System Change Disclosure",
    content: (
      <>
        <p>
          Significant system changes are disclosed
          when they affect user experience, control,
          or trust assumptions.
        </p>
        <p>
          Changes are treated as architectural events,
          not silent updates.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "Incident Acknowledgment",
    content: (
      <>
        <p>
          When incidents occur, NexUP prioritizes acknowledgment
          over deflection.
        </p>
        <p>
          Transparency includes communicating impact,
          scope, and corrective measures where appropriate.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "Limits of Transparency",
    content: (
      <>
        <p>
          Not all system details can be publicly disclosed.
        </p>
        <p>
          NexUP balances transparency with security,
          privacy, and system integrity considerations.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "Transparency as an Ongoing Commitment",
    content: (
      <>
        <p>
          Transparency evolves alongside the system.
        </p>
        <p>
          Documentation, disclosures, and explanations
          are updated as NexUP changes.
        </p>
        <p>
          Silence is avoided where clarity is possible.
        </p>
      </>
    ),
  },
];

export default function Transparency() {
  return (
    <SystemDocLayout
      indicator="System Visibility · Transparency"
      title="NEXUP TRANSPARENCY"
      intro="Transparency in NexUP is enforced through documentation, visibility of constraints, and clear system boundaries."
      sections={transparencySections}
      anchorSections={["01", "03", "05", "07", "09"]}
      defaultOpen="01"
      closing="Transparency is not disclosure by request. It is visibility by design."
      cta={null}   // Transparency does not need a CTA
    />
  );
}