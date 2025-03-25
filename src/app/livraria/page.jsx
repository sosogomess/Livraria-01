import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Detach from "../components/detach";
import styles from "./livraria.module.css";
import Category from "../components/category";
import Launch from "../components/launch";


export default function Home() {
  return (
    <div className={styles.bookstoreContainer}>
     <Header />
     <Banner />
     <Detach />
     <Category />
      <Launch />
     <Footer />
    </div>
  );
}