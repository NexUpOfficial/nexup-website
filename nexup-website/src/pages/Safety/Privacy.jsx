import SystemDocLayout from "../../layout/SystemDocLayout";

const privacyDataSections = [
  {
    number: "01",
    title: "Privacy as a Structural Principle",
    content: (
      <>
        <p>
          Privacy in NexUP is not treated as a feature or a preference.
        </p>
        <p>
          It is treated as a structural principle embedded into
          system design and data flow.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "Purpose-Bound Data Collection",
    content: (
      <>
        <p>
          NexUP collects data only for defined,
          system-required purposes.
        </p>
        <p>
          Data collection is limited to what is necessary
          for operation, safety, and reliability.
        </p>
      </>
    ),
  },

  {
    number: "03",
    title: "Data Minimization",
    content: (
      <>
        <p>
          The system is designed to minimize data collection
          wherever possible.
        </p>
        <p>
          Absence of data is preferred
          over retention without clear purpose.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "Separation of Identity and Activity",
    content: (
      <>
        <p>
          Identity information and activity data
          are handled as distinct system domains.
        </p>
        <p>
          This separation reduces correlation,
          unintended exposure, and misuse.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "User Control and Visibility",
    content: (
      <>
        <p>
          Users are provided visibility into
          relevant data associated with their participation.
        </p>
        <p>
          Where feasible, users can control,
          limit, or remove certain data.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Retention Boundaries",
    content: (
      <>
        <p>
          Data within NexUP is retained
          only for defined durations.
        </p>
        <p>
          Retention policies are aligned
          with operational need and legal requirements.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "Data Access Constraints",
    content: (
      <>
        <p>
          Access to data is restricted
          through role-based and system-level controls.
        </p>
        <p>
          No component or operator
          has unrestricted access by default.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "Third-Party and External Data",
    content: (
      <>
        <p>
          NexUP limits sharing of data
          with external parties.
        </p>
        <p>
          Where third-party services are involved,
          data exchange is purpose-bound
          and contractually constrained.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "Privacy-Sensitive System Changes",
    content: (
      <>
        <p>
          Changes that affect data handling,
          visibility, or privacy assumptions
          are treated as significant system events.
        </p>
        <p>
          Such changes are documented
          and disclosed appropriately.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "Privacy as an Ongoing Discipline",
    content: (
      <>
        <p>
          Privacy is not static.
        </p>
        <p>
          It evolves alongside the system,
          informed by usage patterns,
          risk assessment, and review.
        </p>
        <p>
          Privacy decisions are treated
          as architectural decisions.
        </p>
      </>
    ),
  },
];


export default function PrivacyData() {
  return (
    <SystemDocLayout
      indicator="Data Responsibility · Privacy"
      title="PRIVACY & DATA"
      intro="Privacy in NexUP is enforced through data minimization, separation of concerns, and explicit system boundaries."
      sections={privacyDataSections}
      anchorSections={["01", "03", "05", "07", "09"]}
      defaultOpen="01"
      closing="Privacy is not asserted. It is enforced by design."
      cta={null}   // Privacy pages should not push action
    />
  );
}