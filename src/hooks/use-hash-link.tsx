import { useEffect, useState } from "react";

export interface IuseHashLinkProps {
}

const useHashLink = (sections:string[]) => {
  const [activeHashLink, setActiveHashLink] = useState("")

  useEffect(() => {
    function verificarPosicao() {
      const header = document.getElementById('meuHeader'); // Substitua 'meuHeader' pelo ID do seu cabeçalho
      const sectionsArr = sections.map((section) => {
        return  {element: document.getElementById(section.slice(1)) , section}
      })

      sectionsArr.forEach((item) => {
        const sectionElement = item.element
        if (header && sectionElement) {
          const headerRect = header.getBoundingClientRect();
          const secaoRect = sectionElement.getBoundingClientRect();
  
          if (headerRect.bottom +100 >= secaoRect.top && headerRect.top   <= secaoRect.bottom) {
            setActiveHashLink(item.section)
          } 
        }
      })
      
    }

    window.addEventListener('scroll', verificarPosicao);
    return () => {
      window.removeEventListener('scroll', verificarPosicao);
    };
  }, [sections]);


  return {activeHashLink}
};

export {useHashLink};