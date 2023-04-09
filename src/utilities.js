const shuffleArray = (array) => {
  const currArray = [...array]
  const shuffleArray = currArray.sort(() => Math.random() - 0.5)
  return shuffleArray
}

export {
  shuffleArray
}