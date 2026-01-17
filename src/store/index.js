import { configureStore } from '@reduxjs/toolkit';
import heroReducer from './slices/heroSlice';
import featureReducer from './slices/featureSlice';
import dataSkiesReducer from './slices/dataSkiesSlice';
import sqlSectionReducer from './slices/sqlSectionSlice';
import pricingReducer from './slices/pricingSlice';
import howItWorksReducer from './slices/howItWorksSlice';
import mapSectionReducer from './slices/mapSectionSlice';
import faqReducer from './slices/faqSlice';
import interviewQuestionsReducer from './slices/interviewQuestionsSlice';
import subHeroReducer from './slices/subHeroSlice';

export const store = configureStore({
    reducer: {
        hero: heroReducer,
        feature: featureReducer,
        dataSkies: dataSkiesReducer,
        sqlSection: sqlSectionReducer,
        pricing: pricingReducer,
        howItWorks: howItWorksReducer,
        mapSection: mapSectionReducer,
        faq: faqReducer,
        interviewQuestions: interviewQuestionsReducer,
        subHero: subHeroReducer,
    },
});

export default store;
