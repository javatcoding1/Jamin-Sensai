"use client";

import { Trophy, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function QuizResult({
  result,
  hideStartNew = false,
  onStartNew,
}) {
  if (!result) return null;

  const scoreVariant = result.quizScore >= 80 ? 'excellent' : 
                      result.quizScore >= 60 ? 'good' : 'poor';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-3xl"
    >
      <div className="text-center mb-8 space-y-4">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-flex items-center justify-center relative"
        >
          <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-pulse" />
          <Trophy className="h-12 w-12 text-yellow-400" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent"
        >
          Quiz Results
        </motion.h1>
      </div>

      <CardContent className="space-y-8">
        {/* Score Overview */}
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold">{result.quizScore.toFixed(1)}%</h3>
          <Progress value={result.quizScore} className="w-full" />
        </div>


        {/* Improvement Tip */}
        {result.improvementTip && (
          <motion.div 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 space-y-3 relative"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl" />
            <div className="flex items-center gap-3 text-yellow-400 z-10 relative">
              <Sparkles className="h-5 w-5" />
              <h3 className="font-semibold">Pro Tip</h3>
            </div>
            <p className="text-gray-300 leading-relaxed z-10 relative">
              {result.improvementTip}
            </p>
          </motion.div>
        )}

        {/* Questions Review */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-center text-gray-300 pb-3">
            Detailed Review
          </h3>
          {result.questions.map((q, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "group relative rounded-xl p-5 space-y-4 border border-gray-700 bg-gray-800/30",
                "hover:border-yellow-400/30 transition-all duration-200",
                "hover:bg-gradient-to-br from-yellow-500/5 to-orange-500/5"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-yellow-400">
                      Q{index + 1}
                    </span>
                    <p className="font-medium text-gray-200">
                      {q.question}
                    </p>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className={cn(
                      "inline-block px-2 py-1 rounded-md border",
                      q.isCorrect 
                        ? "text-green-400 border-green-400/30 bg-green-400/10"
                        : "text-red-400 border-red-400/30 bg-red-400/10"
                    )}>
                      Your answer: {q.userAnswer}
                    </p>
                    {!q.isCorrect && (
                      <p className="text-emerald-400 border-emerald-400/30 bg-emerald-400/10 inline-block px-2 py-1 rounded-md border">
                        Correct answer: {q.answer}
                      </p>
                    )}
                  </div>
                </div>
                {q.isCorrect ? (
                  <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-400 flex-shrink-0" />
                )}
              </div>
              <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600">
                <div className="flex items-center gap-2 text-sm font-medium text-yellow-400 mb-2">
                  <Sparkles className="h-4 w-4" />
                  <span>Explanation</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {q.explanation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>

      {!hideStartNew && (
        <CardFooter>
          <Button onClick={onStartNew} className="w-full">
            Start New Quiz
          </Button>
        </CardFooter>
      )}

    </motion.div>
  );
}