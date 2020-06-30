text = `<a href="//www.regexbuddy.com/create.html" target="_top"><img src="ads/728/rxbtutorial100.png" srcset="ads/728/rxbtutorial100.png 1x, ads/728/rxbtutorial125.png 1.25x, ads/728/rxbtutorial150.png 1.5x, ads/728/rxbtutorial175.png 1.75x, ads/728/rxbtutorial200.png 2x, ads/728/rxbtutorial250.png 2.5x, ads/728/rxbtutorial300.png 3x, ads/728/rxbtutorial350.png 3.5x, ads/728/rxbtutorial400.png 4x" alt="RegexBuddy—Better than a regular expression tutorial!"></a>
<img src="ads/728/rxbtutorial100.png" srcset="ads/728/rxbtutorial100.png 1x, ads/728/rxbtutorial125.png 1.25x, ads/728/rxbtutorial150.png 1.5x, ads/728/rxbtutorial175.png 1.75x, ads/728/rxbtutorial200.png 2x, ads/728/rxbtutorial250.png 2.5x, ads/728/rxbtutorial300.png 3x, ads/728/rxbtutorial350.png 3.5x, ads/728/rxbtutorial400.png 4x" alt="RegexBuddy—Better than a regular expression tutorial!">
<a href="//www.regexbuddy.com/create.html" target="_top"><img src="ads/728/rxbtutorial100.png" srcset="ads/728/rxbtutorial100.png 1x, ads/728/rxbtutorial125.png 1.25x, ads/728/rxbtutorial150.png 1.5x, ads/728/rxbtutorial175.png 1.75x, ads/728/rxbtutorial200.png 2x, ads/728/rxbtutorial250.png 2.5x, ads/728/rxbtutorial300.png 3x, ads/728/rxbtutorial350.png 3.5x, ads/728/rxbtutorial400.png 4x" alt="RegexBuddy—Better than a regular expression tutorial!"></a>`;

let rg = /href=".*?"/g;

let array = text.match(rg);

console.log(array)