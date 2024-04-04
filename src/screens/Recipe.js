import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const Recipe = () => {
  const [recipe, setRecipe] = useState(null)

  const history = useHistory()
  const params = useParams()


  

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await axios.get(`https://api.edamam.com/api/recipes/v2/${params?.id}?type=public&app_id=6b569144&app_key=4bfe434ebafe5d34070079508a254236`)
      console.log('recipe', response)
      setRecipe(response.data)
      // setRecipes(response.data?.hits || [])
      
    }
    if (!params.id) {
      history.replace('/home')
    } else {
      fetchRecipe()
    }
  }, [history, params.id])


  if (!recipe) {
    return null
  }


  return (
  <>
        <section>
        <div class="hotdog_and_egg_fried_rice">
          <div class="hotdog_and_egg_fried_rice_content">
            <h1 class="hotdog_and_egg_fried_rice_content_header">{recipe?.recipe?.label}</h1>
            <p class="hotdog_and_egg_fried_rice_content_text">Feed {recipe?.recipe?.yield}</p>
          </div>
          <img 
            src={recipe?.recipe?.images?.REGULAR?.url} 
            alt={recipe?.recipe?.label} 
            width={recipe?.recipe?.images?.REGULAR?.width} 
            height={recipe?.recipe?.images?.REGULAR?.width} 
            class="center fit" 
          />
        </div>
      </section>

      <section class="ingredients">
        <h3 class="ingredients">Ingredients</h3>
        
        <div class="ingredients_content">
          <div>
          <ul style={{ marginLeft: 78 }} class="ingredient_list">
            {
              recipe?.recipe?.ingredientLines.map((line) => (
                <li>
                  <label>
                    <input type="checkbox" />
                    {line}
                  </label>
                </li>
              ))
            }

          </ul>
          </div>
        </div>
      </section>

      <section class="instructions">
        <h3 class="instructions">Instructions</h3>
        <div style={{ marginLeft: 78}}>
          <p>Find Instructions <a target='_blank' href={recipe?.recipe?.url} rel="noreferrer">here</a>!</p>
        </div>
      </section>
  </>    
  )
}

export default Recipe