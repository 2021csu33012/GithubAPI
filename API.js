function requestRepos(username){
    const req = new XMLHttpRequest();
    const url = `https://api.github.com/users/${username}/repos`;
    req.open('GET', url, true);

    req.onload = function(){
        const data = JSON.parse(this.response);
        console.log(data);

    }

    req.send();

}

requestRepos('torvalds');