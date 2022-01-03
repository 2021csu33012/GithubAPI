const githubForm = document.getElementById('githubForm');
//const output = document.querySelector('output');
var averageFollower = 0;
githubForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    let userInput = document.getElementById('userInput');
    let githubUser = userInput.value;
    requestInfo(githubUser);
})

function requestInfo(username){
    e.preventDefault();
    const reqEvents = new XMLHttpRequest();
    var pushEvents = 0;
    var eventType = 'PushEvent';
    var followerCount = 0;
    const urlEvents = `https://api.github.com/users/${username}/events?per_page=100`;
    reqEvents.open('GET', urlEvents, true);
    const reqFull = new XMLHttpRequest();
    const req = new XMLHttpRequest();
    const reqFollowers = new XMLHttpRequest();
    const reqFollowing = new XMLHttpRequest();
    const urlFull = `https://api.github.com/users/${username}`;
    const url = `https://api.github.com/users/${username}/repos`;
    const urlFollowers = `https://api.github.com/users/${username}/followers?per_page=100`;
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


            console.log('Followers: ', fullData.followers);
            followerCount = fullData.followers;
            if (fullData.following != null){
            console.log('Following: ', fullData.following);
            }
    }


    reqFull.send();

    reqEvents.onload = function(){
        const eventData = JSON.parse(this.response);
        console.log(eventData);

        for (let i in eventData){
            if (eventData[i].type == eventType){
                pushEvents++;
            }
        }
        console.log('Pushes: ', pushEvents);
        console.log('Average followers per push: ', followerCount/pushEvents);
        //const res = followerCount/pushEvents;
        const res = 9;
        <p><strong>Average amount of followers per push</strong> $ {followerCount/pushEvents}</p>
        output.textContent = `Result: ${res}`;
        document.getElementById('output').innerHTML = "Average amount of followers earned per push: " + followerCount/pushEvents;
        return res;
    }

    reqEvents.send();
}

function displayRes(){
    var result = requestInfo(username);
    document.getElementById('output').innerHTML = result;
    return false;
}