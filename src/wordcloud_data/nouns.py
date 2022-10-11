import numpy as np
# from konlpy.tag import Okt
from konlpy.tag import Komoran

komoran = Komoran()

agesAndYears = [[21,2022],[21,2021],[21,2020],[20,2020],[20,2019],[20,2018],[20,2017],[20,2016],[19,2016],[19,2015],[19,2014],[19,2013],[19,2012]]

def getBillsNouns(age, year): 
  name = age + 'th-' + year
  # okt = Okt()

  file = open('./wordcloud/bills/' + name + '.txt', 'r')    # hello.txt 파일을 읽기 모드(r)로 열기. 파일 객체 반환
  txt = file.read()                                         # 파일에서 문자열 읽기
  file.close()                                              # 파일 객체 닫기
  nounsTxt = komoran.nouns(txt);

  np.savetxt('./wordcloud/billsNouns/' + name + '-nouns.txt', np.sort(nounsTxt), fmt='%s', newline=', ');

  print(name + '-nouns.txt' + '*******Done!*******')
  

for year in agesAndYears:
  getBillsNouns(str(year[0]), str(year[1]));