import SystemDocLayout from "../../layout/SystemDocLayout"; 
 
const termsSections = [
  {
    number: "01",
    title: "Purpose of These Terms",
    content: (
      <>
        <p>
          These Terms define the conditions under which
          NexUP systems and services may be accessed and used.
        </p>
        <p>
          They exist to establish clear boundaries,
          not to restrict legitimate participation.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "Scope of the Platform",
    content: (
      <>
        <p>
          NexUP provides access to spatial environments,
          system tools, and supporting services.
        </p>
        <p>
          Features and capabilities may evolve
          as the system develops.
        </p>
      </>
    ),
  },

  {
    number: "03",
    title: "Eligibility and Access",
    content: (
      <>
        <p>
          Access to NexUP is subject to
          eligibility requirements defined by the platform.
        </p>
        <p>
          Users are responsible for ensuring
          that their use complies with applicable laws.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "Acceptable Use",
    content: (
      <>
        <p>
          Users may not engage in activities
          that compromise system integrity,
          safety, or availability.
        </p>
        <p>
          Misuse, abuse, or intentional disruption
          of NexUP systems is prohibited.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "User Content and Responsibility",
    content: (
      <>
        <p>
          Users are responsible for the content
          they create, upload, or publish within NexUP.
        </p>
        <p>
          NexUP does not assume ownership of user content
          but may process it to operate the system.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "System Modifications and Availability",
    content: (
      <>
        <p>
          NexUP may modify, suspend, or discontinue
          system features as part of normal operation.
        </p>
        <p>
          Availability is not guaranteed at all times,
          though reliability is a design priority.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "Enforcement and Consequences",
    content: (
      <>
        <p>
          Violations of these Terms may result
          in restricted access, suspension,
          or other corrective actions.
        </p>
        <p>
          Enforcement decisions are contextual
          and proportional.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          NexUP systems, software, and branding
          remain the intellectual property of NexUP
          or its licensors.
        </p>
        <p>
          Use of NexUP intellectual property
          is limited to permitted interactions.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          NexUP provides systems on an
          "as available" basis.
        </p>
        <p>
          To the extent permitted by law,
          NexUP is not liable for indirect,
          incidental, or consequential damages.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          These Terms may be updated
          as the system evolves.
        </p>
        <p>
          Material changes are communicated
          through updated documentation.
        </p>
        <p>
          Continued use of NexUP
          indicates acceptance of the current Terms.
        </p>
      </>
    ),
  },
];

export default function Terms() {
  return (
    <SystemDocLayout
      indicator="Legal Boundary · Terms"
      title="TERMS"
      intro="These Terms establish the legal and operational boundaries for accessing and using NexUP systems."
      sections={termsSections}
      anchorSections={["01", "04", "07", "10"]}
      defaultOpen="01"
      closing="These Terms define boundaries so the system can operate reliably for everyone."
      cta={<a href="/system-docs/terms" className="cta cta-primary">
  View System Terms
</a>
}
    />
  );
}