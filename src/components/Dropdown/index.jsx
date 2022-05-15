import { useRef, useState } from 'react';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import {useClickOutside} from '../../hooks/ClickOutside'

const Dropdown = ({ icon = null, customClass, width = '150px', langs=[]}) => {
  
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => {
    setShowDrop(false)
  });
  const [lang, setLang] = useState(langs[0]);
  const [showDrop, setShowDrop] = useState(false);

  return (
    <div ref={wrapperRef} className={`w-[${width}] inline-block relative`}>
        <button 
          onClick={() => setShowDrop(!showDrop)}
          className={`${customClass} flex items-center justify-center border rounded-md py-[5px] px-[10px] transition ease-in delay-75 hover:shadow-sm hover:shadow-teal-bright`}>
          {lang.flag && <img src={lang.flag} alt="flag" className="w-[24px] h-[24px] mr-[5px]" />}
          <p className='sm-text'>{lang.title}</p>
          {icon === 'down' ? <VscChevronDown className='ml-[5px]' /> : icon === 'up' && <VscChevronUp className='ml-[5px]' /> }
        </button>
        <ul className={`${showDrop ? 'block' : 'hidden'} absolute border rounded-md mt-[3px] bg-white`}>
          {langs.length ?langs.map((lang, i) => {
            return (
              <li
                onClick={() => {
                  setLang(lang)
                  setShowDrop(false)
                }} 
                key={i} 
                className={`transition ease-in delay-75 w-full flex items-center py-[7px] px-[10px] cursor-pointer hover:bg-teal-bright`}>
                {lang.flag && <img src={lang.flag} alt="flag" className="w-[24px] h-[24px] mr-[5px]" />}
                <p className='sm-text'>{lang.title}</p>
              </li>
            )
          }): ''}
        </ul>
    </div>
  )
}

export default Dropdown