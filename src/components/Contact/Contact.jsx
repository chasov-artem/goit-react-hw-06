import styles from "./Contact.module.css";
import { IoAccessibility, IoCall } from "react-icons/io5";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={styles.cardWrap}>
      <li className={styles.textWrap}>
        <span className={styles.name}>
          {" "}
          <IoAccessibility />
          {name}
        </span>
        <span className={styles.number}>
          {" "}
          <IoCall />
          {number}
        </span>
      </li>
      <button type="button" className={styles.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
