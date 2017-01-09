

exports.isAdmin = function (pet, res) {
	if(!pet.get('authorization'))
	{
		return false;
	}
	else {
		var data = getLoginAndPass(pet.get('authorization'));
		if (data.username === 'admin' && data.password === '123456') {
	    	return true;
	 	}
	 	return false;
	 }
};

exports.getLogIn = function (username, password){
	if(username === 'admin' && password === '123456') {
		localStorage.username = username;
		localStorage.password = password;
		localStorage.loggedIn = true;
    }
};

exports.getLogOut = function() {
    delete localStorage.username;
    delete localStorage.password;
    delete localStorage.loggedIn;
};

function getLoginAndPass(auth) {
	const base64 = auth.substr('Basic'.length);
	const ascii = new Buffer(base64,'base64').toString('ascii');
	const username = ascii.split(':')[0];
  	const password = ascii.split(':')[1];
  	var user = {username: username,
  				password: password};
  	return user;
}

exports.loginPassTob64 = function(username, password){
	var text = username +':'+ password;
	const base64 = btoa(text);
	return base64;
}
