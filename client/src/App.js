import Footer from "./layout/Footer/components/Footer";
import Header from "./layout/Header/Header";

import "./app.css"
import Main from "./layout/Main/Main";

const App = () => {
  return(
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
