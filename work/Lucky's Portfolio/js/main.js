const toggle = document.querySelector('#toggle-btn');
const altnav = document.querySelector('.alt-nav');
const closeBtn = document.querySelector('#close-btn');


	

	let openMenu = () => {
		altnav.style.height = '100vh';
		console.log('Open sesame!!');
	}

	let closeMenu = () => {
		altnav.style.height = '0';
	}



	toggle.addEventListener('click', openMenu);
	closeBtn.addEventListener('click', closeMenu);

















