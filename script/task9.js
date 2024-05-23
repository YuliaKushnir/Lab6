const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

function countTags(tweetsArray) {
    const tagsCount = {};
  
    tweetsArray.forEach(tweet => {
      tweet.tags.forEach(tag => {
        if (tagsCount[tag]) {
          tagsCount[tag] += 1;
        } else {
          tagsCount[tag] = 1;
        }
      });
    });
  
    return tagsCount;
}
  
const tagsResult = countTags(tweets);
console.log(tagsResult);
const tagsResultString = Object.entries(tagsResult).map(([tag, count]) => `${tag}: ${count}`).join(', ');
document.getElementsByClassName('task9_1')[0].innerHTML = tagsResultString;
