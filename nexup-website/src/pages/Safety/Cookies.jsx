import SystemDocLayout from "../../layout/SystemDocLayout";

const cookiesSections = [
  {
    number: "01",
    title: "Purpose of Cookies",
    content: (
      <>
        <p>
          Cookies in NexUP are used to support
          basic system functionality and reliability.
        </p>
        <p>
          They are not used to profile users
          or to create behavioral advertising models.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "Essential Cookies",
    content: (
      <>
        <p>
          Essential cookies are required
          for core system operation.
        </p>
        <p>
          These cookies enable features such as
          session continuity, security, and basic preferences.
        </p>
      </>
    ),
  },

  {
    number: "03",
    title: "Performance and Reliability",
    content: (
      <>
        <p>
          Limited cookies may be used
          to monitor system performance and stability.
        </p>
        <p>
          This data is aggregated and used
          to identify errors, outages, and reliability issues.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "What We Do Not Use Cookies For",
    content: (
      <>
        <p>
          NexUP does not use cookies
          for targeted advertising or cross-site tracking.
        </p>
        <p>
          Cookies are not used to build
          detailed personal profiles.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "User Control",
    content: (
      <>
        <p>
          Users may control or disable cookies
          through their browser settings.
        </p>
        <p>
          Disabling certain cookies
          may affect system functionality.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Changes to Cookie Usage",
    content: (
      <>
        <p>
          Changes to how NexUP uses cookies
          are treated as system updates.
        </p>
        <p>
          Material changes are documented
          and reflected in this page.
        </p>
      </>
    ),
  },
];

export default function Cookies() {
  return (
    <SystemDocLayout
      indicator="Data Handling · Cookies"
      title="COOKIES"
      intro="Cookies in NexUP are used only to support system operation, reliability, and security."
      sections={cookiesSections}
      anchorSections={["01", "04"]}
      defaultOpen="01"
      closing="Cookies are a technical mechanism, not a tracking strategy."
      cta={null}
    />
  );
}