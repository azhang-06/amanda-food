import { NavLink } from 'react-router-dom'

const NavHeader = () => {
  return (
    <header>
      <nav class="header">
        <div>
          <ul class="header_list">
              <NavLink to="/home">
                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCA1MCA1MCI+CjxwYXRoIGQ9Ik0gMCA5IEwgMCAxMSBMIDUwIDExIEwgNTAgOSBaIE0gMCAyNCBMIDAgMjYgTCA1MCAyNiBMIDUwIDI0IFogTSAwIDM5IEwgMCA0MSBMIDUwIDQxIEwgNTAgMzkgWiI+PC9wYXRoPgo8L3N2Zz4="/>
              </NavLink>
              <div style={{ flexDirection: 'row', display: 'flex'}}>
              <img class="icon" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCI+CjxwYXRoIGQ9Ik0gMjEgMyBDIDExLjYyMTA5NCAzIDQgMTAuNjIxMDk0IDQgMjAgQyA0IDI5LjM3ODkwNiAxMS42MjEwOTQgMzcgMjEgMzcgQyAyNC43MTA5MzggMzcgMjguMTQwNjI1IDM1LjgwNDY4OCAzMC45Mzc1IDMzLjc4MTI1IEwgNDQuMDkzNzUgNDYuOTA2MjUgTCA0Ni45MDYyNSA0NC4wOTM3NSBMIDMzLjkwNjI1IDMxLjA2MjUgQyAzNi40NjA5MzggMjguMDg1OTM4IDM4IDI0LjIyMjY1NiAzOCAyMCBDIDM4IDEwLjYyMTA5NCAzMC4zNzg5MDYgMyAyMSAzIFogTSAyMSA1IEMgMjkuMjk2ODc1IDUgMzYgMTEuNzAzMTI1IDM2IDIwIEMgMzYgMjguMjk2ODc1IDI5LjI5Njg3NSAzNSAyMSAzNSBDIDEyLjcwMzEyNSAzNSA2IDI4LjI5Njg3NSA2IDIwIEMgNiAxMS43MDMxMjUgMTIuNzAzMTI1IDUgMjEgNSBaIj48L3BhdGg+Cjwvc3ZnPg=="/>
              <img class="icon" alt='Food' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABh0lEQVR4nO2VyytEYRjGf0MRIwu3hUIsbCiXJisWQtlo8pcYK0ts7Ngou1lYyshGyrDxF0hWUyiK3IbksjKOTj1TX8c5xznOzIqn3sV5n+d93u+8fRf4R5nQpAiiawxr3gasAbeApbgCFoC4oYsrd23oboBVoPWnJsNA3ih8dHzngG5FzsjnpS1+3wFDXk1agHsJd4Aeg5sATsVdKizlxg1dr2qLf9fg1mhJgj2gwoWvAw6NVR8o54Rdm5XGHu03nIi0x+eFemBfRrU+uhF5HbmRryL9DIIiLq8XN/JdZOht6rHdLS3ec3SjRMeYvI7dyEWRmRI02pLXvBvZrPF9AtMRmkzJ483vVpk1DmrfL5r0A0/ymPETxoBNCR+ARIgmCeMW2ZCXL6qAbWPXJAM0mQSeVbMLVAddnd1sXYUfQMpHm5LGUo1dGxpzQEEmK45xxIBlcQVpIyGpE24bpoFKRdo4/UHGGwiDxruTURTfqQFKjA7g3Li9z4B2yoQu4ELRSZlRo/jj+AJBbHcLuft3iQAAAABJRU5ErkJggg==" />
            </div>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavHeader