let recipeData = [
    {
      title: "Resep 1",
      tools: "Blender",
      ingredients: "Pisang, Susu, Es Krim",
      instructions: "Langkah-langkah resep 1..."
    },
    {
      title: "Resep 2",
      tools: "Panci, Sendok",
      ingredients: "Gula, Air",
      instructions: "Langkah-langkah resep 2..."
    },
    {
      title: "Resep 3",
      tools: "Oven",
      ingredients: "Tepung, Telur, Gula",
      instructions: "Langkah-langkah resep 3..."
    }
  ];
  
  const recipeList = document.getElementById("recipe-list");
  const recipeDetail = document.getElementById("recipe-detail");
  const overlay = document.getElementById("overlay");
  
  function showRecipe(index) {
    const recipe = recipeData[index];
    recipeDetail.innerHTML = `
      <h2>${recipe.title}</h2>
      <p><strong>Alat:</strong> ${recipe.tools}</p>
      <p><strong>Bahan:</strong> ${recipe.ingredients}</p>
      <p><strong>Cara Membuat:</strong> ${recipe.instructions}</p>
    `;
  }
  
  function showAddRecipeForm() {
    overlay.style.display = "flex";
  }
  
  function hideAddRecipeForm() {
    overlay.style.display = "none";
  }
  
  function addRecipe(event) {
    event.preventDefault();
  
    const titleInput = document.getElementById("recipe-title");
    const toolsInput = document.getElementById("recipe-tools");
    const ingredientsInput = document.getElementById("recipe-ingredients");
    const instructionsInput = document.getElementById("recipe-instructions");
  
    const newRecipe = {
      title: titleInput.value,
      tools: toolsInput.value,
      ingredients: ingredientsInput.value,
      instructions: instructionsInput.value
    };
  
    recipeData.push(newRecipe);
  
    const newRecipeIndex = recipeData.length - 1;
    const newRecipeItem = document.createElement("li");
    newRecipeItem.innerText = newRecipe.title;
    newRecipeItem.onclick = () => showRecipe(newRecipeIndex);
  
    recipeList.appendChild(newRecipeItem);
  
    titleInput.value = "";
    toolsInput.value = "";
    ingredientsInput.value = "";
    instructionsInput.value = "";
  
    hideAddRecipeForm();
  }
  