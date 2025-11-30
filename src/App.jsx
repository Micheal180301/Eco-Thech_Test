import ContentSection from './components/ContentSection/ContentSection.jsx';
import DownMenu from './components/DownMenu/DownMenu.jsx';
import Header from './components/Header/Header.jsx';
import TitleSection from './components/TitleSection/TitleSection.jsx';

import './styles/globals.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <TitleSection />
        <ContentSection />
        <DownMenu />
      </main>
    </div>
  );
}

export default App;
