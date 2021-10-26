function changeMode() {
	//console.log("cliquei");
	//alert("teste do clique");
	changeClasses();//função que muda as classes
	changeText();//função que muda os textos
}

function changeClasses() {//para modificar as classes
	button.classList.toggle(darkModeClass);//caso "button" ainda não exista aqui o "toggle" irá incluir o elemento
	h1.classList.toggle(darkModeClass);//caso "h1" ainda não exista aqui o "toggle" irá incluir o elemento
	body.classList.toggle(darkModeClass);//caso "body" ainda não exista aqui o "toggle" irá incluir o elemento
	footer.classList.toggle(darkModeClass);//caso "footer" ainda não exista aqui o "toggle" irá incluir o elemento
}

function changeText() {//para mudar os textos
	const lightMode = 'Light Mode';//
	const darkMode = 'Dark Mode';//

	if (body.classList.contains(darkModeClass)) {//irá fazer uma verificação se dentro da class list exite alguma coisa; EX o darqkClass
		button.innerHTML = lightMode;//se verdadeiro irá incluir esse elemento
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');//botão para acionar um "event listener" usando a busca e encontrando "moed-selector"
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];//"[0]" body é um Array por isso faz a busca com o primeiro elemento
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);//envento com uma função "changeMode" 
