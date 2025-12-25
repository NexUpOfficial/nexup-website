import SystemDocLayout from "../../layout/SystemDocLayout";
import { Link as RouterLink } from "react-router-dom";

const visionSections = [
  {
    number: "01",
    title: "Why NexUP Exists",
    content: (
      <>
        <p>
          NexUP exists to establish a continuous spatial environment where
          computation, presence, and intelligence converge.
        </p>
        <p>
          It is not designed to replace existing platforms or applications.
          It is designed to extend them into a spatial form.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "A Single Continuous Environment",
    content: (
      <>
        <p>
          NexUP is designed as one continuous environment, not a collection
          of disconnected applications.
        </p>
        <p>
          Movement replaces navigation. Presence replaces sessions.
          Context replaces interfaces.
        </p>
        <p>
          Users do not switch between apps. They move between spaces.
        </p>
      </>
    ),
  },

  {
    number: "03",
    title: "Spatial Computing as Infrastructure",
    content: (
      <>
        <p>
          Spatial computing in NexUP is treated as infrastructure,
          not as a visual layer or interaction enhancement.
        </p>
        <p>
          The system supports workspaces, education,
          social environments, simulation, and commerce
          within a single spatial framework.
        </p>
        <p>
          New experiences emerge without redesigning the underlying system.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "Worlds, Not Products",
    content: (
      <>
        <p>
          NexUP does not focus on shipping isolated products or features.
          It focuses on enabling worlds.
        </p>
        <p>
          Each world is persistent, stateful, and capable of long-term
          continuity independent of individual sessions.
        </p>
        <p>
          Products exist inside worlds. Worlds do not exist for products.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Creation as a Native Capability",
    content: (
      <>
        <p>
          Creation inside NexUP is a native capability of the system,
          not a privileged function reserved for developers or studios.
        </p>
        <p>
          Through NexEngine, environments, tools, and experiences
          are constructed, simulated, and published directly
          into the spatial environment.
        </p>
        <p>
          The system prioritizes composability over customization.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Intelligence Embedded in the System",
    content: (
      <>
        <p>
          Intelligence in NexUP is embedded across the system,
          not layered on top of it.
        </p>
        <p>
          AI assists creation, navigation, optimization,
          and adaptation at the system level.
        </p>
        <p>
          Human agency is preserved. Control is never removed.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "Designed for Longevity",
    content: (
      <>
        <p>
          NexUP is designed to operate over decades,
          not release cycles.
        </p>
        <p>
          The system emphasizes backward compatibility,
          modular growth, and protocol-driven evolution.
        </p>
        <p>
          Change is expected. Instability is not.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "What NexUP Is Not",
    content: (
      <>
        <p>NexUP is not a game platform.</p>
        <p>It is not a social network.</p>
        <p>It is not a collection of virtual experiences.</p>
        <p>
          It is a spatial system designed to host many forms
          of human and machine activity within a single environment.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "From Vision to System Layers",
    content: (
      <>
        <p>
          This vision defines intent, not implementation.
        </p>
        <p>
          The system layers that realize this intent —
          world, engine, nodes, ownership, and intelligence —
          are documented separately.
        </p>
        <p>
          To understand how this vision becomes operational,
          continue to the Ecosystem documentation.
        </p>
      </>
    ),
  },
  {
  number: "10",
  title: "Vision as a Constraint",
  content: (
    <>
      <p>
        This vision does not define outcomes.
        It defines boundaries.
      </p>
      <p>
        Every architectural decision within NexUP is evaluated
        against continuity, system integrity, and long-term viability.
      </p>
      <p>
        Features that compromise these constraints are intentionally excluded,
        regardless of short-term advantage.
      </p>
      <p>
        The purpose of the vision is not to expand possibility endlessly,
        but to preserve coherence as the system grows.
      </p>
    </>
  ),
},

];

export default function Vision() {
  return (
    <SystemDocLayout
      indicator="System Intent · Vision"
      title="NEXUP VISION"
      intro="NexUP defines a spatial system intended to exist, operate, and evolve over decades."
      sections={visionSections}
      anchorSections={["01", "03", "05", "09"]}
      defaultOpen="01"
      closing="The vision is not expressed through promises. It is expressed through architecture."
      cta={
   <a href="/vision" className="cta cta-primary">
  Learn more
</a>


      }
    />
  );
}
