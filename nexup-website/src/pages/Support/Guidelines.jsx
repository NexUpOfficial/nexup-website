import SystemDocLayout from "../../layout/SystemDocLayout"; 

const guidelinesSections = [
  {
    number: "01",
    title: "Guidelines as System Boundaries",
    content: (
      <>
        <p>
          Guidelines in NexUP define acceptable participation
          within a shared spatial system.
        </p>
        <p>
          They exist to preserve system integrity,
          not to enforce conformity.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "Respect for Shared Environments",
    content: (
      <>
        <p>
          NexUP environments are shared by default.
        </p>
        <p>
          Actions that intentionally disrupt,
          degrade, or destabilize shared spaces
          are not permitted.
        </p>
      </>
    ),
  },

  {
    number: "03",
    title: "Responsible Use of Capabilities",
    content: (
      <>
        <p>
          System capabilities are provided with
          defined scope and intent.
        </p>
        <p>
          Using tools or environments to bypass
          safeguards or limits is prohibited.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "Safety of People and Systems",
    content: (
      <>
        <p>
          Behavior that threatens the safety of individuals,
          groups, or system infrastructure is not allowed.
        </p>
        <p>
          This includes harassment, coercion,
          and intentional misuse of system features.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Integrity of Identity",
    content: (
      <>
        <p>
          Identity mechanisms in NexUP exist
          to support accountability and continuity.
        </p>
        <p>
          Impersonation, identity manipulation,
          or deceptive representation is prohibited.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Data and Privacy Respect",
    content: (
      <>
        <p>
          Accessing, collecting, or exploiting data
          beyond intended system boundaries is not permitted.
        </p>
        <p>
          Privacy violations are treated
          as system-level violations.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "Automation and Intelligence Use",
    content: (
      <>
        <p>
          Automated agents and intelligent systems
          must operate within documented constraints.
        </p>
        <p>
          Automation designed to deceive,
          overwhelm, or manipulate is not allowed.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "Compliance with System Constraints",
    content: (
      <>
        <p>
          NexUP enforces limits intentionally.
        </p>
        <p>
          Attempts to bypass, reverse-engineer,
          or undermine system constraints
          are treated as violations.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "Enforcement Philosophy",
    content: (
      <>
        <p>
          Enforcement prioritizes correction
          over punishment.
        </p>
        <p>
          Actions are proportional,
          contextual, and subject to review.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "Evolution of Guidelines",
    content: (
      <>
        <p>
          Guidelines evolve alongside the system.
        </p>
        <p>
          Changes reflect new capabilities,
          risks, and usage patterns.
        </p>
        <p>
          Guidelines are updated deliberately,
          not reactively.
        </p>
      </>
    ),
  },
];
export default function Guidelines() {
  return (
    <SystemDocLayout
      indicator="Participation · Guidelines"
      title="NEXUP GUIDELINES"
      intro="These guidelines define how participants interact within NexUP environments and systems."
      sections={guidelinesSections}
      anchorSections={["01", "03", "06", "09"]}
      defaultOpen="01"
      closing="Guidelines exist to preserve the system, not to police participation."
      cta={null}
    />
  );
}