import SystemDocLayout from "../../layout/SystemDocLayout";

const companySections = [
  {
    number: "01",
    title: "What NexUP Is",
    content: (
      <>
        <p>
          NexUP is a technology company building a spatial computing platform
          designed for long-term operation.
        </p>
        <p>
          The company exists to design, operate, and evolve systems
          that enable continuous spatial environments.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "Why the Company Exists",
    content: (
      <>
        <p>
          NexUP was formed to address limitations in how
          digital systems handle presence, context, and continuity.
        </p>
        <p>
          The company focuses on architecture over features
          and systems over short-term products.
        </p>
      </>
    ),
  },

  {
    number: "03",
    title: "How NexUP Operates",
    content: (
      <>
        <p>
          NexUP operates as a system-driven organization.
        </p>
        <p>
          Decisions are guided by architectural constraints,
          long-term viability, and operational clarity.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "Long-Term Orientation",
    content: (
      <>
        <p>
          NexUP is designed to operate over decades,
          not market cycles.
        </p>
        <p>
          The company prioritizes sustainability,
          reliability, and continuity over rapid expansion.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Product Philosophy",
    content: (
      <>
        <p>
          NexUP does not ship isolated products.
        </p>
        <p>
          The platform is developed as a cohesive system
          where components evolve together.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Technology and Research",
    content: (
      <>
        <p>
          NexUP integrates advances in spatial computing,
          distributed systems, and artificial intelligence.
        </p>
        <p>
          Research informs architecture,
          not marketing narratives.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "People and Culture",
    content: (
      <>
        <p>
          NexUP is built by small, focused teams
          working with high autonomy and responsibility.
        </p>
        <p>
          The company values clarity, restraint,
          and long-term thinking.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "Governance and Responsibility",
    content: (
      <>
        <p>
          NexUP treats governance as a system concern,
          not an afterthought.
        </p>
        <p>
          Responsibility is embedded into
          product, policy, and operations.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "Transparency and Communication",
    content: (
      <>
        <p>
          NexUP communicates changes,
          constraints, and decisions deliberately.
        </p>
        <p>
          Silence is avoided where clarity is possible.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "Company as a Living System",
    content: (
      <>
        <p>
          NexUP evolves alongside the platform it builds.
        </p>
        <p>
          Structural consistency, not static definition,
          guides the company forward.
        </p>
      </>
    ),
  },
];
export default function Company() {
  return (
    <SystemDocLayout
      indicator="Organization · Company"
      title="NEXUP COMPANY"
      intro="NexUP is a system-driven technology company focused on building long-term spatial computing infrastructure."
      sections={companySections}
      anchorSections={["01", "03", "05", "08"]}
      defaultOpen="01"
      closing="The company exists to build systems that endure."
      cta={null}
    />
  );
}