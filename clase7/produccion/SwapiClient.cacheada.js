// 1. Precargar todos los datos de una (Podemos probar con SWAPI)
async function buildApiCache(mapUriToCache) {
  const api_index = {
    berries: [],
    berryFirmness: [],
    berryFalvors: [],
    items: [],
    types: [],
    languages: [],
    contestTypes: []
  }
}

buildApiCache({
  berries: { uri: 'https://pokeapi.co/api/v2/berry', depends: ['berryFirmness', 'berryFalvors', 'items', 'types'] },
  berryFirmness: { uri: 'https://pokeapi.co/api/v2/berry-firmness', depends: ['berry', 'languages'] },
  berryFalvors: { uri: 'https://pokeapi.co/api/v2/berry-flavor/', depends: ['berry', 'languages', 'contestTypes'] },
  items: [],
  types: [],
  languages: [],
  contestTypes: []
})