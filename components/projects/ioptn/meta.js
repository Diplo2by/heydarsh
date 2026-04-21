import ioptnImg from "../../../public/assets/projects/ioptn.png";

const ioptnProject = {
  slug: "ioptn",
  route: "/ioptn",
  cardTitle: "IOPTN Portal",
  title: "IOPTN Portal",
  subtitle: "Blockchain-backed organ procurement and transplant workflow",
  cardSummary:
    "A decentralized network for transparent waiting lists, priority matching, and transplant coordination.",
  heroImage: ioptnImg,
  cardStack: "Next.js • Hardhat",
  overview: [
    "The Indian Organ Procurement and Transplantation Network (IOPTN) is a public-private system connecting professionals involved in donation and transplantation. The platform is designed as a decentralized and tamper-resistant workflow for organ allocation.",
    "It includes operational modules like organ bank tracking, patient waiting lists, role-based dashboards, and real-time transaction visibility. A dedicated matching algorithm ranks candidates by compatibility and urgency so the allocation flow moves faster with better transparency."
  ],
  techStack: ["Next.js", "Hardhat", "Metamask", "Tailwind CSS", "Matplotlib"],
  contributors: [
    {
      name: "Samuel Jonathan",
      url: "https://github.com/Mr-DJ"
    }
  ],
  links: [
    {
      label: "Live website",
      url: "https://ioptn.vercel.app/"
    }
  ]
};

export default ioptnProject;
