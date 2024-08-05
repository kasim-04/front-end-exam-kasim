import '../css/style.css';

import image from './components/image';
import intro from './components/intro';
import languages from './components/languages';
import experience from './components/experience';
import tools from './components/tools';
import education from './components/education';
import interests from './components/interests';
import contact from './components/contact';

import { initSlider } from './slider';
import { editableContentManage } from './editableManage';
import { savePDF } from './savePDF';

document.querySelector('#app').innerHTML = `
    <header class="header">
        <button class="download-button text-1" id="download">Скачать PDF</button>
    </header>
    <main class="container" id="content-to-download">
        ${image()}
        ${intro()}
        ${languages()}
        ${experience()}
        ${tools()}
        ${education()}
        <div class="interests-and-contact">
            ${interests()}
            ${contact()}
        </div>
    </main>
`;

editableContentManage()
initSlider()
savePDF()
