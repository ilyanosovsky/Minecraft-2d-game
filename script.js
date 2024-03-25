const Game = {
  world: [], // Array to store the game world tiles
  inventory: [], // Array to store the player's inventory

  init() {
    // Initialize the game world with predefined tiles
    const totalTiles = 20 * 10; // Total number of tiles (30 columns x 10 rows)
    const tileTypes = ["sky", "cloud", "ground"]; // Possible tile types
    const worldContainer = document.querySelector(".world-container"); // Get the world container element

    for (let i = 0; i < totalTiles; i++) {
      const randomTypeIndex = Math.floor(Math.random() * tileTypes.length); // Generate random index for tile type
      const type = tileTypes[randomTypeIndex]; // Randomly select a tile type
      const className = `world-tile ${type}`; // Define class name for the tile

      // Create a new tile element
      const tile = document.createElement("div");
      tile.className = className; // Set the class name for the tile
      worldContainer.appendChild(tile); // Append the tile to the world container

      // Add the tile to the world array
      this.world.push({ type, element: tile });
    }

    // Initialize event listeners for user interactions
  },

  selectTool(tool) {
    this.selectedTool = tool;
    console.log(`Tool selected: ${tool}`);
  },

  removeTile(tile) {
    if (tile && this.selectedTool) {
      // Check if tile is valid and selectedTool exists
      // Check if the selected tool is valid for removing the tile
      if (this.selectedTool === tile.type) {
        // Remove the tile from the world
        const index = this.world.findIndex((t) => t === tile);
        if (index !== -1) {
          this.world.splice(index, 1);
          console.log(`Tile removed: ${tile.type}`);
          // Add the removed tile to the inventory
          this.inventory.push(tile);
          console.log(`Tile added to inventory: ${tile.type}`);
        } else {
          console.log(`Tile not found in world: ${tile.type}`);
        }
      } else {
        console.log(
          `Selected tool (${this.selectedTool}) is not valid for removing tile (${tile.type})`
        );
      }
    } else {
      console.log("No tool selected");
    }
  },

  placeTile(tile) {
    if (tile && this.inventory.includes(tile)) {
      // Check if tile is valid and exists in inventory
      // Remove the tile from the inventory
      const index = this.inventory.findIndex((t) => t === tile);
      if (index !== -1) {
        const removedTile = this.inventory.splice(index, 1)[0]; // Remove and capture removed tile
        console.log(`Tile removed from inventory: ${removedTile.type}`);
        // Add the tile back into the world
        this.world.push(removedTile);
        console.log(`Tile placed back into world: ${removedTile.type}`);
      } else {
        console.log(`Tile not found in inventory: ${tile.type}`);
      }
    } else {
      console.log(`Invalid tile or tile not found in inventory`);
    }
  },

  resetWorld() {
    // Reset the game world to its initial state
    this.world = []; // Clear the world array
    this.init(); // Reinitialize the game world with random tiles
    console.log("Game world reset");
  },
};

// Initialize the game
Game.init();

document.querySelector(".reset-button").addEventListener("click", () => {
  Game.resetWorld();
});
