/* Quiz widget — handles all .quiz elements on the page.
   No dependencies. Call init() or let DOMContentLoaded fire it. */

(function () {
  "use strict";

  function init() {
    document.querySelectorAll(".quiz").forEach(initQuiz);
  }

  function initQuiz(quiz) {
    var questions = Array.from(quiz.querySelectorAll(".question"));
    if (!questions.length) return;

    // Progress tracker
    var tracker = document.createElement("div");
    tracker.className = "quiz-progress";
    tracker.setAttribute("aria-live", "polite");

    var state = { correct: 0, answered: 0, total: questions.length };
    updateTracker(tracker, state);

    // Insert after .quiz-intro if present, else before first question
    var intro = quiz.querySelector(".quiz-intro");
    var insertBefore = intro ? intro.nextSibling : questions[0];
    quiz.insertBefore(tracker, insertBefore);

    questions.forEach(function (q) {
      initQuestion(q, state, tracker);
    });
  }

  function initQuestion(q, state, tracker) {
    var options = Array.from(q.querySelectorAll(".option"));
    options.forEach(function (opt) {
      opt.addEventListener("click", function () {
        if (q.dataset.answered) return;
        answer(q, opt, state, tracker);
      });
      // Keyboard support
      opt.setAttribute("role", "button");
      opt.setAttribute("tabindex", "0");
      opt.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (!q.dataset.answered) answer(q, opt, state, tracker);
        }
      });
    });
  }

  function answer(q, chosen, state, tracker) {
    q.dataset.answered = "1";

    var isCorrect = chosen.dataset.correct === "true";
    var options = Array.from(q.querySelectorAll(".option"));

    options.forEach(function (opt) {
      opt.style.pointerEvents = "none";
      opt.setAttribute("tabindex", "-1");
      if (opt.dataset.correct === "true") {
        opt.classList.add("correct");
      }
    });

    if (!isCorrect) {
      chosen.classList.add("incorrect");
    }

    var feedback = q.querySelector(".feedback");
    if (feedback) {
      feedback.style.display = "block";
      feedback.classList.add(isCorrect ? "feedback-correct" : "feedback-incorrect");
    }

    state.answered++;
    if (isCorrect) state.correct++;
    updateTracker(tracker, state);
  }

  function updateTracker(el, state) {
    el.textContent =
      state.answered === 0
        ? state.total + " question" + (state.total === 1 ? "" : "s")
        : state.correct + " / " + state.total + " correct";
  }

  document.addEventListener("DOMContentLoaded", init);
})();
