import { randomElements } from '@/lib/arrays'
import wordsData from '@/json/words.json'

export const state = () => ({
  words: [],
  board: []
})

export const getters = {
  getBoard: (state) => {
    return state.board
  }
}

export const actions = {
  setWords({ commit, dispatch }) {
    commit('SET_WORDS', wordsData)
    dispatch('createBoard')
  },

  createBoard({ commit, state }) {
    const randomWords = randomElements(state.words, 25)
    const board = randomWords.map((word) => {
      return {
        word,
        flipped: false,
        assigned: 'CIVILIAN'
      }
    })
    commit('SET_BOARD', board)
  },

  flipCard({ commit, state }, cardWord) {
    const cardIndex = state.board.findIndex(card => card.word === cardWord)
    commit('FLIP_CARD', cardIndex)
  }
}

export const mutations = {
  'SET_WORDS'(state, words) {
    state.words = words
  },

  'SET_BOARD'(state, boardCards) {
    state.board = boardCards
  },

  'FLIP_CARD'(state, index) {
    const card = state.board[index]
    card.flipped = true
  }
}
