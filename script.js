const Game = {
  world: [], // Array to store the game world tiles
  inventory: [], // Array to store the player's inventory

  init() {
    // Initialize the game world with predefined tiles
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
    // Reinitialize the game world with predefined tiles
    // (You can implement this logic based on your specific requirements)
    console.log("Game world reset");
  },
};

// Initialize the game
Game.init();

// Select a tool
Game.selectTool("axe");

// Remove a tile from the world
const tileToRemove = Game.world[0]; // Assuming the first tile in the world array
Game.removeTile(tileToRemove);

// Place a tile back into the world from the inventory
const tileToPlace = Game.inventory[0]; // Assuming the first tile in the inventory array
Game.placeTile(tileToPlace);

// Reset the game world
Game.resetWorld();
