import elasticCoverBackground from "../public/assets/elastic-cover-background.jpg";
import newrelicCoverBackground from "../public/assets/newrelic-cover-background.jpg";
import qatiumCoverBackground from "../public/assets/qatium-cover-background.jpg";
import goaiguaCoverBackground from "../public/assets/goaigua-cover-background.jpg";
import figmapCoverBackground from "../public/assets/figmap-cover-background.jpg";
import globalOmniumCoverBackground from "../public/assets/global-omnium-cover-background.jpg";
import muchosolCoverBackground from "../public/assets/muchosol-cover-background.jpg";
import energySystemCoverBackground from "../public/assets/energy-system-cover-background.jpg";

// Order is the menu order and the "next project" sequence.
// Set enabled to false to hide a project from both.
const projects = [
  {
    slug: "elastic",
    title: "Elastic",
    enabled: false,
    backgroundColor: "#22222E",
    backgroundImage: elasticCoverBackground,
  },
  {
    slug: "newrelic",
    title: "New Relic",
    enabled: true,
    backgroundColor: "#0F192B",
    backgroundImage: newrelicCoverBackground,
  },
  {
    slug: "qatium",
    title: "Qatium",
    enabled: true,
    backgroundColor: "#22222E",
    backgroundImage: qatiumCoverBackground,
  },
  {
    slug: "goaigua",
    title: "GoAigua",
    enabled: true,
    backgroundColor: "#22222E",
    backgroundImage: goaiguaCoverBackground,
  },
  {
    slug: "figmap",
    title: "Figmap",
    enabled: true,
    backgroundColor: "#22222E",
    backgroundImage: figmapCoverBackground,
  },
  {
    slug: "globalomnium",
    title: "Global Omnium",
    enabled: true,
    backgroundColor: "#22222E",
    backgroundImage: globalOmniumCoverBackground,
  },
  {
    slug: "muchosol",
    title: "Muchosol",
    enabled: true,
    backgroundColor: "#22222E",
    backgroundImage: muchosolCoverBackground,
  },
  {
    slug: "energysystem",
    title: "Energy System",
    enabled: true,
    backgroundColor: "#22222E",
    backgroundImage: energySystemCoverBackground,
  },
];

export function getEnabledProjects() {
  return projects.filter((project) => project.enabled);
}

export function getNextProject(slug) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  if (currentIndex === -1) return null;

  for (let step = 1; step <= projects.length; step += 1) {
    const candidate = projects[(currentIndex + step) % projects.length];
    if (candidate.enabled && candidate.slug !== slug) return candidate;
  }

  return null;
}

export default projects;
