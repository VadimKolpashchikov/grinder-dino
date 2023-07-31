import React from "react";
import Header from "./containers/Header.jsx";
import Features from "./containers/Features.jsx";
import Gauge from "./containers/Gauge.jsx";
import Tape from "./containers/Tape.jsx";
import Advantages from "./containers/Advantages.jsx";
import Potential from "./containers/Potential.jsx";
import AllInOne from "./containers/AllInOne.jsx";
import Models from "./containers/Models.jsx";
import Rassrochka from "./containers/Rassrochka.jsx";
import Kit from "./containers/Kit.jsx";
import Quality from "./containers/Quality.jsx";
import Gallery from "./containers/Gallery.jsx";
import Supremacy from "./containers/Supremacy.jsx";
import Shops from "./containers/Shop.jsx";
import Footer from "./containers/Footer.jsx";
import Feedback from "./containers/Feedback.jsx";
import ModalOrder from "./components/ModalOrder.jsx";
import Customers from "./containers/Customers.jsx";
import Question from "./containers/Question.jsx";
import ModalFunctional from "./components/ModalFunctional.jsx";
// import Reviews from "./containers/Reviews.jsx";
import ReviewsTest from "./containers/ReviewsTest.jsx";
import ModalSetting from "./containers/ModalSetting.jsx";
import ModalCall from "./components/ModalCall.jsx";
import ModalThankSuccess from "./components/ModalThankSuccess.jsx";
import ModalSuccess from "./components/ModalSuccess.jsx";
import ModalKitDop from "./components/ModalKitDop.jsx";
import ModalInfo from "./components/ModalInfo.jsx";
import ModalAppeal from "./components/ModalAppeal.jsx";
import ModalThankReview from "./components/ModalThankReview.jsx";
import { useSelector } from "react-redux";

function App() {
  const test = useSelector((state) => state.php.test);
  return (
    <React.Fragment>
      <Header />
      <main>
        <Features />
        <ReviewsTest />
        <Gauge />
        <Tape />
        <Advantages />
        <Potential />
        <AllInOne />
        <Models />
        <Rassrochka />
        <Quality />
        <Supremacy />
        <Customers />
        <Question />
        <Gallery />
        <Kit />
        <Feedback />
        <Shops />
      </main>
      <Footer btn={{ text: "Купить оптом", link: "/opt" }} />
      <ModalOrder />
      <ModalFunctional />
      <ModalCall />
      <ModalAppeal />
      <ModalSuccess />
      <ModalThankSuccess />
      <ModalKitDop />
      <ModalInfo />
      <ModalThankReview />
      <ModalSetting />
    </React.Fragment>
  );
}

export default App;
