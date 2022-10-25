import type { Component } from "solid-js"
import styles from "./App.module.css"

import Test from "./components/Test"

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Test />
    </div>
  )
}

export default App
