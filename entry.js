import Application from './src/application';
import styles from './styles/styles.css';

if (module.hot) {
  module.hot.accept();
}

const application = new Application
application.init();