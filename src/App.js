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

const turkeyData = [
  {
    key: "Adana",
    component: (props) => <Adana {...props} />,
  },
  { key: "Adıyaman", img: "imgs/3.jpg" },
  { key: "Afyon", img: "imgs/4.jpg" },
  { key: "Ağrı", img: "imgs/5.jpg" },
  { key: "Amasya", img: "imgs/2.jpg" },
  {
    key: "Ankara",
    component: (props) => <Ankara {...props} />,
  },
  {
    key: "Antalya",
    component: (props) => <Antalya {...props} />,
  },
  { key: "Artvin", img: "imgs/5.jpg" },
  { key: "Aydın", img: "imgs/2.jpg" },
  { key: "Balıkesir", img: "imgs/3.jpg" },
  { key: "Bilecik", img: "imgs/4.jpg" },
  { key: "Bingöl", img: "imgs/5.jpg" },
  { key: "Bitlis", img: "imgs/2.jpg" },
  { key: "Bolu", img: "imgs/3.jpg" },
  { key: "Burdur", img: "imgs/4.jpg" },
  {
    key: "Bursa",
    component: (props) => <Bursa {...props} />,
  },
  { key: "Çanakkale", img: "imgs/2.jpg" },
  { key: "Çankırı", img: "imgs/3.jpg" },
  { key: "Çorum", img: "imgs/4.jpg" },
  { key: "Denizli", img: "imgs/image.svg" },
  {
    key: "Diyarbakir",
    component: (props) => <Diyarbakir {...props} />,
  },
  { key: "Edirne", img: "imgs/5.jpg" },
  { key: "Elazığ", img: "imgs/2.jpg" },
  { key: "Erzincan", img: "imgs/3.jpg" },
  { key: "Erzurum", img: "imgs/4.jpg" },
  { key: "Eskişehir", img: "imgs/5.jpg" },
  { key: "Gaziantep", img: "imgs/2.jpg" },
  { key: "Giresun", img: "imgs/3.jpg" },
  { key: "Gümüşhane", img: "imgs/4.jpg" },
  { key: "Hakkari", img: "imgs/5.jpg" },
  { key: "Hatay", img: "imgs/2.jpg" },
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
  { key: "Kars", img: "imgs/3.jpg" },
  { key: "Kastamonu", img: "imgs/4.jpg" },
  { key: "Kayseri", img: "imgs/5.jpg" },
  { key: "Kırklareli", img: "imgs/2.jpg" },
  { key: "Kırşehir", img: "imgs/3.jpg" },
  { key: "Kocaeli", img: "imgs/4.jpg" },
  {
    key: "Konya",
    component: (props) => <Konya {...props} />,
  },
  { key: "Kütahya", img: "imgs/2.jpg" },
  { key: "Malatya", img: "imgs/3.jpg" },
  {
    key: "Manisa",
    component: (props) => <Manisa {...props} />,
  },
  { key: "Kahramanmaraş", img: "imgs/5.jpg" },
  { key: "Mardin", img: "imgs/2.jpg" },
  { key: "Muğla", img: "imgs/3.jpg" },
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
  { key: "Karabük", img: "imgs/5.jpg" },
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
