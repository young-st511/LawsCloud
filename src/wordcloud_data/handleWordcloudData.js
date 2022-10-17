import {readFileSync, writeFileSync} from "fs";

const agesAndYears = [
  [21, 2022],
  [21, 2021],
  [21, 2020],
  [20, 2020],
  [20, 2019],
  [20, 2018],
  [20, 2017],
  [20, 2016],
  [19, 2016],
  [19, 2015],
  [19, 2014],
  [19, 2013],
  [19, 2012],
  [18, 2012],
  [18, 2011],
  [18, 2010],
  [18, 2009],
  [18, 2008],
  [17, 2008],
  [17, 2007],
  [17, 2006],
  [17, 2005],
  [17, 2004],
  [16, 2004],
  [16, 2003],
  [16, 2002],
  [16, 2001],
  [16, 2000],
];

// const outString = ['법', '등', '법률', '안'];
const outString = [
  "법",
  "등",
  "법률",
  "안",
  "지원",
  "특별법",
  "특례",
  "제한",
  "기본법",
  "관리",
  "진흥",
  "법안",
  "관리법",
  "조치",
  "등에",
  "개정",
  "특별",
  "관",
  "한",
  "특례법",
  "개정",
  "관련",
];

const wordcloudData = {};

//# 실행 구역!!
for (const elem of agesAndYears) {
  wordcloudData[elem[0] + "-" + elem[1]] = makeBillsWordcloudData(elem[0], elem[1], 100);
}
writeFileSync(`./wordcloud/cloudNouns/cloud-nouns-3.json`, JSON.stringify(wordcloudData), "utf8");
// makeBillsWordcloudData(21, 2021, 100);
////실행 구역!!

function makeBillsWordcloudData(age, year, wordsNum = 30) {
  const billsCloudData = makeWordcloudData(`./wordcloud/billsNouns/${age}th-${year}-nouns.txt`, wordsNum);
  // writeFileSync(
  //   `./wordcloud/cloudNouns/${age}th-${year}-cloud-nouns.json`,
  //   JSON.stringify(billsCloudData),
  //   'utf8'
  // );

  console.log(`${age}th-${year}-cloud-nouns.txt`, "**Done!**");

  return billsCloudData;
}

function makeWordcloudData(fileURL, wordsNum = 30) {
  const nouns = readFileSync(fileURL, "utf8");
  const nounsArr = nouns.split(", ");

  const sortedArr = getSortedArr(nounsArr).slice(0, wordsNum);

  return sortedArr;
}

function getSortedArr(array) {
  const counts = array.reduce((pv, cv) => {
    pv[cv] = (pv[cv] || 0) + 1;
    return pv;
  }, {});

  const result = [];
  for (let key in counts) {
    result.push([key, counts[key]]);
  }

  result.sort((first, second) => {
    return second[1] - first[1];
  });

  return result.filter((noun) => !outString.includes(noun[0]));
}
