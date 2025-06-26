const { createContext } = require("react")

export const MyContextValue = {
  info: 'コンテキスト',
  content: 'コンテキストコンテンツ'
}

export const MyContext = createContext(MyContextValue);
