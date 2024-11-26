class WishlistController {
constructor() {
  this.wishlists = new Map(); // Armazena as listas de desejos dos usuários
}

// Adiciona um produto à lista de desejos do usuário
add_to_wishlist(userId, product) {
  if (!this.wishlists.has(userId)) {
    this.wishlists.set(userId, []);
  }
  this.wishlists.get(userId).push(product);
  console.log(`Produto ${product.name} foi adicionado à lista de desejos do usuário ${userId}.`);
}

// Remove um produto da lista de desejos do usuário
remove_from_wishlist(userId, productId) {
  if (this.wishlists.has(userId)) {
    const wishlist = this.wishlists.get(userId);
    this.wishlists.set(userId, wishlist.filter(product => product.id !== productId));
    console.log(`Produto com id ${productId} foi removido da lista de desejos do usuário ${userId}.`);
  } else {
      console.log(`Usuário ${userId} não possui uma lista de desejos.`);
  }
}

// Visualiza a lista de desejos do usuário
view_wishlist(userId) {
  if (this.wishlists.has(userId)) {
    const wishlist = this.wishlists.get(userId);
      if (wishlist.length === 0) {
        console.log(`A lista de desejos do usuário ${userId} está vazia.`);
      } else {
        console.log(`Lista de desejos do usuário ${userId}:`);
        wishlist.forEach(product => {
          console.log(`ID: ${product.id}, Nome: ${product.name}`);
        });
      }
    } else {
      console.log(`Usuário ${userId} não possui uma lista de desejos.`);
    }
  }
}

// Exemplo de uso
const wishlistController = new WishlistController();
wishlistController.add_to_wishlist(1, { id: 101, name: 'Produto 1' });
wishlistController.add_to_wishlist(1, { id: 102, name: 'Produto 2' });
wishlistController.view_wishlist(1);
wishlistController.remove_from_wishlist(1, 101);
wishlistController.view_wishlist(1);