let problems = [];
const scorePerQuestion = 4;

function createQuiz() {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";

  problems.forEach((problem, index) => {
    const savedAnswer = localStorage.getItem(`answer${index}`) || "";

    quizDiv.innerHTML += `
      <div id="question-block-${index}" class="question-block">
        <p>${problem.question}</p>
        <input type="text" id="answer${index}" value="${savedAnswer}" placeholder="정답을 입력하세요"><br><br>
      </div>
    `;
  });
}

// 채점 및 피드백
function submitAnswers() {
  let totalScore = 0;
  const incorrectIndexes = [];

  problems.forEach((problem, index) => {
    const input = document.getElementById(`answer${index}`);
    const userAnswer = input.value.trim();

    // 저장
    localStorage.setItem(`answer${index}`, userAnswer);

    let matchCount = 0;

    // ✅ 대소문자 및 공백 무시 비교 적용
    const normalizedUserAnswer = userAnswer.toLowerCase().replace(/\s/g, "");
    // const normalizedUserAnswer = userAnswer.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    problem.keywords.forEach(keyword => {
      const normalizedKeyword = keyword.toLowerCase().replace(/\s/g, "");
    //   const normalizedKeyword = keyword.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      if (normalizedUserAnswer.includes(normalizedKeyword)) {
        matchCount++;
      }
    });

    const isCorrect = matchCount >= 2;
    if (isCorrect) totalScore += scorePerQuestion;
    else incorrectIndexes.push(index);

    // 정답 및 채점 결과 표시
    const block = document.getElementById(`question-block-${index}`);

    const answerDisplay = document.createElement("p");
    answerDisplay.style.color = "green";
    answerDisplay.innerText = `정답: ${problem.keywords.join(", ")}`;
    block.appendChild(answerDisplay);

    const resultDisplay = document.createElement("p");
    resultDisplay.style.fontWeight = "bold";
    resultDisplay.style.color = isCorrect ? "blue" : "red";
    resultDisplay.innerText = `결과: ${isCorrect ? "⭕️" : "❌"}`;
    block.appendChild(resultDisplay);

    // 스타일 적용
    if (!isCorrect) {
      block.style.border = "2px solid red";
      block.style.backgroundColor = "#ffe6e6";
    }
  });

  showFeedback(totalScore);
  showRetryButton();
}

// 피드백 메시지
function showFeedback(score) {
  const resultDiv = document.getElementById("result");
  let message = "";

  if (score <= 20) {
    message = "다시 응시하면 더 좋은 점수를 획득할 수 있습니다.";
  } else if (score <= 40) {
    message = "조금 더 노력하면 60점으로 충분히 도달할 수 있겠네요.";
  } else if (score <= 60) {
    message = "복습한 시간에 비해 점수가 조금 낮게 나온 것 같아요~ 다시 도전해보면 상위 점수를 받을 수 있겠네요!";
  } else if (score <= 80) {
    message = "좋아요~ 만족할만한 점수에 도달하려면 한 번 더 풀어보세요.";
  } else {
    message = "엑설런트! 훌륭한 점수입니다. 만점에 도전해보세요!";
  }

  resultDiv.innerText = `총점: ${score}점\n${message}`;
}

// ✅ 틀린 문제만 다시 풀기 버튼
function showRetryButton() {
  const button = document.createElement("button");
  button.innerText = "❓ 틀린 문제만 다시 풀기";
  button.onclick = retryIncorrect;
  document.body.appendChild(button);
}

// ✅ 틀린 문제만 다시 풀기 기능
function retryIncorrect() {
  problems.forEach((problem, index) => {
    const block = document.getElementById(`question-block-${index}`);
    const input = document.getElementById(`answer${index}`);
    const resultText = block.querySelector("p:nth-of-type(3)");

    if (resultText && resultText.innerText.includes("❌")) {
      block.innerHTML = `
        <p>${problem.question}</p>
        <input type="text" id="answer${index}" value="" placeholder="정답을 다시 입력하세요"><br><br>
      `;
      block.style.border = "none";
      block.style.backgroundColor = "#fff";
      localStorage.removeItem(`answer${index}`);
    } else {
      block.style.display = "none"; // 정답 맞은 문제 숨김
    }
  });

  // 결과 및 버튼 제거
  document.getElementById("result").innerText = "";
  this.remove(); // 버튼 제거
}

// 문제 불러오기
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    problems = data;
    createQuiz();
  })
  .catch(error => {
    document.getElementById("quiz").innerText = "문제를 불러오지 못했습니다.";
    console.error("문제 로드 실패:", error);
  });
