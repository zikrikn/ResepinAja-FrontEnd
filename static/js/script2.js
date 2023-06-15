let recipeData = []; // Data resep akan diinisialisasi dengan array kosong

const recipeList = document.getElementById("recipe-list");
const recipeDetail = document.getElementById("recipe-detail");
const overlay = document.getElementById("overlay");

function showRecipe(index) {
  const recipe = recipeData[index];
  recipeDetail.innerHTML = `
    <div class="recipe-header">
      <h2>${recipe.title}</h2>
      <button class="delete-button" onclick="deleteRecipe(${index})">Hapus</button>
    </div>
    <p><strong>Alat:</strong> ${recipe.tools}</p>
    <p><strong>Bahan:</strong> ${recipe.ingredients}</p>
    <p><strong>Cara Membuat:</strong> ${recipe.instructions}</p>
  `;
}

function deleteRecipe(index) {
  recipeData.splice(index, 1);
  clearRecipeDetail();
  showRecipeList();
  saveRecipesToFile();
}

function clearRecipeDetail() {
  recipeDetail.innerHTML = "<h2>Silakan pilih resep</h2>";
}

function showRecipeList() {
  recipeList.innerHTML = "";
  recipeData.forEach((recipe, index) => {
    const newRecipeItem = document.createElement("li");
    newRecipeItem.innerText = recipe.title;
    newRecipeItem.onclick = () => showRecipe(index);
    recipeList.appendChild(newRecipeItem);
  });
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

  titleInput.value = "";
  toolsInput.value = "";
  ingredientsInput.value = "";
  instructionsInput.value = "";

  hideAddRecipeForm();
  showRecipeList();
  saveRecipesToFile();
}

function saveRecipesToFile() {
  const recipesJSON = JSON.stringify(recipeData);
  localStorage.setItem("recipes", recipesJSON);
}

// Panggil fungsi showRecipeList() saat halaman dimuat untuk menampilkan daftar resep awal
window.addEventListener("DOMContentLoaded", () => {
  // Memuat data resep dari local storage
  const storedRecipes = localStorage.getItem("recipes");

  if (storedRecipes) {
    recipeData = JSON.parse(storedRecipes);
    showRecipeList();
  } else {
    // Memuat data resep dari file JSON menggunakan fetch()
    fetch("recipes.json")
      .then(response => response.json())
      .then(data => {
        recipeData = data;
        showRecipeList();
      })
      .catch(error => {
        console.error("Error:", error);
        // Jika gagal memuat data dari file JSON, tampilkan daftar resep awal yang telah dihardcode
        showRecipeList();
      });
  }
});