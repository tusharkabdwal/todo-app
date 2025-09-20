import styles from "./WelcomeMessage.module.css"
const WelcomeMessage = ({currentTodoData}) => {
  return <>
 {currentTodoData.length === 0 && <h3 className={styles.welcome} >Add todo...</h3>}
 </>
}

export default WelcomeMessage;