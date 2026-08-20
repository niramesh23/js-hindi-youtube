const name = "hitesh"
const repoCount = 50

//console.log(name + repoCount + "value");

//console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String(`hitesh-hc-com`)
//console.log(gameName[0]);
//console.log(gameName.__proto__);



//console.log(gameName.length); // this will give length of string
//console.log(gameName.toLowerCase()); // this will string in lower case
console.log(gameName.charAt(2));//at 2 index which one is present in string
console.log(gameName.indexOf(`t`));// at what index 2 is present

const newString = gameName.substring(0,4) // 0 starting index,4 ending index this 4 will not be included
console.log(newString);                    //Does NOT support negative indexes,cosider negative index as zero

const anotherString = gameName.slice(-8,4)//start 8th position from end 
console.log(anotherString); // support negative index

const newStringOne = "    hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());//trim remove extra spaces from both side front and back

const url = "https://hitesh.com/hitesh20%choudhary"

console.log(url.replace('20%','-'))//replace kr dega url k 20% ko - sign se
console.log(url);//fir se vhi purana url de rha kyu
console.log(url.includes('hitesh'))// hitesh hai ki nhi url me ye btayega

// now i am going to convert string into array
console.log(gameName.split('-'));// jb jb - sign aayega tbtb split krega






