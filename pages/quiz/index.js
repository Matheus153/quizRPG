/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';
import db from '../../db.json';

import GitHubCorner from '../../src/components/GitHubCorner'
import { motion } from 'framer-motion'

export default function QuizDaGaleraPage() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen
        externalQuestions={db.questions}
        externalBg={db.bg1}
      />
      <GitHubCorner
      as={motion.div}
      transition={{ delay: 0.2, duration: 0.55 }}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '100%'}
      }}
      initial="hidden"
      animate="show"
      
      projectUrl="https://github.com/Matheus153"></GitHubCorner>
    </ThemeProvider>
  );
}
