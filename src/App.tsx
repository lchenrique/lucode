
import { Home } from './pages/home';
import './lib/i18n';
import { Suspense, useEffect } from 'react';
import { Header } from './components/layout/header';
import { useTranslate } from './hooks/use-translate';
import 'react-photo-view/dist/react-photo-view.css';
import i18n from './lib/i18n';


function App() {
  useTranslate()

  useEffect(() => {
    const lang = localStorage.getItem("language")
    if (lang) {
      i18n.changeLanguage(lang)
    }
  }, [])

  return <Suspense fallback="loading">
    <Header />
    <Home />
  </Suspense>
}

export default App;
