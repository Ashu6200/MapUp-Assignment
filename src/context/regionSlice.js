import { createSlice } from '@reduxjs/toolkit';
import getRegionInfo from './regionUtils';

// The initial state of the region data.
const initialState = {
    regionData: {
        name: "World",
        desc: `In its most general sense, the term "world" refers to the entirety of existence and reality, encompassing all entities and phenomena. Different fields conceptualize the world in various ways, viewing it as a singular entity or a plurality of worlds. Scientific cosmology defines the world as the totality of space and time, including everything that has been, is, and will be. Theories of modality consider possible worlds as complete and consistent ways things could have been. Phenomenology sees the world as the widest horizon, encompassing all possible experiences. Philosophy of mind contrasts the world with the mind, representing that which is perceived or known by the mind. Theology relates the world to God, either as God's creation or as interconnected with God. Religions often emphasize a spiritual world over the material world. A comprehensive representation of the world and our place in it is called a worldview. Cosmogony studies the origin of the world, while eschatology focuses on the end or last things.`,
        img: "https://th.bing.com/th/id/R.84f7dd5d038fbe4168d77aa95441f2fe?rik=FySMCmFle4D2pg&riu=http%3a%2f%2fwww.freelargeimages.com%2fwp-content%2fuploads%2f2014%2f11%2fWorld_map-4.gif&ehk=daP%2bC09roTQa7QVKCPg%2bs%2fRfOrQi48IaU4Ho9fH6Tec%3d&risl=&pid=ImgRaw&r=0",
        lat: 0,
        lng: 0,
        currency: '',
        speedUnits: '',
        distanceUnits: '',
        volumeUnits: '',
        timezone: '',
    },
};

// Create the region slice.
const regionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {
        // The 'loadRegion' action is responsible for updating the regionData in the state with new region information.
        loadRegion: (state, action) => {
            state.regionData = getRegionInfo(action.payload);
        },
    },
});

// Export the 'loadRegion' action for use in other parts of the application.
export const { loadRegion } = regionSlice.actions;

// Export the regionSlice reducer to be used in the Redux store.
export default regionSlice;