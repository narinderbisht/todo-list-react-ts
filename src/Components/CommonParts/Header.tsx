import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <header className="w-full bg-blue-500 flex flex-row text-white p-4 mx-auto">
        <div className="container mx-auto flex flex-row items-center gap-x-4">
              <div className="basis-1/3 flex flex-row text-left">
                  <i className="fas fa-brands fa-react text-2xl mr-2"></i>
                  React Dev</div>
            <nav className="basis-3/3 flex flex-row justify-end">
                <ul className="flex gap-x-4">
                      <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"todo-app"}>Todo App</Link></li>
                    <li><Link to={"search-app"}>Search App</Link></li>
                </ul>
            </nav>
        </div>
        
    </header>
  )
}

export default Header