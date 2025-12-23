import SystemDocLayout from "../../layout/SystemDocLayout";
import { Link as RouterLink } from "react-router-dom";

const trustSections = [
  {
    number: "01",
    title: "Trust as a System Property",
    content: (
      <>
        <p>
          Trust in NexUP is not established through statements or policies.
          It is established through system behavior.
        </p>
        <p>
          The platform is designed so that trust emerges naturally
          from predictable, verifiable, and constrained operation.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "Architecture Before Authority",
    content: (
      <>
        <p>
          NexUP minimizes reliance on centralized authority.
        </p>
        <p>
          Where possible, trust is enforced through architecture,
          not discretion.
        </p>
        <p>
          Systems are preferred over permissions.
        </p>
      </>
    ),
  },

  {
    number: "03",
    title: "Separation of Concerns",
    content: (
      <>
        <p>
          Core system layers are intentionally separated.
        </p>
        <p>
          Identity, world state, intelligence, and data handling
          operate with defined boundaries.
        </p>
        <p>
          No single component has unrestricted visibility or control.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "User Sovereignty",
    content: (
      <>
        <p>
          Users retain agency over their presence, identity,
          and participation within NexUP.
        </p>
        <p>
          The system is designed to reduce involuntary dependency
          and opaque lock-in.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Data Minimalism",
    content: (
      <>
        <p>
          NexUP collects only data that is necessary
          for system operation.
        </p>
        <p>
          Data collection is purpose-bound,
          time-limited, and structurally constrained.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Predictable System Behavior",
    content: (
      <>
        <p>
          Trust depends on predictability.
        </p>
        <p>
          NexUP systems are designed to behave consistently
          across sessions, environments, and time.
        </p>
        <p>
          Unexpected behavior is treated as a defect,
          not a feature.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "Human Oversight by Design",
    content: (
      <>
        <p>
          Automation does not remove accountability.
        </p>
        <p>
          Critical decisions are observable,
          auditable, and subject to human review.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "Resilience Over Optimization",
    content: (
      <>
        <p>
          NexUP prioritizes resilience over short-term efficiency.
        </p>
        <p>
          Systems are designed to degrade safely,
          not fail catastrophically.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "Transparent Constraints",
    content: (
      <>
        <p>
          Trust increases when limitations are visible.
        </p>
        <p>
          NexUP documents what the system can do
          and what it intentionally cannot.
        </p>
        <p>
          Silence is avoided where clarity is possible.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "Trust as an Ongoing Process",
    content: (
      <>
        <p>
          Trust is not static.
        </p>
        <p>
          It is continuously evaluated as the system evolves.
        </p>
        <p>
          Changes that affect trust are treated
          as architectural decisions, not updates.
        </p>
      </>
    ),
  },
];

export default function Trust() {
  return (
    <SystemDocLayout
      indicator="System Integrity · Trust"
      title="NEXUP TRUST"
      intro="Trust in NexUP is established through architecture, predictability, and constraint."
      sections={trustSections}
      anchorSections={["01", "03", "05", "09"]}
      defaultOpen="01"
      closing="Trust is not requested. It is designed."
      cta={null}   // Trust does NOT need a CTA
    />
  );
}