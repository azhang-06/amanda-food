import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


const RecipeCard = ({ item }) => {


  const wrappedUrl = item?._links?.self?.href
  const startIndex = wrappedUrl.indexOf('v2/')
  const endIndex = wrappedUrl.indexOf('?type')
  const link = wrappedUrl.slice(startIndex + 3, endIndex)

  if (!link) {
    // If we don't have a further link then this would be awkward to render
    return null
  }

  const foodDescription = item?.recipe?.ingredients.map((ingredient) => ingredient.text).join(', ')

  return (
    <NavLink to={`/recipe/${link}`} style={{ color: 'black', textDecoration: 'none'  }} >
      <div class="quick_and_easy_content">
          <div class="quick_and_easy_content_text">
          <h3 class="quick_and_easy_content_title">{item?.recipe?.label}</h3>
          <p class="quick_and_easy_content_description">{foodDescription}</p>
          </div>
          <img src={item?.recipe?.images?.THUMBNAIL?.url} alt="hotdog and egg fried rice" width="100" height="100" class="quick_and_easy_image" />
      </div>
    </NavLink>
  )
}

const Homepage = () => {

  const [recipes, setRecipes] = useState([])




  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get('https://api.edamam.com/api/recipes/v2?type=public&app_id=6b569144&app_key=4bfe434ebafe5d34070079508a254236&diet=balanced&cuisineType=Asian')
      console.log('response', response)
      setRecipes(response.data?.hits || [])
      
    }
    fetchRecipes()
  }, [])

  const renderRecipes = useCallback(() => {
    return recipes.map((recipe) => (
      <RecipeCard item={recipe} />
    ))
  }, [recipes])

  return (
    <>
    <section>
        <div class="my_favorites">
          <div class="my_favorites_content">
            <h1 class="my_favorites_content_header">My Favorites</h1>
            <p class="my_favorites_content_text">Welcome to Flavor Favs, where you’ll discover my favorite recipes. Easy simple recipes that does not require a lot of ingredients or time. <br/>Find your favorites from my favorites!</p>
          </div>
          <img src="fried_rice.jpg" alt="fried_rice" width="286" height="148" class="center" />
        </div>
      </section>

      <section>
        <h2 class="quick_and_easy_title">Quick and Easy</h2>
        {renderRecipes()}
      </section>
    </>
  )
}

export default Homepage