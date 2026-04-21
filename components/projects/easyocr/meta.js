import easyImg from "../../../public/assets/projects/easy.png";

const easyocrProject = {
  slug: "easyocr",
  route: "/easyocr",
  cardTitle: "Easy CT",
  title: "Chinese Character Recognition",
  subtitle: "OCR experimentation for complex handwritten character sets",
  cardSummary:
    "Machine learning pipeline for Chinese OCR using curated CASIA subsets and image preprocessing steps.",
  heroImage: easyImg,
  cardStack: "Python • Easy OCR",
  overview: [
    "This project investigates OCR performance for Chinese character recognition, where script complexity and handwriting variance make digitization difficult. The dataset strategy combined MNIST-style workflows with curated CASIA samples.",
    "The model reaches usable accuracy on digitally generated inputs and promising results on real-world samples. Further improvements focus on stronger preprocessing and higher-quality data cleaning for better robustness across noisy images."
  ],
  techStack: ["Easy OCR", "Python", "Matplotlib", "OpenCV"],
  contributors: [
    {
      name: "adnandelta",
      url: "https://github.com/adnandelta"
    },
    {
      name: "harshmehta14",
      url: "https://github.com/harshmehta14"
    }
  ],
  links: [
    {
      label: "View on Github",
      url: "https://github.com/Diplo2by/Easy_CT"
    }
  ]
};

export default easyocrProject;
