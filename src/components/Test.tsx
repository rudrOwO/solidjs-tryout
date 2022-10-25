import { Component, createSignal, onMount } from "solid-js"

let myRef: HTMLInputElement
const [count, setCount] = createSignal(0)

const increaseCount = (i: number) => {
  setCount(count() + i)
}

const Test: Component = () => {
  return (
    <>
      <div>Count: {count()}</div>
      <input type="number" ref={myRef!}></input>
      <button onclick={() => increaseCount(parseInt(myRef.value === "" ? "0" : myRef.value))}>
        Increase
      </button>
    </>
  )
}

export default Test
