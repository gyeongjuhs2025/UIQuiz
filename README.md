# UIQuiz
2025학년 1학기 UI디자인2-7,2-8, 기말고사,NCS 모듈, KRDS, Figma
``` chat 프롬프
응용프로그래밍 학습지문제 25문항을  문제1번 지문을 클릭하면 정답이 바로 문제1 지문 바로 아래에 학생이 정답을 입력하도록하고 입력이 완료되면 엔터키를 누르면 문제1에 대한 정답이 디스플레이되어 자신의 정답이 맞는지를 채점한다. 정답지 파일에서 키워드가 2개 이상 포함되면 정답으로 인정하여 문항당 4점으로 하여 채점을 하고 25문항을 학생이 모두 풀고나면 총점이 출력되도록한다. 총점이 0~20점 사이이면, "다시 응시하면 더 좋은 점수를 획득할 수 있습니다"를 21~40점 사이이면 조금 더 노력하면 60점으로 충분히 도달 할수 있겠네요"를 41~60점 사이이면 "복습한 시간에 비해 점수가 조금 낮게 나온것 같아요~ 오늘 컨디션이 좋지 않나 보네요 신나게 다시 도전해보면 상위의 점수를 획득할 수 있겠네요"를 61~80점사이이면 "좋아요~ 만족할만한 점수에 도달하려면  한 번 더 풀어보세요"를 81~100점 사이이면 "엑설런트 훌룽한 점수 입니다. 만점에 컨디션이 좋으면 100점에 도전해 보세요!" 라는 메시지로 학습의 욕구를 불러일으킬수 있는 문구를 점수대 별로 보여 주는 자바스크립트 코드를 작성해 주세요. 그리고 github에 자바스크립트 코드에 올리는 깃명령을 알려주세요. 에디터는 VSCode 이미 설치 되어 있고 , git bash도 설치되어 있어요 . 그러니 VSCode 에서 프로젝트 생성하고 소스코드를 github와 연동하여 html, JavaScript 코드를 작성해주면 고맙겠어. 절차를 구체적으로 설명해줘. 정보과 중학생이 코드를 작성할 거야.
```
자바스크립트 채점 시스템 + 점수 피드백 + VSCode + GitHub 업로드 절차

1. VSCode 프로젝트 폴더 생성 : index.html, script.js 생성 후 위 코드 붙여넣기
2. Git 초기화 및 GitHub 업로드

```
# Git Bash 또는 VSCode 터미널에서
cd 경로/프로젝트폴더명
git init
git add .
git commit -m "응용 프로그래밍 자동 채점기 초안"

```
3. Token 복사 하기 : Setting > Developer > Token > 
4. GitHub 토큰으로 원격(origin) 연결하는 명령어 : git remote add origin https://ghp_토큰값@github.com/gyeongjuhs2025/UIQuiz.git

```
user@▒▒▒▒▒▒ MINGW64 ~/Desktop/UIQuiz (main)
$ git remote remove origin

user@▒▒▒▒▒▒ MINGW64 ~/Desktop/UIQuiz (main)
$ git remote add origin https://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@github.com/gyeongjuhs2025/UIQuiz.git

user@▒▒▒▒▒▒ MINGW64 ~/Desktop/UIQuiz (main)
$ git push -u origin main
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 3.63 KiB | 1.21 MiB/s, done.
Total 5 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/gyeongjuhs2025/UIQuiz.git
   60865aa..53009a1  main -> main
branch 'main' set up to track 'origin/main'.

```
5. Google Classroom 공유 방법
GitHub 저장소에 접속

index.html 파일 우클릭 → "Raw" 클릭 → URL 복사

[https://htmlpreview.github.io/](HTML Preview 접속)

복사한 URL 붙여넣기

생성된 링크를 구글 클래스룸 과제에 첨부
