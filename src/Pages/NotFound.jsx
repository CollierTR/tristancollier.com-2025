import Nav from "../componets/Nav"

const NotFound = () => {
  return (
    <div className="grid place-content-center h-full">
        <Nav></Nav>

        <p className="text-primary-light text-8xl blackOutline">Page Not Found...</p>
    </div>
  )
}

export default NotFound