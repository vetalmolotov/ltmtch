/**
 * Application entry point
 */

// Load application styles
import 'scss/_index.scss';
// ================================
const copyButton = document.getElementById("copy-button")
const code = document.getElementById("code")

const copyText = () => {
    let text = code.innerText;

    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    document.execCommand('copy');
    console.log('copied text is ' + code.innerText);
}
console.log(code.innerText);
copyButton.addEventListener("click", copyText)
