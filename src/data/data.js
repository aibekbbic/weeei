import { PiTShirtLight } from "react-icons/pi";
import { PiPantsLight } from "react-icons/pi";
import argenina_2024_home_1 from "../images/argentina_2024_home_1.jpg";
import argenina_2024_home_2 from "../images/argentina_2024_home_2.jpg";
import argenina_2024_home_3 from "../images/argentina_2024_home_3.jpg";
import barcelona_2024_fan_1 from "../images/barcelona_2024_fan_1.jpg";
import barcelona_2024_home_1 from "../images/barcelona_2024_home_1.jpg";
import barcelona_2024_home_2 from "../images/barcelona_2024_home_2.jpg";
import barcelona_2024_home_3 from "../images/barcelona_2024_home_3.jpg";
import barcelona_2024_third_1 from "../images/barcelona_2024_third_1.jpg";
import barcelona_2024_third_2 from "../images/barcelona_2024_third_2.jpg";
import barcelona_2024_third_3 from "../images/barcelona_2024_third_3.jpg";
import dortmund_2024_home_1 from "../images/dortmund_2024_home_1.jpg";
import dortmund_2024_home_2 from "../images/dortmund_2024_home_2.jpg";
import dortmund_2024_home_3 from "../images/dortmund_2024_home_3.jpg";
import milan_2024_home_1 from "../images/milan_2024_home_1.jpg";
import milan_2024_home_2 from "../images/milan_2024_home_2.jpg";
import milan_2024_home_3 from "../images/milan_2024_home_3.jpg";
import real_madrid_2024_away_1 from "../images/real_madrid_2024_away_1.jpg";
import real_madrid_2024_away_2 from "../images/real_madrid_2024_away_2.jpg";
import real_madrid_2024_away_3 from "../images/real_madrid_2024_away_3.jpg";
import real_madrid_2024_home_1 from "../images/real_madrid_2024_home_1.jpg";
import real_madrid_2024_home_third_2 from "../images/real_madrid_2024_home_third_2.jpg";
import real_madrid_2024_home_3 from "../images/real_madrid_2024_home_3.jpg";
import real_madrid_2024_third_1 from "../images/real_madrid_2024_third_1.jpg";
import real_madrid_2024_third_3 from "../images/real_madrid_2024_third_3.jpg";

const data = [
  {
    id: 1,
    title: "Argentina",
    season: "2024-2025",
    name: "Jersey del Argentina",
    description:
      "La nuova divisa home dell'Argentina 2024 presenta la familiare combinazione di strisce blu e bianche. Le strisce sono piuttosto larghe, ognuna di esse contiene il logo Adidas, lo stemma dei Campioni del Mondo e il logo della federazione. Tutti i loghi sono dipinti in oro. Le maniche sono bianche con strisce blu sulle spalle.",
    size: ["S", "M", "L", "XL"],
    img: [argenina_2024_home_1, argenina_2024_home_2, argenina_2024_home_3],
    complect: [<PiTShirtLight />, <PiPantsLight />],
    inStock: ["S"],
  },

  {
    id: 5,
    title: "BVB Dortmund",
    season: "2024-2025",
    name: "Jersey del Borussia Dortmund",
    description:
      "24/25 La nuova divisa casalinga del Borussia Dortmund 2024-2025 presenta la tradizionale combinazione di colori giallo e nero. La parte principale della maglia è gialla con linee verticali nere. Inoltre, il colletto e le maniche sono verniciati di nero.",
    size: ["S", "M", "L", "XL"],
    img: [dortmund_2024_home_1, dortmund_2024_home_2, dortmund_2024_home_3],
    complect: [<PiTShirtLight />, <PiPantsLight />],
    inStock: [],
  },

  {
    id: 6,
    title: "AC Milan",
    season: "2024-2025",
    name: "Jersey del AC Milan",
    description:
      "Nuova divisa home dell'AC Milan 2024-2025 presenta strisce verticali rosse e nere con accenti bianchi. Le strisce sono di medio spessore e si trovano sul davanti della divisa, sulle maniche e sulla parte bassa della schiena della maglia. La divisa è dedicata al 125° anniversario del club.",
    size: ["S", "M", "L", "XL"],
    img: [milan_2024_home_1, milan_2024_home_2, milan_2024_home_3],
    complect: [<PiTShirtLight />, <PiPantsLight />],
    inStock: ["S"],
  },

  {
    id: 7,
    title: "CF Real Madrid",
    season: "2024-2025",
    name: "Secondo jersey del Real Madrid",
    description:
      "La nuova divisa da trasferta del Real Madrid 2024-2025 è arancione con un motivo geometrico leggero. Il colletto è nero con una striscia bianca. I loghi degli sponsor sono dipinti di nero.",
    size: ["S", "M", "L", "XL"],
    img: [
      real_madrid_2024_away_1,
      real_madrid_2024_away_2,
      real_madrid_2024_away_3,
    ],
    complect: [<PiTShirtLight />, <PiPantsLight />],
    inStock: [],
  },

  {
    id: 2,
    title: "FC Barcelona",
    season: "2024-2025",
    name: "Jersey del FC Barcelona (fan version)",
    description:
      "Versione per tifosi della divisa del Barcellona in giallo. C'è una linea rossa sulla manica, sul colletto e sui lati dei pantaloncini. In rosso anche il nome dello sponsor e dello sponsor tecnico della squadra.",
    size: ["S", "M", "L", "XL"],
    img: [barcelona_2024_fan_1],
    complect: [<PiTShirtLight />, <PiPantsLight />],
    inStock: ["S"],
  },

  {
    id: 3,
    title: "FC Barcelona",
    season: "2024-2025",
    name: "Jersey del FC Barcelona",
    description:
      "La nuova divisa home del Barcellona celebra il 125° anniversario del club. Il design della maglia è un omaggio alla divisa della prima squadra del 1899. L'uniforme ha una combinazione di colori rosso e blu che divide l'uniforme in due parti. Lo stemma del club si trova al centro. I loghi degli sponsor sono dipinti in oro.",
    size: ["S", "M", "L", "XL"],
    img: [barcelona_2024_home_1, barcelona_2024_home_2, barcelona_2024_home_3],
    complect: [<PiTShirtLight />, <PiPantsLight />],
    inStock: ["S"],
  },

  {
    id: 4,
    title: "FC Barcelona",
    season: "2024-2025",
    name: "Terza jersey del FC Barcelona",
    description:
      "La nuova terza maglia del Barcellona per la stagione 2024-2025 è verde chiaro con loghi degli sponsor blu. Il logo Nike è invertito e dipinto in una combinazione di blu e rosso.",
    size: ["S", "M", "L", "XL"],
    img: [
      barcelona_2024_third_1,
      barcelona_2024_third_2,
      barcelona_2024_third_3,
    ],
    complect: [<PiTShirtLight />, <PiPantsLight />],
    inStock: ["S"],
  },

  {
    id: 8,
    title: "CF Real Madrid",
    season: "2024-2025",
    name: "Jersey del Real Madrid",
    description:
      "La nuova divisa casalinga del Real Madrid 2024-2025 è tradizionalmente bianca. Le strisce sulle spalle, i loghi degli sponsor e le strisce sul colletto sono dipinte di nero. La forma è ricoperta da un motivo noto come pied de poule.",
    size: ["S", "M", "L", "XL"],
    img: [
      real_madrid_2024_home_1,
      real_madrid_2024_home_third_2,
      real_madrid_2024_home_3,
    ],
    complect: [<PiTShirtLight />, <PiPantsLight />],
    inStock: [],
  },

  {
    id: 9,
    title: "CF Real Madrid",
    season: "2024-2025",
    name: "Terzo jersey del Real Madrid",
    description:
      "La nuova terza divisa del Real Madrid è grigia con accenti bianchi e neri. Il dettaglio principale dell'uniforme aggiornata è una stampa in rilievo su tutta l'area della maglietta composta dalle lettere RMCF.",
    size: ["S", "M", "L", "XL"],
    img: [
      real_madrid_2024_third_1,
      real_madrid_2024_home_third_2,
      real_madrid_2024_third_3,
    ],
    complect: [<PiTShirtLight />, <PiPantsLight />],
    inStock: [],
  },
];

export default data;
