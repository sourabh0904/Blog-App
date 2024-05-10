import styles from "./homepage.module.css";
import Featured from "@/components/featured/featured";
import CategoryList from "@/components/categoryList/categoryList";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/menu";
import Pagination from "@/components/Pagination/pagination";

export default function Home() {
  return (
    <div className={styles.conatiner}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
