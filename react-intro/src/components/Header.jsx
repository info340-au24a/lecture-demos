export function HeaderComponent(props) {

  const myTitle = "Hello Inline React"

  return (
    <header>
      <h1>{myTitle.toUpperCase() + "!!!"}</h1>
      <p>This is a react demo!</p>
    </header>
  )
}
