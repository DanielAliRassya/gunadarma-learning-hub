"use client";

import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  courseName: string;
}

export default function Quiz({ questions, courseName }: QuizProps) {
  // Randomly select 5 questions from pool
  const [quizQuestions] = useState(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(5, questions.length));
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(quizQuestions.length).fill(null));

  const currentQuestion = quizQuestions[currentIndex];
  const isCorrect = selectedAnswer === currentQuestion.correct;

  const handleSelectAnswer = (index: number) => {
    if (!showResult) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowResult(true);
    const newAnswers = [...answers];
    newAnswers[currentIndex] = selectedAnswer;
    setAnswers(newAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(answers[currentIndex + 1] ?? null);
      setShowResult(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    // Reselect random 5 questions
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const newQuiz = shuffled.slice(0, Math.min(5, questions.length));
    
    // Reset state with new questions
    quizQuestions.length = 0;
    quizQuestions.push(...newQuiz);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCompleted(false);
    setAnswers(Array(quizQuestions.length).fill(null));
  };

  const percentage = Math.round((score / quizQuestions.length) * 100);

  if (completed) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Kuis Selesai!</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            {courseName}
          </p>

          {/* Score Display */}
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg p-8 text-white mb-8">
            <p className="text-lg mb-2">Skor Anda</p>
            <div className="text-6xl font-bold mb-2">{score}/{quizQuestions.length}</div>
            <p className="text-2xl font-semibold">{percentage}%</p>
          </div>

          {/* Result Message */}
          <div className="mb-8">
            {percentage >= 80 && (
              <div className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg p-4">
                <p className="text-green-800 dark:text-green-300 font-semibold">
                  🎉 Sempurna! Kamu sudah menguasai materi ini.
                </p>
              </div>
            )}
            {percentage >= 60 && percentage < 80 && (
              <div className="bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded-lg p-4">
                <p className="text-blue-800 dark:text-blue-300 font-semibold">
                  ✨ Bagus! Coba pelajari kembali materi yang belum dipahami.
                </p>
              </div>
            )}
            {percentage < 60 && (
              <div className="bg-orange-100 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-700 rounded-lg p-4">
                <p className="text-orange-800 dark:text-orange-300 font-semibold">
                  💡 Terus belajar! Baca materi lengkap dan coba kembali.
                </p>
              </div>
            )}
          </div>

          {/* Answer Review */}
          <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-bold text-lg mb-4">Ringkasan Jawaban:</h3>
            <div className="space-y-2">
              {quizQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded"
                >
                  {answers[idx] === q.correct ? (
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  )}
                  <span className="text-sm">
                    Soal {idx + 1}: {answers[idx] === q.correct ? "Benar ✓" : "Salah ✗"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            <RotateCcw className="w-5 h-5" />
            Ulang Kuis
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8 max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
            Soal {currentIndex + 1} dari {quizQuestions.length}
          </p>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            Skor: {score}/{quizQuestions.length}
          </p>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
          {currentQuestion.question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectAnswer(idx)}
              disabled={showResult}
              className={`w-full p-4 rounded-lg border-2 text-left transition font-medium ${
                selectedAnswer === idx
                  ? showResult
                    ? idx === currentQuestion.correct
                      ? "border-green-500 bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-100"
                      : "border-red-500 bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-100"
                    : "border-blue-500 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100"
                  : showResult && idx === currentQuestion.correct
                  ? "border-green-500 bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-100"
                  : "border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-100 hover:border-slate-400 dark:hover:border-slate-500"
              } disabled:cursor-not-allowed`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    selectedAnswer === idx
                      ? showResult
                        ? idx === currentQuestion.correct
                          ? "border-green-600 bg-green-600"
                          : "border-red-600 bg-red-600"
                        : "border-blue-600 bg-blue-600"
                      : showResult && idx === currentQuestion.correct
                      ? "border-green-600 bg-green-600"
                      : "border-slate-400"
                  }`}
                >
                  {selectedAnswer === idx && showResult && idx === currentQuestion.correct && (
                    <CheckCircle className="w-4 h-4 text-white" />
                  )}
                  {selectedAnswer === idx && showResult && idx !== currentQuestion.correct && (
                    <XCircle className="w-4 h-4 text-white" />
                  )}
                  {selectedAnswer === idx && !showResult && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Explanation (shown after answer) */}
      {showResult && (
        <div
          className={`mb-8 p-4 rounded-lg border-l-4 ${
            isCorrect
              ? "border-green-500 bg-green-50 dark:bg-green-900/20"
              : "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
          }`}
        >
          <p className="font-semibold mb-2">
            {isCorrect ? "✅ Benar!" : "❌ Salah"}
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            {currentQuestion.explanation}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4">
        {!showResult ? (
          <button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Jawab
          </button>
        ) : (
          <>
            <button
              onClick={() => setShowResult(false)}
              className="flex-1 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            >
              Ubah Jawaban
            </button>
            <button
              onClick={handleNext}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              {currentIndex === quizQuestions.length - 1 ? "Selesai" : "Soal Berikutnya"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
