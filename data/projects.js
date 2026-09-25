// Order is the menu order and the "next project" sequence.
// enabled: false hides a project completely.
// isPrivate: true hides it until someone opens /view/<PRIVATE_ACCESS_TOKEN>.
const projects = [
  {
    slug: "elastic",
    title: "Elastic",
    enabled: true,
    isPrivate: true,
    assetPrefix: "elastic-",
    backgroundColor: "#22222E",
    backgroundImage: "/assets/elastic-cover-background.jpg",
  },
  {
    slug: "newrelic",
    title: "New Relic",
    enabled: true,
    isPrivate: false,
    backgroundColor: "#0F192B",
    backgroundImage: "/assets/newrelic-cover-background.jpg",
  },
  {
    slug: "qatium",
    title: "Qatium",
    enabled: true,
    isPrivate: false,
    backgroundColor: "#22222E",
    backgroundImage: "/assets/qatium-cover-background.jpg",
  },
  {
    slug: "goaigua",
    title: "GoAigua",
    enabled: true,
    isPrivate: false,
    backgroundColor: "#22222E",
    backgroundImage: "/assets/goaigua-cover-background.jpg",
  },
  {
    slug: "figmap",
    title: "Figmap",
    enabled: true,
    isPrivate: false,
    backgroundColor: "#22222E",
    backgroundImage: "/assets/figmap-cover-background.jpg",
  },
  {
    slug: "globalomnium",
    title: "Global Omnium",
    enabled: true,
    isPrivate: false,
    backgroundColor: "#22222E",
    backgroundImage: "/assets/global-omnium-cover-background.jpg",
  },
  {
    slug: "muchosol",
    title: "Muchosol",
    enabled: true,
    isPrivate: false,
    backgroundColor: "#22222E",
    backgroundImage: "/assets/muchosol-cover-background.jpg",
  },
  {
    slug: "energysystem",
    title: "Energy System",
    enabled: true,
    isPrivate: false,
    backgroundColor: "#22222E",
    backgroundImage: "/assets/energy-system-cover-background.jpg",
  },
];

export function isProjectVisible(project, unlocked) {
  if (!project.enabled) return false;
  if (project.isPrivate && !unlocked) return false;
  return true;
}

export function getVisibleProjects(unlocked) {
  return projects.filter((project) => isProjectVisible(project, unlocked));
}

export function getEnabledProjects() {
  return getVisibleProjects(false);
}

export function getPrivateProjects() {
  return projects.filter((project) => project.enabled && project.isPrivate);
}

export function getNextProject(slug, unlocked) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  if (currentIndex === -1) return null;

  for (let step = 1; step <= projects.length; step += 1) {
    const candidate = projects[(currentIndex + step) % projects.length];
    if (isProjectVisible(candidate, unlocked) && candidate.slug !== slug) {
      return candidate;
    }
  }

  return null;
}

export default projects;
