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
  { key: "Muş", img: "imgs/4.jpg" },
  { key: "Nevşehir", img: "imgs/5.jpg" },
  { key: "Niğde", img: "imgs/2.jpg" },
  { key: "Ordu", img: "imgs/3.jpg" },
  { key: "Rize", img: "imgs/4.jpg" },
  { key: "Sakarya", img: "imgs/5.jpg" },
  { key: "Samsun", img: "imgs/2.jpg" },
  { key: "Siirt", img: "imgs/3.jpg" },
  { key: "Sinop", img: "imgs/4.jpg" },
  { key: "Sivas", img: "imgs/5.jpg" },
  {
    key: "Tekirdag",
    component: (props) => <Tekirdag {...props} />,
  },
  { key: "Tokat", img: "imgs/3.jpg" },
  { key: "Trabzon", img: "imgs/4.jpg" },
  { key: "Tunceli", img: "imgs/5.jpg" },
  { key: "Şanlıurfa", img: "imgs/2.jpg" },
  { key: "Uşak", img: "imgs/3.jpg" },
  {
    key: "Van",
    component: (props) => <Van {...props} />,
  },
  { key: "Yozgat", img: "imgs/5.jpg" },
  { key: "Zonguldak", img: "imgs/2.jpg" },
  { key: "Aksaray", img: "imgs/3.jpg" },
  { key: "Bayburt", img: "imgs/4.jpg" },
  { key: "Karaman", img: "imgs/5.jpg" },
  { key: "Kırıkkale", img: "imgs/2.jpg" },
  { key: "Batman", img: "imgs/3.jpg" },
  { key: "Şırnak", img: "imgs/4.jpg" },
  { key: "Bartın", img: "imgs/5.jpg" },
  { key: "Ardahan", img: "imgs/2.jpg" },
  { key: "Iğdır", img: "imgs/3.jpg" },
  { key: "Yalova", img: "imgs/4.jpg" },
  {
    key: "Karabuk",
    component: (props) => <Karabuk {...props} />,
  },
  { key: "Kilis", img: "imgs/2.jpg" },
  { key: "Osmaniye", img: "imgs/3.jpg" },
  { key: "Düzce", img: "imgs/4.jpg" },
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
