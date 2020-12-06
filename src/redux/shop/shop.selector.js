import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    mens: 4,
    womens: 5
}

const selectShop = state => state.shop;
export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShop],
    (collections) => Object.keys(collections).map(key => collections[key])
)

// export const selectCollection = collectionUrlParams => createSelector(
//     [selectCollections],
//     collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParams])
// )

export const selectCollection = memoize((collectionUrlParams) =>
  createSelector(
    [selectCollections],
    (collections) => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParams])//collections[collectionUrlParam]
  )
);