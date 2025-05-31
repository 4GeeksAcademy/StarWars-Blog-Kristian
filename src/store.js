export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters: [],
    planets: [],
    vehicles: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'set_characters':
      const { characters } = action.payload
      return {
        ...store,
        characters: characters
      };
    case 'set_planets':
      const { planets } = action.payload
      return {
        ...store,
        planets: planets
      };
    case 'set_vehicles':
      const { vehicles } = action.payload
      return {
        ... store,
        vehicles: vehicles
      };
    case 'add_favorite':
      const { newFavorite } = action.payload
      return {
        ... store,
        favorites: {... store.favorites, newFavorite}
      }

    default:
      throw Error('Unknown action.');
  }

}
