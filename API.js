function requestRepos(username){
    const reqFull = new XMLHttpRequest();
    const req = new XMLHttpRequest();
    const reqFollowers = new XMLHttpRequest();
    const reqFollowing = new XMLHttpRequest();
    const urlFull = `https://api.github.com/users/${username}`;
    const url = `https://api.github.com/users/${username}/repos`;
    const urlFollowers = `https://api.github.com/users/${username}/followers`;
    const urlFollowing = `https:api.github.com/users/${username}/following`;
    reqFull.open('GET', urlFull, true);
    req.open('GET', url, true);
    reqFollowers.open('GET', urlFollowers, true);
    reqFollowing.open('GET', urlFollowing, true);

    req.onload = function(){
        const data = JSON.parse(this.response);
        console.log(data);

    }

    req.send();

    reqFull.onload = function(){
        const fullData = JSON.parse(this.response);
        console.log(fullData);

        for (let i in fullData){
            console.log('Followers: ', fullData.followers);
            if (fullData.following != null){
            console.log('Following: ', fullData.following);
            }
        }
    }

    reqFull.send();

}

requestRepos('torvalds');