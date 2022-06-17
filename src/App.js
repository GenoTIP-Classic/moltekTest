import React from "react";
import { useState } from "react";
//import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
//import TurkeyMap from "turkey-map-react";

import { Grid, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CityModal from "./components/UI/CityModal";
import Istanbul from "./components/UI/Istanbul";
import TurkeyMap from "./components/UI/turkeyMap";
import Adana from "./components/UI/Adana";
import Antalya from "./components/UI/Antalya";
import Diyarbakir from "./components/UI/Diyarbakir";
import Izmir from "./components/UI/Izmir";
import Isparta from "./components/UI/Isparta";
import Ankara from "./components/UI/Ankara";
import Konya from "./components/UI/Konya";
import Mersin from "./components/UI/Mersin";
import Van from "./components/UI/Van";
import Bursa from "./components/UI/Bursa";
import Manisa from "./components/UI/Manisa";
import Tekirdag from "./components/UI/Tekirdag";
//
import "./map.css";
import Kayseri from "./components/UI/Kayseri";
import Karabuk from "./components/UI/Karabuk";
import Adiyaman from "./components/UI/Adiyaman";
import Afyonkarahisar from "./components/UI/Afyonkarahisar";
import Agri from "./components/UI/Agri";
import Amasya from "./components/UI/Amasya";
import Artvin from "./components/UI/Artvin";
import Aydin from "./components/UI/Aydin";
import Balikesir from "./components/UI/Balikesir";
import Bilecik from "./components/UI/Bilecik";
import Bingol from "./components/UI/Bingol";
import Bitlis from "./components/UI/Bitlis";
import Bolu from "./components/UI/Bolu";
import Burdur from "./components/UI/Burdur";
import Canakkale from "./components/UI/Canakkale";
import Cankiri from "./components/UI/Cankiri";
import Corum from "./components/UI/Corum";
import Denizli from "./components/UI/Denizli";
import Edirne from "./components/UI/Edirne";
import Elazig from "./components/UI/Elazig";
import Erzincan from "./components/UI/Erzincan";
import Erzurum from "./components/UI/Erzurum";
import Eskisehir from "./components/UI/Eskisehir";
import Gaziantep from "./components/UI/Gaziantep";
import Giresun from "./components/UI/Giresun";
import Gumushane from "./components/UI/Gumushane";
import Hakkari from "./components/UI/Hakkari";
import Hatay from "./components/UI/Hatay";
import Kars from "./components/UI/Kars";
import Kastamonu from "./components/UI/Kastamonu";
import Kirklareli from "./components/UI/Kirklareli";
import Kirsehir from "./components/UI/Kirsehir";
import Kocaeli from "./components/UI/Kocaeli";
import Kutahya from "./components/UI/Kutahya";
import Malatya from "./components/UI/Malatya";
import Kahramanmaras from "./components/UI/Kahramanmaras";
import Mardin from "./components/UI/Mardin";
import Mugla from "./components/UI/Mugla";
import Mus from "./components/UI/Mus";
import Nevsehir from "./components/UI/Nevsehir";
import Nigde from "./components/UI/Nigde";
import Ordu from "./components/UI/Ordu";
import Rize from "./components/UI/Rize";
import Sakarya from "./components/UI/Sakarya";
import Samsun from "./Samsun";
import Siirt from "./components/UI/Siirt";
import Sinop from "./components/UI/Sinop";
import Sivas from "./components/UI/Sivas";
import Tokat from "./components/UI/Tokat";
import Trabzon from "./components/UI/Trabzon";
import Tunceli from "./components/UI/Tunceli";
import Sanliurfa from "./components/UI/Sanliurfa";
import Usak from "./components/UI/Usak";
import Yozgat from "./components/UI/Yozgat";
import Zonguldak from "./components/UI/Zonguldak";
import Aksaray from "./components/UI/Aksaray";
import Bayburt from "./components/UI/Bayburt";
import Karaman from "./components/UI/Karaman";
import Kirikkale from "./components/UI/Kirikkale";
import Batman from "./components/UI/Batman";
import Sirnak from "./components/UI/Sirnak";
import Bartin from "./components/UI/Bartin";
import Ardahan from "./components/UI/Ardahan";
import Igdir from "./components/UI/Igdir";
import Kilis from "./components/UI/Kilis";
import Osmaniye from "./components/UI/Osmaniye";
import Duzce from "./components/UI/Duzce";

const turkeyData = [
  {
    key: "Adana",
    component: (props) => <Adana {...props} />,
  },
  {
    key: "Adiyaman",
    component: (props) => <Adiyaman {...props} />,
  },
  {
    key: "Afyonkarahisar",
    component: (props) => <Afyonkarahisar {...props} />,
  },
  {
    key: "Agri",
    component: (props) => <Agri {...props} />,
  },
  {
    key: "Amasya",
    component: (props) => <Amasya {...props} />,
  },
  {
    key: "Ankara",
    component: (props) => <Ankara {...props} />,
  },
  {
    key: "Antalya",
    component: (props) => <Antalya {...props} />,
  },
  {
    key: "Artvin",
    component: (props) => <Artvin {...props} />,
  },
  {
    key: "Aydin",
    component: (props) => <Aydin {...props} />,
  },
  {
    key: "Balikesir",
    component: (props) => <Balikesir {...props} />,
  },
  {
    key: "Bilecik",
    component: (props) => <Bilecik {...props} />,
  },
  {
    key: "Bingol",
    component: (props) => <Bingol {...props} />,
  },
  {
    key: "Bitlis",
    component: (props) => <Bitlis {...props} />,
  },
  {
    key: "Bolu",
    component: (props) => <Bolu {...props} />,
  },
  {
    key: "Burdur",
    component: (props) => <Burdur {...props} />,
  },
  {
    key: "Bursa",
    component: (props) => <Bursa {...props} />,
  },
  {
    key: "Canakkale",
    component: (props) => <Canakkale {...props} />,
  },
  {
    key: "Cankiri",
    component: (props) => <Cankiri {...props} />,
  },
  {
    key: "Corum",
    component: (props) => <Corum {...props} />,
  },
  {
    key: "Denizli",
    component: (props) => <Denizli {...props} />,
  },
  {
    key: "Diyarbakir",
    component: (props) => <Diyarbakir {...props} />,
  },
  {
    key: "Edrine",
    component: (props) => <Edirne {...props} />,
  },
  {
    key: "Elazig",
    component: (props) => <Elazig {...props} />,
  },
  {
    key: "Erzincan",
    component: (props) => <Erzincan {...props} />,
  },
  {
    key: "Erzurum",
    component: (props) => <Erzurum {...props} />,
  },
  {
    key: "Eskisehir",
    component: (props) => <Eskisehir {...props} />,
  },
  {
    key: "Gaziantep",
    component: (props) => <Gaziantep {...props} />,
  },
  {
    key: "Giresun",
    component: (props) => <Giresun {...props} />,
  },
  {
    key: "Gumushane",
    component: (props) => <Gumushane {...props} />,
  },
  {
    key: "Hakkari",
    component: (props) => <Hakkari {...props} />,
  },
  {
    key: "Hatay",
    component: (props) => <Hatay {...props} />,
  },
  {
    key: "İsparta",
    component: (props) => <Isparta {...props} />,
  },
  {
    key: "Mersin",
    component: (props) => <Mersin {...props} />,
  },
  {
    key: "İstanbul",
    component: (props) => <Istanbul {...props} />,
  },
  {
    key: "İzmir",
    component: (props) => <Izmir {...props} />,
  },
  {
    key: "Kars",
    component: (props) => <Kars {...props} />,
  },
  {
    key: "Kastamonu",
    component: (props) => <Kastamonu {...props} />,
  },
  {
    key: "Kayseri",
    component: (props) => <Kayseri {...props} />,
  },
  {
    key: "Kirklareli",
    component: (props) => <Kirklareli {...props} />,
  },
  {
    key: "Kirsehir",
    component: (props) => <Kirsehir {...props} />,
  },
  {
    key: "Kocaeli",
    component: (props) => <Kocaeli {...props} />,
  },
  {
    key: "Konya",
    component: (props) => <Konya {...props} />,
  },
  {
    key: "Kutahya",
    component: (props) => <Kutahya {...props} />,
  },
  {
    key: "Malatya",
    component: (props) => <Malatya {...props} />,
  },
  {
    key: "Manisa",
    component: (props) => <Manisa {...props} />,
  },
  {
    key: "Kahramanmaras",
    component: (props) => <Kahramanmaras {...props} />,
  },
  {
    key: "Mardin",
    component: (props) => <Mardin {...props} />,
  },
  {
    key: "Mugla",
    component: (props) => <Mugla {...props} />,
  },
  {
    key: "Mus",
    component: (props) => <Mus {...props} />,
  },
  {
    key: "Nevsehir",
    component: (props) => <Nevsehir {...props} />,
  },
  {
    key: "Nigde",
    component: (props) => <Nigde {...props} />,
  },
  {
    key: "Ordu",
    component: (props) => <Ordu {...props} />,
  },
  {
    key: "Rize",
    component: (props) => <Rize {...props} />,
  },
  {
    key: "Sakarya",
    component: (props) => <Sakarya {...props} />,
  },
  {
    key: "Samsun",
    component: (props) => <Samsun {...props} />,
  },
  {
    key: "Siirt",
    component: (props) => <Siirt {...props} />,
  },
  {
    key: "Sinop",
    component: (props) => <Sinop {...props} />,
  },
  {
    key: "Sivas",
    component: (props) => <Sivas {...props} />,
  },
  {
    key: "Tekirdag",
    component: (props) => <Tekirdag {...props} />,
  },
  {
    key: "Tokat",
    component: (props) => <Tokat {...props} />,
  },
  {
    key: "Trabzon",
    component: (props) => <Trabzon {...props} />,
  },
  {
    key: "Tunceli",
    component: (props) => <Tunceli {...props} />,
  },
  {
    key: "Sanliurfa",
    component: (props) => <Sanliurfa {...props} />,
  },
  {
    key: "Usak",
    component: (props) => <Usak {...props} />,
  },
  {
    key: "Van",
    component: (props) => <Van {...props} />,
  },
  {
    key: "Yozgat",
    component: (props) => <Yozgat {...props} />,
  },
  {
    key: "Zonguldak",
    component: (props) => <Zonguldak {...props} />,
  },
  {
    key: "Aksaray",
    component: (props) => <Aksaray {...props} />,
  },
  {
    key: "Bayburt",
    component: (props) => <Bayburt {...props} />,
  },
  {
    key: "Karaman",
    component: (props) => <Karaman {...props} />,
  },
  {
    key: "Kirikkale",
    component: (props) => <Kirikkale {...props} />,
  },
  {
    key: "Batman",
    component: (props) => <Batman {...props} />,
  },
  {
    key: "Sirnak",
    component: (props) => <Sirnak {...props} />,
  },
  {
    key: "Bartin",
    component: (props) => <Bartin {...props} />,
  },
  {
    key: "Ardahan",
    component: (props) => <Ardahan {...props} />,
  },
  {
    key: "Igdir",
    component: (props) => <Igdir {...props} />,
  },
  { key: "Yalova", img: "imgs/4.jpg" },
  {
    key: "Karabuk",
    component: (props) => <Karabuk {...props} />,
  },
  {
    key: "Kilis",
    component: (props) => <Kilis {...props} />,
  },
  {
    key: "Osmaniye",
    component: (props) => <Osmaniye {...props} />,
  },
  {
    key: "Duzce",
    component: (props) => <Duzce {...props} />,
  }
];

const App = () => {
  const [rightPanelTitle, setRightPanelTitle] = useState("Doktor Branşları");
  const [district, setdistrict] = useState(false);
  const [cityName, setCityName] = useState("");

  const [hospitalList, setHospitalList] = useState([]);
  const [responsible, setresponsible] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openCityModal, setOpenCityModal] = React.useState(false);
  const [currentSvgComponent, setCurrentSvgComponent] = React.useState();
  const [responsibleCities, setResponsibleCities] = React.useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setdistrict(true);
    setOpen(false);
    setRightPanelTitle(cityName + " Doktor Branşları");
  };
  const getCitySvg = (name) => {
    const Index = turkeyData.findIndex((itm) => itm.key === name);
    setCurrentSvgComponent(Index);
    return Index;
  };

  const handleOpenCityModal = () => setOpenCityModal(true);
  const handleCloseCityModal = () => {
    console.log("handleCloseCityModal calistim");
    setOpenCityModal(false);
    setdistrict(false);
    setRightPanelTitle("Doktor Branşları");

    setCityName("");
  };

  const handleChange = (event) => {
    setdistrict(event.target.value);
  };
  function returnColor(id) {
    if ((responsibleCities || []).includes(id)) return "red";
    return "#1d1d1d";
  }
  return (
    <div>
      <CityModal
        open={openCityModal}
        MySvgComponent={turkeyData?.[currentSvgComponent]?.component}
        handleClose={handleCloseCityModal}
        imageClicked={(e) => {
          if (!e.target.id) return;

          console.log("imageclick event", e.target.id);

          //e.stopPropagation();
        }}
      />
      <Grid container justifyContent="center">
        <Grid item sm={9.5} justifyContent="center">
          <TurkeyMap
            onClick={(e) => {
              console.log(e.target.id);
              if (!e.target.id) return;
              let str =
                e.target.id[0].toLocaleUpperCase("tr-TR") +
                e.target.id.substring(1);
              console.log(str);
              let idx = getCitySvg(str);
              console.log(idx);
              if (idx == -1 || !turkeyData?.[idx]?.component) return;
              setOpenCityModal(true);
            }}
            color={(id) => returnColor(id)}
          />
        </Grid>
      </Grid>
    </div>
  );
};
//ReactDOM.render(<Map />, document.getElementById("root"));
export default App;
